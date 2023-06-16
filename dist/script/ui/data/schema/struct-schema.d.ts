export namespace atom {
    const title: string;
    const type: string;
    const required: string[];
    namespace properties {
        namespace label {
            const title_1: string;
            export { title_1 as title };
            const type_1: string;
            export { type_1 as type };
            export const maxLength: number;
            export const invalidMessage: string;
        }
        namespace alias {
            const title_2: string;
            export { title_2 as title };
            const type_2: string;
            export { type_2 as type };
            const invalidMessage_1: string;
            export { invalidMessage_1 as invalidMessage };
        }
        namespace charge {
            const title_3: string;
            export { title_3 as title };
            const type_3: string;
            export { type_3 as type };
            export const pattern: string;
            const maxLength_1: number;
            export { maxLength_1 as maxLength };
            const _default: string;
            export { _default as default };
            const invalidMessage_2: string;
            export { invalidMessage_2 as invalidMessage };
        }
        namespace explicitValence {
            const title_4: string;
            export { title_4 as title };
            const _enum: number[];
            export { _enum as enum };
            export const enumNames: string[];
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace isotope {
            const title_5: string;
            export { title_5 as title };
            const type_4: string;
            export { type_4 as type };
            export const minimum: number;
            const _default_2: number;
            export { _default_2 as default };
            const invalidMessage_3: string;
            export { invalidMessage_3 as invalidMessage };
        }
        namespace radical {
            const title_6: string;
            export { title_6 as title };
            const _enum_1: number[];
            export { _enum_1 as enum };
            const enumNames_1: string[];
            export { enumNames_1 as enumNames };
            const _default_3: number;
            export { _default_3 as default };
        }
        namespace cip {
            const title_7: string;
            export { title_7 as title };
            const type_5: string;
            export { type_5 as type };
            const _enum_2: string[];
            export { _enum_2 as enum };
        }
        namespace ringBondCount {
            const title_8: string;
            export { title_8 as title };
            const _enum_3: number[];
            export { _enum_3 as enum };
            const enumNames_2: string[];
            export { enumNames_2 as enumNames };
            const _default_4: number;
            export { _default_4 as default };
        }
        namespace hCount {
            const title_9: string;
            export { title_9 as title };
            const _enum_4: number[];
            export { _enum_4 as enum };
            const enumNames_3: string[];
            export { enumNames_3 as enumNames };
            const _default_5: number;
            export { _default_5 as default };
        }
        namespace substitutionCount {
            const title_10: string;
            export { title_10 as title };
            const _enum_5: number[];
            export { _enum_5 as enum };
            const enumNames_4: string[];
            export { enumNames_4 as enumNames };
            const _default_6: number;
            export { _default_6 as default };
        }
        namespace unsaturatedAtom {
            const title_11: string;
            export { title_11 as title };
            const type_6: string;
            export { type_6 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        namespace invRet {
            const title_12: string;
            export { title_12 as title };
            const _enum_6: number[];
            export { _enum_6 as enum };
            const enumNames_5: string[];
            export { enumNames_5 as enumNames };
            const _default_8: number;
            export { _default_8 as default };
        }
        namespace exactChangeFlag {
            const title_13: string;
            export { title_13 as title };
            const type_7: string;
            export { type_7 as type };
            const _default_9: boolean;
            export { _default_9 as default };
        }
    }
}
export namespace rgroupSchema {
    const title_14: string;
    export { title_14 as title };
    const type_8: string;
    export { type_8 as type };
    export namespace properties_1 {
        namespace values {
            const type_9: string;
            export { type_9 as type };
            export namespace items {
                const type_10: string;
                export { type_10 as type };
                const _enum_7: number[];
                export { _enum_7 as enum };
                const enumNames_6: string[];
                export { enumNames_6 as enumNames };
            }
        }
    }
    export { properties_1 as properties };
}
export namespace labelEdit {
    const title_15: string;
    export { title_15 as title };
    const type_11: string;
    export { type_11 as type };
    const required_1: string[];
    export { required_1 as required };
    export namespace properties_2 {
        export namespace label_1 {
            const title_16: string;
            export { title_16 as title };
            const _default_10: string;
            export { _default_10 as default };
            const invalidMessage_4: string;
            export { invalidMessage_4 as invalidMessage };
            const type_12: string;
            export { type_12 as type };
        }
        export { label_1 as label };
    }
    export { properties_2 as properties };
}
export namespace attachmentPoints {
    const title_17: string;
    export { title_17 as title };
    const type_13: string;
    export { type_13 as type };
    export namespace properties_3 {
        namespace primary {
            const title_18: string;
            export { title_18 as title };
            const type_14: string;
            export { type_14 as type };
        }
        namespace secondary {
            const title_19: string;
            export { title_19 as title };
            const type_15: string;
            export { type_15 as type };
        }
    }
    export { properties_3 as properties };
}
export namespace bond {
    const title_20: string;
    export { title_20 as title };
    const type_16: string;
    export { type_16 as type };
    const required_2: string[];
    export { required_2 as required };
    export namespace properties_4 {
        export namespace type_17 {
            const title_21: string;
            export { title_21 as title };
            const _enum_8: string[];
            export { _enum_8 as enum };
            const enumNames_7: string[];
            export { enumNames_7 as enumNames };
            const _default_11: string;
            export { _default_11 as default };
        }
        export { type_17 as type };
        export namespace topology {
            const title_22: string;
            export { title_22 as title };
            const _enum_9: number[];
            export { _enum_9 as enum };
            const enumNames_8: string[];
            export { enumNames_8 as enumNames };
            const _default_12: number;
            export { _default_12 as default };
        }
        export namespace center {
            const title_23: string;
            export { title_23 as title };
            const _enum_10: number[];
            export { _enum_10 as enum };
            const enumNames_9: string[];
            export { enumNames_9 as enumNames };
            const _default_13: number;
            export { _default_13 as default };
        }
        export namespace cip_1 {
            const title_24: string;
            export { title_24 as title };
            const type_18: string;
            export { type_18 as type };
            const _enum_11: string[];
            export { _enum_11 as enum };
        }
        export { cip_1 as cip };
    }
    export { properties_4 as properties };
}
export const sgroupMap: any;
export namespace rgroupLogic {
    const title_25: string;
    export { title_25 as title };
    const type_19: string;
    export { type_19 as type };
    export namespace properties_5 {
        namespace range {
            const title_26: string;
            export { title_26 as title };
            const type_20: string;
            export { type_20 as type };
            const maxLength_2: number;
            export { maxLength_2 as maxLength };
            const invalidMessage_5: string;
            export { invalidMessage_5 as invalidMessage };
        }
        namespace resth {
            const title_27: string;
            export { title_27 as title };
            const type_21: string;
            export { type_21 as type };
        }
        namespace ifthen {
            const title_28: string;
            export { title_28 as title };
            const type_22: string;
            export { type_22 as type };
            export const minium: number;
        }
    }
    export { properties_5 as properties };
}
export namespace textSchema {
    const title_29: string;
    export { title_29 as title };
    const type_23: string;
    export { type_23 as type };
    const required_3: string[];
    export { required_3 as required };
    export namespace properties_6 {
        export namespace label_2 {
            const _default_14: string;
            export { _default_14 as default };
            const type_24: string;
            export { type_24 as type };
        }
        export { label_2 as label };
    }
    export { properties_6 as properties };
}
export namespace attachSchema {
    const title_30: string;
    export { title_30 as title };
    const type_25: string;
    export { type_25 as type };
    const required_4: string[];
    export { required_4 as required };
    export namespace properties_7 {
        namespace name {
            const title_31: string;
            export { title_31 as title };
            const type_26: string;
            export { type_26 as type };
            export const minLength: number;
            const maxLength_3: number;
            export { maxLength_3 as maxLength };
            const invalidMessage_6: string;
            export { invalidMessage_6 as invalidMessage };
        }
    }
    export { properties_7 as properties };
}
