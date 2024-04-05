import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CertificateArgs } from "./certificate";
export type Certificate = import("./certificate").Certificate;
export const Certificate: typeof import("./certificate").Certificate = null as any;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));

export { DpsCertificateArgs } from "./dpsCertificate";
export type DpsCertificate = import("./dpsCertificate").DpsCertificate;
export const DpsCertificate: typeof import("./dpsCertificate").DpsCertificate = null as any;
utilities.lazyLoad(exports, ["DpsCertificate"], () => require("./dpsCertificate"));

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

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

export { GetIotHubResourceArgs, GetIotHubResourceResult, GetIotHubResourceOutputArgs } from "./getIotHubResource";
export const getIotHubResource: typeof import("./getIotHubResource").getIotHubResource = null as any;
export const getIotHubResourceOutput: typeof import("./getIotHubResource").getIotHubResourceOutput = null as any;
utilities.lazyLoad(exports, ["getIotHubResource","getIotHubResourceOutput"], () => require("./getIotHubResource"));

export { GetIotHubResourceEventHubConsumerGroupArgs, GetIotHubResourceEventHubConsumerGroupResult, GetIotHubResourceEventHubConsumerGroupOutputArgs } from "./getIotHubResourceEventHubConsumerGroup";
export const getIotHubResourceEventHubConsumerGroup: typeof import("./getIotHubResourceEventHubConsumerGroup").getIotHubResourceEventHubConsumerGroup = null as any;
export const getIotHubResourceEventHubConsumerGroupOutput: typeof import("./getIotHubResourceEventHubConsumerGroup").getIotHubResourceEventHubConsumerGroupOutput = null as any;
utilities.lazyLoad(exports, ["getIotHubResourceEventHubConsumerGroup","getIotHubResourceEventHubConsumerGroupOutput"], () => require("./getIotHubResourceEventHubConsumerGroup"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { IotDpsResourceArgs } from "./iotDpsResource";
export type IotDpsResource = import("./iotDpsResource").IotDpsResource;
export const IotDpsResource: typeof import("./iotDpsResource").IotDpsResource = null as any;
utilities.lazyLoad(exports, ["IotDpsResource"], () => require("./iotDpsResource"));

export { IotDpsResourcePrivateEndpointConnectionArgs } from "./iotDpsResourcePrivateEndpointConnection";
export type IotDpsResourcePrivateEndpointConnection = import("./iotDpsResourcePrivateEndpointConnection").IotDpsResourcePrivateEndpointConnection;
export const IotDpsResourcePrivateEndpointConnection: typeof import("./iotDpsResourcePrivateEndpointConnection").IotDpsResourcePrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["IotDpsResourcePrivateEndpointConnection"], () => require("./iotDpsResourcePrivateEndpointConnection"));

export { IotHubResourceArgs } from "./iotHubResource";
export type IotHubResource = import("./iotHubResource").IotHubResource;
export const IotHubResource: typeof import("./iotHubResource").IotHubResource = null as any;
utilities.lazyLoad(exports, ["IotHubResource"], () => require("./iotHubResource"));

export { IotHubResourceEventHubConsumerGroupArgs } from "./iotHubResourceEventHubConsumerGroup";
export type IotHubResourceEventHubConsumerGroup = import("./iotHubResourceEventHubConsumerGroup").IotHubResourceEventHubConsumerGroup;
export const IotHubResourceEventHubConsumerGroup: typeof import("./iotHubResourceEventHubConsumerGroup").IotHubResourceEventHubConsumerGroup = null as any;
utilities.lazyLoad(exports, ["IotHubResourceEventHubConsumerGroup"], () => require("./iotHubResourceEventHubConsumerGroup"));

export { ListIotDpsResourceKeysArgs, ListIotDpsResourceKeysResult, ListIotDpsResourceKeysOutputArgs } from "./listIotDpsResourceKeys";
export const listIotDpsResourceKeys: typeof import("./listIotDpsResourceKeys").listIotDpsResourceKeys = null as any;
export const listIotDpsResourceKeysOutput: typeof import("./listIotDpsResourceKeys").listIotDpsResourceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listIotDpsResourceKeys","listIotDpsResourceKeysOutput"], () => require("./listIotDpsResourceKeys"));

export { ListIotDpsResourceKeysForKeyNameArgs, ListIotDpsResourceKeysForKeyNameResult, ListIotDpsResourceKeysForKeyNameOutputArgs } from "./listIotDpsResourceKeysForKeyName";
export const listIotDpsResourceKeysForKeyName: typeof import("./listIotDpsResourceKeysForKeyName").listIotDpsResourceKeysForKeyName = null as any;
export const listIotDpsResourceKeysForKeyNameOutput: typeof import("./listIotDpsResourceKeysForKeyName").listIotDpsResourceKeysForKeyNameOutput = null as any;
utilities.lazyLoad(exports, ["listIotDpsResourceKeysForKeyName","listIotDpsResourceKeysForKeyNameOutput"], () => require("./listIotDpsResourceKeysForKeyName"));

export { ListIotHubResourceKeysArgs, ListIotHubResourceKeysResult, ListIotHubResourceKeysOutputArgs } from "./listIotHubResourceKeys";
export const listIotHubResourceKeys: typeof import("./listIotHubResourceKeys").listIotHubResourceKeys = null as any;
export const listIotHubResourceKeysOutput: typeof import("./listIotHubResourceKeys").listIotHubResourceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listIotHubResourceKeys","listIotHubResourceKeysOutput"], () => require("./listIotHubResourceKeys"));

export { ListIotHubResourceKeysForKeyNameArgs, ListIotHubResourceKeysForKeyNameResult, ListIotHubResourceKeysForKeyNameOutputArgs } from "./listIotHubResourceKeysForKeyName";
export const listIotHubResourceKeysForKeyName: typeof import("./listIotHubResourceKeysForKeyName").listIotHubResourceKeysForKeyName = null as any;
export const listIotHubResourceKeysForKeyNameOutput: typeof import("./listIotHubResourceKeysForKeyName").listIotHubResourceKeysForKeyNameOutput = null as any;
utilities.lazyLoad(exports, ["listIotHubResourceKeysForKeyName","listIotHubResourceKeysForKeyNameOutput"], () => require("./listIotHubResourceKeysForKeyName"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20200401 from "./v20200401";
import * as v20200901preview from "./v20200901preview";
import * as v20210303preview from "./v20210303preview";
import * as v20211015 from "./v20211015";
import * as v20220430preview from "./v20220430preview";
import * as v20221115preview from "./v20221115preview";
import * as v20221212 from "./v20221212";
import * as v20230301preview from "./v20230301preview";
import * as v20230630 from "./v20230630";
import * as v20230630preview from "./v20230630preview";

export {
    v20200401,
    v20200901preview,
    v20210303preview,
    v20211015,
    v20220430preview,
    v20221115preview,
    v20221212,
    v20230301preview,
    v20230630,
    v20230630preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:devices:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-native:devices:DpsCertificate":
                return new DpsCertificate(name, <any>undefined, { urn })
            case "azure-native:devices:IotDpsResource":
                return new IotDpsResource(name, <any>undefined, { urn })
            case "azure-native:devices:IotDpsResourcePrivateEndpointConnection":
                return new IotDpsResourcePrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:devices:IotHubResource":
                return new IotHubResource(name, <any>undefined, { urn })
            case "azure-native:devices:IotHubResourceEventHubConsumerGroup":
                return new IotHubResourceEventHubConsumerGroup(name, <any>undefined, { urn })
            case "azure-native:devices:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "devices", _module)