import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureTrafficCollectorArgs } from "./azureTrafficCollector";
export type AzureTrafficCollector = import("./azureTrafficCollector").AzureTrafficCollector;
export const AzureTrafficCollector: typeof import("./azureTrafficCollector").AzureTrafficCollector = null as any;
utilities.lazyLoad(exports, ["AzureTrafficCollector"], () => require("./azureTrafficCollector"));

export { GetAzureTrafficCollectorArgs, GetAzureTrafficCollectorResult, GetAzureTrafficCollectorOutputArgs } from "./getAzureTrafficCollector";
export const getAzureTrafficCollector: typeof import("./getAzureTrafficCollector").getAzureTrafficCollector = null as any;
export const getAzureTrafficCollectorOutput: typeof import("./getAzureTrafficCollector").getAzureTrafficCollectorOutput = null as any;
utilities.lazyLoad(exports, ["getAzureTrafficCollector","getAzureTrafficCollectorOutput"], () => require("./getAzureTrafficCollector"));


// Export enums:
export * from "../types/enums/v20220801";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:networkfunction/v20220801:AzureTrafficCollector":
                return new AzureTrafficCollector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "networkfunction/v20220801", _module)
