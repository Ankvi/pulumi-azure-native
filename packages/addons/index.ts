import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSupportPlanTypeArgs, GetSupportPlanTypeResult, GetSupportPlanTypeOutputArgs } from "./getSupportPlanType";
export const getSupportPlanType: typeof import("./getSupportPlanType").getSupportPlanType = null as any;
export const getSupportPlanTypeOutput: typeof import("./getSupportPlanType").getSupportPlanTypeOutput = null as any;
utilities.lazyLoad(exports, ["getSupportPlanType","getSupportPlanTypeOutput"], () => require("./getSupportPlanType"));

export { SupportPlanTypeArgs } from "./supportPlanType";
export type SupportPlanType = import("./supportPlanType").SupportPlanType;
export const SupportPlanType: typeof import("./supportPlanType").SupportPlanType = null as any;
utilities.lazyLoad(exports, ["SupportPlanType"], () => require("./supportPlanType"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:addons:SupportPlanType":
                return new SupportPlanType(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "addons", _module)