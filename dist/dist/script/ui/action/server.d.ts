export default config;
declare namespace config {
    namespace layout {
        const shortcut: string;
        const title: string;
        namespace action {
            const thunk: (dispatch: any, getState: any) => void;
        }
        function disabled(editor: any, server: any, options: any): boolean;
        function hidden(options: any): boolean;
    }
    namespace clean {
        const shortcut_1: string;
        export { shortcut_1 as shortcut };
        const title_1: string;
        export { title_1 as title };
        export namespace action_1 {
            const thunk_1: (dispatch: any, getState: any) => void;
            export { thunk_1 as thunk };
        }
        export { action_1 as action };
        export function disabled_1(editor: any, server: any, options: any): boolean;
        export { disabled_1 as disabled };
        export function hidden_1(options: any): boolean;
        export { hidden_1 as hidden };
    }
    namespace arom {
        const shortcut_2: string;
        export { shortcut_2 as shortcut };
        const title_2: string;
        export { title_2 as title };
        export namespace action_2 {
            const thunk_2: (dispatch: any, getState: any) => void;
            export { thunk_2 as thunk };
        }
        export { action_2 as action };
        export function disabled_2(editor: any, server: any, options: any): boolean;
        export { disabled_2 as disabled };
        export function hidden_2(options: any): boolean;
        export { hidden_2 as hidden };
    }
    namespace dearom {
        const shortcut_3: string;
        export { shortcut_3 as shortcut };
        const title_3: string;
        export { title_3 as title };
        export namespace action_3 {
            const thunk_3: (dispatch: any, getState: any) => void;
            export { thunk_3 as thunk };
        }
        export { action_3 as action };
        export function disabled_3(editor: any, server: any, options: any): boolean;
        export { disabled_3 as disabled };
        export function hidden_3(options: any): boolean;
        export { hidden_3 as hidden };
    }
    namespace cip {
        const shortcut_4: string;
        export { shortcut_4 as shortcut };
        const title_4: string;
        export { title_4 as title };
        export namespace action_4 {
            const thunk_4: (dispatch: any, getState: any) => void;
            export { thunk_4 as thunk };
        }
        export { action_4 as action };
        export function disabled_4(editor: any, server: any, options: any): boolean;
        export { disabled_4 as disabled };
        export function hidden_4(options: any): boolean;
        export { hidden_4 as hidden };
    }
    namespace check {
        const shortcut_5: string;
        export { shortcut_5 as shortcut };
        const title_5: string;
        export { title_5 as title };
        export namespace action_5 {
            const dialog: string;
        }
        export { action_5 as action };
        export function disabled_5(editor: any, server: any, options: any): boolean;
        export { disabled_5 as disabled };
        export function hidden_5(options: any): boolean;
        export { hidden_5 as hidden };
    }
    namespace analyse {
        const shortcut_6: string;
        export { shortcut_6 as shortcut };
        const title_6: string;
        export { title_6 as title };
        export namespace action_6 {
            const dialog_1: string;
            export { dialog_1 as dialog };
        }
        export { action_6 as action };
        export function disabled_6(editor: any, server: any, options: any): boolean;
        export { disabled_6 as disabled };
        export function hidden_6(options: any): boolean;
        export { hidden_6 as hidden };
    }
    namespace recognize {
        const title_7: string;
        export { title_7 as title };
        export namespace action_7 {
            const dialog_2: string;
            export { dialog_2 as dialog };
        }
        export { action_7 as action };
        export function disabled_7(editor: any, server: any, options: any): boolean;
        export { disabled_7 as disabled };
        export function hidden_7(options: any): boolean;
        export { hidden_7 as hidden };
    }
    namespace miew {
        const title_8: string;
        export { title_8 as title };
        export namespace action_8 {
            const dialog_3: string;
            export { dialog_3 as dialog };
        }
        export { action_8 as action };
        export function hidden_8(options: any): boolean;
        export { hidden_8 as hidden };
    }
}
