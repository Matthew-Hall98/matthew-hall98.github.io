
import { useState } from 'react';
import { Code, FileCode, GitBranch, Gamepad2, Globe, Cog, Blocks } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  color: string;
};

type SkillGroup = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skillGroups: SkillGroup[] = [
    {
      title: "PROGRAMMING LANGUAGES",
      icon: <Code className="w-5 h-5 text-retro-yellow mr-2" />,
      skills: [
        { name: "C#", level: 85, color: "bg-purple-500" },
        { name: "Python", level: 85, color: "bg-green-500" },
        { name: "C++", level: 65, color: "bg-blue-500" },
        { name: "Java", level: 50, color: "bg-red-500" },
      ],
    },
    {
      title: "WEB DEVELOPMENT",
      icon: <Globe className="w-5 h-5 text-retro-yellow mr-2" />,
      skills: [
        { name: "HTML/CSS", level: 70, color: "bg-orange-400" },
        { name: "JavaScript", level: 65, color: "bg-yellow-400" },
        { name: "Vue.js", level: 70, color: "bg-green-400" },
        { name: "Backend Integration", level: 65, color: "bg-blue-400" },
      ],
    },
    {
      title: "DEVOPS & TOOLS",
      icon: <Cog className="w-5 h-5 text-retro-yellow mr-2" />,
      skills: [
        { name: "Git/GitHub", level: 80, color: "bg-red-400" },
        { name: "AWS", level: 65, color: "bg-orange-500" },
        { name: "CI/CD", level: 65, color: "bg-green-600" },
        { name: "Trello", level: 85, color: "bg-cyan-400" },
      ],
    },
    {
      title: "GAME & VR DEVELOPMENT",
      icon: <Gamepad2 className="w-5 h-5 text-retro-yellow mr-2" />,
      skills: [
        { name: "Unity", level: 85, color: "bg-purple-400" },
        { name: "Unreal Engine", level: 50, color: "bg-indigo-500" },
        { name: "3D Modeling", level: 60, color: "bg-teal-500" },
        { name: "VR Integration", level: 65, color: "bg-pink-500" },
      ],
    },
  ];

  const renderSkillBar = (skill: Skill) => {
    return (
      <div 
        key={skill.name}
        className="mb-4"
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex justify-between items-center mb-1">
          <span className="font-pixel text-sm">{skill.name}</span>
          <span className="font-press-start text-xs">
            {hoveredSkill === skill.name ? `${skill.level}/100` : `LVL ${Math.floor(skill.level / 10)}`}
          </span>
        </div>
        <div className="stat-bar">
          <div 
            className={`stat-bar-fill ${skill.color}`} 
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 px-4 bg-retro-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 relative">
          {/* Make the container display inline-block so its width fits the content */}
          <div className="inline-block">
            <h2 className="font-press-start text-xl mb-2">
              <span className="text-retro-blue">SKILL</span> <span className="text-retro-white">STATS</span>
            </h2>
          </div>
          <div className="h-1 w-20 bg-retro-yellow mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="pixel-card">
              <h3 className="font-press-start text-sm text-retro-yellow mb-4 flex items-center">
                {group.icon}
                {group.title}
              </h3>
              <div className="space-y-2">
                {group.skills.map(renderSkillBar)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
