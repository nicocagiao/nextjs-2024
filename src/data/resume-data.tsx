import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import PrintsLogo from "../images/logos/printsandcrafts.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import EjesLogo from "../images/logos/ejes.png";
import IndecLogo from "../images/logos/indec.png";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Nicolás Cagiao",
  initials: "NC",
  location: "Buenos Aires, Argentina",
  locationLink: "https://maps.app.goo.gl/m7wcy4nZQMXYD3FW7",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "Fullstack developer & Infrastructure Engineer, based in Buenos Aires, Argentina. Spanish native speaker, B2 Upper/Intermediate English level. Ten years of experience working with teams, analyzing data, and meeting strict project deadlines.",
  avatarUrl: "https://drive.google.com/file/d/1ck2uyZaFCiCY2h82gz--56j9q3A5elw7/view?usp=sharing",
  contact: {
    email: "nico.cagiao@gmail.com",
    tel: "+5491160170178",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nicocagiao",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nicocagiao/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/nicocagiao",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Tecnológica Nacional UTN",
      degree: "Fullstack Web development",
      start: "2019",
      end: "2019",
    },
    {
      school: "Udemy",
      degree: "Ultimate AWS Certified Solutions Architect Associate",
      start: "2023",
      end: "2023",
    },
    {
      school: "Udemy",
      degree: "Terraform",
      start: "2023",
      end: "2023",
    },
    {
      school: "Alkemy",
      degree: "Fullstack web development (Nodejs + React)",
      start: "2022",
      end: "2022"
    }
  ],
  work: [
    {
      company: "INDEC",
      link: "https://www.indec.gob.ar/",
      badges: ["Remote"],
      title: "Senior external consultant",
      logo: IndecLogo,
      start: "2018",
      end: "2023",
      description:
        "Monthly journalistic consultancy, data analysis, statistics, annual summary, and the creation of a monthly report evaluating the media performance of INDEC in the National Media Agenda. GoogleSheets",
    },
    {
      company: "Prints&Crafts",
      badges: ["Remote"],
      title: "AWS Architect → Full Stack Developer",
      logo: PrintsLogo,
      start: "2022",
      end: "2023",
      description:
        "Web App hosted in AWS infrastructure for a Screen Printing shop located in Buenos Aires. Live streaming server using Docker.",
    },
    {
      company: "Alkemy Work Training Academy",
      link: "https://www.alkemy.org/",
      badges: [],
      title: "React + Node Developer",
      start: "2022",
      end: "2022",
      description:
        "Real work environment training for developing an ONG site - (React + Node, JWT, Axios, Redux, Formik, Express.js, SweetAlert, Jira, GIT, SCRUM)",
    },
    {
      company: "Ejes de Comunicación",
      link: "http://ejes.com/",
      badges: [],
      title: "Media adviser → senior media auditor ",
      logo: EjesLogo,
      start: "2016",
      end: "2022",
      description: "Media clipping from print media, radio and TV monitoring through a digital platform. Analysis and creation of reports. Direct Client service.",
    },
  ],
  skills: [
    "JavaScript",
    "AWS Architecture",
    "React/Next.js/",
    "Node.js",
    "GraphQL",
    "Redux",
    "GIT",
    "Docker",
  ],
  projects: [
    {
      title: "Prints&Crafts Streaming",
      techStack: [
        "Official proyect",
        "JavaScript",
        "CloudServices",
        "Docker",
        "Restreamer",
        "Twitch",
      ],
      description: "A Server to stream from a security camera",
    },
    {
      title: "LeerPerfil",
      techStack: ["Side Project", "JavaScript", "Chrome Web Store", "Browser Extension"],
      description:
        "Browser extension that facilitates to read Perfil.com without a paywall",
      link: {
        label: "leePerfil",
        href: "https://chromewebstore.google.com/detail/leer-perfil/fekochhdlegibpdddlpfocgnlhchfbei?hl=es",
      },
    },
    {
      title: "Alkemy Aceleration proyect",
      techStack: ["Side Project", "React", "Node.js", "JWT", "Express.js", "Redux"],
      description:
        "Back end and front end for an ONG web app",
      link: {
        label: "Alkemy Certificate",
        href: "https://assets.alkemy.org/certificates/auth0%7C6168e85402b3dd0071c97d44/017664da-1a0c-4db5-96fc-68a38c747286.png",
      },
    },
    {
      title: "WhatsApp Chat Analyzer",
      techStack: ["Side Project", "JavaScript", "grafica.js", "p5.js"],
      description:
        "Minimalist app to analize your chats with friends and family",
      logo: Minimal,
      link: {
        label: "ChatAnalyzer",
        href: "https://github.com/nicocagiao/ChatAnalisis",
      },
    },
      {
      title: "DsD News portal",
      techStack: ["PHP", "HTML", "CSS", "Database"],
      description:
        "News site made in PHP",
      link:{
        label: "DiarioSobreDiarios",
        href: "https://github.com/nicocagiao/DsD"
      },
    },
  ],
} as const;
