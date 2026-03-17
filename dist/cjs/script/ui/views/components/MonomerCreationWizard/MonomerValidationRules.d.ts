import { KetMonomerClass, AttachmentPointName, AtomLabel } from 'ketcher-core';
export declare type LeavingGroupRequirement = {
    attachmentPoint: AttachmentPointName;
    expectedLeavingGroup: AtomLabel;
};
export declare type MonomerValidationRule = {
    monomerType: KetMonomerClass;
    requirements: LeavingGroupRequirement[];
    warningMessage: string;
};
export declare const MONOMER_VALIDATION_RULES: MonomerValidationRule[];
export declare const getValidationRuleForMonomerType: (monomerType: KetMonomerClass | 'rnaPreset') => MonomerValidationRule | undefined;
