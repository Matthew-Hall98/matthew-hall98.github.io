
import { useState } from 'react';
import { Github, Linkedin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thanks for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-retro-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          {/* Make the container display inline-block so its width fits the content */}
          <div className="inline-block">
            <h2 className="font-press-start text-xl mb-2">
              <span className="text-retro-blue">CONTACT</span> <span className="text-retro-white">ME</span>
            </h2>
          </div>
          <div className="h-1 w-20 bg-retro-yellow mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="pixel-textbox text-retro-black mb-6">
              <h3 className="font-press-start text-sm mb-4">SEND ME A MESSAGE</h3>
              <p className="font-pixel">
                Have a project idea or just want to chat? Feel free to reach out! 
                I'm always open to discussing new projects and opportunities.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 font-pixel">
              <a href="https://github.com/Matthew-Hall98" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-retro-white hover:text-retro-yellow">
                <Github size={20} />
                <span>github.com/Matthew-Hall98</span>
              </a>
              <a href="https://www.linkedin.com/in/matthewdhall98" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-retro-white hover:text-retro-yellow">
                <Linkedin size={20} />
                <span>linkedin.com/in/matthewdhall98</span>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="pixel-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="pixel-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="pixel-input resize-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <button type="submit" className="pixel-btn w-full flex items-center justify-center gap-2">
                  <Send size={16} />
                  <span>SEND MESSAGE</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
