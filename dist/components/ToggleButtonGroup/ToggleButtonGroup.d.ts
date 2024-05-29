export default function ButtonGroup<T>({ buttons, onClick, defaultValue, }: {
    buttons: {
        label: string;
        value: T;
    }[];
    onClick: (value: T) => void;
    defaultValue: T;
}): import("react/jsx-runtime").JSX.Element;
