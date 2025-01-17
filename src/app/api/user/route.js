import { connectMongoose } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// Named export for the GET method
export async function GET(req) {
  try {
    // Get the session information
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Connect to the database
    await connectMongoose();

    // Find the user by the username from the session
    const user = await User.findById(token.sub);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Return the user information

    return NextResponse.json(
      {
        email: user.email,
        username: user.username,
        name: user.name,
        address: user.address,
        phone: user.phone,
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

export async function PUT(req) {
  try {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectMongoose();
    const { name, phone, address } = await req.json();
    const user = await User.findByIdAndUpdate(
      token.sub,
      { name, phone, address },
      { new: true, runValidators: true }
    );
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
