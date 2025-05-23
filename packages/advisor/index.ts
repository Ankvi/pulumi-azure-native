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

export { GetSuppressionArgs, GetSuppressionResult, GetSuppressionOutputArgs } from "./getSuppression";
export const getSuppression: typeof import("./getSuppression").getSuppression = null as any;
export const getSuppressionOutput: typeof import("./getSuppression").getSuppressionOutput = null as any;
utilities.lazyLoad(exports, ["getSuppression","getSuppressionOutput"], () => require("./getSuppression"));

export { SuppressionArgs } from "./suppression";
export type Suppression = import("./suppression").Suppression;
export const Suppression: typeof import("./suppression").Suppression = null as any;
utilities.lazyLoad(exports, ["Suppression"], () => require("./suppression"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:advisor:Assessment":
                return new Assessment(name, <any>undefined, { urn })
            case "azure-native:advisor:Suppression":
                return new Suppression(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "advisor", _module)