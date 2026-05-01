
import { useState } from 'react';
import { CalendarClock, Building } from 'lucide-react';

const WorkExperience = () => {
  const [activeJob, setActiveJob] = useState(0);
  
  const jobs = [
    {
      title: "Digital Support Officer",
      company: "James Cook University",
      period: "2023 - Present",
      location: "Queensland, Australia",
      duties: [
        "Developed responsive front-end websites for pharmacy teaching, enhancing digital learning experiences.",
        "Revamped course content in Pressbooks to ensure ebook compatibility for academic programs.",
        "Assisted in developing and integrating Learning Tools Interoperability (LTI) features.",
        "Implemented VR-based teaching modules using 3DMakerPro, Solidworks, Blender, and Unity.",
        "Collaborated with academics to integrate new technologies into their subjects.",
        "Partnered with the Daintree Rainforest Observatory team to develop IoT solutions.",
      ]
    },
    {
      title: "Software Developer",
      company: "Cyberworld Pty Ltd",
      period: "2019 - 2023",
      location: "Queensland, Australia",
      duties: [
        "Designed and developed mobile applications in collaboration with field technicians.",
        "Automated key operations, such as invoice generation and stock management.",
        "Monitored project progress and collaborated on technical troubleshooting."
      ]
    },
    {
      title: "Frontend Developer (Intern)",
      company: "Prolist Pty Ltd",
      period: "2021 - 2022",
      location: "Queensland, Australia",
      duties: [
        "Supported daily operations while contributing to the development of a driving assistant application.",
        "Participated in agile Scrum processes, collaborating closely with design teams.",
        "Diagnosed and resolved critical bugs, ensuring application stability."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-retro-navy/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="relative inline-block" id="experience-heading">
            <span className="font-press-start text-xl relative z-10">
              <span className="text-retro-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">WORK</span>{' '}
              <span className="text-retro-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">EXPERIENCE</span>
            </span>
            <div className="h-1 w-40 bg-retro-blue mx-auto mt-4 shadow-[0_2px_0_rgba(0,0,0,0.5)]"></div>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Job selector */}
          <div className="md:w-1/3">
            <div className="bg-retro-black p-4 border-2 border-retro-blue">
              {jobs.map((job, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 mb-2 border-l-4 font-pixel text-md transition-all ${
                    activeJob === index 
                      ? 'border-retro-yellow bg-retro-navy/50 text-retro-yellow' 
                      : 'border-transparent hover:border-retro-blue/50 hover:bg-retro-navy/20'
                  }`}
                  onClick={() => setActiveJob(index)}
                >
                  {job.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Job details */}
          <div className="md:w-2/3">
            <div className="dialog-box animate-fade-in">
              {/* Job title with no background, just black text and yellow left border */}
              <h3 className="font-press-start text-lg mb-2 inline-block px-4 py-2 text-retro-black border-l-4 border-retro-yellow">
                {jobs[activeJob].title}
              </h3>
              
              <div className="flex items-center mb-4 font-pixel text-lg mt-3">
                <Building size={18} className="mr-2 text-retro-black" />
                <span>{jobs[activeJob].company}</span>
              </div>
              
              <div className="flex items-center mb-6 font-pixel text-retro-black">
                <CalendarClock size={18} className="mr-2" />
                <span>{jobs[activeJob].period} | {jobs[activeJob].location}</span>
              </div>
              
              <ul className="font-pixel space-y-3">
                {jobs[activeJob].duties.map((duty, index) => (
                  <li key={index} className="flex">
                    <span className="text-retro-yellow mr-2">›</span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
