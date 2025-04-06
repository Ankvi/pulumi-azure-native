import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ACSSBackupConnectionArgs } from "./acssbackupConnection";
export type ACSSBackupConnection = import("./acssbackupConnection").ACSSBackupConnection;
export const ACSSBackupConnection: typeof import("./acssbackupConnection").ACSSBackupConnection = null as any;
utilities.lazyLoad(exports, ["ACSSBackupConnection"], () => require("./acssbackupConnection"));

export { AlertArgs } from "./alert";
export type Alert = import("./alert").Alert;
export const Alert: typeof import("./alert").Alert = null as any;
utilities.lazyLoad(exports, ["Alert"], () => require("./alert"));

export { ConnectorArgs } from "./connector";
export type Connector = import("./connector").Connector;
export const Connector: typeof import("./connector").Connector = null as any;
utilities.lazyLoad(exports, ["Connector"], () => require("./connector"));

export { GetACSSBackupConnectionArgs, GetACSSBackupConnectionResult, GetACSSBackupConnectionOutputArgs } from "./getACSSBackupConnection";
export const getACSSBackupConnection: typeof import("./getACSSBackupConnection").getACSSBackupConnection = null as any;
export const getACSSBackupConnectionOutput: typeof import("./getACSSBackupConnection").getACSSBackupConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getACSSBackupConnection","getACSSBackupConnectionOutput"], () => require("./getACSSBackupConnection"));

export { GetAlertArgs, GetAlertResult, GetAlertOutputArgs } from "./getAlert";
export const getAlert: typeof import("./getAlert").getAlert = null as any;
export const getAlertOutput: typeof import("./getAlert").getAlertOutput = null as any;
utilities.lazyLoad(exports, ["getAlert","getAlertOutput"], () => require("./getAlert"));

export { GetConnectorArgs, GetConnectorResult, GetConnectorOutputArgs } from "./getConnector";
export const getConnector: typeof import("./getConnector").getConnector = null as any;
export const getConnectorOutput: typeof import("./getConnector").getConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getConnector","getConnectorOutput"], () => require("./getConnector"));

export { GetMonitorArgs, GetMonitorResult, GetMonitorOutputArgs } from "./getMonitor";
export const getMonitor: typeof import("./getMonitor").getMonitor = null as any;
export const getMonitorOutput: typeof import("./getMonitor").getMonitorOutput = null as any;
utilities.lazyLoad(exports, ["getMonitor","getMonitorOutput"], () => require("./getMonitor"));

export { GetProviderInstanceArgs, GetProviderInstanceResult, GetProviderInstanceOutputArgs } from "./getProviderInstance";
export const getProviderInstance: typeof import("./getProviderInstance").getProviderInstance = null as any;
export const getProviderInstanceOutput: typeof import("./getProviderInstance").getProviderInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getProviderInstance","getProviderInstanceOutput"], () => require("./getProviderInstance"));

export { GetSAPAvailabilityZoneDetailsArgs, GetSAPAvailabilityZoneDetailsResult, GetSAPAvailabilityZoneDetailsOutputArgs } from "./getSAPAvailabilityZoneDetails";
export const getSAPAvailabilityZoneDetails: typeof import("./getSAPAvailabilityZoneDetails").getSAPAvailabilityZoneDetails = null as any;
export const getSAPAvailabilityZoneDetailsOutput: typeof import("./getSAPAvailabilityZoneDetails").getSAPAvailabilityZoneDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getSAPAvailabilityZoneDetails","getSAPAvailabilityZoneDetailsOutput"], () => require("./getSAPAvailabilityZoneDetails"));

export { GetSAPDiskConfigurationsArgs, GetSAPDiskConfigurationsResult, GetSAPDiskConfigurationsOutputArgs } from "./getSAPDiskConfigurations";
export const getSAPDiskConfigurations: typeof import("./getSAPDiskConfigurations").getSAPDiskConfigurations = null as any;
export const getSAPDiskConfigurationsOutput: typeof import("./getSAPDiskConfigurations").getSAPDiskConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["getSAPDiskConfigurations","getSAPDiskConfigurationsOutput"], () => require("./getSAPDiskConfigurations"));

export { GetSAPSizingRecommendationsArgs, GetSAPSizingRecommendationsResult, GetSAPSizingRecommendationsOutputArgs } from "./getSAPSizingRecommendations";
export const getSAPSizingRecommendations: typeof import("./getSAPSizingRecommendations").getSAPSizingRecommendations = null as any;
export const getSAPSizingRecommendationsOutput: typeof import("./getSAPSizingRecommendations").getSAPSizingRecommendationsOutput = null as any;
utilities.lazyLoad(exports, ["getSAPSizingRecommendations","getSAPSizingRecommendationsOutput"], () => require("./getSAPSizingRecommendations"));

export { GetSAPSupportedSkuArgs, GetSAPSupportedSkuResult, GetSAPSupportedSkuOutputArgs } from "./getSAPSupportedSku";
export const getSAPSupportedSku: typeof import("./getSAPSupportedSku").getSAPSupportedSku = null as any;
export const getSAPSupportedSkuOutput: typeof import("./getSAPSupportedSku").getSAPSupportedSkuOutput = null as any;
utilities.lazyLoad(exports, ["getSAPSupportedSku","getSAPSupportedSkuOutput"], () => require("./getSAPSupportedSku"));

export { GetSapApplicationServerInstanceArgs, GetSapApplicationServerInstanceResult, GetSapApplicationServerInstanceOutputArgs } from "./getSapApplicationServerInstance";
export const getSapApplicationServerInstance: typeof import("./getSapApplicationServerInstance").getSapApplicationServerInstance = null as any;
export const getSapApplicationServerInstanceOutput: typeof import("./getSapApplicationServerInstance").getSapApplicationServerInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSapApplicationServerInstance","getSapApplicationServerInstanceOutput"], () => require("./getSapApplicationServerInstance"));

export { GetSapCentralServerInstanceArgs, GetSapCentralServerInstanceResult, GetSapCentralServerInstanceOutputArgs } from "./getSapCentralServerInstance";
export const getSapCentralServerInstance: typeof import("./getSapCentralServerInstance").getSapCentralServerInstance = null as any;
export const getSapCentralServerInstanceOutput: typeof import("./getSapCentralServerInstance").getSapCentralServerInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSapCentralServerInstance","getSapCentralServerInstanceOutput"], () => require("./getSapCentralServerInstance"));

export { GetSapDatabaseInstanceArgs, GetSapDatabaseInstanceResult, GetSapDatabaseInstanceOutputArgs } from "./getSapDatabaseInstance";
export const getSapDatabaseInstance: typeof import("./getSapDatabaseInstance").getSapDatabaseInstance = null as any;
export const getSapDatabaseInstanceOutput: typeof import("./getSapDatabaseInstance").getSapDatabaseInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSapDatabaseInstance","getSapDatabaseInstanceOutput"], () => require("./getSapDatabaseInstance"));

export { GetSapDiscoverySiteArgs, GetSapDiscoverySiteResult, GetSapDiscoverySiteOutputArgs } from "./getSapDiscoverySite";
export const getSapDiscoverySite: typeof import("./getSapDiscoverySite").getSapDiscoverySite = null as any;
export const getSapDiscoverySiteOutput: typeof import("./getSapDiscoverySite").getSapDiscoverySiteOutput = null as any;
utilities.lazyLoad(exports, ["getSapDiscoverySite","getSapDiscoverySiteOutput"], () => require("./getSapDiscoverySite"));

export { GetSapInstanceArgs, GetSapInstanceResult, GetSapInstanceOutputArgs } from "./getSapInstance";
export const getSapInstance: typeof import("./getSapInstance").getSapInstance = null as any;
export const getSapInstanceOutput: typeof import("./getSapInstance").getSapInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSapInstance","getSapInstanceOutput"], () => require("./getSapInstance"));

export { GetSapLandscapeMonitorArgs, GetSapLandscapeMonitorResult, GetSapLandscapeMonitorOutputArgs } from "./getSapLandscapeMonitor";
export const getSapLandscapeMonitor: typeof import("./getSapLandscapeMonitor").getSapLandscapeMonitor = null as any;
export const getSapLandscapeMonitorOutput: typeof import("./getSapLandscapeMonitor").getSapLandscapeMonitorOutput = null as any;
utilities.lazyLoad(exports, ["getSapLandscapeMonitor","getSapLandscapeMonitorOutput"], () => require("./getSapLandscapeMonitor"));

export { GetSapVirtualInstanceArgs, GetSapVirtualInstanceResult, GetSapVirtualInstanceOutputArgs } from "./getSapVirtualInstance";
export const getSapVirtualInstance: typeof import("./getSapVirtualInstance").getSapVirtualInstance = null as any;
export const getSapVirtualInstanceOutput: typeof import("./getSapVirtualInstance").getSapVirtualInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSapVirtualInstance","getSapVirtualInstanceOutput"], () => require("./getSapVirtualInstance"));

export { GetSapVirtualInstanceInvokeAvailabilityZoneDetailsArgs, GetSapVirtualInstanceInvokeAvailabilityZoneDetailsResult, GetSapVirtualInstanceInvokeAvailabilityZoneDetailsOutputArgs } from "./getSapVirtualInstanceInvokeAvailabilityZoneDetails";
export const getSapVirtualInstanceInvokeAvailabilityZoneDetails: typeof import("./getSapVirtualInstanceInvokeAvailabilityZoneDetails").getSapVirtualInstanceInvokeAvailabilityZoneDetails = null as any;
export const getSapVirtualInstanceInvokeAvailabilityZoneDetailsOutput: typeof import("./getSapVirtualInstanceInvokeAvailabilityZoneDetails").getSapVirtualInstanceInvokeAvailabilityZoneDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getSapVirtualInstanceInvokeAvailabilityZoneDetails","getSapVirtualInstanceInvokeAvailabilityZoneDetailsOutput"], () => require("./getSapVirtualInstanceInvokeAvailabilityZoneDetails"));

export { GetSapVirtualInstanceInvokeDiskConfigurationsArgs, GetSapVirtualInstanceInvokeDiskConfigurationsResult, GetSapVirtualInstanceInvokeDiskConfigurationsOutputArgs } from "./getSapVirtualInstanceInvokeDiskConfigurations";
export const getSapVirtualInstanceInvokeDiskConfigurations: typeof import("./getSapVirtualInstanceInvokeDiskConfigurations").getSapVirtualInstanceInvokeDiskConfigurations = null as any;
export const getSapVirtualInstanceInvokeDiskConfigurationsOutput: typeof import("./getSapVirtualInstanceInvokeDiskConfigurations").getSapVirtualInstanceInvokeDiskConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["getSapVirtualInstanceInvokeDiskConfigurations","getSapVirtualInstanceInvokeDiskConfigurationsOutput"], () => require("./getSapVirtualInstanceInvokeDiskConfigurations"));

export { GetSapVirtualInstanceInvokeSapSupportedSkuArgs, GetSapVirtualInstanceInvokeSapSupportedSkuResult, GetSapVirtualInstanceInvokeSapSupportedSkuOutputArgs } from "./getSapVirtualInstanceInvokeSapSupportedSku";
export const getSapVirtualInstanceInvokeSapSupportedSku: typeof import("./getSapVirtualInstanceInvokeSapSupportedSku").getSapVirtualInstanceInvokeSapSupportedSku = null as any;
export const getSapVirtualInstanceInvokeSapSupportedSkuOutput: typeof import("./getSapVirtualInstanceInvokeSapSupportedSku").getSapVirtualInstanceInvokeSapSupportedSkuOutput = null as any;
utilities.lazyLoad(exports, ["getSapVirtualInstanceInvokeSapSupportedSku","getSapVirtualInstanceInvokeSapSupportedSkuOutput"], () => require("./getSapVirtualInstanceInvokeSapSupportedSku"));

export { GetSapVirtualInstanceInvokeSizingRecommendationsArgs, GetSapVirtualInstanceInvokeSizingRecommendationsResult, GetSapVirtualInstanceInvokeSizingRecommendationsOutputArgs } from "./getSapVirtualInstanceInvokeSizingRecommendations";
export const getSapVirtualInstanceInvokeSizingRecommendations: typeof import("./getSapVirtualInstanceInvokeSizingRecommendations").getSapVirtualInstanceInvokeSizingRecommendations = null as any;
export const getSapVirtualInstanceInvokeSizingRecommendationsOutput: typeof import("./getSapVirtualInstanceInvokeSizingRecommendations").getSapVirtualInstanceInvokeSizingRecommendationsOutput = null as any;
utilities.lazyLoad(exports, ["getSapVirtualInstanceInvokeSizingRecommendations","getSapVirtualInstanceInvokeSizingRecommendationsOutput"], () => require("./getSapVirtualInstanceInvokeSizingRecommendations"));

export { GetServerInstanceArgs, GetServerInstanceResult, GetServerInstanceOutputArgs } from "./getServerInstance";
export const getServerInstance: typeof import("./getServerInstance").getServerInstance = null as any;
export const getServerInstanceOutput: typeof import("./getServerInstance").getServerInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getServerInstance","getServerInstanceOutput"], () => require("./getServerInstance"));

export { MonitorArgs } from "./monitor";
export type Monitor = import("./monitor").Monitor;
export const Monitor: typeof import("./monitor").Monitor = null as any;
utilities.lazyLoad(exports, ["Monitor"], () => require("./monitor"));

export { ProviderInstanceArgs } from "./providerInstance";
export type ProviderInstance = import("./providerInstance").ProviderInstance;
export const ProviderInstance: typeof import("./providerInstance").ProviderInstance = null as any;
utilities.lazyLoad(exports, ["ProviderInstance"], () => require("./providerInstance"));

export { SapApplicationServerInstanceArgs } from "./sapApplicationServerInstance";
export type SapApplicationServerInstance = import("./sapApplicationServerInstance").SapApplicationServerInstance;
export const SapApplicationServerInstance: typeof import("./sapApplicationServerInstance").SapApplicationServerInstance = null as any;
utilities.lazyLoad(exports, ["SapApplicationServerInstance"], () => require("./sapApplicationServerInstance"));

export { SapCentralServerInstanceArgs } from "./sapCentralServerInstance";
export type SapCentralServerInstance = import("./sapCentralServerInstance").SapCentralServerInstance;
export const SapCentralServerInstance: typeof import("./sapCentralServerInstance").SapCentralServerInstance = null as any;
utilities.lazyLoad(exports, ["SapCentralServerInstance"], () => require("./sapCentralServerInstance"));

export { SapDatabaseInstanceArgs } from "./sapDatabaseInstance";
export type SapDatabaseInstance = import("./sapDatabaseInstance").SapDatabaseInstance;
export const SapDatabaseInstance: typeof import("./sapDatabaseInstance").SapDatabaseInstance = null as any;
utilities.lazyLoad(exports, ["SapDatabaseInstance"], () => require("./sapDatabaseInstance"));

export { SapDiscoverySiteArgs } from "./sapDiscoverySite";
export type SapDiscoverySite = import("./sapDiscoverySite").SapDiscoverySite;
export const SapDiscoverySite: typeof import("./sapDiscoverySite").SapDiscoverySite = null as any;
utilities.lazyLoad(exports, ["SapDiscoverySite"], () => require("./sapDiscoverySite"));

export { SapInstanceArgs } from "./sapInstance";
export type SapInstance = import("./sapInstance").SapInstance;
export const SapInstance: typeof import("./sapInstance").SapInstance = null as any;
utilities.lazyLoad(exports, ["SapInstance"], () => require("./sapInstance"));

export { SapLandscapeMonitorArgs } from "./sapLandscapeMonitor";
export type SapLandscapeMonitor = import("./sapLandscapeMonitor").SapLandscapeMonitor;
export const SapLandscapeMonitor: typeof import("./sapLandscapeMonitor").SapLandscapeMonitor = null as any;
utilities.lazyLoad(exports, ["SapLandscapeMonitor"], () => require("./sapLandscapeMonitor"));

export { SapVirtualInstanceArgs } from "./sapVirtualInstance";
export type SapVirtualInstance = import("./sapVirtualInstance").SapVirtualInstance;
export const SapVirtualInstance: typeof import("./sapVirtualInstance").SapVirtualInstance = null as any;
utilities.lazyLoad(exports, ["SapVirtualInstance"], () => require("./sapVirtualInstance"));

export { ServerInstanceArgs } from "./serverInstance";
export type ServerInstance = import("./serverInstance").ServerInstance;
export const ServerInstance: typeof import("./serverInstance").ServerInstance = null as any;
utilities.lazyLoad(exports, ["ServerInstance"], () => require("./serverInstance"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:workloads:ACSSBackupConnection":
                return new ACSSBackupConnection(name, <any>undefined, { urn })
            case "azure-native:workloads:Alert":
                return new Alert(name, <any>undefined, { urn })
            case "azure-native:workloads:Connector":
                return new Connector(name, <any>undefined, { urn })
            case "azure-native:workloads:Monitor":
                return new Monitor(name, <any>undefined, { urn })
            case "azure-native:workloads:ProviderInstance":
                return new ProviderInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SapApplicationServerInstance":
                return new SapApplicationServerInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SapCentralServerInstance":
                return new SapCentralServerInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SapDatabaseInstance":
                return new SapDatabaseInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SapDiscoverySite":
                return new SapDiscoverySite(name, <any>undefined, { urn })
            case "azure-native:workloads:SapInstance":
                return new SapInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SapLandscapeMonitor":
                return new SapLandscapeMonitor(name, <any>undefined, { urn })
            case "azure-native:workloads:SapVirtualInstance":
                return new SapVirtualInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:ServerInstance":
                return new ServerInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "workloads", _module)