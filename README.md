jdomAdd
A flexible utility for creating enhanced DOM elements  

jdomAdd() is a versatile JavaScript function that enables the creation of HTML elements using up to 30 configuration keys. It supports styling, attributes, event handling, speech synthesis, animations, card layouts, Shadow DOM integration, and accessibility features.

Install

 npm
 
 bash`
  npm install jdomadd
`

---

Features

- Supports up to 30 configuration keys for dynamic DOM generation  
- Includes speech synthesis, hover styling, and animation support  
- Accessibility-ready: ARIA attributes, tabIndex, and theme switching  
- Built-in support for card layouts, clipboard operations, and responsive design  

---

Basic Usage

javascript`
  jdomAdd("button", {
  text: "reservation",
  style: { backgroundColor: "#ff66aa" },
  speakText: "You will be redirected to the reservation page.",
  events: { click: () => location.href = "/reservation.html" },
  parent: "main"
 });
`

---

Key Options Overview (Partial)

- text: Sets the element’s text content  
- style: Applies inline CSS styles  
- events: Adds event listeners  
- hover: Defines hover styles  
- speakText: Triggers speech synthesis on interaction  
- tooltip: Displays tooltip on hover  
- clipboard: Enables clipboard copy functionality  
- cardify: Formats content as a styled card  
- responsive: Adjusts styles based on screen size  
- children: Creates nested child elements  
- shadowDom: Injects content into a Shadow DOM  
- group: Tags elements for grouped operations  

Additional keys are available to support full UI generation workflows.

---

License

MIT License  
Free to use, modify, and distribute.
