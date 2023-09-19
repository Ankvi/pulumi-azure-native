import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DdosCustomPolicyArgs } from "./ddosCustomPolicy";
export type DdosCustomPolicy = import("./ddosCustomPolicy").DdosCustomPolicy;
export const DdosCustomPolicy: typeof import("./ddosCustomPolicy").DdosCustomPolicy = null as any;
utilities.lazyLoad(exports, ["DdosCustomPolicy"], () => require("./ddosCustomPolicy"));

export { GetDdosCustomPolicyArgs, GetDdosCustomPolicyResult, GetDdosCustomPolicyOutputArgs } from "./getDdosCustomPolicy";
export const getDdosCustomPolicy: typeof import("./getDdosCustomPolicy").getDdosCustomPolicy = null as any;
export const getDdosCustomPolicyOutput: typeof import("./getDdosCustomPolicy").getDdosCustomPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getDdosCustomPolicy","getDdosCustomPolicyOutput"], () => require("./getDdosCustomPolicy"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20220101:DdosCustomPolicy":
                return new DdosCustomPolicy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20220101", _module)
