import { connectMongoose } from "../../../../lib/mongodb";
import Order from "../../../../models/order";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(req) {
  try {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectMongoose();
    const { items, paymentMethod } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { message: "No items in the order." },
        { status: 400 }
      );
    }

    const totalAmount = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    if (
      !paymentMethod ||
      (paymentMethod !== "credit" && paymentMethod !== "cash")
    ) {
      return NextResponse.json(
        { message: "Invalid payment method." },
        { status: 400 }
      );
    }

    const newOrder = new Order({
      userID: token.sub,
      items,
      totalAmount,
      paymentMethod,
    });

    await newOrder.save();

    return NextResponse.json(
      { message: "Order created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectMongoose();

    const orders = await Order.find({ userID: token.sub });
    if (!orders || orders.length === 0) {
      return NextResponse.json({ message: "Not order here" }, { status: 404 });
    }

    const transformedOrders = orders.map((order) => ({
      ...order.toObject(),
      orderID: order._id.toString(),
      // You can remove _id if you don't want it in the response
    }));

    return NextResponse.json(
      {
        orders: transformedOrders,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
