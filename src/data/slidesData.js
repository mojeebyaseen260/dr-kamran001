export const slidesData = [
  // Slide 1: Title
  {
    type: 'title',
    title: 'Generative AI Tools for Research',
    subtitle: 'Modern AI Technologies and Their Applications in Research',
    links: [
      { name: 'ChatGPT', url: 'https://chat.openai.com', icon: '🤖' },
      { name: 'Claude', url: 'https://claude.ai', icon: '🧠' },
      { name: 'Google Gemini', url: 'https://gemini.google.com', icon: '💎' },
      { name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com', icon: '✈️' },
      { name: 'Perplexity AI', url: 'https://perplexity.ai', icon: '🔍' },
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', icon: '💻' }
    ]
  },

  // Slide 2: Introduction
  {
    type: 'content',
    title: 'Introduction to Generative AI',
    sections: [
      {
        type: 'tool-card',
        title: 'What is Generative AI?',
        content: [
          'AI systems that create new content (text, images, code, audio)',
          'Based on large language models and neural networks',
          'Trained on vast datasets to understand patterns',
          'Revolutionary impact on research and education'
        ]
      },
      {
        type: 'highlight',
        title: 'Key Characteristics:',
        content: [
          'Creative: Generates original content',
          'Contextual: Understands and maintains context',
          'Versatile: Multiple applications across domains',
          'Interactive: Conversational interfaces'
        ]
      }
    ]
  },

  // Slide 3: ChatGPT
  {
    type: 'tool',
    title: 'ChatGPT (OpenAI)',
    overview: [
      'Developed by OpenAI',
      'Based on GPT (Generative Pre-trained Transformer)',
      'Multiple versions: GPT-3.5, GPT-4, GPT-4 Turbo'
    ],
    features: [
      'Natural language conversations',
      'Code generation and debugging',
      'Text summarization and analysis',
      'Creative writing assistance'
    ],
    applications: [
      { title: 'Literature Review', description: 'Summarizing research papers' },
      { title: 'Data Analysis', description: 'Interpreting statistical results' },
      { title: 'Hypothesis Generation', description: 'Brainstorming research ideas' },
      { title: 'Academic Writing', description: 'Drafting and editing papers' },
      { title: 'Survey Design', description: 'Creating questionnaires' },
      { title: 'Code Development', description: 'Research software and scripts' }
    ],
    examples: [
      {
        title: '📝 Research Paper Writing',
        prompt: 'Write an abstract for my research paper on "Impact of Social Media on Student Mental Health". Include methodology, key findings, and implications.',
        result: 'Generated a 250-word structured abstract with proper academic formatting'
      },
      {
        title: '📊 Data Interpretation',
        prompt: 'Analyze this survey data: 65% students report anxiety, 45% depression, 78% use social media >4hrs daily. What correlations and recommendations can you suggest?',
        result: 'Provided statistical insights, correlation analysis, and actionable recommendations'
      },
      {
        title: '🔍 Literature Gap Analysis',
        prompt: 'Based on these 15 research papers on AI in education, identify 5 unexplored research areas and suggest methodology for each.',
        result: 'Identified specific gaps with detailed research proposals and methodologies'
      }
    ],
    links: [
      { name: 'Try ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Pricing Plans', url: 'https://openai.com/pricing' },
      { name: 'API Documentation', url: 'https://platform.openai.com/docs' }
    ]
  },

  // Slide 4: Claude
  {
    type: 'tool',
    title: 'Claude (Anthropic)',
    overview: [
      'Developed by Anthropic',
      'Focus on safety and helpfulness',
      'Constitutional AI approach'
    ],
    features: [
      'Long-form document analysis',
      'Ethical reasoning capabilities',
      'Code review and analysis',
      'Complex problem-solving'
    ],
    applications: [
      { title: 'Ethical Research Review', description: 'Analyzing research ethics' },
      { title: 'Policy Analysis', description: 'Reviewing policies and regulations' },
      { title: 'Legal Research', description: 'Understanding compliance requirements' },
      { title: 'Qualitative Data Analysis', description: 'Coding interview data' },
      { title: 'Grant Writing', description: 'Proposal development assistance' },
      { title: 'Peer Review', description: 'Supporting manuscript review' }
    ],
    examples: [
      {
        title: '⚖️ Ethics Review',
        prompt: 'Review my research proposal involving interviews with cancer patients. Identify ethical concerns, suggest IRB improvements, and recommend consent procedures.',
        result: 'Detailed ethical analysis with specific IRB recommendations and consent form improvements'
      },
      {
        title: '💰 Grant Proposal Writing',
        prompt: 'Help me write a compelling 2-page research proposal for NSF funding on "AI-powered early disease detection" with budget justification.',
        result: 'Professional grant proposal with clear objectives, methodology, and detailed budget breakdown'
      },
      {
        title: '📋 Policy Analysis',
        prompt: 'Analyze the new EU AI Act implications for my healthcare AI research. What compliance requirements should I consider?',
        result: 'Comprehensive policy analysis with actionable compliance checklist and recommendations'
      }
    ],
    links: [
      { name: 'Try Claude', url: 'https://claude.ai' },
      { name: 'Learn More', url: 'https://www.anthropic.com/claude' },
      { name: 'API Docs', url: 'https://docs.anthropic.com' }
    ]
  },

  // Slide 5: Google Gemini
  {
    type: 'tool',
    title: 'Google Gemini (Bard)',
    overview: [
      'Google\'s multimodal AI system',
      'Integration with Google services',
      'Real-time information access'
    ],
    features: [
      'Multimodal capabilities (text, images, code)',
      'Real-time web search integration',
      'Google Workspace integration',
      'Multiple model sizes (Ultra, Pro, Nano)'
    ],
    applications: [
      { title: 'Current Information Research', description: 'Latest data and trends' },
      { title: 'Image Analysis', description: 'Processing research images' },
      { title: 'Collaborative Research', description: 'Google Docs/Sheets integration' },
      { title: 'Market Research', description: 'Real-time data collection' },
      { title: 'Scientific Literature Search', description: 'Recent publications' },
      { title: 'Data Visualization', description: 'Charts and graphs creation' }
    ],
    examples: [
      {
        title: '🖼️ Research Image Analysis',
        prompt: 'Analyze this brain MRI scan image, identify key anatomical structures, and suggest what pathological conditions might be visible.',
        result: 'Detailed anatomical analysis with potential pathology identification and medical terminology'
      },
      {
        title: '📈 Real-time Market Research',
        prompt: 'Find the latest 2026 trends in renewable energy adoption globally, create a summary with statistics and key market players.',
        result: 'Current market analysis with live data, trends, and comprehensive industry overview'
      },
      {
        title: '🎨 Research Poster Design',
        prompt: 'Create a visual research poster layout for my study on "Urban Air Quality Monitoring using IoT Sensors" with infographics.',
        result: 'Professional poster design with data visualizations, charts, and academic formatting'
      }
    ],
    links: [
      { name: 'Try Gemini', url: 'https://gemini.google.com' },
      { name: 'Developer Resources', url: 'https://ai.google.dev' },
      { name: 'Workspace Integration', url: 'https://workspace.google.com/products/duet-ai/' }
    ]
  },

  // Slide 6: Microsoft Copilot
  {
    type: 'tool',
    title: 'Microsoft Copilot',
    overview: [
      'Microsoft\'s AI assistant',
      'Integration with Microsoft 365',
      'Based on GPT technology'
    ],
    features: [
      'Office suite integration',
      'Code assistance in Visual Studio',
      'Web browsing capabilities',
      'Enterprise security features'
    ],
    applications: [
      { title: 'Document Creation', description: 'Research reports and presentations' },
      { title: 'Data Analysis', description: 'Excel processing and visualization' },
      { title: 'Academic Presentations', description: 'PowerPoint generation' },
      { title: 'Research Collaboration', description: 'Teams integration' },
      { title: 'Statistical Analysis', description: 'Advanced Excel functions' },
      { title: 'Project Management', description: 'Research timelines' }
    ],
    examples: [
      {
        title: '📊 Excel Data Analysis',
        prompt: 'Analyze this dataset of 1000 student survey responses, create pivot tables, correlation matrices, and generate insights about study habits vs academic performance.',
        result: 'Automated Excel analysis with charts, statistical summaries, and actionable insights'
      },
      {
        title: '🎯 PowerPoint Research Presentation',
        prompt: 'Create a 15-slide presentation for my PhD defense on "Machine Learning in Medical Diagnosis" with professional templates and speaker notes.',
        result: 'Complete presentation with academic formatting, visual aids, and detailed speaker notes'
      },
      {
        title: '📝 Research Report Generation',
        prompt: 'Convert my research notes and data into a formal 20-page research report with proper citations, tables, and academic formatting in Word.',
        result: 'Professional research report with automated formatting, citations, and structured layout'
      }
    ],
    links: [
      { name: 'Try Copilot', url: 'https://copilot.microsoft.com' },
      { name: 'Microsoft 365 Copilot', url: 'https://www.microsoft.com/en-us/microsoft-365/microsoft-copilot' },
      { name: 'Documentation', url: 'https://learn.microsoft.com/en-us/copilot/' }
    ]
  },

  // Slide 7: Perplexity AI
  {
    type: 'tool',
    title: 'Perplexity AI',
    overview: [
      'AI-powered search engine',
      'Real-time information retrieval',
      'Source citation and verification'
    ],
    features: [
      'Conversational search interface',
      'Source attribution',
      'Real-time web crawling',
      'Academic and professional modes'
    ],
    applications: [
      { title: 'Academic Research', description: 'Finding and citing sources' },
      { title: 'Fact Checking', description: 'Verifying information accuracy' },
      { title: 'Current Events Research', description: 'Latest field developments' },
      { title: 'Comparative Analysis', description: 'Different perspectives' },
      { title: 'Background Research', description: 'Quick topic overviews' },
      { title: 'Citation Management', description: 'Proper source attribution' }
    ],
    examples: [
      {
        title: '🔍 Academic Source Finding',
        prompt: 'Find peer-reviewed studies published in 2024-2026 about "CRISPR gene therapy for sickle cell disease" with proper citations and impact factors.',
        result: 'Curated list of recent studies with full citations, journal rankings, and key findings summary'
      },
      {
        title: '✅ Fact Verification',
        prompt: 'Verify these statistics: "75% of AI startups fail within 2 years, average funding is $2.3M". Provide sources and cross-check accuracy.',
        result: 'Detailed fact-check with multiple sources, accuracy assessment, and corrected statistics'
      },
      {
        title: '📚 Literature Comparison',
        prompt: 'Compare different perspectives on "Remote work productivity" from recent studies, highlighting conflicting findings and methodological differences.',
        result: 'Comprehensive comparison with source attribution, methodology analysis, and balanced perspective'
      }
    ],
    links: [
      { name: 'Try Perplexity', url: 'https://perplexity.ai' },
      { name: 'Pro Features', url: 'https://www.perplexity.ai/pro' },
      { name: 'API Access', url: 'https://docs.perplexity.ai' }
    ]
  },

  // Slide 8: GitHub Copilot
  {
    type: 'tool',
    title: 'GitHub Copilot',
    overview: [
      'AI pair programmer by GitHub and OpenAI',
      'Code generation and completion',
      'Development environment integration'
    ],
    features: [
      'Real-time code suggestions',
      'Multiple programming languages',
      'Context-aware completions',
      'Documentation generation'
    ],
    applications: [
      { title: 'Research Software Development', description: 'Analysis tools' },
      { title: 'Data Processing Scripts', description: 'Workflow automation' },
      { title: 'Statistical Computing', description: 'R, Python, MATLAB assistance' },
      { title: 'Web Scraping', description: 'Data collection automation' },
      { title: 'Machine Learning', description: 'Model development' },
      { title: 'Research Reproducibility', description: 'Documented code' }
    ],
    examples: [
      {
        title: '🐍 Python Data Analysis Script',
        prompt: '# Create a script to analyze survey data, perform statistical tests, and generate publication-ready plots',
        result: 'Complete Python script with pandas, scipy, matplotlib - statistical analysis and professional visualizations'
      },
      {
        title: '🤖 Machine Learning Pipeline',
        prompt: '# Build a complete ML pipeline for predicting student performance using scikit-learn with cross-validation',
        result: 'Full ML pipeline with data preprocessing, model selection, hyperparameter tuning, and evaluation metrics'
      },
      {
        title: '📊 R Statistical Analysis',
        prompt: '# Perform ANOVA analysis on experimental data with post-hoc tests and effect size calculations',
        result: 'Comprehensive R script with statistical tests, assumptions checking, and formatted output tables'
      }
    ],
    links: [
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
      { name: 'Documentation', url: 'https://docs.github.com/en/copilot' },
      { name: 'Pricing', url: 'https://github.com/pricing' }
    ]
  },

  // Slide 9: Specialized Tools
  {
    type: 'content',
    title: 'Specialized AI Tools for Research',
    sections: [
      {
        type: 'tool-card',
        title: 'Additional Tools:',
        subsections: [
          {
            title: 'Notion AI',
            content: [
              'Research note organization',
              'Content summarization',
              'Database management'
            ]
          },
          {
            title: 'Grammarly AI',
            content: [
              'Academic writing enhancement',
              'Grammar and style checking',
              'Plagiarism detection'
            ]
          },
          {
            title: 'Jasper AI',
            content: [
              'Marketing research content',
              'Survey creation',
              'Report writing'
            ]
          }
        ]
      },
      {
        type: 'research-apps',
        title: 'Practical Examples:',
        content: [
          '📝 Notion AI: "Organize my 50 research papers by themes, create summary database with key findings, methodology, and citation info"',
          '✍️ Grammarly: "Review my 10,000-word dissertation for academic tone, clarity, and citation formatting errors"',
          '📊 Jasper AI: "Create engaging social media content to promote my research findings to general audience"',
          '🎨 Canva AI: "Design infographic showing my research methodology and key statistics for conference poster"'
        ]
      }
    ]
  },

  // Slide 10: Research Domain Applications
  {
    type: 'content',
    title: 'Research Domain Applications',
    sections: [
      {
        type: 'tool-card',
        title: 'By Research Field:',
        subsections: [
          {
            title: 'Social Sciences:',
            content: [
              'Survey design and analysis',
              'Qualitative data coding',
              'Literature reviews',
              'Policy analysis'
            ]
          },
          {
            title: 'Natural Sciences:',
            content: [
              'Data analysis and visualization',
              'Hypothesis generation',
              'Lab report writing',
              'Research proposal development'
            ]
          }
        ]
      },
      {
        type: 'research-apps',
        title: 'More Applications:',
        subsections: [
          {
            title: 'Computer Science:',
            content: [
              'Algorithm development',
              'Code optimization',
              'Technical documentation',
              'System design'
            ]
          },
          {
            title: 'Business Research:',
            content: [
              'Market analysis',
              'Consumer behavior studies',
              'Financial modeling',
              'Competitive analysis'
            ]
          }
        ]
      }
    ]
  },

  // Slide 11: Best Practices
  {
    type: 'content',
    title: 'Best Practices for Research Use',
    sections: [
      {
        type: 'tool-card',
        title: 'Guidelines for Effective Use:',
        subsections: [
          {
            title: 'Verification:',
            content: [
              'Always verify AI-generated information',
              'Cross-check with primary sources',
              'Use multiple AI tools for comparison'
            ]
          },
          {
            title: 'Ethics:',
            content: [
              'Maintain academic integrity',
              'Proper attribution of AI assistance',
              'Respect copyright and intellectual property'
            ]
          }
        ]
      },
      {
        type: 'research-apps',
        title: 'Quality & Security:',
        subsections: [
          {
            title: 'Quality Control:',
            content: [
              'Human oversight required',
              'Critical evaluation of outputs',
              'Iterative refinement process'
            ]
          },
          {
            title: 'Data Security:',
            content: [
              'Protect sensitive research data',
              'Understand AI tool privacy policies',
              'Use institutional approved tools'
            ]
          }
        ]
      }
    ]
  },

  // Slide 12: Future
  {
    type: 'content',
    title: 'Future of AI in Research',
    sections: [
      {
        type: 'tool-card',
        title: 'Emerging Trends:',
        subsections: [
          {
            title: 'Multimodal AI:',
            content: [
              'Integration of text, image, audio, and video',
              'Enhanced research capabilities',
              'Richer data analysis'
            ]
          },
          {
            title: 'Specialized Research AI:',
            content: [
              'Domain-specific AI tools',
              'Scientific discovery acceleration',
              'Automated hypothesis testing'
            ]
          },
          {
            title: 'Collaborative AI:',
            content: [
              'AI-human research teams',
              'Enhanced creativity and productivity',
              'New research methodologies'
            ]
          }
        ]
      },
      {
        type: 'highlight',
        title: 'Key Takeaways:',
        content: [
          'Choose the right tool for specific research needs',
          'Maintain critical thinking and verification',
          'Embrace AI as research accelerator, not replacement',
          'Stay updated with evolving capabilities'
        ]
      }
    ]
  }
];