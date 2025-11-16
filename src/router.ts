import { signal, effect } from "./reactive";
import { component } from "./component";

// Type definitions
type Route = {
  path: string;
  component: ReturnType<typeof component>;
};

// Reactive current route
const currentPath = signal(window.location.pathname);

// Listen to history changes
window.addEventListener("popstate", () => {
  currentPath.set(window.location.pathname);
});

// Router registry
const routes: Route[] = [];

// Register a route
export function createRouter(routeList: Route[]) {
  routes.push(...routeList);
}

// Navigate programmatically
export function navigate(path: string) {
  window.history.pushState({}, "", path);
  currentPath.set(path);
}

// Router view component
export const RouterView = component(() => {
  const div = document.createElement("div");

  effect(() => {
    // find matching route
    const route = routes.find(r => r.path === currentPath.get());
    if (!route) {
      div.textContent = "404 Not Found";
      return;
    }

    // remove previous children
    div.innerHTML = "";

    const comp = route.component();
    if (comp.el) div.appendChild(comp.el);
  });

  return div;
});
