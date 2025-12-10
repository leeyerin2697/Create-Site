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
    id: "hydropower-ml",
    title: "Hydropower Turbine Discharge Prediction",
    description: "Machine learning model that predicts turbine discharge based on real K-water dam data to support hydropower forecasting and operation planning.",
    fullDescription: `
      Introduction & Motivation
      
      Hydropower generation depends heavily on how much water flows through the turbine (turbine discharge). However, turbine discharge is influenced by multiple hydrological and operational factors, and real dam operations are nonlinear and complex.
      
      Goal of this project:
      To build a machine learning model that predicts turbine discharge based on real K-water dam data and evaluate which model performs best.
      
      Why it matters:
      - Helps understand operational behavior of dam
      - Supports hydropower forecasting & operation planning
      - Demonstrates how ML handles real-world nonlinear systems
      
      Method
      
      Idea & Motivation:
      Hydropower output depends on turbine discharge. The goal is to build a model that predicts turbine discharge using real dam operation data.
      
      Dataset Construction:
      - Dataset: K-water Daily Hydrological Data (421,451 entries), csv format
      - Preprocessing: Remove missing data, filter out nonphysical values (≤0), randomly sample 50,000 rows
      - Input (X): hydrological & operational variables
      - Output (y): turbine discharge
      
      Model Development:
      Compared three models:
      - Linear Regression
      - Polynomial Regression (degree = 2)
      - Random Forest Regressor
      
      Result Analysis:
      - Trained and tested with 80/20 split
      - Evaluated performance using RMSE, MAE, R²
      - Scatter plots (Actual vs Predicted)
      - Error comparison charts
      - Feature importance ranking
      - Hyperparameter experiment
      
      Distribution:
      Full code and analysis provided via GitHub. Random Forest achieves R² > 0.95, providing a foundation for hydropower operation prediction tools.
      
      Results
      
      - Random Forest achieved R² > 0.95, demonstrating excellent predictive performance
      - Best configuration: n_estimators = 50, max_depth = 20 → RMSE = 11.48, R² = 0.962
      - Model accuracy increased as tree depth increased
      - Feature importance: total discharge most influential, followed by storage volume and water level
      
      Discussion & Future Work
      
      Key Takeaways:
      - Linear and polynomial models fail to capture nonlinear dam behavior
      - Random Forest performs the best with very low error
      - Total discharge, storage volume, and water level strongly influence turbine discharge
      
      Future Improvements:
      - Include hydraulic head (H) as a feature
      - Try gradient boosting or neural networks
      - Consider seasonal or temporal effects
      
      References
      - K-water hydrological operation data (한국수자원공사_수문현황정보_일별)
      - scikit-learn documentation
      - U.S. Energy Information Administration - Hydropower
      - K-water official resources
    `,
    imageUrl: "/images/project2-poster.jpg",
    tags: ["Machine Learning", "Hydropower", "Python", "Random Forest", "Data Science"],
    link: "https://github.com/leeyerin2697/Dam-power-prediction"
  }
];
