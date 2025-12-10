import { useRoute, Link } from "wouter";
import { projects } from "../../../shared/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Zap, Brain, Volume2, Code, Lightbulb, CheckCircle, Database, BarChart3, TrendingUp } from "lucide-react";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  
  if (!match) return <NotFound />;

  const project = projects.find(p => p.id === params.id);

  if (!project) return <NotFound />;

  // Render different content based on project ID
  const renderProjectContent = () => {
    if (project.id === 'manual-processing') {
      return <ManualProcessingContent project={project} />;
    } else if (project.id === 'hydropower-ml') {
      return <HydropowerMLContent project={project} />;
    }
    return null;
  };

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
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
              {project.id === 'hydropower-ml' && (
                <p className="text-sm text-muted-foreground italic">
                  Author: Yerin Lee (20240381) | KENTECH, School of Energy Engineering
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            <a href={project.link || "https://github.com/leeyerin2697"} target="_blank" rel="noopener noreferrer">
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
          ) : project.id === 'hydropower-ml' ? (
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/images/hydro-dam.png" 
                  alt="Hydropower system diagram" 
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/images/project2-poster.jpg" 
                  alt="Project poster" 
                  className="w-full h-auto"
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

        {/* Dynamic Project Content */}
        {renderProjectContent()}

        {/* Footer */}
        <footer className="border-t border-white/10 mt-32 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

// Manual Processing Project Content
function ManualProcessingContent({ project }: { project: any }) {
  return (
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

        {/* Demonstration Section */}
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-4xl font-bold mb-4">Demonstration</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mb-8" />
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <img 
              src="/images/project1-result-new.gif" 
              alt="OCR-Based Manual Summarizer Demonstration GIF" 
              className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
            />
            <p className="text-center text-muted-foreground">
              <strong>Full Demonstration Video:</strong> 
              <a href="https://youtu.be/SUHL4aNiLAk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">
                Watch on YouTube
              </a>
            </p>
          </div>
        </div>

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
                  'gTTS produced reliable Korean audio output',
                  'Speech naturalness could be improved with neural TTS'
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
                <h3 className="text-lg font-semibold text-primary">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Discussion Section */}
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-4xl font-bold mb-4">Discussion & Future Work</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mb-8" />
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
              <h3 className="text-xl font-semibold">Key Takeaways</h3>
              <ul className="space-y-2">
                {[
                  'OCR module reads small English text accurately',
                  'Summarization using DeepSeek API consistently produces concise and relevant Korean summaries',
                  'The integrated pipeline runs smoothly and demonstrates a functional automation workflow'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
              <h3 className="text-xl font-semibold">Future Improvements</h3>
              <ul className="space-y-2">
                {[
                  'Improve multilingual OCR performance by adding language-specific models',
                  'Enhance TTS quality using a more natural neural TTS engine',
                  'Add support for multiple output languages (summary + audio)',
                  'Develop a user-friendly UI for batch document processing'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <ArrowLeft className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 rotate-180" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hydropower ML Project Content
function HydropowerMLContent({ project }: { project: any }) {
  return (
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
              Hydropower generation depends heavily on how much water flows through the turbine (turbine discharge). However, turbine discharge is influenced by multiple hydrological and operational factors, and real dam operations are nonlinear and complex.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
              <h3 className="text-xl font-semibold">Goal of this Project</h3>
              <p className="text-muted-foreground">
                To build a machine learning model that predicts turbine discharge based on real K-water dam data and evaluate which model performs best.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why it Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Database, text: "Helps understand operational behavior of dam" },
                  { icon: TrendingUp, text: "Supports hydropower forecasting & operation planning" },
                  { icon: Brain, text: "Demonstrates how ML handles real-world nonlinear systems" }
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

          {/* Idea & Motivation */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-primary">Idea & Motivation</h3>
            <p className="text-muted-foreground">
              Hydropower output depends on turbine discharge. The goal is to build a model that predicts turbine discharge using real dam operation data.
            </p>
          </div>

          {/* Dataset Construction */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-primary">Dataset Construction</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Dataset:</strong> K-water Daily Hydrological Data (421,451 entries), CSV format
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Preprocessing:</p>
                <ul className="space-y-1 ml-4">
                  {[
                    'Remove missing data',
                    'Filter out nonphysical values (≤0)',
                    'Randomly sample 50,000 rows',
                    'Input (X): hydrological & operational variables',
                    'Output (y): turbine discharge'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Model Development */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-primary">Model Development</h3>
            <p className="text-muted-foreground mb-3">Compared three models:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'Linear Regression',
                'Polynomial Regression (degree = 2)',
                'Random Forest Regressor'
              ].map((model, i) => (
                <div key={i} className="bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-center font-semibold text-sm">
                  {model}
                </div>
              ))}
            </div>
          </div>

          {/* Result Analysis */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-primary">Result Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Trained and tested with 80/20 split',
                'Evaluated performance using RMSE, MAE, R²',
                'Scatter plots (Actual vs Predicted)',
                'Error comparison charts',
                'Feature importance ranking',
                'Hyperparameter experiment'
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Distribution */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-primary">Distribution</h3>
            <p className="text-muted-foreground">
              Full code and analysis provided via GitHub. Random Forest achieves R² &gt; 0.95, providing a foundation for hydropower operation prediction tools.
            </p>
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
            {/* Overview Paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Random Forest Regressor significantly outperformed the simpler Linear and Polynomial Regression models, achieving a high predictive accuracy with an R² value greater than 0.95. The results showed that increasing the tree depth generally improved the model's accuracy. Furthermore, the feature importance analysis clearly identified total discharge, storage volume, and water level as the top three most influential factors in predicting turbine discharge.
            </p>

            {/* Images */}
            <div className="grid grid-cols-3 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl h-auto">
                <img src="/images/linear_actual_vs_pred.png" alt="Actual vs Predicted Scatter Plot" className="w-full h-full object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl h-auto">
                <img src="/images/polynomial_actual_vs_pred.png" alt="Feature Importance Ranking" className="w-full h-full object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl h-auto">
                <img src="/images/random_forest_actual_vs_pred.png" alt="Error Comparison Chart" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Hyperparameter Tuning Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
              <h3 className="text-xl font-semibold">Random Forest Hyperparameter Tuning</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left table-auto">
                  <thead>
                    <tr className="border-b border-white/10 text-primary">
                      <th className="py-2 px-4">n_estimators</th>
                      <th className="py-2 px-4">max_depth</th>
                      <th className="py-2 px-4">RMSE</th>
                      <th className="py-2 px-4">R²</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { n: 10, d: 5, rmse: 25.26, r2: 0.816, best: false },
                      { n: 10, d: 10, rmse: 12.88, r2: 0.952, best: false },
                      { n: 10, d: 20, rmse: 12.11, r2: 0.958, best: false },
                      { n: 50, d: 5, rmse: 25.30, r2: 0.815, best: false },
                      { n: 50, d: 10, rmse: 12.71, r2: 0.953, best: false },
                      { n: 50, d: 20, rmse: 11.48, r2: 0.962, best: true }, // Best
                      { n: 100, d: 5, rmse: 25.45, r2: 0.813, best: false },
                      { n: 100, d: 10, rmse: 12.75, r2: 0.953, best: false },
                      { n: 100, d: 20, rmse: 11.56, r2: 0.961, best: false },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-white/5 ${row.best ? 'bg-primary/20 font-bold text-primary' : 'text-muted-foreground'}`}>
                        <td className="py-2 px-4">{row.n}</td>
                        <td className="py-2 px-4">{row.d}</td>
                        <td className="py-2 px-4">{row.rmse}</td>
                        <td className="py-2 px-4">{row.r2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Model Comparison Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
              <h3 className="text-xl font-semibold">Model Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left table-auto">
                  <thead>
                    <tr className="border-b border-white/10 text-primary">
                      <th className="py-2 px-4">Model</th>
                      <th className="py-2 px-4">MSE</th>
                      <th className="py-2 px-4">RMSE</th>
                      <th className="py-2 px-4">MAE</th>
                      <th className="py-2 px-4">R²</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { model: 'Linear Regression', mse: 1933.24, rmse: 43.97, mae: 23.06, r2: 0.441 },
                      { model: 'Polynomial Regression', mse: 1593.74, rmse: 39.92, mae: 19.73, r2: 0.539 },
                      { model: 'Random Forest', mse: 165.10, rmse: 12.85, mae: 5.17, r2: 0.952, best: true },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-white/5 ${row.best ? 'bg-primary/20 font-bold text-primary' : 'text-muted-foreground'}`}>
                        <td className="py-2 px-4">{row.model}</td>
                        <td className="py-2 px-4">{row.mse}</td>
                        <td className="py-2 px-4">{row.rmse}</td>
                        <td className="py-2 px-4">{row.mae}</td>
                        <td className="py-2 px-4">{row.r2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Findings Subsection */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
              <h3 className="text-xl font-semibold">Key Findings</h3>
              <ul className="space-y-3">
                {[
                  'Random Forest significantly outperforms linear and polynomial models.',
                  'Higher tree depth improves prediction accuracy.',
                  'Total discharge, storage volume, and water level are the most influential features.',
                  'Shows that nonlinear ML models better capture hydropower turbine discharge patterns.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <BarChart3 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Discussion Section */}
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-4xl font-bold mb-4">Discussion & Future Work</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mb-8" />
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
              <h3 className="text-xl font-semibold">Key Takeaways</h3>
              <ul className="space-y-2">
                {[
                  'Linear and polynomial models fail to capture nonlinear dam behavior',
                  'Random Forest performs the best with very low error',
                  'Total discharge, storage volume, and water level strongly influence turbine discharge'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
              <h3 className="text-xl font-semibold">Future Improvements</h3>
              <ul className="space-y-2">
                {[
                  'Include hydraulic head (H) as a feature',
                  'Try gradient boosting or neural networks',
                  'Consider seasonal or temporal effects'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                <strong>Dataset:</strong> K-water hydrological operation data (한국수자원공사_수문현황정보_일별)
                <br />
                <a href="https://www.data.go.kr/data/15083335/fileData.do" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  https://www.data.go.kr/data/15083335/fileData.do
                </a>
              </li>
              <li className="text-muted-foreground">
                <strong>Tools:</strong> scikit-learn documentation
              </li>
              <li className="text-muted-foreground">
                <strong>Image references:</strong>
                <br />
                <a href="https://www.eia.gov/energyexplained/hydropower/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  U.S. Energy Information Administration - Hydropower
                </a>
                <br />
                <a href="https://water.go.kr/letter/40/sub02.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  K-water official resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
