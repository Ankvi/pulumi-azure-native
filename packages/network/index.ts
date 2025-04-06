import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AdminRuleArgs } from "./adminRule";
export type AdminRule = import("./adminRule").AdminRule;
export const AdminRule: typeof import("./adminRule").AdminRule = null as any;
utilities.lazyLoad(exports, ["AdminRule"], () => require("./adminRule"));

export { AdminRuleCollectionArgs } from "./adminRuleCollection";
export type AdminRuleCollection = import("./adminRuleCollection").AdminRuleCollection;
export const AdminRuleCollection: typeof import("./adminRuleCollection").AdminRuleCollection = null as any;
utilities.lazyLoad(exports, ["AdminRuleCollection"], () => require("./adminRuleCollection"));

export { ApplicationGatewayArgs } from "./applicationGateway";
export type ApplicationGateway = import("./applicationGateway").ApplicationGateway;
export const ApplicationGateway: typeof import("./applicationGateway").ApplicationGateway = null as any;
utilities.lazyLoad(exports, ["ApplicationGateway"], () => require("./applicationGateway"));

export { ApplicationGatewayPrivateEndpointConnectionArgs } from "./applicationGatewayPrivateEndpointConnection";
export type ApplicationGatewayPrivateEndpointConnection = import("./applicationGatewayPrivateEndpointConnection").ApplicationGatewayPrivateEndpointConnection;
export const ApplicationGatewayPrivateEndpointConnection: typeof import("./applicationGatewayPrivateEndpointConnection").ApplicationGatewayPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["ApplicationGatewayPrivateEndpointConnection"], () => require("./applicationGatewayPrivateEndpointConnection"));

export { ApplicationSecurityGroupArgs } from "./applicationSecurityGroup";
export type ApplicationSecurityGroup = import("./applicationSecurityGroup").ApplicationSecurityGroup;
export const ApplicationSecurityGroup: typeof import("./applicationSecurityGroup").ApplicationSecurityGroup = null as any;
utilities.lazyLoad(exports, ["ApplicationSecurityGroup"], () => require("./applicationSecurityGroup"));

export { AzureFirewallArgs } from "./azureFirewall";
export type AzureFirewall = import("./azureFirewall").AzureFirewall;
export const AzureFirewall: typeof import("./azureFirewall").AzureFirewall = null as any;
utilities.lazyLoad(exports, ["AzureFirewall"], () => require("./azureFirewall"));

export { BastionHostArgs } from "./bastionHost";
export type BastionHost = import("./bastionHost").BastionHost;
export const BastionHost: typeof import("./bastionHost").BastionHost = null as any;
utilities.lazyLoad(exports, ["BastionHost"], () => require("./bastionHost"));

export { ConfigurationPolicyGroupArgs } from "./configurationPolicyGroup";
export type ConfigurationPolicyGroup = import("./configurationPolicyGroup").ConfigurationPolicyGroup;
export const ConfigurationPolicyGroup: typeof import("./configurationPolicyGroup").ConfigurationPolicyGroup = null as any;
utilities.lazyLoad(exports, ["ConfigurationPolicyGroup"], () => require("./configurationPolicyGroup"));

export { ConnectionMonitorArgs } from "./connectionMonitor";
export type ConnectionMonitor = import("./connectionMonitor").ConnectionMonitor;
export const ConnectionMonitor: typeof import("./connectionMonitor").ConnectionMonitor = null as any;
utilities.lazyLoad(exports, ["ConnectionMonitor"], () => require("./connectionMonitor"));

export { ConnectivityConfigurationArgs } from "./connectivityConfiguration";
export type ConnectivityConfiguration = import("./connectivityConfiguration").ConnectivityConfiguration;
export const ConnectivityConfiguration: typeof import("./connectivityConfiguration").ConnectivityConfiguration = null as any;
utilities.lazyLoad(exports, ["ConnectivityConfiguration"], () => require("./connectivityConfiguration"));

export { CustomIPPrefixArgs } from "./customIPPrefix";
export type CustomIPPrefix = import("./customIPPrefix").CustomIPPrefix;
export const CustomIPPrefix: typeof import("./customIPPrefix").CustomIPPrefix = null as any;
utilities.lazyLoad(exports, ["CustomIPPrefix"], () => require("./customIPPrefix"));

export { DdosCustomPolicyArgs } from "./ddosCustomPolicy";
export type DdosCustomPolicy = import("./ddosCustomPolicy").DdosCustomPolicy;
export const DdosCustomPolicy: typeof import("./ddosCustomPolicy").DdosCustomPolicy = null as any;
utilities.lazyLoad(exports, ["DdosCustomPolicy"], () => require("./ddosCustomPolicy"));

export { DdosProtectionPlanArgs } from "./ddosProtectionPlan";
export type DdosProtectionPlan = import("./ddosProtectionPlan").DdosProtectionPlan;
export const DdosProtectionPlan: typeof import("./ddosProtectionPlan").DdosProtectionPlan = null as any;
utilities.lazyLoad(exports, ["DdosProtectionPlan"], () => require("./ddosProtectionPlan"));

export { DefaultAdminRuleArgs } from "./defaultAdminRule";
export type DefaultAdminRule = import("./defaultAdminRule").DefaultAdminRule;
export const DefaultAdminRule: typeof import("./defaultAdminRule").DefaultAdminRule = null as any;
utilities.lazyLoad(exports, ["DefaultAdminRule"], () => require("./defaultAdminRule"));

export { DefaultUserRuleArgs } from "./defaultUserRule";
export type DefaultUserRule = import("./defaultUserRule").DefaultUserRule;
export const DefaultUserRule: typeof import("./defaultUserRule").DefaultUserRule = null as any;
utilities.lazyLoad(exports, ["DefaultUserRule"], () => require("./defaultUserRule"));

export { DscpConfigurationArgs } from "./dscpConfiguration";
export type DscpConfiguration = import("./dscpConfiguration").DscpConfiguration;
export const DscpConfiguration: typeof import("./dscpConfiguration").DscpConfiguration = null as any;
utilities.lazyLoad(exports, ["DscpConfiguration"], () => require("./dscpConfiguration"));

export { ExpressRouteCircuitArgs } from "./expressRouteCircuit";
export type ExpressRouteCircuit = import("./expressRouteCircuit").ExpressRouteCircuit;
export const ExpressRouteCircuit: typeof import("./expressRouteCircuit").ExpressRouteCircuit = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCircuit"], () => require("./expressRouteCircuit"));

export { ExpressRouteCircuitAuthorizationArgs } from "./expressRouteCircuitAuthorization";
export type ExpressRouteCircuitAuthorization = import("./expressRouteCircuitAuthorization").ExpressRouteCircuitAuthorization;
export const ExpressRouteCircuitAuthorization: typeof import("./expressRouteCircuitAuthorization").ExpressRouteCircuitAuthorization = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCircuitAuthorization"], () => require("./expressRouteCircuitAuthorization"));

export { ExpressRouteCircuitConnectionArgs } from "./expressRouteCircuitConnection";
export type ExpressRouteCircuitConnection = import("./expressRouteCircuitConnection").ExpressRouteCircuitConnection;
export const ExpressRouteCircuitConnection: typeof import("./expressRouteCircuitConnection").ExpressRouteCircuitConnection = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCircuitConnection"], () => require("./expressRouteCircuitConnection"));

export { ExpressRouteCircuitPeeringArgs } from "./expressRouteCircuitPeering";
export type ExpressRouteCircuitPeering = import("./expressRouteCircuitPeering").ExpressRouteCircuitPeering;
export const ExpressRouteCircuitPeering: typeof import("./expressRouteCircuitPeering").ExpressRouteCircuitPeering = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCircuitPeering"], () => require("./expressRouteCircuitPeering"));

export { ExpressRouteConnectionArgs } from "./expressRouteConnection";
export type ExpressRouteConnection = import("./expressRouteConnection").ExpressRouteConnection;
export const ExpressRouteConnection: typeof import("./expressRouteConnection").ExpressRouteConnection = null as any;
utilities.lazyLoad(exports, ["ExpressRouteConnection"], () => require("./expressRouteConnection"));

export { ExpressRouteCrossConnectionPeeringArgs } from "./expressRouteCrossConnectionPeering";
export type ExpressRouteCrossConnectionPeering = import("./expressRouteCrossConnectionPeering").ExpressRouteCrossConnectionPeering;
export const ExpressRouteCrossConnectionPeering: typeof import("./expressRouteCrossConnectionPeering").ExpressRouteCrossConnectionPeering = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCrossConnectionPeering"], () => require("./expressRouteCrossConnectionPeering"));

export { ExpressRouteGatewayArgs } from "./expressRouteGateway";
export type ExpressRouteGateway = import("./expressRouteGateway").ExpressRouteGateway;
export const ExpressRouteGateway: typeof import("./expressRouteGateway").ExpressRouteGateway = null as any;
utilities.lazyLoad(exports, ["ExpressRouteGateway"], () => require("./expressRouteGateway"));

export { ExpressRoutePortArgs } from "./expressRoutePort";
export type ExpressRoutePort = import("./expressRoutePort").ExpressRoutePort;
export const ExpressRoutePort: typeof import("./expressRoutePort").ExpressRoutePort = null as any;
utilities.lazyLoad(exports, ["ExpressRoutePort"], () => require("./expressRoutePort"));

export { ExpressRoutePortAuthorizationArgs } from "./expressRoutePortAuthorization";
export type ExpressRoutePortAuthorization = import("./expressRoutePortAuthorization").ExpressRoutePortAuthorization;
export const ExpressRoutePortAuthorization: typeof import("./expressRoutePortAuthorization").ExpressRoutePortAuthorization = null as any;
utilities.lazyLoad(exports, ["ExpressRoutePortAuthorization"], () => require("./expressRoutePortAuthorization"));

export { FirewallPolicyArgs } from "./firewallPolicy";
export type FirewallPolicy = import("./firewallPolicy").FirewallPolicy;
export const FirewallPolicy: typeof import("./firewallPolicy").FirewallPolicy = null as any;
utilities.lazyLoad(exports, ["FirewallPolicy"], () => require("./firewallPolicy"));

export { FirewallPolicyDraftArgs } from "./firewallPolicyDraft";
export type FirewallPolicyDraft = import("./firewallPolicyDraft").FirewallPolicyDraft;
export const FirewallPolicyDraft: typeof import("./firewallPolicyDraft").FirewallPolicyDraft = null as any;
utilities.lazyLoad(exports, ["FirewallPolicyDraft"], () => require("./firewallPolicyDraft"));

export { FirewallPolicyRuleCollectionGroupArgs } from "./firewallPolicyRuleCollectionGroup";
export type FirewallPolicyRuleCollectionGroup = import("./firewallPolicyRuleCollectionGroup").FirewallPolicyRuleCollectionGroup;
export const FirewallPolicyRuleCollectionGroup: typeof import("./firewallPolicyRuleCollectionGroup").FirewallPolicyRuleCollectionGroup = null as any;
utilities.lazyLoad(exports, ["FirewallPolicyRuleCollectionGroup"], () => require("./firewallPolicyRuleCollectionGroup"));

export { FirewallPolicyRuleCollectionGroupDraftArgs } from "./firewallPolicyRuleCollectionGroupDraft";
export type FirewallPolicyRuleCollectionGroupDraft = import("./firewallPolicyRuleCollectionGroupDraft").FirewallPolicyRuleCollectionGroupDraft;
export const FirewallPolicyRuleCollectionGroupDraft: typeof import("./firewallPolicyRuleCollectionGroupDraft").FirewallPolicyRuleCollectionGroupDraft = null as any;
utilities.lazyLoad(exports, ["FirewallPolicyRuleCollectionGroupDraft"], () => require("./firewallPolicyRuleCollectionGroupDraft"));

export { FirewallPolicyRuleGroupArgs } from "./firewallPolicyRuleGroup";
export type FirewallPolicyRuleGroup = import("./firewallPolicyRuleGroup").FirewallPolicyRuleGroup;
export const FirewallPolicyRuleGroup: typeof import("./firewallPolicyRuleGroup").FirewallPolicyRuleGroup = null as any;
utilities.lazyLoad(exports, ["FirewallPolicyRuleGroup"], () => require("./firewallPolicyRuleGroup"));

export { FlowLogArgs } from "./flowLog";
export type FlowLog = import("./flowLog").FlowLog;
export const FlowLog: typeof import("./flowLog").FlowLog = null as any;
utilities.lazyLoad(exports, ["FlowLog"], () => require("./flowLog"));

export { GetActiveSessionsArgs, GetActiveSessionsResult, GetActiveSessionsOutputArgs } from "./getActiveSessions";
export const getActiveSessions: typeof import("./getActiveSessions").getActiveSessions = null as any;
export const getActiveSessionsOutput: typeof import("./getActiveSessions").getActiveSessionsOutput = null as any;
utilities.lazyLoad(exports, ["getActiveSessions","getActiveSessionsOutput"], () => require("./getActiveSessions"));

export { GetAdminRuleArgs, GetAdminRuleResult, GetAdminRuleOutputArgs } from "./getAdminRule";
export const getAdminRule: typeof import("./getAdminRule").getAdminRule = null as any;
export const getAdminRuleOutput: typeof import("./getAdminRule").getAdminRuleOutput = null as any;
utilities.lazyLoad(exports, ["getAdminRule","getAdminRuleOutput"], () => require("./getAdminRule"));

export { GetAdminRuleCollectionArgs, GetAdminRuleCollectionResult, GetAdminRuleCollectionOutputArgs } from "./getAdminRuleCollection";
export const getAdminRuleCollection: typeof import("./getAdminRuleCollection").getAdminRuleCollection = null as any;
export const getAdminRuleCollectionOutput: typeof import("./getAdminRuleCollection").getAdminRuleCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getAdminRuleCollection","getAdminRuleCollectionOutput"], () => require("./getAdminRuleCollection"));

export { GetApplicationGatewayArgs, GetApplicationGatewayResult, GetApplicationGatewayOutputArgs } from "./getApplicationGateway";
export const getApplicationGateway: typeof import("./getApplicationGateway").getApplicationGateway = null as any;
export const getApplicationGatewayOutput: typeof import("./getApplicationGateway").getApplicationGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationGateway","getApplicationGatewayOutput"], () => require("./getApplicationGateway"));

export { GetApplicationGatewayBackendHealthOnDemandArgs, GetApplicationGatewayBackendHealthOnDemandResult, GetApplicationGatewayBackendHealthOnDemandOutputArgs } from "./getApplicationGatewayBackendHealthOnDemand";
export const getApplicationGatewayBackendHealthOnDemand: typeof import("./getApplicationGatewayBackendHealthOnDemand").getApplicationGatewayBackendHealthOnDemand = null as any;
export const getApplicationGatewayBackendHealthOnDemandOutput: typeof import("./getApplicationGatewayBackendHealthOnDemand").getApplicationGatewayBackendHealthOnDemandOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationGatewayBackendHealthOnDemand","getApplicationGatewayBackendHealthOnDemandOutput"], () => require("./getApplicationGatewayBackendHealthOnDemand"));

export { GetApplicationGatewayPrivateEndpointConnectionArgs, GetApplicationGatewayPrivateEndpointConnectionResult, GetApplicationGatewayPrivateEndpointConnectionOutputArgs } from "./getApplicationGatewayPrivateEndpointConnection";
export const getApplicationGatewayPrivateEndpointConnection: typeof import("./getApplicationGatewayPrivateEndpointConnection").getApplicationGatewayPrivateEndpointConnection = null as any;
export const getApplicationGatewayPrivateEndpointConnectionOutput: typeof import("./getApplicationGatewayPrivateEndpointConnection").getApplicationGatewayPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationGatewayPrivateEndpointConnection","getApplicationGatewayPrivateEndpointConnectionOutput"], () => require("./getApplicationGatewayPrivateEndpointConnection"));

export { GetApplicationSecurityGroupArgs, GetApplicationSecurityGroupResult, GetApplicationSecurityGroupOutputArgs } from "./getApplicationSecurityGroup";
export const getApplicationSecurityGroup: typeof import("./getApplicationSecurityGroup").getApplicationSecurityGroup = null as any;
export const getApplicationSecurityGroupOutput: typeof import("./getApplicationSecurityGroup").getApplicationSecurityGroupOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationSecurityGroup","getApplicationSecurityGroupOutput"], () => require("./getApplicationSecurityGroup"));

export { GetAzureFirewallArgs, GetAzureFirewallResult, GetAzureFirewallOutputArgs } from "./getAzureFirewall";
export const getAzureFirewall: typeof import("./getAzureFirewall").getAzureFirewall = null as any;
export const getAzureFirewallOutput: typeof import("./getAzureFirewall").getAzureFirewallOutput = null as any;
utilities.lazyLoad(exports, ["getAzureFirewall","getAzureFirewallOutput"], () => require("./getAzureFirewall"));

export { GetBastionHostArgs, GetBastionHostResult, GetBastionHostOutputArgs } from "./getBastionHost";
export const getBastionHost: typeof import("./getBastionHost").getBastionHost = null as any;
export const getBastionHostOutput: typeof import("./getBastionHost").getBastionHostOutput = null as any;
utilities.lazyLoad(exports, ["getBastionHost","getBastionHostOutput"], () => require("./getBastionHost"));

export { GetBastionShareableLinkArgs, GetBastionShareableLinkResult, GetBastionShareableLinkOutputArgs } from "./getBastionShareableLink";
export const getBastionShareableLink: typeof import("./getBastionShareableLink").getBastionShareableLink = null as any;
export const getBastionShareableLinkOutput: typeof import("./getBastionShareableLink").getBastionShareableLinkOutput = null as any;
utilities.lazyLoad(exports, ["getBastionShareableLink","getBastionShareableLinkOutput"], () => require("./getBastionShareableLink"));

export { GetConfigurationPolicyGroupArgs, GetConfigurationPolicyGroupResult, GetConfigurationPolicyGroupOutputArgs } from "./getConfigurationPolicyGroup";
export const getConfigurationPolicyGroup: typeof import("./getConfigurationPolicyGroup").getConfigurationPolicyGroup = null as any;
export const getConfigurationPolicyGroupOutput: typeof import("./getConfigurationPolicyGroup").getConfigurationPolicyGroupOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationPolicyGroup","getConfigurationPolicyGroupOutput"], () => require("./getConfigurationPolicyGroup"));

export { GetConnectionMonitorArgs, GetConnectionMonitorResult, GetConnectionMonitorOutputArgs } from "./getConnectionMonitor";
export const getConnectionMonitor: typeof import("./getConnectionMonitor").getConnectionMonitor = null as any;
export const getConnectionMonitorOutput: typeof import("./getConnectionMonitor").getConnectionMonitorOutput = null as any;
utilities.lazyLoad(exports, ["getConnectionMonitor","getConnectionMonitorOutput"], () => require("./getConnectionMonitor"));

export { GetConnectivityConfigurationArgs, GetConnectivityConfigurationResult, GetConnectivityConfigurationOutputArgs } from "./getConnectivityConfiguration";
export const getConnectivityConfiguration: typeof import("./getConnectivityConfiguration").getConnectivityConfiguration = null as any;
export const getConnectivityConfigurationOutput: typeof import("./getConnectivityConfiguration").getConnectivityConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getConnectivityConfiguration","getConnectivityConfigurationOutput"], () => require("./getConnectivityConfiguration"));

export { GetCustomIPPrefixArgs, GetCustomIPPrefixResult, GetCustomIPPrefixOutputArgs } from "./getCustomIPPrefix";
export const getCustomIPPrefix: typeof import("./getCustomIPPrefix").getCustomIPPrefix = null as any;
export const getCustomIPPrefixOutput: typeof import("./getCustomIPPrefix").getCustomIPPrefixOutput = null as any;
utilities.lazyLoad(exports, ["getCustomIPPrefix","getCustomIPPrefixOutput"], () => require("./getCustomIPPrefix"));

export { GetDdosCustomPolicyArgs, GetDdosCustomPolicyResult, GetDdosCustomPolicyOutputArgs } from "./getDdosCustomPolicy";
export const getDdosCustomPolicy: typeof import("./getDdosCustomPolicy").getDdosCustomPolicy = null as any;
export const getDdosCustomPolicyOutput: typeof import("./getDdosCustomPolicy").getDdosCustomPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getDdosCustomPolicy","getDdosCustomPolicyOutput"], () => require("./getDdosCustomPolicy"));

export { GetDdosProtectionPlanArgs, GetDdosProtectionPlanResult, GetDdosProtectionPlanOutputArgs } from "./getDdosProtectionPlan";
export const getDdosProtectionPlan: typeof import("./getDdosProtectionPlan").getDdosProtectionPlan = null as any;
export const getDdosProtectionPlanOutput: typeof import("./getDdosProtectionPlan").getDdosProtectionPlanOutput = null as any;
utilities.lazyLoad(exports, ["getDdosProtectionPlan","getDdosProtectionPlanOutput"], () => require("./getDdosProtectionPlan"));

export { GetDefaultAdminRuleArgs, GetDefaultAdminRuleResult, GetDefaultAdminRuleOutputArgs } from "./getDefaultAdminRule";
export const getDefaultAdminRule: typeof import("./getDefaultAdminRule").getDefaultAdminRule = null as any;
export const getDefaultAdminRuleOutput: typeof import("./getDefaultAdminRule").getDefaultAdminRuleOutput = null as any;
utilities.lazyLoad(exports, ["getDefaultAdminRule","getDefaultAdminRuleOutput"], () => require("./getDefaultAdminRule"));

export { GetDefaultUserRuleArgs, GetDefaultUserRuleResult, GetDefaultUserRuleOutputArgs } from "./getDefaultUserRule";
export const getDefaultUserRule: typeof import("./getDefaultUserRule").getDefaultUserRule = null as any;
export const getDefaultUserRuleOutput: typeof import("./getDefaultUserRule").getDefaultUserRuleOutput = null as any;
utilities.lazyLoad(exports, ["getDefaultUserRule","getDefaultUserRuleOutput"], () => require("./getDefaultUserRule"));

export { GetDscpConfigurationArgs, GetDscpConfigurationResult, GetDscpConfigurationOutputArgs } from "./getDscpConfiguration";
export const getDscpConfiguration: typeof import("./getDscpConfiguration").getDscpConfiguration = null as any;
export const getDscpConfigurationOutput: typeof import("./getDscpConfiguration").getDscpConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getDscpConfiguration","getDscpConfigurationOutput"], () => require("./getDscpConfiguration"));

export { GetExpressRouteCircuitArgs, GetExpressRouteCircuitResult, GetExpressRouteCircuitOutputArgs } from "./getExpressRouteCircuit";
export const getExpressRouteCircuit: typeof import("./getExpressRouteCircuit").getExpressRouteCircuit = null as any;
export const getExpressRouteCircuitOutput: typeof import("./getExpressRouteCircuit").getExpressRouteCircuitOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCircuit","getExpressRouteCircuitOutput"], () => require("./getExpressRouteCircuit"));

export { GetExpressRouteCircuitAuthorizationArgs, GetExpressRouteCircuitAuthorizationResult, GetExpressRouteCircuitAuthorizationOutputArgs } from "./getExpressRouteCircuitAuthorization";
export const getExpressRouteCircuitAuthorization: typeof import("./getExpressRouteCircuitAuthorization").getExpressRouteCircuitAuthorization = null as any;
export const getExpressRouteCircuitAuthorizationOutput: typeof import("./getExpressRouteCircuitAuthorization").getExpressRouteCircuitAuthorizationOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCircuitAuthorization","getExpressRouteCircuitAuthorizationOutput"], () => require("./getExpressRouteCircuitAuthorization"));

export { GetExpressRouteCircuitConnectionArgs, GetExpressRouteCircuitConnectionResult, GetExpressRouteCircuitConnectionOutputArgs } from "./getExpressRouteCircuitConnection";
export const getExpressRouteCircuitConnection: typeof import("./getExpressRouteCircuitConnection").getExpressRouteCircuitConnection = null as any;
export const getExpressRouteCircuitConnectionOutput: typeof import("./getExpressRouteCircuitConnection").getExpressRouteCircuitConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCircuitConnection","getExpressRouteCircuitConnectionOutput"], () => require("./getExpressRouteCircuitConnection"));

export { GetExpressRouteCircuitPeeringArgs, GetExpressRouteCircuitPeeringResult, GetExpressRouteCircuitPeeringOutputArgs } from "./getExpressRouteCircuitPeering";
export const getExpressRouteCircuitPeering: typeof import("./getExpressRouteCircuitPeering").getExpressRouteCircuitPeering = null as any;
export const getExpressRouteCircuitPeeringOutput: typeof import("./getExpressRouteCircuitPeering").getExpressRouteCircuitPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCircuitPeering","getExpressRouteCircuitPeeringOutput"], () => require("./getExpressRouteCircuitPeering"));

export { GetExpressRouteConnectionArgs, GetExpressRouteConnectionResult, GetExpressRouteConnectionOutputArgs } from "./getExpressRouteConnection";
export const getExpressRouteConnection: typeof import("./getExpressRouteConnection").getExpressRouteConnection = null as any;
export const getExpressRouteConnectionOutput: typeof import("./getExpressRouteConnection").getExpressRouteConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteConnection","getExpressRouteConnectionOutput"], () => require("./getExpressRouteConnection"));

export { GetExpressRouteCrossConnectionPeeringArgs, GetExpressRouteCrossConnectionPeeringResult, GetExpressRouteCrossConnectionPeeringOutputArgs } from "./getExpressRouteCrossConnectionPeering";
export const getExpressRouteCrossConnectionPeering: typeof import("./getExpressRouteCrossConnectionPeering").getExpressRouteCrossConnectionPeering = null as any;
export const getExpressRouteCrossConnectionPeeringOutput: typeof import("./getExpressRouteCrossConnectionPeering").getExpressRouteCrossConnectionPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCrossConnectionPeering","getExpressRouteCrossConnectionPeeringOutput"], () => require("./getExpressRouteCrossConnectionPeering"));

export { GetExpressRouteGatewayArgs, GetExpressRouteGatewayResult, GetExpressRouteGatewayOutputArgs } from "./getExpressRouteGateway";
export const getExpressRouteGateway: typeof import("./getExpressRouteGateway").getExpressRouteGateway = null as any;
export const getExpressRouteGatewayOutput: typeof import("./getExpressRouteGateway").getExpressRouteGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteGateway","getExpressRouteGatewayOutput"], () => require("./getExpressRouteGateway"));

export { GetExpressRoutePortArgs, GetExpressRoutePortResult, GetExpressRoutePortOutputArgs } from "./getExpressRoutePort";
export const getExpressRoutePort: typeof import("./getExpressRoutePort").getExpressRoutePort = null as any;
export const getExpressRoutePortOutput: typeof import("./getExpressRoutePort").getExpressRoutePortOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRoutePort","getExpressRoutePortOutput"], () => require("./getExpressRoutePort"));

export { GetExpressRoutePortAuthorizationArgs, GetExpressRoutePortAuthorizationResult, GetExpressRoutePortAuthorizationOutputArgs } from "./getExpressRoutePortAuthorization";
export const getExpressRoutePortAuthorization: typeof import("./getExpressRoutePortAuthorization").getExpressRoutePortAuthorization = null as any;
export const getExpressRoutePortAuthorizationOutput: typeof import("./getExpressRoutePortAuthorization").getExpressRoutePortAuthorizationOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRoutePortAuthorization","getExpressRoutePortAuthorizationOutput"], () => require("./getExpressRoutePortAuthorization"));

export { GetFirewallPolicyArgs, GetFirewallPolicyResult, GetFirewallPolicyOutputArgs } from "./getFirewallPolicy";
export const getFirewallPolicy: typeof import("./getFirewallPolicy").getFirewallPolicy = null as any;
export const getFirewallPolicyOutput: typeof import("./getFirewallPolicy").getFirewallPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallPolicy","getFirewallPolicyOutput"], () => require("./getFirewallPolicy"));

export { GetFirewallPolicyDraftArgs, GetFirewallPolicyDraftResult, GetFirewallPolicyDraftOutputArgs } from "./getFirewallPolicyDraft";
export const getFirewallPolicyDraft: typeof import("./getFirewallPolicyDraft").getFirewallPolicyDraft = null as any;
export const getFirewallPolicyDraftOutput: typeof import("./getFirewallPolicyDraft").getFirewallPolicyDraftOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallPolicyDraft","getFirewallPolicyDraftOutput"], () => require("./getFirewallPolicyDraft"));

export { GetFirewallPolicyRuleCollectionGroupArgs, GetFirewallPolicyRuleCollectionGroupResult, GetFirewallPolicyRuleCollectionGroupOutputArgs } from "./getFirewallPolicyRuleCollectionGroup";
export const getFirewallPolicyRuleCollectionGroup: typeof import("./getFirewallPolicyRuleCollectionGroup").getFirewallPolicyRuleCollectionGroup = null as any;
export const getFirewallPolicyRuleCollectionGroupOutput: typeof import("./getFirewallPolicyRuleCollectionGroup").getFirewallPolicyRuleCollectionGroupOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallPolicyRuleCollectionGroup","getFirewallPolicyRuleCollectionGroupOutput"], () => require("./getFirewallPolicyRuleCollectionGroup"));

export { GetFirewallPolicyRuleCollectionGroupDraftArgs, GetFirewallPolicyRuleCollectionGroupDraftResult, GetFirewallPolicyRuleCollectionGroupDraftOutputArgs } from "./getFirewallPolicyRuleCollectionGroupDraft";
export const getFirewallPolicyRuleCollectionGroupDraft: typeof import("./getFirewallPolicyRuleCollectionGroupDraft").getFirewallPolicyRuleCollectionGroupDraft = null as any;
export const getFirewallPolicyRuleCollectionGroupDraftOutput: typeof import("./getFirewallPolicyRuleCollectionGroupDraft").getFirewallPolicyRuleCollectionGroupDraftOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallPolicyRuleCollectionGroupDraft","getFirewallPolicyRuleCollectionGroupDraftOutput"], () => require("./getFirewallPolicyRuleCollectionGroupDraft"));

export { GetFirewallPolicyRuleGroupArgs, GetFirewallPolicyRuleGroupResult, GetFirewallPolicyRuleGroupOutputArgs } from "./getFirewallPolicyRuleGroup";
export const getFirewallPolicyRuleGroup: typeof import("./getFirewallPolicyRuleGroup").getFirewallPolicyRuleGroup = null as any;
export const getFirewallPolicyRuleGroupOutput: typeof import("./getFirewallPolicyRuleGroup").getFirewallPolicyRuleGroupOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallPolicyRuleGroup","getFirewallPolicyRuleGroupOutput"], () => require("./getFirewallPolicyRuleGroup"));

export { GetFlowLogArgs, GetFlowLogResult, GetFlowLogOutputArgs } from "./getFlowLog";
export const getFlowLog: typeof import("./getFlowLog").getFlowLog = null as any;
export const getFlowLogOutput: typeof import("./getFlowLog").getFlowLogOutput = null as any;
utilities.lazyLoad(exports, ["getFlowLog","getFlowLogOutput"], () => require("./getFlowLog"));

export { GetHubRouteTableArgs, GetHubRouteTableResult, GetHubRouteTableOutputArgs } from "./getHubRouteTable";
export const getHubRouteTable: typeof import("./getHubRouteTable").getHubRouteTable = null as any;
export const getHubRouteTableOutput: typeof import("./getHubRouteTable").getHubRouteTableOutput = null as any;
utilities.lazyLoad(exports, ["getHubRouteTable","getHubRouteTableOutput"], () => require("./getHubRouteTable"));

export { GetHubVirtualNetworkConnectionArgs, GetHubVirtualNetworkConnectionResult, GetHubVirtualNetworkConnectionOutputArgs } from "./getHubVirtualNetworkConnection";
export const getHubVirtualNetworkConnection: typeof import("./getHubVirtualNetworkConnection").getHubVirtualNetworkConnection = null as any;
export const getHubVirtualNetworkConnectionOutput: typeof import("./getHubVirtualNetworkConnection").getHubVirtualNetworkConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getHubVirtualNetworkConnection","getHubVirtualNetworkConnectionOutput"], () => require("./getHubVirtualNetworkConnection"));

export { GetInboundNatRuleArgs, GetInboundNatRuleResult, GetInboundNatRuleOutputArgs } from "./getInboundNatRule";
export const getInboundNatRule: typeof import("./getInboundNatRule").getInboundNatRule = null as any;
export const getInboundNatRuleOutput: typeof import("./getInboundNatRule").getInboundNatRuleOutput = null as any;
utilities.lazyLoad(exports, ["getInboundNatRule","getInboundNatRuleOutput"], () => require("./getInboundNatRule"));

export { GetInterfaceEndpointArgs, GetInterfaceEndpointResult, GetInterfaceEndpointOutputArgs } from "./getInterfaceEndpoint";
export const getInterfaceEndpoint: typeof import("./getInterfaceEndpoint").getInterfaceEndpoint = null as any;
export const getInterfaceEndpointOutput: typeof import("./getInterfaceEndpoint").getInterfaceEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getInterfaceEndpoint","getInterfaceEndpointOutput"], () => require("./getInterfaceEndpoint"));

export { GetIpAllocationArgs, GetIpAllocationResult, GetIpAllocationOutputArgs } from "./getIpAllocation";
export const getIpAllocation: typeof import("./getIpAllocation").getIpAllocation = null as any;
export const getIpAllocationOutput: typeof import("./getIpAllocation").getIpAllocationOutput = null as any;
utilities.lazyLoad(exports, ["getIpAllocation","getIpAllocationOutput"], () => require("./getIpAllocation"));

export { GetIpGroupArgs, GetIpGroupResult, GetIpGroupOutputArgs } from "./getIpGroup";
export const getIpGroup: typeof import("./getIpGroup").getIpGroup = null as any;
export const getIpGroupOutput: typeof import("./getIpGroup").getIpGroupOutput = null as any;
utilities.lazyLoad(exports, ["getIpGroup","getIpGroupOutput"], () => require("./getIpGroup"));

export { GetIpamPoolArgs, GetIpamPoolResult, GetIpamPoolOutputArgs } from "./getIpamPool";
export const getIpamPool: typeof import("./getIpamPool").getIpamPool = null as any;
export const getIpamPoolOutput: typeof import("./getIpamPool").getIpamPoolOutput = null as any;
utilities.lazyLoad(exports, ["getIpamPool","getIpamPoolOutput"], () => require("./getIpamPool"));

export { GetIpamPoolUsageArgs, GetIpamPoolUsageResult, GetIpamPoolUsageOutputArgs } from "./getIpamPoolUsage";
export const getIpamPoolUsage: typeof import("./getIpamPoolUsage").getIpamPoolUsage = null as any;
export const getIpamPoolUsageOutput: typeof import("./getIpamPoolUsage").getIpamPoolUsageOutput = null as any;
utilities.lazyLoad(exports, ["getIpamPoolUsage","getIpamPoolUsageOutput"], () => require("./getIpamPoolUsage"));

export { GetLoadBalancerArgs, GetLoadBalancerResult, GetLoadBalancerOutputArgs } from "./getLoadBalancer";
export const getLoadBalancer: typeof import("./getLoadBalancer").getLoadBalancer = null as any;
export const getLoadBalancerOutput: typeof import("./getLoadBalancer").getLoadBalancerOutput = null as any;
utilities.lazyLoad(exports, ["getLoadBalancer","getLoadBalancerOutput"], () => require("./getLoadBalancer"));

export { GetLoadBalancerBackendAddressPoolArgs, GetLoadBalancerBackendAddressPoolResult, GetLoadBalancerBackendAddressPoolOutputArgs } from "./getLoadBalancerBackendAddressPool";
export const getLoadBalancerBackendAddressPool: typeof import("./getLoadBalancerBackendAddressPool").getLoadBalancerBackendAddressPool = null as any;
export const getLoadBalancerBackendAddressPoolOutput: typeof import("./getLoadBalancerBackendAddressPool").getLoadBalancerBackendAddressPoolOutput = null as any;
utilities.lazyLoad(exports, ["getLoadBalancerBackendAddressPool","getLoadBalancerBackendAddressPoolOutput"], () => require("./getLoadBalancerBackendAddressPool"));

export { GetLocalNetworkGatewayArgs, GetLocalNetworkGatewayResult, GetLocalNetworkGatewayOutputArgs } from "./getLocalNetworkGateway";
export const getLocalNetworkGateway: typeof import("./getLocalNetworkGateway").getLocalNetworkGateway = null as any;
export const getLocalNetworkGatewayOutput: typeof import("./getLocalNetworkGateway").getLocalNetworkGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getLocalNetworkGateway","getLocalNetworkGatewayOutput"], () => require("./getLocalNetworkGateway"));

export { GetManagementGroupNetworkManagerConnectionArgs, GetManagementGroupNetworkManagerConnectionResult, GetManagementGroupNetworkManagerConnectionOutputArgs } from "./getManagementGroupNetworkManagerConnection";
export const getManagementGroupNetworkManagerConnection: typeof import("./getManagementGroupNetworkManagerConnection").getManagementGroupNetworkManagerConnection = null as any;
export const getManagementGroupNetworkManagerConnectionOutput: typeof import("./getManagementGroupNetworkManagerConnection").getManagementGroupNetworkManagerConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getManagementGroupNetworkManagerConnection","getManagementGroupNetworkManagerConnectionOutput"], () => require("./getManagementGroupNetworkManagerConnection"));

export { GetNatGatewayArgs, GetNatGatewayResult, GetNatGatewayOutputArgs } from "./getNatGateway";
export const getNatGateway: typeof import("./getNatGateway").getNatGateway = null as any;
export const getNatGatewayOutput: typeof import("./getNatGateway").getNatGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getNatGateway","getNatGatewayOutput"], () => require("./getNatGateway"));

export { GetNatRuleArgs, GetNatRuleResult, GetNatRuleOutputArgs } from "./getNatRule";
export const getNatRule: typeof import("./getNatRule").getNatRule = null as any;
export const getNatRuleOutput: typeof import("./getNatRule").getNatRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNatRule","getNatRuleOutput"], () => require("./getNatRule"));

export { GetNetworkGroupArgs, GetNetworkGroupResult, GetNetworkGroupOutputArgs } from "./getNetworkGroup";
export const getNetworkGroup: typeof import("./getNetworkGroup").getNetworkGroup = null as any;
export const getNetworkGroupOutput: typeof import("./getNetworkGroup").getNetworkGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkGroup","getNetworkGroupOutput"], () => require("./getNetworkGroup"));

export { GetNetworkInterfaceArgs, GetNetworkInterfaceResult, GetNetworkInterfaceOutputArgs } from "./getNetworkInterface";
export const getNetworkInterface: typeof import("./getNetworkInterface").getNetworkInterface = null as any;
export const getNetworkInterfaceOutput: typeof import("./getNetworkInterface").getNetworkInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkInterface","getNetworkInterfaceOutput"], () => require("./getNetworkInterface"));

export { GetNetworkInterfaceTapConfigurationArgs, GetNetworkInterfaceTapConfigurationResult, GetNetworkInterfaceTapConfigurationOutputArgs } from "./getNetworkInterfaceTapConfiguration";
export const getNetworkInterfaceTapConfiguration: typeof import("./getNetworkInterfaceTapConfiguration").getNetworkInterfaceTapConfiguration = null as any;
export const getNetworkInterfaceTapConfigurationOutput: typeof import("./getNetworkInterfaceTapConfiguration").getNetworkInterfaceTapConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkInterfaceTapConfiguration","getNetworkInterfaceTapConfigurationOutput"], () => require("./getNetworkInterfaceTapConfiguration"));

export { GetNetworkManagerArgs, GetNetworkManagerResult, GetNetworkManagerOutputArgs } from "./getNetworkManager";
export const getNetworkManager: typeof import("./getNetworkManager").getNetworkManager = null as any;
export const getNetworkManagerOutput: typeof import("./getNetworkManager").getNetworkManagerOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkManager","getNetworkManagerOutput"], () => require("./getNetworkManager"));

export { GetNetworkManagerRoutingConfigurationArgs, GetNetworkManagerRoutingConfigurationResult, GetNetworkManagerRoutingConfigurationOutputArgs } from "./getNetworkManagerRoutingConfiguration";
export const getNetworkManagerRoutingConfiguration: typeof import("./getNetworkManagerRoutingConfiguration").getNetworkManagerRoutingConfiguration = null as any;
export const getNetworkManagerRoutingConfigurationOutput: typeof import("./getNetworkManagerRoutingConfiguration").getNetworkManagerRoutingConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkManagerRoutingConfiguration","getNetworkManagerRoutingConfigurationOutput"], () => require("./getNetworkManagerRoutingConfiguration"));

export { GetNetworkProfileArgs, GetNetworkProfileResult, GetNetworkProfileOutputArgs } from "./getNetworkProfile";
export const getNetworkProfile: typeof import("./getNetworkProfile").getNetworkProfile = null as any;
export const getNetworkProfileOutput: typeof import("./getNetworkProfile").getNetworkProfileOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkProfile","getNetworkProfileOutput"], () => require("./getNetworkProfile"));

export { GetNetworkSecurityGroupArgs, GetNetworkSecurityGroupResult, GetNetworkSecurityGroupOutputArgs } from "./getNetworkSecurityGroup";
export const getNetworkSecurityGroup: typeof import("./getNetworkSecurityGroup").getNetworkSecurityGroup = null as any;
export const getNetworkSecurityGroupOutput: typeof import("./getNetworkSecurityGroup").getNetworkSecurityGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityGroup","getNetworkSecurityGroupOutput"], () => require("./getNetworkSecurityGroup"));

export { GetNetworkSecurityPerimeterArgs, GetNetworkSecurityPerimeterResult, GetNetworkSecurityPerimeterOutputArgs } from "./getNetworkSecurityPerimeter";
export const getNetworkSecurityPerimeter: typeof import("./getNetworkSecurityPerimeter").getNetworkSecurityPerimeter = null as any;
export const getNetworkSecurityPerimeterOutput: typeof import("./getNetworkSecurityPerimeter").getNetworkSecurityPerimeterOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityPerimeter","getNetworkSecurityPerimeterOutput"], () => require("./getNetworkSecurityPerimeter"));

export { GetNetworkSecurityPerimeterAccessRuleArgs, GetNetworkSecurityPerimeterAccessRuleResult, GetNetworkSecurityPerimeterAccessRuleOutputArgs } from "./getNetworkSecurityPerimeterAccessRule";
export const getNetworkSecurityPerimeterAccessRule: typeof import("./getNetworkSecurityPerimeterAccessRule").getNetworkSecurityPerimeterAccessRule = null as any;
export const getNetworkSecurityPerimeterAccessRuleOutput: typeof import("./getNetworkSecurityPerimeterAccessRule").getNetworkSecurityPerimeterAccessRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityPerimeterAccessRule","getNetworkSecurityPerimeterAccessRuleOutput"], () => require("./getNetworkSecurityPerimeterAccessRule"));

export { GetNetworkSecurityPerimeterAssociationArgs, GetNetworkSecurityPerimeterAssociationResult, GetNetworkSecurityPerimeterAssociationOutputArgs } from "./getNetworkSecurityPerimeterAssociation";
export const getNetworkSecurityPerimeterAssociation: typeof import("./getNetworkSecurityPerimeterAssociation").getNetworkSecurityPerimeterAssociation = null as any;
export const getNetworkSecurityPerimeterAssociationOutput: typeof import("./getNetworkSecurityPerimeterAssociation").getNetworkSecurityPerimeterAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityPerimeterAssociation","getNetworkSecurityPerimeterAssociationOutput"], () => require("./getNetworkSecurityPerimeterAssociation"));

export { GetNetworkSecurityPerimeterLinkArgs, GetNetworkSecurityPerimeterLinkResult, GetNetworkSecurityPerimeterLinkOutputArgs } from "./getNetworkSecurityPerimeterLink";
export const getNetworkSecurityPerimeterLink: typeof import("./getNetworkSecurityPerimeterLink").getNetworkSecurityPerimeterLink = null as any;
export const getNetworkSecurityPerimeterLinkOutput: typeof import("./getNetworkSecurityPerimeterLink").getNetworkSecurityPerimeterLinkOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityPerimeterLink","getNetworkSecurityPerimeterLinkOutput"], () => require("./getNetworkSecurityPerimeterLink"));

export { GetNetworkSecurityPerimeterLoggingConfigurationArgs, GetNetworkSecurityPerimeterLoggingConfigurationResult, GetNetworkSecurityPerimeterLoggingConfigurationOutputArgs } from "./getNetworkSecurityPerimeterLoggingConfiguration";
export const getNetworkSecurityPerimeterLoggingConfiguration: typeof import("./getNetworkSecurityPerimeterLoggingConfiguration").getNetworkSecurityPerimeterLoggingConfiguration = null as any;
export const getNetworkSecurityPerimeterLoggingConfigurationOutput: typeof import("./getNetworkSecurityPerimeterLoggingConfiguration").getNetworkSecurityPerimeterLoggingConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityPerimeterLoggingConfiguration","getNetworkSecurityPerimeterLoggingConfigurationOutput"], () => require("./getNetworkSecurityPerimeterLoggingConfiguration"));

export { GetNetworkSecurityPerimeterProfileArgs, GetNetworkSecurityPerimeterProfileResult, GetNetworkSecurityPerimeterProfileOutputArgs } from "./getNetworkSecurityPerimeterProfile";
export const getNetworkSecurityPerimeterProfile: typeof import("./getNetworkSecurityPerimeterProfile").getNetworkSecurityPerimeterProfile = null as any;
export const getNetworkSecurityPerimeterProfileOutput: typeof import("./getNetworkSecurityPerimeterProfile").getNetworkSecurityPerimeterProfileOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityPerimeterProfile","getNetworkSecurityPerimeterProfileOutput"], () => require("./getNetworkSecurityPerimeterProfile"));

export { GetNetworkVirtualApplianceArgs, GetNetworkVirtualApplianceResult, GetNetworkVirtualApplianceOutputArgs } from "./getNetworkVirtualAppliance";
export const getNetworkVirtualAppliance: typeof import("./getNetworkVirtualAppliance").getNetworkVirtualAppliance = null as any;
export const getNetworkVirtualApplianceOutput: typeof import("./getNetworkVirtualAppliance").getNetworkVirtualApplianceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkVirtualAppliance","getNetworkVirtualApplianceOutput"], () => require("./getNetworkVirtualAppliance"));

export { GetNetworkVirtualApplianceConnectionArgs, GetNetworkVirtualApplianceConnectionResult, GetNetworkVirtualApplianceConnectionOutputArgs } from "./getNetworkVirtualApplianceConnection";
export const getNetworkVirtualApplianceConnection: typeof import("./getNetworkVirtualApplianceConnection").getNetworkVirtualApplianceConnection = null as any;
export const getNetworkVirtualApplianceConnectionOutput: typeof import("./getNetworkVirtualApplianceConnection").getNetworkVirtualApplianceConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkVirtualApplianceConnection","getNetworkVirtualApplianceConnectionOutput"], () => require("./getNetworkVirtualApplianceConnection"));

export { GetNetworkWatcherArgs, GetNetworkWatcherResult, GetNetworkWatcherOutputArgs } from "./getNetworkWatcher";
export const getNetworkWatcher: typeof import("./getNetworkWatcher").getNetworkWatcher = null as any;
export const getNetworkWatcherOutput: typeof import("./getNetworkWatcher").getNetworkWatcherOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkWatcher","getNetworkWatcherOutput"], () => require("./getNetworkWatcher"));

export { GetNspAccessRuleArgs, GetNspAccessRuleResult, GetNspAccessRuleOutputArgs } from "./getNspAccessRule";
export const getNspAccessRule: typeof import("./getNspAccessRule").getNspAccessRule = null as any;
export const getNspAccessRuleOutput: typeof import("./getNspAccessRule").getNspAccessRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNspAccessRule","getNspAccessRuleOutput"], () => require("./getNspAccessRule"));

export { GetNspAssociationArgs, GetNspAssociationResult, GetNspAssociationOutputArgs } from "./getNspAssociation";
export const getNspAssociation: typeof import("./getNspAssociation").getNspAssociation = null as any;
export const getNspAssociationOutput: typeof import("./getNspAssociation").getNspAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getNspAssociation","getNspAssociationOutput"], () => require("./getNspAssociation"));

export { GetNspLinkArgs, GetNspLinkResult, GetNspLinkOutputArgs } from "./getNspLink";
export const getNspLink: typeof import("./getNspLink").getNspLink = null as any;
export const getNspLinkOutput: typeof import("./getNspLink").getNspLinkOutput = null as any;
utilities.lazyLoad(exports, ["getNspLink","getNspLinkOutput"], () => require("./getNspLink"));

export { GetNspProfileArgs, GetNspProfileResult, GetNspProfileOutputArgs } from "./getNspProfile";
export const getNspProfile: typeof import("./getNspProfile").getNspProfile = null as any;
export const getNspProfileOutput: typeof import("./getNspProfile").getNspProfileOutput = null as any;
utilities.lazyLoad(exports, ["getNspProfile","getNspProfileOutput"], () => require("./getNspProfile"));

export { GetP2sVpnGatewayArgs, GetP2sVpnGatewayResult, GetP2sVpnGatewayOutputArgs } from "./getP2sVpnGateway";
export const getP2sVpnGateway: typeof import("./getP2sVpnGateway").getP2sVpnGateway = null as any;
export const getP2sVpnGatewayOutput: typeof import("./getP2sVpnGateway").getP2sVpnGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getP2sVpnGateway","getP2sVpnGatewayOutput"], () => require("./getP2sVpnGateway"));

export { GetP2sVpnGatewayP2sVpnConnectionHealthArgs, GetP2sVpnGatewayP2sVpnConnectionHealthResult, GetP2sVpnGatewayP2sVpnConnectionHealthOutputArgs } from "./getP2sVpnGatewayP2sVpnConnectionHealth";
export const getP2sVpnGatewayP2sVpnConnectionHealth: typeof import("./getP2sVpnGatewayP2sVpnConnectionHealth").getP2sVpnGatewayP2sVpnConnectionHealth = null as any;
export const getP2sVpnGatewayP2sVpnConnectionHealthOutput: typeof import("./getP2sVpnGatewayP2sVpnConnectionHealth").getP2sVpnGatewayP2sVpnConnectionHealthOutput = null as any;
utilities.lazyLoad(exports, ["getP2sVpnGatewayP2sVpnConnectionHealth","getP2sVpnGatewayP2sVpnConnectionHealthOutput"], () => require("./getP2sVpnGatewayP2sVpnConnectionHealth"));

export { GetP2sVpnGatewayP2sVpnConnectionHealthDetailedArgs, GetP2sVpnGatewayP2sVpnConnectionHealthDetailedResult, GetP2sVpnGatewayP2sVpnConnectionHealthDetailedOutputArgs } from "./getP2sVpnGatewayP2sVpnConnectionHealthDetailed";
export const getP2sVpnGatewayP2sVpnConnectionHealthDetailed: typeof import("./getP2sVpnGatewayP2sVpnConnectionHealthDetailed").getP2sVpnGatewayP2sVpnConnectionHealthDetailed = null as any;
export const getP2sVpnGatewayP2sVpnConnectionHealthDetailedOutput: typeof import("./getP2sVpnGatewayP2sVpnConnectionHealthDetailed").getP2sVpnGatewayP2sVpnConnectionHealthDetailedOutput = null as any;
utilities.lazyLoad(exports, ["getP2sVpnGatewayP2sVpnConnectionHealthDetailed","getP2sVpnGatewayP2sVpnConnectionHealthDetailedOutput"], () => require("./getP2sVpnGatewayP2sVpnConnectionHealthDetailed"));

export { GetP2sVpnServerConfigurationArgs, GetP2sVpnServerConfigurationResult, GetP2sVpnServerConfigurationOutputArgs } from "./getP2sVpnServerConfiguration";
export const getP2sVpnServerConfiguration: typeof import("./getP2sVpnServerConfiguration").getP2sVpnServerConfiguration = null as any;
export const getP2sVpnServerConfigurationOutput: typeof import("./getP2sVpnServerConfiguration").getP2sVpnServerConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getP2sVpnServerConfiguration","getP2sVpnServerConfigurationOutput"], () => require("./getP2sVpnServerConfiguration"));

export { GetPacketCaptureArgs, GetPacketCaptureResult, GetPacketCaptureOutputArgs } from "./getPacketCapture";
export const getPacketCapture: typeof import("./getPacketCapture").getPacketCapture = null as any;
export const getPacketCaptureOutput: typeof import("./getPacketCapture").getPacketCaptureOutput = null as any;
utilities.lazyLoad(exports, ["getPacketCapture","getPacketCaptureOutput"], () => require("./getPacketCapture"));

export { GetPrivateDnsZoneGroupArgs, GetPrivateDnsZoneGroupResult, GetPrivateDnsZoneGroupOutputArgs } from "./getPrivateDnsZoneGroup";
export const getPrivateDnsZoneGroup: typeof import("./getPrivateDnsZoneGroup").getPrivateDnsZoneGroup = null as any;
export const getPrivateDnsZoneGroupOutput: typeof import("./getPrivateDnsZoneGroup").getPrivateDnsZoneGroupOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateDnsZoneGroup","getPrivateDnsZoneGroupOutput"], () => require("./getPrivateDnsZoneGroup"));

export { GetPrivateEndpointArgs, GetPrivateEndpointResult, GetPrivateEndpointOutputArgs } from "./getPrivateEndpoint";
export const getPrivateEndpoint: typeof import("./getPrivateEndpoint").getPrivateEndpoint = null as any;
export const getPrivateEndpointOutput: typeof import("./getPrivateEndpoint").getPrivateEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpoint","getPrivateEndpointOutput"], () => require("./getPrivateEndpoint"));

export { GetPrivateLinkServiceArgs, GetPrivateLinkServiceResult, GetPrivateLinkServiceOutputArgs } from "./getPrivateLinkService";
export const getPrivateLinkService: typeof import("./getPrivateLinkService").getPrivateLinkService = null as any;
export const getPrivateLinkServiceOutput: typeof import("./getPrivateLinkService").getPrivateLinkServiceOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkService","getPrivateLinkServiceOutput"], () => require("./getPrivateLinkService"));

export { GetPrivateLinkServicePrivateEndpointConnectionArgs, GetPrivateLinkServicePrivateEndpointConnectionResult, GetPrivateLinkServicePrivateEndpointConnectionOutputArgs } from "./getPrivateLinkServicePrivateEndpointConnection";
export const getPrivateLinkServicePrivateEndpointConnection: typeof import("./getPrivateLinkServicePrivateEndpointConnection").getPrivateLinkServicePrivateEndpointConnection = null as any;
export const getPrivateLinkServicePrivateEndpointConnectionOutput: typeof import("./getPrivateLinkServicePrivateEndpointConnection").getPrivateLinkServicePrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkServicePrivateEndpointConnection","getPrivateLinkServicePrivateEndpointConnectionOutput"], () => require("./getPrivateLinkServicePrivateEndpointConnection"));

export { GetPublicIPAddressArgs, GetPublicIPAddressResult, GetPublicIPAddressOutputArgs } from "./getPublicIPAddress";
export const getPublicIPAddress: typeof import("./getPublicIPAddress").getPublicIPAddress = null as any;
export const getPublicIPAddressOutput: typeof import("./getPublicIPAddress").getPublicIPAddressOutput = null as any;
utilities.lazyLoad(exports, ["getPublicIPAddress","getPublicIPAddressOutput"], () => require("./getPublicIPAddress"));

export { GetPublicIPPrefixArgs, GetPublicIPPrefixResult, GetPublicIPPrefixOutputArgs } from "./getPublicIPPrefix";
export const getPublicIPPrefix: typeof import("./getPublicIPPrefix").getPublicIPPrefix = null as any;
export const getPublicIPPrefixOutput: typeof import("./getPublicIPPrefix").getPublicIPPrefixOutput = null as any;
utilities.lazyLoad(exports, ["getPublicIPPrefix","getPublicIPPrefixOutput"], () => require("./getPublicIPPrefix"));

export { GetReachabilityAnalysisIntentArgs, GetReachabilityAnalysisIntentResult, GetReachabilityAnalysisIntentOutputArgs } from "./getReachabilityAnalysisIntent";
export const getReachabilityAnalysisIntent: typeof import("./getReachabilityAnalysisIntent").getReachabilityAnalysisIntent = null as any;
export const getReachabilityAnalysisIntentOutput: typeof import("./getReachabilityAnalysisIntent").getReachabilityAnalysisIntentOutput = null as any;
utilities.lazyLoad(exports, ["getReachabilityAnalysisIntent","getReachabilityAnalysisIntentOutput"], () => require("./getReachabilityAnalysisIntent"));

export { GetReachabilityAnalysisRunArgs, GetReachabilityAnalysisRunResult, GetReachabilityAnalysisRunOutputArgs } from "./getReachabilityAnalysisRun";
export const getReachabilityAnalysisRun: typeof import("./getReachabilityAnalysisRun").getReachabilityAnalysisRun = null as any;
export const getReachabilityAnalysisRunOutput: typeof import("./getReachabilityAnalysisRun").getReachabilityAnalysisRunOutput = null as any;
utilities.lazyLoad(exports, ["getReachabilityAnalysisRun","getReachabilityAnalysisRunOutput"], () => require("./getReachabilityAnalysisRun"));

export { GetRouteArgs, GetRouteResult, GetRouteOutputArgs } from "./getRoute";
export const getRoute: typeof import("./getRoute").getRoute = null as any;
export const getRouteOutput: typeof import("./getRoute").getRouteOutput = null as any;
utilities.lazyLoad(exports, ["getRoute","getRouteOutput"], () => require("./getRoute"));

export { GetRouteFilterArgs, GetRouteFilterResult, GetRouteFilterOutputArgs } from "./getRouteFilter";
export const getRouteFilter: typeof import("./getRouteFilter").getRouteFilter = null as any;
export const getRouteFilterOutput: typeof import("./getRouteFilter").getRouteFilterOutput = null as any;
utilities.lazyLoad(exports, ["getRouteFilter","getRouteFilterOutput"], () => require("./getRouteFilter"));

export { GetRouteFilterRuleArgs, GetRouteFilterRuleResult, GetRouteFilterRuleOutputArgs } from "./getRouteFilterRule";
export const getRouteFilterRule: typeof import("./getRouteFilterRule").getRouteFilterRule = null as any;
export const getRouteFilterRuleOutput: typeof import("./getRouteFilterRule").getRouteFilterRuleOutput = null as any;
utilities.lazyLoad(exports, ["getRouteFilterRule","getRouteFilterRuleOutput"], () => require("./getRouteFilterRule"));

export { GetRouteMapArgs, GetRouteMapResult, GetRouteMapOutputArgs } from "./getRouteMap";
export const getRouteMap: typeof import("./getRouteMap").getRouteMap = null as any;
export const getRouteMapOutput: typeof import("./getRouteMap").getRouteMapOutput = null as any;
utilities.lazyLoad(exports, ["getRouteMap","getRouteMapOutput"], () => require("./getRouteMap"));

export { GetRouteTableArgs, GetRouteTableResult, GetRouteTableOutputArgs } from "./getRouteTable";
export const getRouteTable: typeof import("./getRouteTable").getRouteTable = null as any;
export const getRouteTableOutput: typeof import("./getRouteTable").getRouteTableOutput = null as any;
utilities.lazyLoad(exports, ["getRouteTable","getRouteTableOutput"], () => require("./getRouteTable"));

export { GetRoutingIntentArgs, GetRoutingIntentResult, GetRoutingIntentOutputArgs } from "./getRoutingIntent";
export const getRoutingIntent: typeof import("./getRoutingIntent").getRoutingIntent = null as any;
export const getRoutingIntentOutput: typeof import("./getRoutingIntent").getRoutingIntentOutput = null as any;
utilities.lazyLoad(exports, ["getRoutingIntent","getRoutingIntentOutput"], () => require("./getRoutingIntent"));

export { GetRoutingRuleArgs, GetRoutingRuleResult, GetRoutingRuleOutputArgs } from "./getRoutingRule";
export const getRoutingRule: typeof import("./getRoutingRule").getRoutingRule = null as any;
export const getRoutingRuleOutput: typeof import("./getRoutingRule").getRoutingRuleOutput = null as any;
utilities.lazyLoad(exports, ["getRoutingRule","getRoutingRuleOutput"], () => require("./getRoutingRule"));

export { GetRoutingRuleCollectionArgs, GetRoutingRuleCollectionResult, GetRoutingRuleCollectionOutputArgs } from "./getRoutingRuleCollection";
export const getRoutingRuleCollection: typeof import("./getRoutingRuleCollection").getRoutingRuleCollection = null as any;
export const getRoutingRuleCollectionOutput: typeof import("./getRoutingRuleCollection").getRoutingRuleCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getRoutingRuleCollection","getRoutingRuleCollectionOutput"], () => require("./getRoutingRuleCollection"));

export { GetScopeConnectionArgs, GetScopeConnectionResult, GetScopeConnectionOutputArgs } from "./getScopeConnection";
export const getScopeConnection: typeof import("./getScopeConnection").getScopeConnection = null as any;
export const getScopeConnectionOutput: typeof import("./getScopeConnection").getScopeConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getScopeConnection","getScopeConnectionOutput"], () => require("./getScopeConnection"));

export { GetSecurityAdminConfigurationArgs, GetSecurityAdminConfigurationResult, GetSecurityAdminConfigurationOutputArgs } from "./getSecurityAdminConfiguration";
export const getSecurityAdminConfiguration: typeof import("./getSecurityAdminConfiguration").getSecurityAdminConfiguration = null as any;
export const getSecurityAdminConfigurationOutput: typeof import("./getSecurityAdminConfiguration").getSecurityAdminConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityAdminConfiguration","getSecurityAdminConfigurationOutput"], () => require("./getSecurityAdminConfiguration"));

export { GetSecurityPartnerProviderArgs, GetSecurityPartnerProviderResult, GetSecurityPartnerProviderOutputArgs } from "./getSecurityPartnerProvider";
export const getSecurityPartnerProvider: typeof import("./getSecurityPartnerProvider").getSecurityPartnerProvider = null as any;
export const getSecurityPartnerProviderOutput: typeof import("./getSecurityPartnerProvider").getSecurityPartnerProviderOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityPartnerProvider","getSecurityPartnerProviderOutput"], () => require("./getSecurityPartnerProvider"));

export { GetSecurityRuleArgs, GetSecurityRuleResult, GetSecurityRuleOutputArgs } from "./getSecurityRule";
export const getSecurityRule: typeof import("./getSecurityRule").getSecurityRule = null as any;
export const getSecurityRuleOutput: typeof import("./getSecurityRule").getSecurityRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityRule","getSecurityRuleOutput"], () => require("./getSecurityRule"));

export { GetSecurityUserConfigurationArgs, GetSecurityUserConfigurationResult, GetSecurityUserConfigurationOutputArgs } from "./getSecurityUserConfiguration";
export const getSecurityUserConfiguration: typeof import("./getSecurityUserConfiguration").getSecurityUserConfiguration = null as any;
export const getSecurityUserConfigurationOutput: typeof import("./getSecurityUserConfiguration").getSecurityUserConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityUserConfiguration","getSecurityUserConfigurationOutput"], () => require("./getSecurityUserConfiguration"));

export { GetSecurityUserRuleArgs, GetSecurityUserRuleResult, GetSecurityUserRuleOutputArgs } from "./getSecurityUserRule";
export const getSecurityUserRule: typeof import("./getSecurityUserRule").getSecurityUserRule = null as any;
export const getSecurityUserRuleOutput: typeof import("./getSecurityUserRule").getSecurityUserRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityUserRule","getSecurityUserRuleOutput"], () => require("./getSecurityUserRule"));

export { GetSecurityUserRuleCollectionArgs, GetSecurityUserRuleCollectionResult, GetSecurityUserRuleCollectionOutputArgs } from "./getSecurityUserRuleCollection";
export const getSecurityUserRuleCollection: typeof import("./getSecurityUserRuleCollection").getSecurityUserRuleCollection = null as any;
export const getSecurityUserRuleCollectionOutput: typeof import("./getSecurityUserRuleCollection").getSecurityUserRuleCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityUserRuleCollection","getSecurityUserRuleCollectionOutput"], () => require("./getSecurityUserRuleCollection"));

export { GetServiceEndpointPolicyArgs, GetServiceEndpointPolicyResult, GetServiceEndpointPolicyOutputArgs } from "./getServiceEndpointPolicy";
export const getServiceEndpointPolicy: typeof import("./getServiceEndpointPolicy").getServiceEndpointPolicy = null as any;
export const getServiceEndpointPolicyOutput: typeof import("./getServiceEndpointPolicy").getServiceEndpointPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getServiceEndpointPolicy","getServiceEndpointPolicyOutput"], () => require("./getServiceEndpointPolicy"));

export { GetServiceEndpointPolicyDefinitionArgs, GetServiceEndpointPolicyDefinitionResult, GetServiceEndpointPolicyDefinitionOutputArgs } from "./getServiceEndpointPolicyDefinition";
export const getServiceEndpointPolicyDefinition: typeof import("./getServiceEndpointPolicyDefinition").getServiceEndpointPolicyDefinition = null as any;
export const getServiceEndpointPolicyDefinitionOutput: typeof import("./getServiceEndpointPolicyDefinition").getServiceEndpointPolicyDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getServiceEndpointPolicyDefinition","getServiceEndpointPolicyDefinitionOutput"], () => require("./getServiceEndpointPolicyDefinition"));

export { GetStaticCidrArgs, GetStaticCidrResult, GetStaticCidrOutputArgs } from "./getStaticCidr";
export const getStaticCidr: typeof import("./getStaticCidr").getStaticCidr = null as any;
export const getStaticCidrOutput: typeof import("./getStaticCidr").getStaticCidrOutput = null as any;
utilities.lazyLoad(exports, ["getStaticCidr","getStaticCidrOutput"], () => require("./getStaticCidr"));

export { GetStaticMemberArgs, GetStaticMemberResult, GetStaticMemberOutputArgs } from "./getStaticMember";
export const getStaticMember: typeof import("./getStaticMember").getStaticMember = null as any;
export const getStaticMemberOutput: typeof import("./getStaticMember").getStaticMemberOutput = null as any;
utilities.lazyLoad(exports, ["getStaticMember","getStaticMemberOutput"], () => require("./getStaticMember"));

export { GetSubnetArgs, GetSubnetResult, GetSubnetOutputArgs } from "./getSubnet";
export const getSubnet: typeof import("./getSubnet").getSubnet = null as any;
export const getSubnetOutput: typeof import("./getSubnet").getSubnetOutput = null as any;
utilities.lazyLoad(exports, ["getSubnet","getSubnetOutput"], () => require("./getSubnet"));

export { GetSubscriptionNetworkManagerConnectionArgs, GetSubscriptionNetworkManagerConnectionResult, GetSubscriptionNetworkManagerConnectionOutputArgs } from "./getSubscriptionNetworkManagerConnection";
export const getSubscriptionNetworkManagerConnection: typeof import("./getSubscriptionNetworkManagerConnection").getSubscriptionNetworkManagerConnection = null as any;
export const getSubscriptionNetworkManagerConnectionOutput: typeof import("./getSubscriptionNetworkManagerConnection").getSubscriptionNetworkManagerConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getSubscriptionNetworkManagerConnection","getSubscriptionNetworkManagerConnectionOutput"], () => require("./getSubscriptionNetworkManagerConnection"));

export { GetUserRuleArgs, GetUserRuleResult, GetUserRuleOutputArgs } from "./getUserRule";
export const getUserRule: typeof import("./getUserRule").getUserRule = null as any;
export const getUserRuleOutput: typeof import("./getUserRule").getUserRuleOutput = null as any;
utilities.lazyLoad(exports, ["getUserRule","getUserRuleOutput"], () => require("./getUserRule"));

export { GetUserRuleCollectionArgs, GetUserRuleCollectionResult, GetUserRuleCollectionOutputArgs } from "./getUserRuleCollection";
export const getUserRuleCollection: typeof import("./getUserRuleCollection").getUserRuleCollection = null as any;
export const getUserRuleCollectionOutput: typeof import("./getUserRuleCollection").getUserRuleCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getUserRuleCollection","getUserRuleCollectionOutput"], () => require("./getUserRuleCollection"));

export { GetVerifierWorkspaceArgs, GetVerifierWorkspaceResult, GetVerifierWorkspaceOutputArgs } from "./getVerifierWorkspace";
export const getVerifierWorkspace: typeof import("./getVerifierWorkspace").getVerifierWorkspace = null as any;
export const getVerifierWorkspaceOutput: typeof import("./getVerifierWorkspace").getVerifierWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getVerifierWorkspace","getVerifierWorkspaceOutput"], () => require("./getVerifierWorkspace"));

export { GetVirtualApplianceSiteArgs, GetVirtualApplianceSiteResult, GetVirtualApplianceSiteOutputArgs } from "./getVirtualApplianceSite";
export const getVirtualApplianceSite: typeof import("./getVirtualApplianceSite").getVirtualApplianceSite = null as any;
export const getVirtualApplianceSiteOutput: typeof import("./getVirtualApplianceSite").getVirtualApplianceSiteOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualApplianceSite","getVirtualApplianceSiteOutput"], () => require("./getVirtualApplianceSite"));

export { GetVirtualHubArgs, GetVirtualHubResult, GetVirtualHubOutputArgs } from "./getVirtualHub";
export const getVirtualHub: typeof import("./getVirtualHub").getVirtualHub = null as any;
export const getVirtualHubOutput: typeof import("./getVirtualHub").getVirtualHubOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualHub","getVirtualHubOutput"], () => require("./getVirtualHub"));

export { GetVirtualHubBgpConnectionArgs, GetVirtualHubBgpConnectionResult, GetVirtualHubBgpConnectionOutputArgs } from "./getVirtualHubBgpConnection";
export const getVirtualHubBgpConnection: typeof import("./getVirtualHubBgpConnection").getVirtualHubBgpConnection = null as any;
export const getVirtualHubBgpConnectionOutput: typeof import("./getVirtualHubBgpConnection").getVirtualHubBgpConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualHubBgpConnection","getVirtualHubBgpConnectionOutput"], () => require("./getVirtualHubBgpConnection"));

export { GetVirtualHubIpConfigurationArgs, GetVirtualHubIpConfigurationResult, GetVirtualHubIpConfigurationOutputArgs } from "./getVirtualHubIpConfiguration";
export const getVirtualHubIpConfiguration: typeof import("./getVirtualHubIpConfiguration").getVirtualHubIpConfiguration = null as any;
export const getVirtualHubIpConfigurationOutput: typeof import("./getVirtualHubIpConfiguration").getVirtualHubIpConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualHubIpConfiguration","getVirtualHubIpConfigurationOutput"], () => require("./getVirtualHubIpConfiguration"));

export { GetVirtualHubRouteTableV2Args, GetVirtualHubRouteTableV2Result, GetVirtualHubRouteTableV2OutputArgs } from "./getVirtualHubRouteTableV2";
export const getVirtualHubRouteTableV2: typeof import("./getVirtualHubRouteTableV2").getVirtualHubRouteTableV2 = null as any;
export const getVirtualHubRouteTableV2Output: typeof import("./getVirtualHubRouteTableV2").getVirtualHubRouteTableV2Output = null as any;
utilities.lazyLoad(exports, ["getVirtualHubRouteTableV2","getVirtualHubRouteTableV2Output"], () => require("./getVirtualHubRouteTableV2"));

export { GetVirtualNetworkArgs, GetVirtualNetworkResult, GetVirtualNetworkOutputArgs } from "./getVirtualNetwork";
export const getVirtualNetwork: typeof import("./getVirtualNetwork").getVirtualNetwork = null as any;
export const getVirtualNetworkOutput: typeof import("./getVirtualNetwork").getVirtualNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetwork","getVirtualNetworkOutput"], () => require("./getVirtualNetwork"));

export { GetVirtualNetworkGatewayArgs, GetVirtualNetworkGatewayResult, GetVirtualNetworkGatewayOutputArgs } from "./getVirtualNetworkGateway";
export const getVirtualNetworkGateway: typeof import("./getVirtualNetworkGateway").getVirtualNetworkGateway = null as any;
export const getVirtualNetworkGatewayOutput: typeof import("./getVirtualNetworkGateway").getVirtualNetworkGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGateway","getVirtualNetworkGatewayOutput"], () => require("./getVirtualNetworkGateway"));

export { GetVirtualNetworkGatewayAdvertisedRoutesArgs, GetVirtualNetworkGatewayAdvertisedRoutesResult, GetVirtualNetworkGatewayAdvertisedRoutesOutputArgs } from "./getVirtualNetworkGatewayAdvertisedRoutes";
export const getVirtualNetworkGatewayAdvertisedRoutes: typeof import("./getVirtualNetworkGatewayAdvertisedRoutes").getVirtualNetworkGatewayAdvertisedRoutes = null as any;
export const getVirtualNetworkGatewayAdvertisedRoutesOutput: typeof import("./getVirtualNetworkGatewayAdvertisedRoutes").getVirtualNetworkGatewayAdvertisedRoutesOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayAdvertisedRoutes","getVirtualNetworkGatewayAdvertisedRoutesOutput"], () => require("./getVirtualNetworkGatewayAdvertisedRoutes"));

export { GetVirtualNetworkGatewayBgpPeerStatusArgs, GetVirtualNetworkGatewayBgpPeerStatusResult, GetVirtualNetworkGatewayBgpPeerStatusOutputArgs } from "./getVirtualNetworkGatewayBgpPeerStatus";
export const getVirtualNetworkGatewayBgpPeerStatus: typeof import("./getVirtualNetworkGatewayBgpPeerStatus").getVirtualNetworkGatewayBgpPeerStatus = null as any;
export const getVirtualNetworkGatewayBgpPeerStatusOutput: typeof import("./getVirtualNetworkGatewayBgpPeerStatus").getVirtualNetworkGatewayBgpPeerStatusOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayBgpPeerStatus","getVirtualNetworkGatewayBgpPeerStatusOutput"], () => require("./getVirtualNetworkGatewayBgpPeerStatus"));

export { GetVirtualNetworkGatewayConnectionArgs, GetVirtualNetworkGatewayConnectionResult, GetVirtualNetworkGatewayConnectionOutputArgs } from "./getVirtualNetworkGatewayConnection";
export const getVirtualNetworkGatewayConnection: typeof import("./getVirtualNetworkGatewayConnection").getVirtualNetworkGatewayConnection = null as any;
export const getVirtualNetworkGatewayConnectionOutput: typeof import("./getVirtualNetworkGatewayConnection").getVirtualNetworkGatewayConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayConnection","getVirtualNetworkGatewayConnectionOutput"], () => require("./getVirtualNetworkGatewayConnection"));

export { GetVirtualNetworkGatewayConnectionIkeSasArgs, GetVirtualNetworkGatewayConnectionIkeSasResult, GetVirtualNetworkGatewayConnectionIkeSasOutputArgs } from "./getVirtualNetworkGatewayConnectionIkeSas";
export const getVirtualNetworkGatewayConnectionIkeSas: typeof import("./getVirtualNetworkGatewayConnectionIkeSas").getVirtualNetworkGatewayConnectionIkeSas = null as any;
export const getVirtualNetworkGatewayConnectionIkeSasOutput: typeof import("./getVirtualNetworkGatewayConnectionIkeSas").getVirtualNetworkGatewayConnectionIkeSasOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayConnectionIkeSas","getVirtualNetworkGatewayConnectionIkeSasOutput"], () => require("./getVirtualNetworkGatewayConnectionIkeSas"));

export { GetVirtualNetworkGatewayLearnedRoutesArgs, GetVirtualNetworkGatewayLearnedRoutesResult, GetVirtualNetworkGatewayLearnedRoutesOutputArgs } from "./getVirtualNetworkGatewayLearnedRoutes";
export const getVirtualNetworkGatewayLearnedRoutes: typeof import("./getVirtualNetworkGatewayLearnedRoutes").getVirtualNetworkGatewayLearnedRoutes = null as any;
export const getVirtualNetworkGatewayLearnedRoutesOutput: typeof import("./getVirtualNetworkGatewayLearnedRoutes").getVirtualNetworkGatewayLearnedRoutesOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayLearnedRoutes","getVirtualNetworkGatewayLearnedRoutesOutput"], () => require("./getVirtualNetworkGatewayLearnedRoutes"));

export { GetVirtualNetworkGatewayNatRuleArgs, GetVirtualNetworkGatewayNatRuleResult, GetVirtualNetworkGatewayNatRuleOutputArgs } from "./getVirtualNetworkGatewayNatRule";
export const getVirtualNetworkGatewayNatRule: typeof import("./getVirtualNetworkGatewayNatRule").getVirtualNetworkGatewayNatRule = null as any;
export const getVirtualNetworkGatewayNatRuleOutput: typeof import("./getVirtualNetworkGatewayNatRule").getVirtualNetworkGatewayNatRuleOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayNatRule","getVirtualNetworkGatewayNatRuleOutput"], () => require("./getVirtualNetworkGatewayNatRule"));

export { GetVirtualNetworkGatewayVpnProfilePackageUrlArgs, GetVirtualNetworkGatewayVpnProfilePackageUrlResult, GetVirtualNetworkGatewayVpnProfilePackageUrlOutputArgs } from "./getVirtualNetworkGatewayVpnProfilePackageUrl";
export const getVirtualNetworkGatewayVpnProfilePackageUrl: typeof import("./getVirtualNetworkGatewayVpnProfilePackageUrl").getVirtualNetworkGatewayVpnProfilePackageUrl = null as any;
export const getVirtualNetworkGatewayVpnProfilePackageUrlOutput: typeof import("./getVirtualNetworkGatewayVpnProfilePackageUrl").getVirtualNetworkGatewayVpnProfilePackageUrlOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayVpnProfilePackageUrl","getVirtualNetworkGatewayVpnProfilePackageUrlOutput"], () => require("./getVirtualNetworkGatewayVpnProfilePackageUrl"));

export { GetVirtualNetworkGatewayVpnclientConnectionHealthArgs, GetVirtualNetworkGatewayVpnclientConnectionHealthResult, GetVirtualNetworkGatewayVpnclientConnectionHealthOutputArgs } from "./getVirtualNetworkGatewayVpnclientConnectionHealth";
export const getVirtualNetworkGatewayVpnclientConnectionHealth: typeof import("./getVirtualNetworkGatewayVpnclientConnectionHealth").getVirtualNetworkGatewayVpnclientConnectionHealth = null as any;
export const getVirtualNetworkGatewayVpnclientConnectionHealthOutput: typeof import("./getVirtualNetworkGatewayVpnclientConnectionHealth").getVirtualNetworkGatewayVpnclientConnectionHealthOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayVpnclientConnectionHealth","getVirtualNetworkGatewayVpnclientConnectionHealthOutput"], () => require("./getVirtualNetworkGatewayVpnclientConnectionHealth"));

export { GetVirtualNetworkGatewayVpnclientIpsecParametersArgs, GetVirtualNetworkGatewayVpnclientIpsecParametersResult, GetVirtualNetworkGatewayVpnclientIpsecParametersOutputArgs } from "./getVirtualNetworkGatewayVpnclientIpsecParameters";
export const getVirtualNetworkGatewayVpnclientIpsecParameters: typeof import("./getVirtualNetworkGatewayVpnclientIpsecParameters").getVirtualNetworkGatewayVpnclientIpsecParameters = null as any;
export const getVirtualNetworkGatewayVpnclientIpsecParametersOutput: typeof import("./getVirtualNetworkGatewayVpnclientIpsecParameters").getVirtualNetworkGatewayVpnclientIpsecParametersOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayVpnclientIpsecParameters","getVirtualNetworkGatewayVpnclientIpsecParametersOutput"], () => require("./getVirtualNetworkGatewayVpnclientIpsecParameters"));

export { GetVirtualNetworkPeeringArgs, GetVirtualNetworkPeeringResult, GetVirtualNetworkPeeringOutputArgs } from "./getVirtualNetworkPeering";
export const getVirtualNetworkPeering: typeof import("./getVirtualNetworkPeering").getVirtualNetworkPeering = null as any;
export const getVirtualNetworkPeeringOutput: typeof import("./getVirtualNetworkPeering").getVirtualNetworkPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkPeering","getVirtualNetworkPeeringOutput"], () => require("./getVirtualNetworkPeering"));

export { GetVirtualNetworkTapArgs, GetVirtualNetworkTapResult, GetVirtualNetworkTapOutputArgs } from "./getVirtualNetworkTap";
export const getVirtualNetworkTap: typeof import("./getVirtualNetworkTap").getVirtualNetworkTap = null as any;
export const getVirtualNetworkTapOutput: typeof import("./getVirtualNetworkTap").getVirtualNetworkTapOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkTap","getVirtualNetworkTapOutput"], () => require("./getVirtualNetworkTap"));

export { GetVirtualRouterArgs, GetVirtualRouterResult, GetVirtualRouterOutputArgs } from "./getVirtualRouter";
export const getVirtualRouter: typeof import("./getVirtualRouter").getVirtualRouter = null as any;
export const getVirtualRouterOutput: typeof import("./getVirtualRouter").getVirtualRouterOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualRouter","getVirtualRouterOutput"], () => require("./getVirtualRouter"));

export { GetVirtualRouterPeeringArgs, GetVirtualRouterPeeringResult, GetVirtualRouterPeeringOutputArgs } from "./getVirtualRouterPeering";
export const getVirtualRouterPeering: typeof import("./getVirtualRouterPeering").getVirtualRouterPeering = null as any;
export const getVirtualRouterPeeringOutput: typeof import("./getVirtualRouterPeering").getVirtualRouterPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualRouterPeering","getVirtualRouterPeeringOutput"], () => require("./getVirtualRouterPeering"));

export { GetVirtualWanArgs, GetVirtualWanResult, GetVirtualWanOutputArgs } from "./getVirtualWan";
export const getVirtualWan: typeof import("./getVirtualWan").getVirtualWan = null as any;
export const getVirtualWanOutput: typeof import("./getVirtualWan").getVirtualWanOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualWan","getVirtualWanOutput"], () => require("./getVirtualWan"));

export { GetVpnConnectionArgs, GetVpnConnectionResult, GetVpnConnectionOutputArgs } from "./getVpnConnection";
export const getVpnConnection: typeof import("./getVpnConnection").getVpnConnection = null as any;
export const getVpnConnectionOutput: typeof import("./getVpnConnection").getVpnConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getVpnConnection","getVpnConnectionOutput"], () => require("./getVpnConnection"));

export { GetVpnGatewayArgs, GetVpnGatewayResult, GetVpnGatewayOutputArgs } from "./getVpnGateway";
export const getVpnGateway: typeof import("./getVpnGateway").getVpnGateway = null as any;
export const getVpnGatewayOutput: typeof import("./getVpnGateway").getVpnGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getVpnGateway","getVpnGatewayOutput"], () => require("./getVpnGateway"));

export { GetVpnLinkConnectionIkeSasArgs, GetVpnLinkConnectionIkeSasResult, GetVpnLinkConnectionIkeSasOutputArgs } from "./getVpnLinkConnectionIkeSas";
export const getVpnLinkConnectionIkeSas: typeof import("./getVpnLinkConnectionIkeSas").getVpnLinkConnectionIkeSas = null as any;
export const getVpnLinkConnectionIkeSasOutput: typeof import("./getVpnLinkConnectionIkeSas").getVpnLinkConnectionIkeSasOutput = null as any;
utilities.lazyLoad(exports, ["getVpnLinkConnectionIkeSas","getVpnLinkConnectionIkeSasOutput"], () => require("./getVpnLinkConnectionIkeSas"));

export { GetVpnServerConfigurationArgs, GetVpnServerConfigurationResult, GetVpnServerConfigurationOutputArgs } from "./getVpnServerConfiguration";
export const getVpnServerConfiguration: typeof import("./getVpnServerConfiguration").getVpnServerConfiguration = null as any;
export const getVpnServerConfigurationOutput: typeof import("./getVpnServerConfiguration").getVpnServerConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getVpnServerConfiguration","getVpnServerConfigurationOutput"], () => require("./getVpnServerConfiguration"));

export { GetVpnSiteArgs, GetVpnSiteResult, GetVpnSiteOutputArgs } from "./getVpnSite";
export const getVpnSite: typeof import("./getVpnSite").getVpnSite = null as any;
export const getVpnSiteOutput: typeof import("./getVpnSite").getVpnSiteOutput = null as any;
utilities.lazyLoad(exports, ["getVpnSite","getVpnSiteOutput"], () => require("./getVpnSite"));

export { GetWebApplicationFirewallPolicyArgs, GetWebApplicationFirewallPolicyResult, GetWebApplicationFirewallPolicyOutputArgs } from "./getWebApplicationFirewallPolicy";
export const getWebApplicationFirewallPolicy: typeof import("./getWebApplicationFirewallPolicy").getWebApplicationFirewallPolicy = null as any;
export const getWebApplicationFirewallPolicyOutput: typeof import("./getWebApplicationFirewallPolicy").getWebApplicationFirewallPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getWebApplicationFirewallPolicy","getWebApplicationFirewallPolicyOutput"], () => require("./getWebApplicationFirewallPolicy"));

export { HubRouteTableArgs } from "./hubRouteTable";
export type HubRouteTable = import("./hubRouteTable").HubRouteTable;
export const HubRouteTable: typeof import("./hubRouteTable").HubRouteTable = null as any;
utilities.lazyLoad(exports, ["HubRouteTable"], () => require("./hubRouteTable"));

export { HubVirtualNetworkConnectionArgs } from "./hubVirtualNetworkConnection";
export type HubVirtualNetworkConnection = import("./hubVirtualNetworkConnection").HubVirtualNetworkConnection;
export const HubVirtualNetworkConnection: typeof import("./hubVirtualNetworkConnection").HubVirtualNetworkConnection = null as any;
utilities.lazyLoad(exports, ["HubVirtualNetworkConnection"], () => require("./hubVirtualNetworkConnection"));

export { InboundNatRuleArgs } from "./inboundNatRule";
export type InboundNatRule = import("./inboundNatRule").InboundNatRule;
export const InboundNatRule: typeof import("./inboundNatRule").InboundNatRule = null as any;
utilities.lazyLoad(exports, ["InboundNatRule"], () => require("./inboundNatRule"));

export { InterfaceEndpointArgs } from "./interfaceEndpoint";
export type InterfaceEndpoint = import("./interfaceEndpoint").InterfaceEndpoint;
export const InterfaceEndpoint: typeof import("./interfaceEndpoint").InterfaceEndpoint = null as any;
utilities.lazyLoad(exports, ["InterfaceEndpoint"], () => require("./interfaceEndpoint"));

export { IpAllocationArgs } from "./ipAllocation";
export type IpAllocation = import("./ipAllocation").IpAllocation;
export const IpAllocation: typeof import("./ipAllocation").IpAllocation = null as any;
utilities.lazyLoad(exports, ["IpAllocation"], () => require("./ipAllocation"));

export { IpGroupArgs } from "./ipGroup";
export type IpGroup = import("./ipGroup").IpGroup;
export const IpGroup: typeof import("./ipGroup").IpGroup = null as any;
utilities.lazyLoad(exports, ["IpGroup"], () => require("./ipGroup"));

export { IpamPoolArgs } from "./ipamPool";
export type IpamPool = import("./ipamPool").IpamPool;
export const IpamPool: typeof import("./ipamPool").IpamPool = null as any;
utilities.lazyLoad(exports, ["IpamPool"], () => require("./ipamPool"));

export { ListActiveConnectivityConfigurationArgs, ListActiveConnectivityConfigurationResult, ListActiveConnectivityConfigurationOutputArgs } from "./listActiveConnectivityConfiguration";
export const listActiveConnectivityConfiguration: typeof import("./listActiveConnectivityConfiguration").listActiveConnectivityConfiguration = null as any;
export const listActiveConnectivityConfigurationOutput: typeof import("./listActiveConnectivityConfiguration").listActiveConnectivityConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["listActiveConnectivityConfiguration","listActiveConnectivityConfigurationOutput"], () => require("./listActiveConnectivityConfiguration"));

export { ListActiveConnectivityConfigurationsArgs, ListActiveConnectivityConfigurationsResult, ListActiveConnectivityConfigurationsOutputArgs } from "./listActiveConnectivityConfigurations";
export const listActiveConnectivityConfigurations: typeof import("./listActiveConnectivityConfigurations").listActiveConnectivityConfigurations = null as any;
export const listActiveConnectivityConfigurationsOutput: typeof import("./listActiveConnectivityConfigurations").listActiveConnectivityConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["listActiveConnectivityConfigurations","listActiveConnectivityConfigurationsOutput"], () => require("./listActiveConnectivityConfigurations"));

export { ListActiveSecurityAdminRuleArgs, ListActiveSecurityAdminRuleResult, ListActiveSecurityAdminRuleOutputArgs } from "./listActiveSecurityAdminRule";
export const listActiveSecurityAdminRule: typeof import("./listActiveSecurityAdminRule").listActiveSecurityAdminRule = null as any;
export const listActiveSecurityAdminRuleOutput: typeof import("./listActiveSecurityAdminRule").listActiveSecurityAdminRuleOutput = null as any;
utilities.lazyLoad(exports, ["listActiveSecurityAdminRule","listActiveSecurityAdminRuleOutput"], () => require("./listActiveSecurityAdminRule"));

export { ListActiveSecurityAdminRulesArgs, ListActiveSecurityAdminRulesResult, ListActiveSecurityAdminRulesOutputArgs } from "./listActiveSecurityAdminRules";
export const listActiveSecurityAdminRules: typeof import("./listActiveSecurityAdminRules").listActiveSecurityAdminRules = null as any;
export const listActiveSecurityAdminRulesOutput: typeof import("./listActiveSecurityAdminRules").listActiveSecurityAdminRulesOutput = null as any;
utilities.lazyLoad(exports, ["listActiveSecurityAdminRules","listActiveSecurityAdminRulesOutput"], () => require("./listActiveSecurityAdminRules"));

export { ListActiveSecurityUserRuleArgs, ListActiveSecurityUserRuleResult, ListActiveSecurityUserRuleOutputArgs } from "./listActiveSecurityUserRule";
export const listActiveSecurityUserRule: typeof import("./listActiveSecurityUserRule").listActiveSecurityUserRule = null as any;
export const listActiveSecurityUserRuleOutput: typeof import("./listActiveSecurityUserRule").listActiveSecurityUserRuleOutput = null as any;
utilities.lazyLoad(exports, ["listActiveSecurityUserRule","listActiveSecurityUserRuleOutput"], () => require("./listActiveSecurityUserRule"));

export { ListActiveSecurityUserRulesArgs, ListActiveSecurityUserRulesResult, ListActiveSecurityUserRulesOutputArgs } from "./listActiveSecurityUserRules";
export const listActiveSecurityUserRules: typeof import("./listActiveSecurityUserRules").listActiveSecurityUserRules = null as any;
export const listActiveSecurityUserRulesOutput: typeof import("./listActiveSecurityUserRules").listActiveSecurityUserRulesOutput = null as any;
utilities.lazyLoad(exports, ["listActiveSecurityUserRules","listActiveSecurityUserRulesOutput"], () => require("./listActiveSecurityUserRules"));

export { ListEffectiveConnectivityConfigurationArgs, ListEffectiveConnectivityConfigurationResult, ListEffectiveConnectivityConfigurationOutputArgs } from "./listEffectiveConnectivityConfiguration";
export const listEffectiveConnectivityConfiguration: typeof import("./listEffectiveConnectivityConfiguration").listEffectiveConnectivityConfiguration = null as any;
export const listEffectiveConnectivityConfigurationOutput: typeof import("./listEffectiveConnectivityConfiguration").listEffectiveConnectivityConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["listEffectiveConnectivityConfiguration","listEffectiveConnectivityConfigurationOutput"], () => require("./listEffectiveConnectivityConfiguration"));

export { ListEffectiveVirtualNetworkByNetworkGroupArgs, ListEffectiveVirtualNetworkByNetworkGroupResult, ListEffectiveVirtualNetworkByNetworkGroupOutputArgs } from "./listEffectiveVirtualNetworkByNetworkGroup";
export const listEffectiveVirtualNetworkByNetworkGroup: typeof import("./listEffectiveVirtualNetworkByNetworkGroup").listEffectiveVirtualNetworkByNetworkGroup = null as any;
export const listEffectiveVirtualNetworkByNetworkGroupOutput: typeof import("./listEffectiveVirtualNetworkByNetworkGroup").listEffectiveVirtualNetworkByNetworkGroupOutput = null as any;
utilities.lazyLoad(exports, ["listEffectiveVirtualNetworkByNetworkGroup","listEffectiveVirtualNetworkByNetworkGroupOutput"], () => require("./listEffectiveVirtualNetworkByNetworkGroup"));

export { ListEffectiveVirtualNetworkByNetworkManagerArgs, ListEffectiveVirtualNetworkByNetworkManagerResult, ListEffectiveVirtualNetworkByNetworkManagerOutputArgs } from "./listEffectiveVirtualNetworkByNetworkManager";
export const listEffectiveVirtualNetworkByNetworkManager: typeof import("./listEffectiveVirtualNetworkByNetworkManager").listEffectiveVirtualNetworkByNetworkManager = null as any;
export const listEffectiveVirtualNetworkByNetworkManagerOutput: typeof import("./listEffectiveVirtualNetworkByNetworkManager").listEffectiveVirtualNetworkByNetworkManagerOutput = null as any;
utilities.lazyLoad(exports, ["listEffectiveVirtualNetworkByNetworkManager","listEffectiveVirtualNetworkByNetworkManagerOutput"], () => require("./listEffectiveVirtualNetworkByNetworkManager"));

export { ListFirewallPolicyIdpsSignatureArgs, ListFirewallPolicyIdpsSignatureResult, ListFirewallPolicyIdpsSignatureOutputArgs } from "./listFirewallPolicyIdpsSignature";
export const listFirewallPolicyIdpsSignature: typeof import("./listFirewallPolicyIdpsSignature").listFirewallPolicyIdpsSignature = null as any;
export const listFirewallPolicyIdpsSignatureOutput: typeof import("./listFirewallPolicyIdpsSignature").listFirewallPolicyIdpsSignatureOutput = null as any;
utilities.lazyLoad(exports, ["listFirewallPolicyIdpsSignature","listFirewallPolicyIdpsSignatureOutput"], () => require("./listFirewallPolicyIdpsSignature"));

export { ListFirewallPolicyIdpsSignaturesFilterValueArgs, ListFirewallPolicyIdpsSignaturesFilterValueResult, ListFirewallPolicyIdpsSignaturesFilterValueOutputArgs } from "./listFirewallPolicyIdpsSignaturesFilterValue";
export const listFirewallPolicyIdpsSignaturesFilterValue: typeof import("./listFirewallPolicyIdpsSignaturesFilterValue").listFirewallPolicyIdpsSignaturesFilterValue = null as any;
export const listFirewallPolicyIdpsSignaturesFilterValueOutput: typeof import("./listFirewallPolicyIdpsSignaturesFilterValue").listFirewallPolicyIdpsSignaturesFilterValueOutput = null as any;
utilities.lazyLoad(exports, ["listFirewallPolicyIdpsSignaturesFilterValue","listFirewallPolicyIdpsSignaturesFilterValueOutput"], () => require("./listFirewallPolicyIdpsSignaturesFilterValue"));

export { ListIpamPoolAssociatedResourcesArgs, ListIpamPoolAssociatedResourcesResult, ListIpamPoolAssociatedResourcesOutputArgs } from "./listIpamPoolAssociatedResources";
export const listIpamPoolAssociatedResources: typeof import("./listIpamPoolAssociatedResources").listIpamPoolAssociatedResources = null as any;
export const listIpamPoolAssociatedResourcesOutput: typeof import("./listIpamPoolAssociatedResources").listIpamPoolAssociatedResourcesOutput = null as any;
utilities.lazyLoad(exports, ["listIpamPoolAssociatedResources","listIpamPoolAssociatedResourcesOutput"], () => require("./listIpamPoolAssociatedResources"));

export { ListListEffectiveVirtualNetworkByNetworkGroupArgs, ListListEffectiveVirtualNetworkByNetworkGroupResult, ListListEffectiveVirtualNetworkByNetworkGroupOutputArgs } from "./listListEffectiveVirtualNetworkByNetworkGroup";
export const listListEffectiveVirtualNetworkByNetworkGroup: typeof import("./listListEffectiveVirtualNetworkByNetworkGroup").listListEffectiveVirtualNetworkByNetworkGroup = null as any;
export const listListEffectiveVirtualNetworkByNetworkGroupOutput: typeof import("./listListEffectiveVirtualNetworkByNetworkGroup").listListEffectiveVirtualNetworkByNetworkGroupOutput = null as any;
utilities.lazyLoad(exports, ["listListEffectiveVirtualNetworkByNetworkGroup","listListEffectiveVirtualNetworkByNetworkGroupOutput"], () => require("./listListEffectiveVirtualNetworkByNetworkGroup"));

export { ListNetworkManagerDeploymentStatusArgs, ListNetworkManagerDeploymentStatusResult, ListNetworkManagerDeploymentStatusOutputArgs } from "./listNetworkManagerDeploymentStatus";
export const listNetworkManagerDeploymentStatus: typeof import("./listNetworkManagerDeploymentStatus").listNetworkManagerDeploymentStatus = null as any;
export const listNetworkManagerDeploymentStatusOutput: typeof import("./listNetworkManagerDeploymentStatus").listNetworkManagerDeploymentStatusOutput = null as any;
utilities.lazyLoad(exports, ["listNetworkManagerDeploymentStatus","listNetworkManagerDeploymentStatusOutput"], () => require("./listNetworkManagerDeploymentStatus"));

export { ListNetworkManagerEffectiveConnectivityConfigurationsArgs, ListNetworkManagerEffectiveConnectivityConfigurationsResult, ListNetworkManagerEffectiveConnectivityConfigurationsOutputArgs } from "./listNetworkManagerEffectiveConnectivityConfigurations";
export const listNetworkManagerEffectiveConnectivityConfigurations: typeof import("./listNetworkManagerEffectiveConnectivityConfigurations").listNetworkManagerEffectiveConnectivityConfigurations = null as any;
export const listNetworkManagerEffectiveConnectivityConfigurationsOutput: typeof import("./listNetworkManagerEffectiveConnectivityConfigurations").listNetworkManagerEffectiveConnectivityConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["listNetworkManagerEffectiveConnectivityConfigurations","listNetworkManagerEffectiveConnectivityConfigurationsOutput"], () => require("./listNetworkManagerEffectiveConnectivityConfigurations"));

export { ListNetworkManagerEffectiveSecurityAdminRuleArgs, ListNetworkManagerEffectiveSecurityAdminRuleResult, ListNetworkManagerEffectiveSecurityAdminRuleOutputArgs } from "./listNetworkManagerEffectiveSecurityAdminRule";
export const listNetworkManagerEffectiveSecurityAdminRule: typeof import("./listNetworkManagerEffectiveSecurityAdminRule").listNetworkManagerEffectiveSecurityAdminRule = null as any;
export const listNetworkManagerEffectiveSecurityAdminRuleOutput: typeof import("./listNetworkManagerEffectiveSecurityAdminRule").listNetworkManagerEffectiveSecurityAdminRuleOutput = null as any;
utilities.lazyLoad(exports, ["listNetworkManagerEffectiveSecurityAdminRule","listNetworkManagerEffectiveSecurityAdminRuleOutput"], () => require("./listNetworkManagerEffectiveSecurityAdminRule"));

export { ListNetworkManagerEffectiveSecurityAdminRulesArgs, ListNetworkManagerEffectiveSecurityAdminRulesResult, ListNetworkManagerEffectiveSecurityAdminRulesOutputArgs } from "./listNetworkManagerEffectiveSecurityAdminRules";
export const listNetworkManagerEffectiveSecurityAdminRules: typeof import("./listNetworkManagerEffectiveSecurityAdminRules").listNetworkManagerEffectiveSecurityAdminRules = null as any;
export const listNetworkManagerEffectiveSecurityAdminRulesOutput: typeof import("./listNetworkManagerEffectiveSecurityAdminRules").listNetworkManagerEffectiveSecurityAdminRulesOutput = null as any;
utilities.lazyLoad(exports, ["listNetworkManagerEffectiveSecurityAdminRules","listNetworkManagerEffectiveSecurityAdminRulesOutput"], () => require("./listNetworkManagerEffectiveSecurityAdminRules"));

export { ListVpnLinkConnectionDefaultSharedKeyArgs, ListVpnLinkConnectionDefaultSharedKeyResult, ListVpnLinkConnectionDefaultSharedKeyOutputArgs } from "./listVpnLinkConnectionDefaultSharedKey";
export const listVpnLinkConnectionDefaultSharedKey: typeof import("./listVpnLinkConnectionDefaultSharedKey").listVpnLinkConnectionDefaultSharedKey = null as any;
export const listVpnLinkConnectionDefaultSharedKeyOutput: typeof import("./listVpnLinkConnectionDefaultSharedKey").listVpnLinkConnectionDefaultSharedKeyOutput = null as any;
utilities.lazyLoad(exports, ["listVpnLinkConnectionDefaultSharedKey","listVpnLinkConnectionDefaultSharedKeyOutput"], () => require("./listVpnLinkConnectionDefaultSharedKey"));

export { LoadBalancerArgs } from "./loadBalancer";
export type LoadBalancer = import("./loadBalancer").LoadBalancer;
export const LoadBalancer: typeof import("./loadBalancer").LoadBalancer = null as any;
utilities.lazyLoad(exports, ["LoadBalancer"], () => require("./loadBalancer"));

export { LoadBalancerBackendAddressPoolArgs } from "./loadBalancerBackendAddressPool";
export type LoadBalancerBackendAddressPool = import("./loadBalancerBackendAddressPool").LoadBalancerBackendAddressPool;
export const LoadBalancerBackendAddressPool: typeof import("./loadBalancerBackendAddressPool").LoadBalancerBackendAddressPool = null as any;
utilities.lazyLoad(exports, ["LoadBalancerBackendAddressPool"], () => require("./loadBalancerBackendAddressPool"));

export { LocalNetworkGatewayArgs } from "./localNetworkGateway";
export type LocalNetworkGateway = import("./localNetworkGateway").LocalNetworkGateway;
export const LocalNetworkGateway: typeof import("./localNetworkGateway").LocalNetworkGateway = null as any;
utilities.lazyLoad(exports, ["LocalNetworkGateway"], () => require("./localNetworkGateway"));

export { ManagementGroupNetworkManagerConnectionArgs } from "./managementGroupNetworkManagerConnection";
export type ManagementGroupNetworkManagerConnection = import("./managementGroupNetworkManagerConnection").ManagementGroupNetworkManagerConnection;
export const ManagementGroupNetworkManagerConnection: typeof import("./managementGroupNetworkManagerConnection").ManagementGroupNetworkManagerConnection = null as any;
utilities.lazyLoad(exports, ["ManagementGroupNetworkManagerConnection"], () => require("./managementGroupNetworkManagerConnection"));

export { NatGatewayArgs } from "./natGateway";
export type NatGateway = import("./natGateway").NatGateway;
export const NatGateway: typeof import("./natGateway").NatGateway = null as any;
utilities.lazyLoad(exports, ["NatGateway"], () => require("./natGateway"));

export { NatRuleArgs } from "./natRule";
export type NatRule = import("./natRule").NatRule;
export const NatRule: typeof import("./natRule").NatRule = null as any;
utilities.lazyLoad(exports, ["NatRule"], () => require("./natRule"));

export { NetworkGroupArgs } from "./networkGroup";
export type NetworkGroup = import("./networkGroup").NetworkGroup;
export const NetworkGroup: typeof import("./networkGroup").NetworkGroup = null as any;
utilities.lazyLoad(exports, ["NetworkGroup"], () => require("./networkGroup"));

export { NetworkInterfaceArgs } from "./networkInterface";
export type NetworkInterface = import("./networkInterface").NetworkInterface;
export const NetworkInterface: typeof import("./networkInterface").NetworkInterface = null as any;
utilities.lazyLoad(exports, ["NetworkInterface"], () => require("./networkInterface"));

export { NetworkInterfaceTapConfigurationArgs } from "./networkInterfaceTapConfiguration";
export type NetworkInterfaceTapConfiguration = import("./networkInterfaceTapConfiguration").NetworkInterfaceTapConfiguration;
export const NetworkInterfaceTapConfiguration: typeof import("./networkInterfaceTapConfiguration").NetworkInterfaceTapConfiguration = null as any;
utilities.lazyLoad(exports, ["NetworkInterfaceTapConfiguration"], () => require("./networkInterfaceTapConfiguration"));

export { NetworkManagerArgs } from "./networkManager";
export type NetworkManager = import("./networkManager").NetworkManager;
export const NetworkManager: typeof import("./networkManager").NetworkManager = null as any;
utilities.lazyLoad(exports, ["NetworkManager"], () => require("./networkManager"));

export { NetworkManagerRoutingConfigurationArgs } from "./networkManagerRoutingConfiguration";
export type NetworkManagerRoutingConfiguration = import("./networkManagerRoutingConfiguration").NetworkManagerRoutingConfiguration;
export const NetworkManagerRoutingConfiguration: typeof import("./networkManagerRoutingConfiguration").NetworkManagerRoutingConfiguration = null as any;
utilities.lazyLoad(exports, ["NetworkManagerRoutingConfiguration"], () => require("./networkManagerRoutingConfiguration"));

export { NetworkProfileArgs } from "./networkProfile";
export type NetworkProfile = import("./networkProfile").NetworkProfile;
export const NetworkProfile: typeof import("./networkProfile").NetworkProfile = null as any;
utilities.lazyLoad(exports, ["NetworkProfile"], () => require("./networkProfile"));

export { NetworkSecurityGroupArgs } from "./networkSecurityGroup";
export type NetworkSecurityGroup = import("./networkSecurityGroup").NetworkSecurityGroup;
export const NetworkSecurityGroup: typeof import("./networkSecurityGroup").NetworkSecurityGroup = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityGroup"], () => require("./networkSecurityGroup"));

export { NetworkSecurityPerimeterArgs } from "./networkSecurityPerimeter";
export type NetworkSecurityPerimeter = import("./networkSecurityPerimeter").NetworkSecurityPerimeter;
export const NetworkSecurityPerimeter: typeof import("./networkSecurityPerimeter").NetworkSecurityPerimeter = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityPerimeter"], () => require("./networkSecurityPerimeter"));

export { NetworkSecurityPerimeterAccessRuleArgs } from "./networkSecurityPerimeterAccessRule";
export type NetworkSecurityPerimeterAccessRule = import("./networkSecurityPerimeterAccessRule").NetworkSecurityPerimeterAccessRule;
export const NetworkSecurityPerimeterAccessRule: typeof import("./networkSecurityPerimeterAccessRule").NetworkSecurityPerimeterAccessRule = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityPerimeterAccessRule"], () => require("./networkSecurityPerimeterAccessRule"));

export { NetworkSecurityPerimeterAssociationArgs } from "./networkSecurityPerimeterAssociation";
export type NetworkSecurityPerimeterAssociation = import("./networkSecurityPerimeterAssociation").NetworkSecurityPerimeterAssociation;
export const NetworkSecurityPerimeterAssociation: typeof import("./networkSecurityPerimeterAssociation").NetworkSecurityPerimeterAssociation = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityPerimeterAssociation"], () => require("./networkSecurityPerimeterAssociation"));

export { NetworkSecurityPerimeterLinkArgs } from "./networkSecurityPerimeterLink";
export type NetworkSecurityPerimeterLink = import("./networkSecurityPerimeterLink").NetworkSecurityPerimeterLink;
export const NetworkSecurityPerimeterLink: typeof import("./networkSecurityPerimeterLink").NetworkSecurityPerimeterLink = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityPerimeterLink"], () => require("./networkSecurityPerimeterLink"));

export { NetworkSecurityPerimeterLoggingConfigurationArgs } from "./networkSecurityPerimeterLoggingConfiguration";
export type NetworkSecurityPerimeterLoggingConfiguration = import("./networkSecurityPerimeterLoggingConfiguration").NetworkSecurityPerimeterLoggingConfiguration;
export const NetworkSecurityPerimeterLoggingConfiguration: typeof import("./networkSecurityPerimeterLoggingConfiguration").NetworkSecurityPerimeterLoggingConfiguration = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityPerimeterLoggingConfiguration"], () => require("./networkSecurityPerimeterLoggingConfiguration"));

export { NetworkSecurityPerimeterProfileArgs } from "./networkSecurityPerimeterProfile";
export type NetworkSecurityPerimeterProfile = import("./networkSecurityPerimeterProfile").NetworkSecurityPerimeterProfile;
export const NetworkSecurityPerimeterProfile: typeof import("./networkSecurityPerimeterProfile").NetworkSecurityPerimeterProfile = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityPerimeterProfile"], () => require("./networkSecurityPerimeterProfile"));

export { NetworkVirtualApplianceArgs } from "./networkVirtualAppliance";
export type NetworkVirtualAppliance = import("./networkVirtualAppliance").NetworkVirtualAppliance;
export const NetworkVirtualAppliance: typeof import("./networkVirtualAppliance").NetworkVirtualAppliance = null as any;
utilities.lazyLoad(exports, ["NetworkVirtualAppliance"], () => require("./networkVirtualAppliance"));

export { NetworkVirtualApplianceConnectionArgs } from "./networkVirtualApplianceConnection";
export type NetworkVirtualApplianceConnection = import("./networkVirtualApplianceConnection").NetworkVirtualApplianceConnection;
export const NetworkVirtualApplianceConnection: typeof import("./networkVirtualApplianceConnection").NetworkVirtualApplianceConnection = null as any;
utilities.lazyLoad(exports, ["NetworkVirtualApplianceConnection"], () => require("./networkVirtualApplianceConnection"));

export { NetworkWatcherArgs } from "./networkWatcher";
export type NetworkWatcher = import("./networkWatcher").NetworkWatcher;
export const NetworkWatcher: typeof import("./networkWatcher").NetworkWatcher = null as any;
utilities.lazyLoad(exports, ["NetworkWatcher"], () => require("./networkWatcher"));

export { NspAccessRuleArgs } from "./nspAccessRule";
export type NspAccessRule = import("./nspAccessRule").NspAccessRule;
export const NspAccessRule: typeof import("./nspAccessRule").NspAccessRule = null as any;
utilities.lazyLoad(exports, ["NspAccessRule"], () => require("./nspAccessRule"));

export { NspAssociationArgs } from "./nspAssociation";
export type NspAssociation = import("./nspAssociation").NspAssociation;
export const NspAssociation: typeof import("./nspAssociation").NspAssociation = null as any;
utilities.lazyLoad(exports, ["NspAssociation"], () => require("./nspAssociation"));

export { NspLinkArgs } from "./nspLink";
export type NspLink = import("./nspLink").NspLink;
export const NspLink: typeof import("./nspLink").NspLink = null as any;
utilities.lazyLoad(exports, ["NspLink"], () => require("./nspLink"));

export { NspProfileArgs } from "./nspProfile";
export type NspProfile = import("./nspProfile").NspProfile;
export const NspProfile: typeof import("./nspProfile").NspProfile = null as any;
utilities.lazyLoad(exports, ["NspProfile"], () => require("./nspProfile"));

export { P2sVpnGatewayArgs } from "./p2sVpnGateway";
export type P2sVpnGateway = import("./p2sVpnGateway").P2sVpnGateway;
export const P2sVpnGateway: typeof import("./p2sVpnGateway").P2sVpnGateway = null as any;
utilities.lazyLoad(exports, ["P2sVpnGateway"], () => require("./p2sVpnGateway"));

export { P2sVpnServerConfigurationArgs } from "./p2sVpnServerConfiguration";
export type P2sVpnServerConfiguration = import("./p2sVpnServerConfiguration").P2sVpnServerConfiguration;
export const P2sVpnServerConfiguration: typeof import("./p2sVpnServerConfiguration").P2sVpnServerConfiguration = null as any;
utilities.lazyLoad(exports, ["P2sVpnServerConfiguration"], () => require("./p2sVpnServerConfiguration"));

export { PacketCaptureArgs } from "./packetCapture";
export type PacketCapture = import("./packetCapture").PacketCapture;
export const PacketCapture: typeof import("./packetCapture").PacketCapture = null as any;
utilities.lazyLoad(exports, ["PacketCapture"], () => require("./packetCapture"));

export { PrivateDnsZoneGroupArgs } from "./privateDnsZoneGroup";
export type PrivateDnsZoneGroup = import("./privateDnsZoneGroup").PrivateDnsZoneGroup;
export const PrivateDnsZoneGroup: typeof import("./privateDnsZoneGroup").PrivateDnsZoneGroup = null as any;
utilities.lazyLoad(exports, ["PrivateDnsZoneGroup"], () => require("./privateDnsZoneGroup"));

export { PrivateEndpointArgs } from "./privateEndpoint";
export type PrivateEndpoint = import("./privateEndpoint").PrivateEndpoint;
export const PrivateEndpoint: typeof import("./privateEndpoint").PrivateEndpoint = null as any;
utilities.lazyLoad(exports, ["PrivateEndpoint"], () => require("./privateEndpoint"));

export { PrivateLinkServiceArgs } from "./privateLinkService";
export type PrivateLinkService = import("./privateLinkService").PrivateLinkService;
export const PrivateLinkService: typeof import("./privateLinkService").PrivateLinkService = null as any;
utilities.lazyLoad(exports, ["PrivateLinkService"], () => require("./privateLinkService"));

export { PrivateLinkServicePrivateEndpointConnectionArgs } from "./privateLinkServicePrivateEndpointConnection";
export type PrivateLinkServicePrivateEndpointConnection = import("./privateLinkServicePrivateEndpointConnection").PrivateLinkServicePrivateEndpointConnection;
export const PrivateLinkServicePrivateEndpointConnection: typeof import("./privateLinkServicePrivateEndpointConnection").PrivateLinkServicePrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateLinkServicePrivateEndpointConnection"], () => require("./privateLinkServicePrivateEndpointConnection"));

export { PublicIPAddressArgs } from "./publicIPAddress";
export type PublicIPAddress = import("./publicIPAddress").PublicIPAddress;
export const PublicIPAddress: typeof import("./publicIPAddress").PublicIPAddress = null as any;
utilities.lazyLoad(exports, ["PublicIPAddress"], () => require("./publicIPAddress"));

export { PublicIPPrefixArgs } from "./publicIPPrefix";
export type PublicIPPrefix = import("./publicIPPrefix").PublicIPPrefix;
export const PublicIPPrefix: typeof import("./publicIPPrefix").PublicIPPrefix = null as any;
utilities.lazyLoad(exports, ["PublicIPPrefix"], () => require("./publicIPPrefix"));

export { ReachabilityAnalysisIntentArgs } from "./reachabilityAnalysisIntent";
export type ReachabilityAnalysisIntent = import("./reachabilityAnalysisIntent").ReachabilityAnalysisIntent;
export const ReachabilityAnalysisIntent: typeof import("./reachabilityAnalysisIntent").ReachabilityAnalysisIntent = null as any;
utilities.lazyLoad(exports, ["ReachabilityAnalysisIntent"], () => require("./reachabilityAnalysisIntent"));

export { ReachabilityAnalysisRunArgs } from "./reachabilityAnalysisRun";
export type ReachabilityAnalysisRun = import("./reachabilityAnalysisRun").ReachabilityAnalysisRun;
export const ReachabilityAnalysisRun: typeof import("./reachabilityAnalysisRun").ReachabilityAnalysisRun = null as any;
utilities.lazyLoad(exports, ["ReachabilityAnalysisRun"], () => require("./reachabilityAnalysisRun"));

export { RouteArgs } from "./route";
export type Route = import("./route").Route;
export const Route: typeof import("./route").Route = null as any;
utilities.lazyLoad(exports, ["Route"], () => require("./route"));

export { RouteFilterArgs } from "./routeFilter";
export type RouteFilter = import("./routeFilter").RouteFilter;
export const RouteFilter: typeof import("./routeFilter").RouteFilter = null as any;
utilities.lazyLoad(exports, ["RouteFilter"], () => require("./routeFilter"));

export { RouteFilterRuleArgs } from "./routeFilterRule";
export type RouteFilterRule = import("./routeFilterRule").RouteFilterRule;
export const RouteFilterRule: typeof import("./routeFilterRule").RouteFilterRule = null as any;
utilities.lazyLoad(exports, ["RouteFilterRule"], () => require("./routeFilterRule"));

export { RouteMapArgs } from "./routeMap";
export type RouteMap = import("./routeMap").RouteMap;
export const RouteMap: typeof import("./routeMap").RouteMap = null as any;
utilities.lazyLoad(exports, ["RouteMap"], () => require("./routeMap"));

export { RouteTableArgs } from "./routeTable";
export type RouteTable = import("./routeTable").RouteTable;
export const RouteTable: typeof import("./routeTable").RouteTable = null as any;
utilities.lazyLoad(exports, ["RouteTable"], () => require("./routeTable"));

export { RoutingIntentArgs } from "./routingIntent";
export type RoutingIntent = import("./routingIntent").RoutingIntent;
export const RoutingIntent: typeof import("./routingIntent").RoutingIntent = null as any;
utilities.lazyLoad(exports, ["RoutingIntent"], () => require("./routingIntent"));

export { RoutingRuleArgs } from "./routingRule";
export type RoutingRule = import("./routingRule").RoutingRule;
export const RoutingRule: typeof import("./routingRule").RoutingRule = null as any;
utilities.lazyLoad(exports, ["RoutingRule"], () => require("./routingRule"));

export { RoutingRuleCollectionArgs } from "./routingRuleCollection";
export type RoutingRuleCollection = import("./routingRuleCollection").RoutingRuleCollection;
export const RoutingRuleCollection: typeof import("./routingRuleCollection").RoutingRuleCollection = null as any;
utilities.lazyLoad(exports, ["RoutingRuleCollection"], () => require("./routingRuleCollection"));

export { ScopeConnectionArgs } from "./scopeConnection";
export type ScopeConnection = import("./scopeConnection").ScopeConnection;
export const ScopeConnection: typeof import("./scopeConnection").ScopeConnection = null as any;
utilities.lazyLoad(exports, ["ScopeConnection"], () => require("./scopeConnection"));

export { SecurityAdminConfigurationArgs } from "./securityAdminConfiguration";
export type SecurityAdminConfiguration = import("./securityAdminConfiguration").SecurityAdminConfiguration;
export const SecurityAdminConfiguration: typeof import("./securityAdminConfiguration").SecurityAdminConfiguration = null as any;
utilities.lazyLoad(exports, ["SecurityAdminConfiguration"], () => require("./securityAdminConfiguration"));

export { SecurityPartnerProviderArgs } from "./securityPartnerProvider";
export type SecurityPartnerProvider = import("./securityPartnerProvider").SecurityPartnerProvider;
export const SecurityPartnerProvider: typeof import("./securityPartnerProvider").SecurityPartnerProvider = null as any;
utilities.lazyLoad(exports, ["SecurityPartnerProvider"], () => require("./securityPartnerProvider"));

export { SecurityRuleArgs } from "./securityRule";
export type SecurityRule = import("./securityRule").SecurityRule;
export const SecurityRule: typeof import("./securityRule").SecurityRule = null as any;
utilities.lazyLoad(exports, ["SecurityRule"], () => require("./securityRule"));

export { SecurityUserConfigurationArgs } from "./securityUserConfiguration";
export type SecurityUserConfiguration = import("./securityUserConfiguration").SecurityUserConfiguration;
export const SecurityUserConfiguration: typeof import("./securityUserConfiguration").SecurityUserConfiguration = null as any;
utilities.lazyLoad(exports, ["SecurityUserConfiguration"], () => require("./securityUserConfiguration"));

export { SecurityUserRuleArgs } from "./securityUserRule";
export type SecurityUserRule = import("./securityUserRule").SecurityUserRule;
export const SecurityUserRule: typeof import("./securityUserRule").SecurityUserRule = null as any;
utilities.lazyLoad(exports, ["SecurityUserRule"], () => require("./securityUserRule"));

export { SecurityUserRuleCollectionArgs } from "./securityUserRuleCollection";
export type SecurityUserRuleCollection = import("./securityUserRuleCollection").SecurityUserRuleCollection;
export const SecurityUserRuleCollection: typeof import("./securityUserRuleCollection").SecurityUserRuleCollection = null as any;
utilities.lazyLoad(exports, ["SecurityUserRuleCollection"], () => require("./securityUserRuleCollection"));

export { ServiceEndpointPolicyArgs } from "./serviceEndpointPolicy";
export type ServiceEndpointPolicy = import("./serviceEndpointPolicy").ServiceEndpointPolicy;
export const ServiceEndpointPolicy: typeof import("./serviceEndpointPolicy").ServiceEndpointPolicy = null as any;
utilities.lazyLoad(exports, ["ServiceEndpointPolicy"], () => require("./serviceEndpointPolicy"));

export { ServiceEndpointPolicyDefinitionArgs } from "./serviceEndpointPolicyDefinition";
export type ServiceEndpointPolicyDefinition = import("./serviceEndpointPolicyDefinition").ServiceEndpointPolicyDefinition;
export const ServiceEndpointPolicyDefinition: typeof import("./serviceEndpointPolicyDefinition").ServiceEndpointPolicyDefinition = null as any;
utilities.lazyLoad(exports, ["ServiceEndpointPolicyDefinition"], () => require("./serviceEndpointPolicyDefinition"));

export { StaticCidrArgs } from "./staticCidr";
export type StaticCidr = import("./staticCidr").StaticCidr;
export const StaticCidr: typeof import("./staticCidr").StaticCidr = null as any;
utilities.lazyLoad(exports, ["StaticCidr"], () => require("./staticCidr"));

export { StaticMemberArgs } from "./staticMember";
export type StaticMember = import("./staticMember").StaticMember;
export const StaticMember: typeof import("./staticMember").StaticMember = null as any;
utilities.lazyLoad(exports, ["StaticMember"], () => require("./staticMember"));

export { SubnetArgs } from "./subnet";
export type Subnet = import("./subnet").Subnet;
export const Subnet: typeof import("./subnet").Subnet = null as any;
utilities.lazyLoad(exports, ["Subnet"], () => require("./subnet"));

export { SubscriptionNetworkManagerConnectionArgs } from "./subscriptionNetworkManagerConnection";
export type SubscriptionNetworkManagerConnection = import("./subscriptionNetworkManagerConnection").SubscriptionNetworkManagerConnection;
export const SubscriptionNetworkManagerConnection: typeof import("./subscriptionNetworkManagerConnection").SubscriptionNetworkManagerConnection = null as any;
utilities.lazyLoad(exports, ["SubscriptionNetworkManagerConnection"], () => require("./subscriptionNetworkManagerConnection"));

export { UserRuleArgs } from "./userRule";
export type UserRule = import("./userRule").UserRule;
export const UserRule: typeof import("./userRule").UserRule = null as any;
utilities.lazyLoad(exports, ["UserRule"], () => require("./userRule"));

export { UserRuleCollectionArgs } from "./userRuleCollection";
export type UserRuleCollection = import("./userRuleCollection").UserRuleCollection;
export const UserRuleCollection: typeof import("./userRuleCollection").UserRuleCollection = null as any;
utilities.lazyLoad(exports, ["UserRuleCollection"], () => require("./userRuleCollection"));

export { VerifierWorkspaceArgs } from "./verifierWorkspace";
export type VerifierWorkspace = import("./verifierWorkspace").VerifierWorkspace;
export const VerifierWorkspace: typeof import("./verifierWorkspace").VerifierWorkspace = null as any;
utilities.lazyLoad(exports, ["VerifierWorkspace"], () => require("./verifierWorkspace"));

export { VirtualApplianceSiteArgs } from "./virtualApplianceSite";
export type VirtualApplianceSite = import("./virtualApplianceSite").VirtualApplianceSite;
export const VirtualApplianceSite: typeof import("./virtualApplianceSite").VirtualApplianceSite = null as any;
utilities.lazyLoad(exports, ["VirtualApplianceSite"], () => require("./virtualApplianceSite"));

export { VirtualHubArgs } from "./virtualHub";
export type VirtualHub = import("./virtualHub").VirtualHub;
export const VirtualHub: typeof import("./virtualHub").VirtualHub = null as any;
utilities.lazyLoad(exports, ["VirtualHub"], () => require("./virtualHub"));

export { VirtualHubBgpConnectionArgs } from "./virtualHubBgpConnection";
export type VirtualHubBgpConnection = import("./virtualHubBgpConnection").VirtualHubBgpConnection;
export const VirtualHubBgpConnection: typeof import("./virtualHubBgpConnection").VirtualHubBgpConnection = null as any;
utilities.lazyLoad(exports, ["VirtualHubBgpConnection"], () => require("./virtualHubBgpConnection"));

export { VirtualHubIpConfigurationArgs } from "./virtualHubIpConfiguration";
export type VirtualHubIpConfiguration = import("./virtualHubIpConfiguration").VirtualHubIpConfiguration;
export const VirtualHubIpConfiguration: typeof import("./virtualHubIpConfiguration").VirtualHubIpConfiguration = null as any;
utilities.lazyLoad(exports, ["VirtualHubIpConfiguration"], () => require("./virtualHubIpConfiguration"));

export { VirtualHubRouteTableV2Args } from "./virtualHubRouteTableV2";
export type VirtualHubRouteTableV2 = import("./virtualHubRouteTableV2").VirtualHubRouteTableV2;
export const VirtualHubRouteTableV2: typeof import("./virtualHubRouteTableV2").VirtualHubRouteTableV2 = null as any;
utilities.lazyLoad(exports, ["VirtualHubRouteTableV2"], () => require("./virtualHubRouteTableV2"));

export { VirtualNetworkArgs } from "./virtualNetwork";
export type VirtualNetwork = import("./virtualNetwork").VirtualNetwork;
export const VirtualNetwork: typeof import("./virtualNetwork").VirtualNetwork = null as any;
utilities.lazyLoad(exports, ["VirtualNetwork"], () => require("./virtualNetwork"));

export { VirtualNetworkGatewayArgs } from "./virtualNetworkGateway";
export type VirtualNetworkGateway = import("./virtualNetworkGateway").VirtualNetworkGateway;
export const VirtualNetworkGateway: typeof import("./virtualNetworkGateway").VirtualNetworkGateway = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkGateway"], () => require("./virtualNetworkGateway"));

export { VirtualNetworkGatewayConnectionArgs } from "./virtualNetworkGatewayConnection";
export type VirtualNetworkGatewayConnection = import("./virtualNetworkGatewayConnection").VirtualNetworkGatewayConnection;
export const VirtualNetworkGatewayConnection: typeof import("./virtualNetworkGatewayConnection").VirtualNetworkGatewayConnection = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkGatewayConnection"], () => require("./virtualNetworkGatewayConnection"));

export { VirtualNetworkGatewayNatRuleArgs } from "./virtualNetworkGatewayNatRule";
export type VirtualNetworkGatewayNatRule = import("./virtualNetworkGatewayNatRule").VirtualNetworkGatewayNatRule;
export const VirtualNetworkGatewayNatRule: typeof import("./virtualNetworkGatewayNatRule").VirtualNetworkGatewayNatRule = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkGatewayNatRule"], () => require("./virtualNetworkGatewayNatRule"));

export { VirtualNetworkPeeringArgs } from "./virtualNetworkPeering";
export type VirtualNetworkPeering = import("./virtualNetworkPeering").VirtualNetworkPeering;
export const VirtualNetworkPeering: typeof import("./virtualNetworkPeering").VirtualNetworkPeering = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkPeering"], () => require("./virtualNetworkPeering"));

export { VirtualNetworkTapArgs } from "./virtualNetworkTap";
export type VirtualNetworkTap = import("./virtualNetworkTap").VirtualNetworkTap;
export const VirtualNetworkTap: typeof import("./virtualNetworkTap").VirtualNetworkTap = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkTap"], () => require("./virtualNetworkTap"));

export { VirtualRouterArgs } from "./virtualRouter";
export type VirtualRouter = import("./virtualRouter").VirtualRouter;
export const VirtualRouter: typeof import("./virtualRouter").VirtualRouter = null as any;
utilities.lazyLoad(exports, ["VirtualRouter"], () => require("./virtualRouter"));

export { VirtualRouterPeeringArgs } from "./virtualRouterPeering";
export type VirtualRouterPeering = import("./virtualRouterPeering").VirtualRouterPeering;
export const VirtualRouterPeering: typeof import("./virtualRouterPeering").VirtualRouterPeering = null as any;
utilities.lazyLoad(exports, ["VirtualRouterPeering"], () => require("./virtualRouterPeering"));

export { VirtualWanArgs } from "./virtualWan";
export type VirtualWan = import("./virtualWan").VirtualWan;
export const VirtualWan: typeof import("./virtualWan").VirtualWan = null as any;
utilities.lazyLoad(exports, ["VirtualWan"], () => require("./virtualWan"));

export { VpnConnectionArgs } from "./vpnConnection";
export type VpnConnection = import("./vpnConnection").VpnConnection;
export const VpnConnection: typeof import("./vpnConnection").VpnConnection = null as any;
utilities.lazyLoad(exports, ["VpnConnection"], () => require("./vpnConnection"));

export { VpnGatewayArgs } from "./vpnGateway";
export type VpnGateway = import("./vpnGateway").VpnGateway;
export const VpnGateway: typeof import("./vpnGateway").VpnGateway = null as any;
utilities.lazyLoad(exports, ["VpnGateway"], () => require("./vpnGateway"));

export { VpnServerConfigurationArgs } from "./vpnServerConfiguration";
export type VpnServerConfiguration = import("./vpnServerConfiguration").VpnServerConfiguration;
export const VpnServerConfiguration: typeof import("./vpnServerConfiguration").VpnServerConfiguration = null as any;
utilities.lazyLoad(exports, ["VpnServerConfiguration"], () => require("./vpnServerConfiguration"));

export { VpnSiteArgs } from "./vpnSite";
export type VpnSite = import("./vpnSite").VpnSite;
export const VpnSite: typeof import("./vpnSite").VpnSite = null as any;
utilities.lazyLoad(exports, ["VpnSite"], () => require("./vpnSite"));

export { WebApplicationFirewallPolicyArgs } from "./webApplicationFirewallPolicy";
export type WebApplicationFirewallPolicy = import("./webApplicationFirewallPolicy").WebApplicationFirewallPolicy;
export const WebApplicationFirewallPolicy: typeof import("./webApplicationFirewallPolicy").WebApplicationFirewallPolicy = null as any;
utilities.lazyLoad(exports, ["WebApplicationFirewallPolicy"], () => require("./webApplicationFirewallPolicy"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network:AdminRule":
                return new AdminRule(name, <any>undefined, { urn })
            case "azure-native:network:AdminRuleCollection":
                return new AdminRuleCollection(name, <any>undefined, { urn })
            case "azure-native:network:ApplicationGateway":
                return new ApplicationGateway(name, <any>undefined, { urn })
            case "azure-native:network:ApplicationGatewayPrivateEndpointConnection":
                return new ApplicationGatewayPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:network:ApplicationSecurityGroup":
                return new ApplicationSecurityGroup(name, <any>undefined, { urn })
            case "azure-native:network:AzureFirewall":
                return new AzureFirewall(name, <any>undefined, { urn })
            case "azure-native:network:BastionHost":
                return new BastionHost(name, <any>undefined, { urn })
            case "azure-native:network:ConfigurationPolicyGroup":
                return new ConfigurationPolicyGroup(name, <any>undefined, { urn })
            case "azure-native:network:ConnectionMonitor":
                return new ConnectionMonitor(name, <any>undefined, { urn })
            case "azure-native:network:ConnectivityConfiguration":
                return new ConnectivityConfiguration(name, <any>undefined, { urn })
            case "azure-native:network:CustomIPPrefix":
                return new CustomIPPrefix(name, <any>undefined, { urn })
            case "azure-native:network:DdosCustomPolicy":
                return new DdosCustomPolicy(name, <any>undefined, { urn })
            case "azure-native:network:DdosProtectionPlan":
                return new DdosProtectionPlan(name, <any>undefined, { urn })
            case "azure-native:network:DefaultAdminRule":
                return new DefaultAdminRule(name, <any>undefined, { urn })
            case "azure-native:network:DefaultUserRule":
                return new DefaultUserRule(name, <any>undefined, { urn })
            case "azure-native:network:DscpConfiguration":
                return new DscpConfiguration(name, <any>undefined, { urn })
            case "azure-native:network:ExpressRouteCircuit":
                return new ExpressRouteCircuit(name, <any>undefined, { urn })
            case "azure-native:network:ExpressRouteCircuitAuthorization":
                return new ExpressRouteCircuitAuthorization(name, <any>undefined, { urn })
            case "azure-native:network:ExpressRouteCircuitConnection":
                return new ExpressRouteCircuitConnection(name, <any>undefined, { urn })
            case "azure-native:network:ExpressRouteCircuitPeering":
                return new ExpressRouteCircuitPeering(name, <any>undefined, { urn })
            case "azure-native:network:ExpressRouteConnection":
                return new ExpressRouteConnection(name, <any>undefined, { urn })
            case "azure-native:network:ExpressRouteCrossConnectionPeering":
                return new ExpressRouteCrossConnectionPeering(name, <any>undefined, { urn })
            case "azure-native:network:ExpressRouteGateway":
                return new ExpressRouteGateway(name, <any>undefined, { urn })
            case "azure-native:network:ExpressRoutePort":
                return new ExpressRoutePort(name, <any>undefined, { urn })
            case "azure-native:network:ExpressRoutePortAuthorization":
                return new ExpressRoutePortAuthorization(name, <any>undefined, { urn })
            case "azure-native:network:FirewallPolicy":
                return new FirewallPolicy(name, <any>undefined, { urn })
            case "azure-native:network:FirewallPolicyDraft":
                return new FirewallPolicyDraft(name, <any>undefined, { urn })
            case "azure-native:network:FirewallPolicyRuleCollectionGroup":
                return new FirewallPolicyRuleCollectionGroup(name, <any>undefined, { urn })
            case "azure-native:network:FirewallPolicyRuleCollectionGroupDraft":
                return new FirewallPolicyRuleCollectionGroupDraft(name, <any>undefined, { urn })
            case "azure-native:network:FirewallPolicyRuleGroup":
                return new FirewallPolicyRuleGroup(name, <any>undefined, { urn })
            case "azure-native:network:FlowLog":
                return new FlowLog(name, <any>undefined, { urn })
            case "azure-native:network:HubRouteTable":
                return new HubRouteTable(name, <any>undefined, { urn })
            case "azure-native:network:HubVirtualNetworkConnection":
                return new HubVirtualNetworkConnection(name, <any>undefined, { urn })
            case "azure-native:network:InboundNatRule":
                return new InboundNatRule(name, <any>undefined, { urn })
            case "azure-native:network:InterfaceEndpoint":
                return new InterfaceEndpoint(name, <any>undefined, { urn })
            case "azure-native:network:IpAllocation":
                return new IpAllocation(name, <any>undefined, { urn })
            case "azure-native:network:IpGroup":
                return new IpGroup(name, <any>undefined, { urn })
            case "azure-native:network:IpamPool":
                return new IpamPool(name, <any>undefined, { urn })
            case "azure-native:network:LoadBalancer":
                return new LoadBalancer(name, <any>undefined, { urn })
            case "azure-native:network:LoadBalancerBackendAddressPool":
                return new LoadBalancerBackendAddressPool(name, <any>undefined, { urn })
            case "azure-native:network:LocalNetworkGateway":
                return new LocalNetworkGateway(name, <any>undefined, { urn })
            case "azure-native:network:ManagementGroupNetworkManagerConnection":
                return new ManagementGroupNetworkManagerConnection(name, <any>undefined, { urn })
            case "azure-native:network:NatGateway":
                return new NatGateway(name, <any>undefined, { urn })
            case "azure-native:network:NatRule":
                return new NatRule(name, <any>undefined, { urn })
            case "azure-native:network:NetworkGroup":
                return new NetworkGroup(name, <any>undefined, { urn })
            case "azure-native:network:NetworkInterface":
                return new NetworkInterface(name, <any>undefined, { urn })
            case "azure-native:network:NetworkInterfaceTapConfiguration":
                return new NetworkInterfaceTapConfiguration(name, <any>undefined, { urn })
            case "azure-native:network:NetworkManager":
                return new NetworkManager(name, <any>undefined, { urn })
            case "azure-native:network:NetworkManagerRoutingConfiguration":
                return new NetworkManagerRoutingConfiguration(name, <any>undefined, { urn })
            case "azure-native:network:NetworkProfile":
                return new NetworkProfile(name, <any>undefined, { urn })
            case "azure-native:network:NetworkSecurityGroup":
                return new NetworkSecurityGroup(name, <any>undefined, { urn })
            case "azure-native:network:NetworkSecurityPerimeter":
                return new NetworkSecurityPerimeter(name, <any>undefined, { urn })
            case "azure-native:network:NetworkSecurityPerimeterAccessRule":
                return new NetworkSecurityPerimeterAccessRule(name, <any>undefined, { urn })
            case "azure-native:network:NetworkSecurityPerimeterAssociation":
                return new NetworkSecurityPerimeterAssociation(name, <any>undefined, { urn })
            case "azure-native:network:NetworkSecurityPerimeterLink":
                return new NetworkSecurityPerimeterLink(name, <any>undefined, { urn })
            case "azure-native:network:NetworkSecurityPerimeterLoggingConfiguration":
                return new NetworkSecurityPerimeterLoggingConfiguration(name, <any>undefined, { urn })
            case "azure-native:network:NetworkSecurityPerimeterProfile":
                return new NetworkSecurityPerimeterProfile(name, <any>undefined, { urn })
            case "azure-native:network:NetworkVirtualAppliance":
                return new NetworkVirtualAppliance(name, <any>undefined, { urn })
            case "azure-native:network:NetworkVirtualApplianceConnection":
                return new NetworkVirtualApplianceConnection(name, <any>undefined, { urn })
            case "azure-native:network:NetworkWatcher":
                return new NetworkWatcher(name, <any>undefined, { urn })
            case "azure-native:network:NspAccessRule":
                return new NspAccessRule(name, <any>undefined, { urn })
            case "azure-native:network:NspAssociation":
                return new NspAssociation(name, <any>undefined, { urn })
            case "azure-native:network:NspLink":
                return new NspLink(name, <any>undefined, { urn })
            case "azure-native:network:NspProfile":
                return new NspProfile(name, <any>undefined, { urn })
            case "azure-native:network:P2sVpnGateway":
                return new P2sVpnGateway(name, <any>undefined, { urn })
            case "azure-native:network:P2sVpnServerConfiguration":
                return new P2sVpnServerConfiguration(name, <any>undefined, { urn })
            case "azure-native:network:PacketCapture":
                return new PacketCapture(name, <any>undefined, { urn })
            case "azure-native:network:PrivateDnsZoneGroup":
                return new PrivateDnsZoneGroup(name, <any>undefined, { urn })
            case "azure-native:network:PrivateEndpoint":
                return new PrivateEndpoint(name, <any>undefined, { urn })
            case "azure-native:network:PrivateLinkService":
                return new PrivateLinkService(name, <any>undefined, { urn })
            case "azure-native:network:PrivateLinkServicePrivateEndpointConnection":
                return new PrivateLinkServicePrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:network:PublicIPAddress":
                return new PublicIPAddress(name, <any>undefined, { urn })
            case "azure-native:network:PublicIPPrefix":
                return new PublicIPPrefix(name, <any>undefined, { urn })
            case "azure-native:network:ReachabilityAnalysisIntent":
                return new ReachabilityAnalysisIntent(name, <any>undefined, { urn })
            case "azure-native:network:ReachabilityAnalysisRun":
                return new ReachabilityAnalysisRun(name, <any>undefined, { urn })
            case "azure-native:network:Route":
                return new Route(name, <any>undefined, { urn })
            case "azure-native:network:RouteFilter":
                return new RouteFilter(name, <any>undefined, { urn })
            case "azure-native:network:RouteFilterRule":
                return new RouteFilterRule(name, <any>undefined, { urn })
            case "azure-native:network:RouteMap":
                return new RouteMap(name, <any>undefined, { urn })
            case "azure-native:network:RouteTable":
                return new RouteTable(name, <any>undefined, { urn })
            case "azure-native:network:RoutingIntent":
                return new RoutingIntent(name, <any>undefined, { urn })
            case "azure-native:network:RoutingRule":
                return new RoutingRule(name, <any>undefined, { urn })
            case "azure-native:network:RoutingRuleCollection":
                return new RoutingRuleCollection(name, <any>undefined, { urn })
            case "azure-native:network:ScopeConnection":
                return new ScopeConnection(name, <any>undefined, { urn })
            case "azure-native:network:SecurityAdminConfiguration":
                return new SecurityAdminConfiguration(name, <any>undefined, { urn })
            case "azure-native:network:SecurityPartnerProvider":
                return new SecurityPartnerProvider(name, <any>undefined, { urn })
            case "azure-native:network:SecurityRule":
                return new SecurityRule(name, <any>undefined, { urn })
            case "azure-native:network:SecurityUserConfiguration":
                return new SecurityUserConfiguration(name, <any>undefined, { urn })
            case "azure-native:network:SecurityUserRule":
                return new SecurityUserRule(name, <any>undefined, { urn })
            case "azure-native:network:SecurityUserRuleCollection":
                return new SecurityUserRuleCollection(name, <any>undefined, { urn })
            case "azure-native:network:ServiceEndpointPolicy":
                return new ServiceEndpointPolicy(name, <any>undefined, { urn })
            case "azure-native:network:ServiceEndpointPolicyDefinition":
                return new ServiceEndpointPolicyDefinition(name, <any>undefined, { urn })
            case "azure-native:network:StaticCidr":
                return new StaticCidr(name, <any>undefined, { urn })
            case "azure-native:network:StaticMember":
                return new StaticMember(name, <any>undefined, { urn })
            case "azure-native:network:Subnet":
                return new Subnet(name, <any>undefined, { urn })
            case "azure-native:network:SubscriptionNetworkManagerConnection":
                return new SubscriptionNetworkManagerConnection(name, <any>undefined, { urn })
            case "azure-native:network:UserRule":
                return new UserRule(name, <any>undefined, { urn })
            case "azure-native:network:UserRuleCollection":
                return new UserRuleCollection(name, <any>undefined, { urn })
            case "azure-native:network:VerifierWorkspace":
                return new VerifierWorkspace(name, <any>undefined, { urn })
            case "azure-native:network:VirtualApplianceSite":
                return new VirtualApplianceSite(name, <any>undefined, { urn })
            case "azure-native:network:VirtualHub":
                return new VirtualHub(name, <any>undefined, { urn })
            case "azure-native:network:VirtualHubBgpConnection":
                return new VirtualHubBgpConnection(name, <any>undefined, { urn })
            case "azure-native:network:VirtualHubIpConfiguration":
                return new VirtualHubIpConfiguration(name, <any>undefined, { urn })
            case "azure-native:network:VirtualHubRouteTableV2":
                return new VirtualHubRouteTableV2(name, <any>undefined, { urn })
            case "azure-native:network:VirtualNetwork":
                return new VirtualNetwork(name, <any>undefined, { urn })
            case "azure-native:network:VirtualNetworkGateway":
                return new VirtualNetworkGateway(name, <any>undefined, { urn })
            case "azure-native:network:VirtualNetworkGatewayConnection":
                return new VirtualNetworkGatewayConnection(name, <any>undefined, { urn })
            case "azure-native:network:VirtualNetworkGatewayNatRule":
                return new VirtualNetworkGatewayNatRule(name, <any>undefined, { urn })
            case "azure-native:network:VirtualNetworkPeering":
                return new VirtualNetworkPeering(name, <any>undefined, { urn })
            case "azure-native:network:VirtualNetworkTap":
                return new VirtualNetworkTap(name, <any>undefined, { urn })
            case "azure-native:network:VirtualRouter":
                return new VirtualRouter(name, <any>undefined, { urn })
            case "azure-native:network:VirtualRouterPeering":
                return new VirtualRouterPeering(name, <any>undefined, { urn })
            case "azure-native:network:VirtualWan":
                return new VirtualWan(name, <any>undefined, { urn })
            case "azure-native:network:VpnConnection":
                return new VpnConnection(name, <any>undefined, { urn })
            case "azure-native:network:VpnGateway":
                return new VpnGateway(name, <any>undefined, { urn })
            case "azure-native:network:VpnServerConfiguration":
                return new VpnServerConfiguration(name, <any>undefined, { urn })
            case "azure-native:network:VpnSite":
                return new VpnSite(name, <any>undefined, { urn })
            case "azure-native:network:WebApplicationFirewallPolicy":
                return new WebApplicationFirewallPolicy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network", _module)