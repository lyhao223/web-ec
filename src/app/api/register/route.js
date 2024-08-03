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

    const exstingEmail = await User.findOne({ email });
    if (exstingEmail)
      return NextResponse.json(
        { field: "email", dmessage: "Email already exists" },
        { status: 409 }
      );

    const exstingUsername = await User.findOne({ username });
    if (exstingUsername)
      return NextResponse.json(
        { field: "username", message: "Username already exists" },
        { status: 409 }
      );

    const exstingPhone = await User.findOne({ phone });
    if (exstingPhone)
      return NextResponse.json(
        { field: "phone", message: "Phone already exists" },
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
