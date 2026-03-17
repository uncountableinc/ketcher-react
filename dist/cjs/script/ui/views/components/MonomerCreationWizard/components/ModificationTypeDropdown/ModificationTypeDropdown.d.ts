interface IModificationTypeDropdownProps {
    naturalAnalogue: string;
    value: string | null;
    error?: string | null;
    onChange: (value: string) => void;
    testId?: string;
}
export default function ModificationTypeDropdown(props: Readonly<IModificationTypeDropdownProps>): import("react/jsx-runtime").JSX.Element;
export {};
