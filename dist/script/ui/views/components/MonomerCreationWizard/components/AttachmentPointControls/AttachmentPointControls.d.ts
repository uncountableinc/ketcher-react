import { AtomLabel, AttachmentPointName } from 'ketcher-core';
import { AttachmentPointSelectData } from '../../hooks/useAttachmentPointSelectsData';
import { ReactNode } from 'react';
declare type Props = {
    data: AttachmentPointSelectData;
    onNameChange: (newName: AttachmentPointName) => void;
    onLeavingAtomChange: (newLeavingAtomLabel: AtomLabel) => void;
    className?: string;
    additionalControls?: ReactNode;
    highlight?: boolean;
    isPopup?: boolean;
};
declare const AttachmentPointControls: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
export default AttachmentPointControls;
