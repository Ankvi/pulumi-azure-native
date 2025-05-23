import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AgentPoolArgs } from "./agentPool";
export type AgentPool = import("./agentPool").AgentPool;
export const AgentPool: typeof import("./agentPool").AgentPool = null as any;
utilities.lazyLoad(exports, ["AgentPool"], () => require("./agentPool"));

export { BareMetalMachineArgs } from "./bareMetalMachine";
export type BareMetalMachine = import("./bareMetalMachine").BareMetalMachine;
export const BareMetalMachine: typeof import("./bareMetalMachine").BareMetalMachine = null as any;
utilities.lazyLoad(exports, ["BareMetalMachine"], () => require("./bareMetalMachine"));

export { BareMetalMachineKeySetArgs } from "./bareMetalMachineKeySet";
export type BareMetalMachineKeySet = import("./bareMetalMachineKeySet").BareMetalMachineKeySet;
export const BareMetalMachineKeySet: typeof import("./bareMetalMachineKeySet").BareMetalMachineKeySet = null as any;
utilities.lazyLoad(exports, ["BareMetalMachineKeySet"], () => require("./bareMetalMachineKeySet"));

export { BmcKeySetArgs } from "./bmcKeySet";
export type BmcKeySet = import("./bmcKeySet").BmcKeySet;
export const BmcKeySet: typeof import("./bmcKeySet").BmcKeySet = null as any;
utilities.lazyLoad(exports, ["BmcKeySet"], () => require("./bmcKeySet"));

export { CloudServicesNetworkArgs } from "./cloudServicesNetwork";
export type CloudServicesNetwork = import("./cloudServicesNetwork").CloudServicesNetwork;
export const CloudServicesNetwork: typeof import("./cloudServicesNetwork").CloudServicesNetwork = null as any;
utilities.lazyLoad(exports, ["CloudServicesNetwork"], () => require("./cloudServicesNetwork"));

export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { ClusterManagerArgs } from "./clusterManager";
export type ClusterManager = import("./clusterManager").ClusterManager;
export const ClusterManager: typeof import("./clusterManager").ClusterManager = null as any;
utilities.lazyLoad(exports, ["ClusterManager"], () => require("./clusterManager"));

export { ConsoleArgs } from "./console";
export type Console = import("./console").Console;
export const Console: typeof import("./console").Console = null as any;
utilities.lazyLoad(exports, ["Console"], () => require("./console"));

export { GetAgentPoolArgs, GetAgentPoolResult, GetAgentPoolOutputArgs } from "./getAgentPool";
export const getAgentPool: typeof import("./getAgentPool").getAgentPool = null as any;
export const getAgentPoolOutput: typeof import("./getAgentPool").getAgentPoolOutput = null as any;
utilities.lazyLoad(exports, ["getAgentPool","getAgentPoolOutput"], () => require("./getAgentPool"));

export { GetBareMetalMachineArgs, GetBareMetalMachineResult, GetBareMetalMachineOutputArgs } from "./getBareMetalMachine";
export const getBareMetalMachine: typeof import("./getBareMetalMachine").getBareMetalMachine = null as any;
export const getBareMetalMachineOutput: typeof import("./getBareMetalMachine").getBareMetalMachineOutput = null as any;
utilities.lazyLoad(exports, ["getBareMetalMachine","getBareMetalMachineOutput"], () => require("./getBareMetalMachine"));

export { GetBareMetalMachineKeySetArgs, GetBareMetalMachineKeySetResult, GetBareMetalMachineKeySetOutputArgs } from "./getBareMetalMachineKeySet";
export const getBareMetalMachineKeySet: typeof import("./getBareMetalMachineKeySet").getBareMetalMachineKeySet = null as any;
export const getBareMetalMachineKeySetOutput: typeof import("./getBareMetalMachineKeySet").getBareMetalMachineKeySetOutput = null as any;
utilities.lazyLoad(exports, ["getBareMetalMachineKeySet","getBareMetalMachineKeySetOutput"], () => require("./getBareMetalMachineKeySet"));

export { GetBmcKeySetArgs, GetBmcKeySetResult, GetBmcKeySetOutputArgs } from "./getBmcKeySet";
export const getBmcKeySet: typeof import("./getBmcKeySet").getBmcKeySet = null as any;
export const getBmcKeySetOutput: typeof import("./getBmcKeySet").getBmcKeySetOutput = null as any;
utilities.lazyLoad(exports, ["getBmcKeySet","getBmcKeySetOutput"], () => require("./getBmcKeySet"));

export { GetCloudServicesNetworkArgs, GetCloudServicesNetworkResult, GetCloudServicesNetworkOutputArgs } from "./getCloudServicesNetwork";
export const getCloudServicesNetwork: typeof import("./getCloudServicesNetwork").getCloudServicesNetwork = null as any;
export const getCloudServicesNetworkOutput: typeof import("./getCloudServicesNetwork").getCloudServicesNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getCloudServicesNetwork","getCloudServicesNetworkOutput"], () => require("./getCloudServicesNetwork"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetClusterManagerArgs, GetClusterManagerResult, GetClusterManagerOutputArgs } from "./getClusterManager";
export const getClusterManager: typeof import("./getClusterManager").getClusterManager = null as any;
export const getClusterManagerOutput: typeof import("./getClusterManager").getClusterManagerOutput = null as any;
utilities.lazyLoad(exports, ["getClusterManager","getClusterManagerOutput"], () => require("./getClusterManager"));

export { GetConsoleArgs, GetConsoleResult, GetConsoleOutputArgs } from "./getConsole";
export const getConsole: typeof import("./getConsole").getConsole = null as any;
export const getConsoleOutput: typeof import("./getConsole").getConsoleOutput = null as any;
utilities.lazyLoad(exports, ["getConsole","getConsoleOutput"], () => require("./getConsole"));

export { GetKubernetesClusterArgs, GetKubernetesClusterResult, GetKubernetesClusterOutputArgs } from "./getKubernetesCluster";
export const getKubernetesCluster: typeof import("./getKubernetesCluster").getKubernetesCluster = null as any;
export const getKubernetesClusterOutput: typeof import("./getKubernetesCluster").getKubernetesClusterOutput = null as any;
utilities.lazyLoad(exports, ["getKubernetesCluster","getKubernetesClusterOutput"], () => require("./getKubernetesCluster"));

export { GetKubernetesClusterFeatureArgs, GetKubernetesClusterFeatureResult, GetKubernetesClusterFeatureOutputArgs } from "./getKubernetesClusterFeature";
export const getKubernetesClusterFeature: typeof import("./getKubernetesClusterFeature").getKubernetesClusterFeature = null as any;
export const getKubernetesClusterFeatureOutput: typeof import("./getKubernetesClusterFeature").getKubernetesClusterFeatureOutput = null as any;
utilities.lazyLoad(exports, ["getKubernetesClusterFeature","getKubernetesClusterFeatureOutput"], () => require("./getKubernetesClusterFeature"));

export { GetL2NetworkArgs, GetL2NetworkResult, GetL2NetworkOutputArgs } from "./getL2Network";
export const getL2Network: typeof import("./getL2Network").getL2Network = null as any;
export const getL2NetworkOutput: typeof import("./getL2Network").getL2NetworkOutput = null as any;
utilities.lazyLoad(exports, ["getL2Network","getL2NetworkOutput"], () => require("./getL2Network"));

export { GetL3NetworkArgs, GetL3NetworkResult, GetL3NetworkOutputArgs } from "./getL3Network";
export const getL3Network: typeof import("./getL3Network").getL3Network = null as any;
export const getL3NetworkOutput: typeof import("./getL3Network").getL3NetworkOutput = null as any;
utilities.lazyLoad(exports, ["getL3Network","getL3NetworkOutput"], () => require("./getL3Network"));

export { GetMetricsConfigurationArgs, GetMetricsConfigurationResult, GetMetricsConfigurationOutputArgs } from "./getMetricsConfiguration";
export const getMetricsConfiguration: typeof import("./getMetricsConfiguration").getMetricsConfiguration = null as any;
export const getMetricsConfigurationOutput: typeof import("./getMetricsConfiguration").getMetricsConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getMetricsConfiguration","getMetricsConfigurationOutput"], () => require("./getMetricsConfiguration"));

export { GetRackArgs, GetRackResult, GetRackOutputArgs } from "./getRack";
export const getRack: typeof import("./getRack").getRack = null as any;
export const getRackOutput: typeof import("./getRack").getRackOutput = null as any;
utilities.lazyLoad(exports, ["getRack","getRackOutput"], () => require("./getRack"));

export { GetStorageApplianceArgs, GetStorageApplianceResult, GetStorageApplianceOutputArgs } from "./getStorageAppliance";
export const getStorageAppliance: typeof import("./getStorageAppliance").getStorageAppliance = null as any;
export const getStorageApplianceOutput: typeof import("./getStorageAppliance").getStorageApplianceOutput = null as any;
utilities.lazyLoad(exports, ["getStorageAppliance","getStorageApplianceOutput"], () => require("./getStorageAppliance"));

export { GetTrunkedNetworkArgs, GetTrunkedNetworkResult, GetTrunkedNetworkOutputArgs } from "./getTrunkedNetwork";
export const getTrunkedNetwork: typeof import("./getTrunkedNetwork").getTrunkedNetwork = null as any;
export const getTrunkedNetworkOutput: typeof import("./getTrunkedNetwork").getTrunkedNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getTrunkedNetwork","getTrunkedNetworkOutput"], () => require("./getTrunkedNetwork"));

export { GetVirtualMachineArgs, GetVirtualMachineResult, GetVirtualMachineOutputArgs } from "./getVirtualMachine";
export const getVirtualMachine: typeof import("./getVirtualMachine").getVirtualMachine = null as any;
export const getVirtualMachineOutput: typeof import("./getVirtualMachine").getVirtualMachineOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachine","getVirtualMachineOutput"], () => require("./getVirtualMachine"));

export { GetVolumeArgs, GetVolumeResult, GetVolumeOutputArgs } from "./getVolume";
export const getVolume: typeof import("./getVolume").getVolume = null as any;
export const getVolumeOutput: typeof import("./getVolume").getVolumeOutput = null as any;
utilities.lazyLoad(exports, ["getVolume","getVolumeOutput"], () => require("./getVolume"));

export { KubernetesClusterArgs } from "./kubernetesCluster";
export type KubernetesCluster = import("./kubernetesCluster").KubernetesCluster;
export const KubernetesCluster: typeof import("./kubernetesCluster").KubernetesCluster = null as any;
utilities.lazyLoad(exports, ["KubernetesCluster"], () => require("./kubernetesCluster"));

export { KubernetesClusterFeatureArgs } from "./kubernetesClusterFeature";
export type KubernetesClusterFeature = import("./kubernetesClusterFeature").KubernetesClusterFeature;
export const KubernetesClusterFeature: typeof import("./kubernetesClusterFeature").KubernetesClusterFeature = null as any;
utilities.lazyLoad(exports, ["KubernetesClusterFeature"], () => require("./kubernetesClusterFeature"));

export { L2NetworkArgs } from "./l2network";
export type L2Network = import("./l2network").L2Network;
export const L2Network: typeof import("./l2network").L2Network = null as any;
utilities.lazyLoad(exports, ["L2Network"], () => require("./l2network"));

export { L3NetworkArgs } from "./l3network";
export type L3Network = import("./l3network").L3Network;
export const L3Network: typeof import("./l3network").L3Network = null as any;
utilities.lazyLoad(exports, ["L3Network"], () => require("./l3network"));

export { MetricsConfigurationArgs } from "./metricsConfiguration";
export type MetricsConfiguration = import("./metricsConfiguration").MetricsConfiguration;
export const MetricsConfiguration: typeof import("./metricsConfiguration").MetricsConfiguration = null as any;
utilities.lazyLoad(exports, ["MetricsConfiguration"], () => require("./metricsConfiguration"));

export { RackArgs } from "./rack";
export type Rack = import("./rack").Rack;
export const Rack: typeof import("./rack").Rack = null as any;
utilities.lazyLoad(exports, ["Rack"], () => require("./rack"));

export { StorageApplianceArgs } from "./storageAppliance";
export type StorageAppliance = import("./storageAppliance").StorageAppliance;
export const StorageAppliance: typeof import("./storageAppliance").StorageAppliance = null as any;
utilities.lazyLoad(exports, ["StorageAppliance"], () => require("./storageAppliance"));

export { TrunkedNetworkArgs } from "./trunkedNetwork";
export type TrunkedNetwork = import("./trunkedNetwork").TrunkedNetwork;
export const TrunkedNetwork: typeof import("./trunkedNetwork").TrunkedNetwork = null as any;
utilities.lazyLoad(exports, ["TrunkedNetwork"], () => require("./trunkedNetwork"));

export { VirtualMachineArgs } from "./virtualMachine";
export type VirtualMachine = import("./virtualMachine").VirtualMachine;
export const VirtualMachine: typeof import("./virtualMachine").VirtualMachine = null as any;
utilities.lazyLoad(exports, ["VirtualMachine"], () => require("./virtualMachine"));

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
            case "azure-native:networkcloud:AgentPool":
                return new AgentPool(name, <any>undefined, { urn })
            case "azure-native:networkcloud:BareMetalMachine":
                return new BareMetalMachine(name, <any>undefined, { urn })
            case "azure-native:networkcloud:BareMetalMachineKeySet":
                return new BareMetalMachineKeySet(name, <any>undefined, { urn })
            case "azure-native:networkcloud:BmcKeySet":
                return new BmcKeySet(name, <any>undefined, { urn })
            case "azure-native:networkcloud:CloudServicesNetwork":
                return new CloudServicesNetwork(name, <any>undefined, { urn })
            case "azure-native:networkcloud:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:networkcloud:ClusterManager":
                return new ClusterManager(name, <any>undefined, { urn })
            case "azure-native:networkcloud:Console":
                return new Console(name, <any>undefined, { urn })
            case "azure-native:networkcloud:KubernetesCluster":
                return new KubernetesCluster(name, <any>undefined, { urn })
            case "azure-native:networkcloud:KubernetesClusterFeature":
                return new KubernetesClusterFeature(name, <any>undefined, { urn })
            case "azure-native:networkcloud:L2Network":
                return new L2Network(name, <any>undefined, { urn })
            case "azure-native:networkcloud:L3Network":
                return new L3Network(name, <any>undefined, { urn })
            case "azure-native:networkcloud:MetricsConfiguration":
                return new MetricsConfiguration(name, <any>undefined, { urn })
            case "azure-native:networkcloud:Rack":
                return new Rack(name, <any>undefined, { urn })
            case "azure-native:networkcloud:StorageAppliance":
                return new StorageAppliance(name, <any>undefined, { urn })
            case "azure-native:networkcloud:TrunkedNetwork":
                return new TrunkedNetwork(name, <any>undefined, { urn })
            case "azure-native:networkcloud:VirtualMachine":
                return new VirtualMachine(name, <any>undefined, { urn })
            case "azure-native:networkcloud:Volume":
                return new Volume(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "networkcloud", _module)