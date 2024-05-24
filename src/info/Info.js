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
    bio6: "The program allows users to enhance productivity and task management. My responsibility was to design and implement a system that allows users to create, manage, and track tasks. I utilized C++ and integrated several libraries including string for manipulating text, io-stream for input/output operations, lists for managing task collections, and time for handling durations and due dates It enhanced my technical skills in C++ and software development but also demonstrated my ability to deliver practical solutions that meet user needs",
    bio7: "Arduino-based system capable of measuring both the length and temperature of objects Task involves designing and coding a reliable system that integrates temperature, humidity, and distance measurements, displaying the data on an LCD screen. Utilized a DHT11 temperature and humidity module for environmental readings, an ultrasonic sensor for measuring object lengths, and a Nokia LCD for displaying the measurements. Resulted in a highly functional and accurate measurement tool, praised for its versatility and ease of use",
    bio8: "Adept at effectively communicating with athletes, coaches, and fellow officials to maintain a smooth and efficient event flow. Committed to upholding the integrity of the sport and promoting a positive environment for all participants. ",
    bio9: "Operated production equipment according to daily work orders while maintaining strict safety procedures.  Worked well in team environments to meet rush-hour demands ",
    bio10: "Exploring the great outdoors with my dad has always been a cherished activity. Hiking together, especially when backpacking through rugged terrains, creates memories that last a lifetime. One of our most memorable adventures was conquering Mt. Whitney, where the challenge of the climb was matched only by the breathtaking views from the summit.",
    bio11: "Snowboarding gives me an exhilarating rush as I glide down the slopes, feeling the cool wind against my face. I cherish the challenge of mastering new tricks and exploring different terrains. There's something magical about being on the mountain, surrounded by stunning scenery and the crisp, fresh air.",
   
    skills:
        {
            proficientWith: ['Python', 'Javascript', 'C++', 'Java', 'Typescript', 'React','C','Arduino IDE', 'Assembly','HTML', 'Angular'],
            exposedTo: ['AutoCAD', 'Circuit Design', 'Matlab','Synopsis','Layout Design', 'Layout Vs Schematic Testing (LVS)', 'Design Vs Schematic Testing(DVS)', 'LPE', 'Oscilloscopes', 'Digital Meters', 'Arduinos'],
            softskills: ['Teamwork', 'Communication','Attention to Detail', 'Data Analysis', 'Github Actions', 'Time management', 'Interpersonal Skills']
        }
    ,


}