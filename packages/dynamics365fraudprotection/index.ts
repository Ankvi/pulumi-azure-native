import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetInstanceDetailsArgs, GetInstanceDetailsResult, GetInstanceDetailsOutputArgs } from "./getInstanceDetails";
export const getInstanceDetails: typeof import("./getInstanceDetails").getInstanceDetails = null as any;
export const getInstanceDetailsOutput: typeof import("./getInstanceDetails").getInstanceDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getInstanceDetails","getInstanceDetailsOutput"], () => require("./getInstanceDetails"));

export { InstanceDetailsArgs } from "./instanceDetails";
export type InstanceDetails = import("./instanceDetails").InstanceDetails;
export const InstanceDetails: typeof import("./instanceDetails").InstanceDetails = null as any;
utilities.lazyLoad(exports, ["InstanceDetails"], () => require("./instanceDetails"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dynamics365fraudprotection:InstanceDetails":
                return new InstanceDetails(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dynamics365fraudprotection", _module)