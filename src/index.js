import "./styles/index.css";
import img from "./assets/fondo.jpg";
import tv from "./assets/tv.png";
import videotv from "./assets/video-tv.m4v";
import mobile from "./assets/mobile-0819.jpg";
import download from "./assets/download-icon.gif";
import boxshot from "./assets/boxshot.png";
import device from "./assets/video-devices.m4v";
import devicePile from "./assets/device-pile.png";

const element = document.getElementById("fondo");
element.src = img;
const elementTv = document.getElementById("tv");
elementTv.src = tv;

const elementVideoTv = document.getElementById("videotv");
elementVideoTv.src = videotv;

const elementMobile = document.getElementById("iphone");
elementMobile.src = mobile;
const elementDownload = document.getElementById("download");
elementDownload.src = download;
const elementBoxshot = document.getElementById("boxshot");
elementBoxshot.src = boxshot;

const elementComputerVideo = document.getElementById("computerVideo");
elementComputerVideo.src = device;

const elementComputer = document.getElementById("computer");
elementComputer.src = devicePile;

