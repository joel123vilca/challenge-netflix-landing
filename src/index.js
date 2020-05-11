import "./styles/index.css";
import img from "./assets/fondo.jpg";
import tv from "./assets/tv.png";
import videotv from "./assets/video-tv.m4v";

const element = document.getElementById("fondo");
element.src = img;
const elementTv = document.getElementById("tv");
elementTv.src = tv;

const elementVideoTv = document.getElementById("videotv");
elementVideoTv.src = videotv;