import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  Users, 
  Shield, 
  Zap, 
  Star,
  ArrowRight,
  Phone,
  Video,
  Image as ImageIcon
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Tin nhắn nhanh",
      description: "Gửi tin nhắn tức thì với bạn bè và gia đình"
    },
    {
      icon: Phone,
      title: "Cuộc gọi HD",
      description: "Chất lượng cuộc gọi siêu nét, không giới hạn thời gian"
    },
    {
      icon: Video,
      title: "Video call",
      description: "Gặp mặt trực tuyến với hình ảnh sắc nét"
    },
    {
      icon: ImageIcon,
      title: "Chia sẻ media",
      description: "Gửi hình ảnh, video và file dễ dàng"
    },
    {
      icon: Users,
      title: "Nhóm chat",
      description: "Tạo nhóm với nhiều thành viên, quản lý dễ dàng"
    },
    {
      icon: Shield,
      title: "Bảo mật cao",
      description: "Mã hóa end-to-end, bảo vệ quyền riêng tư"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b shadow-soft sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-xl shadow-medium">
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">ZaloChat</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/profile" className="text-muted-foreground hover:text-foreground transition-smooth">
              Hồ sơ
            </Link>
            <Link to="/login">
              <Button variant="outline">Đăng nhập</Button>
            </Link>
            <Link to="/register">
              <Button>Đăng ký</Button>
            </Link>
          </nav>
          
          <div className="md:hidden">
            <Link to="/login">
              <Button size="sm">Đăng nhập</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Kết nối
              <span className="bg-gradient-primary bg-clip-text text-transparent"> mọi lúc</span>,
              <br />mọi nơi
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ứng dụng nhắn tin hiện đại với nhiều tính năng thú vị. 
              Trò chuyện, gọi điện, video call và chia sẻ khoảnh khắc cùng những người thân yêu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="h-12 px-8 text-base font-medium">
                Bắt đầu ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium">
                Đã có tài khoản?
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-accent fill-current" />
              <span>4.8/5 đánh giá</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>10M+ người dùng</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="h-4 w-4" />
              <span>Nhanh & Bảo mật</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tính năng nổi bật
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trải nghiệm nhắn tin hoàn toàn mới với những tính năng hiện đại và tiện ích
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-medium border-0 hover:shadow-strong transition-smooth">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-gradient-primary p-4 rounded-2xl w-fit shadow-soft">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-strong border-0 bg-gradient-primary text-primary-foreground">
            <CardContent className="text-center py-16 px-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Sẵn sàng trò chuyện?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Tham gia cộng đồng hàng triệu người dùng đang tin tưởng sử dụng ZaloChat
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/register">
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="h-12 px-8 text-base font-medium bg-card text-card-foreground hover:bg-card/90"
                  >
                    Tạo tài khoản miễn phí
                  </Button>
                </Link>
                <Link to="/login">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-12 px-8 text-base font-medium border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Đăng nhập ngay
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-primary p-2 rounded-xl">
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">ZaloChat</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 ZaloChat. Tất cả quyền được bảo lưu. Được phát triển với ❤️ tại Việt Nam.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
