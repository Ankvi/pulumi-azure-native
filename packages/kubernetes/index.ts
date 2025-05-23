import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectedClusterArgs } from "./connectedCluster";
export type ConnectedCluster = import("./connectedCluster").ConnectedCluster;
export const ConnectedCluster: typeof import("./connectedCluster").ConnectedCluster = null as any;
utilities.lazyLoad(exports, ["ConnectedCluster"], () => require("./connectedCluster"));

export { GetConnectedClusterArgs, GetConnectedClusterResult, GetConnectedClusterOutputArgs } from "./getConnectedCluster";
export const getConnectedCluster: typeof import("./getConnectedCluster").getConnectedCluster = null as any;
export const getConnectedClusterOutput: typeof import("./getConnectedCluster").getConnectedClusterOutput = null as any;
utilities.lazyLoad(exports, ["getConnectedCluster","getConnectedClusterOutput"], () => require("./getConnectedCluster"));

export { ListConnectedClusterUserCredentialArgs, ListConnectedClusterUserCredentialResult, ListConnectedClusterUserCredentialOutputArgs } from "./listConnectedClusterUserCredential";
export const listConnectedClusterUserCredential: typeof import("./listConnectedClusterUserCredential").listConnectedClusterUserCredential = null as any;
export const listConnectedClusterUserCredentialOutput: typeof import("./listConnectedClusterUserCredential").listConnectedClusterUserCredentialOutput = null as any;
utilities.lazyLoad(exports, ["listConnectedClusterUserCredential","listConnectedClusterUserCredentialOutput"], () => require("./listConnectedClusterUserCredential"));

export { ListConnectedClusterUserCredentialsArgs, ListConnectedClusterUserCredentialsResult, ListConnectedClusterUserCredentialsOutputArgs } from "./listConnectedClusterUserCredentials";
export const listConnectedClusterUserCredentials: typeof import("./listConnectedClusterUserCredentials").listConnectedClusterUserCredentials = null as any;
export const listConnectedClusterUserCredentialsOutput: typeof import("./listConnectedClusterUserCredentials").listConnectedClusterUserCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listConnectedClusterUserCredentials","listConnectedClusterUserCredentialsOutput"], () => require("./listConnectedClusterUserCredentials"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kubernetes:ConnectedCluster":
                return new ConnectedCluster(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kubernetes", _module)