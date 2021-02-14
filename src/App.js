import "./App.css";
import React from "react";
import { fabric } from "fabric";

function App() {

  const init = () => {
    return new fabric.Canvas("c", {
      height: 500,
      width: 800,
      backgroundColor: "green",
    });
  }
  const draw = (canvas) => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      top: 200,
      fill: "yellow",
    });
    canvas.add(rect);
    fabric.Image.fromURL(
      "https://www.google.com/logos/doodles/2021/celebrating-maria-grever-6753651837108287.2-s.png",
      function (oImg) {
        // scale image down, and flip it, before adding it onto canvas
        oImg.scale(3).set("flipX", true);
        oImg.set("top", 120);
        oImg.set("left", 20);
        canvas.add(oImg);
        canvas.setActiveObject(oImg);
      }
    );
    canvas.renderAll();
  };

  let canvas = init();
  draw(canvas);

  return (
    <div className="App">
      <canvas id="c"> </canvas>
    </div>
  );
}

export default App;
