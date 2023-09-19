import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AssignmentArgs } from "./assignment";
export type Assignment = import("./assignment").Assignment;
export const Assignment: typeof import("./assignment").Assignment = null as any;
utilities.lazyLoad(exports, ["Assignment"], () => require("./assignment"));

export { GetAssignmentArgs, GetAssignmentResult, GetAssignmentOutputArgs } from "./getAssignment";
export const getAssignment: typeof import("./getAssignment").getAssignment = null as any;
export const getAssignmentOutput: typeof import("./getAssignment").getAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getAssignment","getAssignmentOutput"], () => require("./getAssignment"));

export { GetStandardArgs, GetStandardResult, GetStandardOutputArgs } from "./getStandard";
export const getStandard: typeof import("./getStandard").getStandard = null as any;
export const getStandardOutput: typeof import("./getStandard").getStandardOutput = null as any;
utilities.lazyLoad(exports, ["getStandard","getStandardOutput"], () => require("./getStandard"));

export { StandardArgs } from "./standard";
export type Standard = import("./standard").Standard;
export const Standard: typeof import("./standard").Standard = null as any;
utilities.lazyLoad(exports, ["Standard"], () => require("./standard"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20210801preview:Assignment":
                return new Assignment(name, <any>undefined, { urn })
            case "azure-native:security/v20210801preview:Standard":
                return new Standard(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20210801preview", _module)
