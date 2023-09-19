import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationArgs } from "./application";
export type Application = import("./application").Application;
export const Application: typeof import("./application").Application = null as any;
utilities.lazyLoad(exports, ["Application"], () => require("./application"));

export { GatewayArgs } from "./gateway";
export type Gateway = import("./gateway").Gateway;
export const Gateway: typeof import("./gateway").Gateway = null as any;
utilities.lazyLoad(exports, ["Gateway"], () => require("./gateway"));

export { GetApplicationArgs, GetApplicationResult, GetApplicationOutputArgs } from "./getApplication";
export const getApplication: typeof import("./getApplication").getApplication = null as any;
export const getApplicationOutput: typeof import("./getApplication").getApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getApplication","getApplicationOutput"], () => require("./getApplication"));

export { GetGatewayArgs, GetGatewayResult, GetGatewayOutputArgs } from "./getGateway";
export const getGateway: typeof import("./getGateway").getGateway = null as any;
export const getGatewayOutput: typeof import("./getGateway").getGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getGateway","getGatewayOutput"], () => require("./getGateway"));

export { GetNetworkArgs, GetNetworkResult, GetNetworkOutputArgs } from "./getNetwork";
export const getNetwork: typeof import("./getNetwork").getNetwork = null as any;
export const getNetworkOutput: typeof import("./getNetwork").getNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getNetwork","getNetworkOutput"], () => require("./getNetwork"));

export { GetSecretArgs, GetSecretResult, GetSecretOutputArgs } from "./getSecret";
export const getSecret: typeof import("./getSecret").getSecret = null as any;
export const getSecretOutput: typeof import("./getSecret").getSecretOutput = null as any;
utilities.lazyLoad(exports, ["getSecret","getSecretOutput"], () => require("./getSecret"));

export { GetSecretValueArgs, GetSecretValueResult, GetSecretValueOutputArgs } from "./getSecretValue";
export const getSecretValue: typeof import("./getSecretValue").getSecretValue = null as any;
export const getSecretValueOutput: typeof import("./getSecretValue").getSecretValueOutput = null as any;
utilities.lazyLoad(exports, ["getSecretValue","getSecretValueOutput"], () => require("./getSecretValue"));

export { GetVolumeArgs, GetVolumeResult, GetVolumeOutputArgs } from "./getVolume";
export const getVolume: typeof import("./getVolume").getVolume = null as any;
export const getVolumeOutput: typeof import("./getVolume").getVolumeOutput = null as any;
utilities.lazyLoad(exports, ["getVolume","getVolumeOutput"], () => require("./getVolume"));

export { ListSecretValueArgs, ListSecretValueResult, ListSecretValueOutputArgs } from "./listSecretValue";
export const listSecretValue: typeof import("./listSecretValue").listSecretValue = null as any;
export const listSecretValueOutput: typeof import("./listSecretValue").listSecretValueOutput = null as any;
utilities.lazyLoad(exports, ["listSecretValue","listSecretValueOutput"], () => require("./listSecretValue"));

export { NetworkArgs } from "./network";
export type Network = import("./network").Network;
export const Network: typeof import("./network").Network = null as any;
utilities.lazyLoad(exports, ["Network"], () => require("./network"));

export { SecretArgs } from "./secret";
export type Secret = import("./secret").Secret;
export const Secret: typeof import("./secret").Secret = null as any;
utilities.lazyLoad(exports, ["Secret"], () => require("./secret"));

export { SecretValueArgs } from "./secretValue";
export type SecretValue = import("./secretValue").SecretValue;
export const SecretValue: typeof import("./secretValue").SecretValue = null as any;
utilities.lazyLoad(exports, ["SecretValue"], () => require("./secretValue"));

export { VolumeArgs } from "./volume";
export type Volume = import("./volume").Volume;
export const Volume: typeof import("./volume").Volume = null as any;
utilities.lazyLoad(exports, ["Volume"], () => require("./volume"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:servicefabricmesh/v20180901preview:Application":
                return new Application(name, <any>undefined, { urn })
            case "azure-native:servicefabricmesh/v20180901preview:Gateway":
                return new Gateway(name, <any>undefined, { urn })
            case "azure-native:servicefabricmesh/v20180901preview:Network":
                return new Network(name, <any>undefined, { urn })
            case "azure-native:servicefabricmesh/v20180901preview:Secret":
                return new Secret(name, <any>undefined, { urn })
            case "azure-native:servicefabricmesh/v20180901preview:SecretValue":
                return new SecretValue(name, <any>undefined, { urn })
            case "azure-native:servicefabricmesh/v20180901preview:Volume":
                return new Volume(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "servicefabricmesh/v20180901preview", _module)
