import { resend } from "@/lib/resend";
import VerificationEmail from "../../Emails/VerificationEmail";
import { type ApiResponseType } from "@/types/ApiResponse";
export async function sendVerificationEmail(
  email: string,
  username: string,
  otp: string
): Promise<ApiResponseType> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verification Code",
      react: VerificationEmail({ username, otp }),
    });
    return {
      success: true,
      message: "Verification email send successfully",
    };
  } catch (emailError: any) {
    console.log("Error while sending the email", emailError.message);
    return {
      success: false,
      message: emailError.message,
    };
  }
}
