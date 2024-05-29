/// <reference types="react" />
import { UiActionAction } from '../../../action';
export declare type FloatingToolsProps = {
    visible: boolean;
    rotateHandlePosition: {
        x: number;
        y: number;
    };
    status: {
        disabled?: boolean;
        hidden?: boolean;
    };
    indigoVerification: boolean;
};
export declare type FloatingToolsCallProps = {
    onAction: (action: UiActionAction) => void;
};
declare type Props = FloatingToolsProps & FloatingToolsCallProps;
export declare const FloatingTools: React.FC<Props>;
export {};
