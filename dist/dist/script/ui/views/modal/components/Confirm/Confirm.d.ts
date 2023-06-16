/// <reference types="react" />
declare type ConfirmProps = {
    onOk: () => void;
    onCancel: () => void;
};
export declare const Confirm: ({ onOk, onCancel }: ConfirmProps) => JSX.Element;
export {};
