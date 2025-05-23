import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CloudConnectionArgs } from "./cloudConnection";
export type CloudConnection = import("./cloudConnection").CloudConnection;
export const CloudConnection: typeof import("./cloudConnection").CloudConnection = null as any;
utilities.lazyLoad(exports, ["CloudConnection"], () => require("./cloudConnection"));

export { CloudConnectorArgs } from "./cloudConnector";
export type CloudConnector = import("./cloudConnector").CloudConnector;
export const CloudConnector: typeof import("./cloudConnector").CloudConnector = null as any;
utilities.lazyLoad(exports, ["CloudConnector"], () => require("./cloudConnector"));

export { GetCloudConnectionArgs, GetCloudConnectionResult, GetCloudConnectionOutputArgs } from "./getCloudConnection";
export const getCloudConnection: typeof import("./getCloudConnection").getCloudConnection = null as any;
export const getCloudConnectionOutput: typeof import("./getCloudConnection").getCloudConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getCloudConnection","getCloudConnectionOutput"], () => require("./getCloudConnection"));

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
            case "azure-native:hybridcloud:CloudConnection":
                return new CloudConnection(name, <any>undefined, { urn })
            case "azure-native:hybridcloud:CloudConnector":
                return new CloudConnector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hybridcloud", _module)