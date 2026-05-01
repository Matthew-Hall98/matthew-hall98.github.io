
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { generateFavicon } from './utils/faviconGenerator.ts'

// Generate and set the favicon from the pixel portrait
generateFavicon();

createRoot(document.getElementById("root")!).render(<App />);
