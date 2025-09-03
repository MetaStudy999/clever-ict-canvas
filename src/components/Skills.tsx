import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", "Angular",
        "Tailwind CSS", "SCSS", "Styled Components", "Framer Motion"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Python", "Java", "Express.js", "FastAPI",
        "GraphQL", "REST APIs", "Microservices", "WebSocket"
      ]
    },
    {
      title: "Database",
      skills: [
        "PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase",
        "Prisma", "TypeORM", "Mongoose", "Supabase"
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Docker", "AWS", "Vercel", "Git", "GitHub Actions",
        "Jest", "Cypress", "Webpack", "Vite"
      ]
    },
    {
      title: "Mobile",
      skills: [
        "React Native", "Flutter", "Expo", "iOS", "Android",
        "PWA", "Cordova", "Ionic"
      ]
    },
    {
      title: "Design & UI/UX",
      skills: [
        "Figma", "Adobe XD", "Photoshop", "Responsive Design",
        "User Experience", "Prototyping", "Design Systems"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            다양한 기술 스택과 도구들을 활용하여 완성도 높은 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 text-center text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
                    <span className="text-foreground text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technical Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: "JavaScript/TypeScript", level: 95 },
              { skill: "React/Next.js", level: 90 },
              { skill: "Node.js/Express", level: 85 },
              { skill: "Database Design", level: 80 },
              { skill: "Cloud Services (AWS)", level: 75 },
              { skill: "Mobile Development", level: 70 }
            ].map((item, index) => (
              <div key={index} className="bg-card/20 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;