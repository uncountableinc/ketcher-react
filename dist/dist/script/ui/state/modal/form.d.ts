export function updateFormState(data: any): {
    type: string;
    data: any;
};
export function checkErrors(errors: any): {
    type: string;
    data: {
        moleculeErrors: any;
    };
};
export function setDefaultSettings(): {
    type: string;
    data: {
        result: Record<string, any>;
        valid: boolean;
        errors: {};
    };
};
export function formReducer(state: any, action: any): any;
export namespace formsState {
    namespace atomProps {
        const errors: {};
        const valid: boolean;
        namespace result {
            const label: string;
            const charge: number;
            const explicitValence: number;
            const hCount: number;
            const invRet: number;
            const isotope: number;
            const radical: number;
            const ringBondCount: number;
            const substitutionCount: number;
        }
    }
    namespace attachmentPoints {
        const errors_1: {};
        export { errors_1 as errors };
        const valid_1: boolean;
        export { valid_1 as valid };
        export namespace result_1 {
            const primary: boolean;
            const secondary: boolean;
        }
        export { result_1 as result };
    }
    namespace automap {
        const errors_2: {};
        export { errors_2 as errors };
        const valid_2: boolean;
        export { valid_2 as valid };
        export namespace result_2 {
            const mode: string;
        }
        export { result_2 as result };
    }
    namespace bondProps {
        const errors_3: {};
        export { errors_3 as errors };
        const valid_3: boolean;
        export { valid_3 as valid };
        export namespace result_3 {
            const type: string;
            const topology: number;
            const center: number;
        }
        export { result_3 as result };
    }
    namespace check {
        const errors_4: {};
        export { errors_4 as errors };
        export const moleculeErrors: {};
    }
    namespace labelEdit {
        const errors_5: {};
        export { errors_5 as errors };
        const valid_4: boolean;
        export { valid_4 as valid };
        export namespace result_4 {
            const label_1: string;
            export { label_1 as label };
        }
        export { result_4 as result };
    }
    namespace rgroup {
        const errors_6: {};
        export { errors_6 as errors };
        const valid_5: boolean;
        export { valid_5 as valid };
        export namespace result_5 {
            const values: never[];
        }
        export { result_5 as result };
    }
    namespace rgroupLogic {
        const errors_7: {};
        export { errors_7 as errors };
        const valid_6: boolean;
        export { valid_6 as valid };
        export namespace result_6 {
            const ifthen: number;
            const range: string;
            const resth: boolean;
        }
        export { result_6 as result };
    }
    namespace save {
        const errors_8: {};
        export { errors_8 as errors };
        const valid_7: boolean;
        export { valid_7 as valid };
        export namespace result_7 {
            const filename: string;
            const format: string;
        }
        export { result_7 as result };
    }
    namespace settings {
        const errors_9: {};
        export { errors_9 as errors };
        const valid_8: boolean;
        export { valid_8 as valid };
        const result_8: Record<string, any>;
        export { result_8 as result };
    }
    namespace text {
        const errors_10: {};
        export { errors_10 as errors };
        const valid_9: boolean;
        export { valid_9 as valid };
        const result_9: {};
        export { result_9 as result };
    }
    namespace attach {
        const errors_11: {};
        export { errors_11 as errors };
        const valid_10: boolean;
        export { valid_10 as valid };
        const result_10: {};
        export { result_10 as result };
    }
    const sgroup: {
        errors: {};
        valid: boolean;
        result: {
            context: string;
            fieldName: string;
            fieldValue: string;
            radiobuttons: string;
            type: string;
        };
    };
}
