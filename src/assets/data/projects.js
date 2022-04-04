import { v4 as uuidv4 } from "uuid";
import MDPreviewer from "../images/markdown.jpg";
import Calc from "../images/calc.jpg";
import DrumMachine from "../images/drum_machine.jpg";
import Quotes from "../images/quotes.jpg";
import HIIT from "../images/hiit.jpg";
import RPS from "../images/rps.jpg";
import Simon from "../images/simon.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "JS Calculator",
    desc: "A Calculator application that looks and feels nice. Built with vanilla JS. This is the last side project I built before diving into learning React.",
    img: Calc,
    link: "https://codepen.io/idmillr/pen/rNYpjxZ",
  },
  {
    id: uuidv4(),
    name: "Drum Machine",
    desc: "This is a project I built as one of the requirements for my Frontend Dev Libraries Certification. Use the mouse or the keyboard to interact with this Drum Machine and watch the display change according to click or keydown.",
    img: DrumMachine,
    link: "https://codepen.io/idmillr/pen/LYOgOdb",
  },
  {
    id: uuidv4(),
    name: "Markdown Previewer",
    desc: "A live, split-window editor/previewer for markdown. This is another project built as a requirement for my Dev Libs cert that ties useState to real-time visual proof of its function.",
    img: MDPreviewer,
    link: "https://codepen.io/idmillr/pen/abVQmgq",
  },
  {
    id: uuidv4(),
    name: "Random Quote Machine",
    desc: "A toy app that generates a random quote from a hard-coded data bank. This was written as a requirement for my Dev Libs certification. I was comfortable using vanilla JS for this one but I have since learned that I could have saved lots of time and LOC by using React.",
    img: Quotes,
    link: "https://codepen.io/idmillr/pen/PoOjNVR",
  },
  {
    id: uuidv4(),
    name: "25+5 HIIT Timer",
    desc: "A two-timer interface that can be used for interval training workouts. Once the Exercise Timer ends, the Break Timer starts automatically. This was the trickiest of the requirements for certification. Lots of logic and events relying on other events and plenty of hands-on with useState. I had to Google lots for this one and looking back now I should have commented my code MUCH more thoroughly.",
    img: HIIT,
    link: "https://codepen.io/idmillr/pen/ZEaVEBq",
  },
  {
    id: uuidv4(),
    name: "Rock Paper Scissors",
    desc: "A tutorial walkthrough of a Rock/Paper/Scissors game. The user is able to select a move, which is compared against a randomly generated CPU move.",
    img: RPS,
    link: "",
  },
  {
    id: uuidv4(),
    name: "Simon",
    desc: "A tutorial walkthrough of the classic Simon game with sounds and lights. Lots of practice with DOM manipulation and logic as well as CSS styling for non-square elements.",
    img: Simon,
    link: "https://codepen.io/idmillr/pen/BaJJWMz",
  },
];

export default projects;
