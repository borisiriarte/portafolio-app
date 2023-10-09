import React, { useEffect, useRef } from "react";
import "../styles/Canvas.css";
import { useState } from "react";
import useWindowsDimensions from "../Hooks/useWindowDimension";
import Star from "../model/Star";
import { getRndNumberBtwn } from "../helpers/helperQuantity";
import { colors } from "../helpers/helperColor";

function Starfield() {
  const useCanvas = useRef(null);
  let dimensions = useWindowsDimensions();
  let stars = [];
  let timeOutFunctionId;

  const setCanvasDimensions = (canvas, width, height) => {
    canvas.width = width;
    canvas.height = height;
  };

  const numberOfStars = (width, height) => {
    return Math.floor(Math.min(width, height) / 6);
  };

  const setStarProperties = (context, w, h) => {
    return {
      x: getRndNumberBtwn(0, w),
      y: getRndNumberBtwn(0, h),
      size: getRndNumberBtwn(0, 1),
      color: colors[Math.floor(getRndNumberBtwn(0, colors.length - 1))],
      shadowBlur: getRndNumberBtwn(2, 20),
      context,
    };
  };

  const createStars = (ctx, width, height) => {
    let number = numberOfStars(width, height);

    for (let i = 0; i < number; i++) {
      let { x, y, size, color, shadowBlur, context } = setStarProperties(
        ctx,
        width,
        height
      );
      let star = new Star(x, y, color, shadowBlur, size, context);

      stars.push(star);
    }
  };

  function renderStars() {
    stars.forEach((star) => star.render());
  }

  function debounceResize(callback, time) {
    clearTimeout(timeOutFunctionId);
    timeOutFunctionId = setTimeout(callback, time);
  }

  function handleResize() {
    const { width, height } = dimensions;
    const canvas = useCanvas.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, width, height);

    debounceResize(() => {
      setCanvasDimensions(canvas, width, height);
      createStars(ctx, width, height);
      renderStars();
    }, 800);
  }

  useEffect(() => {
    handleResize();
  }, [dimensions]);

  return <canvas className="canvas" ref={useCanvas}></canvas>;
}

export default Starfield;
