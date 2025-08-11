window.jdomAdd = (name, {
  text, html, style, props, attr, data, events, parent,
  children, hover, tooltip, speakText, animate, visibleIf,
  classList, delayAppend, clickNavigate, prepend, shadowDom,
  tabIndex, aria, themeSwitch, keyBind, clipboard, focusOnLoad,
  group, dragEnable, responsive, loadImage, cardify
} = {}) => {
if (!name) {
  console.warn("jdomAdd: Element name is required.");
  return null;
}

   const el = document.createElement(name);

  if (text) el.textContent = text;
  if (html) el.innerHTML = html;
  if (style) Object.assign(el.style, style);
  if (props) Object.assign(el, props);
  if (attr) for (let k in attr) el.setAttribute(k, attr[k]);
  if (data) for (let k in data) el.dataset[k] = data[k];
  if (events) for (let k in events) el.addEventListener(k, events[k]);
  if (classList) el.classList.add(...classList);
  if (tabIndex !== undefined) el.tabIndex = tabIndex;
  if (aria) for (let k in aria) el.setAttribute(`aria-${k}`, aria[k]);

  if (hover) {
    el.addEventListener("mouseenter", () => Object.assign(el.style, hover));
    el.addEventListener("mouseleave", () => Object.assign(el.style, style || {}));
  }

  if (tooltip) {
    el.title = tooltip;
  }

  if (speakText && 'speechSynthesis' in window) {
  el.addEventListener("click", () => {
    const uttr = new SpeechSynthesisUtterance(speakText);
    speechSynthesis.speak(uttr);
  });
} else console.info("jdomAdd: Function SpeechSynthesisUtterance is not available on your browser.");

  if (animate) {
    el.style.transition = animate.transition || "all 0.3s ease";
    if (animate.initial) Object.assign(el.style, animate.initial);
    el.addEventListener("mouseenter", () => {
      if (animate.hover) Object.assign(el.style, animate.hover);
    });
    el.addEventListener("mouseleave", () => {
      if (animate.initial) Object.assign(el.style, animate.initial);
    });
  }

  if (visibleIf !== undefined) el.style.display = visibleIf ? "" : "none";
  if (clickNavigate) el.onclick = () => location.href = clickNavigate;

  if (clipboard) el.addEventListener("click", () => navigator.clipboard.writeText(clipboard));
  if (focusOnLoad) window.addEventListener("load", () => el.focus());
  if (keyBind) document.addEventListener("keydown", e => { if (e.key === keyBind) el.click(); });
  if (group) el.setAttribute("data-group", group);

  if (dragEnable) el.draggable = true;

  if (responsive) {
    const mq = window.matchMedia(responsive.query || "(max-width: 768px)");
    if (mq.matches && responsive.style) Object.assign(el.style, responsive.style);
  }

  if (loadImage) {
    const img = new Image();
    img.src = loadImage;
    el.appendChild(img);
  }

  if (cardify && typeof cardify === "object") {
  el.classList.add("cardify");
  el.style.width = cardify.width || "auto";
  el.style.height = cardify.height || "auto";

  el.innerHTML = `
    <img src="${cardify.img || ''}" alt="${cardify.title || ''}" style="width: 100%; height: auto;" />
    <h3>${cardify.title || ''}</h3>
    <p>${cardify.text || ''}</p>
  `;
  }
  if (shadowDom) {
    const shadow = el.attachShadow({ mode: "open" });
    shadow.innerHTML = typeof shadowDom === "string"
  ? shadowDom
  : (shadowDom.html ?? "");
  }

  if (children) {
    children.forEach(child => {
  if (child?.name && child?.options) {
    el.appendChild(jdomAdd(child.name, child.options));
  }
});
  }

 const appendToParent = () => {
  if (!parent) {
    console.warn("jdomAdd: No parent specified. Element will not be appended.");
    return;
  }

  const target = typeof parent === 'string' ? document.querySelector(parent) : parent;

  if (!target) {
    console.warn(`jdomAdd: Parent element not found: ${parent}`);
    return;
  }

  try {
    prepend ? target.prepend(el) : target.appendChild(el);
  } catch (e) {
    console.error("jdomAdd: Failed to append element:", e);
  }
};
    

}



