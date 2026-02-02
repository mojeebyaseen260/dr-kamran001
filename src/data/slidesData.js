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
    example: 'Summarize the key findings from 10 research papers about machine learning in healthcare, identify common themes, and suggest 3 potential research gaps for future studies.',
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
    example: 'Review this research proposal for ethical considerations, identify potential risks to participants, and suggest improvements for informed consent procedures in a study involving vulnerable populations.',
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
    example: 'Analyze this research diagram, extract key data points, create a summary table in Google Sheets, and find the latest 2026 publications related to this topic for comparison.',
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
    example: 'Create a PowerPoint presentation from my research data in Excel, generate charts showing correlation between variables, and draft a 10-slide presentation for my thesis defense.',
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
    example: 'Find recent studies on climate change impact on agriculture, provide proper citations, fact-check the statistics, and compare findings from different geographical regions.',
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
    example: 'Write a Python script to scrape research data from academic websites, clean the dataset, perform statistical analysis, and create visualizations with proper documentation for reproducibility.',
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