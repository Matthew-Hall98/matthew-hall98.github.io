
import { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import PixelArt from './PixelArt';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { preloadImages } from "@/utils/imageLoader";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  // Tree pixel art
  const tree = [
    [' ', ' ', ' ', 'G', 'G', ' ', ' ', ' '],
    [' ', ' ', 'G', 'G', 'G', 'G', ' ', ' '],
    [' ', 'G', 'G', 'G', 'G', 'G', 'G', ' '],
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
    [' ', ' ', 'B', 'B', 'B', ' ', ' ', ' '],
    [' ', ' ', 'B', 'B', 'B', ' ', ' ', ' '],
  ];

  const treeColors = {
    'G': '#50C878', // Green
    'B': '#8B4513', // Brown
    ' ': 'transparent',
  };

  const projects = [
    {
      id: 'lunar-lander',
      title: "Lunar Lander Postal Delivery Service",
      description: "A physics-based 3D Unity game that blends classic lunar landing mechanics with strategic supply delivery missions.",
      longDescription: "Lunar Lander Postal Delivery Service is a physics-based 3D Unity game that blends classic lunar landing mechanics with strategic supply delivery missions. Players navigate challenging environments, manage limited fuel, and avoid hazards like asteroids and missile attacks. Featuring a charming low-poly aesthetic and procedurally generated landscapes, it tests players' precision flying and strategic planning.",
      technologies: "Unity, C#, Physics simulation, Procedural generation, Low-poly modeling",
      challenges: "Balancing realistic physics with fun gameplay, creating varied yet fair procedural levels, and optimizing performance across different hardware configurations.",
      tags: ["Unity", "C#", "Physics-Based", "Game Design"],
      images: [
        "/images/f6ee9a50-6924-4e8f-b9ae-9448dc4f1761.png", 
        "/images/97463d4d-a3d1-4c01-8977-c619ab952dac.png",
        "/images/48fb4a81-e23d-40f0-9f1b-5b823abb0230.png"
      ],
      links: {
        github: "#"
      }
    },
    {
      id: 'tree-generator',
      title: "Procedural Tree Generation",
      description: "A personal exploration of procedural tree generation that simulates tree growth based on environmental factors such as temperature, soil salinity, and humidity.",
      longDescription: "This project began as part of my honours thesis but has since evolved into a personal exploration of procedural tree generation. I simulate tree growth by randomly generating tree structures influenced by environmental factors such as temperature, soil salinity, and humidity. This approach highlights how even slight shifts in climate can dramatically affect tree development and species distribution—the randomness capturing nature's inherent unpredictability.\n\nInitially, I experimented with Python's Turtle graphics and an L‑tree algorithm to generate basic procedural trees using environmental data. Now, I'm leveraging my Unity experience to create procedural tree meshes, with plans to enhance the project further by developing procedural textures for these meshes.",
      technologies: "Unity, C#, Python (Turtle Graphics), L‑tree Algorithm, Procedural Mesh Generation",
      challenges: "Balancing environmental realism with performance while creating visually appealing trees that capture nature's randomness. Adapting algorithms from Python to Unity presented unique optimization challenges.",
      tags: ["Unity", "C#", "Simulation", "Research"],
      images: [
        "/placeholder.svg"
      ],
      links: {
        github: "#"
      }
    },
    {
      id: '30-seconds-or-less',
      title: "30 Seconds or Less",
      description: "An arcade-style driving game challenging players to deliver pizzas across a vibrant, low-poly city against the clock.",
      longDescription: "30 Seconds or Less is an arcade-style driving game developed in Unity, challenging players to deliver pizzas across a vibrant, low-poly city. Inspired by the classic '30 minutes or less' delivery promise, players race against the clock with engaging controls and dynamic driving mechanics. Earn paychecks from successful deliveries to unlock new vehicles and upgrades, enabling longer and faster delivery runs. Master the streets, dodge traffic, and ensure pizzas arrive hot and fresh—fast delivery is your ticket to success!",
      technologies: "Unity, C#, Vehicle physics, Low-poly 3D modeling, Arcade game design",
      challenges: "Creating intuitive driving controls that are fun yet challenging, balancing the game economy, and optimizing performance for smooth gameplay across the city environment.",
      tags: ["Unity", "C#", "Arcade", "Vehicle Physics"],
      images: [
        "/images/37d855af-b0a0-4061-9119-69ac5b4e8c8f.png"
      ],
      links: {
        github: "#"
      }
    },
    {
      id: 'procedural-generation',
      title: "Tile-based Procedural Generation System",
      description: "A Unity-based system for rapidly generating diverse game worlds using modular tiles and advanced procedural algorithms.",
      longDescription: "This Tile-based Procedural Generation System, currently in development with Unity, aims to enable the rapid creation of diverse and detailed game worlds. It utilizes modular, customizable tiles and procedural algorithms to generate unique landmasses, road networks, and districts. I use methods such as L-trees for road generation, Perlin noise and Delaunay triangulation for landmass and district creation.\n\nDesigned for compatibility with asset packs from creators like Synty Studios, the system facilitates easy asset swapping, allowing seamless transitions between modern cities, medieval towns, or post-apocalyptic landscapes. This flexible approach aims to simplify and accelerate game environment creation.",
      technologies: "Unity, C#, L-tree Algorithms, Perlin Noise, Delaunay Triangulation, Procedural Mesh Generation",
      challenges: "Ensuring consistent and believable world generation while maintaining performance. Creating algorithms that produce varied yet logical layouts for roads and districts that feel organically designed.",
      tags: ["Unity", "C#", "Procedural Generation", "Algorithm Design"],
      images: [
        "/images/4e743920-516b-4357-86b6-f1e6997a2bc8.png",
        "/images/06ff7590-71d2-4ea6-850f-4139761ddf6c.png",
        "/images/3f80fbbc-cdfa-4700-84de-eccd9908d511.png"
      ],
      links: {
        github: "#"
      }
    },
    {
      id: 'subaru-brumby',
      title: "1988 Subaru Brumby Restomod",
      description: "A restoration project blending classic style with modern automotive upgrades, electronics, and comfort features.",
      longDescription: "My 1988 Subaru Brumby Restomod is all about blending classic style with modern upgrades. I've slowly been restoring this iconic car, adding features it never originally had. Using 3D scanning, I've created adapters for a modern lifted wishbone suspension and installed power steering.\n\nI'm currently rebuilding an EJ22 fuel-injected engine, controlled by a Haltech ECU and my own custom module for OBD2 diagnostics and digital gauges. The interior has also been updated, featuring a modern infotainment system, practical cup holders, and wireless charging, making this classic Brumby comfortable for daily driving.",
      technologies: "3D Scanning/Printing, Automotive Electronics, C++ (for OBD2 modules), Custom PCB Design",
      challenges: "Designing parts that maintain the classic aesthetic while integrating modern technology. Creating reliable electronic systems that can withstand automotive environments with temperature extremes and vibration.",
      tags: ["Automotive", "Electronics", "3D Design", "PCB Design"],
      images: [
        "/images/f339a822-79d3-41aa-806a-0d744942c901.png"
      ],
      links: {
        github: "#"
      }
    }
  ];

  // Preload all project images
  useEffect(() => {
    const allImages = projects.flatMap(project => project.images || []);
    if (allImages.length > 0) {
      preloadImages(allImages)
        .then(() => {
          setImagesLoaded(true);
          console.log('All project images preloaded successfully');
        })
        .catch(error => {
          console.error('Error preloading project images:', error);
          setImagesLoaded(true); // Set as loaded anyway to not block UI
        });
    } else {
      setImagesLoaded(true);
    }
  }, []);

  const handleProjectClick = (projectId: string) => {
    setActiveProject(projectId);
    
    // Dispatch custom event for the CoinAnimation component to detect
    setTimeout(() => {
      const event = new CustomEvent('projectModalOpen', { 
        detail: { projectId }
      });
      window.dispatchEvent(event);
    }, 100);
  };

  // Split projects into groups of 4 for the carousel
  const projectGroups = [];
  for (let i = 0; i < projects.length; i += 4) {
    projectGroups.push(projects.slice(i, i + 4));
  }

  return (
    <section id="projects" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl overflow-visible">
        <div className="text-center mb-12">
          <h2 className="font-press-start text-xl mb-2 inline-block relative">
            <span className="text-retro-yellow">MY</span> PROJECTS
          </h2>
          <div className="h-1 w-20 bg-retro-blue mx-auto mt-4"></div>
        </div>
        
        <Carousel className="w-full overflow-visible">
          <CarouselContent className="overflow-visible">
            {projectGroups.map((group, groupIndex) => (
              <CarouselItem key={`group-${groupIndex}`} className="overflow-visible">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 overflow-visible">
                  {group.map((project, index) => (
                    <div 
                      key={project.id} 
                      className="pixel-card border-2 border-retro-black overflow-hidden group hover:border-retro-yellow transition-all duration-300 cursor-pointer h-[420px] flex flex-col mb-2 mx-1"
                      onClick={() => handleProjectClick(project.id)}
                    >
                      <div className="relative overflow-hidden">
                        <div className="bg-retro-black/20">
                          {project.id === 'tree-generator' && groupIndex === 0 ? (
                            <div className="animate-float flex justify-center items-center h-32">
                              <PixelArt art={tree} colorMap={treeColors} pixelSize={5} />
                            </div>
                          ) : project.images && project.images.length > 0 ? (
                            <div className="h-32 overflow-hidden">
                              <img 
                                src={project.images[0]} 
                                alt={project.title} 
                                className="object-cover w-full h-full"
                              />
                            </div>
                          ) : (
                            <div className="h-32 flex items-center justify-center">
                              <div className="font-press-start text-retro-green text-xs">PROJECT PREVIEW</div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="font-press-start text-sm mb-3 text-retro-yellow">{project.title}</h3>
                        <p className="font-pixel mb-4 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex} 
                              className="inline-block bg-retro-navy px-2 py-1 font-pixel text-xs text-retro-blue"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-4 gap-4 relative z-10">
            <CarouselPrevious className="relative inset-0 translate-y-0 bg-retro-blue hover:bg-retro-purple text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-retro-black" />
            <CarouselNext className="relative inset-0 translate-y-0 bg-retro-blue hover:bg-retro-purple text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-retro-black" />
          </div>
        </Carousel>
      </div>

      {/* Project Detail Modals */}
      {projects.map(project => (
        <Dialog key={project.id} open={activeProject === project.id} onOpenChange={(open) => !open && setActiveProject(null)}>
          <DialogContent className="bg-retro-navy border-4 border-retro-yellow max-w-2xl max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-retro-yellow font-press-start text-center text-lg md:text-xl">
                {project.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Details about {project.title}
              </DialogDescription>
            </DialogHeader>
            
            <ScrollArea className="flex-grow pr-4 h-[calc(90vh-10rem)]">
              {/* Project Image Carousel */}
              <div className="mt-4 mb-6">
                {project.images && project.images.length > 0 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="flex items-center justify-center p-1">
                            <AspectRatio ratio={16/9} className="w-full">
                              <img 
                                src={image} 
                                alt={`${project.title} screenshot ${index + 1}`} 
                                className="object-cover w-full h-full rounded border-2 border-retro-black"
                                loading="eager"
                              />
                            </AspectRatio>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.images.length > 1 && (
                      <div className="flex justify-center mt-2 gap-4">
                        <CarouselPrevious className="relative left-0 translate-y-0 bg-retro-blue hover:bg-retro-purple text-white rounded-full border border-retro-black" />
                        <CarouselNext className="relative right-0 translate-y-0 bg-retro-blue hover:bg-retro-purple text-white rounded-full border border-retro-black" />
                      </div>
                    )}
                  </Carousel>
                ) : (
                  <div className="flex items-center justify-center p-1 bg-retro-black/20">
                    <AspectRatio ratio={16/9} className="w-full flex items-center justify-center">
                      <span className="font-press-start text-retro-green text-xs">NO IMAGES AVAILABLE</span>
                    </AspectRatio>
                  </div>
                )}
              </div>
              
              <div className="font-pixel text-retro-white space-y-4 p-4">
                <div className="bg-retro-black/40 p-4 rounded">
                  <p className="whitespace-pre-line">{project.longDescription}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-retro-yellow mb-2">Technologies</h4>
                    <p className="text-retro-white/90">{project.technologies}</p>
                  </div>
                  <div>
                    <h4 className="text-retro-yellow mb-2">Challenges</h4>
                    <p className="text-retro-white/90 whitespace-pre-line">{project.challenges}</p>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};

export default Projects;
