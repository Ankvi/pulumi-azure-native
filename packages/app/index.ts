import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AppResiliencyArgs } from "./appResiliency";
export type AppResiliency = import("./appResiliency").AppResiliency;
export const AppResiliency: typeof import("./appResiliency").AppResiliency = null as any;
utilities.lazyLoad(exports, ["AppResiliency"], () => require("./appResiliency"));

export { BuildArgs } from "./build";
export type Build = import("./build").Build;
export const Build: typeof import("./build").Build = null as any;
utilities.lazyLoad(exports, ["Build"], () => require("./build"));

export { BuilderArgs } from "./builder";
export type Builder = import("./builder").Builder;
export const Builder: typeof import("./builder").Builder = null as any;
utilities.lazyLoad(exports, ["Builder"], () => require("./builder"));

export { CertificateArgs } from "./certificate";
export type Certificate = import("./certificate").Certificate;
export const Certificate: typeof import("./certificate").Certificate = null as any;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));

export { ConnectedEnvironmentArgs } from "./connectedEnvironment";
export type ConnectedEnvironment = import("./connectedEnvironment").ConnectedEnvironment;
export const ConnectedEnvironment: typeof import("./connectedEnvironment").ConnectedEnvironment = null as any;
utilities.lazyLoad(exports, ["ConnectedEnvironment"], () => require("./connectedEnvironment"));

export { ConnectedEnvironmentsCertificateArgs } from "./connectedEnvironmentsCertificate";
export type ConnectedEnvironmentsCertificate = import("./connectedEnvironmentsCertificate").ConnectedEnvironmentsCertificate;
export const ConnectedEnvironmentsCertificate: typeof import("./connectedEnvironmentsCertificate").ConnectedEnvironmentsCertificate = null as any;
utilities.lazyLoad(exports, ["ConnectedEnvironmentsCertificate"], () => require("./connectedEnvironmentsCertificate"));

export { ConnectedEnvironmentsDaprComponentArgs } from "./connectedEnvironmentsDaprComponent";
export type ConnectedEnvironmentsDaprComponent = import("./connectedEnvironmentsDaprComponent").ConnectedEnvironmentsDaprComponent;
export const ConnectedEnvironmentsDaprComponent: typeof import("./connectedEnvironmentsDaprComponent").ConnectedEnvironmentsDaprComponent = null as any;
utilities.lazyLoad(exports, ["ConnectedEnvironmentsDaprComponent"], () => require("./connectedEnvironmentsDaprComponent"));

export { ConnectedEnvironmentsStorageArgs } from "./connectedEnvironmentsStorage";
export type ConnectedEnvironmentsStorage = import("./connectedEnvironmentsStorage").ConnectedEnvironmentsStorage;
export const ConnectedEnvironmentsStorage: typeof import("./connectedEnvironmentsStorage").ConnectedEnvironmentsStorage = null as any;
utilities.lazyLoad(exports, ["ConnectedEnvironmentsStorage"], () => require("./connectedEnvironmentsStorage"));

export { ContainerAppArgs } from "./containerApp";
export type ContainerApp = import("./containerApp").ContainerApp;
export const ContainerApp: typeof import("./containerApp").ContainerApp = null as any;
utilities.lazyLoad(exports, ["ContainerApp"], () => require("./containerApp"));

export { ContainerAppsAuthConfigArgs } from "./containerAppsAuthConfig";
export type ContainerAppsAuthConfig = import("./containerAppsAuthConfig").ContainerAppsAuthConfig;
export const ContainerAppsAuthConfig: typeof import("./containerAppsAuthConfig").ContainerAppsAuthConfig = null as any;
utilities.lazyLoad(exports, ["ContainerAppsAuthConfig"], () => require("./containerAppsAuthConfig"));

export { ContainerAppsSourceControlArgs } from "./containerAppsSourceControl";
export type ContainerAppsSourceControl = import("./containerAppsSourceControl").ContainerAppsSourceControl;
export const ContainerAppsSourceControl: typeof import("./containerAppsSourceControl").ContainerAppsSourceControl = null as any;
utilities.lazyLoad(exports, ["ContainerAppsSourceControl"], () => require("./containerAppsSourceControl"));

export { DaprComponentArgs } from "./daprComponent";
export type DaprComponent = import("./daprComponent").DaprComponent;
export const DaprComponent: typeof import("./daprComponent").DaprComponent = null as any;
utilities.lazyLoad(exports, ["DaprComponent"], () => require("./daprComponent"));

export { DaprComponentResiliencyPolicyArgs } from "./daprComponentResiliencyPolicy";
export type DaprComponentResiliencyPolicy = import("./daprComponentResiliencyPolicy").DaprComponentResiliencyPolicy;
export const DaprComponentResiliencyPolicy: typeof import("./daprComponentResiliencyPolicy").DaprComponentResiliencyPolicy = null as any;
utilities.lazyLoad(exports, ["DaprComponentResiliencyPolicy"], () => require("./daprComponentResiliencyPolicy"));

export { DaprSubscriptionArgs } from "./daprSubscription";
export type DaprSubscription = import("./daprSubscription").DaprSubscription;
export const DaprSubscription: typeof import("./daprSubscription").DaprSubscription = null as any;
utilities.lazyLoad(exports, ["DaprSubscription"], () => require("./daprSubscription"));

export { DotNetComponentArgs } from "./dotNetComponent";
export type DotNetComponent = import("./dotNetComponent").DotNetComponent;
export const DotNetComponent: typeof import("./dotNetComponent").DotNetComponent = null as any;
utilities.lazyLoad(exports, ["DotNetComponent"], () => require("./dotNetComponent"));

export { GetAppResiliencyArgs, GetAppResiliencyResult, GetAppResiliencyOutputArgs } from "./getAppResiliency";
export const getAppResiliency: typeof import("./getAppResiliency").getAppResiliency = null as any;
export const getAppResiliencyOutput: typeof import("./getAppResiliency").getAppResiliencyOutput = null as any;
utilities.lazyLoad(exports, ["getAppResiliency","getAppResiliencyOutput"], () => require("./getAppResiliency"));

export { GetBuildArgs, GetBuildResult, GetBuildOutputArgs } from "./getBuild";
export const getBuild: typeof import("./getBuild").getBuild = null as any;
export const getBuildOutput: typeof import("./getBuild").getBuildOutput = null as any;
utilities.lazyLoad(exports, ["getBuild","getBuildOutput"], () => require("./getBuild"));

export { GetBuilderArgs, GetBuilderResult, GetBuilderOutputArgs } from "./getBuilder";
export const getBuilder: typeof import("./getBuilder").getBuilder = null as any;
export const getBuilderOutput: typeof import("./getBuilder").getBuilderOutput = null as any;
utilities.lazyLoad(exports, ["getBuilder","getBuilderOutput"], () => require("./getBuilder"));

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

export { GetConnectedEnvironmentArgs, GetConnectedEnvironmentResult, GetConnectedEnvironmentOutputArgs } from "./getConnectedEnvironment";
export const getConnectedEnvironment: typeof import("./getConnectedEnvironment").getConnectedEnvironment = null as any;
export const getConnectedEnvironmentOutput: typeof import("./getConnectedEnvironment").getConnectedEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getConnectedEnvironment","getConnectedEnvironmentOutput"], () => require("./getConnectedEnvironment"));

export { GetConnectedEnvironmentsCertificateArgs, GetConnectedEnvironmentsCertificateResult, GetConnectedEnvironmentsCertificateOutputArgs } from "./getConnectedEnvironmentsCertificate";
export const getConnectedEnvironmentsCertificate: typeof import("./getConnectedEnvironmentsCertificate").getConnectedEnvironmentsCertificate = null as any;
export const getConnectedEnvironmentsCertificateOutput: typeof import("./getConnectedEnvironmentsCertificate").getConnectedEnvironmentsCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getConnectedEnvironmentsCertificate","getConnectedEnvironmentsCertificateOutput"], () => require("./getConnectedEnvironmentsCertificate"));

export { GetConnectedEnvironmentsDaprComponentArgs, GetConnectedEnvironmentsDaprComponentResult, GetConnectedEnvironmentsDaprComponentOutputArgs } from "./getConnectedEnvironmentsDaprComponent";
export const getConnectedEnvironmentsDaprComponent: typeof import("./getConnectedEnvironmentsDaprComponent").getConnectedEnvironmentsDaprComponent = null as any;
export const getConnectedEnvironmentsDaprComponentOutput: typeof import("./getConnectedEnvironmentsDaprComponent").getConnectedEnvironmentsDaprComponentOutput = null as any;
utilities.lazyLoad(exports, ["getConnectedEnvironmentsDaprComponent","getConnectedEnvironmentsDaprComponentOutput"], () => require("./getConnectedEnvironmentsDaprComponent"));

export { GetConnectedEnvironmentsStorageArgs, GetConnectedEnvironmentsStorageResult, GetConnectedEnvironmentsStorageOutputArgs } from "./getConnectedEnvironmentsStorage";
export const getConnectedEnvironmentsStorage: typeof import("./getConnectedEnvironmentsStorage").getConnectedEnvironmentsStorage = null as any;
export const getConnectedEnvironmentsStorageOutput: typeof import("./getConnectedEnvironmentsStorage").getConnectedEnvironmentsStorageOutput = null as any;
utilities.lazyLoad(exports, ["getConnectedEnvironmentsStorage","getConnectedEnvironmentsStorageOutput"], () => require("./getConnectedEnvironmentsStorage"));

export { GetContainerAppArgs, GetContainerAppResult, GetContainerAppOutputArgs } from "./getContainerApp";
export const getContainerApp: typeof import("./getContainerApp").getContainerApp = null as any;
export const getContainerAppOutput: typeof import("./getContainerApp").getContainerAppOutput = null as any;
utilities.lazyLoad(exports, ["getContainerApp","getContainerAppOutput"], () => require("./getContainerApp"));

export { GetContainerAppAuthTokenArgs, GetContainerAppAuthTokenResult, GetContainerAppAuthTokenOutputArgs } from "./getContainerAppAuthToken";
export const getContainerAppAuthToken: typeof import("./getContainerAppAuthToken").getContainerAppAuthToken = null as any;
export const getContainerAppAuthTokenOutput: typeof import("./getContainerAppAuthToken").getContainerAppAuthTokenOutput = null as any;
utilities.lazyLoad(exports, ["getContainerAppAuthToken","getContainerAppAuthTokenOutput"], () => require("./getContainerAppAuthToken"));

export { GetContainerAppsAuthConfigArgs, GetContainerAppsAuthConfigResult, GetContainerAppsAuthConfigOutputArgs } from "./getContainerAppsAuthConfig";
export const getContainerAppsAuthConfig: typeof import("./getContainerAppsAuthConfig").getContainerAppsAuthConfig = null as any;
export const getContainerAppsAuthConfigOutput: typeof import("./getContainerAppsAuthConfig").getContainerAppsAuthConfigOutput = null as any;
utilities.lazyLoad(exports, ["getContainerAppsAuthConfig","getContainerAppsAuthConfigOutput"], () => require("./getContainerAppsAuthConfig"));

export { GetContainerAppsSourceControlArgs, GetContainerAppsSourceControlResult, GetContainerAppsSourceControlOutputArgs } from "./getContainerAppsSourceControl";
export const getContainerAppsSourceControl: typeof import("./getContainerAppsSourceControl").getContainerAppsSourceControl = null as any;
export const getContainerAppsSourceControlOutput: typeof import("./getContainerAppsSourceControl").getContainerAppsSourceControlOutput = null as any;
utilities.lazyLoad(exports, ["getContainerAppsSourceControl","getContainerAppsSourceControlOutput"], () => require("./getContainerAppsSourceControl"));

export { GetCustomDomainVerificationIdArgs, GetCustomDomainVerificationIdResult } from "./getCustomDomainVerificationId";
export const getCustomDomainVerificationId: typeof import("./getCustomDomainVerificationId").getCustomDomainVerificationId = null as any;
export const getCustomDomainVerificationIdOutput: typeof import("./getCustomDomainVerificationId").getCustomDomainVerificationIdOutput = null as any;
utilities.lazyLoad(exports, ["getCustomDomainVerificationId","getCustomDomainVerificationIdOutput"], () => require("./getCustomDomainVerificationId"));

export { GetDaprComponentArgs, GetDaprComponentResult, GetDaprComponentOutputArgs } from "./getDaprComponent";
export const getDaprComponent: typeof import("./getDaprComponent").getDaprComponent = null as any;
export const getDaprComponentOutput: typeof import("./getDaprComponent").getDaprComponentOutput = null as any;
utilities.lazyLoad(exports, ["getDaprComponent","getDaprComponentOutput"], () => require("./getDaprComponent"));

export { GetDaprComponentResiliencyPolicyArgs, GetDaprComponentResiliencyPolicyResult, GetDaprComponentResiliencyPolicyOutputArgs } from "./getDaprComponentResiliencyPolicy";
export const getDaprComponentResiliencyPolicy: typeof import("./getDaprComponentResiliencyPolicy").getDaprComponentResiliencyPolicy = null as any;
export const getDaprComponentResiliencyPolicyOutput: typeof import("./getDaprComponentResiliencyPolicy").getDaprComponentResiliencyPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getDaprComponentResiliencyPolicy","getDaprComponentResiliencyPolicyOutput"], () => require("./getDaprComponentResiliencyPolicy"));

export { GetDaprSubscriptionArgs, GetDaprSubscriptionResult, GetDaprSubscriptionOutputArgs } from "./getDaprSubscription";
export const getDaprSubscription: typeof import("./getDaprSubscription").getDaprSubscription = null as any;
export const getDaprSubscriptionOutput: typeof import("./getDaprSubscription").getDaprSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getDaprSubscription","getDaprSubscriptionOutput"], () => require("./getDaprSubscription"));

export { GetDotNetComponentArgs, GetDotNetComponentResult, GetDotNetComponentOutputArgs } from "./getDotNetComponent";
export const getDotNetComponent: typeof import("./getDotNetComponent").getDotNetComponent = null as any;
export const getDotNetComponentOutput: typeof import("./getDotNetComponent").getDotNetComponentOutput = null as any;
utilities.lazyLoad(exports, ["getDotNetComponent","getDotNetComponentOutput"], () => require("./getDotNetComponent"));

export { GetJavaComponentArgs, GetJavaComponentResult, GetJavaComponentOutputArgs } from "./getJavaComponent";
export const getJavaComponent: typeof import("./getJavaComponent").getJavaComponent = null as any;
export const getJavaComponentOutput: typeof import("./getJavaComponent").getJavaComponentOutput = null as any;
utilities.lazyLoad(exports, ["getJavaComponent","getJavaComponentOutput"], () => require("./getJavaComponent"));

export { GetJobArgs, GetJobResult, GetJobOutputArgs } from "./getJob";
export const getJob: typeof import("./getJob").getJob = null as any;
export const getJobOutput: typeof import("./getJob").getJobOutput = null as any;
utilities.lazyLoad(exports, ["getJob","getJobOutput"], () => require("./getJob"));

export { GetManagedCertificateArgs, GetManagedCertificateResult, GetManagedCertificateOutputArgs } from "./getManagedCertificate";
export const getManagedCertificate: typeof import("./getManagedCertificate").getManagedCertificate = null as any;
export const getManagedCertificateOutput: typeof import("./getManagedCertificate").getManagedCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getManagedCertificate","getManagedCertificateOutput"], () => require("./getManagedCertificate"));

export { GetManagedEnvironmentArgs, GetManagedEnvironmentResult, GetManagedEnvironmentOutputArgs } from "./getManagedEnvironment";
export const getManagedEnvironment: typeof import("./getManagedEnvironment").getManagedEnvironment = null as any;
export const getManagedEnvironmentOutput: typeof import("./getManagedEnvironment").getManagedEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getManagedEnvironment","getManagedEnvironmentOutput"], () => require("./getManagedEnvironment"));

export { GetManagedEnvironmentAuthTokenArgs, GetManagedEnvironmentAuthTokenResult, GetManagedEnvironmentAuthTokenOutputArgs } from "./getManagedEnvironmentAuthToken";
export const getManagedEnvironmentAuthToken: typeof import("./getManagedEnvironmentAuthToken").getManagedEnvironmentAuthToken = null as any;
export const getManagedEnvironmentAuthTokenOutput: typeof import("./getManagedEnvironmentAuthToken").getManagedEnvironmentAuthTokenOutput = null as any;
utilities.lazyLoad(exports, ["getManagedEnvironmentAuthToken","getManagedEnvironmentAuthTokenOutput"], () => require("./getManagedEnvironmentAuthToken"));

export { GetManagedEnvironmentsStorageArgs, GetManagedEnvironmentsStorageResult, GetManagedEnvironmentsStorageOutputArgs } from "./getManagedEnvironmentsStorage";
export const getManagedEnvironmentsStorage: typeof import("./getManagedEnvironmentsStorage").getManagedEnvironmentsStorage = null as any;
export const getManagedEnvironmentsStorageOutput: typeof import("./getManagedEnvironmentsStorage").getManagedEnvironmentsStorageOutput = null as any;
utilities.lazyLoad(exports, ["getManagedEnvironmentsStorage","getManagedEnvironmentsStorageOutput"], () => require("./getManagedEnvironmentsStorage"));

export { JavaComponentArgs } from "./javaComponent";
export type JavaComponent = import("./javaComponent").JavaComponent;
export const JavaComponent: typeof import("./javaComponent").JavaComponent = null as any;
utilities.lazyLoad(exports, ["JavaComponent"], () => require("./javaComponent"));

export { JobArgs } from "./job";
export type Job = import("./job").Job;
export const Job: typeof import("./job").Job = null as any;
utilities.lazyLoad(exports, ["Job"], () => require("./job"));

export { ListBuildAuthTokenArgs, ListBuildAuthTokenResult, ListBuildAuthTokenOutputArgs } from "./listBuildAuthToken";
export const listBuildAuthToken: typeof import("./listBuildAuthToken").listBuildAuthToken = null as any;
export const listBuildAuthTokenOutput: typeof import("./listBuildAuthToken").listBuildAuthTokenOutput = null as any;
utilities.lazyLoad(exports, ["listBuildAuthToken","listBuildAuthTokenOutput"], () => require("./listBuildAuthToken"));

export { ListConnectedEnvironmentsDaprComponentSecretsArgs, ListConnectedEnvironmentsDaprComponentSecretsResult, ListConnectedEnvironmentsDaprComponentSecretsOutputArgs } from "./listConnectedEnvironmentsDaprComponentSecrets";
export const listConnectedEnvironmentsDaprComponentSecrets: typeof import("./listConnectedEnvironmentsDaprComponentSecrets").listConnectedEnvironmentsDaprComponentSecrets = null as any;
export const listConnectedEnvironmentsDaprComponentSecretsOutput: typeof import("./listConnectedEnvironmentsDaprComponentSecrets").listConnectedEnvironmentsDaprComponentSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listConnectedEnvironmentsDaprComponentSecrets","listConnectedEnvironmentsDaprComponentSecretsOutput"], () => require("./listConnectedEnvironmentsDaprComponentSecrets"));

export { ListContainerAppCustomHostNameAnalysisArgs, ListContainerAppCustomHostNameAnalysisResult, ListContainerAppCustomHostNameAnalysisOutputArgs } from "./listContainerAppCustomHostNameAnalysis";
export const listContainerAppCustomHostNameAnalysis: typeof import("./listContainerAppCustomHostNameAnalysis").listContainerAppCustomHostNameAnalysis = null as any;
export const listContainerAppCustomHostNameAnalysisOutput: typeof import("./listContainerAppCustomHostNameAnalysis").listContainerAppCustomHostNameAnalysisOutput = null as any;
utilities.lazyLoad(exports, ["listContainerAppCustomHostNameAnalysis","listContainerAppCustomHostNameAnalysisOutput"], () => require("./listContainerAppCustomHostNameAnalysis"));

export { ListContainerAppSecretsArgs, ListContainerAppSecretsResult, ListContainerAppSecretsOutputArgs } from "./listContainerAppSecrets";
export const listContainerAppSecrets: typeof import("./listContainerAppSecrets").listContainerAppSecrets = null as any;
export const listContainerAppSecretsOutput: typeof import("./listContainerAppSecrets").listContainerAppSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listContainerAppSecrets","listContainerAppSecretsOutput"], () => require("./listContainerAppSecrets"));

export { ListDaprComponentSecretsArgs, ListDaprComponentSecretsResult, ListDaprComponentSecretsOutputArgs } from "./listDaprComponentSecrets";
export const listDaprComponentSecrets: typeof import("./listDaprComponentSecrets").listDaprComponentSecrets = null as any;
export const listDaprComponentSecretsOutput: typeof import("./listDaprComponentSecrets").listDaprComponentSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listDaprComponentSecrets","listDaprComponentSecretsOutput"], () => require("./listDaprComponentSecrets"));

export { ListJobSecretsArgs, ListJobSecretsResult, ListJobSecretsOutputArgs } from "./listJobSecrets";
export const listJobSecrets: typeof import("./listJobSecrets").listJobSecrets = null as any;
export const listJobSecretsOutput: typeof import("./listJobSecrets").listJobSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listJobSecrets","listJobSecretsOutput"], () => require("./listJobSecrets"));

export { ManagedCertificateArgs } from "./managedCertificate";
export type ManagedCertificate = import("./managedCertificate").ManagedCertificate;
export const ManagedCertificate: typeof import("./managedCertificate").ManagedCertificate = null as any;
utilities.lazyLoad(exports, ["ManagedCertificate"], () => require("./managedCertificate"));

export { ManagedEnvironmentArgs } from "./managedEnvironment";
export type ManagedEnvironment = import("./managedEnvironment").ManagedEnvironment;
export const ManagedEnvironment: typeof import("./managedEnvironment").ManagedEnvironment = null as any;
utilities.lazyLoad(exports, ["ManagedEnvironment"], () => require("./managedEnvironment"));

export { ManagedEnvironmentsStorageArgs } from "./managedEnvironmentsStorage";
export type ManagedEnvironmentsStorage = import("./managedEnvironmentsStorage").ManagedEnvironmentsStorage;
export const ManagedEnvironmentsStorage: typeof import("./managedEnvironmentsStorage").ManagedEnvironmentsStorage = null as any;
utilities.lazyLoad(exports, ["ManagedEnvironmentsStorage"], () => require("./managedEnvironmentsStorage"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:app:AppResiliency":
                return new AppResiliency(name, <any>undefined, { urn })
            case "azure-native:app:Build":
                return new Build(name, <any>undefined, { urn })
            case "azure-native:app:Builder":
                return new Builder(name, <any>undefined, { urn })
            case "azure-native:app:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-native:app:ConnectedEnvironment":
                return new ConnectedEnvironment(name, <any>undefined, { urn })
            case "azure-native:app:ConnectedEnvironmentsCertificate":
                return new ConnectedEnvironmentsCertificate(name, <any>undefined, { urn })
            case "azure-native:app:ConnectedEnvironmentsDaprComponent":
                return new ConnectedEnvironmentsDaprComponent(name, <any>undefined, { urn })
            case "azure-native:app:ConnectedEnvironmentsStorage":
                return new ConnectedEnvironmentsStorage(name, <any>undefined, { urn })
            case "azure-native:app:ContainerApp":
                return new ContainerApp(name, <any>undefined, { urn })
            case "azure-native:app:ContainerAppsAuthConfig":
                return new ContainerAppsAuthConfig(name, <any>undefined, { urn })
            case "azure-native:app:ContainerAppsSourceControl":
                return new ContainerAppsSourceControl(name, <any>undefined, { urn })
            case "azure-native:app:DaprComponent":
                return new DaprComponent(name, <any>undefined, { urn })
            case "azure-native:app:DaprComponentResiliencyPolicy":
                return new DaprComponentResiliencyPolicy(name, <any>undefined, { urn })
            case "azure-native:app:DaprSubscription":
                return new DaprSubscription(name, <any>undefined, { urn })
            case "azure-native:app:DotNetComponent":
                return new DotNetComponent(name, <any>undefined, { urn })
            case "azure-native:app:JavaComponent":
                return new JavaComponent(name, <any>undefined, { urn })
            case "azure-native:app:Job":
                return new Job(name, <any>undefined, { urn })
            case "azure-native:app:ManagedCertificate":
                return new ManagedCertificate(name, <any>undefined, { urn })
            case "azure-native:app:ManagedEnvironment":
                return new ManagedEnvironment(name, <any>undefined, { urn })
            case "azure-native:app:ManagedEnvironmentsStorage":
                return new ManagedEnvironmentsStorage(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "app", _module)