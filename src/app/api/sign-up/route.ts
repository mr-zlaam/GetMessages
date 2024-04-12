import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/users.model";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmails";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await req.json();
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Error while registring the user",
      },
      { status: 500 }
    );
  }
}
