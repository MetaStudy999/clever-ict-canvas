import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "메시지가 전송되었습니다!",
      description: "빠른 시일 내에 답변드리겠습니다.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            프로젝트 협업이나 기술 상담이 필요하시면 언제든 연락해 주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                연락처 정보
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">이메일</p>
                    <p className="text-muted-foreground">developer@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">전화번호</p>
                    <p className="text-muted-foreground">+82 10-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">위치</p>
                    <p className="text-muted-foreground">서울, 대한민국</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                소셜 미디어
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  이름
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/50"
                  placeholder="성함을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  이메일
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50"
                  placeholder="이메일을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  메시지
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 resize-none"
                  placeholder="메시지를 입력해주세요"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                <Send className="mr-2 h-5 w-5" />
                메시지 보내기
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;