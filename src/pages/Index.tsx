
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CoinAnimation from "@/components/CoinAnimation";
import Loading from "@/components/Loading";
import { preloadImages } from "@/utils/imageLoader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // List all images that need to be preloaded
    const imagesToPreload = [
      "/lovable-uploads/4780adaa-d90e-4882-98f6-ea9d9cb1e70c.png", // Hero background
      "/lovable-uploads/3e28171b-37ae-4517-abfa-ec7790656d96.png",
      "/lovable-uploads/736359f8-2c84-4520-ba16-6e9cdf583900.png",
      "/lovable-uploads/c108577a-2093-496d-ac59-b028dc07c405.png"
    ];

    // Preload all images
    preloadImages(imagesToPreload)
      .then(() => {
        // Start fade-out animation
        setTimeout(() => {
          setIsFadingOut(true);
          
          // Wait for fade-out animation to complete before hiding loader
          setTimeout(() => {
            setIsLoading(false);
            // Set content as loaded after a brief delay to ensure DOM is ready
            setTimeout(() => {
              setContentLoaded(true);
            }, 500);
          }, 700); // Match transition duration
        }, 500);
      })
      .catch(error => {
        console.error("Error preloading images:", error);
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false); // Still hide the loading screen on error
          setTimeout(() => {
            setContentLoaded(true);
          }, 500);
        }, 700);
      });
  }, []);

  const handleLoadComplete = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsLoading(false);
      // Mark content as loaded after a brief delay
      setTimeout(() => {
        setContentLoaded(true);
      }, 500);
    }, 700); // Match transition duration
  };

  return (
    <>
      {isLoading && (
        <Loading onLoadComplete={handleLoadComplete} fadeOut={isFadingOut} />
      )}
      <div className={`min-h-screen bg-retro-navy transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <section id="home" className="relative">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <WorkExperience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
        {contentLoaded && <CoinAnimation />}
      </div>
    </>
  );
};

export default Index;
