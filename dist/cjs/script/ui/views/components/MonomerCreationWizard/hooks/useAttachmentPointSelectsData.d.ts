import { AttachmentPointName } from 'ketcher-core';
import { Editor } from '../../../../../editor';
import { Option } from '../../../../component/form/Select';
export declare type AttachmentPointSelectData = {
    nameOptions: Array<Option>;
    leavingAtomOptions: Array<Option>;
    currentNameOption?: Option;
    currentLeavingAtomOption?: Option;
};
export declare const useAttachmentPointSelectsData: (editor: Editor, attachmentPointName: AttachmentPointName) => AttachmentPointSelectData | null;
