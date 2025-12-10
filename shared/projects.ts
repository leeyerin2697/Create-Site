export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "manual-processing",
    title: "OCR-Based Manual Summarizer",
    description: "Automated pipeline that extracts text from manual images, summarizes instructions in Korean, and generates audio output.",
    fullDescription: `
      Introduction & Motivation
      
      Many user manuals have small, dense text, making them difficult and tiring to read. Some manuals are also written in English, creating a language barrier for Korean users.
      
      Goal of this project:
      To develop a system that extracts the text, summarizes the important parts, translates English text into Korean, and converts the final result into audio.
      
      Why it matters:
      - Helps users understand long manuals more quickly
      - Improves accessibility with audio output
      - Removes language barriers through automatic translation
      - Integrates OCR, summarization, translation, and TTS into one pipeline
      
      Method
      
      Pipeline: OCR → Summarization → TTS
      
      Model Selection:
      - Tesseract OCR: for accurate text extraction from manual images
      - DeepSeek Chat API: for generating concise Korean summaries
      - gTTS (Google Text-to-Speech): for reliable Korean audio synthesis
      
      Environment:
      - Anaconda virtual environment for dependency management
      - Local Tesseract OCR installation
      - DeepSeek API key configuration
      
      Development:
      The pipeline consists of four modular components:
      - ocr.py: extracts text from manual images using Tesseract
      - summarizer.py: generates concise Korean summaries via DeepSeek API
      - tts.py: converts summaries to audio using gTTS
      - main.py: orchestrates the complete OCR → Summarization → TTS pipeline
      
      Distribution:
      Full source code is available on GitHub with a modular, ready-to-run framework for document processing automation.
      
      Results
      
      - OCR Module: Accurately recognized small English text in manual images; lower performance for Korean, Chinese, and Japanese text
      - Text Quality Impact: Blurry or low-quality source images reduced OCR accuracy
      - Summarization: DeepSeek API generated concise, instruction-focused Korean summaries
      - TTS Output: gTTS produced reliable audio, though Korean speech naturalness could be improved
      - Pipeline Integration: Full OCR → Summarization → TTS pipeline ran consistently and demonstrated stable cross-module integration
      
      Discussion & Future Work
      
      Key Takeaways:
      - OCR module reads small English text accurately
      - Summarization using DeepSeek API consistently produces concise and relevant Korean summaries
      - The integrated pipeline runs smoothly and demonstrates a functional automation workflow
      
      Future Improvements:
      - Improve multilingual OCR performance by adding language-specific models
      - Enhance TTS quality using a more natural neural TTS engine
      - Add support for multiple output languages (summary + audio)
      - Develop a user-friendly UI for batch document processing
      
      How to Run (Quick Start)
      
      1. Clone the repository and navigate to the project directory
      2. Create a virtual environment: conda create -n manual-summarizer python=3.9
      3. Activate the environment: conda activate manual-summarizer
      4. Install dependencies: pip install -r requirements.txt
      5. Configure DeepSeek API key in config.py
      6. Run the pipeline: python main.py --input manual_image.png --output summary.txt
      
      References
      - Tesseract OCR Documentation
      - DeepSeek API Documentation
      - gTTS (Google Text-to-Speech) Library
      - Python Pillow (PIL) Documentation
    `,
    imageUrl: "/images/project1-thumb-1.jpg",
    tags: ["OCR", "NLP", "TTS", "Python", "Tesseract", "DeepSeek API"],
    link: "https://github.com/leeyerin2697"
  },
  {
    id: "sbsp-research",
    title: "Space-Based Solar Power (SBSP) Research",
    description: "Research on technical challenges and feasibility of space-based solar power systems for sustainable energy.",
    fullDescription: `
      Introduction & Motivation
      
      Space-Based Solar Power (SBSP) represents a promising frontier in renewable energy technology. Unlike terrestrial solar systems limited by weather, time of day, and atmospheric conditions, SBSP systems can generate power continuously in space and transmit it to Earth via microwave or laser beams.
      
      This research explores the technical challenges, feasibility analysis, and implementation strategies required to make SBSP a viable energy solution for the future.
      
      Why it matters:
      - Provides continuous, weather-independent power generation
      - Offers virtually unlimited solar energy collection in space
      - Addresses global energy demands sustainably
      - Requires innovative solutions in materials, transmission, and control systems
      
      Method
      
      Research Approach:
      - Literature review of existing SBSP concepts and prototypes
      - Analysis of key technical challenges (power transmission, orbital mechanics, materials)
      - Feasibility assessment of current and near-future technologies
      - Identification of critical research areas for commercialization
      
      Key Research Areas:
      - Wireless Power Transmission: microwave and laser-based energy beaming
      - Orbital Mechanics: optimal satellite constellation design
      - Materials Science: lightweight, radiation-resistant materials for space
      - Power Electronics: efficient conversion and transmission systems
      - Regulatory & Economic: cost analysis and policy frameworks
      
      Results
      
      - Identified critical technical bottlenecks in wireless power transmission efficiency
      - Analyzed trade-offs between microwave and laser transmission methods
      - Assessed the feasibility of current space technology for SBSP deployment
      - Documented potential timelines for prototype development and commercialization
      
      Discussion & Future Work
      
      Key Findings:
      - SBSP is technically feasible with current technology, though efficiency improvements are needed
      - Wireless power transmission remains the primary technical challenge
      - International cooperation and regulatory frameworks are essential for deployment
      
      Future Research Directions:
      - Develop high-efficiency wireless power transmission systems
      - Design and test orbital satellite prototypes
      - Investigate advanced materials for space applications
      - Explore hybrid SBSP-terrestrial energy systems
      - Establish international standards for space-based energy transmission
      
      References
      - Recent SBSP feasibility studies and technical reports
      - Wireless power transmission research papers
      - Orbital mechanics and satellite design literature
      - Space materials science publications
    `,
    imageUrl: "/images/project2-thumb.jpg",
    tags: ["SBSP", "Renewable Energy", "Space Technology", "Research"],
    link: "#"
  }
];
