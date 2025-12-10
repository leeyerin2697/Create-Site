import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "../../../shared/projects";
import { Link } from "wouter";
import { ArrowRight, Github, Mail, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative" style={{backgroundColor: '#394F49'}}>
      {/* Aurora Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/30 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[100px] animate-pulse delay-2000" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-4 py-16 space-y-32">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8 pt-20">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src="/images/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
              Yerin Lee
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed" style={{fontSize: '19px'}}>
              I am an undergraduate student at KENTECH studying energy and future technologies. I’m interested in SBSP (Space-Based Solar Power), and I hope to become an engineer who works on the technical challenges needed to make it possible in the future.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/leeyerin2697" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://www.youtube.com/@%EC%97%90%EB%84%88%EC%A7%80%EA%B3%B5%ED%95%99%EB%B6%80" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </Button>
            </a>
            <a href="mailto:leeyerin2697@kentech.ac.kr">
              <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent ml-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <div className="group cursor-pointer">
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50">
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        View Project <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 pb-16 text-center text-muted-foreground">
          <p>&copy; 2025 Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
