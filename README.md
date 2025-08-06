# jdomAdd.js - Yūto DOM Factory 🌟
Create DOM elements with superpowers!  
jdomAdd() is a flexible utility function for generating HTML elements using up to 30 configuration keys — supporting styles, attributes, events, speech, animation, cards, and even Shadow DOM.  
Perfect for building family-friendly UIs and educational projects.

---

🚀 Features

- Supports 30 different keys for dynamic DOM creation
- Speech synthesis, hover styles, and animations
- Accessibility-friendly: ARIA, tabIndex, theme switching
- Reusable card layout, clipboard support, responsive styles
- Ideal for educational interfaces or playful UI for younger users!

Demo page here
[Here](https://ytaka500491.github.io/jdomadd/pages/demopage.html)
---

📦 Basic Usage

JavaScript
`
jdomAdd("button", {
  text: "reservation",
  style: { backgroundColor: "#ff66aa" },
  speakText: "You will be redirected to the reservation page.",
  events: { click: () => location.href = "/reservation.html" },
  parent: "main"
});
`

---

🧩 Key Options Overview (partial list)

- text: Sets the text content  
- style: Apply inline CSS styles  
- events: Add event listeners  
- hover: Style changes on hover  
- speakText: Speech synthesis on click  
- tooltip: Show text on hover  
- clipboard: Copy content to clipboard  
- cardify: Display content as a styled card  
- responsive: Style switches based on screen size  
- children: Nested element creation  
- shadowDom: Inject into Shadow DOM  
- group: Tag elements by group  

And many more — supporting full UI generation!

---

🎮 Example Use Cases

- 🧒 Voice-guided interfaces for younger users  
- 👨‍👩‍👧‍👦 Family calendars and clinic dashboards  
- 🎮 Game-style buttons and animated cards  
- 🌗 Theme-switching layouts and responsive widgets

---

📁 License

MIT License  
Feel free to use, modify, and share — especially for creating smiles in your household 😊

---

📝 Creator

Crafted with ❤️ by Yūto  
