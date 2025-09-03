import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "React와 Node.js로 구축된 완전한 전자상거래 솔루션. 결제 시스템, 재고 관리, 관리자 대시보드 포함.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "팀 협업을 위한 실시간 작업 관리 애플리케이션. 드래그 앤 드롭, 실시간 알림, 프로젝트 추적 기능.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "AI Dashboard",
      description: "머신러닝 모델의 성능을 모니터링하고 분석하는 대시보드. 실시간 데이터 시각화와 예측 분석.",
      tech: ["Vue.js", "Python", "TensorFlow", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Mobile Banking App",
      description: "React Native로 개발된 모바일 뱅킹 애플리케이션. 생체인증, 실시간 거래, 가계부 기능.",
      tech: ["React Native", "Firebase", "Redux", "Biometrics"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            다양한 기술 스택과 도메인에서 진행한 주요 프로젝트들을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      코드
                    </a>
                  </Button>
                  
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      데모
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;