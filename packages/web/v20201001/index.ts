import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AppServiceEnvironmentArgs } from "./appServiceEnvironment";
export type AppServiceEnvironment = import("./appServiceEnvironment").AppServiceEnvironment;
export const AppServiceEnvironment: typeof import("./appServiceEnvironment").AppServiceEnvironment = null as any;
utilities.lazyLoad(exports, ["AppServiceEnvironment"], () => require("./appServiceEnvironment"));

export { AppServicePlanArgs } from "./appServicePlan";
export type AppServicePlan = import("./appServicePlan").AppServicePlan;
export const AppServicePlan: typeof import("./appServicePlan").AppServicePlan = null as any;
utilities.lazyLoad(exports, ["AppServicePlan"], () => require("./appServicePlan"));

export { AppServicePlanRouteForVnetArgs } from "./appServicePlanRouteForVnet";
export type AppServicePlanRouteForVnet = import("./appServicePlanRouteForVnet").AppServicePlanRouteForVnet;
export const AppServicePlanRouteForVnet: typeof import("./appServicePlanRouteForVnet").AppServicePlanRouteForVnet = null as any;
utilities.lazyLoad(exports, ["AppServicePlanRouteForVnet"], () => require("./appServicePlanRouteForVnet"));

export { CertificateArgs } from "./certificate";
export type Certificate = import("./certificate").Certificate;
export const Certificate: typeof import("./certificate").Certificate = null as any;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));

export { GetAppServiceEnvironmentArgs, GetAppServiceEnvironmentResult, GetAppServiceEnvironmentOutputArgs } from "./getAppServiceEnvironment";
export const getAppServiceEnvironment: typeof import("./getAppServiceEnvironment").getAppServiceEnvironment = null as any;
export const getAppServiceEnvironmentOutput: typeof import("./getAppServiceEnvironment").getAppServiceEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getAppServiceEnvironment","getAppServiceEnvironmentOutput"], () => require("./getAppServiceEnvironment"));

export { GetAppServicePlanArgs, GetAppServicePlanResult, GetAppServicePlanOutputArgs } from "./getAppServicePlan";
export const getAppServicePlan: typeof import("./getAppServicePlan").getAppServicePlan = null as any;
export const getAppServicePlanOutput: typeof import("./getAppServicePlan").getAppServicePlanOutput = null as any;
utilities.lazyLoad(exports, ["getAppServicePlan","getAppServicePlanOutput"], () => require("./getAppServicePlan"));

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

export { GetStaticSiteArgs, GetStaticSiteResult, GetStaticSiteOutputArgs } from "./getStaticSite";
export const getStaticSite: typeof import("./getStaticSite").getStaticSite = null as any;
export const getStaticSiteOutput: typeof import("./getStaticSite").getStaticSiteOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSite","getStaticSiteOutput"], () => require("./getStaticSite"));

export { GetWebAppArgs, GetWebAppResult, GetWebAppOutputArgs } from "./getWebApp";
export const getWebApp: typeof import("./getWebApp").getWebApp = null as any;
export const getWebAppOutput: typeof import("./getWebApp").getWebAppOutput = null as any;
utilities.lazyLoad(exports, ["getWebApp","getWebAppOutput"], () => require("./getWebApp"));

export { GetWebAppDeploymentArgs, GetWebAppDeploymentResult, GetWebAppDeploymentOutputArgs } from "./getWebAppDeployment";
export const getWebAppDeployment: typeof import("./getWebAppDeployment").getWebAppDeployment = null as any;
export const getWebAppDeploymentOutput: typeof import("./getWebAppDeployment").getWebAppDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppDeployment","getWebAppDeploymentOutput"], () => require("./getWebAppDeployment"));

export { GetWebAppDeploymentSlotArgs, GetWebAppDeploymentSlotResult, GetWebAppDeploymentSlotOutputArgs } from "./getWebAppDeploymentSlot";
export const getWebAppDeploymentSlot: typeof import("./getWebAppDeploymentSlot").getWebAppDeploymentSlot = null as any;
export const getWebAppDeploymentSlotOutput: typeof import("./getWebAppDeploymentSlot").getWebAppDeploymentSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppDeploymentSlot","getWebAppDeploymentSlotOutput"], () => require("./getWebAppDeploymentSlot"));

export { GetWebAppDiagnosticLogsConfigurationArgs, GetWebAppDiagnosticLogsConfigurationResult, GetWebAppDiagnosticLogsConfigurationOutputArgs } from "./getWebAppDiagnosticLogsConfiguration";
export const getWebAppDiagnosticLogsConfiguration: typeof import("./getWebAppDiagnosticLogsConfiguration").getWebAppDiagnosticLogsConfiguration = null as any;
export const getWebAppDiagnosticLogsConfigurationOutput: typeof import("./getWebAppDiagnosticLogsConfiguration").getWebAppDiagnosticLogsConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppDiagnosticLogsConfiguration","getWebAppDiagnosticLogsConfigurationOutput"], () => require("./getWebAppDiagnosticLogsConfiguration"));

export { GetWebAppDomainOwnershipIdentifierArgs, GetWebAppDomainOwnershipIdentifierResult, GetWebAppDomainOwnershipIdentifierOutputArgs } from "./getWebAppDomainOwnershipIdentifier";
export const getWebAppDomainOwnershipIdentifier: typeof import("./getWebAppDomainOwnershipIdentifier").getWebAppDomainOwnershipIdentifier = null as any;
export const getWebAppDomainOwnershipIdentifierOutput: typeof import("./getWebAppDomainOwnershipIdentifier").getWebAppDomainOwnershipIdentifierOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppDomainOwnershipIdentifier","getWebAppDomainOwnershipIdentifierOutput"], () => require("./getWebAppDomainOwnershipIdentifier"));

export { GetWebAppDomainOwnershipIdentifierSlotArgs, GetWebAppDomainOwnershipIdentifierSlotResult, GetWebAppDomainOwnershipIdentifierSlotOutputArgs } from "./getWebAppDomainOwnershipIdentifierSlot";
export const getWebAppDomainOwnershipIdentifierSlot: typeof import("./getWebAppDomainOwnershipIdentifierSlot").getWebAppDomainOwnershipIdentifierSlot = null as any;
export const getWebAppDomainOwnershipIdentifierSlotOutput: typeof import("./getWebAppDomainOwnershipIdentifierSlot").getWebAppDomainOwnershipIdentifierSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppDomainOwnershipIdentifierSlot","getWebAppDomainOwnershipIdentifierSlotOutput"], () => require("./getWebAppDomainOwnershipIdentifierSlot"));

export { GetWebAppFtpAllowedArgs, GetWebAppFtpAllowedResult, GetWebAppFtpAllowedOutputArgs } from "./getWebAppFtpAllowed";
export const getWebAppFtpAllowed: typeof import("./getWebAppFtpAllowed").getWebAppFtpAllowed = null as any;
export const getWebAppFtpAllowedOutput: typeof import("./getWebAppFtpAllowed").getWebAppFtpAllowedOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppFtpAllowed","getWebAppFtpAllowedOutput"], () => require("./getWebAppFtpAllowed"));

export { GetWebAppFunctionArgs, GetWebAppFunctionResult, GetWebAppFunctionOutputArgs } from "./getWebAppFunction";
export const getWebAppFunction: typeof import("./getWebAppFunction").getWebAppFunction = null as any;
export const getWebAppFunctionOutput: typeof import("./getWebAppFunction").getWebAppFunctionOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppFunction","getWebAppFunctionOutput"], () => require("./getWebAppFunction"));

export { GetWebAppHostNameBindingArgs, GetWebAppHostNameBindingResult, GetWebAppHostNameBindingOutputArgs } from "./getWebAppHostNameBinding";
export const getWebAppHostNameBinding: typeof import("./getWebAppHostNameBinding").getWebAppHostNameBinding = null as any;
export const getWebAppHostNameBindingOutput: typeof import("./getWebAppHostNameBinding").getWebAppHostNameBindingOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppHostNameBinding","getWebAppHostNameBindingOutput"], () => require("./getWebAppHostNameBinding"));

export { GetWebAppHostNameBindingSlotArgs, GetWebAppHostNameBindingSlotResult, GetWebAppHostNameBindingSlotOutputArgs } from "./getWebAppHostNameBindingSlot";
export const getWebAppHostNameBindingSlot: typeof import("./getWebAppHostNameBindingSlot").getWebAppHostNameBindingSlot = null as any;
export const getWebAppHostNameBindingSlotOutput: typeof import("./getWebAppHostNameBindingSlot").getWebAppHostNameBindingSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppHostNameBindingSlot","getWebAppHostNameBindingSlotOutput"], () => require("./getWebAppHostNameBindingSlot"));

export { GetWebAppHybridConnectionArgs, GetWebAppHybridConnectionResult, GetWebAppHybridConnectionOutputArgs } from "./getWebAppHybridConnection";
export const getWebAppHybridConnection: typeof import("./getWebAppHybridConnection").getWebAppHybridConnection = null as any;
export const getWebAppHybridConnectionOutput: typeof import("./getWebAppHybridConnection").getWebAppHybridConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppHybridConnection","getWebAppHybridConnectionOutput"], () => require("./getWebAppHybridConnection"));

export { GetWebAppHybridConnectionSlotArgs, GetWebAppHybridConnectionSlotResult, GetWebAppHybridConnectionSlotOutputArgs } from "./getWebAppHybridConnectionSlot";
export const getWebAppHybridConnectionSlot: typeof import("./getWebAppHybridConnectionSlot").getWebAppHybridConnectionSlot = null as any;
export const getWebAppHybridConnectionSlotOutput: typeof import("./getWebAppHybridConnectionSlot").getWebAppHybridConnectionSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppHybridConnectionSlot","getWebAppHybridConnectionSlotOutput"], () => require("./getWebAppHybridConnectionSlot"));

export { GetWebAppInstanceFunctionSlotArgs, GetWebAppInstanceFunctionSlotResult, GetWebAppInstanceFunctionSlotOutputArgs } from "./getWebAppInstanceFunctionSlot";
export const getWebAppInstanceFunctionSlot: typeof import("./getWebAppInstanceFunctionSlot").getWebAppInstanceFunctionSlot = null as any;
export const getWebAppInstanceFunctionSlotOutput: typeof import("./getWebAppInstanceFunctionSlot").getWebAppInstanceFunctionSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppInstanceFunctionSlot","getWebAppInstanceFunctionSlotOutput"], () => require("./getWebAppInstanceFunctionSlot"));

export { GetWebAppPremierAddOnArgs, GetWebAppPremierAddOnResult, GetWebAppPremierAddOnOutputArgs } from "./getWebAppPremierAddOn";
export const getWebAppPremierAddOn: typeof import("./getWebAppPremierAddOn").getWebAppPremierAddOn = null as any;
export const getWebAppPremierAddOnOutput: typeof import("./getWebAppPremierAddOn").getWebAppPremierAddOnOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppPremierAddOn","getWebAppPremierAddOnOutput"], () => require("./getWebAppPremierAddOn"));

export { GetWebAppPremierAddOnSlotArgs, GetWebAppPremierAddOnSlotResult, GetWebAppPremierAddOnSlotOutputArgs } from "./getWebAppPremierAddOnSlot";
export const getWebAppPremierAddOnSlot: typeof import("./getWebAppPremierAddOnSlot").getWebAppPremierAddOnSlot = null as any;
export const getWebAppPremierAddOnSlotOutput: typeof import("./getWebAppPremierAddOnSlot").getWebAppPremierAddOnSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppPremierAddOnSlot","getWebAppPremierAddOnSlotOutput"], () => require("./getWebAppPremierAddOnSlot"));

export { GetWebAppPrivateEndpointConnectionArgs, GetWebAppPrivateEndpointConnectionResult, GetWebAppPrivateEndpointConnectionOutputArgs } from "./getWebAppPrivateEndpointConnection";
export const getWebAppPrivateEndpointConnection: typeof import("./getWebAppPrivateEndpointConnection").getWebAppPrivateEndpointConnection = null as any;
export const getWebAppPrivateEndpointConnectionOutput: typeof import("./getWebAppPrivateEndpointConnection").getWebAppPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppPrivateEndpointConnection","getWebAppPrivateEndpointConnectionOutput"], () => require("./getWebAppPrivateEndpointConnection"));

export { GetWebAppPublicCertificateArgs, GetWebAppPublicCertificateResult, GetWebAppPublicCertificateOutputArgs } from "./getWebAppPublicCertificate";
export const getWebAppPublicCertificate: typeof import("./getWebAppPublicCertificate").getWebAppPublicCertificate = null as any;
export const getWebAppPublicCertificateOutput: typeof import("./getWebAppPublicCertificate").getWebAppPublicCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppPublicCertificate","getWebAppPublicCertificateOutput"], () => require("./getWebAppPublicCertificate"));

export { GetWebAppPublicCertificateSlotArgs, GetWebAppPublicCertificateSlotResult, GetWebAppPublicCertificateSlotOutputArgs } from "./getWebAppPublicCertificateSlot";
export const getWebAppPublicCertificateSlot: typeof import("./getWebAppPublicCertificateSlot").getWebAppPublicCertificateSlot = null as any;
export const getWebAppPublicCertificateSlotOutput: typeof import("./getWebAppPublicCertificateSlot").getWebAppPublicCertificateSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppPublicCertificateSlot","getWebAppPublicCertificateSlotOutput"], () => require("./getWebAppPublicCertificateSlot"));

export { GetWebAppRelayServiceConnectionArgs, GetWebAppRelayServiceConnectionResult, GetWebAppRelayServiceConnectionOutputArgs } from "./getWebAppRelayServiceConnection";
export const getWebAppRelayServiceConnection: typeof import("./getWebAppRelayServiceConnection").getWebAppRelayServiceConnection = null as any;
export const getWebAppRelayServiceConnectionOutput: typeof import("./getWebAppRelayServiceConnection").getWebAppRelayServiceConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppRelayServiceConnection","getWebAppRelayServiceConnectionOutput"], () => require("./getWebAppRelayServiceConnection"));

export { GetWebAppRelayServiceConnectionSlotArgs, GetWebAppRelayServiceConnectionSlotResult, GetWebAppRelayServiceConnectionSlotOutputArgs } from "./getWebAppRelayServiceConnectionSlot";
export const getWebAppRelayServiceConnectionSlot: typeof import("./getWebAppRelayServiceConnectionSlot").getWebAppRelayServiceConnectionSlot = null as any;
export const getWebAppRelayServiceConnectionSlotOutput: typeof import("./getWebAppRelayServiceConnectionSlot").getWebAppRelayServiceConnectionSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppRelayServiceConnectionSlot","getWebAppRelayServiceConnectionSlotOutput"], () => require("./getWebAppRelayServiceConnectionSlot"));

export { GetWebAppScmAllowedArgs, GetWebAppScmAllowedResult, GetWebAppScmAllowedOutputArgs } from "./getWebAppScmAllowed";
export const getWebAppScmAllowed: typeof import("./getWebAppScmAllowed").getWebAppScmAllowed = null as any;
export const getWebAppScmAllowedOutput: typeof import("./getWebAppScmAllowed").getWebAppScmAllowedOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppScmAllowed","getWebAppScmAllowedOutput"], () => require("./getWebAppScmAllowed"));

export { GetWebAppSiteExtensionArgs, GetWebAppSiteExtensionResult, GetWebAppSiteExtensionOutputArgs } from "./getWebAppSiteExtension";
export const getWebAppSiteExtension: typeof import("./getWebAppSiteExtension").getWebAppSiteExtension = null as any;
export const getWebAppSiteExtensionOutput: typeof import("./getWebAppSiteExtension").getWebAppSiteExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppSiteExtension","getWebAppSiteExtensionOutput"], () => require("./getWebAppSiteExtension"));

export { GetWebAppSiteExtensionSlotArgs, GetWebAppSiteExtensionSlotResult, GetWebAppSiteExtensionSlotOutputArgs } from "./getWebAppSiteExtensionSlot";
export const getWebAppSiteExtensionSlot: typeof import("./getWebAppSiteExtensionSlot").getWebAppSiteExtensionSlot = null as any;
export const getWebAppSiteExtensionSlotOutput: typeof import("./getWebAppSiteExtensionSlot").getWebAppSiteExtensionSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppSiteExtensionSlot","getWebAppSiteExtensionSlotOutput"], () => require("./getWebAppSiteExtensionSlot"));

export { GetWebAppSlotArgs, GetWebAppSlotResult, GetWebAppSlotOutputArgs } from "./getWebAppSlot";
export const getWebAppSlot: typeof import("./getWebAppSlot").getWebAppSlot = null as any;
export const getWebAppSlotOutput: typeof import("./getWebAppSlot").getWebAppSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppSlot","getWebAppSlotOutput"], () => require("./getWebAppSlot"));

export { GetWebAppSlotConfigurationNamesArgs, GetWebAppSlotConfigurationNamesResult, GetWebAppSlotConfigurationNamesOutputArgs } from "./getWebAppSlotConfigurationNames";
export const getWebAppSlotConfigurationNames: typeof import("./getWebAppSlotConfigurationNames").getWebAppSlotConfigurationNames = null as any;
export const getWebAppSlotConfigurationNamesOutput: typeof import("./getWebAppSlotConfigurationNames").getWebAppSlotConfigurationNamesOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppSlotConfigurationNames","getWebAppSlotConfigurationNamesOutput"], () => require("./getWebAppSlotConfigurationNames"));

export { GetWebAppSourceControlArgs, GetWebAppSourceControlResult, GetWebAppSourceControlOutputArgs } from "./getWebAppSourceControl";
export const getWebAppSourceControl: typeof import("./getWebAppSourceControl").getWebAppSourceControl = null as any;
export const getWebAppSourceControlOutput: typeof import("./getWebAppSourceControl").getWebAppSourceControlOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppSourceControl","getWebAppSourceControlOutput"], () => require("./getWebAppSourceControl"));

export { GetWebAppSourceControlSlotArgs, GetWebAppSourceControlSlotResult, GetWebAppSourceControlSlotOutputArgs } from "./getWebAppSourceControlSlot";
export const getWebAppSourceControlSlot: typeof import("./getWebAppSourceControlSlot").getWebAppSourceControlSlot = null as any;
export const getWebAppSourceControlSlotOutput: typeof import("./getWebAppSourceControlSlot").getWebAppSourceControlSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppSourceControlSlot","getWebAppSourceControlSlotOutput"], () => require("./getWebAppSourceControlSlot"));

export { GetWebAppSwiftVirtualNetworkConnectionArgs, GetWebAppSwiftVirtualNetworkConnectionResult, GetWebAppSwiftVirtualNetworkConnectionOutputArgs } from "./getWebAppSwiftVirtualNetworkConnection";
export const getWebAppSwiftVirtualNetworkConnection: typeof import("./getWebAppSwiftVirtualNetworkConnection").getWebAppSwiftVirtualNetworkConnection = null as any;
export const getWebAppSwiftVirtualNetworkConnectionOutput: typeof import("./getWebAppSwiftVirtualNetworkConnection").getWebAppSwiftVirtualNetworkConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppSwiftVirtualNetworkConnection","getWebAppSwiftVirtualNetworkConnectionOutput"], () => require("./getWebAppSwiftVirtualNetworkConnection"));

export { GetWebAppSwiftVirtualNetworkConnectionSlotArgs, GetWebAppSwiftVirtualNetworkConnectionSlotResult, GetWebAppSwiftVirtualNetworkConnectionSlotOutputArgs } from "./getWebAppSwiftVirtualNetworkConnectionSlot";
export const getWebAppSwiftVirtualNetworkConnectionSlot: typeof import("./getWebAppSwiftVirtualNetworkConnectionSlot").getWebAppSwiftVirtualNetworkConnectionSlot = null as any;
export const getWebAppSwiftVirtualNetworkConnectionSlotOutput: typeof import("./getWebAppSwiftVirtualNetworkConnectionSlot").getWebAppSwiftVirtualNetworkConnectionSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppSwiftVirtualNetworkConnectionSlot","getWebAppSwiftVirtualNetworkConnectionSlotOutput"], () => require("./getWebAppSwiftVirtualNetworkConnectionSlot"));

export { GetWebAppVnetConnectionArgs, GetWebAppVnetConnectionResult, GetWebAppVnetConnectionOutputArgs } from "./getWebAppVnetConnection";
export const getWebAppVnetConnection: typeof import("./getWebAppVnetConnection").getWebAppVnetConnection = null as any;
export const getWebAppVnetConnectionOutput: typeof import("./getWebAppVnetConnection").getWebAppVnetConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppVnetConnection","getWebAppVnetConnectionOutput"], () => require("./getWebAppVnetConnection"));

export { GetWebAppVnetConnectionSlotArgs, GetWebAppVnetConnectionSlotResult, GetWebAppVnetConnectionSlotOutputArgs } from "./getWebAppVnetConnectionSlot";
export const getWebAppVnetConnectionSlot: typeof import("./getWebAppVnetConnectionSlot").getWebAppVnetConnectionSlot = null as any;
export const getWebAppVnetConnectionSlotOutput: typeof import("./getWebAppVnetConnectionSlot").getWebAppVnetConnectionSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppVnetConnectionSlot","getWebAppVnetConnectionSlotOutput"], () => require("./getWebAppVnetConnectionSlot"));

export { ListAppServicePlanHybridConnectionKeysArgs, ListAppServicePlanHybridConnectionKeysResult, ListAppServicePlanHybridConnectionKeysOutputArgs } from "./listAppServicePlanHybridConnectionKeys";
export const listAppServicePlanHybridConnectionKeys: typeof import("./listAppServicePlanHybridConnectionKeys").listAppServicePlanHybridConnectionKeys = null as any;
export const listAppServicePlanHybridConnectionKeysOutput: typeof import("./listAppServicePlanHybridConnectionKeys").listAppServicePlanHybridConnectionKeysOutput = null as any;
utilities.lazyLoad(exports, ["listAppServicePlanHybridConnectionKeys","listAppServicePlanHybridConnectionKeysOutput"], () => require("./listAppServicePlanHybridConnectionKeys"));

export { ListSiteIdentifiersAssignedToHostNameArgs, ListSiteIdentifiersAssignedToHostNameResult, ListSiteIdentifiersAssignedToHostNameOutputArgs } from "./listSiteIdentifiersAssignedToHostName";
export const listSiteIdentifiersAssignedToHostName: typeof import("./listSiteIdentifiersAssignedToHostName").listSiteIdentifiersAssignedToHostName = null as any;
export const listSiteIdentifiersAssignedToHostNameOutput: typeof import("./listSiteIdentifiersAssignedToHostName").listSiteIdentifiersAssignedToHostNameOutput = null as any;
utilities.lazyLoad(exports, ["listSiteIdentifiersAssignedToHostName","listSiteIdentifiersAssignedToHostNameOutput"], () => require("./listSiteIdentifiersAssignedToHostName"));

export { ListStaticSiteBuildFunctionAppSettingsArgs, ListStaticSiteBuildFunctionAppSettingsResult, ListStaticSiteBuildFunctionAppSettingsOutputArgs } from "./listStaticSiteBuildFunctionAppSettings";
export const listStaticSiteBuildFunctionAppSettings: typeof import("./listStaticSiteBuildFunctionAppSettings").listStaticSiteBuildFunctionAppSettings = null as any;
export const listStaticSiteBuildFunctionAppSettingsOutput: typeof import("./listStaticSiteBuildFunctionAppSettings").listStaticSiteBuildFunctionAppSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteBuildFunctionAppSettings","listStaticSiteBuildFunctionAppSettingsOutput"], () => require("./listStaticSiteBuildFunctionAppSettings"));

export { ListStaticSiteFunctionAppSettingsArgs, ListStaticSiteFunctionAppSettingsResult, ListStaticSiteFunctionAppSettingsOutputArgs } from "./listStaticSiteFunctionAppSettings";
export const listStaticSiteFunctionAppSettings: typeof import("./listStaticSiteFunctionAppSettings").listStaticSiteFunctionAppSettings = null as any;
export const listStaticSiteFunctionAppSettingsOutput: typeof import("./listStaticSiteFunctionAppSettings").listStaticSiteFunctionAppSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteFunctionAppSettings","listStaticSiteFunctionAppSettingsOutput"], () => require("./listStaticSiteFunctionAppSettings"));

export { ListStaticSiteSecretsArgs, ListStaticSiteSecretsResult, ListStaticSiteSecretsOutputArgs } from "./listStaticSiteSecrets";
export const listStaticSiteSecrets: typeof import("./listStaticSiteSecrets").listStaticSiteSecrets = null as any;
export const listStaticSiteSecretsOutput: typeof import("./listStaticSiteSecrets").listStaticSiteSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteSecrets","listStaticSiteSecretsOutput"], () => require("./listStaticSiteSecrets"));

export { ListStaticSiteUsersArgs, ListStaticSiteUsersResult, ListStaticSiteUsersOutputArgs } from "./listStaticSiteUsers";
export const listStaticSiteUsers: typeof import("./listStaticSiteUsers").listStaticSiteUsers = null as any;
export const listStaticSiteUsersOutput: typeof import("./listStaticSiteUsers").listStaticSiteUsersOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteUsers","listStaticSiteUsersOutput"], () => require("./listStaticSiteUsers"));

export { ListWebAppApplicationSettingsArgs, ListWebAppApplicationSettingsResult, ListWebAppApplicationSettingsOutputArgs } from "./listWebAppApplicationSettings";
export const listWebAppApplicationSettings: typeof import("./listWebAppApplicationSettings").listWebAppApplicationSettings = null as any;
export const listWebAppApplicationSettingsOutput: typeof import("./listWebAppApplicationSettings").listWebAppApplicationSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppApplicationSettings","listWebAppApplicationSettingsOutput"], () => require("./listWebAppApplicationSettings"));

export { ListWebAppApplicationSettingsSlotArgs, ListWebAppApplicationSettingsSlotResult, ListWebAppApplicationSettingsSlotOutputArgs } from "./listWebAppApplicationSettingsSlot";
export const listWebAppApplicationSettingsSlot: typeof import("./listWebAppApplicationSettingsSlot").listWebAppApplicationSettingsSlot = null as any;
export const listWebAppApplicationSettingsSlotOutput: typeof import("./listWebAppApplicationSettingsSlot").listWebAppApplicationSettingsSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppApplicationSettingsSlot","listWebAppApplicationSettingsSlotOutput"], () => require("./listWebAppApplicationSettingsSlot"));

export { ListWebAppAuthSettingsArgs, ListWebAppAuthSettingsResult, ListWebAppAuthSettingsOutputArgs } from "./listWebAppAuthSettings";
export const listWebAppAuthSettings: typeof import("./listWebAppAuthSettings").listWebAppAuthSettings = null as any;
export const listWebAppAuthSettingsOutput: typeof import("./listWebAppAuthSettings").listWebAppAuthSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppAuthSettings","listWebAppAuthSettingsOutput"], () => require("./listWebAppAuthSettings"));

export { ListWebAppAuthSettingsSlotArgs, ListWebAppAuthSettingsSlotResult, ListWebAppAuthSettingsSlotOutputArgs } from "./listWebAppAuthSettingsSlot";
export const listWebAppAuthSettingsSlot: typeof import("./listWebAppAuthSettingsSlot").listWebAppAuthSettingsSlot = null as any;
export const listWebAppAuthSettingsSlotOutput: typeof import("./listWebAppAuthSettingsSlot").listWebAppAuthSettingsSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppAuthSettingsSlot","listWebAppAuthSettingsSlotOutput"], () => require("./listWebAppAuthSettingsSlot"));

export { ListWebAppAzureStorageAccountsArgs, ListWebAppAzureStorageAccountsResult, ListWebAppAzureStorageAccountsOutputArgs } from "./listWebAppAzureStorageAccounts";
export const listWebAppAzureStorageAccounts: typeof import("./listWebAppAzureStorageAccounts").listWebAppAzureStorageAccounts = null as any;
export const listWebAppAzureStorageAccountsOutput: typeof import("./listWebAppAzureStorageAccounts").listWebAppAzureStorageAccountsOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppAzureStorageAccounts","listWebAppAzureStorageAccountsOutput"], () => require("./listWebAppAzureStorageAccounts"));

export { ListWebAppAzureStorageAccountsSlotArgs, ListWebAppAzureStorageAccountsSlotResult, ListWebAppAzureStorageAccountsSlotOutputArgs } from "./listWebAppAzureStorageAccountsSlot";
export const listWebAppAzureStorageAccountsSlot: typeof import("./listWebAppAzureStorageAccountsSlot").listWebAppAzureStorageAccountsSlot = null as any;
export const listWebAppAzureStorageAccountsSlotOutput: typeof import("./listWebAppAzureStorageAccountsSlot").listWebAppAzureStorageAccountsSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppAzureStorageAccountsSlot","listWebAppAzureStorageAccountsSlotOutput"], () => require("./listWebAppAzureStorageAccountsSlot"));

export { ListWebAppBackupConfigurationArgs, ListWebAppBackupConfigurationResult, ListWebAppBackupConfigurationOutputArgs } from "./listWebAppBackupConfiguration";
export const listWebAppBackupConfiguration: typeof import("./listWebAppBackupConfiguration").listWebAppBackupConfiguration = null as any;
export const listWebAppBackupConfigurationOutput: typeof import("./listWebAppBackupConfiguration").listWebAppBackupConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppBackupConfiguration","listWebAppBackupConfigurationOutput"], () => require("./listWebAppBackupConfiguration"));

export { ListWebAppBackupConfigurationSlotArgs, ListWebAppBackupConfigurationSlotResult, ListWebAppBackupConfigurationSlotOutputArgs } from "./listWebAppBackupConfigurationSlot";
export const listWebAppBackupConfigurationSlot: typeof import("./listWebAppBackupConfigurationSlot").listWebAppBackupConfigurationSlot = null as any;
export const listWebAppBackupConfigurationSlotOutput: typeof import("./listWebAppBackupConfigurationSlot").listWebAppBackupConfigurationSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppBackupConfigurationSlot","listWebAppBackupConfigurationSlotOutput"], () => require("./listWebAppBackupConfigurationSlot"));

export { ListWebAppBackupStatusSecretsArgs, ListWebAppBackupStatusSecretsResult, ListWebAppBackupStatusSecretsOutputArgs } from "./listWebAppBackupStatusSecrets";
export const listWebAppBackupStatusSecrets: typeof import("./listWebAppBackupStatusSecrets").listWebAppBackupStatusSecrets = null as any;
export const listWebAppBackupStatusSecretsOutput: typeof import("./listWebAppBackupStatusSecrets").listWebAppBackupStatusSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppBackupStatusSecrets","listWebAppBackupStatusSecretsOutput"], () => require("./listWebAppBackupStatusSecrets"));

export { ListWebAppBackupStatusSecretsSlotArgs, ListWebAppBackupStatusSecretsSlotResult, ListWebAppBackupStatusSecretsSlotOutputArgs } from "./listWebAppBackupStatusSecretsSlot";
export const listWebAppBackupStatusSecretsSlot: typeof import("./listWebAppBackupStatusSecretsSlot").listWebAppBackupStatusSecretsSlot = null as any;
export const listWebAppBackupStatusSecretsSlotOutput: typeof import("./listWebAppBackupStatusSecretsSlot").listWebAppBackupStatusSecretsSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppBackupStatusSecretsSlot","listWebAppBackupStatusSecretsSlotOutput"], () => require("./listWebAppBackupStatusSecretsSlot"));

export { ListWebAppConnectionStringsArgs, ListWebAppConnectionStringsResult, ListWebAppConnectionStringsOutputArgs } from "./listWebAppConnectionStrings";
export const listWebAppConnectionStrings: typeof import("./listWebAppConnectionStrings").listWebAppConnectionStrings = null as any;
export const listWebAppConnectionStringsOutput: typeof import("./listWebAppConnectionStrings").listWebAppConnectionStringsOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppConnectionStrings","listWebAppConnectionStringsOutput"], () => require("./listWebAppConnectionStrings"));

export { ListWebAppConnectionStringsSlotArgs, ListWebAppConnectionStringsSlotResult, ListWebAppConnectionStringsSlotOutputArgs } from "./listWebAppConnectionStringsSlot";
export const listWebAppConnectionStringsSlot: typeof import("./listWebAppConnectionStringsSlot").listWebAppConnectionStringsSlot = null as any;
export const listWebAppConnectionStringsSlotOutput: typeof import("./listWebAppConnectionStringsSlot").listWebAppConnectionStringsSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppConnectionStringsSlot","listWebAppConnectionStringsSlotOutput"], () => require("./listWebAppConnectionStringsSlot"));

export { ListWebAppFunctionKeysArgs, ListWebAppFunctionKeysResult, ListWebAppFunctionKeysOutputArgs } from "./listWebAppFunctionKeys";
export const listWebAppFunctionKeys: typeof import("./listWebAppFunctionKeys").listWebAppFunctionKeys = null as any;
export const listWebAppFunctionKeysOutput: typeof import("./listWebAppFunctionKeys").listWebAppFunctionKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppFunctionKeys","listWebAppFunctionKeysOutput"], () => require("./listWebAppFunctionKeys"));

export { ListWebAppFunctionKeysSlotArgs, ListWebAppFunctionKeysSlotResult, ListWebAppFunctionKeysSlotOutputArgs } from "./listWebAppFunctionKeysSlot";
export const listWebAppFunctionKeysSlot: typeof import("./listWebAppFunctionKeysSlot").listWebAppFunctionKeysSlot = null as any;
export const listWebAppFunctionKeysSlotOutput: typeof import("./listWebAppFunctionKeysSlot").listWebAppFunctionKeysSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppFunctionKeysSlot","listWebAppFunctionKeysSlotOutput"], () => require("./listWebAppFunctionKeysSlot"));

export { ListWebAppFunctionSecretsArgs, ListWebAppFunctionSecretsResult, ListWebAppFunctionSecretsOutputArgs } from "./listWebAppFunctionSecrets";
export const listWebAppFunctionSecrets: typeof import("./listWebAppFunctionSecrets").listWebAppFunctionSecrets = null as any;
export const listWebAppFunctionSecretsOutput: typeof import("./listWebAppFunctionSecrets").listWebAppFunctionSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppFunctionSecrets","listWebAppFunctionSecretsOutput"], () => require("./listWebAppFunctionSecrets"));

export { ListWebAppFunctionSecretsSlotArgs, ListWebAppFunctionSecretsSlotResult, ListWebAppFunctionSecretsSlotOutputArgs } from "./listWebAppFunctionSecretsSlot";
export const listWebAppFunctionSecretsSlot: typeof import("./listWebAppFunctionSecretsSlot").listWebAppFunctionSecretsSlot = null as any;
export const listWebAppFunctionSecretsSlotOutput: typeof import("./listWebAppFunctionSecretsSlot").listWebAppFunctionSecretsSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppFunctionSecretsSlot","listWebAppFunctionSecretsSlotOutput"], () => require("./listWebAppFunctionSecretsSlot"));

export { ListWebAppHostKeysArgs, ListWebAppHostKeysResult, ListWebAppHostKeysOutputArgs } from "./listWebAppHostKeys";
export const listWebAppHostKeys: typeof import("./listWebAppHostKeys").listWebAppHostKeys = null as any;
export const listWebAppHostKeysOutput: typeof import("./listWebAppHostKeys").listWebAppHostKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppHostKeys","listWebAppHostKeysOutput"], () => require("./listWebAppHostKeys"));

export { ListWebAppHostKeysSlotArgs, ListWebAppHostKeysSlotResult, ListWebAppHostKeysSlotOutputArgs } from "./listWebAppHostKeysSlot";
export const listWebAppHostKeysSlot: typeof import("./listWebAppHostKeysSlot").listWebAppHostKeysSlot = null as any;
export const listWebAppHostKeysSlotOutput: typeof import("./listWebAppHostKeysSlot").listWebAppHostKeysSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppHostKeysSlot","listWebAppHostKeysSlotOutput"], () => require("./listWebAppHostKeysSlot"));

export { ListWebAppMetadataArgs, ListWebAppMetadataResult, ListWebAppMetadataOutputArgs } from "./listWebAppMetadata";
export const listWebAppMetadata: typeof import("./listWebAppMetadata").listWebAppMetadata = null as any;
export const listWebAppMetadataOutput: typeof import("./listWebAppMetadata").listWebAppMetadataOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppMetadata","listWebAppMetadataOutput"], () => require("./listWebAppMetadata"));

export { ListWebAppMetadataSlotArgs, ListWebAppMetadataSlotResult, ListWebAppMetadataSlotOutputArgs } from "./listWebAppMetadataSlot";
export const listWebAppMetadataSlot: typeof import("./listWebAppMetadataSlot").listWebAppMetadataSlot = null as any;
export const listWebAppMetadataSlotOutput: typeof import("./listWebAppMetadataSlot").listWebAppMetadataSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppMetadataSlot","listWebAppMetadataSlotOutput"], () => require("./listWebAppMetadataSlot"));

export { ListWebAppPublishingCredentialsArgs, ListWebAppPublishingCredentialsResult, ListWebAppPublishingCredentialsOutputArgs } from "./listWebAppPublishingCredentials";
export const listWebAppPublishingCredentials: typeof import("./listWebAppPublishingCredentials").listWebAppPublishingCredentials = null as any;
export const listWebAppPublishingCredentialsOutput: typeof import("./listWebAppPublishingCredentials").listWebAppPublishingCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppPublishingCredentials","listWebAppPublishingCredentialsOutput"], () => require("./listWebAppPublishingCredentials"));

export { ListWebAppPublishingCredentialsSlotArgs, ListWebAppPublishingCredentialsSlotResult, ListWebAppPublishingCredentialsSlotOutputArgs } from "./listWebAppPublishingCredentialsSlot";
export const listWebAppPublishingCredentialsSlot: typeof import("./listWebAppPublishingCredentialsSlot").listWebAppPublishingCredentialsSlot = null as any;
export const listWebAppPublishingCredentialsSlotOutput: typeof import("./listWebAppPublishingCredentialsSlot").listWebAppPublishingCredentialsSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppPublishingCredentialsSlot","listWebAppPublishingCredentialsSlotOutput"], () => require("./listWebAppPublishingCredentialsSlot"));

export { ListWebAppSiteBackupsArgs, ListWebAppSiteBackupsResult, ListWebAppSiteBackupsOutputArgs } from "./listWebAppSiteBackups";
export const listWebAppSiteBackups: typeof import("./listWebAppSiteBackups").listWebAppSiteBackups = null as any;
export const listWebAppSiteBackupsOutput: typeof import("./listWebAppSiteBackups").listWebAppSiteBackupsOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppSiteBackups","listWebAppSiteBackupsOutput"], () => require("./listWebAppSiteBackups"));

export { ListWebAppSiteBackupsSlotArgs, ListWebAppSiteBackupsSlotResult, ListWebAppSiteBackupsSlotOutputArgs } from "./listWebAppSiteBackupsSlot";
export const listWebAppSiteBackupsSlot: typeof import("./listWebAppSiteBackupsSlot").listWebAppSiteBackupsSlot = null as any;
export const listWebAppSiteBackupsSlotOutput: typeof import("./listWebAppSiteBackupsSlot").listWebAppSiteBackupsSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppSiteBackupsSlot","listWebAppSiteBackupsSlotOutput"], () => require("./listWebAppSiteBackupsSlot"));

export { ListWebAppSitePushSettingsArgs, ListWebAppSitePushSettingsResult, ListWebAppSitePushSettingsOutputArgs } from "./listWebAppSitePushSettings";
export const listWebAppSitePushSettings: typeof import("./listWebAppSitePushSettings").listWebAppSitePushSettings = null as any;
export const listWebAppSitePushSettingsOutput: typeof import("./listWebAppSitePushSettings").listWebAppSitePushSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppSitePushSettings","listWebAppSitePushSettingsOutput"], () => require("./listWebAppSitePushSettings"));

export { ListWebAppSitePushSettingsSlotArgs, ListWebAppSitePushSettingsSlotResult, ListWebAppSitePushSettingsSlotOutputArgs } from "./listWebAppSitePushSettingsSlot";
export const listWebAppSitePushSettingsSlot: typeof import("./listWebAppSitePushSettingsSlot").listWebAppSitePushSettingsSlot = null as any;
export const listWebAppSitePushSettingsSlotOutput: typeof import("./listWebAppSitePushSettingsSlot").listWebAppSitePushSettingsSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppSitePushSettingsSlot","listWebAppSitePushSettingsSlotOutput"], () => require("./listWebAppSitePushSettingsSlot"));

export { ListWebAppSyncFunctionTriggersArgs, ListWebAppSyncFunctionTriggersResult, ListWebAppSyncFunctionTriggersOutputArgs } from "./listWebAppSyncFunctionTriggers";
export const listWebAppSyncFunctionTriggers: typeof import("./listWebAppSyncFunctionTriggers").listWebAppSyncFunctionTriggers = null as any;
export const listWebAppSyncFunctionTriggersOutput: typeof import("./listWebAppSyncFunctionTriggers").listWebAppSyncFunctionTriggersOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppSyncFunctionTriggers","listWebAppSyncFunctionTriggersOutput"], () => require("./listWebAppSyncFunctionTriggers"));

export { ListWebAppSyncFunctionTriggersSlotArgs, ListWebAppSyncFunctionTriggersSlotResult, ListWebAppSyncFunctionTriggersSlotOutputArgs } from "./listWebAppSyncFunctionTriggersSlot";
export const listWebAppSyncFunctionTriggersSlot: typeof import("./listWebAppSyncFunctionTriggersSlot").listWebAppSyncFunctionTriggersSlot = null as any;
export const listWebAppSyncFunctionTriggersSlotOutput: typeof import("./listWebAppSyncFunctionTriggersSlot").listWebAppSyncFunctionTriggersSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppSyncFunctionTriggersSlot","listWebAppSyncFunctionTriggersSlotOutput"], () => require("./listWebAppSyncFunctionTriggersSlot"));

export { StaticSiteArgs } from "./staticSite";
export type StaticSite = import("./staticSite").StaticSite;
export const StaticSite: typeof import("./staticSite").StaticSite = null as any;
utilities.lazyLoad(exports, ["StaticSite"], () => require("./staticSite"));

export { WebAppArgs } from "./webApp";
export type WebApp = import("./webApp").WebApp;
export const WebApp: typeof import("./webApp").WebApp = null as any;
utilities.lazyLoad(exports, ["WebApp"], () => require("./webApp"));

export { WebAppApplicationSettingsArgs } from "./webAppApplicationSettings";
export type WebAppApplicationSettings = import("./webAppApplicationSettings").WebAppApplicationSettings;
export const WebAppApplicationSettings: typeof import("./webAppApplicationSettings").WebAppApplicationSettings = null as any;
utilities.lazyLoad(exports, ["WebAppApplicationSettings"], () => require("./webAppApplicationSettings"));

export { WebAppApplicationSettingsSlotArgs } from "./webAppApplicationSettingsSlot";
export type WebAppApplicationSettingsSlot = import("./webAppApplicationSettingsSlot").WebAppApplicationSettingsSlot;
export const WebAppApplicationSettingsSlot: typeof import("./webAppApplicationSettingsSlot").WebAppApplicationSettingsSlot = null as any;
utilities.lazyLoad(exports, ["WebAppApplicationSettingsSlot"], () => require("./webAppApplicationSettingsSlot"));

export { WebAppAuthSettingsArgs } from "./webAppAuthSettings";
export type WebAppAuthSettings = import("./webAppAuthSettings").WebAppAuthSettings;
export const WebAppAuthSettings: typeof import("./webAppAuthSettings").WebAppAuthSettings = null as any;
utilities.lazyLoad(exports, ["WebAppAuthSettings"], () => require("./webAppAuthSettings"));

export { WebAppAuthSettingsSlotArgs } from "./webAppAuthSettingsSlot";
export type WebAppAuthSettingsSlot = import("./webAppAuthSettingsSlot").WebAppAuthSettingsSlot;
export const WebAppAuthSettingsSlot: typeof import("./webAppAuthSettingsSlot").WebAppAuthSettingsSlot = null as any;
utilities.lazyLoad(exports, ["WebAppAuthSettingsSlot"], () => require("./webAppAuthSettingsSlot"));

export { WebAppAuthSettingsV2Args } from "./webAppAuthSettingsV2";
export type WebAppAuthSettingsV2 = import("./webAppAuthSettingsV2").WebAppAuthSettingsV2;
export const WebAppAuthSettingsV2: typeof import("./webAppAuthSettingsV2").WebAppAuthSettingsV2 = null as any;
utilities.lazyLoad(exports, ["WebAppAuthSettingsV2"], () => require("./webAppAuthSettingsV2"));

export { WebAppAuthSettingsV2SlotArgs } from "./webAppAuthSettingsV2Slot";
export type WebAppAuthSettingsV2Slot = import("./webAppAuthSettingsV2Slot").WebAppAuthSettingsV2Slot;
export const WebAppAuthSettingsV2Slot: typeof import("./webAppAuthSettingsV2Slot").WebAppAuthSettingsV2Slot = null as any;
utilities.lazyLoad(exports, ["WebAppAuthSettingsV2Slot"], () => require("./webAppAuthSettingsV2Slot"));

export { WebAppAzureStorageAccountsArgs } from "./webAppAzureStorageAccounts";
export type WebAppAzureStorageAccounts = import("./webAppAzureStorageAccounts").WebAppAzureStorageAccounts;
export const WebAppAzureStorageAccounts: typeof import("./webAppAzureStorageAccounts").WebAppAzureStorageAccounts = null as any;
utilities.lazyLoad(exports, ["WebAppAzureStorageAccounts"], () => require("./webAppAzureStorageAccounts"));

export { WebAppAzureStorageAccountsSlotArgs } from "./webAppAzureStorageAccountsSlot";
export type WebAppAzureStorageAccountsSlot = import("./webAppAzureStorageAccountsSlot").WebAppAzureStorageAccountsSlot;
export const WebAppAzureStorageAccountsSlot: typeof import("./webAppAzureStorageAccountsSlot").WebAppAzureStorageAccountsSlot = null as any;
utilities.lazyLoad(exports, ["WebAppAzureStorageAccountsSlot"], () => require("./webAppAzureStorageAccountsSlot"));

export { WebAppBackupConfigurationArgs } from "./webAppBackupConfiguration";
export type WebAppBackupConfiguration = import("./webAppBackupConfiguration").WebAppBackupConfiguration;
export const WebAppBackupConfiguration: typeof import("./webAppBackupConfiguration").WebAppBackupConfiguration = null as any;
utilities.lazyLoad(exports, ["WebAppBackupConfiguration"], () => require("./webAppBackupConfiguration"));

export { WebAppBackupConfigurationSlotArgs } from "./webAppBackupConfigurationSlot";
export type WebAppBackupConfigurationSlot = import("./webAppBackupConfigurationSlot").WebAppBackupConfigurationSlot;
export const WebAppBackupConfigurationSlot: typeof import("./webAppBackupConfigurationSlot").WebAppBackupConfigurationSlot = null as any;
utilities.lazyLoad(exports, ["WebAppBackupConfigurationSlot"], () => require("./webAppBackupConfigurationSlot"));

export { WebAppConnectionStringsArgs } from "./webAppConnectionStrings";
export type WebAppConnectionStrings = import("./webAppConnectionStrings").WebAppConnectionStrings;
export const WebAppConnectionStrings: typeof import("./webAppConnectionStrings").WebAppConnectionStrings = null as any;
utilities.lazyLoad(exports, ["WebAppConnectionStrings"], () => require("./webAppConnectionStrings"));

export { WebAppConnectionStringsSlotArgs } from "./webAppConnectionStringsSlot";
export type WebAppConnectionStringsSlot = import("./webAppConnectionStringsSlot").WebAppConnectionStringsSlot;
export const WebAppConnectionStringsSlot: typeof import("./webAppConnectionStringsSlot").WebAppConnectionStringsSlot = null as any;
utilities.lazyLoad(exports, ["WebAppConnectionStringsSlot"], () => require("./webAppConnectionStringsSlot"));

export { WebAppDeploymentArgs } from "./webAppDeployment";
export type WebAppDeployment = import("./webAppDeployment").WebAppDeployment;
export const WebAppDeployment: typeof import("./webAppDeployment").WebAppDeployment = null as any;
utilities.lazyLoad(exports, ["WebAppDeployment"], () => require("./webAppDeployment"));

export { WebAppDeploymentSlotArgs } from "./webAppDeploymentSlot";
export type WebAppDeploymentSlot = import("./webAppDeploymentSlot").WebAppDeploymentSlot;
export const WebAppDeploymentSlot: typeof import("./webAppDeploymentSlot").WebAppDeploymentSlot = null as any;
utilities.lazyLoad(exports, ["WebAppDeploymentSlot"], () => require("./webAppDeploymentSlot"));

export { WebAppDiagnosticLogsConfigurationArgs } from "./webAppDiagnosticLogsConfiguration";
export type WebAppDiagnosticLogsConfiguration = import("./webAppDiagnosticLogsConfiguration").WebAppDiagnosticLogsConfiguration;
export const WebAppDiagnosticLogsConfiguration: typeof import("./webAppDiagnosticLogsConfiguration").WebAppDiagnosticLogsConfiguration = null as any;
utilities.lazyLoad(exports, ["WebAppDiagnosticLogsConfiguration"], () => require("./webAppDiagnosticLogsConfiguration"));

export { WebAppDomainOwnershipIdentifierArgs } from "./webAppDomainOwnershipIdentifier";
export type WebAppDomainOwnershipIdentifier = import("./webAppDomainOwnershipIdentifier").WebAppDomainOwnershipIdentifier;
export const WebAppDomainOwnershipIdentifier: typeof import("./webAppDomainOwnershipIdentifier").WebAppDomainOwnershipIdentifier = null as any;
utilities.lazyLoad(exports, ["WebAppDomainOwnershipIdentifier"], () => require("./webAppDomainOwnershipIdentifier"));

export { WebAppDomainOwnershipIdentifierSlotArgs } from "./webAppDomainOwnershipIdentifierSlot";
export type WebAppDomainOwnershipIdentifierSlot = import("./webAppDomainOwnershipIdentifierSlot").WebAppDomainOwnershipIdentifierSlot;
export const WebAppDomainOwnershipIdentifierSlot: typeof import("./webAppDomainOwnershipIdentifierSlot").WebAppDomainOwnershipIdentifierSlot = null as any;
utilities.lazyLoad(exports, ["WebAppDomainOwnershipIdentifierSlot"], () => require("./webAppDomainOwnershipIdentifierSlot"));

export { WebAppFtpAllowedArgs } from "./webAppFtpAllowed";
export type WebAppFtpAllowed = import("./webAppFtpAllowed").WebAppFtpAllowed;
export const WebAppFtpAllowed: typeof import("./webAppFtpAllowed").WebAppFtpAllowed = null as any;
utilities.lazyLoad(exports, ["WebAppFtpAllowed"], () => require("./webAppFtpAllowed"));

export { WebAppFunctionArgs } from "./webAppFunction";
export type WebAppFunction = import("./webAppFunction").WebAppFunction;
export const WebAppFunction: typeof import("./webAppFunction").WebAppFunction = null as any;
utilities.lazyLoad(exports, ["WebAppFunction"], () => require("./webAppFunction"));

export { WebAppHostNameBindingArgs } from "./webAppHostNameBinding";
export type WebAppHostNameBinding = import("./webAppHostNameBinding").WebAppHostNameBinding;
export const WebAppHostNameBinding: typeof import("./webAppHostNameBinding").WebAppHostNameBinding = null as any;
utilities.lazyLoad(exports, ["WebAppHostNameBinding"], () => require("./webAppHostNameBinding"));

export { WebAppHostNameBindingSlotArgs } from "./webAppHostNameBindingSlot";
export type WebAppHostNameBindingSlot = import("./webAppHostNameBindingSlot").WebAppHostNameBindingSlot;
export const WebAppHostNameBindingSlot: typeof import("./webAppHostNameBindingSlot").WebAppHostNameBindingSlot = null as any;
utilities.lazyLoad(exports, ["WebAppHostNameBindingSlot"], () => require("./webAppHostNameBindingSlot"));

export { WebAppHybridConnectionArgs } from "./webAppHybridConnection";
export type WebAppHybridConnection = import("./webAppHybridConnection").WebAppHybridConnection;
export const WebAppHybridConnection: typeof import("./webAppHybridConnection").WebAppHybridConnection = null as any;
utilities.lazyLoad(exports, ["WebAppHybridConnection"], () => require("./webAppHybridConnection"));

export { WebAppHybridConnectionSlotArgs } from "./webAppHybridConnectionSlot";
export type WebAppHybridConnectionSlot = import("./webAppHybridConnectionSlot").WebAppHybridConnectionSlot;
export const WebAppHybridConnectionSlot: typeof import("./webAppHybridConnectionSlot").WebAppHybridConnectionSlot = null as any;
utilities.lazyLoad(exports, ["WebAppHybridConnectionSlot"], () => require("./webAppHybridConnectionSlot"));

export { WebAppInstanceFunctionSlotArgs } from "./webAppInstanceFunctionSlot";
export type WebAppInstanceFunctionSlot = import("./webAppInstanceFunctionSlot").WebAppInstanceFunctionSlot;
export const WebAppInstanceFunctionSlot: typeof import("./webAppInstanceFunctionSlot").WebAppInstanceFunctionSlot = null as any;
utilities.lazyLoad(exports, ["WebAppInstanceFunctionSlot"], () => require("./webAppInstanceFunctionSlot"));

export { WebAppMetadataArgs } from "./webAppMetadata";
export type WebAppMetadata = import("./webAppMetadata").WebAppMetadata;
export const WebAppMetadata: typeof import("./webAppMetadata").WebAppMetadata = null as any;
utilities.lazyLoad(exports, ["WebAppMetadata"], () => require("./webAppMetadata"));

export { WebAppMetadataSlotArgs } from "./webAppMetadataSlot";
export type WebAppMetadataSlot = import("./webAppMetadataSlot").WebAppMetadataSlot;
export const WebAppMetadataSlot: typeof import("./webAppMetadataSlot").WebAppMetadataSlot = null as any;
utilities.lazyLoad(exports, ["WebAppMetadataSlot"], () => require("./webAppMetadataSlot"));

export { WebAppPremierAddOnArgs } from "./webAppPremierAddOn";
export type WebAppPremierAddOn = import("./webAppPremierAddOn").WebAppPremierAddOn;
export const WebAppPremierAddOn: typeof import("./webAppPremierAddOn").WebAppPremierAddOn = null as any;
utilities.lazyLoad(exports, ["WebAppPremierAddOn"], () => require("./webAppPremierAddOn"));

export { WebAppPremierAddOnSlotArgs } from "./webAppPremierAddOnSlot";
export type WebAppPremierAddOnSlot = import("./webAppPremierAddOnSlot").WebAppPremierAddOnSlot;
export const WebAppPremierAddOnSlot: typeof import("./webAppPremierAddOnSlot").WebAppPremierAddOnSlot = null as any;
utilities.lazyLoad(exports, ["WebAppPremierAddOnSlot"], () => require("./webAppPremierAddOnSlot"));

export { WebAppPrivateEndpointConnectionArgs } from "./webAppPrivateEndpointConnection";
export type WebAppPrivateEndpointConnection = import("./webAppPrivateEndpointConnection").WebAppPrivateEndpointConnection;
export const WebAppPrivateEndpointConnection: typeof import("./webAppPrivateEndpointConnection").WebAppPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["WebAppPrivateEndpointConnection"], () => require("./webAppPrivateEndpointConnection"));

export { WebAppPublicCertificateArgs } from "./webAppPublicCertificate";
export type WebAppPublicCertificate = import("./webAppPublicCertificate").WebAppPublicCertificate;
export const WebAppPublicCertificate: typeof import("./webAppPublicCertificate").WebAppPublicCertificate = null as any;
utilities.lazyLoad(exports, ["WebAppPublicCertificate"], () => require("./webAppPublicCertificate"));

export { WebAppPublicCertificateSlotArgs } from "./webAppPublicCertificateSlot";
export type WebAppPublicCertificateSlot = import("./webAppPublicCertificateSlot").WebAppPublicCertificateSlot;
export const WebAppPublicCertificateSlot: typeof import("./webAppPublicCertificateSlot").WebAppPublicCertificateSlot = null as any;
utilities.lazyLoad(exports, ["WebAppPublicCertificateSlot"], () => require("./webAppPublicCertificateSlot"));

export { WebAppRelayServiceConnectionArgs } from "./webAppRelayServiceConnection";
export type WebAppRelayServiceConnection = import("./webAppRelayServiceConnection").WebAppRelayServiceConnection;
export const WebAppRelayServiceConnection: typeof import("./webAppRelayServiceConnection").WebAppRelayServiceConnection = null as any;
utilities.lazyLoad(exports, ["WebAppRelayServiceConnection"], () => require("./webAppRelayServiceConnection"));

export { WebAppRelayServiceConnectionSlotArgs } from "./webAppRelayServiceConnectionSlot";
export type WebAppRelayServiceConnectionSlot = import("./webAppRelayServiceConnectionSlot").WebAppRelayServiceConnectionSlot;
export const WebAppRelayServiceConnectionSlot: typeof import("./webAppRelayServiceConnectionSlot").WebAppRelayServiceConnectionSlot = null as any;
utilities.lazyLoad(exports, ["WebAppRelayServiceConnectionSlot"], () => require("./webAppRelayServiceConnectionSlot"));

export { WebAppScmAllowedArgs } from "./webAppScmAllowed";
export type WebAppScmAllowed = import("./webAppScmAllowed").WebAppScmAllowed;
export const WebAppScmAllowed: typeof import("./webAppScmAllowed").WebAppScmAllowed = null as any;
utilities.lazyLoad(exports, ["WebAppScmAllowed"], () => require("./webAppScmAllowed"));

export { WebAppSiteExtensionArgs } from "./webAppSiteExtension";
export type WebAppSiteExtension = import("./webAppSiteExtension").WebAppSiteExtension;
export const WebAppSiteExtension: typeof import("./webAppSiteExtension").WebAppSiteExtension = null as any;
utilities.lazyLoad(exports, ["WebAppSiteExtension"], () => require("./webAppSiteExtension"));

export { WebAppSiteExtensionSlotArgs } from "./webAppSiteExtensionSlot";
export type WebAppSiteExtensionSlot = import("./webAppSiteExtensionSlot").WebAppSiteExtensionSlot;
export const WebAppSiteExtensionSlot: typeof import("./webAppSiteExtensionSlot").WebAppSiteExtensionSlot = null as any;
utilities.lazyLoad(exports, ["WebAppSiteExtensionSlot"], () => require("./webAppSiteExtensionSlot"));

export { WebAppSitePushSettingsArgs } from "./webAppSitePushSettings";
export type WebAppSitePushSettings = import("./webAppSitePushSettings").WebAppSitePushSettings;
export const WebAppSitePushSettings: typeof import("./webAppSitePushSettings").WebAppSitePushSettings = null as any;
utilities.lazyLoad(exports, ["WebAppSitePushSettings"], () => require("./webAppSitePushSettings"));

export { WebAppSitePushSettingsSlotArgs } from "./webAppSitePushSettingsSlot";
export type WebAppSitePushSettingsSlot = import("./webAppSitePushSettingsSlot").WebAppSitePushSettingsSlot;
export const WebAppSitePushSettingsSlot: typeof import("./webAppSitePushSettingsSlot").WebAppSitePushSettingsSlot = null as any;
utilities.lazyLoad(exports, ["WebAppSitePushSettingsSlot"], () => require("./webAppSitePushSettingsSlot"));

export { WebAppSlotArgs } from "./webAppSlot";
export type WebAppSlot = import("./webAppSlot").WebAppSlot;
export const WebAppSlot: typeof import("./webAppSlot").WebAppSlot = null as any;
utilities.lazyLoad(exports, ["WebAppSlot"], () => require("./webAppSlot"));

export { WebAppSlotConfigurationNamesArgs } from "./webAppSlotConfigurationNames";
export type WebAppSlotConfigurationNames = import("./webAppSlotConfigurationNames").WebAppSlotConfigurationNames;
export const WebAppSlotConfigurationNames: typeof import("./webAppSlotConfigurationNames").WebAppSlotConfigurationNames = null as any;
utilities.lazyLoad(exports, ["WebAppSlotConfigurationNames"], () => require("./webAppSlotConfigurationNames"));

export { WebAppSourceControlArgs } from "./webAppSourceControl";
export type WebAppSourceControl = import("./webAppSourceControl").WebAppSourceControl;
export const WebAppSourceControl: typeof import("./webAppSourceControl").WebAppSourceControl = null as any;
utilities.lazyLoad(exports, ["WebAppSourceControl"], () => require("./webAppSourceControl"));

export { WebAppSourceControlSlotArgs } from "./webAppSourceControlSlot";
export type WebAppSourceControlSlot = import("./webAppSourceControlSlot").WebAppSourceControlSlot;
export const WebAppSourceControlSlot: typeof import("./webAppSourceControlSlot").WebAppSourceControlSlot = null as any;
utilities.lazyLoad(exports, ["WebAppSourceControlSlot"], () => require("./webAppSourceControlSlot"));

export { WebAppSwiftVirtualNetworkConnectionArgs } from "./webAppSwiftVirtualNetworkConnection";
export type WebAppSwiftVirtualNetworkConnection = import("./webAppSwiftVirtualNetworkConnection").WebAppSwiftVirtualNetworkConnection;
export const WebAppSwiftVirtualNetworkConnection: typeof import("./webAppSwiftVirtualNetworkConnection").WebAppSwiftVirtualNetworkConnection = null as any;
utilities.lazyLoad(exports, ["WebAppSwiftVirtualNetworkConnection"], () => require("./webAppSwiftVirtualNetworkConnection"));

export { WebAppSwiftVirtualNetworkConnectionSlotArgs } from "./webAppSwiftVirtualNetworkConnectionSlot";
export type WebAppSwiftVirtualNetworkConnectionSlot = import("./webAppSwiftVirtualNetworkConnectionSlot").WebAppSwiftVirtualNetworkConnectionSlot;
export const WebAppSwiftVirtualNetworkConnectionSlot: typeof import("./webAppSwiftVirtualNetworkConnectionSlot").WebAppSwiftVirtualNetworkConnectionSlot = null as any;
utilities.lazyLoad(exports, ["WebAppSwiftVirtualNetworkConnectionSlot"], () => require("./webAppSwiftVirtualNetworkConnectionSlot"));

export { WebAppVnetConnectionArgs } from "./webAppVnetConnection";
export type WebAppVnetConnection = import("./webAppVnetConnection").WebAppVnetConnection;
export const WebAppVnetConnection: typeof import("./webAppVnetConnection").WebAppVnetConnection = null as any;
utilities.lazyLoad(exports, ["WebAppVnetConnection"], () => require("./webAppVnetConnection"));

export { WebAppVnetConnectionSlotArgs } from "./webAppVnetConnectionSlot";
export type WebAppVnetConnectionSlot = import("./webAppVnetConnectionSlot").WebAppVnetConnectionSlot;
export const WebAppVnetConnectionSlot: typeof import("./webAppVnetConnectionSlot").WebAppVnetConnectionSlot = null as any;
utilities.lazyLoad(exports, ["WebAppVnetConnectionSlot"], () => require("./webAppVnetConnectionSlot"));


// Export enums:
export * from "../types/enums/v20201001";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:web/v20201001:AppServiceEnvironment":
                return new AppServiceEnvironment(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:AppServicePlan":
                return new AppServicePlan(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:AppServicePlanRouteForVnet":
                return new AppServicePlanRouteForVnet(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:StaticSite":
                return new StaticSite(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebApp":
                return new WebApp(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppApplicationSettings":
                return new WebAppApplicationSettings(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppApplicationSettingsSlot":
                return new WebAppApplicationSettingsSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppAuthSettings":
                return new WebAppAuthSettings(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppAuthSettingsSlot":
                return new WebAppAuthSettingsSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppAuthSettingsV2":
                return new WebAppAuthSettingsV2(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppAuthSettingsV2Slot":
                return new WebAppAuthSettingsV2Slot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppAzureStorageAccounts":
                return new WebAppAzureStorageAccounts(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppAzureStorageAccountsSlot":
                return new WebAppAzureStorageAccountsSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppBackupConfiguration":
                return new WebAppBackupConfiguration(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppBackupConfigurationSlot":
                return new WebAppBackupConfigurationSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppConnectionStrings":
                return new WebAppConnectionStrings(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppConnectionStringsSlot":
                return new WebAppConnectionStringsSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppDeployment":
                return new WebAppDeployment(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppDeploymentSlot":
                return new WebAppDeploymentSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppDiagnosticLogsConfiguration":
                return new WebAppDiagnosticLogsConfiguration(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppDomainOwnershipIdentifier":
                return new WebAppDomainOwnershipIdentifier(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppDomainOwnershipIdentifierSlot":
                return new WebAppDomainOwnershipIdentifierSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppFtpAllowed":
                return new WebAppFtpAllowed(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppFunction":
                return new WebAppFunction(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppHostNameBinding":
                return new WebAppHostNameBinding(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppHostNameBindingSlot":
                return new WebAppHostNameBindingSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppHybridConnection":
                return new WebAppHybridConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppHybridConnectionSlot":
                return new WebAppHybridConnectionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppInstanceFunctionSlot":
                return new WebAppInstanceFunctionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppMetadata":
                return new WebAppMetadata(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppMetadataSlot":
                return new WebAppMetadataSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppPremierAddOn":
                return new WebAppPremierAddOn(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppPremierAddOnSlot":
                return new WebAppPremierAddOnSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppPrivateEndpointConnection":
                return new WebAppPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppPublicCertificate":
                return new WebAppPublicCertificate(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppPublicCertificateSlot":
                return new WebAppPublicCertificateSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppRelayServiceConnection":
                return new WebAppRelayServiceConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppRelayServiceConnectionSlot":
                return new WebAppRelayServiceConnectionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppScmAllowed":
                return new WebAppScmAllowed(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppSiteExtension":
                return new WebAppSiteExtension(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppSiteExtensionSlot":
                return new WebAppSiteExtensionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppSitePushSettings":
                return new WebAppSitePushSettings(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppSitePushSettingsSlot":
                return new WebAppSitePushSettingsSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppSlot":
                return new WebAppSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppSlotConfigurationNames":
                return new WebAppSlotConfigurationNames(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppSourceControl":
                return new WebAppSourceControl(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppSourceControlSlot":
                return new WebAppSourceControlSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppSwiftVirtualNetworkConnection":
                return new WebAppSwiftVirtualNetworkConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppSwiftVirtualNetworkConnectionSlot":
                return new WebAppSwiftVirtualNetworkConnectionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppVnetConnection":
                return new WebAppVnetConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20201001:WebAppVnetConnectionSlot":
                return new WebAppVnetConnectionSlot(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "web/v20201001", _module)
