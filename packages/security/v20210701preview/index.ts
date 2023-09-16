import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CustomAssessmentAutomationArgs } from "./customAssessmentAutomation";
export type CustomAssessmentAutomation = import("./customAssessmentAutomation").CustomAssessmentAutomation;
export const CustomAssessmentAutomation: typeof import("./customAssessmentAutomation").CustomAssessmentAutomation = null as any;
utilities.lazyLoad(exports, ["CustomAssessmentAutomation"], () => require("./customAssessmentAutomation"));

export { CustomEntityStoreAssignmentArgs } from "./customEntityStoreAssignment";
export type CustomEntityStoreAssignment = import("./customEntityStoreAssignment").CustomEntityStoreAssignment;
export const CustomEntityStoreAssignment: typeof import("./customEntityStoreAssignment").CustomEntityStoreAssignment = null as any;
utilities.lazyLoad(exports, ["CustomEntityStoreAssignment"], () => require("./customEntityStoreAssignment"));

export { GetCustomAssessmentAutomationArgs, GetCustomAssessmentAutomationResult, GetCustomAssessmentAutomationOutputArgs } from "./getCustomAssessmentAutomation";
export const getCustomAssessmentAutomation: typeof import("./getCustomAssessmentAutomation").getCustomAssessmentAutomation = null as any;
export const getCustomAssessmentAutomationOutput: typeof import("./getCustomAssessmentAutomation").getCustomAssessmentAutomationOutput = null as any;
utilities.lazyLoad(exports, ["getCustomAssessmentAutomation","getCustomAssessmentAutomationOutput"], () => require("./getCustomAssessmentAutomation"));

export { GetCustomEntityStoreAssignmentArgs, GetCustomEntityStoreAssignmentResult, GetCustomEntityStoreAssignmentOutputArgs } from "./getCustomEntityStoreAssignment";
export const getCustomEntityStoreAssignment: typeof import("./getCustomEntityStoreAssignment").getCustomEntityStoreAssignment = null as any;
export const getCustomEntityStoreAssignmentOutput: typeof import("./getCustomEntityStoreAssignment").getCustomEntityStoreAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getCustomEntityStoreAssignment","getCustomEntityStoreAssignmentOutput"], () => require("./getCustomEntityStoreAssignment"));

export { GetSecurityConnectorArgs, GetSecurityConnectorResult, GetSecurityConnectorOutputArgs } from "./getSecurityConnector";
export const getSecurityConnector: typeof import("./getSecurityConnector").getSecurityConnector = null as any;
export const getSecurityConnectorOutput: typeof import("./getSecurityConnector").getSecurityConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityConnector","getSecurityConnectorOutput"], () => require("./getSecurityConnector"));

export { SecurityConnectorArgs } from "./securityConnector";
export type SecurityConnector = import("./securityConnector").SecurityConnector;
export const SecurityConnector: typeof import("./securityConnector").SecurityConnector = null as any;
utilities.lazyLoad(exports, ["SecurityConnector"], () => require("./securityConnector"));


// Export enums:
export * from "../types/enums/v20210701preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20210701preview:CustomAssessmentAutomation":
                return new CustomAssessmentAutomation(name, <any>undefined, { urn })
            case "azure-native:security/v20210701preview:CustomEntityStoreAssignment":
                return new CustomEntityStoreAssignment(name, <any>undefined, { urn })
            case "azure-native:security/v20210701preview:SecurityConnector":
                return new SecurityConnector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20210701preview", _module)
