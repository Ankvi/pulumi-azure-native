import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AgentPoolArgs } from "./agentPool";
export type AgentPool = import("./agentPool").AgentPool;
export const AgentPool: typeof import("./agentPool").AgentPool = null as any;
utilities.lazyLoad(exports, ["AgentPool"], () => require("./agentPool"));

export { GetAgentPoolArgs, GetAgentPoolResult, GetAgentPoolOutputArgs } from "./getAgentPool";
export const getAgentPool: typeof import("./getAgentPool").getAgentPool = null as any;
export const getAgentPoolOutput: typeof import("./getAgentPool").getAgentPoolOutput = null as any;
utilities.lazyLoad(exports, ["getAgentPool","getAgentPoolOutput"], () => require("./getAgentPool"));

export { GetMaintenanceConfigurationArgs, GetMaintenanceConfigurationResult, GetMaintenanceConfigurationOutputArgs } from "./getMaintenanceConfiguration";
export const getMaintenanceConfiguration: typeof import("./getMaintenanceConfiguration").getMaintenanceConfiguration = null as any;
export const getMaintenanceConfigurationOutput: typeof import("./getMaintenanceConfiguration").getMaintenanceConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getMaintenanceConfiguration","getMaintenanceConfigurationOutput"], () => require("./getMaintenanceConfiguration"));

export { GetManagedClusterArgs, GetManagedClusterResult, GetManagedClusterOutputArgs } from "./getManagedCluster";
export const getManagedCluster: typeof import("./getManagedCluster").getManagedCluster = null as any;
export const getManagedClusterOutput: typeof import("./getManagedCluster").getManagedClusterOutput = null as any;
utilities.lazyLoad(exports, ["getManagedCluster","getManagedClusterOutput"], () => require("./getManagedCluster"));

export { GetManagedClusterSnapshotArgs, GetManagedClusterSnapshotResult, GetManagedClusterSnapshotOutputArgs } from "./getManagedClusterSnapshot";
export const getManagedClusterSnapshot: typeof import("./getManagedClusterSnapshot").getManagedClusterSnapshot = null as any;
export const getManagedClusterSnapshotOutput: typeof import("./getManagedClusterSnapshot").getManagedClusterSnapshotOutput = null as any;
utilities.lazyLoad(exports, ["getManagedClusterSnapshot","getManagedClusterSnapshotOutput"], () => require("./getManagedClusterSnapshot"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetSnapshotArgs, GetSnapshotResult, GetSnapshotOutputArgs } from "./getSnapshot";
export const getSnapshot: typeof import("./getSnapshot").getSnapshot = null as any;
export const getSnapshotOutput: typeof import("./getSnapshot").getSnapshotOutput = null as any;
utilities.lazyLoad(exports, ["getSnapshot","getSnapshotOutput"], () => require("./getSnapshot"));

export { GetTrustedAccessRoleBindingArgs, GetTrustedAccessRoleBindingResult, GetTrustedAccessRoleBindingOutputArgs } from "./getTrustedAccessRoleBinding";
export const getTrustedAccessRoleBinding: typeof import("./getTrustedAccessRoleBinding").getTrustedAccessRoleBinding = null as any;
export const getTrustedAccessRoleBindingOutput: typeof import("./getTrustedAccessRoleBinding").getTrustedAccessRoleBindingOutput = null as any;
utilities.lazyLoad(exports, ["getTrustedAccessRoleBinding","getTrustedAccessRoleBindingOutput"], () => require("./getTrustedAccessRoleBinding"));

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

export { MaintenanceConfigurationArgs } from "./maintenanceConfiguration";
export type MaintenanceConfiguration = import("./maintenanceConfiguration").MaintenanceConfiguration;
export const MaintenanceConfiguration: typeof import("./maintenanceConfiguration").MaintenanceConfiguration = null as any;
utilities.lazyLoad(exports, ["MaintenanceConfiguration"], () => require("./maintenanceConfiguration"));

export { ManagedClusterArgs } from "./managedCluster";
export type ManagedCluster = import("./managedCluster").ManagedCluster;
export const ManagedCluster: typeof import("./managedCluster").ManagedCluster = null as any;
utilities.lazyLoad(exports, ["ManagedCluster"], () => require("./managedCluster"));

export { ManagedClusterSnapshotArgs } from "./managedClusterSnapshot";
export type ManagedClusterSnapshot = import("./managedClusterSnapshot").ManagedClusterSnapshot;
export const ManagedClusterSnapshot: typeof import("./managedClusterSnapshot").ManagedClusterSnapshot = null as any;
utilities.lazyLoad(exports, ["ManagedClusterSnapshot"], () => require("./managedClusterSnapshot"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { SnapshotArgs } from "./snapshot";
export type Snapshot = import("./snapshot").Snapshot;
export const Snapshot: typeof import("./snapshot").Snapshot = null as any;
utilities.lazyLoad(exports, ["Snapshot"], () => require("./snapshot"));

export { TrustedAccessRoleBindingArgs } from "./trustedAccessRoleBinding";
export type TrustedAccessRoleBinding = import("./trustedAccessRoleBinding").TrustedAccessRoleBinding;
export const TrustedAccessRoleBinding: typeof import("./trustedAccessRoleBinding").TrustedAccessRoleBinding = null as any;
utilities.lazyLoad(exports, ["TrustedAccessRoleBinding"], () => require("./trustedAccessRoleBinding"));


// Export enums:
export * from "../types/enums/v20230502preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerservice/v20230502preview:AgentPool":
                return new AgentPool(name, <any>undefined, { urn })
            case "azure-native:containerservice/v20230502preview:MaintenanceConfiguration":
                return new MaintenanceConfiguration(name, <any>undefined, { urn })
            case "azure-native:containerservice/v20230502preview:ManagedCluster":
                return new ManagedCluster(name, <any>undefined, { urn })
            case "azure-native:containerservice/v20230502preview:ManagedClusterSnapshot":
                return new ManagedClusterSnapshot(name, <any>undefined, { urn })
            case "azure-native:containerservice/v20230502preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:containerservice/v20230502preview:Snapshot":
                return new Snapshot(name, <any>undefined, { urn })
            case "azure-native:containerservice/v20230502preview:TrustedAccessRoleBinding":
                return new TrustedAccessRoleBinding(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerservice/v20230502preview", _module)
