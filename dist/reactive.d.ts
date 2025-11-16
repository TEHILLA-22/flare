export declare function signal<T>(initialValue: T): {
    get: () => T;
    set: (newValue: T) => void;
};
export declare function effect(fn: () => void): void;
