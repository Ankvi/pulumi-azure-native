import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DpsCertificateArgs } from "./dpsCertificate";
export type DpsCertificate = import("./dpsCertificate").DpsCertificate;
export const DpsCertificate: typeof import("./dpsCertificate").DpsCertificate = null as any;
utilities.lazyLoad(exports, ["DpsCertificate"], () => require("./dpsCertificate"));

export { GetDpsCertificateArgs, GetDpsCertificateResult, GetDpsCertificateOutputArgs } from "./getDpsCertificate";
export const getDpsCertificate: typeof import("./getDpsCertificate").getDpsCertificate = null as any;
export const getDpsCertificateOutput: typeof import("./getDpsCertificate").getDpsCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getDpsCertificate","getDpsCertificateOutput"], () => require("./getDpsCertificate"));

export { GetIotDpsResourceArgs, GetIotDpsResourceResult, GetIotDpsResourceOutputArgs } from "./getIotDpsResource";
export const getIotDpsResource: typeof import("./getIotDpsResource").getIotDpsResource = null as any;
export const getIotDpsResourceOutput: typeof import("./getIotDpsResource").getIotDpsResourceOutput = null as any;
utilities.lazyLoad(exports, ["getIotDpsResource","getIotDpsResourceOutput"], () => require("./getIotDpsResource"));

export { GetIotDpsResourcePrivateEndpointConnectionArgs, GetIotDpsResourcePrivateEndpointConnectionResult, GetIotDpsResourcePrivateEndpointConnectionOutputArgs } from "./getIotDpsResourcePrivateEndpointConnection";
export const getIotDpsResourcePrivateEndpointConnection: typeof import("./getIotDpsResourcePrivateEndpointConnection").getIotDpsResourcePrivateEndpointConnection = null as any;
export const getIotDpsResourcePrivateEndpointConnectionOutput: typeof import("./getIotDpsResourcePrivateEndpointConnection").getIotDpsResourcePrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getIotDpsResourcePrivateEndpointConnection","getIotDpsResourcePrivateEndpointConnectionOutput"], () => require("./getIotDpsResourcePrivateEndpointConnection"));

export { IotDpsResourceArgs } from "./iotDpsResource";
export type IotDpsResource = import("./iotDpsResource").IotDpsResource;
export const IotDpsResource: typeof import("./iotDpsResource").IotDpsResource = null as any;
utilities.lazyLoad(exports, ["IotDpsResource"], () => require("./iotDpsResource"));

export { IotDpsResourcePrivateEndpointConnectionArgs } from "./iotDpsResourcePrivateEndpointConnection";
export type IotDpsResourcePrivateEndpointConnection = import("./iotDpsResourcePrivateEndpointConnection").IotDpsResourcePrivateEndpointConnection;
export const IotDpsResourcePrivateEndpointConnection: typeof import("./iotDpsResourcePrivateEndpointConnection").IotDpsResourcePrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["IotDpsResourcePrivateEndpointConnection"], () => require("./iotDpsResourcePrivateEndpointConnection"));

export { ListIotDpsResourceKeysArgs, ListIotDpsResourceKeysResult, ListIotDpsResourceKeysOutputArgs } from "./listIotDpsResourceKeys";
export const listIotDpsResourceKeys: typeof import("./listIotDpsResourceKeys").listIotDpsResourceKeys = null as any;
export const listIotDpsResourceKeysOutput: typeof import("./listIotDpsResourceKeys").listIotDpsResourceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listIotDpsResourceKeys","listIotDpsResourceKeysOutput"], () => require("./listIotDpsResourceKeys"));

export { ListIotDpsResourceKeysForKeyNameArgs, ListIotDpsResourceKeysForKeyNameResult, ListIotDpsResourceKeysForKeyNameOutputArgs } from "./listIotDpsResourceKeysForKeyName";
export const listIotDpsResourceKeysForKeyName: typeof import("./listIotDpsResourceKeysForKeyName").listIotDpsResourceKeysForKeyName = null as any;
export const listIotDpsResourceKeysForKeyNameOutput: typeof import("./listIotDpsResourceKeysForKeyName").listIotDpsResourceKeysForKeyNameOutput = null as any;
utilities.lazyLoad(exports, ["listIotDpsResourceKeysForKeyName","listIotDpsResourceKeysForKeyNameOutput"], () => require("./listIotDpsResourceKeysForKeyName"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:devices/v20230301preview:DpsCertificate":
                return new DpsCertificate(name, <any>undefined, { urn })
            case "azure-native:devices/v20230301preview:IotDpsResource":
                return new IotDpsResource(name, <any>undefined, { urn })
            case "azure-native:devices/v20230301preview:IotDpsResourcePrivateEndpointConnection":
                return new IotDpsResourcePrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "devices/v20230301preview", _module)