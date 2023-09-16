import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AdaptiveApplicationControlArgs } from "./adaptiveApplicationControl";
export type AdaptiveApplicationControl = import("./adaptiveApplicationControl").AdaptiveApplicationControl;
export const AdaptiveApplicationControl: typeof import("./adaptiveApplicationControl").AdaptiveApplicationControl = null as any;
utilities.lazyLoad(exports, ["AdaptiveApplicationControl"], () => require("./adaptiveApplicationControl"));

export { AssessmentArgs } from "./assessment";
export type Assessment = import("./assessment").Assessment;
export const Assessment: typeof import("./assessment").Assessment = null as any;
utilities.lazyLoad(exports, ["Assessment"], () => require("./assessment"));

export { GetAdaptiveApplicationControlArgs, GetAdaptiveApplicationControlResult, GetAdaptiveApplicationControlOutputArgs } from "./getAdaptiveApplicationControl";
export const getAdaptiveApplicationControl: typeof import("./getAdaptiveApplicationControl").getAdaptiveApplicationControl = null as any;
export const getAdaptiveApplicationControlOutput: typeof import("./getAdaptiveApplicationControl").getAdaptiveApplicationControlOutput = null as any;
utilities.lazyLoad(exports, ["getAdaptiveApplicationControl","getAdaptiveApplicationControlOutput"], () => require("./getAdaptiveApplicationControl"));

export { GetAssessmentArgs, GetAssessmentResult, GetAssessmentOutputArgs } from "./getAssessment";
export const getAssessment: typeof import("./getAssessment").getAssessment = null as any;
export const getAssessmentOutput: typeof import("./getAssessment").getAssessmentOutput = null as any;
utilities.lazyLoad(exports, ["getAssessment","getAssessmentOutput"], () => require("./getAssessment"));

export { GetJitNetworkAccessPolicyArgs, GetJitNetworkAccessPolicyResult, GetJitNetworkAccessPolicyOutputArgs } from "./getJitNetworkAccessPolicy";
export const getJitNetworkAccessPolicy: typeof import("./getJitNetworkAccessPolicy").getJitNetworkAccessPolicy = null as any;
export const getJitNetworkAccessPolicyOutput: typeof import("./getJitNetworkAccessPolicy").getJitNetworkAccessPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getJitNetworkAccessPolicy","getJitNetworkAccessPolicyOutput"], () => require("./getJitNetworkAccessPolicy"));

export { GetServerVulnerabilityAssessmentArgs, GetServerVulnerabilityAssessmentResult, GetServerVulnerabilityAssessmentOutputArgs } from "./getServerVulnerabilityAssessment";
export const getServerVulnerabilityAssessment: typeof import("./getServerVulnerabilityAssessment").getServerVulnerabilityAssessment = null as any;
export const getServerVulnerabilityAssessmentOutput: typeof import("./getServerVulnerabilityAssessment").getServerVulnerabilityAssessmentOutput = null as any;
utilities.lazyLoad(exports, ["getServerVulnerabilityAssessment","getServerVulnerabilityAssessmentOutput"], () => require("./getServerVulnerabilityAssessment"));

export { JitNetworkAccessPolicyArgs } from "./jitNetworkAccessPolicy";
export type JitNetworkAccessPolicy = import("./jitNetworkAccessPolicy").JitNetworkAccessPolicy;
export const JitNetworkAccessPolicy: typeof import("./jitNetworkAccessPolicy").JitNetworkAccessPolicy = null as any;
utilities.lazyLoad(exports, ["JitNetworkAccessPolicy"], () => require("./jitNetworkAccessPolicy"));

export { ServerVulnerabilityAssessmentArgs } from "./serverVulnerabilityAssessment";
export type ServerVulnerabilityAssessment = import("./serverVulnerabilityAssessment").ServerVulnerabilityAssessment;
export const ServerVulnerabilityAssessment: typeof import("./serverVulnerabilityAssessment").ServerVulnerabilityAssessment = null as any;
utilities.lazyLoad(exports, ["ServerVulnerabilityAssessment"], () => require("./serverVulnerabilityAssessment"));


// Export enums:
export * from "../types/enums/v20200101";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20200101:AdaptiveApplicationControl":
                return new AdaptiveApplicationControl(name, <any>undefined, { urn })
            case "azure-native:security/v20200101:Assessment":
                return new Assessment(name, <any>undefined, { urn })
            case "azure-native:security/v20200101:JitNetworkAccessPolicy":
                return new JitNetworkAccessPolicy(name, <any>undefined, { urn })
            case "azure-native:security/v20200101:ServerVulnerabilityAssessment":
                return new ServerVulnerabilityAssessment(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20200101", _module)
