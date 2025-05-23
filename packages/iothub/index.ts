import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CertificateArgs } from "./certificate";
export type Certificate = import("./certificate").Certificate;
export const Certificate: typeof import("./certificate").Certificate = null as any;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

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

export { IotHubResourceArgs } from "./iotHubResource";
export type IotHubResource = import("./iotHubResource").IotHubResource;
export const IotHubResource: typeof import("./iotHubResource").IotHubResource = null as any;
utilities.lazyLoad(exports, ["IotHubResource"], () => require("./iotHubResource"));

export { IotHubResourceEventHubConsumerGroupArgs } from "./iotHubResourceEventHubConsumerGroup";
export type IotHubResourceEventHubConsumerGroup = import("./iotHubResourceEventHubConsumerGroup").IotHubResourceEventHubConsumerGroup;
export const IotHubResourceEventHubConsumerGroup: typeof import("./iotHubResourceEventHubConsumerGroup").IotHubResourceEventHubConsumerGroup = null as any;
utilities.lazyLoad(exports, ["IotHubResourceEventHubConsumerGroup"], () => require("./iotHubResourceEventHubConsumerGroup"));

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

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:iothub:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-native:iothub:IotHubResource":
                return new IotHubResource(name, <any>undefined, { urn })
            case "azure-native:iothub:IotHubResourceEventHubConsumerGroup":
                return new IotHubResourceEventHubConsumerGroup(name, <any>undefined, { urn })
            case "azure-native:iothub:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "iothub", _module)