import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetIotDpsResourceArgs, GetIotDpsResourceResult, GetIotDpsResourceOutputArgs } from "./getIotDpsResource";
export const getIotDpsResource: typeof import("./getIotDpsResource").getIotDpsResource = null as any;
export const getIotDpsResourceOutput: typeof import("./getIotDpsResource").getIotDpsResourceOutput = null as any;
utilities.lazyLoad(exports, ["getIotDpsResource","getIotDpsResourceOutput"], () => require("./getIotDpsResource"));

export { IotDpsResourceArgs } from "./iotDpsResource";
export type IotDpsResource = import("./iotDpsResource").IotDpsResource;
export const IotDpsResource: typeof import("./iotDpsResource").IotDpsResource = null as any;
utilities.lazyLoad(exports, ["IotDpsResource"], () => require("./iotDpsResource"));

export { ListIotDpsResourceKeysArgs, ListIotDpsResourceKeysResult, ListIotDpsResourceKeysOutputArgs } from "./listIotDpsResourceKeys";
export const listIotDpsResourceKeys: typeof import("./listIotDpsResourceKeys").listIotDpsResourceKeys = null as any;
export const listIotDpsResourceKeysOutput: typeof import("./listIotDpsResourceKeys").listIotDpsResourceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listIotDpsResourceKeys","listIotDpsResourceKeysOutput"], () => require("./listIotDpsResourceKeys"));

export { ListIotDpsResourceKeysForKeyNameArgs, ListIotDpsResourceKeysForKeyNameResult, ListIotDpsResourceKeysForKeyNameOutputArgs } from "./listIotDpsResourceKeysForKeyName";
export const listIotDpsResourceKeysForKeyName: typeof import("./listIotDpsResourceKeysForKeyName").listIotDpsResourceKeysForKeyName = null as any;
export const listIotDpsResourceKeysForKeyNameOutput: typeof import("./listIotDpsResourceKeysForKeyName").listIotDpsResourceKeysForKeyNameOutput = null as any;
utilities.lazyLoad(exports, ["listIotDpsResourceKeysForKeyName","listIotDpsResourceKeysForKeyNameOutput"], () => require("./listIotDpsResourceKeysForKeyName"));


// Export enums:
export * from "../types/enums/v20200901preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:devices/v20200901preview:IotDpsResource":
                return new IotDpsResource(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "devices/v20200901preview", _module)
