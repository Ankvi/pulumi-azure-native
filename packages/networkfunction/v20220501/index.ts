import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CollectorPolicyArgs } from "./collectorPolicy";
export type CollectorPolicy = import("./collectorPolicy").CollectorPolicy;
export const CollectorPolicy: typeof import("./collectorPolicy").CollectorPolicy = null as any;
utilities.lazyLoad(exports, ["CollectorPolicy"], () => require("./collectorPolicy"));

export { GetCollectorPolicyArgs, GetCollectorPolicyResult, GetCollectorPolicyOutputArgs } from "./getCollectorPolicy";
export const getCollectorPolicy: typeof import("./getCollectorPolicy").getCollectorPolicy = null as any;
export const getCollectorPolicyOutput: typeof import("./getCollectorPolicy").getCollectorPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getCollectorPolicy","getCollectorPolicyOutput"], () => require("./getCollectorPolicy"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:networkfunction/v20220501:CollectorPolicy":
                return new CollectorPolicy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "networkfunction/v20220501", _module)
