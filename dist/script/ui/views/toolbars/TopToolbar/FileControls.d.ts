interface FileControlsProps {
    onFileOpen: () => void;
    onSave: () => void;
    shortcuts: {
        [key in string]: string;
    };
    hiddenButtons: string[];
}
export declare const FileControls: ({ onFileOpen, onSave, shortcuts, hiddenButtons, }: FileControlsProps) => import("react/jsx-runtime").JSX.Element;
export {};
