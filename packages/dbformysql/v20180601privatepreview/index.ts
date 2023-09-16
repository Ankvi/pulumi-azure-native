import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { GetServerAdministratorArgs, GetServerAdministratorResult, GetServerAdministratorOutputArgs } from "./getServerAdministrator";
export const getServerAdministrator: typeof import("./getServerAdministrator").getServerAdministrator = null as any;
export const getServerAdministratorOutput: typeof import("./getServerAdministrator").getServerAdministratorOutput = null as any;
utilities.lazyLoad(exports, ["getServerAdministrator","getServerAdministratorOutput"], () => require("./getServerAdministrator"));

export { GetVirtualNetworkRuleArgs, GetVirtualNetworkRuleResult, GetVirtualNetworkRuleOutputArgs } from "./getVirtualNetworkRule";
export const getVirtualNetworkRule: typeof import("./getVirtualNetworkRule").getVirtualNetworkRule = null as any;
export const getVirtualNetworkRuleOutput: typeof import("./getVirtualNetworkRule").getVirtualNetworkRuleOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkRule","getVirtualNetworkRuleOutput"], () => require("./getVirtualNetworkRule"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

export { ServerAdministratorArgs } from "./serverAdministrator";
export type ServerAdministrator = import("./serverAdministrator").ServerAdministrator;
export const ServerAdministrator: typeof import("./serverAdministrator").ServerAdministrator = null as any;
utilities.lazyLoad(exports, ["ServerAdministrator"], () => require("./serverAdministrator"));

export { VirtualNetworkRuleArgs } from "./virtualNetworkRule";
export type VirtualNetworkRule = import("./virtualNetworkRule").VirtualNetworkRule;
export const VirtualNetworkRule: typeof import("./virtualNetworkRule").VirtualNetworkRule = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkRule"], () => require("./virtualNetworkRule"));


// Export enums:
export * from "../types/enums/v20180601privatepreview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbformysql/v20180601privatepreview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20180601privatepreview:Server":
                return new Server(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20180601privatepreview:ServerAdministrator":
                return new ServerAdministrator(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20180601privatepreview:VirtualNetworkRule":
                return new VirtualNetworkRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbformysql/v20180601privatepreview", _module)
