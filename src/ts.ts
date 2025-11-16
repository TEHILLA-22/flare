import { component } from "./component";
import { createRouter, RouterView, navigate } from "./router";
import { mount } from "./flareDom";

// Components
const Home = component(() => {
  const div = document.createElement("div");
  div.textContent = "Welcome to Home!";
  const btn = document.createElement("button");
  btn.textContent = "Go to About";
  btn.onclick = () => navigate("/about");
  div.appendChild(btn);
  return div;
});

const About = component(() => {
  const div = document.createElement("div");
  div.textContent = "This is About page!";
  const btn = document.createElement("button");
  btn.textContent = "Go to Home";
  btn.onclick = () => navigate("/");
  div.appendChild(btn);
  return div;
});

// Register routes
createRouter([
  { path: "/", component: Home },
  { path: "/about", component: About }
]);

// Mount RouterView
mount(RouterView, document.body);
