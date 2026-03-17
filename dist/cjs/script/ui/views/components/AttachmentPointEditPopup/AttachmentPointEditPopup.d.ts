import { AtomLabel, AttachmentPointClickData, AttachmentPointName } from 'ketcher-core';
import { Editor } from '../../../../editor';
declare type Props = {
    data: AttachmentPointClickData;
    onNameChange: (currentName: AttachmentPointName, newName: AttachmentPointName) => void;
    onLeavingAtomChange: (apName: AttachmentPointName, newLeavingAtomLabel: AtomLabel) => void;
    onClose: VoidFunction;
    editor: Editor;
};
declare const AttachmentPointEditPopup: ({ data, onNameChange, onLeavingAtomChange, onClose, editor, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export default AttachmentPointEditPopup;
