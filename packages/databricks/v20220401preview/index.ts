import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccessConnectorArgs } from "./accessConnector";
export type AccessConnector = import("./accessConnector").AccessConnector;
export const AccessConnector: typeof import("./accessConnector").AccessConnector = null as any;
utilities.lazyLoad(exports, ["AccessConnector"], () => require("./accessConnector"));

export { GetAccessConnectorArgs, GetAccessConnectorResult, GetAccessConnectorOutputArgs } from "./getAccessConnector";
export const getAccessConnector: typeof import("./getAccessConnector").getAccessConnector = null as any;
export const getAccessConnectorOutput: typeof import("./getAccessConnector").getAccessConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getAccessConnector","getAccessConnectorOutput"], () => require("./getAccessConnector"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:databricks/v20220401preview:AccessConnector":
                return new AccessConnector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "databricks/v20220401preview", _module)