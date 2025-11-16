import { component } from "./component";
import { signal, effect } from "./reactive";
import { mount } from "./flareDom"; 

const message = signal("Welcome, it's time to Flare Up! 🚀");

const Welcome = component(() => {
  const div = document.createElement("div");
  div.style.textAlign = "center";
  div.style.fontFamily = "Arial, sans-serif";
  div.style.padding = "2rem";
  div.style.background = "#1e1e1e";
  div.style.color = "#ffae00";
  div.style.borderRadius = "12px";
  div.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  div.style.fontSize = "1.5rem";

  const p = document.createElement("p");
  effect(() => {
    p.textContent = message.get();
  });

  div.appendChild(p);
  return div;
});

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    mount(Welcome, document.body);

    setTimeout(() => {
      message.set("🔥 Flare is ready to ignite your apps! 🔥");
    }, 2000);
  });
}
