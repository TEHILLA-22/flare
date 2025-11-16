# Flare 🚀

**Flare** is a blazing-fast, reactive UI framework with built-in routing and components.  
Designed to be lightweight, intuitive, and fully TypeScript-ready — no virtual DOM required.

---

## Features

- 🔥 **Reactive State** – Fine-grained signals & effects for instant DOM updates  
- 🧩 **Components** – Props, lifecycle hooks (`onMount`, `onUnmount`), nested components  
- 🌐 **Router** – Nested SPA routing with automatic mount/unmount  
- ⚡ **Tiny Runtime** – Fast, minimal, no virtual DOM overhead  
- 🛠 **TypeScript Ready** – Strongly typed for modern web development  

---

## Installation

```bash
# Install Flare from npm
npm install flare
```
import { signal, component, mount, RouterView, createRouter, navigate } from "flare";

// Reactive signal
const count = signal(0);

// Simple Counter component
const Counter = component(() => {
  const div = document.createElement("div");

  const p = document.createElement("p");
  p.textContent = `Count: ${count.get()}`;
  div.appendChild(p);

  const btn = document.createElement("button");
  btn.textContent = "Increment";
  btn.onclick = () => count.set(count.get() + 1);
  div.appendChild(btn);

  return div;
});

// Mount Counter to body
mount(Counter, document.body);
