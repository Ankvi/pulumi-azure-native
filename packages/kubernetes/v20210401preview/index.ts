import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ListConnectedClusterUserCredentialsArgs, ListConnectedClusterUserCredentialsResult, ListConnectedClusterUserCredentialsOutputArgs } from "./listConnectedClusterUserCredentials";
export const listConnectedClusterUserCredentials: typeof import("./listConnectedClusterUserCredentials").listConnectedClusterUserCredentials = null as any;
export const listConnectedClusterUserCredentialsOutput: typeof import("./listConnectedClusterUserCredentials").listConnectedClusterUserCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listConnectedClusterUserCredentials","listConnectedClusterUserCredentialsOutput"], () => require("./listConnectedClusterUserCredentials"));


// Export enums:
export * from "../types/enums/v20210401preview";
