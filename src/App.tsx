import { ReactElement, useEffect, useRef, useState } from "react";
import "./App.css";
import loverboyvid from "./loverboyvid.mp4";
import cap1 from "./assets/cap1.png";
import cap2 from "./assets/cap2.png";
import cap3 from "./assets/cap3.png";
import cap4 from "./assets/cap4.png";
import cap5 from "./assets/cap5.png";
import cap6 from "./assets/cap6.png";
import cap7 from "./assets/cap7.png";
import cap8 from "./assets/cap8.png";
import cap9 from "./assets/cap9.png";
import cap10 from "./assets/cap10.png";
import cap11 from "./assets/cap11.png";
import cap12 from "./assets/cap12.png";
import cap13 from "./assets/cap13.png";
import cap14 from "./assets/cap14.png";
import cap15 from "./assets/cap15.png";
import cap16 from "./assets/cap16.png";
import cap17 from "./assets/cap17.png";
import cap19 from "./assets/cap19.png";
import cap20 from "./assets/cap20.png";
import cap21 from "./assets/cap21.png";
import cap22 from "./assets/cap22.png";
import cap23 from "./assets/cap23.png";
import cap24 from "./assets/cap24.png";
import cap25 from "./assets/cap25.png";
import cap26 from "./assets/cap26.png";
import cap27 from "./assets/cap27.png";
import cap28 from "./assets/cap28.png";
import cap29 from "./assets/cap20.png";
import cap30 from "./assets/cap30.png";

function App() {
  const [started, setStarted] = useState(false);
  const [currentImage, setCurrentImage] = useState<ReactElement | null>();
  const [currentImage2, setCurrentImage2] = useState<ReactElement | null>();
  const [showImages, setShowImages] = useState<boolean>(false);
  const images = [
    cap1,
    cap2,
    cap3,
    cap4,
    cap5,
    cap6,
    cap7,
    cap8,
    cap9,
    cap10,
    cap11,
    cap12,
    cap13,
    cap14,
    cap15,
    cap16,
    cap17,
    cap19,
    cap20,
    cap21,
    cap22,
    cap23,
    cap24,
    cap25,
    cap26,
    cap27,
    cap28,
    cap29,
    cap30,
  ];
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const bodyEl = document.querySelector("body");

    showImages &&
      setInterval(() => {
        setCurrentImage(
          <img src={images[Math.floor(Math.random() * images.length)]} alt="" />
        );
        setCurrentImage2(
          <img src={images[Math.floor(Math.random() * images.length)]} alt="" />
        );
      }, 1950);

    showImages &&
      setTimeout(
        () =>
          setInterval(() => {
            const xPos = Math.floor(Math.random() * screen.availWidth);
            const yPos = Math.floor(Math.random() * screen.availHeight);
            const spanEl = document.createElement("span");
            spanEl.style.left = xPos + "px";
            spanEl.style.top = yPos + "px";
            const size = Math.random() * 100;
            spanEl.style.width = size + "px";
            spanEl.style.height = size + "px";
            bodyEl?.appendChild(spanEl);
            setTimeout(() => {
              spanEl.remove();
            }, 3000);
          }, 100),
        2000
      );
  }, [showImages]);

  useEffect(() => {
    started && video.current?.play();

    started &&
      setTimeout(() => {
        setShowImages(true);
      }, 13000);

    const bodyEl = document.querySelector("body");

    let timesPerSecond = 18; // how many times to fire the event per second
    let wait = false;

    started &&
      bodyEl?.addEventListener("mousemove", (event) => {
        if (wait) {
          return;
        }

        wait = true;
        // after a fraction of a second, allow events again
        setTimeout(function () {
          wait = false;
        }, 1000 / timesPerSecond);

        const xPos = event.offsetX;
        const yPos = event.offsetY;
        const spanEl = document.createElement("span");
        spanEl.style.left = xPos + "px";
        spanEl.style.top = yPos + "px";
        const size = Math.random() * 100;
        spanEl.style.width = size + "px";
        spanEl.style.height = size + "px";
        spanEl.classList.add("animatemouse");
        bodyEl.appendChild(spanEl);
        setTimeout(() => {
          spanEl.remove();
        }, 3000);
      });
  }, [started]);

  return (
    <div>
      <img
        className="point"
        style={{ animation: started ? "appear 5s ease forwards" : "" }}
        src="https://i.imgur.com/H6cSuPP.png"
      />
      <p style={{ animation: started ? "appear 5s ease 3s forwards" : "" }}>
        La respuesta siempre eres tú.
      </p>
      <p style={{ animation: started ? "disappear 2s ease 1s forwards" : "" }}>
        Siempre que me preguntan...
      </p>
      <button
        style={{ animation: started ? "disappear 1s ease forwards" : "" }}
        onClick={() => setStarted(true)}
      >
        Damn bro, who got you smiling like that? 💕
      </button>
      <video
        ref={video}
        style={{ animation: started ? "appear2 3s ease 7s forwards" : "" }}
        loop
      >
        <source src={loverboyvid} type="video/mp4" />
      </video>
      {showImages && (
        <div className="collage">
          <div>{currentImage}</div>
          <div>{currentImage2}</div>
        </div>
      )}
    </div>
  );
}

export default App;
