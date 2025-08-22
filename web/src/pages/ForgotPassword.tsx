import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ArrowLeft, Mail } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset request for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo/Brand */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="bg-gradient-primary p-4 rounded-2xl shadow-strong">
              <MessageCircle className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Quên mật khẩu?</h1>
          <p className="text-muted-foreground">Đừng lo lắng, chúng tôi sẽ giúp bạn</p>
        </div>

        {/* Password Reset Form */}
        <Card className="shadow-medium border-0">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-xl">
              {isSubmitted ? "Kiểm tra email" : "Khôi phục mật khẩu"}
            </CardTitle>
            <CardDescription>
              {isSubmitted
                ? "Chúng tôi đã gửi hướng dẫn khôi phục mật khẩu đến email của bạn"
                : "Nhập email để nhận hướng dẫn khôi phục mật khẩu"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Nhập địa chỉ email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-base font-medium">
                  Gửi hướng dẫn khôi phục
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Nếu không thấy email, vui lòng kiểm tra thư mục spam
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full h-12 text-base font-medium"
                >
                  Gửi lại email
                </Button>
              </div>
            )}

            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="inline-flex items-center text-sm text-primary hover:text-primary-hover transition-smooth font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại đăng nhập
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;