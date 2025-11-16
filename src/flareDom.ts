export function mount(componentInstance: ReturnType<typeof import("./component").component>, container: HTMLElement) {
  const { el } = componentInstance();
  if (!el) return;
  container.appendChild(el);
}
