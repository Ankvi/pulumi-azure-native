import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetServerKeyArgs, GetServerKeyResult, GetServerKeyOutputArgs } from "./getServerKey";
export const getServerKey: typeof import("./getServerKey").getServerKey = null as any;
export const getServerKeyOutput: typeof import("./getServerKey").getServerKeyOutput = null as any;
utilities.lazyLoad(exports, ["getServerKey","getServerKeyOutput"], () => require("./getServerKey"));

export { ServerKeyArgs } from "./serverKey";
export type ServerKey = import("./serverKey").ServerKey;
export const ServerKey: typeof import("./serverKey").ServerKey = null as any;
utilities.lazyLoad(exports, ["ServerKey"], () => require("./serverKey"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbformariadb/v20200101privatepreview:ServerKey":
                return new ServerKey(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbformariadb/v20200101privatepreview", _module)