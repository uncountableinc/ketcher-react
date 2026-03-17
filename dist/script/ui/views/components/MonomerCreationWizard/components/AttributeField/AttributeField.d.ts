import { ReactNode } from 'react';
declare type Props = {
    title: string;
    control: ReactNode;
    required?: boolean;
    disabled?: boolean;
};
declare const AttributeField: ({ title, control, required, disabled }: Props) => import("react/jsx-runtime").JSX.Element;
export default AttributeField;
