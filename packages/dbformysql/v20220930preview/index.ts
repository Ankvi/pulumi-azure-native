import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGetPrivateDnsZoneSuffixExecuteArgs, GetGetPrivateDnsZoneSuffixExecuteResult } from "./getGetPrivateDnsZoneSuffixExecute";
export const getGetPrivateDnsZoneSuffixExecute: typeof import("./getGetPrivateDnsZoneSuffixExecute").getGetPrivateDnsZoneSuffixExecute = null as any;
export const getGetPrivateDnsZoneSuffixExecuteOutput: typeof import("./getGetPrivateDnsZoneSuffixExecute").getGetPrivateDnsZoneSuffixExecuteOutput = null as any;
utilities.lazyLoad(exports, ["getGetPrivateDnsZoneSuffixExecute","getGetPrivateDnsZoneSuffixExecuteOutput"], () => require("./getGetPrivateDnsZoneSuffixExecute"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbformysql/v20220930preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20220930preview:Server":
                return new Server(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbformysql/v20220930preview", _module)
