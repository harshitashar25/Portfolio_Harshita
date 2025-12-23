import React, { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Code } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error'>('success');

  // API endpoint - uses proxy in development, or VITE_API_URL in production
  const API_URL = import.meta.env.VITE_API_URL || '/api';

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    setStatusType('success');

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus(result.message || 'Message sent successfully! I will get back to you soon.');
        setStatusType('success');
        formRef.current?.reset();
      } else {
        setStatus(result.message || 'Something went wrong. Please try again.');
        setStatusType('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please check your connection and try again.');
      setStatusType('error');
    } finally {
      setSending(false);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email',
      value: 'harshitas12309@gmail.com',
      link: 'mailto:harshitas12309@gmail.com'
    },
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Academic Email',
      value: '23cs2025@rgipt.ac.in',
      link: 'mailto:23cs2025@rgipt.ac.in'
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: 'Phone',
      value: '+91-8235147069',
      link: 'tel:+918235147069'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: 'Location',
      value: 'Rajiv Gandhi Institute of Petroleum Technology, Jais, Amethi',
      link: 'https://maps.google.com/?q=Rajiv+Gandhi+Institute+of+Petroleum+Technology+Jais+Amethi'
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/harshitashar25'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/harshita-sharma-627446279/'
    },
    {
      name: 'LeetCode',
      icon: <Code size={20} />,
      url: 'https://leetcode.com/u/harshitashar25/'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-foreground">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-primary">
          Feel free to reach out if you want to collaborate on a project, have a job opportunity,
          or just want to connect!
        </p>

        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-card border border-border text-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      className="flex items-start gap-4 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="p-2 bg-primary text-primary-foreground">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                        <p className="text-primary">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Connect with me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-card border border-border text-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Send me a message</h3>
                <form ref={formRef} onSubmit={sendMessage} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1 text-foreground">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="w-full px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </Button>

                  {status && (
                    <p
                      className={`text-sm mt-2 text-center ${
                        statusType === 'success' ? 'text-primary' : 'text-destructive'
                      }`}
                    >
                      {status}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
