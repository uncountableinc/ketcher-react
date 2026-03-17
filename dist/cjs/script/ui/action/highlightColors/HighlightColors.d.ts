import { FC } from 'react';
interface HighlightMenuProps {
    onHighlight: (color: string) => void;
    disabled?: boolean;
}
declare const HighlightMenu: FC<HighlightMenuProps>;
export default HighlightMenu;
