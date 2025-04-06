
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, Github, ExternalLink } from 'lucide-react';

// ...previous imports remain unchanged
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
  ];

  const projects = [
    // Existing Projects...

    {
      id: 7,
      title: '🎙️ EMOTIVOX 2.0 - Voice Cloning Web Application',
      description: 'A web app for cloning voices using uploaded samples and converting text to speech using YourTTS, with ASR support for Hindi & English.',
      category: 'web',
      image: '/img1.png',
      technologies: ['React', 'Vite', 'Flask', 'YourTTS', 'Python'],
      liveLink: 'http://localhost:5173', // replace with actual live link if available
      githubLink: 'https://github.com/harshitashar25/Emotivox2.0',
    },
    {
      id: 8,
      title: '🤖 Chatbot - AI Assistant using Gemini',
      description: 'A smart AI chatbot with Gemini 1.5 Pro API, supporting both text and image queries, with a sleek chat interface and typing indicator.',
      category: 'web',
      image: '/placeholder.svg',
      technologies: ['React', 'Vite', 'Gemini API', 'Node.js'],
      liveLink: 'http://localhost:5173', // replace with actual live link if hosted
      githubLink: 'https://github.com/harshitashar25/AI_ChatBot',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          Explore my portfolio of projects showcasing my skills and experience in different domains.
          Each project represents unique challenges and creative solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              className="mb-2"
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden animate-fade-in h-full flex flex-col">
              <div className="h-48 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
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
