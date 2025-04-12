import { Publication } from "../types";


export const publications: Publication[] = [
    {
        title: "Gastrointestinal Tract Image Segmentation", 
        publicationBook: "International Journal of Emerging Technologies and Innovative Research", 
        issueYear:"2023",
        url: new URL("https://www.jetir.org/view?paper=JETIR2305315"),
        description: "This research investigated the application of deep learning for automating the segmentation of the stomach and intestines in MRI images used during radiation oncology treatments. Accurate segmentation is crucial for targeting radiation therapy to tumors while minimizing exposure to healthy organs. The study proposed a deep learning approach utilizing U-Net models to automate this time-consuming process. This automation has the potential to improve treatment planning efficiency for radiation oncologists, potentially leading to faster treatment delivery and improved patient care. The model achieved a promising Dice score of 0.87 on the validation set, demonstrating the potential effectiveness of the proposed approach."
     }
 ];


