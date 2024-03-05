import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ACSSBackupConnectionArgs } from "./acssbackupConnection";
export type ACSSBackupConnection = import("./acssbackupConnection").ACSSBackupConnection;
export const ACSSBackupConnection: typeof import("./acssbackupConnection").ACSSBackupConnection = null as any;
utilities.lazyLoad(exports, ["ACSSBackupConnection"], () => require("./acssbackupConnection"));

export { ConnectorArgs } from "./connector";
export type Connector = import("./connector").Connector;
export const Connector: typeof import("./connector").Connector = null as any;
utilities.lazyLoad(exports, ["Connector"], () => require("./connector"));

export { GetACSSBackupConnectionArgs, GetACSSBackupConnectionResult, GetACSSBackupConnectionOutputArgs } from "./getACSSBackupConnection";
export const getACSSBackupConnection: typeof import("./getACSSBackupConnection").getACSSBackupConnection = null as any;
export const getACSSBackupConnectionOutput: typeof import("./getACSSBackupConnection").getACSSBackupConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getACSSBackupConnection","getACSSBackupConnectionOutput"], () => require("./getACSSBackupConnection"));

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

export { GetSAPApplicationServerInstanceArgs, GetSAPApplicationServerInstanceResult, GetSAPApplicationServerInstanceOutputArgs } from "./getSAPApplicationServerInstance";
export const getSAPApplicationServerInstance: typeof import("./getSAPApplicationServerInstance").getSAPApplicationServerInstance = null as any;
export const getSAPApplicationServerInstanceOutput: typeof import("./getSAPApplicationServerInstance").getSAPApplicationServerInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSAPApplicationServerInstance","getSAPApplicationServerInstanceOutput"], () => require("./getSAPApplicationServerInstance"));

export { GetSAPAvailabilityZoneDetailsArgs, GetSAPAvailabilityZoneDetailsResult, GetSAPAvailabilityZoneDetailsOutputArgs } from "./getSAPAvailabilityZoneDetails";
export const getSAPAvailabilityZoneDetails: typeof import("./getSAPAvailabilityZoneDetails").getSAPAvailabilityZoneDetails = null as any;
export const getSAPAvailabilityZoneDetailsOutput: typeof import("./getSAPAvailabilityZoneDetails").getSAPAvailabilityZoneDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getSAPAvailabilityZoneDetails","getSAPAvailabilityZoneDetailsOutput"], () => require("./getSAPAvailabilityZoneDetails"));

export { GetSAPCentralInstanceArgs, GetSAPCentralInstanceResult, GetSAPCentralInstanceOutputArgs } from "./getSAPCentralInstance";
export const getSAPCentralInstance: typeof import("./getSAPCentralInstance").getSAPCentralInstance = null as any;
export const getSAPCentralInstanceOutput: typeof import("./getSAPCentralInstance").getSAPCentralInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSAPCentralInstance","getSAPCentralInstanceOutput"], () => require("./getSAPCentralInstance"));

export { GetSAPDatabaseInstanceArgs, GetSAPDatabaseInstanceResult, GetSAPDatabaseInstanceOutputArgs } from "./getSAPDatabaseInstance";
export const getSAPDatabaseInstance: typeof import("./getSAPDatabaseInstance").getSAPDatabaseInstance = null as any;
export const getSAPDatabaseInstanceOutput: typeof import("./getSAPDatabaseInstance").getSAPDatabaseInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSAPDatabaseInstance","getSAPDatabaseInstanceOutput"], () => require("./getSAPDatabaseInstance"));

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

export { GetSAPVirtualInstanceArgs, GetSAPVirtualInstanceResult, GetSAPVirtualInstanceOutputArgs } from "./getSAPVirtualInstance";
export const getSAPVirtualInstance: typeof import("./getSAPVirtualInstance").getSAPVirtualInstance = null as any;
export const getSAPVirtualInstanceOutput: typeof import("./getSAPVirtualInstance").getSAPVirtualInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSAPVirtualInstance","getSAPVirtualInstanceOutput"], () => require("./getSAPVirtualInstance"));

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

export { SAPApplicationServerInstanceArgs } from "./sapapplicationServerInstance";
export type SAPApplicationServerInstance = import("./sapapplicationServerInstance").SAPApplicationServerInstance;
export const SAPApplicationServerInstance: typeof import("./sapapplicationServerInstance").SAPApplicationServerInstance = null as any;
utilities.lazyLoad(exports, ["SAPApplicationServerInstance"], () => require("./sapapplicationServerInstance"));

export { SAPCentralInstanceArgs } from "./sapcentralInstance";
export type SAPCentralInstance = import("./sapcentralInstance").SAPCentralInstance;
export const SAPCentralInstance: typeof import("./sapcentralInstance").SAPCentralInstance = null as any;
utilities.lazyLoad(exports, ["SAPCentralInstance"], () => require("./sapcentralInstance"));

export { SAPDatabaseInstanceArgs } from "./sapdatabaseInstance";
export type SAPDatabaseInstance = import("./sapdatabaseInstance").SAPDatabaseInstance;
export const SAPDatabaseInstance: typeof import("./sapdatabaseInstance").SAPDatabaseInstance = null as any;
utilities.lazyLoad(exports, ["SAPDatabaseInstance"], () => require("./sapdatabaseInstance"));

export { SAPVirtualInstanceArgs } from "./sapvirtualInstance";
export type SAPVirtualInstance = import("./sapvirtualInstance").SAPVirtualInstance;
export const SAPVirtualInstance: typeof import("./sapvirtualInstance").SAPVirtualInstance = null as any;
utilities.lazyLoad(exports, ["SAPVirtualInstance"], () => require("./sapvirtualInstance"));

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
            case "azure-native:workloads:Connector":
                return new Connector(name, <any>undefined, { urn })
            case "azure-native:workloads:Monitor":
                return new Monitor(name, <any>undefined, { urn })
            case "azure-native:workloads:ProviderInstance":
                return new ProviderInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SAPApplicationServerInstance":
                return new SAPApplicationServerInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SAPCentralInstance":
                return new SAPCentralInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SAPDatabaseInstance":
                return new SAPDatabaseInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SAPVirtualInstance":
                return new SAPVirtualInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SapDiscoverySite":
                return new SapDiscoverySite(name, <any>undefined, { urn })
            case "azure-native:workloads:SapInstance":
                return new SapInstance(name, <any>undefined, { urn })
            case "azure-native:workloads:SapLandscapeMonitor":
                return new SapLandscapeMonitor(name, <any>undefined, { urn })
            case "azure-native:workloads:ServerInstance":
                return new ServerInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "workloads", _module)