import { component, signal } from "./component";
// Reactive signal
const count = signal(0);
// Component with props and hooks
const Counter = component((props, hooks) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = `Count: ${props.initial || 0}`;
    div.appendChild(p);
    const btn = document.createElement("button");
    btn.textContent = "Increment";
    btn.onclick = () => props.signal.set(props.signal.get() + 1);
    div.appendChild(btn);
    // Mount / Unmount hooks
    hooks.onMount.push(() => console.log("Counter mounted"));
    hooks.onUnmount.push(() => console.log("Counter unmounted"));
    // Update paragraph reactively
    hooks.onMount.push(() => {
        effect(() => {
            p.textContent = `Count: ${props.signal.get()}`;
        });
    });
    return div;
});
