import { KetMonomerClass, AttachmentPointName } from 'ketcher-core';
import { WizardNotification } from './MonomerCreationWizard.types';
import { Editor } from 'src/script/editor/Editor';
export declare const validateMonomerLeavingGroups: (editor: Editor, monomerType: KetMonomerClass | 'rnaPreset', assignedAttachmentPoints: Map<AttachmentPointName, [number, number]>) => Map<string, WizardNotification>;
