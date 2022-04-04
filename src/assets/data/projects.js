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
    desc: "A Calculator application that looks and feels nice. Built with vanilla JS.",
    img: Calc,
  },
  {
    id: uuidv4(),
    name: "Drum Machine",
    desc: "Use the mouse or the keyboard to interact with this Drum Machine and watch the display change according to click or keydown.",
    img: DrumMachine,
  },
  {
    id: uuidv4(),
    name: "Markdown Previewer",
    desc: "A live, split-window editor/previewer for markdown.",
    img: MDPreviewer,
  },
  {
    id: uuidv4(),
    name: "Random Quote Machine",
    desc: "A toy app that generates a random quote from a hard-coded data bank.",
    img: Quotes,
  },
  {
    id: uuidv4(),
    name: "25+5 HIIT Timer",
    desc: "A two-timer interface that can be used for interval training workouts. Once the Exercise Timer ends, the Break Timer starts automatically.",
    img: HIIT,
  },
  {
    id: uuidv4(),
    name: "Rock Paper Scissors",
    desc: "Play Rock/Paper/Scissors against the randomized machine. ",
    img: RPS,
  },
  {
    id: uuidv4(),
    name: "Simon",
    desc: "The classic Simon game with sounds and lights.",
    img: Simon,
  },
];

export default projects;
