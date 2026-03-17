import { KetMonomerClass } from 'application/formatters';
import { IconName } from 'components';
import { Editor } from '../../../../editor';
import { Selection } from '../../../../editor/Editor';
import { AttachmentPointName } from 'domain/types';
import { ActionDispatch } from 'react';
export declare type MonomerTypeSelectItem = {
    value: KetMonomerClass | 'rnaPreset';
    label: string;
    iconName: IconName;
};
export declare type WizardFormFieldId = 'type' | 'symbol' | 'name' | 'naturalAnalogue' | 'aliasHELM';
export declare type RnaPresetWizardStateFieldId = 'base' | 'sugar' | 'phosphate' | 'preset';
export declare type RnaPresetWizardComponentStateFieldId = Exclude<RnaPresetWizardStateFieldId, 'preset'>;
export declare type StringWizardFormFieldId = Exclude<WizardFormFieldId, 'type'>;
export declare type WizardValues = {
    type: KetMonomerClass | 'rnaPreset' | undefined;
} & {
    [key in StringWizardFormFieldId]: string;
};
export declare type WizardNotificationType = 'info' | 'error' | 'warning';
export declare type WizardNotificationId = 'defaultAttachmentPoints' | 'emptyMandatoryFields' | 'invalidSymbol' | 'symbolExists' | 'editingIsNotAllowed' | 'noAttachmentPoints' | 'incorrectAttachmentPointsOrder' | 'attachmentPointsNotUnique' | 'creationSuccessful' | 'creationRNASuccessful' | 'incontinuousStructure' | 'notUniqueModificationTypes' | 'modificationTypeExists' | 'notMinimalViableStructure' | 'impureStructure' | 'notUniqueHELMAlias' | 'invalidHELMAlias' | 'invalidRnaPresetStructure' | 'notUniquePresetCode' | 'invalidPresetCode';
export declare type WizardNotificationTypeMap = Record<WizardNotificationId, WizardNotificationType>;
export declare type WizardNotificationMessageMap = Record<WizardNotificationId, string>;
export declare type WizardNotification = {
    type: WizardNotificationType;
    message: string;
};
export declare type WizardErrors = Partial<Record<WizardFormFieldId | 'emptyModificationType', boolean>>;
export declare type WizardNotifications = Map<WizardNotificationId, WizardNotification>;
export declare type WizardState = {
    values: WizardValues;
    errors: WizardErrors;
    notifications: WizardNotifications;
    structure?: Selection;
};
export declare type RnaPresetWizardStatePresetFieldValue = {
    name: string;
    errors: {
        name?: boolean;
    };
    notifications: WizardNotifications;
    manuallyModifiedSymbols: {
        base: boolean;
        sugar: boolean;
        phosphate: boolean;
    };
};
export declare type RnaPresetWizardState = {
    base: WizardState;
    sugar: WizardState;
    phosphate: WizardState;
    preset: RnaPresetWizardStatePresetFieldValue;
};
export declare type WizardAction = {
    type: 'SetFieldValue';
    fieldId: 'type';
    value: KetMonomerClass;
} | {
    type: 'SetFieldValue';
    fieldId: StringWizardFormFieldId;
    value: string;
} | {
    type: 'SetErrors';
    errors: WizardErrors;
} | {
    type: 'SetNotifications';
    notifications: WizardNotifications;
} | {
    type: 'AddNotification';
    id: WizardNotificationId;
} | {
    type: 'RemoveNotification';
    id: WizardNotificationId;
} | {
    type: 'ResetWizard';
} | {
    type: 'ResetErrors';
};
export declare type RnaPresetWizardAction = (WizardAction & {
    rnaComponentKey: RnaPresetWizardStateFieldId;
    editor: Editor;
}) | {
    type: 'SetRnaPresetComponentStructure';
    rnaComponentKey: RnaPresetWizardStateFieldId;
    editor: Editor;
} | {
    type: 'UpdateRnaPresetComponentStructure';
    rnaComponentKey: RnaPresetWizardComponentStateFieldId;
    atomIds: number[];
    bondIds: number[];
} | {
    type: 'ResetErrors';
} | {
    type: 'ResetWizard';
} | {
    type: 'SetErrors';
    errors: {
        name?: boolean;
    };
    rnaComponentKey: RnaPresetWizardStateFieldId;
} | {
    type: 'RemoveNotification';
    id: WizardNotificationId;
};
export declare type AssignedAttachmentPointsByMonomerType = Map<WizardState, Map<AttachmentPointName, [number, number]>>;
export declare function isDispatchActionForRnaPreset(action: ActionDispatch<[WizardAction]> | ActionDispatch<[RnaPresetWizardAction]>): action is ActionDispatch<[RnaPresetWizardAction]>;
