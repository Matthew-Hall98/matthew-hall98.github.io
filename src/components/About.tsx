
import { Code, Coffee, Gamepad2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-press-start text-xl mb-2 inline-block relative">
            <span className="text-retro-yellow">ABOUT</span> THE PLAYER
          </h2>
          <div className="h-1 w-20 bg-retro-blue mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          {/* Portrait on the left */}
          <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 pixel-borders bg-retro-orange p-2">
            <img 
              src="/lovable-uploads/736359f8-2c84-4520-ba16-6e9cdf583900.png" 
              alt="Pixel portrait" 
              className="w-full h-full object-cover"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          
          {/* Dialog box with text */}
          <div className="relative flex-1">
            <div className="pixel-textbox animate-fade-in">
              <div className="absolute -left-4 top-8 w-0 h-0 
                border-t-[10px] border-t-transparent 
                border-r-[15px] border-r-[#d8d4d4] 
                border-b-[10px] border-b-transparent">
              </div>
              <p className="font-pixel text-lg leading-relaxed text-retro-black">
                Versatile and analytical Software Developer with over 4 years of experience in mobile and web development. 
                Proven track record in creating user-centric applications, enhancing digital content for education, and 
                developing immersive VR and IoT projects. Adept at collaborating with cross-functional teams and 
                continuously learning new tools and technologies.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="pixel-card text-center transform transition-transform hover:scale-105 duration-300">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4 bg-retro-blue rounded-lg">
              <Code size={32} className="text-retro-white" />
            </div>
            <h3 className="font-press-start text-sm mb-3 text-retro-yellow">SKILLS</h3>
            <p className="font-pixel">
              HTML, CSS, JavaScript, Python, C#, C++, Java, SQL, Vue.js, Unity, Unreal Engine, Git, IoT & Embedded Systems
            </p>
          </div>
          
          <div className="pixel-card text-center transform transition-transform hover:scale-105 duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4 bg-retro-green rounded-lg">
              <Gamepad2 size={32} className="text-retro-white" />
            </div>
            <h3 className="font-press-start text-sm mb-3 text-retro-yellow">EXPERIENCE</h3>
            <p className="font-pixel">
              Digital Support Officer at JCU, Software Developer at Cyberworld, and Frontend Developer at Prolist
            </p>
          </div>
          
          <div className="pixel-card text-center transform transition-transform hover:scale-105 duration-300" style={{ animationDelay: '0.4s' }}>
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4 bg-retro-red rounded-lg">
              <Coffee size={32} className="text-retro-white" />
            </div>
            <h3 className="font-press-start text-sm mb-3 text-retro-yellow">EDUCATION</h3>
            <p className="font-pixel">
              Bachelor of Information Technology (GPA: 6.0) from James Cook University. Golden Key International Honour Society member.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
