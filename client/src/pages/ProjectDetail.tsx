import { useRoute, Link } from "wouter";
import { projects } from "../../../shared/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Zap, Brain, Volume2, Code, Lightbulb, CheckCircle } from "lucide-react";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  
  if (!match) return <NotFound />;

  const project = projects.find(p => p.id === params.id);

  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Aurora Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <Link href="/">
              <Button variant="ghost" className="group pl-0 hover:bg-transparent hover:text-primary">
                <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 space-y-8">
          <div className="max-w-4xl">
            <div className="space-y-4 mb-8">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            <a href="https://github.com/leeyerin2697/ManualSummaryApp" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full px-8" size="lg">
                View on GitHub <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </section>

        {/* Project Image */}
        <section className="container mx-auto px-4 py-12 animate-fade-in-up">
          {project.id === 'manual-processing' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-64 md:h-80">
                <img 
                  src="/images/project1-thumb-1.jpg" 
                  alt="Project image 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-64 md:h-80">
                <img 
                  src="/images/project1-detail-new.jpg" 
                  alt="Project image 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-96 md:h-[500px]">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-24">
            
            {/* Motivation Section */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-4xl font-bold mb-4">Motivation & Problem Definition</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mb-8" />
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Many user manuals have small, dense text, making them difficult and tiring to read. Some manuals are also written in English, creating a language barrier for Korean users.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
                  <h3 className="text-xl font-semibold">Goal of this Project</h3>
                  <p className="text-muted-foreground">
                    To develop a system that extracts text, summarizes important parts, translates English text into Korean, and converts the final result into audio.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Why it Matters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: Zap, text: "Helps users understand long manuals more quickly" },
                      { icon: Volume2, text: "Improves accessibility with audio output" },
                      { icon: Brain, text: "Removes language barriers through automatic translation" },
                      { icon: Code, text: "Integrates OCR, summarization, translation, and TTS into one pipeline" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                        <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Method Section */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-4xl font-bold mb-4">Method</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mb-8" />
              </div>

              {/* Pipeline Visualization */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-lg font-semibold mb-6">Pipeline Architecture</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {['OCR', 'Summarization & Translation', 'TTS'].map((step, i) => (
                    <div key={i} className="flex items-center w-full md:w-auto">
                      <div className="bg-primary/20 border border-primary/50 rounded-lg px-6 py-3 text-center font-semibold whitespace-nowrap">
                        {step}
                      </div>
                      {i < 2 && <div className="hidden md:block h-px w-8 bg-primary/50 mx-2" />}
                      {i < 2 && <div className="md:hidden h-8 w-px bg-primary/50 my-2" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Model Selection */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Model Selection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: 'Tesseract OCR', desc: 'Accurate text extraction from manual images' },
                    { name: 'DeepSeek Chat API', desc: 'Korean summarization' },
                    { name: 'gTTS', desc: 'Audio synthesis' }
                  ].map((model, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                      <h4 className="font-semibold text-primary">{model.name}</h4>
                      <p className="text-sm text-muted-foreground">{model.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Environment & Development */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Environment Setup</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 font-mono text-sm">
                    <p className="text-muted-foreground">Anaconda virtual environment</p>
                    <p className="text-muted-foreground">Python packages via pip</p>
                    <p className="text-muted-foreground">Tesseract OCR (local installation)</p>
                    <p className="text-muted-foreground">DeepSeek API key configuration</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">File Structure</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2 font-mono text-sm">
                    <p><span className="text-primary">📄</span> ocr.py</p>
                    <p><span className="text-primary">📄</span> summarizer.py</p>
                    <p><span className="text-primary">📄</span> tts.py</p>
                    <p><span className="text-primary">📄</span> main.py</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
                <h3 className="font-semibold">Distribution</h3>
                <p className="text-muted-foreground">Full source code available on GitHub with a modular, ready-to-run framework for document processing automation.</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Results Section */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-4xl font-bold mb-4">Results</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mb-8" />
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: 'OCR Module',
                    items: [
                      'Accurately recognized small English text in manual images',
                      'Lower recognition performance for Korean, Chinese, and Japanese',
                      'Blurry or low-quality images reduced accuracy'
                    ]
                  },
                  {
                    title: 'Summarization Module',
                    items: [
                      'DeepSeek API generated concise, instruction-focused Korean summaries',
                      'Consistently captured essential instructions and cautions'
                    ]
                  },
                  {
                    title: 'TTS Module',
                    items: [
                      'gTTS produced reliable audio output',
                      'Generated Korean speech with room for naturalness improvement'
                    ]
                  },
                  {
                    title: 'Pipeline Integration',
                    items: [
                      'Full OCR → Summarization → TTS pipeline ran consistently',
                      'Demonstrated stable cross-module integration'
                    ]
                  }
                ].map((section, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      {section.title}
                    </h3>
                    <ul className="space-y-2 ml-7">
                      {section.items.map((item, j) => (
                        <li key={j} className="text-muted-foreground flex gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Results Image */}
              <a href="https://youtu.be/SUHL4aNiLAk" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-96 md:h-[500px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
                  <img 
                    src="/images/project1-result-new.gif" 
                    alt="Results visualization - Click to watch demo" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/0 group-hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Discussion Section */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-4xl font-bold mb-4">Discussion & Future Work</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mb-8" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Key Takeaways</h3>
                  <div className="space-y-3">
                    {[
                      'OCR module reads small English text accurately',
                      'DeepSeek API consistently produces concise Korean summaries',
                      'Integrated pipeline runs smoothly and demonstrates functional automation'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-white/5 rounded-lg">
                        <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Future Improvements</h3>
                  <div className="space-y-3">
                    {[
                      'Improve multilingual OCR with language-specific models',
                      'Enhance TTS quality using neural TTS engine',
                      'Add support for multiple output languages'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-white/5 rounded-lg">
                        <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* References Section */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-4xl font-bold mb-4">References & Acknowledgement</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mb-8" />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <ul className="space-y-3">
                  {[
                    'Tesseract OCR Documentation',
                    'DeepSeek API Documentation',
                    'gTTS (Google Text-to-Speech) Library',
                    'Python Pillow (PIL) Documentation'
                  ].map((ref, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary">→</span>
                      <span>{ref}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 rounded-2xl p-12 text-center space-y-6 animate-fade-in-up">
              <h3 className="text-3xl font-bold">Ready to Explore?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Check out the full source code and documentation on GitHub.
              </p>
              <a href="https://github.com/leeyerin2697/ManualSummaryApp" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full px-8" size="lg">
                  View Source Code <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </div>
  );
}
