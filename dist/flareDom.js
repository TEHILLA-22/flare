export function mount(componentInstance, container) {
    const { el } = componentInstance();
    if (!el)
        return;
    container.appendChild(el);
}
