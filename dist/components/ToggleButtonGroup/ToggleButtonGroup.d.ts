interface ButtonItem<T> {
    label: string;
    value: T;
}
interface ToggleButtonGroupProps<T> {
    buttons: ButtonItem<T>[];
    onClick: (value: T) => void;
    defaultValue: T;
    title?: string;
}
export default function ButtonGroup<T>({ buttons, onClick, defaultValue, title, }: Readonly<ToggleButtonGroupProps<T>>): import("react/jsx-runtime").JSX.Element;
export {};
