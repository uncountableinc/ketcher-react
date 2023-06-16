declare var _default: {
    hand: {
        title: string;
        shortcut: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'select-lasso': {
        title: string;
        shortcut: string;
        action: {
            tool: string;
            opts: string;
        };
    };
    'select-rectangle': {
        title: string;
        shortcut: string;
        action: {
            tool: string;
            opts: string;
        };
        hidden: (options: any) => boolean;
    };
    'select-fragment': {
        title: string;
        shortcut: string;
        action: {
            tool: string;
            opts: string;
        };
        hidden: (options: any) => boolean;
    };
    erase: {
        title: string;
        shortcut: string[];
        action: {
            tool: string;
            opts: number;
        };
        hidden: (options: any) => boolean;
    };
    chain: {
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'enhanced-stereo': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        disabled: (editor: any) => boolean;
        hidden: (options: any) => boolean;
    };
    'charge-plus': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
            opts: number;
        };
        hidden: (options: any) => boolean;
    };
    'charge-minus': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
            opts: number;
        };
        hidden: (options: any) => boolean;
    };
    transforms: {
        hidden: (options: any) => boolean;
    };
    'transform-rotate': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'transform-flip-h': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
            opts: string;
        };
        disabled: typeof isFlipDisabled;
        hidden: (options: any) => boolean;
    };
    'transform-flip-v': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
            opts: string;
        };
        disabled: typeof isFlipDisabled;
        hidden: (options: any) => boolean;
    };
    sgroup: {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    arrows: {
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-open-angle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-filled-triangle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-filled-bow': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-dashed-open-angle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-failed': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-both-ends-filled-triangle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-equilibrium-filled-half-bow': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-equilibrium-filled-triangle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-equilibrium-open-angle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-unbalanced-equilibrium-filled-half-bow': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-unbalanced-equilibrium-open-half-angle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-unbalanced-equilibrium-large-filled-half-bow': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-unbalanced-equilibrium-filled-half-triangle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-elliptical-arc-arrow-filled-bow': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-elliptical-arc-arrow-filled-triangle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-elliptical-arc-arrow-open-angle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-elliptical-arc-arrow-open-half-angle': {
        title: string;
        action: {
            tool: string;
            opts: RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-plus': {
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-mapping-tools': {
        hidden: (options: any) => boolean;
    };
    'reaction-map': {
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-unmap': {
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    rgroup: {
        hidden: (options: any) => boolean;
    };
    'rgroup-label': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'rgroup-fragment': {
        shortcut: string[];
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'rgroup-attpoints': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    shapes: {
        hidden: (options: any) => boolean;
    };
    'shape-ellipse': {
        title: string;
        action: {
            tool: string;
            opts: SimpleObjectMode;
        };
        hidden: (options: any) => boolean;
    };
    'shape-rectangle': {
        title: string;
        action: {
            tool: string;
            opts: SimpleObjectMode;
        };
        hidden: (options: any) => boolean;
    };
    'shape-line': {
        title: string;
        action: {
            tool: string;
            opts: SimpleObjectMode;
        };
        hidden: (options: any) => boolean;
    };
    text: {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    bonds: {
        hidden: (options: any) => boolean;
    };
};
export default _default;
import { isFlipDisabled } from "./flips";
import { RxnArrowMode } from "ketcher-core/dist/domain/entities/rxnArrow";
import { SimpleObjectMode } from "ketcher-core/dist/domain/entities/simpleObject";
