import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGetPrivateDnsZoneSuffixExecuteArgs, GetGetPrivateDnsZoneSuffixExecuteResult } from "./getGetPrivateDnsZoneSuffixExecute";
export const getGetPrivateDnsZoneSuffixExecute: typeof import("./getGetPrivateDnsZoneSuffixExecute").getGetPrivateDnsZoneSuffixExecute = null as any;
export const getGetPrivateDnsZoneSuffixExecuteOutput: typeof import("./getGetPrivateDnsZoneSuffixExecute").getGetPrivateDnsZoneSuffixExecuteOutput = null as any;
utilities.lazyLoad(exports, ["getGetPrivateDnsZoneSuffixExecute","getGetPrivateDnsZoneSuffixExecuteOutput"], () => require("./getGetPrivateDnsZoneSuffixExecute"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

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
            case "azure-native:dbformysql/v20231201preview:Server":
                return new Server(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbformysql/v20231201preview", _module)