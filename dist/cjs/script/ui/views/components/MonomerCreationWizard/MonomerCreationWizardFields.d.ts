import { AttachmentPointName } from 'ketcher-core';
import { StringWizardFormFieldId, WizardState } from './MonomerCreationWizard.types';
interface IMonomerCreationWizardFieldsProps {
    wizardState: WizardState;
    assignedAttachmentPoints: Map<AttachmentPointName, [number, number]>;
    onChangeModificationTypes?: (modificationTypes: string[]) => void;
    onFieldChange: (fieldId: StringWizardFormFieldId, value: string) => void;
    showNaturalAnalogue?: boolean;
}
declare const MonomerCreationWizardFields: (props: IMonomerCreationWizardFieldsProps) => import("react/jsx-runtime").JSX.Element | null;
export default MonomerCreationWizardFields;
