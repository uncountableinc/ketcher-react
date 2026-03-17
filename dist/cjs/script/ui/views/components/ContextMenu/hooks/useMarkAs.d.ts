import { SelectionContextMenuProps, ItemEventParams } from '../contextMenu.types';
import { RnaPresetComponentType } from '../../MonomerCreationWizard/MonomerCreationWizard.constants';
declare type Params = ItemEventParams<SelectionContextMenuProps>;
declare const useMarkAs: () => {
    handler: (componentType: RnaPresetComponentType) => (_params: Params) => void;
    isVisible: () => boolean | undefined;
    isDisabled: () => boolean;
};
export default useMarkAs;
