function jdomAdd(name, {
  text, html, style, props, attr, data, events, parent,
  children, hover, tooltip, speakText, animate, visibleIf,
  classList, delayAppend, clickNavigate, prepend, shadowDom,
  tabIndex, aria, themeSwitch, keyBind, clipboard, focusOnLoad,
  group, dragEnable, responsive, loadImage, cardify
} = {}) {

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

  if (speakText) {
    el.addEventListener("click", () => {
      const uttr = new SpeechSynthesisUtterance(speakText);
      speechSynthesis.speak(uttr);
    });
  }

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

  if (cardify) {
    el.classList.add("cardify");
    el.innerHTML = `
      <img src="${cardify.img || ''}" alt="${cardify.title || ''}" />
<h3>${cardify.title || 'No title'}</h3>
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
    const target = typeof parent === 'string' ? document.getElementById(parent) : parent;
    if (target) {
      if (prepend) target.prepend(el);
      else target.appendChild(el);
    }
  };

  if (delayAppend) {
    setTimeout(appendToParent, delayAppend);
  } else {
    appendToParent();
  }

  return el;

}
