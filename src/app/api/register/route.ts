// src/app/api/register/route.ts
import { NextResponse } from "next/server";
import { connectMongoose } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

interface IUser {
    email: string;
    username: string;
    password: string;
    name: {
        firstName: string;
        lastName: string;
    }
    address: {
        city: string;
        street: string;
    }
    phone: string;
}

export async function POST(req: Request) {
    try {        
        const { email, username, password, name: { firstName, lastName }, address: {city, street}, phone } = await req.json() as IUser;
        const hashedPassword = await bcrypt.hash(password, 12);
        const exstingUser = await User.findOne({email} || {username} || {phone});
        if(exstingUser) return NextResponse.json({ message: "User already exists" }, { status: 409 });
        await connectMongoose();
        await User.create({ email, username, password: hashedPassword, name: { firstName, lastName }, address: {city, street}, phone });

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
        console.log("User registration failed", error);
        return NextResponse.json({ message: "User registration failed" }, { status: 400 });
    }
}
