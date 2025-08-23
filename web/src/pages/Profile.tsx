import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getUserProfile, updateUserProfile } from '@/service/userService'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Camera, 
  Phone, 
  Mail, 
  Calendar,
  MapPin,
  Edit,
  LogOut,
  Bell,
  Lock,
  MessageCircle
} from "lucide-react";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  location?: string;
  createdAt?: string;
  bio?: string;
  phone: string
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState<UserProfile | null>(null);

    useEffect(() => {
        getUserProfile('68a933bf7c44003cba2e6783')
          .then(data => setProfileData(data))
          .catch(err => console.error("Lỗi load hồ sơ:", err))
      }, []);

  const handleSave = async () => {
    if(!profileData) return
    try {
      const updated = await updateUserProfile(profileData.id, profileData)
      setProfileData(updated)
      setIsEditing(false)
      console.log('Update success')
    } catch (error) {
      console.log('Failed')
    }
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-card border-b shadow-soft">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-semibold">Hồ sơ của tôi</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Đăng xuất
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Profile Header Card */}
        <Card className="shadow-medium border-0">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profileData?.avatarUrl} alt="Profile picture" />
                  <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
                    NA
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full shadow-medium"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-3">
                  <h2 className="text-2xl font-bold">{profileData?.name}</h2>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Đang hoạt động
                  </Badge>
                </div>
                <p className="text-muted-foreground">{profileData?.bio}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{profileData?.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{profileData?.createdAt}</span>
                  </div>
                </div>
              </div>

              <Button
                variant={isEditing ? "accent" : "outline"}
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit className="h-4 w-4 mr-2" />
                {isEditing ? "Hủy" : "Chỉnh sửa"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <span>Thông tin cá nhân</span>
              </CardTitle>
              <CardDescription>
                Quản lý thông tin cá nhân của bạn
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Họ và tên</Label>
                <Input
                  id="fullName"
                  value={profileData?.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  disabled={!isEditing}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Tiểu sử</Label>
                <Input
                  id="bio"
                  value={profileData?.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  disabled={!isEditing}
                  placeholder="Nói gì đó về bản thân..."
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Vị trí</Label>
                <Input
                  id="location"
                  value={profileData?.location}
                  onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                  disabled={!isEditing}
                  className="h-11"
                />
              </div>

              {isEditing && (
                <Button onClick={handleSave} className="w-full">
                  Lưu thay đổi
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <span>Liên hệ</span>
              </CardTitle>
              <CardDescription>
                Thông tin liên hệ và bảo mật
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    value={profileData?.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    disabled={!isEditing}
                    className="h-11 flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    value={profileData?.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    disabled={!isEditing}
                    className="h-11 flex-1"
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start h-11">
                  <Lock className="h-4 w-4 mr-3" />
                  Đổi mật khẩu
                </Button>
                <Button variant="outline" className="w-full justify-start h-11">
                  <Bell className="h-4 w-4 mr-3" />
                  Cài đặt thông báo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;