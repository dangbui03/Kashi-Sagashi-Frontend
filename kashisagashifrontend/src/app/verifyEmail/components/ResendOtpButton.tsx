"use client";
import { useFormStatus } from "react-dom";
import ResendOtp from "@/app/actions/resendOtp.action";

type Props = {
  error: boolean;
  resend: boolean;
};

export function ResendOtpButton({ error, resend }: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={!error || pending}
      className=" bg-amber-600 disabled:brightness-50 disabled:cursor-not-allowed rounded-lg"
      formAction={async (formData) => {
        const res = await ResendOtp(formData);
        if (res.email) {
          alert(`OTP has been sended to ${res.email}`);
        } else {
          alert(res.message);
        }
      }}
    >
      {pending && resend ? "Resending" : "Resend OTP"}
    </button>
  );
}
