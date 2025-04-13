import { Project } from "../types";

export const projects: Project[] = [
    {
        title: "ShopMarket", 
        description: "Responsive e-commerce front-end using React and React Router. Focused on performance and user-friendly shopping cart features with clean, modular code.",
        codeUrl: new URL("https://github.com/AnuragYadav404/ShopMarket"), 
        liveUrl: new URL("https://shop-market-nine.vercel.app/"),
        skills: ["React","React-Router", "Responsive Design", "Component-Based Architecture", "Client-Side Caching", "Data Fetching"]
    },
    {
        title: "Live Crypto Tracker", 
        description: "Real-time cryptocurrency tracker using Vite.js and React with live updates on top 100 coins. Implemented custom API rate-limiting and asynchronous data refresh for a smooth, responsive user experience.",
        codeUrl: new URL("https://github.com/AnuragYadav404/crypto-tracker"), 
        liveUrl: new URL("https://crypto-tracker-mu-sepia.vercel.app/"),
        skills: ["React", "Vite.js", "Real-Time Data", "API Rate Limiting", "React Hooks"]
    },
    {
        title: "Memory-card game", 
        description: "Interactive memory card game in React with real-time Pokémon data integration from PokeAPI. Focused on responsive, user-friendly design to ensure an engaging and enjoyable experience.",
        codeUrl: new URL("https://github.com/AnuragYadav404/memory-card-game"), 
        liveUrl: new URL("https://memory-card-game-gray.vercel.app/"),
        skills: ["React.js", "Game Development"," API Integration", "Dynamic Rendering", "State Management", "Responsive UI"," Interactive Design"]
    },
    {
        title: "CV/Resume builder", 
        description: "A CV Resume Builder web app using React with features to input and manage personal and professional details. Enabled one-click PDF downloads and browser local storage for persistent client side user data.",
        codeUrl: new URL("https://github.com/AnuragYadav404/cv-application"), 
        liveUrl: new URL("https://cv-application-7aou-2mmupanuy-anuragyadav404.vercel.app/"),
        skills: ["React"]
    }
]


// export interface Project {
//     title: string,
//     description: string,
//     liveUrl: URL,
//     codeUrl: URL,
// }