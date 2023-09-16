import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSecurityConnectorArgs, GetSecurityConnectorResult, GetSecurityConnectorOutputArgs } from "./getSecurityConnector";
export const getSecurityConnector: typeof import("./getSecurityConnector").getSecurityConnector = null as any;
export const getSecurityConnectorOutput: typeof import("./getSecurityConnector").getSecurityConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityConnector","getSecurityConnectorOutput"], () => require("./getSecurityConnector"));

export { SecurityConnectorArgs } from "./securityConnector";
export type SecurityConnector = import("./securityConnector").SecurityConnector;
export const SecurityConnector: typeof import("./securityConnector").SecurityConnector = null as any;
utilities.lazyLoad(exports, ["SecurityConnector"], () => require("./securityConnector"));


// Export enums:
export * from "../types/enums/v20230301preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20230301preview:SecurityConnector":
                return new SecurityConnector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20230301preview", _module)
