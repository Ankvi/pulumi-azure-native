import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectorArgs } from "./connector";
export type Connector = import("./connector").Connector;
export const Connector: typeof import("./connector").Connector = null as any;
utilities.lazyLoad(exports, ["Connector"], () => require("./connector"));

export { GetConnectorArgs, GetConnectorResult, GetConnectorOutputArgs } from "./getConnector";
export const getConnector: typeof import("./getConnector").getConnector = null as any;
export const getConnectorOutput: typeof import("./getConnector").getConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getConnector","getConnectorOutput"], () => require("./getConnector"));

export { GetSecurityContactArgs, GetSecurityContactResult, GetSecurityContactOutputArgs } from "./getSecurityContact";
export const getSecurityContact: typeof import("./getSecurityContact").getSecurityContact = null as any;
export const getSecurityContactOutput: typeof import("./getSecurityContact").getSecurityContactOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityContact","getSecurityContactOutput"], () => require("./getSecurityContact"));

export { SecurityContactArgs } from "./securityContact";
export type SecurityContact = import("./securityContact").SecurityContact;
export const SecurityContact: typeof import("./securityContact").SecurityContact = null as any;
utilities.lazyLoad(exports, ["SecurityContact"], () => require("./securityContact"));


// Export enums:
export * from "../types/enums/v20200101preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20200101preview:Connector":
                return new Connector(name, <any>undefined, { urn })
            case "azure-native:security/v20200101preview:SecurityContact":
                return new SecurityContact(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20200101preview", _module)
