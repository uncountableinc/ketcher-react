import { FC } from 'react';
import { KetMonomerClass } from 'ketcher-core';
interface ChipGridSelectProps {
    monomerType: KetMonomerClass | 'rnaPreset' | undefined;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    error?: boolean;
}
export declare const isNaturalAnalogueRequired: (monomerType: KetMonomerClass | 'rnaPreset' | undefined) => boolean;
declare const NaturalAnaloguePicker: FC<ChipGridSelectProps>;
export default NaturalAnaloguePicker;
