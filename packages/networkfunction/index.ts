import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureTrafficCollectorArgs } from "./azureTrafficCollector";
export type AzureTrafficCollector = import("./azureTrafficCollector").AzureTrafficCollector;
export const AzureTrafficCollector: typeof import("./azureTrafficCollector").AzureTrafficCollector = null as any;
utilities.lazyLoad(exports, ["AzureTrafficCollector"], () => require("./azureTrafficCollector"));

export { CollectorPolicyArgs } from "./collectorPolicy";
export type CollectorPolicy = import("./collectorPolicy").CollectorPolicy;
export const CollectorPolicy: typeof import("./collectorPolicy").CollectorPolicy = null as any;
utilities.lazyLoad(exports, ["CollectorPolicy"], () => require("./collectorPolicy"));

export { GetAzureTrafficCollectorArgs, GetAzureTrafficCollectorResult, GetAzureTrafficCollectorOutputArgs } from "./getAzureTrafficCollector";
export const getAzureTrafficCollector: typeof import("./getAzureTrafficCollector").getAzureTrafficCollector = null as any;
export const getAzureTrafficCollectorOutput: typeof import("./getAzureTrafficCollector").getAzureTrafficCollectorOutput = null as any;
utilities.lazyLoad(exports, ["getAzureTrafficCollector","getAzureTrafficCollectorOutput"], () => require("./getAzureTrafficCollector"));

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
            case "azure-native:networkfunction:AzureTrafficCollector":
                return new AzureTrafficCollector(name, <any>undefined, { urn })
            case "azure-native:networkfunction:CollectorPolicy":
                return new CollectorPolicy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "networkfunction", _module)