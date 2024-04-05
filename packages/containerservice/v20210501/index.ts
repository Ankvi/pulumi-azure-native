import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetManagedClusterArgs, GetManagedClusterResult, GetManagedClusterOutputArgs } from "./getManagedCluster";
export const getManagedCluster: typeof import("./getManagedCluster").getManagedCluster = null as any;
export const getManagedClusterOutput: typeof import("./getManagedCluster").getManagedClusterOutput = null as any;
utilities.lazyLoad(exports, ["getManagedCluster","getManagedClusterOutput"], () => require("./getManagedCluster"));

export { ListManagedClusterAdminCredentialsArgs, ListManagedClusterAdminCredentialsResult, ListManagedClusterAdminCredentialsOutputArgs } from "./listManagedClusterAdminCredentials";
export const listManagedClusterAdminCredentials: typeof import("./listManagedClusterAdminCredentials").listManagedClusterAdminCredentials = null as any;
export const listManagedClusterAdminCredentialsOutput: typeof import("./listManagedClusterAdminCredentials").listManagedClusterAdminCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listManagedClusterAdminCredentials","listManagedClusterAdminCredentialsOutput"], () => require("./listManagedClusterAdminCredentials"));

export { ListManagedClusterMonitoringUserCredentialsArgs, ListManagedClusterMonitoringUserCredentialsResult, ListManagedClusterMonitoringUserCredentialsOutputArgs } from "./listManagedClusterMonitoringUserCredentials";
export const listManagedClusterMonitoringUserCredentials: typeof import("./listManagedClusterMonitoringUserCredentials").listManagedClusterMonitoringUserCredentials = null as any;
export const listManagedClusterMonitoringUserCredentialsOutput: typeof import("./listManagedClusterMonitoringUserCredentials").listManagedClusterMonitoringUserCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listManagedClusterMonitoringUserCredentials","listManagedClusterMonitoringUserCredentialsOutput"], () => require("./listManagedClusterMonitoringUserCredentials"));

export { ListManagedClusterUserCredentialsArgs, ListManagedClusterUserCredentialsResult, ListManagedClusterUserCredentialsOutputArgs } from "./listManagedClusterUserCredentials";
export const listManagedClusterUserCredentials: typeof import("./listManagedClusterUserCredentials").listManagedClusterUserCredentials = null as any;
export const listManagedClusterUserCredentialsOutput: typeof import("./listManagedClusterUserCredentials").listManagedClusterUserCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listManagedClusterUserCredentials","listManagedClusterUserCredentialsOutput"], () => require("./listManagedClusterUserCredentials"));

export { ManagedClusterArgs } from "./managedCluster";
export type ManagedCluster = import("./managedCluster").ManagedCluster;
export const ManagedCluster: typeof import("./managedCluster").ManagedCluster = null as any;
utilities.lazyLoad(exports, ["ManagedCluster"], () => require("./managedCluster"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerservice/v20210501:ManagedCluster":
                return new ManagedCluster(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerservice/v20210501", _module)