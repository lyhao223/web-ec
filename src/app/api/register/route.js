// src/app/api/register/route.ts
import { NextResponse } from "next/server";
import { connectMongoose } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req, res) {
  try {
    await connectMongoose();
    const {
      email,
      username,
      password,
      name,
      address: { city, street },
      phone,
    } = await req.json();
    const exstingUser = await User.findOne({
      $or: [{ email }, { username }, { phone }],
    });
    if (exstingUser)
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({
      email,
      username,
      password: hashedPassword,
      name,
      address: { city, street },
      phone,
    });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("User registration failed", error);
    return NextResponse.json(
      { message: "User registration failed" },
      { status: 400 }
    );
  }
}
