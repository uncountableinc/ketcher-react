import { CSSProperties } from 'react';
import { AmbiguousMonomerPreviewState } from './types';
interface Props {
    className?: string;
    preview: AmbiguousMonomerPreviewState;
    style?: CSSProperties;
}
declare const AmbiguousMonomerPreview: ({ className, preview, style }: Props) => import("react/jsx-runtime").JSX.Element;
export { AmbiguousMonomerPreview };
