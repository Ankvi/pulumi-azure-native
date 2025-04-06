import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AddonArgs } from "./addon";
export type Addon = import("./addon").Addon;
export const Addon: typeof import("./addon").Addon = null as any;
utilities.lazyLoad(exports, ["Addon"], () => require("./addon"));

export { AuthorizationArgs } from "./authorization";
export type Authorization = import("./authorization").Authorization;
export const Authorization: typeof import("./authorization").Authorization = null as any;
utilities.lazyLoad(exports, ["Authorization"], () => require("./authorization"));

export { CloudLinkArgs } from "./cloudLink";
export type CloudLink = import("./cloudLink").CloudLink;
export const CloudLink: typeof import("./cloudLink").CloudLink = null as any;
utilities.lazyLoad(exports, ["CloudLink"], () => require("./cloudLink"));

export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { DatastoreArgs } from "./datastore";
export type Datastore = import("./datastore").Datastore;
export const Datastore: typeof import("./datastore").Datastore = null as any;
utilities.lazyLoad(exports, ["Datastore"], () => require("./datastore"));

export { GetAddonArgs, GetAddonResult, GetAddonOutputArgs } from "./getAddon";
export const getAddon: typeof import("./getAddon").getAddon = null as any;
export const getAddonOutput: typeof import("./getAddon").getAddonOutput = null as any;
utilities.lazyLoad(exports, ["getAddon","getAddonOutput"], () => require("./getAddon"));

export { GetAuthorizationArgs, GetAuthorizationResult, GetAuthorizationOutputArgs } from "./getAuthorization";
export const getAuthorization: typeof import("./getAuthorization").getAuthorization = null as any;
export const getAuthorizationOutput: typeof import("./getAuthorization").getAuthorizationOutput = null as any;
utilities.lazyLoad(exports, ["getAuthorization","getAuthorizationOutput"], () => require("./getAuthorization"));

export { GetCloudLinkArgs, GetCloudLinkResult, GetCloudLinkOutputArgs } from "./getCloudLink";
export const getCloudLink: typeof import("./getCloudLink").getCloudLink = null as any;
export const getCloudLinkOutput: typeof import("./getCloudLink").getCloudLinkOutput = null as any;
utilities.lazyLoad(exports, ["getCloudLink","getCloudLinkOutput"], () => require("./getCloudLink"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetDatastoreArgs, GetDatastoreResult, GetDatastoreOutputArgs } from "./getDatastore";
export const getDatastore: typeof import("./getDatastore").getDatastore = null as any;
export const getDatastoreOutput: typeof import("./getDatastore").getDatastoreOutput = null as any;
utilities.lazyLoad(exports, ["getDatastore","getDatastoreOutput"], () => require("./getDatastore"));

export { GetGlobalReachConnectionArgs, GetGlobalReachConnectionResult, GetGlobalReachConnectionOutputArgs } from "./getGlobalReachConnection";
export const getGlobalReachConnection: typeof import("./getGlobalReachConnection").getGlobalReachConnection = null as any;
export const getGlobalReachConnectionOutput: typeof import("./getGlobalReachConnection").getGlobalReachConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getGlobalReachConnection","getGlobalReachConnectionOutput"], () => require("./getGlobalReachConnection"));

export { GetHcxEnterpriseSiteArgs, GetHcxEnterpriseSiteResult, GetHcxEnterpriseSiteOutputArgs } from "./getHcxEnterpriseSite";
export const getHcxEnterpriseSite: typeof import("./getHcxEnterpriseSite").getHcxEnterpriseSite = null as any;
export const getHcxEnterpriseSiteOutput: typeof import("./getHcxEnterpriseSite").getHcxEnterpriseSiteOutput = null as any;
utilities.lazyLoad(exports, ["getHcxEnterpriseSite","getHcxEnterpriseSiteOutput"], () => require("./getHcxEnterpriseSite"));

export { GetIscsiPathArgs, GetIscsiPathResult, GetIscsiPathOutputArgs } from "./getIscsiPath";
export const getIscsiPath: typeof import("./getIscsiPath").getIscsiPath = null as any;
export const getIscsiPathOutput: typeof import("./getIscsiPath").getIscsiPathOutput = null as any;
utilities.lazyLoad(exports, ["getIscsiPath","getIscsiPathOutput"], () => require("./getIscsiPath"));

export { GetPlacementPolicyArgs, GetPlacementPolicyResult, GetPlacementPolicyOutputArgs } from "./getPlacementPolicy";
export const getPlacementPolicy: typeof import("./getPlacementPolicy").getPlacementPolicy = null as any;
export const getPlacementPolicyOutput: typeof import("./getPlacementPolicy").getPlacementPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getPlacementPolicy","getPlacementPolicyOutput"], () => require("./getPlacementPolicy"));

export { GetPrivateCloudArgs, GetPrivateCloudResult, GetPrivateCloudOutputArgs } from "./getPrivateCloud";
export const getPrivateCloud: typeof import("./getPrivateCloud").getPrivateCloud = null as any;
export const getPrivateCloudOutput: typeof import("./getPrivateCloud").getPrivateCloudOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateCloud","getPrivateCloudOutput"], () => require("./getPrivateCloud"));

export { GetScriptExecutionArgs, GetScriptExecutionResult, GetScriptExecutionOutputArgs } from "./getScriptExecution";
export const getScriptExecution: typeof import("./getScriptExecution").getScriptExecution = null as any;
export const getScriptExecutionOutput: typeof import("./getScriptExecution").getScriptExecutionOutput = null as any;
utilities.lazyLoad(exports, ["getScriptExecution","getScriptExecutionOutput"], () => require("./getScriptExecution"));

export { GetScriptExecutionLogsArgs, GetScriptExecutionLogsResult, GetScriptExecutionLogsOutputArgs } from "./getScriptExecutionLogs";
export const getScriptExecutionLogs: typeof import("./getScriptExecutionLogs").getScriptExecutionLogs = null as any;
export const getScriptExecutionLogsOutput: typeof import("./getScriptExecutionLogs").getScriptExecutionLogsOutput = null as any;
utilities.lazyLoad(exports, ["getScriptExecutionLogs","getScriptExecutionLogsOutput"], () => require("./getScriptExecutionLogs"));

export { GetWorkloadNetworkDhcpArgs, GetWorkloadNetworkDhcpResult, GetWorkloadNetworkDhcpOutputArgs } from "./getWorkloadNetworkDhcp";
export const getWorkloadNetworkDhcp: typeof import("./getWorkloadNetworkDhcp").getWorkloadNetworkDhcp = null as any;
export const getWorkloadNetworkDhcpOutput: typeof import("./getWorkloadNetworkDhcp").getWorkloadNetworkDhcpOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadNetworkDhcp","getWorkloadNetworkDhcpOutput"], () => require("./getWorkloadNetworkDhcp"));

export { GetWorkloadNetworkDnsServiceArgs, GetWorkloadNetworkDnsServiceResult, GetWorkloadNetworkDnsServiceOutputArgs } from "./getWorkloadNetworkDnsService";
export const getWorkloadNetworkDnsService: typeof import("./getWorkloadNetworkDnsService").getWorkloadNetworkDnsService = null as any;
export const getWorkloadNetworkDnsServiceOutput: typeof import("./getWorkloadNetworkDnsService").getWorkloadNetworkDnsServiceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadNetworkDnsService","getWorkloadNetworkDnsServiceOutput"], () => require("./getWorkloadNetworkDnsService"));

export { GetWorkloadNetworkDnsZoneArgs, GetWorkloadNetworkDnsZoneResult, GetWorkloadNetworkDnsZoneOutputArgs } from "./getWorkloadNetworkDnsZone";
export const getWorkloadNetworkDnsZone: typeof import("./getWorkloadNetworkDnsZone").getWorkloadNetworkDnsZone = null as any;
export const getWorkloadNetworkDnsZoneOutput: typeof import("./getWorkloadNetworkDnsZone").getWorkloadNetworkDnsZoneOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadNetworkDnsZone","getWorkloadNetworkDnsZoneOutput"], () => require("./getWorkloadNetworkDnsZone"));

export { GetWorkloadNetworkPortMirroringArgs, GetWorkloadNetworkPortMirroringResult, GetWorkloadNetworkPortMirroringOutputArgs } from "./getWorkloadNetworkPortMirroring";
export const getWorkloadNetworkPortMirroring: typeof import("./getWorkloadNetworkPortMirroring").getWorkloadNetworkPortMirroring = null as any;
export const getWorkloadNetworkPortMirroringOutput: typeof import("./getWorkloadNetworkPortMirroring").getWorkloadNetworkPortMirroringOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadNetworkPortMirroring","getWorkloadNetworkPortMirroringOutput"], () => require("./getWorkloadNetworkPortMirroring"));

export { GetWorkloadNetworkPublicIPArgs, GetWorkloadNetworkPublicIPResult, GetWorkloadNetworkPublicIPOutputArgs } from "./getWorkloadNetworkPublicIP";
export const getWorkloadNetworkPublicIP: typeof import("./getWorkloadNetworkPublicIP").getWorkloadNetworkPublicIP = null as any;
export const getWorkloadNetworkPublicIPOutput: typeof import("./getWorkloadNetworkPublicIP").getWorkloadNetworkPublicIPOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadNetworkPublicIP","getWorkloadNetworkPublicIPOutput"], () => require("./getWorkloadNetworkPublicIP"));

export { GetWorkloadNetworkSegmentArgs, GetWorkloadNetworkSegmentResult, GetWorkloadNetworkSegmentOutputArgs } from "./getWorkloadNetworkSegment";
export const getWorkloadNetworkSegment: typeof import("./getWorkloadNetworkSegment").getWorkloadNetworkSegment = null as any;
export const getWorkloadNetworkSegmentOutput: typeof import("./getWorkloadNetworkSegment").getWorkloadNetworkSegmentOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadNetworkSegment","getWorkloadNetworkSegmentOutput"], () => require("./getWorkloadNetworkSegment"));

export { GetWorkloadNetworkVMGroupArgs, GetWorkloadNetworkVMGroupResult, GetWorkloadNetworkVMGroupOutputArgs } from "./getWorkloadNetworkVMGroup";
export const getWorkloadNetworkVMGroup: typeof import("./getWorkloadNetworkVMGroup").getWorkloadNetworkVMGroup = null as any;
export const getWorkloadNetworkVMGroupOutput: typeof import("./getWorkloadNetworkVMGroup").getWorkloadNetworkVMGroupOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadNetworkVMGroup","getWorkloadNetworkVMGroupOutput"], () => require("./getWorkloadNetworkVMGroup"));

export { GlobalReachConnectionArgs } from "./globalReachConnection";
export type GlobalReachConnection = import("./globalReachConnection").GlobalReachConnection;
export const GlobalReachConnection: typeof import("./globalReachConnection").GlobalReachConnection = null as any;
utilities.lazyLoad(exports, ["GlobalReachConnection"], () => require("./globalReachConnection"));

export { HcxEnterpriseSiteArgs } from "./hcxEnterpriseSite";
export type HcxEnterpriseSite = import("./hcxEnterpriseSite").HcxEnterpriseSite;
export const HcxEnterpriseSite: typeof import("./hcxEnterpriseSite").HcxEnterpriseSite = null as any;
utilities.lazyLoad(exports, ["HcxEnterpriseSite"], () => require("./hcxEnterpriseSite"));

export { IscsiPathArgs } from "./iscsiPath";
export type IscsiPath = import("./iscsiPath").IscsiPath;
export const IscsiPath: typeof import("./iscsiPath").IscsiPath = null as any;
utilities.lazyLoad(exports, ["IscsiPath"], () => require("./iscsiPath"));

export { ListClusterZonesArgs, ListClusterZonesResult, ListClusterZonesOutputArgs } from "./listClusterZones";
export const listClusterZones: typeof import("./listClusterZones").listClusterZones = null as any;
export const listClusterZonesOutput: typeof import("./listClusterZones").listClusterZonesOutput = null as any;
utilities.lazyLoad(exports, ["listClusterZones","listClusterZonesOutput"], () => require("./listClusterZones"));

export { ListPrivateCloudAdminCredentialsArgs, ListPrivateCloudAdminCredentialsResult, ListPrivateCloudAdminCredentialsOutputArgs } from "./listPrivateCloudAdminCredentials";
export const listPrivateCloudAdminCredentials: typeof import("./listPrivateCloudAdminCredentials").listPrivateCloudAdminCredentials = null as any;
export const listPrivateCloudAdminCredentialsOutput: typeof import("./listPrivateCloudAdminCredentials").listPrivateCloudAdminCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listPrivateCloudAdminCredentials","listPrivateCloudAdminCredentialsOutput"], () => require("./listPrivateCloudAdminCredentials"));

export { PlacementPolicyArgs } from "./placementPolicy";
export type PlacementPolicy = import("./placementPolicy").PlacementPolicy;
export const PlacementPolicy: typeof import("./placementPolicy").PlacementPolicy = null as any;
utilities.lazyLoad(exports, ["PlacementPolicy"], () => require("./placementPolicy"));

export { PrivateCloudArgs } from "./privateCloud";
export type PrivateCloud = import("./privateCloud").PrivateCloud;
export const PrivateCloud: typeof import("./privateCloud").PrivateCloud = null as any;
utilities.lazyLoad(exports, ["PrivateCloud"], () => require("./privateCloud"));

export { ScriptExecutionArgs } from "./scriptExecution";
export type ScriptExecution = import("./scriptExecution").ScriptExecution;
export const ScriptExecution: typeof import("./scriptExecution").ScriptExecution = null as any;
utilities.lazyLoad(exports, ["ScriptExecution"], () => require("./scriptExecution"));

export { WorkloadNetworkDhcpArgs } from "./workloadNetworkDhcp";
export type WorkloadNetworkDhcp = import("./workloadNetworkDhcp").WorkloadNetworkDhcp;
export const WorkloadNetworkDhcp: typeof import("./workloadNetworkDhcp").WorkloadNetworkDhcp = null as any;
utilities.lazyLoad(exports, ["WorkloadNetworkDhcp"], () => require("./workloadNetworkDhcp"));

export { WorkloadNetworkDnsServiceArgs } from "./workloadNetworkDnsService";
export type WorkloadNetworkDnsService = import("./workloadNetworkDnsService").WorkloadNetworkDnsService;
export const WorkloadNetworkDnsService: typeof import("./workloadNetworkDnsService").WorkloadNetworkDnsService = null as any;
utilities.lazyLoad(exports, ["WorkloadNetworkDnsService"], () => require("./workloadNetworkDnsService"));

export { WorkloadNetworkDnsZoneArgs } from "./workloadNetworkDnsZone";
export type WorkloadNetworkDnsZone = import("./workloadNetworkDnsZone").WorkloadNetworkDnsZone;
export const WorkloadNetworkDnsZone: typeof import("./workloadNetworkDnsZone").WorkloadNetworkDnsZone = null as any;
utilities.lazyLoad(exports, ["WorkloadNetworkDnsZone"], () => require("./workloadNetworkDnsZone"));

export { WorkloadNetworkPortMirroringArgs } from "./workloadNetworkPortMirroring";
export type WorkloadNetworkPortMirroring = import("./workloadNetworkPortMirroring").WorkloadNetworkPortMirroring;
export const WorkloadNetworkPortMirroring: typeof import("./workloadNetworkPortMirroring").WorkloadNetworkPortMirroring = null as any;
utilities.lazyLoad(exports, ["WorkloadNetworkPortMirroring"], () => require("./workloadNetworkPortMirroring"));

export { WorkloadNetworkPublicIPArgs } from "./workloadNetworkPublicIP";
export type WorkloadNetworkPublicIP = import("./workloadNetworkPublicIP").WorkloadNetworkPublicIP;
export const WorkloadNetworkPublicIP: typeof import("./workloadNetworkPublicIP").WorkloadNetworkPublicIP = null as any;
utilities.lazyLoad(exports, ["WorkloadNetworkPublicIP"], () => require("./workloadNetworkPublicIP"));

export { WorkloadNetworkSegmentArgs } from "./workloadNetworkSegment";
export type WorkloadNetworkSegment = import("./workloadNetworkSegment").WorkloadNetworkSegment;
export const WorkloadNetworkSegment: typeof import("./workloadNetworkSegment").WorkloadNetworkSegment = null as any;
utilities.lazyLoad(exports, ["WorkloadNetworkSegment"], () => require("./workloadNetworkSegment"));

export { WorkloadNetworkVMGroupArgs } from "./workloadNetworkVMGroup";
export type WorkloadNetworkVMGroup = import("./workloadNetworkVMGroup").WorkloadNetworkVMGroup;
export const WorkloadNetworkVMGroup: typeof import("./workloadNetworkVMGroup").WorkloadNetworkVMGroup = null as any;
utilities.lazyLoad(exports, ["WorkloadNetworkVMGroup"], () => require("./workloadNetworkVMGroup"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:avs:Addon":
                return new Addon(name, <any>undefined, { urn })
            case "azure-native:avs:Authorization":
                return new Authorization(name, <any>undefined, { urn })
            case "azure-native:avs:CloudLink":
                return new CloudLink(name, <any>undefined, { urn })
            case "azure-native:avs:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:avs:Datastore":
                return new Datastore(name, <any>undefined, { urn })
            case "azure-native:avs:GlobalReachConnection":
                return new GlobalReachConnection(name, <any>undefined, { urn })
            case "azure-native:avs:HcxEnterpriseSite":
                return new HcxEnterpriseSite(name, <any>undefined, { urn })
            case "azure-native:avs:IscsiPath":
                return new IscsiPath(name, <any>undefined, { urn })
            case "azure-native:avs:PlacementPolicy":
                return new PlacementPolicy(name, <any>undefined, { urn })
            case "azure-native:avs:PrivateCloud":
                return new PrivateCloud(name, <any>undefined, { urn })
            case "azure-native:avs:ScriptExecution":
                return new ScriptExecution(name, <any>undefined, { urn })
            case "azure-native:avs:WorkloadNetworkDhcp":
                return new WorkloadNetworkDhcp(name, <any>undefined, { urn })
            case "azure-native:avs:WorkloadNetworkDnsService":
                return new WorkloadNetworkDnsService(name, <any>undefined, { urn })
            case "azure-native:avs:WorkloadNetworkDnsZone":
                return new WorkloadNetworkDnsZone(name, <any>undefined, { urn })
            case "azure-native:avs:WorkloadNetworkPortMirroring":
                return new WorkloadNetworkPortMirroring(name, <any>undefined, { urn })
            case "azure-native:avs:WorkloadNetworkPublicIP":
                return new WorkloadNetworkPublicIP(name, <any>undefined, { urn })
            case "azure-native:avs:WorkloadNetworkSegment":
                return new WorkloadNetworkSegment(name, <any>undefined, { urn })
            case "azure-native:avs:WorkloadNetworkVMGroup":
                return new WorkloadNetworkVMGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "avs", _module)