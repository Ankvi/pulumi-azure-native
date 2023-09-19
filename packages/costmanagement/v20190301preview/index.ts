import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CloudConnectorArgs } from "./cloudConnector";
export type CloudConnector = import("./cloudConnector").CloudConnector;
export const CloudConnector: typeof import("./cloudConnector").CloudConnector = null as any;
utilities.lazyLoad(exports, ["CloudConnector"], () => require("./cloudConnector"));

export { GetCloudConnectorArgs, GetCloudConnectorResult, GetCloudConnectorOutputArgs } from "./getCloudConnector";
export const getCloudConnector: typeof import("./getCloudConnector").getCloudConnector = null as any;
export const getCloudConnectorOutput: typeof import("./getCloudConnector").getCloudConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getCloudConnector","getCloudConnectorOutput"], () => require("./getCloudConnector"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:costmanagement/v20190301preview:CloudConnector":
                return new CloudConnector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "costmanagement/v20190301preview", _module)
