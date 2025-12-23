import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Full-Stack' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'blockchain', name: 'Blockchain' },
  ];

  const projects = [
    {
      id: 1,
      title: '🔐 Blockchain Fraud Traceability System',
      description: 'Cross-bank financial fraud detection system built during Devbhoomi Cyber Hackathon 3.0. Designed a privacy-preserving, real-time cross-bank fraud tracing system enabling secure transaction linkage across institutions.',
      category: 'web',
      image: '/img1.png',
      technologies: ['R3 Corda', 'Federated AI', 'Ethereum', 'Python'],
      liveLink: '#',
      githubLink: '#',
      date: 'Nov 2025',
    },
    {
      id: 2,
      title: '🧭 Campus Compass',
      description: 'AI-driven campus info & navigation assistant using RAG for policy queries and faculty/location search. Implemented RAG semantic search & summarization; cut student query lookup time by 40% and improved information accessibility.',
      category: 'web',
      image: '/img2.png',
      technologies: ['Streamlit', 'Flask', 'Google Generative AI', 'Sentence-Transformers', 'ChromaDB', 'FAISS', 'Python'],
      liveLink: '#',
      githubLink: '#',
      date: 'Oct 2025',
    },
    {
      id: 3,
      title: '💬 Dhvanimitra',
      description: 'Real-time mentorship & career guidance with chat, audio/video calls, and skill-based matching. Implemented matching, live chat & AV calling, and dashboards; enabled 100+ mentorship interactions in pilot.',
      category: 'web',
      image: '/img1.png',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Zego (WebRTC)', 'JWT', 'GridFS'],
      liveLink: '#',
      githubLink: '#',
      date: 'Jan 2025',
    },
    {
      id: 4,
      title: '🎙️ EmotiVox 2.0',
      description: 'Web voice-cloning app: TTS, voice-to-text, and personalized cloning from samples. Delivered sample upload, cloned speech synthesis, and bilingual (EN/HI) transcription with interactive playback UI.',
      category: 'web',
      image: '/img1.png',
      technologies: ['Flask', 'Python', 'YourTTS', 'Vite', 'React.js', 'Web Audio API', 'ffmpeg', 'Whisper ASR'],
      liveLink: 'https://emotivox.netlify.app/',
      githubLink: 'https://github.com/harshitashar25/Emotivox2.0',
      date: 'Aug 2024',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-foreground">My Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-foreground/70">
          Explore my portfolio of projects showcasing my skills and experience in different domains.
          Each project represents unique challenges and creative solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={
                activeFilter === category.id
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-border text-foreground/70 hover:bg-accent hover:text-accent-foreground"
              }
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden animate-fade-in h-full flex flex-col bg-card border border-border tech-card">
              <div className="h-48 overflow-hidden bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  {project.date && (
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 border border-border">
                      {project.date}
                    </span>
                  )}
                </div>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-muted text-foreground/80 text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex gap-3">
                  {project.liveLink !== '#' && (
                    <Button size="sm" variant="outline" asChild className="border-border hover:bg-accent hover:text-accent-foreground flex-1">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubLink !== '#' && (
                    <Button size="sm" variant="outline" asChild className="border-border hover:bg-accent hover:text-accent-foreground flex-1">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
