export default function ButtonGroup<T>({ buttons, onClick, defaultValue, title, }: {
    buttons: {
        label: string;
        value: T;
    }[];
    onClick: (value: T) => void;
    defaultValue: T;
    title?: string;
}): import("react/jsx-runtime").JSX.Element;
