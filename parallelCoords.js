
    /* let ret = reglCanvas(this, {
      width,
      height,
      attributes: { antialias: true },
      extensions: ["OES_standard_derivatives"],
      style: { backgroundColor: "gray" }
    });
    // reglCanvas(curr, opts)
    
    const canvas = DOM.element("canvas");
    // Clone the options since canvas creation mutates the `attributes` object,
    // causing false positives when we then use it to detect changed config.
    const style = config.style;
    delete config.style;
    const regl = createREGL({ canvas, ...JSON.parse(JSON.stringify(config)) });
    resizeCanvas(canvas, w, h);
    canvas.value = regl;
    canvas.config = config;
    */



// library constructors from Ricky Reusser's regl canvas notebooks

// import { elementStack } from "@rreusser/element-stack"
export function elementStack(
    currentStack,
    { width = null, height = null, layers = {}, onResize = null } = {}
  ) {
    const container = currentStack || document.createElement("figure");
    container.style.position = "relative";
    if (!currentStack && onResize) {
      const observer = new ResizeObserver(([{ contentRect }]) => {
        onResize({ layers: container.value, rect: contentRect });
        container.dispatchEvent(new CustomEvent("input"));
      });
      observer.observe(container);
    }
    const stack = {};
    let defaultZindex = 0;
    for (const [label, props] of Object.entries(layers)) {
      const layer = typeof props === "function" ? props : props.layer;
      const id = `element-stack-layer-${label}`;
      const current = container.querySelector(`#${id}`);
      const newEl = layer({ current, width, height });
      newEl.setAttribute("id", id);
      if (!newEl.style.position) newEl.style.position = "absolute";
      stack[label] = newEl;
      if (current) {
        current.replaceWith(newEl);
      } else {
        container.appendChild(newEl);
      }
    }
    if (width) container.style.width = `${width}px`;
    if (height) container.style.height = `${height}px`;
    container.value = stack;
    return container;
  }

// 	<script language="javascript" src="./regl.min.js"></script>

// import { reglCanvas } from "@rreusser/regl-canvas"
/* export function reglCanvas(currentCanvas, opts) {
    opts = opts || {};
    const w = opts.width || width;
    const h = opts.height || Math.floor(w * 0.5);
    const createREGL = opts.createREGL || createREGL; // IMPLICIT DEPENDENCY
  
    function normalizeConfig(opts) {
      const normalized = Object.assign(
        {},
        {
          pixelRatio: devicePixelRatio,
          attributes: {},
          extensions: [],
          optionalExtensions: [],
          profile: false
        },
        opts || {}
      );
      delete normalized.width;
      delete normalized.height;
      return normalized;
    }
  
    const config = normalizeConfig(opts);
  
    function preserveExisting(canvas, newConfig) {
      const currentConfig = canvas.config;
      if (JSON.stringify(currentConfig) !== JSON.stringify(newConfig)) {
        return false;
      }
      return canvas;
    }
  
    function resizeCanvas(canvas, width, height) {
      if (width) {
        canvas.width = Math.floor(width * config.pixelRatio);
        canvas.style.width = `${Math.floor(width)}px`;
      }
      if (height) {
        canvas.height = Math.floor(height * config.pixelRatio);
        canvas.style.height = `${Math.floor(height)}px`;
      }
    }
  
    if (currentCanvas) {
      if (!(currentCanvas instanceof HTMLCanvasElement)) {
        throw new Error(
          "Unexpected first argument type. Did you forget to pass `this` as the first argument?"
        );
      }
      resizeCanvas(currentCanvas, w, h);
      const existing = preserveExisting(currentCanvas, config);
      if (existing) return existing;
    }
  
    const canvas = DOM.element("canvas");
    // Clone the options since canvas creation mutates the `attributes` object,
    // causing false positives when we then use it to detect changed config.
    const style = config.style;
    delete config.style;
    const regl = createREGL({ canvas, ...JSON.parse(JSON.stringify(config)) });
    resizeCanvas(canvas, w, h);
    canvas.value = regl;
    canvas.config = config;
  
    if (style) {
      for (const [prop, value] of Object.entries(style)) {
        if (canvas.style[prop] !== value) canvas.style[prop] = value;
      }
    }
  
    return canvas;
  }  */