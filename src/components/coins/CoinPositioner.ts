
import { Coin } from "./CoinData";

export function setupCoinPositions(): Coin[] {
  // Get all section titles
  const aboutTitle = document.querySelector('#about h2');
  const skillsTitle = document.querySelector('#skills h2');
  const experienceTitle = document.querySelector('#experience .text-center h2');
  const projectsTitle = document.querySelector('#projects h2');
  const contactTitle = document.querySelector('#contact .text-center h2');

  if (!aboutTitle || !skillsTitle || !experienceTitle || !projectsTitle || !contactTitle) {
    console.log("Some section titles not found, will retry");
    return [];
  }

  // Create positions for coins next to section titles
  const sectionCoins = [
    // 1. Coin next to the About section title
    { 
      id: 0, 
      section: 'about', 
      collected: false,
      position: {
        top: aboutTitle.getBoundingClientRect().top + window.scrollY + aboutTitle.getBoundingClientRect().height/2 - 12,
        left: aboutTitle.getBoundingClientRect().left - 40 // Adjusted spacing
      }
    },
    // 2. Coin next to Skills section title
    { 
      id: 1, 
      section: 'skills', 
      collected: false,
      position: {
        top: skillsTitle.getBoundingClientRect().top + window.scrollY + skillsTitle.getBoundingClientRect().height/2 - 12,
        left: skillsTitle.getBoundingClientRect().left - 40 // Adjusted spacing
      }
    },
    // 3. Coin next to Experience section title
    { 
      id: 2, 
      section: 'experience', 
      collected: false,
      position: {
        top: experienceTitle.getBoundingClientRect().top + window.scrollY + experienceTitle.getBoundingClientRect().height/2 - 12,
        left: experienceTitle.getBoundingClientRect().left - 40 // Adjusted spacing
      }
    },
    // 4. Coin next to Projects section title
    { 
      id: 3, 
      section: 'projects', 
      collected: false,
      position: {
        top: projectsTitle.getBoundingClientRect().top + window.scrollY + projectsTitle.getBoundingClientRect().height/2 - 12,
        left: projectsTitle.getBoundingClientRect().left - 40 // Adjusted spacing
      }
    },
    // 5. Coin next to Contact section title
    { 
      id: 4, 
      section: 'contact', 
      collected: false,
      position: {
        top: contactTitle.getBoundingClientRect().top + window.scrollY + contactTitle.getBoundingClientRect().height/2 - 12,
        left: contactTitle.getBoundingClientRect().left - 40 // Adjusted spacing
      }
    }
  ];
  
  console.log("Setting coins with positions:", sectionCoins);
  return sectionCoins;
}
