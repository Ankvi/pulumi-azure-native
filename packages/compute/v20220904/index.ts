import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CloudServiceArgs } from "./cloudService";
export type CloudService = import("./cloudService").CloudService;
export const CloudService: typeof import("./cloudService").CloudService = null as any;
utilities.lazyLoad(exports, ["CloudService"], () => require("./cloudService"));

export { GetCloudServiceArgs, GetCloudServiceResult, GetCloudServiceOutputArgs } from "./getCloudService";
export const getCloudService: typeof import("./getCloudService").getCloudService = null as any;
export const getCloudServiceOutput: typeof import("./getCloudService").getCloudServiceOutput = null as any;
utilities.lazyLoad(exports, ["getCloudService","getCloudServiceOutput"], () => require("./getCloudService"));


// Export enums:
export * from "../types/enums/v20220904";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:compute/v20220904:CloudService":
                return new CloudService(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "compute/v20220904", _module)
