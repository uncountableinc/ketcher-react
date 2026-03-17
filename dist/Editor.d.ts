import { EditorProps } from './MicromoleculesEditor';
declare type Props = Omit<EditorProps, 'ketcherId'> & {
    disableMacromoleculesEditor?: boolean;
    monomersLibraryUpdate?: string | JSON;
    monomersLibraryReplace?: string | JSON;
};
export declare const Editor: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
