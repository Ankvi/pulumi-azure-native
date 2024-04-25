import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApiPortalArgs } from "./apiPortal";
export type ApiPortal = import("./apiPortal").ApiPortal;
export const ApiPortal: typeof import("./apiPortal").ApiPortal = null as any;
utilities.lazyLoad(exports, ["ApiPortal"], () => require("./apiPortal"));

export { ApiPortalCustomDomainArgs } from "./apiPortalCustomDomain";
export type ApiPortalCustomDomain = import("./apiPortalCustomDomain").ApiPortalCustomDomain;
export const ApiPortalCustomDomain: typeof import("./apiPortalCustomDomain").ApiPortalCustomDomain = null as any;
utilities.lazyLoad(exports, ["ApiPortalCustomDomain"], () => require("./apiPortalCustomDomain"));

export { ApmArgs } from "./apm";
export type Apm = import("./apm").Apm;
export const Apm: typeof import("./apm").Apm = null as any;
utilities.lazyLoad(exports, ["Apm"], () => require("./apm"));

export { AppArgs } from "./app";
export type App = import("./app").App;
export const App: typeof import("./app").App = null as any;
utilities.lazyLoad(exports, ["App"], () => require("./app"));

export { ApplicationAcceleratorArgs } from "./applicationAccelerator";
export type ApplicationAccelerator = import("./applicationAccelerator").ApplicationAccelerator;
export const ApplicationAccelerator: typeof import("./applicationAccelerator").ApplicationAccelerator = null as any;
utilities.lazyLoad(exports, ["ApplicationAccelerator"], () => require("./applicationAccelerator"));

export { ApplicationLiveViewArgs } from "./applicationLiveView";
export type ApplicationLiveView = import("./applicationLiveView").ApplicationLiveView;
export const ApplicationLiveView: typeof import("./applicationLiveView").ApplicationLiveView = null as any;
utilities.lazyLoad(exports, ["ApplicationLiveView"], () => require("./applicationLiveView"));

export { BindingArgs } from "./binding";
export type Binding = import("./binding").Binding;
export const Binding: typeof import("./binding").Binding = null as any;
utilities.lazyLoad(exports, ["Binding"], () => require("./binding"));

export { BuildServiceAgentPoolArgs } from "./buildServiceAgentPool";
export type BuildServiceAgentPool = import("./buildServiceAgentPool").BuildServiceAgentPool;
export const BuildServiceAgentPool: typeof import("./buildServiceAgentPool").BuildServiceAgentPool = null as any;
utilities.lazyLoad(exports, ["BuildServiceAgentPool"], () => require("./buildServiceAgentPool"));

export { BuildServiceBuildArgs } from "./buildServiceBuild";
export type BuildServiceBuild = import("./buildServiceBuild").BuildServiceBuild;
export const BuildServiceBuild: typeof import("./buildServiceBuild").BuildServiceBuild = null as any;
utilities.lazyLoad(exports, ["BuildServiceBuild"], () => require("./buildServiceBuild"));

export { BuildServiceBuilderArgs } from "./buildServiceBuilder";
export type BuildServiceBuilder = import("./buildServiceBuilder").BuildServiceBuilder;
export const BuildServiceBuilder: typeof import("./buildServiceBuilder").BuildServiceBuilder = null as any;
utilities.lazyLoad(exports, ["BuildServiceBuilder"], () => require("./buildServiceBuilder"));

export { BuildpackBindingArgs } from "./buildpackBinding";
export type BuildpackBinding = import("./buildpackBinding").BuildpackBinding;
export const BuildpackBinding: typeof import("./buildpackBinding").BuildpackBinding = null as any;
utilities.lazyLoad(exports, ["BuildpackBinding"], () => require("./buildpackBinding"));

export { CertificateArgs } from "./certificate";
export type Certificate = import("./certificate").Certificate;
export const Certificate: typeof import("./certificate").Certificate = null as any;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));

export { ConfigServerArgs } from "./configServer";
export type ConfigServer = import("./configServer").ConfigServer;
export const ConfigServer: typeof import("./configServer").ConfigServer = null as any;
utilities.lazyLoad(exports, ["ConfigServer"], () => require("./configServer"));

export { ConfigurationServiceArgs } from "./configurationService";
export type ConfigurationService = import("./configurationService").ConfigurationService;
export const ConfigurationService: typeof import("./configurationService").ConfigurationService = null as any;
utilities.lazyLoad(exports, ["ConfigurationService"], () => require("./configurationService"));

export { ContainerRegistryArgs } from "./containerRegistry";
export type ContainerRegistry = import("./containerRegistry").ContainerRegistry;
export const ContainerRegistry: typeof import("./containerRegistry").ContainerRegistry = null as any;
utilities.lazyLoad(exports, ["ContainerRegistry"], () => require("./containerRegistry"));

export { CustomDomainArgs } from "./customDomain";
export type CustomDomain = import("./customDomain").CustomDomain;
export const CustomDomain: typeof import("./customDomain").CustomDomain = null as any;
utilities.lazyLoad(exports, ["CustomDomain"], () => require("./customDomain"));

export { CustomizedAcceleratorArgs } from "./customizedAccelerator";
export type CustomizedAccelerator = import("./customizedAccelerator").CustomizedAccelerator;
export const CustomizedAccelerator: typeof import("./customizedAccelerator").CustomizedAccelerator = null as any;
utilities.lazyLoad(exports, ["CustomizedAccelerator"], () => require("./customizedAccelerator"));

export { DeploymentArgs } from "./deployment";
export type Deployment = import("./deployment").Deployment;
export const Deployment: typeof import("./deployment").Deployment = null as any;
utilities.lazyLoad(exports, ["Deployment"], () => require("./deployment"));

export { DevToolPortalArgs } from "./devToolPortal";
export type DevToolPortal = import("./devToolPortal").DevToolPortal;
export const DevToolPortal: typeof import("./devToolPortal").DevToolPortal = null as any;
utilities.lazyLoad(exports, ["DevToolPortal"], () => require("./devToolPortal"));

export { GatewayArgs } from "./gateway";
export type Gateway = import("./gateway").Gateway;
export const Gateway: typeof import("./gateway").Gateway = null as any;
utilities.lazyLoad(exports, ["Gateway"], () => require("./gateway"));

export { GatewayCustomDomainArgs } from "./gatewayCustomDomain";
export type GatewayCustomDomain = import("./gatewayCustomDomain").GatewayCustomDomain;
export const GatewayCustomDomain: typeof import("./gatewayCustomDomain").GatewayCustomDomain = null as any;
utilities.lazyLoad(exports, ["GatewayCustomDomain"], () => require("./gatewayCustomDomain"));

export { GatewayRouteConfigArgs } from "./gatewayRouteConfig";
export type GatewayRouteConfig = import("./gatewayRouteConfig").GatewayRouteConfig;
export const GatewayRouteConfig: typeof import("./gatewayRouteConfig").GatewayRouteConfig = null as any;
utilities.lazyLoad(exports, ["GatewayRouteConfig"], () => require("./gatewayRouteConfig"));

export { GetApiPortalArgs, GetApiPortalResult, GetApiPortalOutputArgs } from "./getApiPortal";
export const getApiPortal: typeof import("./getApiPortal").getApiPortal = null as any;
export const getApiPortalOutput: typeof import("./getApiPortal").getApiPortalOutput = null as any;
utilities.lazyLoad(exports, ["getApiPortal","getApiPortalOutput"], () => require("./getApiPortal"));

export { GetApiPortalCustomDomainArgs, GetApiPortalCustomDomainResult, GetApiPortalCustomDomainOutputArgs } from "./getApiPortalCustomDomain";
export const getApiPortalCustomDomain: typeof import("./getApiPortalCustomDomain").getApiPortalCustomDomain = null as any;
export const getApiPortalCustomDomainOutput: typeof import("./getApiPortalCustomDomain").getApiPortalCustomDomainOutput = null as any;
utilities.lazyLoad(exports, ["getApiPortalCustomDomain","getApiPortalCustomDomainOutput"], () => require("./getApiPortalCustomDomain"));

export { GetApmArgs, GetApmResult, GetApmOutputArgs } from "./getApm";
export const getApm: typeof import("./getApm").getApm = null as any;
export const getApmOutput: typeof import("./getApm").getApmOutput = null as any;
utilities.lazyLoad(exports, ["getApm","getApmOutput"], () => require("./getApm"));

export { GetAppArgs, GetAppResult, GetAppOutputArgs } from "./getApp";
export const getApp: typeof import("./getApp").getApp = null as any;
export const getAppOutput: typeof import("./getApp").getAppOutput = null as any;
utilities.lazyLoad(exports, ["getApp","getAppOutput"], () => require("./getApp"));

export { GetAppResourceUploadUrlArgs, GetAppResourceUploadUrlResult, GetAppResourceUploadUrlOutputArgs } from "./getAppResourceUploadUrl";
export const getAppResourceUploadUrl: typeof import("./getAppResourceUploadUrl").getAppResourceUploadUrl = null as any;
export const getAppResourceUploadUrlOutput: typeof import("./getAppResourceUploadUrl").getAppResourceUploadUrlOutput = null as any;
utilities.lazyLoad(exports, ["getAppResourceUploadUrl","getAppResourceUploadUrlOutput"], () => require("./getAppResourceUploadUrl"));

export { GetApplicationAcceleratorArgs, GetApplicationAcceleratorResult, GetApplicationAcceleratorOutputArgs } from "./getApplicationAccelerator";
export const getApplicationAccelerator: typeof import("./getApplicationAccelerator").getApplicationAccelerator = null as any;
export const getApplicationAcceleratorOutput: typeof import("./getApplicationAccelerator").getApplicationAcceleratorOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationAccelerator","getApplicationAcceleratorOutput"], () => require("./getApplicationAccelerator"));

export { GetApplicationLiveViewArgs, GetApplicationLiveViewResult, GetApplicationLiveViewOutputArgs } from "./getApplicationLiveView";
export const getApplicationLiveView: typeof import("./getApplicationLiveView").getApplicationLiveView = null as any;
export const getApplicationLiveViewOutput: typeof import("./getApplicationLiveView").getApplicationLiveViewOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationLiveView","getApplicationLiveViewOutput"], () => require("./getApplicationLiveView"));

export { GetBindingArgs, GetBindingResult, GetBindingOutputArgs } from "./getBinding";
export const getBinding: typeof import("./getBinding").getBinding = null as any;
export const getBindingOutput: typeof import("./getBinding").getBindingOutput = null as any;
utilities.lazyLoad(exports, ["getBinding","getBindingOutput"], () => require("./getBinding"));

export { GetBuildServiceAgentPoolArgs, GetBuildServiceAgentPoolResult, GetBuildServiceAgentPoolOutputArgs } from "./getBuildServiceAgentPool";
export const getBuildServiceAgentPool: typeof import("./getBuildServiceAgentPool").getBuildServiceAgentPool = null as any;
export const getBuildServiceAgentPoolOutput: typeof import("./getBuildServiceAgentPool").getBuildServiceAgentPoolOutput = null as any;
utilities.lazyLoad(exports, ["getBuildServiceAgentPool","getBuildServiceAgentPoolOutput"], () => require("./getBuildServiceAgentPool"));

export { GetBuildServiceBuildArgs, GetBuildServiceBuildResult, GetBuildServiceBuildOutputArgs } from "./getBuildServiceBuild";
export const getBuildServiceBuild: typeof import("./getBuildServiceBuild").getBuildServiceBuild = null as any;
export const getBuildServiceBuildOutput: typeof import("./getBuildServiceBuild").getBuildServiceBuildOutput = null as any;
utilities.lazyLoad(exports, ["getBuildServiceBuild","getBuildServiceBuildOutput"], () => require("./getBuildServiceBuild"));

export { GetBuildServiceBuildResultLogArgs, GetBuildServiceBuildResultLogResult, GetBuildServiceBuildResultLogOutputArgs } from "./getBuildServiceBuildResultLog";
export const getBuildServiceBuildResultLog: typeof import("./getBuildServiceBuildResultLog").getBuildServiceBuildResultLog = null as any;
export const getBuildServiceBuildResultLogOutput: typeof import("./getBuildServiceBuildResultLog").getBuildServiceBuildResultLogOutput = null as any;
utilities.lazyLoad(exports, ["getBuildServiceBuildResultLog","getBuildServiceBuildResultLogOutput"], () => require("./getBuildServiceBuildResultLog"));

export { GetBuildServiceBuilderArgs, GetBuildServiceBuilderResult, GetBuildServiceBuilderOutputArgs } from "./getBuildServiceBuilder";
export const getBuildServiceBuilder: typeof import("./getBuildServiceBuilder").getBuildServiceBuilder = null as any;
export const getBuildServiceBuilderOutput: typeof import("./getBuildServiceBuilder").getBuildServiceBuilderOutput = null as any;
utilities.lazyLoad(exports, ["getBuildServiceBuilder","getBuildServiceBuilderOutput"], () => require("./getBuildServiceBuilder"));

export { GetBuildServiceResourceUploadUrlArgs, GetBuildServiceResourceUploadUrlResult, GetBuildServiceResourceUploadUrlOutputArgs } from "./getBuildServiceResourceUploadUrl";
export const getBuildServiceResourceUploadUrl: typeof import("./getBuildServiceResourceUploadUrl").getBuildServiceResourceUploadUrl = null as any;
export const getBuildServiceResourceUploadUrlOutput: typeof import("./getBuildServiceResourceUploadUrl").getBuildServiceResourceUploadUrlOutput = null as any;
utilities.lazyLoad(exports, ["getBuildServiceResourceUploadUrl","getBuildServiceResourceUploadUrlOutput"], () => require("./getBuildServiceResourceUploadUrl"));

export { GetBuildpackBindingArgs, GetBuildpackBindingResult, GetBuildpackBindingOutputArgs } from "./getBuildpackBinding";
export const getBuildpackBinding: typeof import("./getBuildpackBinding").getBuildpackBinding = null as any;
export const getBuildpackBindingOutput: typeof import("./getBuildpackBinding").getBuildpackBindingOutput = null as any;
utilities.lazyLoad(exports, ["getBuildpackBinding","getBuildpackBindingOutput"], () => require("./getBuildpackBinding"));

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

export { GetConfigServerArgs, GetConfigServerResult, GetConfigServerOutputArgs } from "./getConfigServer";
export const getConfigServer: typeof import("./getConfigServer").getConfigServer = null as any;
export const getConfigServerOutput: typeof import("./getConfigServer").getConfigServerOutput = null as any;
utilities.lazyLoad(exports, ["getConfigServer","getConfigServerOutput"], () => require("./getConfigServer"));

export { GetConfigurationServiceArgs, GetConfigurationServiceResult, GetConfigurationServiceOutputArgs } from "./getConfigurationService";
export const getConfigurationService: typeof import("./getConfigurationService").getConfigurationService = null as any;
export const getConfigurationServiceOutput: typeof import("./getConfigurationService").getConfigurationServiceOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationService","getConfigurationServiceOutput"], () => require("./getConfigurationService"));

export { GetContainerRegistryArgs, GetContainerRegistryResult, GetContainerRegistryOutputArgs } from "./getContainerRegistry";
export const getContainerRegistry: typeof import("./getContainerRegistry").getContainerRegistry = null as any;
export const getContainerRegistryOutput: typeof import("./getContainerRegistry").getContainerRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getContainerRegistry","getContainerRegistryOutput"], () => require("./getContainerRegistry"));

export { GetCustomDomainArgs, GetCustomDomainResult, GetCustomDomainOutputArgs } from "./getCustomDomain";
export const getCustomDomain: typeof import("./getCustomDomain").getCustomDomain = null as any;
export const getCustomDomainOutput: typeof import("./getCustomDomain").getCustomDomainOutput = null as any;
utilities.lazyLoad(exports, ["getCustomDomain","getCustomDomainOutput"], () => require("./getCustomDomain"));

export { GetCustomizedAcceleratorArgs, GetCustomizedAcceleratorResult, GetCustomizedAcceleratorOutputArgs } from "./getCustomizedAccelerator";
export const getCustomizedAccelerator: typeof import("./getCustomizedAccelerator").getCustomizedAccelerator = null as any;
export const getCustomizedAcceleratorOutput: typeof import("./getCustomizedAccelerator").getCustomizedAcceleratorOutput = null as any;
utilities.lazyLoad(exports, ["getCustomizedAccelerator","getCustomizedAcceleratorOutput"], () => require("./getCustomizedAccelerator"));

export { GetDeploymentArgs, GetDeploymentResult, GetDeploymentOutputArgs } from "./getDeployment";
export const getDeployment: typeof import("./getDeployment").getDeployment = null as any;
export const getDeploymentOutput: typeof import("./getDeployment").getDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getDeployment","getDeploymentOutput"], () => require("./getDeployment"));

export { GetDeploymentLogFileUrlArgs, GetDeploymentLogFileUrlResult, GetDeploymentLogFileUrlOutputArgs } from "./getDeploymentLogFileUrl";
export const getDeploymentLogFileUrl: typeof import("./getDeploymentLogFileUrl").getDeploymentLogFileUrl = null as any;
export const getDeploymentLogFileUrlOutput: typeof import("./getDeploymentLogFileUrl").getDeploymentLogFileUrlOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentLogFileUrl","getDeploymentLogFileUrlOutput"], () => require("./getDeploymentLogFileUrl"));

export { GetDeploymentRemoteDebuggingConfigArgs, GetDeploymentRemoteDebuggingConfigResult, GetDeploymentRemoteDebuggingConfigOutputArgs } from "./getDeploymentRemoteDebuggingConfig";
export const getDeploymentRemoteDebuggingConfig: typeof import("./getDeploymentRemoteDebuggingConfig").getDeploymentRemoteDebuggingConfig = null as any;
export const getDeploymentRemoteDebuggingConfigOutput: typeof import("./getDeploymentRemoteDebuggingConfig").getDeploymentRemoteDebuggingConfigOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentRemoteDebuggingConfig","getDeploymentRemoteDebuggingConfigOutput"], () => require("./getDeploymentRemoteDebuggingConfig"));

export { GetDevToolPortalArgs, GetDevToolPortalResult, GetDevToolPortalOutputArgs } from "./getDevToolPortal";
export const getDevToolPortal: typeof import("./getDevToolPortal").getDevToolPortal = null as any;
export const getDevToolPortalOutput: typeof import("./getDevToolPortal").getDevToolPortalOutput = null as any;
utilities.lazyLoad(exports, ["getDevToolPortal","getDevToolPortalOutput"], () => require("./getDevToolPortal"));

export { GetGatewayArgs, GetGatewayResult, GetGatewayOutputArgs } from "./getGateway";
export const getGateway: typeof import("./getGateway").getGateway = null as any;
export const getGatewayOutput: typeof import("./getGateway").getGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getGateway","getGatewayOutput"], () => require("./getGateway"));

export { GetGatewayCustomDomainArgs, GetGatewayCustomDomainResult, GetGatewayCustomDomainOutputArgs } from "./getGatewayCustomDomain";
export const getGatewayCustomDomain: typeof import("./getGatewayCustomDomain").getGatewayCustomDomain = null as any;
export const getGatewayCustomDomainOutput: typeof import("./getGatewayCustomDomain").getGatewayCustomDomainOutput = null as any;
utilities.lazyLoad(exports, ["getGatewayCustomDomain","getGatewayCustomDomainOutput"], () => require("./getGatewayCustomDomain"));

export { GetGatewayRouteConfigArgs, GetGatewayRouteConfigResult, GetGatewayRouteConfigOutputArgs } from "./getGatewayRouteConfig";
export const getGatewayRouteConfig: typeof import("./getGatewayRouteConfig").getGatewayRouteConfig = null as any;
export const getGatewayRouteConfigOutput: typeof import("./getGatewayRouteConfig").getGatewayRouteConfigOutput = null as any;
utilities.lazyLoad(exports, ["getGatewayRouteConfig","getGatewayRouteConfigOutput"], () => require("./getGatewayRouteConfig"));

export { GetJobArgs, GetJobResult, GetJobOutputArgs } from "./getJob";
export const getJob: typeof import("./getJob").getJob = null as any;
export const getJobOutput: typeof import("./getJob").getJobOutput = null as any;
utilities.lazyLoad(exports, ["getJob","getJobOutput"], () => require("./getJob"));

export { GetMonitoringSettingArgs, GetMonitoringSettingResult, GetMonitoringSettingOutputArgs } from "./getMonitoringSetting";
export const getMonitoringSetting: typeof import("./getMonitoringSetting").getMonitoringSetting = null as any;
export const getMonitoringSettingOutput: typeof import("./getMonitoringSetting").getMonitoringSettingOutput = null as any;
utilities.lazyLoad(exports, ["getMonitoringSetting","getMonitoringSettingOutput"], () => require("./getMonitoringSetting"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetServiceRegistryArgs, GetServiceRegistryResult, GetServiceRegistryOutputArgs } from "./getServiceRegistry";
export const getServiceRegistry: typeof import("./getServiceRegistry").getServiceRegistry = null as any;
export const getServiceRegistryOutput: typeof import("./getServiceRegistry").getServiceRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getServiceRegistry","getServiceRegistryOutput"], () => require("./getServiceRegistry"));

export { GetStorageArgs, GetStorageResult, GetStorageOutputArgs } from "./getStorage";
export const getStorage: typeof import("./getStorage").getStorage = null as any;
export const getStorageOutput: typeof import("./getStorage").getStorageOutput = null as any;
utilities.lazyLoad(exports, ["getStorage","getStorageOutput"], () => require("./getStorage"));

export { JobArgs } from "./job";
export type Job = import("./job").Job;
export const Job: typeof import("./job").Job = null as any;
utilities.lazyLoad(exports, ["Job"], () => require("./job"));

export { ListApmSecretKeysArgs, ListApmSecretKeysResult, ListApmSecretKeysOutputArgs } from "./listApmSecretKeys";
export const listApmSecretKeys: typeof import("./listApmSecretKeys").listApmSecretKeys = null as any;
export const listApmSecretKeysOutput: typeof import("./listApmSecretKeys").listApmSecretKeysOutput = null as any;
utilities.lazyLoad(exports, ["listApmSecretKeys","listApmSecretKeysOutput"], () => require("./listApmSecretKeys"));

export { ListBuildServiceBuilderDeploymentsArgs, ListBuildServiceBuilderDeploymentsResult, ListBuildServiceBuilderDeploymentsOutputArgs } from "./listBuildServiceBuilderDeployments";
export const listBuildServiceBuilderDeployments: typeof import("./listBuildServiceBuilderDeployments").listBuildServiceBuilderDeployments = null as any;
export const listBuildServiceBuilderDeploymentsOutput: typeof import("./listBuildServiceBuilderDeployments").listBuildServiceBuilderDeploymentsOutput = null as any;
utilities.lazyLoad(exports, ["listBuildServiceBuilderDeployments","listBuildServiceBuilderDeploymentsOutput"], () => require("./listBuildServiceBuilderDeployments"));

export { ListJobEnvSecretsArgs, ListJobEnvSecretsResult, ListJobEnvSecretsOutputArgs } from "./listJobEnvSecrets";
export const listJobEnvSecrets: typeof import("./listJobEnvSecrets").listJobEnvSecrets = null as any;
export const listJobEnvSecretsOutput: typeof import("./listJobEnvSecrets").listJobEnvSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listJobEnvSecrets","listJobEnvSecretsOutput"], () => require("./listJobEnvSecrets"));

export { ListJobExecutionEnvSecretsArgs, ListJobExecutionEnvSecretsResult, ListJobExecutionEnvSecretsOutputArgs } from "./listJobExecutionEnvSecrets";
export const listJobExecutionEnvSecrets: typeof import("./listJobExecutionEnvSecrets").listJobExecutionEnvSecrets = null as any;
export const listJobExecutionEnvSecretsOutput: typeof import("./listJobExecutionEnvSecrets").listJobExecutionEnvSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listJobExecutionEnvSecrets","listJobExecutionEnvSecretsOutput"], () => require("./listJobExecutionEnvSecrets"));

export { ListServiceGloballyEnabledApmsArgs, ListServiceGloballyEnabledApmsResult, ListServiceGloballyEnabledApmsOutputArgs } from "./listServiceGloballyEnabledApms";
export const listServiceGloballyEnabledApms: typeof import("./listServiceGloballyEnabledApms").listServiceGloballyEnabledApms = null as any;
export const listServiceGloballyEnabledApmsOutput: typeof import("./listServiceGloballyEnabledApms").listServiceGloballyEnabledApmsOutput = null as any;
utilities.lazyLoad(exports, ["listServiceGloballyEnabledApms","listServiceGloballyEnabledApmsOutput"], () => require("./listServiceGloballyEnabledApms"));

export { ListServiceTestKeysArgs, ListServiceTestKeysResult, ListServiceTestKeysOutputArgs } from "./listServiceTestKeys";
export const listServiceTestKeys: typeof import("./listServiceTestKeys").listServiceTestKeys = null as any;
export const listServiceTestKeysOutput: typeof import("./listServiceTestKeys").listServiceTestKeysOutput = null as any;
utilities.lazyLoad(exports, ["listServiceTestKeys","listServiceTestKeysOutput"], () => require("./listServiceTestKeys"));

export { MonitoringSettingArgs } from "./monitoringSetting";
export type MonitoringSetting = import("./monitoringSetting").MonitoringSetting;
export const MonitoringSetting: typeof import("./monitoringSetting").MonitoringSetting = null as any;
utilities.lazyLoad(exports, ["MonitoringSetting"], () => require("./monitoringSetting"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { ServiceRegistryArgs } from "./serviceRegistry";
export type ServiceRegistry = import("./serviceRegistry").ServiceRegistry;
export const ServiceRegistry: typeof import("./serviceRegistry").ServiceRegistry = null as any;
utilities.lazyLoad(exports, ["ServiceRegistry"], () => require("./serviceRegistry"));

export { StorageArgs } from "./storage";
export type Storage = import("./storage").Storage;
export const Storage: typeof import("./storage").Storage = null as any;
utilities.lazyLoad(exports, ["Storage"], () => require("./storage"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:appplatform:ApiPortal":
                return new ApiPortal(name, <any>undefined, { urn })
            case "azure-native:appplatform:ApiPortalCustomDomain":
                return new ApiPortalCustomDomain(name, <any>undefined, { urn })
            case "azure-native:appplatform:Apm":
                return new Apm(name, <any>undefined, { urn })
            case "azure-native:appplatform:App":
                return new App(name, <any>undefined, { urn })
            case "azure-native:appplatform:ApplicationAccelerator":
                return new ApplicationAccelerator(name, <any>undefined, { urn })
            case "azure-native:appplatform:ApplicationLiveView":
                return new ApplicationLiveView(name, <any>undefined, { urn })
            case "azure-native:appplatform:Binding":
                return new Binding(name, <any>undefined, { urn })
            case "azure-native:appplatform:BuildServiceAgentPool":
                return new BuildServiceAgentPool(name, <any>undefined, { urn })
            case "azure-native:appplatform:BuildServiceBuild":
                return new BuildServiceBuild(name, <any>undefined, { urn })
            case "azure-native:appplatform:BuildServiceBuilder":
                return new BuildServiceBuilder(name, <any>undefined, { urn })
            case "azure-native:appplatform:BuildpackBinding":
                return new BuildpackBinding(name, <any>undefined, { urn })
            case "azure-native:appplatform:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-native:appplatform:ConfigServer":
                return new ConfigServer(name, <any>undefined, { urn })
            case "azure-native:appplatform:ConfigurationService":
                return new ConfigurationService(name, <any>undefined, { urn })
            case "azure-native:appplatform:ContainerRegistry":
                return new ContainerRegistry(name, <any>undefined, { urn })
            case "azure-native:appplatform:CustomDomain":
                return new CustomDomain(name, <any>undefined, { urn })
            case "azure-native:appplatform:CustomizedAccelerator":
                return new CustomizedAccelerator(name, <any>undefined, { urn })
            case "azure-native:appplatform:Deployment":
                return new Deployment(name, <any>undefined, { urn })
            case "azure-native:appplatform:DevToolPortal":
                return new DevToolPortal(name, <any>undefined, { urn })
            case "azure-native:appplatform:Gateway":
                return new Gateway(name, <any>undefined, { urn })
            case "azure-native:appplatform:GatewayCustomDomain":
                return new GatewayCustomDomain(name, <any>undefined, { urn })
            case "azure-native:appplatform:GatewayRouteConfig":
                return new GatewayRouteConfig(name, <any>undefined, { urn })
            case "azure-native:appplatform:Job":
                return new Job(name, <any>undefined, { urn })
            case "azure-native:appplatform:MonitoringSetting":
                return new MonitoringSetting(name, <any>undefined, { urn })
            case "azure-native:appplatform:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:appplatform:ServiceRegistry":
                return new ServiceRegistry(name, <any>undefined, { urn })
            case "azure-native:appplatform:Storage":
                return new Storage(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "appplatform", _module)