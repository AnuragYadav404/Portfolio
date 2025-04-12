import { Project } from "../types";

export const projects: Project[] = [
    {
        title: "ShopMarket", 
        description: "Developed a responsive front-end for an e-commerce website using React and React Router.Followed modular component-based architecture for code maintainability.Utilized client-side caching and efficient data fetching for improved performance.Collaborated on UI/UX design and implemented user-friendly shopping cart management.",
        codeUrl: new URL("https://github.com/AnuragYadav404/ShopMarket"), 
        liveUrl: new URL("https://shop-market-nine.vercel.app/")
    },
    {
        title: "Live Crypto Tracker", 
        description: "Developed a real-time cryptocurrency price tracking application using Vite.js and React, providing users with up-to-the-minute data on the top 100 cryptocurrencies.Implemented efficient API rate-limiting strategies, including a custom myFetch mocking function, ensuring smooth data retrieval during development and testing.Utilized hooks and asynchronous programming to maintain synchronized updates, enhancing the user experience with automatic data refresh every minute.Designed a user-friendly interface with a responsive layout, allowing users to stay informed about the volatile cryptocurrency market effortlessly.",
        codeUrl: new URL("https://github.com/AnuragYadav404/crypto-tracker"), 
        liveUrl: new URL("https://crypto-tracker-mu-sepia.vercel.app/")
    },
    {
        title: "Memory-card game", 
        description: "Created an engaging and interactive memory card game using React, demonstrating proficiency in modern front-end web development.Integrated real-time data from the PokeAPI, enhancing the game's content and showcasing data-fetching abilities.Designed and implemented a responsive user interface, emphasizing user-centric design principles and ensuring an enjoyable gaming experience.",
        codeUrl: new URL("https://github.com/AnuragYadav404/memory-card-game"), 
        liveUrl: new URL("https://memory-card-game-gray.vercel.app/")
    },
    {
        title: "CV/Resume builder", 
        description: "Developed a web-based CV Resume Builder using React.Users can input personal details, education, work experience, skills, and projects.Implemented PDF generation for one-click resume downloads.Employed localStorage for seamless data storage, ensuring data persistence.",
        codeUrl: new URL("https://github.com/AnuragYadav404/cv-application"), 
        liveUrl: new URL("https://cv-application-7aou-2mmupanuy-anuragyadav404.vercel.app/")
    }
]


// export interface Project {
//     title: string,
//     description: string,
//     liveUrl: URL,
//     codeUrl: URL,
// }