import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AppServiceEnvironmentArgs } from "./appServiceEnvironment";
export type AppServiceEnvironment = import("./appServiceEnvironment").AppServiceEnvironment;
export const AppServiceEnvironment: typeof import("./appServiceEnvironment").AppServiceEnvironment = null as any;
utilities.lazyLoad(exports, ["AppServiceEnvironment"], () => require("./appServiceEnvironment"));

export { AppServiceEnvironmentAseCustomDnsSuffixConfigurationArgs } from "./appServiceEnvironmentAseCustomDnsSuffixConfiguration";
export type AppServiceEnvironmentAseCustomDnsSuffixConfiguration = import("./appServiceEnvironmentAseCustomDnsSuffixConfiguration").AppServiceEnvironmentAseCustomDnsSuffixConfiguration;
export const AppServiceEnvironmentAseCustomDnsSuffixConfiguration: typeof import("./appServiceEnvironmentAseCustomDnsSuffixConfiguration").AppServiceEnvironmentAseCustomDnsSuffixConfiguration = null as any;
utilities.lazyLoad(exports, ["AppServiceEnvironmentAseCustomDnsSuffixConfiguration"], () => require("./appServiceEnvironmentAseCustomDnsSuffixConfiguration"));

export { AppServiceEnvironmentPrivateEndpointConnectionArgs } from "./appServiceEnvironmentPrivateEndpointConnection";
export type AppServiceEnvironmentPrivateEndpointConnection = import("./appServiceEnvironmentPrivateEndpointConnection").AppServiceEnvironmentPrivateEndpointConnection;
export const AppServiceEnvironmentPrivateEndpointConnection: typeof import("./appServiceEnvironmentPrivateEndpointConnection").AppServiceEnvironmentPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["AppServiceEnvironmentPrivateEndpointConnection"], () => require("./appServiceEnvironmentPrivateEndpointConnection"));

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

export { GetAppServiceEnvironmentAseCustomDnsSuffixConfigurationArgs, GetAppServiceEnvironmentAseCustomDnsSuffixConfigurationResult, GetAppServiceEnvironmentAseCustomDnsSuffixConfigurationOutputArgs } from "./getAppServiceEnvironmentAseCustomDnsSuffixConfiguration";
export const getAppServiceEnvironmentAseCustomDnsSuffixConfiguration: typeof import("./getAppServiceEnvironmentAseCustomDnsSuffixConfiguration").getAppServiceEnvironmentAseCustomDnsSuffixConfiguration = null as any;
export const getAppServiceEnvironmentAseCustomDnsSuffixConfigurationOutput: typeof import("./getAppServiceEnvironmentAseCustomDnsSuffixConfiguration").getAppServiceEnvironmentAseCustomDnsSuffixConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getAppServiceEnvironmentAseCustomDnsSuffixConfiguration","getAppServiceEnvironmentAseCustomDnsSuffixConfigurationOutput"], () => require("./getAppServiceEnvironmentAseCustomDnsSuffixConfiguration"));

export { GetAppServiceEnvironmentPrivateEndpointConnectionArgs, GetAppServiceEnvironmentPrivateEndpointConnectionResult, GetAppServiceEnvironmentPrivateEndpointConnectionOutputArgs } from "./getAppServiceEnvironmentPrivateEndpointConnection";
export const getAppServiceEnvironmentPrivateEndpointConnection: typeof import("./getAppServiceEnvironmentPrivateEndpointConnection").getAppServiceEnvironmentPrivateEndpointConnection = null as any;
export const getAppServiceEnvironmentPrivateEndpointConnectionOutput: typeof import("./getAppServiceEnvironmentPrivateEndpointConnection").getAppServiceEnvironmentPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getAppServiceEnvironmentPrivateEndpointConnection","getAppServiceEnvironmentPrivateEndpointConnectionOutput"], () => require("./getAppServiceEnvironmentPrivateEndpointConnection"));

export { GetAppServicePlanArgs, GetAppServicePlanResult, GetAppServicePlanOutputArgs } from "./getAppServicePlan";
export const getAppServicePlan: typeof import("./getAppServicePlan").getAppServicePlan = null as any;
export const getAppServicePlanOutput: typeof import("./getAppServicePlan").getAppServicePlanOutput = null as any;
utilities.lazyLoad(exports, ["getAppServicePlan","getAppServicePlanOutput"], () => require("./getAppServicePlan"));

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

export { GetKubeEnvironmentArgs, GetKubeEnvironmentResult, GetKubeEnvironmentOutputArgs } from "./getKubeEnvironment";
export const getKubeEnvironment: typeof import("./getKubeEnvironment").getKubeEnvironment = null as any;
export const getKubeEnvironmentOutput: typeof import("./getKubeEnvironment").getKubeEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getKubeEnvironment","getKubeEnvironmentOutput"], () => require("./getKubeEnvironment"));

export { GetStaticSiteArgs, GetStaticSiteResult, GetStaticSiteOutputArgs } from "./getStaticSite";
export const getStaticSite: typeof import("./getStaticSite").getStaticSite = null as any;
export const getStaticSiteOutput: typeof import("./getStaticSite").getStaticSiteOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSite","getStaticSiteOutput"], () => require("./getStaticSite"));

export { GetStaticSiteBuildDatabaseConnectionArgs, GetStaticSiteBuildDatabaseConnectionResult, GetStaticSiteBuildDatabaseConnectionOutputArgs } from "./getStaticSiteBuildDatabaseConnection";
export const getStaticSiteBuildDatabaseConnection: typeof import("./getStaticSiteBuildDatabaseConnection").getStaticSiteBuildDatabaseConnection = null as any;
export const getStaticSiteBuildDatabaseConnectionOutput: typeof import("./getStaticSiteBuildDatabaseConnection").getStaticSiteBuildDatabaseConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSiteBuildDatabaseConnection","getStaticSiteBuildDatabaseConnectionOutput"], () => require("./getStaticSiteBuildDatabaseConnection"));

export { GetStaticSiteCustomDomainArgs, GetStaticSiteCustomDomainResult, GetStaticSiteCustomDomainOutputArgs } from "./getStaticSiteCustomDomain";
export const getStaticSiteCustomDomain: typeof import("./getStaticSiteCustomDomain").getStaticSiteCustomDomain = null as any;
export const getStaticSiteCustomDomainOutput: typeof import("./getStaticSiteCustomDomain").getStaticSiteCustomDomainOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSiteCustomDomain","getStaticSiteCustomDomainOutput"], () => require("./getStaticSiteCustomDomain"));

export { GetStaticSiteDatabaseConnectionArgs, GetStaticSiteDatabaseConnectionResult, GetStaticSiteDatabaseConnectionOutputArgs } from "./getStaticSiteDatabaseConnection";
export const getStaticSiteDatabaseConnection: typeof import("./getStaticSiteDatabaseConnection").getStaticSiteDatabaseConnection = null as any;
export const getStaticSiteDatabaseConnectionOutput: typeof import("./getStaticSiteDatabaseConnection").getStaticSiteDatabaseConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSiteDatabaseConnection","getStaticSiteDatabaseConnectionOutput"], () => require("./getStaticSiteDatabaseConnection"));

export { GetStaticSiteLinkedBackendArgs, GetStaticSiteLinkedBackendResult, GetStaticSiteLinkedBackendOutputArgs } from "./getStaticSiteLinkedBackend";
export const getStaticSiteLinkedBackend: typeof import("./getStaticSiteLinkedBackend").getStaticSiteLinkedBackend = null as any;
export const getStaticSiteLinkedBackendOutput: typeof import("./getStaticSiteLinkedBackend").getStaticSiteLinkedBackendOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSiteLinkedBackend","getStaticSiteLinkedBackendOutput"], () => require("./getStaticSiteLinkedBackend"));

export { GetStaticSiteLinkedBackendForBuildArgs, GetStaticSiteLinkedBackendForBuildResult, GetStaticSiteLinkedBackendForBuildOutputArgs } from "./getStaticSiteLinkedBackendForBuild";
export const getStaticSiteLinkedBackendForBuild: typeof import("./getStaticSiteLinkedBackendForBuild").getStaticSiteLinkedBackendForBuild = null as any;
export const getStaticSiteLinkedBackendForBuildOutput: typeof import("./getStaticSiteLinkedBackendForBuild").getStaticSiteLinkedBackendForBuildOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSiteLinkedBackendForBuild","getStaticSiteLinkedBackendForBuildOutput"], () => require("./getStaticSiteLinkedBackendForBuild"));

export { GetStaticSitePrivateEndpointConnectionArgs, GetStaticSitePrivateEndpointConnectionResult, GetStaticSitePrivateEndpointConnectionOutputArgs } from "./getStaticSitePrivateEndpointConnection";
export const getStaticSitePrivateEndpointConnection: typeof import("./getStaticSitePrivateEndpointConnection").getStaticSitePrivateEndpointConnection = null as any;
export const getStaticSitePrivateEndpointConnectionOutput: typeof import("./getStaticSitePrivateEndpointConnection").getStaticSitePrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSitePrivateEndpointConnection","getStaticSitePrivateEndpointConnectionOutput"], () => require("./getStaticSitePrivateEndpointConnection"));

export { GetStaticSiteUserProvidedFunctionAppForStaticSiteArgs, GetStaticSiteUserProvidedFunctionAppForStaticSiteResult, GetStaticSiteUserProvidedFunctionAppForStaticSiteOutputArgs } from "./getStaticSiteUserProvidedFunctionAppForStaticSite";
export const getStaticSiteUserProvidedFunctionAppForStaticSite: typeof import("./getStaticSiteUserProvidedFunctionAppForStaticSite").getStaticSiteUserProvidedFunctionAppForStaticSite = null as any;
export const getStaticSiteUserProvidedFunctionAppForStaticSiteOutput: typeof import("./getStaticSiteUserProvidedFunctionAppForStaticSite").getStaticSiteUserProvidedFunctionAppForStaticSiteOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSiteUserProvidedFunctionAppForStaticSite","getStaticSiteUserProvidedFunctionAppForStaticSiteOutput"], () => require("./getStaticSiteUserProvidedFunctionAppForStaticSite"));

export { GetStaticSiteUserProvidedFunctionAppForStaticSiteBuildArgs, GetStaticSiteUserProvidedFunctionAppForStaticSiteBuildResult, GetStaticSiteUserProvidedFunctionAppForStaticSiteBuildOutputArgs } from "./getStaticSiteUserProvidedFunctionAppForStaticSiteBuild";
export const getStaticSiteUserProvidedFunctionAppForStaticSiteBuild: typeof import("./getStaticSiteUserProvidedFunctionAppForStaticSiteBuild").getStaticSiteUserProvidedFunctionAppForStaticSiteBuild = null as any;
export const getStaticSiteUserProvidedFunctionAppForStaticSiteBuildOutput: typeof import("./getStaticSiteUserProvidedFunctionAppForStaticSiteBuild").getStaticSiteUserProvidedFunctionAppForStaticSiteBuildOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSiteUserProvidedFunctionAppForStaticSiteBuild","getStaticSiteUserProvidedFunctionAppForStaticSiteBuildOutput"], () => require("./getStaticSiteUserProvidedFunctionAppForStaticSiteBuild"));

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

export { GetWebAppPrivateEndpointConnectionSlotArgs, GetWebAppPrivateEndpointConnectionSlotResult, GetWebAppPrivateEndpointConnectionSlotOutputArgs } from "./getWebAppPrivateEndpointConnectionSlot";
export const getWebAppPrivateEndpointConnectionSlot: typeof import("./getWebAppPrivateEndpointConnectionSlot").getWebAppPrivateEndpointConnectionSlot = null as any;
export const getWebAppPrivateEndpointConnectionSlotOutput: typeof import("./getWebAppPrivateEndpointConnectionSlot").getWebAppPrivateEndpointConnectionSlotOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppPrivateEndpointConnectionSlot","getWebAppPrivateEndpointConnectionSlotOutput"], () => require("./getWebAppPrivateEndpointConnectionSlot"));

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

export { KubeEnvironmentArgs } from "./kubeEnvironment";
export type KubeEnvironment = import("./kubeEnvironment").KubeEnvironment;
export const KubeEnvironment: typeof import("./kubeEnvironment").KubeEnvironment = null as any;
utilities.lazyLoad(exports, ["KubeEnvironment"], () => require("./kubeEnvironment"));

export { ListAppServicePlanHybridConnectionKeysArgs, ListAppServicePlanHybridConnectionKeysResult, ListAppServicePlanHybridConnectionKeysOutputArgs } from "./listAppServicePlanHybridConnectionKeys";
export const listAppServicePlanHybridConnectionKeys: typeof import("./listAppServicePlanHybridConnectionKeys").listAppServicePlanHybridConnectionKeys = null as any;
export const listAppServicePlanHybridConnectionKeysOutput: typeof import("./listAppServicePlanHybridConnectionKeys").listAppServicePlanHybridConnectionKeysOutput = null as any;
utilities.lazyLoad(exports, ["listAppServicePlanHybridConnectionKeys","listAppServicePlanHybridConnectionKeysOutput"], () => require("./listAppServicePlanHybridConnectionKeys"));

export { ListSiteIdentifiersAssignedToHostNameArgs, ListSiteIdentifiersAssignedToHostNameResult, ListSiteIdentifiersAssignedToHostNameOutputArgs } from "./listSiteIdentifiersAssignedToHostName";
export const listSiteIdentifiersAssignedToHostName: typeof import("./listSiteIdentifiersAssignedToHostName").listSiteIdentifiersAssignedToHostName = null as any;
export const listSiteIdentifiersAssignedToHostNameOutput: typeof import("./listSiteIdentifiersAssignedToHostName").listSiteIdentifiersAssignedToHostNameOutput = null as any;
utilities.lazyLoad(exports, ["listSiteIdentifiersAssignedToHostName","listSiteIdentifiersAssignedToHostNameOutput"], () => require("./listSiteIdentifiersAssignedToHostName"));

export { ListStaticSiteAppSettingsArgs, ListStaticSiteAppSettingsResult, ListStaticSiteAppSettingsOutputArgs } from "./listStaticSiteAppSettings";
export const listStaticSiteAppSettings: typeof import("./listStaticSiteAppSettings").listStaticSiteAppSettings = null as any;
export const listStaticSiteAppSettingsOutput: typeof import("./listStaticSiteAppSettings").listStaticSiteAppSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteAppSettings","listStaticSiteAppSettingsOutput"], () => require("./listStaticSiteAppSettings"));

export { ListStaticSiteBuildAppSettingsArgs, ListStaticSiteBuildAppSettingsResult, ListStaticSiteBuildAppSettingsOutputArgs } from "./listStaticSiteBuildAppSettings";
export const listStaticSiteBuildAppSettings: typeof import("./listStaticSiteBuildAppSettings").listStaticSiteBuildAppSettings = null as any;
export const listStaticSiteBuildAppSettingsOutput: typeof import("./listStaticSiteBuildAppSettings").listStaticSiteBuildAppSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteBuildAppSettings","listStaticSiteBuildAppSettingsOutput"], () => require("./listStaticSiteBuildAppSettings"));

export { ListStaticSiteBuildFunctionAppSettingsArgs, ListStaticSiteBuildFunctionAppSettingsResult, ListStaticSiteBuildFunctionAppSettingsOutputArgs } from "./listStaticSiteBuildFunctionAppSettings";
export const listStaticSiteBuildFunctionAppSettings: typeof import("./listStaticSiteBuildFunctionAppSettings").listStaticSiteBuildFunctionAppSettings = null as any;
export const listStaticSiteBuildFunctionAppSettingsOutput: typeof import("./listStaticSiteBuildFunctionAppSettings").listStaticSiteBuildFunctionAppSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteBuildFunctionAppSettings","listStaticSiteBuildFunctionAppSettingsOutput"], () => require("./listStaticSiteBuildFunctionAppSettings"));

export { ListStaticSiteConfiguredRolesArgs, ListStaticSiteConfiguredRolesResult, ListStaticSiteConfiguredRolesOutputArgs } from "./listStaticSiteConfiguredRoles";
export const listStaticSiteConfiguredRoles: typeof import("./listStaticSiteConfiguredRoles").listStaticSiteConfiguredRoles = null as any;
export const listStaticSiteConfiguredRolesOutput: typeof import("./listStaticSiteConfiguredRoles").listStaticSiteConfiguredRolesOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteConfiguredRoles","listStaticSiteConfiguredRolesOutput"], () => require("./listStaticSiteConfiguredRoles"));

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

export { ListWebAppWorkflowsConnectionsArgs, ListWebAppWorkflowsConnectionsResult, ListWebAppWorkflowsConnectionsOutputArgs } from "./listWebAppWorkflowsConnections";
export const listWebAppWorkflowsConnections: typeof import("./listWebAppWorkflowsConnections").listWebAppWorkflowsConnections = null as any;
export const listWebAppWorkflowsConnectionsOutput: typeof import("./listWebAppWorkflowsConnections").listWebAppWorkflowsConnectionsOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppWorkflowsConnections","listWebAppWorkflowsConnectionsOutput"], () => require("./listWebAppWorkflowsConnections"));

export { ListWebAppWorkflowsConnectionsSlotArgs, ListWebAppWorkflowsConnectionsSlotResult, ListWebAppWorkflowsConnectionsSlotOutputArgs } from "./listWebAppWorkflowsConnectionsSlot";
export const listWebAppWorkflowsConnectionsSlot: typeof import("./listWebAppWorkflowsConnectionsSlot").listWebAppWorkflowsConnectionsSlot = null as any;
export const listWebAppWorkflowsConnectionsSlotOutput: typeof import("./listWebAppWorkflowsConnectionsSlot").listWebAppWorkflowsConnectionsSlotOutput = null as any;
utilities.lazyLoad(exports, ["listWebAppWorkflowsConnectionsSlot","listWebAppWorkflowsConnectionsSlotOutput"], () => require("./listWebAppWorkflowsConnectionsSlot"));

export { ListWorkflowRunActionExpressionTracesArgs, ListWorkflowRunActionExpressionTracesResult, ListWorkflowRunActionExpressionTracesOutputArgs } from "./listWorkflowRunActionExpressionTraces";
export const listWorkflowRunActionExpressionTraces: typeof import("./listWorkflowRunActionExpressionTraces").listWorkflowRunActionExpressionTraces = null as any;
export const listWorkflowRunActionExpressionTracesOutput: typeof import("./listWorkflowRunActionExpressionTraces").listWorkflowRunActionExpressionTracesOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowRunActionExpressionTraces","listWorkflowRunActionExpressionTracesOutput"], () => require("./listWorkflowRunActionExpressionTraces"));

export { ListWorkflowRunActionRepetitionExpressionTracesArgs, ListWorkflowRunActionRepetitionExpressionTracesResult, ListWorkflowRunActionRepetitionExpressionTracesOutputArgs } from "./listWorkflowRunActionRepetitionExpressionTraces";
export const listWorkflowRunActionRepetitionExpressionTraces: typeof import("./listWorkflowRunActionRepetitionExpressionTraces").listWorkflowRunActionRepetitionExpressionTraces = null as any;
export const listWorkflowRunActionRepetitionExpressionTracesOutput: typeof import("./listWorkflowRunActionRepetitionExpressionTraces").listWorkflowRunActionRepetitionExpressionTracesOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowRunActionRepetitionExpressionTraces","listWorkflowRunActionRepetitionExpressionTracesOutput"], () => require("./listWorkflowRunActionRepetitionExpressionTraces"));

export { ListWorkflowTriggerCallbackUrlArgs, ListWorkflowTriggerCallbackUrlResult, ListWorkflowTriggerCallbackUrlOutputArgs } from "./listWorkflowTriggerCallbackUrl";
export const listWorkflowTriggerCallbackUrl: typeof import("./listWorkflowTriggerCallbackUrl").listWorkflowTriggerCallbackUrl = null as any;
export const listWorkflowTriggerCallbackUrlOutput: typeof import("./listWorkflowTriggerCallbackUrl").listWorkflowTriggerCallbackUrlOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowTriggerCallbackUrl","listWorkflowTriggerCallbackUrlOutput"], () => require("./listWorkflowTriggerCallbackUrl"));

export { StaticSiteArgs } from "./staticSite";
export type StaticSite = import("./staticSite").StaticSite;
export const StaticSite: typeof import("./staticSite").StaticSite = null as any;
utilities.lazyLoad(exports, ["StaticSite"], () => require("./staticSite"));

export { StaticSiteBuildDatabaseConnectionArgs } from "./staticSiteBuildDatabaseConnection";
export type StaticSiteBuildDatabaseConnection = import("./staticSiteBuildDatabaseConnection").StaticSiteBuildDatabaseConnection;
export const StaticSiteBuildDatabaseConnection: typeof import("./staticSiteBuildDatabaseConnection").StaticSiteBuildDatabaseConnection = null as any;
utilities.lazyLoad(exports, ["StaticSiteBuildDatabaseConnection"], () => require("./staticSiteBuildDatabaseConnection"));

export { StaticSiteCustomDomainArgs } from "./staticSiteCustomDomain";
export type StaticSiteCustomDomain = import("./staticSiteCustomDomain").StaticSiteCustomDomain;
export const StaticSiteCustomDomain: typeof import("./staticSiteCustomDomain").StaticSiteCustomDomain = null as any;
utilities.lazyLoad(exports, ["StaticSiteCustomDomain"], () => require("./staticSiteCustomDomain"));

export { StaticSiteDatabaseConnectionArgs } from "./staticSiteDatabaseConnection";
export type StaticSiteDatabaseConnection = import("./staticSiteDatabaseConnection").StaticSiteDatabaseConnection;
export const StaticSiteDatabaseConnection: typeof import("./staticSiteDatabaseConnection").StaticSiteDatabaseConnection = null as any;
utilities.lazyLoad(exports, ["StaticSiteDatabaseConnection"], () => require("./staticSiteDatabaseConnection"));

export { StaticSiteLinkedBackendArgs } from "./staticSiteLinkedBackend";
export type StaticSiteLinkedBackend = import("./staticSiteLinkedBackend").StaticSiteLinkedBackend;
export const StaticSiteLinkedBackend: typeof import("./staticSiteLinkedBackend").StaticSiteLinkedBackend = null as any;
utilities.lazyLoad(exports, ["StaticSiteLinkedBackend"], () => require("./staticSiteLinkedBackend"));

export { StaticSiteLinkedBackendForBuildArgs } from "./staticSiteLinkedBackendForBuild";
export type StaticSiteLinkedBackendForBuild = import("./staticSiteLinkedBackendForBuild").StaticSiteLinkedBackendForBuild;
export const StaticSiteLinkedBackendForBuild: typeof import("./staticSiteLinkedBackendForBuild").StaticSiteLinkedBackendForBuild = null as any;
utilities.lazyLoad(exports, ["StaticSiteLinkedBackendForBuild"], () => require("./staticSiteLinkedBackendForBuild"));

export { StaticSitePrivateEndpointConnectionArgs } from "./staticSitePrivateEndpointConnection";
export type StaticSitePrivateEndpointConnection = import("./staticSitePrivateEndpointConnection").StaticSitePrivateEndpointConnection;
export const StaticSitePrivateEndpointConnection: typeof import("./staticSitePrivateEndpointConnection").StaticSitePrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["StaticSitePrivateEndpointConnection"], () => require("./staticSitePrivateEndpointConnection"));

export { StaticSiteUserProvidedFunctionAppForStaticSiteArgs } from "./staticSiteUserProvidedFunctionAppForStaticSite";
export type StaticSiteUserProvidedFunctionAppForStaticSite = import("./staticSiteUserProvidedFunctionAppForStaticSite").StaticSiteUserProvidedFunctionAppForStaticSite;
export const StaticSiteUserProvidedFunctionAppForStaticSite: typeof import("./staticSiteUserProvidedFunctionAppForStaticSite").StaticSiteUserProvidedFunctionAppForStaticSite = null as any;
utilities.lazyLoad(exports, ["StaticSiteUserProvidedFunctionAppForStaticSite"], () => require("./staticSiteUserProvidedFunctionAppForStaticSite"));

export { StaticSiteUserProvidedFunctionAppForStaticSiteBuildArgs } from "./staticSiteUserProvidedFunctionAppForStaticSiteBuild";
export type StaticSiteUserProvidedFunctionAppForStaticSiteBuild = import("./staticSiteUserProvidedFunctionAppForStaticSiteBuild").StaticSiteUserProvidedFunctionAppForStaticSiteBuild;
export const StaticSiteUserProvidedFunctionAppForStaticSiteBuild: typeof import("./staticSiteUserProvidedFunctionAppForStaticSiteBuild").StaticSiteUserProvidedFunctionAppForStaticSiteBuild = null as any;
utilities.lazyLoad(exports, ["StaticSiteUserProvidedFunctionAppForStaticSiteBuild"], () => require("./staticSiteUserProvidedFunctionAppForStaticSiteBuild"));

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

export { WebAppPrivateEndpointConnectionSlotArgs } from "./webAppPrivateEndpointConnectionSlot";
export type WebAppPrivateEndpointConnectionSlot = import("./webAppPrivateEndpointConnectionSlot").WebAppPrivateEndpointConnectionSlot;
export const WebAppPrivateEndpointConnectionSlot: typeof import("./webAppPrivateEndpointConnectionSlot").WebAppPrivateEndpointConnectionSlot = null as any;
utilities.lazyLoad(exports, ["WebAppPrivateEndpointConnectionSlot"], () => require("./webAppPrivateEndpointConnectionSlot"));

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
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:web/v20220901:AppServiceEnvironment":
                return new AppServiceEnvironment(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:AppServiceEnvironmentAseCustomDnsSuffixConfiguration":
                return new AppServiceEnvironmentAseCustomDnsSuffixConfiguration(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:AppServiceEnvironmentPrivateEndpointConnection":
                return new AppServiceEnvironmentPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:AppServicePlan":
                return new AppServicePlan(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:AppServicePlanRouteForVnet":
                return new AppServicePlanRouteForVnet(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:KubeEnvironment":
                return new KubeEnvironment(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:StaticSite":
                return new StaticSite(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:StaticSiteBuildDatabaseConnection":
                return new StaticSiteBuildDatabaseConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:StaticSiteCustomDomain":
                return new StaticSiteCustomDomain(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:StaticSiteDatabaseConnection":
                return new StaticSiteDatabaseConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:StaticSiteLinkedBackend":
                return new StaticSiteLinkedBackend(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:StaticSiteLinkedBackendForBuild":
                return new StaticSiteLinkedBackendForBuild(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:StaticSitePrivateEndpointConnection":
                return new StaticSitePrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:StaticSiteUserProvidedFunctionAppForStaticSite":
                return new StaticSiteUserProvidedFunctionAppForStaticSite(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:StaticSiteUserProvidedFunctionAppForStaticSiteBuild":
                return new StaticSiteUserProvidedFunctionAppForStaticSiteBuild(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebApp":
                return new WebApp(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppApplicationSettings":
                return new WebAppApplicationSettings(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppApplicationSettingsSlot":
                return new WebAppApplicationSettingsSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppAuthSettings":
                return new WebAppAuthSettings(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppAuthSettingsSlot":
                return new WebAppAuthSettingsSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppAzureStorageAccounts":
                return new WebAppAzureStorageAccounts(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppAzureStorageAccountsSlot":
                return new WebAppAzureStorageAccountsSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppBackupConfiguration":
                return new WebAppBackupConfiguration(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppBackupConfigurationSlot":
                return new WebAppBackupConfigurationSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppConnectionStrings":
                return new WebAppConnectionStrings(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppConnectionStringsSlot":
                return new WebAppConnectionStringsSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppDeployment":
                return new WebAppDeployment(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppDeploymentSlot":
                return new WebAppDeploymentSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppDiagnosticLogsConfiguration":
                return new WebAppDiagnosticLogsConfiguration(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppDomainOwnershipIdentifier":
                return new WebAppDomainOwnershipIdentifier(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppDomainOwnershipIdentifierSlot":
                return new WebAppDomainOwnershipIdentifierSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppFtpAllowed":
                return new WebAppFtpAllowed(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppFunction":
                return new WebAppFunction(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppHostNameBinding":
                return new WebAppHostNameBinding(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppHostNameBindingSlot":
                return new WebAppHostNameBindingSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppHybridConnection":
                return new WebAppHybridConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppHybridConnectionSlot":
                return new WebAppHybridConnectionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppInstanceFunctionSlot":
                return new WebAppInstanceFunctionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppMetadata":
                return new WebAppMetadata(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppMetadataSlot":
                return new WebAppMetadataSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppPremierAddOn":
                return new WebAppPremierAddOn(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppPremierAddOnSlot":
                return new WebAppPremierAddOnSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppPrivateEndpointConnection":
                return new WebAppPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppPrivateEndpointConnectionSlot":
                return new WebAppPrivateEndpointConnectionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppPublicCertificate":
                return new WebAppPublicCertificate(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppPublicCertificateSlot":
                return new WebAppPublicCertificateSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppRelayServiceConnection":
                return new WebAppRelayServiceConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppRelayServiceConnectionSlot":
                return new WebAppRelayServiceConnectionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppScmAllowed":
                return new WebAppScmAllowed(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppSiteExtension":
                return new WebAppSiteExtension(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppSiteExtensionSlot":
                return new WebAppSiteExtensionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppSitePushSettings":
                return new WebAppSitePushSettings(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppSitePushSettingsSlot":
                return new WebAppSitePushSettingsSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppSlot":
                return new WebAppSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppSlotConfigurationNames":
                return new WebAppSlotConfigurationNames(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppSourceControl":
                return new WebAppSourceControl(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppSourceControlSlot":
                return new WebAppSourceControlSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppSwiftVirtualNetworkConnection":
                return new WebAppSwiftVirtualNetworkConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppSwiftVirtualNetworkConnectionSlot":
                return new WebAppSwiftVirtualNetworkConnectionSlot(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppVnetConnection":
                return new WebAppVnetConnection(name, <any>undefined, { urn })
            case "azure-native:web/v20220901:WebAppVnetConnectionSlot":
                return new WebAppVnetConnectionSlot(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "web/v20220901", _module)
