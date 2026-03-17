import { RnaPresetWizardAction, RnaPresetWizardState } from './MonomerCreationWizard.types';
import { Editor } from '../../../../editor';
interface IRnaPresetTabsProps {
    wizardState: RnaPresetWizardState;
    editor: Editor;
    wizardStateDispatch: (action: RnaPresetWizardAction) => void;
}
export declare const RnaPresetTabs: (props: IRnaPresetTabsProps) => import("react/jsx-runtime").JSX.Element;
export {};
