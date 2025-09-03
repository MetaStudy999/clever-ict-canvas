import { Code, Database, Globe, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development", 
      description: "Node.js, Python, PostgreSQL, MongoDB"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Technologies",
      description: "REST APIs, GraphQL, Docker, AWS"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS/Android"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            5년 이상의 경험을 가진 풀스택 개발자로, 사용자 중심의 혁신적인 솔루션을 만드는 것을 좋아합니다.
            최신 기술 트렌드를 끊임없이 학습하며, 팀과의 협업을 통해 더 나은 결과를 만들어내고자 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex justify-center mb-4 text-primary group-hover:animate-glow">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;