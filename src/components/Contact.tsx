import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

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

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_3827kjb', // replace with your EmailJS service ID
        'template_wk3h864', // replace with your template ID
        formRef.current,
        '2fP2-YzGf5xncOa8l' // replace with your public key
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          formRef.current?.reset();
        },
        () => {
          setStatus('Something went wrong. Please try again.');
        }
      )
      .finally(() => setSending(false));
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email',
      value: '23cs2025@rgipt.ac.in',
      link: 'mailto:23cs2025@rgipt.ac.in'
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: 'Phone',
      value: '8235147069',
      link: 'tel:8235147069'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: 'Location',
      value: 'Rajiv Gandhi Institute of Petroleum Technology',
      link: 'https://maps.google.com/?q=Rajiv+Gandhi+Institute+of+Petroleum+Technology'
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
  ];

  return (
    <section id="contact" className="py-20 bg-[#00171F] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-[#003459] mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-[#ADEBFF]">
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
                  className="bg-[#00171F] border border-[#003459] text-white animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      className="flex items-start gap-4 hover:text-[#ADEBFF] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="p-2 bg-[#ADEBFF] rounded-full text-[#003459]">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{info.title}</h3>
                        <p className="text-[#ADEBFF]">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-[#003459] text-[#003459] hover:bg-[#ADEBFF] hover:text-[#00171F]"
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
            <Card className="bg-[#00171F] border border-[#003459] text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      className="w-full px-4 py-2 border border-[#ADEBFF] rounded-md bg-[#00171F] text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      id="email"
                      className="w-full px-4 py-2 border border-[#ADEBFF] rounded-md bg-[#00171F] text-white"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="w-full px-4 py-2 border border-[#ADEBFF] rounded-md bg-[#00171F] text-white"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-[#ADEBFF] rounded-md bg-[#00171F] text-white resize-none"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#003459] text-white hover:bg-[#ADEBFF] hover:text-[#00171F]"
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </Button>

                  {status && <p className="text-sm mt-2 text-center text-[#ADEBFF]">{status}</p>}
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
