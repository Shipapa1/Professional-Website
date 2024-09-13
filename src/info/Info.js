import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;


export const info = {
    firstName: "Nathan Nguyen",
    lastName: "",
    initials: "NN", 
    position: "",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: "🖥️",
            text:'I am a computer Engineer with a strong foundation in software development, system analysis, and innovative problem-solving. Passionate about technology and its potential to transform lives, I excel in designing, developing, and optimizing robust solutions.'
        },
        {
            emoji: "📨",
            text: "myduyisepic@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/profile.php?id=100054654528932",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        
        {
            link: "https://github.com/Shipapa1",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/nathan-nguyen-a0a9481b8/details/featured/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: " I am Nathan Nguyen, I am a Computer Engineering graduate from the University of California, Riverside. Originally from Bakersfield, growing up I fell in love with computers during my first computer build in the 7th grade. Since then pursuing any form of career in computers has been my goal. ",
    bio2: "During my time in college I went through courses such as Data Structures, Operating Systems, CS Theory, Algorithms, and various electrical engineering disciplines, including Circuit Design and Embedded Systems. I have a strong technical foundation in programming languages such as Python, C++, and Java, along with hands-on experience in hardware design and analysis tools like AutoCAD and Matlab. My approach to engineering combines technical proficiency with analytical problem-solving, enabling me to tackle complex challenges with innovative solutions.",
    bio3: "My skill set has evolved to focus increasingly on electrical engineering hardware projects, front-end development, and backend data structures, allowing me to contribute effectively across multiple facets of technology development. I am particularly adept at navigating the complexities of hardware design and optimization, and I enjoy the creativity involved in crafting intuitive and dynamic user interfaces. Equally competent in backend infrastructure, I understand the critical role that efficient data management and structure play in supporting the front-end user experience.",
    bio4: "Adaptability is one of my core strengths, and I am committed to developing myself to fit seamlessly into various working environments. Whether in the lab or during software development sprints, my capacity to communicate effectively makes me a valuable team player. I thrive in social settings and find that collaboration with both colleagues and clients enhances the quality and impact of my work. Engaging with people, whether they are long-standing experts or new stakeholders, is something I particularly enjoy and excel at, ensuring that every project benefits from a broad range of insights and ideas.",
    bio5: "Implemented regular shopping site with fake products, with a shared shopping cart feature that would allow multiple users to add, edit, and view items in a single cart simultaneously. Designed and develop the front-end functionality of login page, shopping cart and home page Designed a dynamic and responsive user interface that provided instant feedback as users interact with it Shared shopping cart was a successful project between friends that greatly improved all of our development skills.",
    bio6: "Unity top-down 2D game where the character plays against unlimited hordes of enemies and upgrades itself with drops. Created a dynamic loot bag system that efficiently manages and stores maximum stats up to Unity’s max data, enhancing gameplay by allowing seamless upgrades and inventory management. Designed a formidable boss character that increases game difficulty, adding a strategic layer, boosting player engagement. Engineered features for continuous character upgrades through loot drops and kills, significantly improving player progression and overall game experience",
    bio7: "Arduino-based system capable of measuring both the length and temperature of objects Task involves designing and coding a reliable system that integrates temperature, humidity, and distance measurements, displaying the data on an LCD screen. Utilized a DHT11 temperature and humidity module for environmental readings, an ultrasonic sensor for measuring object lengths, and a Nokia LCD for displaying the measurements. Resulted in a highly functional and accurate measurement tool, praised for its versatility and ease of use",
    bio8: "Adept at effectively communicating with athletes, coaches, and fellow officials to maintain a smooth and efficient event flow. Committed to upholding the integrity of the sport and promoting a positive environment for all participants. ",
    bio9: "Operated production equipment according to daily work orders while maintaining strict safety procedures.  Worked well in team environments to meet rush-hour demands ",
    bio10: "Exploring the great outdoors with my dad has always been a cherished activity. Hiking together, especially when backpacking through rugged terrains, creates memories that last a lifetime. One of our most memorable adventures was conquering Mt. Whitney, where the challenge of the climb was matched only by the breathtaking views from the summit.",
    bio11: "Snowboarding gives me an exhilarating rush as I glide down the slopes, feeling the cool wind against my face. I cherish the challenge of mastering new tricks and exploring different terrains. There's something magical about being on the mountain, surrounded by stunning scenery and the crisp, fresh air.",
    
    bio12: "Designed and implemented a 4-bit transistor using Synopsys, ensuring accurate functionality and performance. Analyzed and fixed over 200 design errors using Synopsys tools, such as LVS (Layout vs. Schematic) and DVS (Design vs. Schematic), to ensure the design matched the blueprint and followed specifications. Optimized the transistor layout to minimize power consumption and improve speed, achieving design efficiency. Collaborated in the design validation process, ensuring seamless integration with larger circuit systems.",
    bio13: "Built a Bop-It game using components button, joystick, potentiometer, FRDM accelerometer, LCD and Nokia screen. Coded in Kinetic Studios using State Machine C,  reducing event handling delays by comparison to a traditional approach. Integrated components into the FRDM board leveraging clock gating, pin configuration, and GPIO initialization, which sped up hardware-software interfacing by 20%. Developed communication between the FRDM board and Arduino via Serial Presence Detect, with game outputs displayed on both the Arduino side on LCD and Nokia screens",
    bio14: "A video game chatroom that allows gamers to join their choice of a game room and chat with others. Engineered a secure Git-based login system enhancing overall user experience. Designed and optimized renaming boosting user engagement and personalization by 15%. Optimized backend and frontend processes to achieve near-instantaneous chatroom responsiveness, reducing average latency by 50% and ensuring seamless communication.",


    skills:
        {
            proficientWith: ['Python', 'Javascript', 'C++', 'Java', 'Typescript', 'React','C','Arduino IDE', 'Assembly','HTML', 'Angular'],
            exposedTo: ['AutoCAD', 'Circuit Design', 'Matlab','Synopsis','Layout Design', 'Layout Vs Schematic Testing (LVS)', 'Design Vs Schematic Testing(DVS)', 'LPE', 'Oscilloscopes', 'Digital Meters', 'Arduinos'],
            softskills: ['Teamwork', 'Communication','Attention to Detail', 'Data Analysis', 'Github Actions', 'Time management', 'Interpersonal Skills']
        }
    ,


}