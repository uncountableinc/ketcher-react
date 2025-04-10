import { CustomButton } from '../../../../builders/ketcher/CustomButtons';
interface CustomButtonsProps {
    customButtons: Array<CustomButton>;
    isCollapsed: boolean;
    onCustomAction: (name: string) => void;
}
export declare const CustomButtons: ({ isCollapsed, customButtons, onCustomAction, }: CustomButtonsProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
