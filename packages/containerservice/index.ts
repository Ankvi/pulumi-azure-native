import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AgentPoolArgs } from "./agentPool";
export type AgentPool = import("./agentPool").AgentPool;
export const AgentPool: typeof import("./agentPool").AgentPool = null as any;
utilities.lazyLoad(exports, ["AgentPool"], () => require("./agentPool"));

export { FleetArgs } from "./fleet";
export type Fleet = import("./fleet").Fleet;
export const Fleet: typeof import("./fleet").Fleet = null as any;
utilities.lazyLoad(exports, ["Fleet"], () => require("./fleet"));

export { FleetMemberArgs } from "./fleetMember";
export type FleetMember = import("./fleetMember").FleetMember;
export const FleetMember: typeof import("./fleetMember").FleetMember = null as any;
utilities.lazyLoad(exports, ["FleetMember"], () => require("./fleetMember"));

export { FleetUpdateStrategyArgs } from "./fleetUpdateStrategy";
export type FleetUpdateStrategy = import("./fleetUpdateStrategy").FleetUpdateStrategy;
export const FleetUpdateStrategy: typeof import("./fleetUpdateStrategy").FleetUpdateStrategy = null as any;
utilities.lazyLoad(exports, ["FleetUpdateStrategy"], () => require("./fleetUpdateStrategy"));

export { GetAgentPoolArgs, GetAgentPoolResult, GetAgentPoolOutputArgs } from "./getAgentPool";
export const getAgentPool: typeof import("./getAgentPool").getAgentPool = null as any;
export const getAgentPoolOutput: typeof import("./getAgentPool").getAgentPoolOutput = null as any;
utilities.lazyLoad(exports, ["getAgentPool","getAgentPoolOutput"], () => require("./getAgentPool"));

export { GetFleetArgs, GetFleetResult, GetFleetOutputArgs } from "./getFleet";
export const getFleet: typeof import("./getFleet").getFleet = null as any;
export const getFleetOutput: typeof import("./getFleet").getFleetOutput = null as any;
utilities.lazyLoad(exports, ["getFleet","getFleetOutput"], () => require("./getFleet"));

export { GetFleetMemberArgs, GetFleetMemberResult, GetFleetMemberOutputArgs } from "./getFleetMember";
export const getFleetMember: typeof import("./getFleetMember").getFleetMember = null as any;
export const getFleetMemberOutput: typeof import("./getFleetMember").getFleetMemberOutput = null as any;
utilities.lazyLoad(exports, ["getFleetMember","getFleetMemberOutput"], () => require("./getFleetMember"));

export { GetFleetUpdateStrategyArgs, GetFleetUpdateStrategyResult, GetFleetUpdateStrategyOutputArgs } from "./getFleetUpdateStrategy";
export const getFleetUpdateStrategy: typeof import("./getFleetUpdateStrategy").getFleetUpdateStrategy = null as any;
export const getFleetUpdateStrategyOutput: typeof import("./getFleetUpdateStrategy").getFleetUpdateStrategyOutput = null as any;
utilities.lazyLoad(exports, ["getFleetUpdateStrategy","getFleetUpdateStrategyOutput"], () => require("./getFleetUpdateStrategy"));

export { GetLoadBalancerArgs, GetLoadBalancerResult, GetLoadBalancerOutputArgs } from "./getLoadBalancer";
export const getLoadBalancer: typeof import("./getLoadBalancer").getLoadBalancer = null as any;
export const getLoadBalancerOutput: typeof import("./getLoadBalancer").getLoadBalancerOutput = null as any;
utilities.lazyLoad(exports, ["getLoadBalancer","getLoadBalancerOutput"], () => require("./getLoadBalancer"));

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

export { GetOpenShiftManagedClusterArgs, GetOpenShiftManagedClusterResult, GetOpenShiftManagedClusterOutputArgs } from "./getOpenShiftManagedCluster";
export const getOpenShiftManagedCluster: typeof import("./getOpenShiftManagedCluster").getOpenShiftManagedCluster = null as any;
export const getOpenShiftManagedClusterOutput: typeof import("./getOpenShiftManagedCluster").getOpenShiftManagedClusterOutput = null as any;
utilities.lazyLoad(exports, ["getOpenShiftManagedCluster","getOpenShiftManagedClusterOutput"], () => require("./getOpenShiftManagedCluster"));

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

export { GetUpdateRunArgs, GetUpdateRunResult, GetUpdateRunOutputArgs } from "./getUpdateRun";
export const getUpdateRun: typeof import("./getUpdateRun").getUpdateRun = null as any;
export const getUpdateRunOutput: typeof import("./getUpdateRun").getUpdateRunOutput = null as any;
utilities.lazyLoad(exports, ["getUpdateRun","getUpdateRunOutput"], () => require("./getUpdateRun"));

export { ListFleetCredentialsArgs, ListFleetCredentialsResult, ListFleetCredentialsOutputArgs } from "./listFleetCredentials";
export const listFleetCredentials: typeof import("./listFleetCredentials").listFleetCredentials = null as any;
export const listFleetCredentialsOutput: typeof import("./listFleetCredentials").listFleetCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listFleetCredentials","listFleetCredentialsOutput"], () => require("./listFleetCredentials"));

export { ListManagedClusterAccessProfileArgs, ListManagedClusterAccessProfileResult, ListManagedClusterAccessProfileOutputArgs } from "./listManagedClusterAccessProfile";
export const listManagedClusterAccessProfile: typeof import("./listManagedClusterAccessProfile").listManagedClusterAccessProfile = null as any;
export const listManagedClusterAccessProfileOutput: typeof import("./listManagedClusterAccessProfile").listManagedClusterAccessProfileOutput = null as any;
utilities.lazyLoad(exports, ["listManagedClusterAccessProfile","listManagedClusterAccessProfileOutput"], () => require("./listManagedClusterAccessProfile"));

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

export { LoadBalancerArgs } from "./loadBalancer";
export type LoadBalancer = import("./loadBalancer").LoadBalancer;
export const LoadBalancer: typeof import("./loadBalancer").LoadBalancer = null as any;
utilities.lazyLoad(exports, ["LoadBalancer"], () => require("./loadBalancer"));

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

export { OpenShiftManagedClusterArgs } from "./openShiftManagedCluster";
export type OpenShiftManagedCluster = import("./openShiftManagedCluster").OpenShiftManagedCluster;
export const OpenShiftManagedCluster: typeof import("./openShiftManagedCluster").OpenShiftManagedCluster = null as any;
utilities.lazyLoad(exports, ["OpenShiftManagedCluster"], () => require("./openShiftManagedCluster"));

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

export { UpdateRunArgs } from "./updateRun";
export type UpdateRun = import("./updateRun").UpdateRun;
export const UpdateRun: typeof import("./updateRun").UpdateRun = null as any;
utilities.lazyLoad(exports, ["UpdateRun"], () => require("./updateRun"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerservice:AgentPool":
                return new AgentPool(name, <any>undefined, { urn })
            case "azure-native:containerservice:Fleet":
                return new Fleet(name, <any>undefined, { urn })
            case "azure-native:containerservice:FleetMember":
                return new FleetMember(name, <any>undefined, { urn })
            case "azure-native:containerservice:FleetUpdateStrategy":
                return new FleetUpdateStrategy(name, <any>undefined, { urn })
            case "azure-native:containerservice:LoadBalancer":
                return new LoadBalancer(name, <any>undefined, { urn })
            case "azure-native:containerservice:MaintenanceConfiguration":
                return new MaintenanceConfiguration(name, <any>undefined, { urn })
            case "azure-native:containerservice:ManagedCluster":
                return new ManagedCluster(name, <any>undefined, { urn })
            case "azure-native:containerservice:ManagedClusterSnapshot":
                return new ManagedClusterSnapshot(name, <any>undefined, { urn })
            case "azure-native:containerservice:OpenShiftManagedCluster":
                return new OpenShiftManagedCluster(name, <any>undefined, { urn })
            case "azure-native:containerservice:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:containerservice:Snapshot":
                return new Snapshot(name, <any>undefined, { urn })
            case "azure-native:containerservice:TrustedAccessRoleBinding":
                return new TrustedAccessRoleBinding(name, <any>undefined, { urn })
            case "azure-native:containerservice:UpdateRun":
                return new UpdateRun(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerservice", _module)