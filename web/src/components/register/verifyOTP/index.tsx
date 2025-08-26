import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button";
import { useOtpVerificationStore } from "@/stores/otpVerification.store";
import { verifyEmailForSignUp } from "@/service/userService";

const VerifyOTP = () => {
    const [value, setValue] = React.useState("")

    // state for verify otp
    const email = useOtpVerificationStore(state => state.email);
    const setEmail = useOtpVerificationStore(state => state.setEmail);

    const handleSubmit = async () => {
        try {
            const response = await verifyEmailForSignUp({
                email: email,
                otpCode: value
            });
            // if success, alert message -> delete email in store
            if (response.result.message) {
                alert(response.result.message);
                setEmail(null);
            }
        } catch (error) {
            alert("Xác thực thất bại. Vui lòng thử lại.");
        }
    }

    return <>
        <Card>
            <CardHeader>
                <CardTitle>Xác thực OTP</CardTitle>
                <CardDescription>Vui lòng nhập mã OTP đã được gửi đến email của bạn.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="otp-container mb-4 flex flex-col items-center gap-4">
                    <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)} className="mx-auto">
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    <div className="text-center text-sm">
                        {value === "" ? (
                        <>Vui long nhap OTP.</>
                        ) : (
                        <>Ban dang nhap: {value}</>
                        )}
                    </div>
                </div>
                <div className="save-btn">
                    <Button
                        onClick={handleSubmit} 
                        className="w-full"
                    >
                        Xác thực
                    </Button>
                </div>
            </CardContent>

            
        </Card>
    </>
}

export default VerifyOTP