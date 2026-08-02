import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AssessmentArgs } from "./assessment";
export type Assessment = import("./assessment").Assessment;
export const Assessment: typeof import("./assessment").Assessment = null as any;
utilities.lazyLoad(exports, ["Assessment"], () => require("./assessment"));

export { GetAssessmentArgs, GetAssessmentResult, GetAssessmentOutputArgs } from "./getAssessment";
export const getAssessment: typeof import("./getAssessment").getAssessment = null as any;
export const getAssessmentOutput: typeof import("./getAssessment").getAssessmentOutput = null as any;
utilities.lazyLoad(exports, ["getAssessment","getAssessmentOutput"], () => require("./getAssessment"));

export { ListAssessmentUploadTokenArgs, ListAssessmentUploadTokenResult, ListAssessmentUploadTokenOutputArgs } from "./listAssessmentUploadToken";
export const listAssessmentUploadToken: typeof import("./listAssessmentUploadToken").listAssessmentUploadToken = null as any;
export const listAssessmentUploadTokenOutput: typeof import("./listAssessmentUploadToken").listAssessmentUploadTokenOutput = null as any;
utilities.lazyLoad(exports, ["listAssessmentUploadToken","listAssessmentUploadTokenOutput"], () => require("./listAssessmentUploadToken"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:billingtrust:Assessment":
                return new Assessment(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "billingtrust", _module)