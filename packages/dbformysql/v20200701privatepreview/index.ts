import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConfigurationArgs } from "./configuration";
export type Configuration = import("./configuration").Configuration;
export const Configuration: typeof import("./configuration").Configuration = null as any;
utilities.lazyLoad(exports, ["Configuration"], () => require("./configuration"));

export { GetConfigurationArgs, GetConfigurationResult, GetConfigurationOutputArgs } from "./getConfiguration";
export const getConfiguration: typeof import("./getConfiguration").getConfiguration = null as any;
export const getConfigurationOutput: typeof import("./getConfiguration").getConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getConfiguration","getConfigurationOutput"], () => require("./getConfiguration"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { GetServerKeyArgs, GetServerKeyResult, GetServerKeyOutputArgs } from "./getServerKey";
export const getServerKey: typeof import("./getServerKey").getServerKey = null as any;
export const getServerKeyOutput: typeof import("./getServerKey").getServerKeyOutput = null as any;
utilities.lazyLoad(exports, ["getServerKey","getServerKeyOutput"], () => require("./getServerKey"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

export { ServerKeyArgs } from "./serverKey";
export type ServerKey = import("./serverKey").ServerKey;
export const ServerKey: typeof import("./serverKey").ServerKey = null as any;
utilities.lazyLoad(exports, ["ServerKey"], () => require("./serverKey"));


// Export enums:
export * from "../types/enums/v20200701privatepreview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbformysql/v20200701privatepreview:Configuration":
                return new Configuration(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20200701privatepreview:Server":
                return new Server(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20200701privatepreview:ServerKey":
                return new ServerKey(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbformysql/v20200701privatepreview", _module)
