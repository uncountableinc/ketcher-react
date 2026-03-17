import { FC } from 'react';
import { Render, SGroup } from 'ketcher-core';
interface SGroupDataRenderProps {
    clientX: number;
    clientY: number;
    render: Render;
    sGroup: SGroup;
    sGroupData: string | null;
    className?: string;
}
declare const SGroupDataRender: FC<SGroupDataRenderProps>;
export default SGroupDataRender;
