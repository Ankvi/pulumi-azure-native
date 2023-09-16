import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CertificateArgs } from "./certificate";
export type Certificate = import("./certificate").Certificate;
export const Certificate: typeof import("./certificate").Certificate = null as any;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));

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

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

export { GetContainerAppArgs, GetContainerAppResult, GetContainerAppOutputArgs } from "./getContainerApp";
export const getContainerApp: typeof import("./getContainerApp").getContainerApp = null as any;
export const getContainerAppOutput: typeof import("./getContainerApp").getContainerAppOutput = null as any;
utilities.lazyLoad(exports, ["getContainerApp","getContainerAppOutput"], () => require("./getContainerApp"));

export { GetContainerAppsAuthConfigArgs, GetContainerAppsAuthConfigResult, GetContainerAppsAuthConfigOutputArgs } from "./getContainerAppsAuthConfig";
export const getContainerAppsAuthConfig: typeof import("./getContainerAppsAuthConfig").getContainerAppsAuthConfig = null as any;
export const getContainerAppsAuthConfigOutput: typeof import("./getContainerAppsAuthConfig").getContainerAppsAuthConfigOutput = null as any;
utilities.lazyLoad(exports, ["getContainerAppsAuthConfig","getContainerAppsAuthConfigOutput"], () => require("./getContainerAppsAuthConfig"));

export { GetContainerAppsSourceControlArgs, GetContainerAppsSourceControlResult, GetContainerAppsSourceControlOutputArgs } from "./getContainerAppsSourceControl";
export const getContainerAppsSourceControl: typeof import("./getContainerAppsSourceControl").getContainerAppsSourceControl = null as any;
export const getContainerAppsSourceControlOutput: typeof import("./getContainerAppsSourceControl").getContainerAppsSourceControlOutput = null as any;
utilities.lazyLoad(exports, ["getContainerAppsSourceControl","getContainerAppsSourceControlOutput"], () => require("./getContainerAppsSourceControl"));

export { GetDaprComponentArgs, GetDaprComponentResult, GetDaprComponentOutputArgs } from "./getDaprComponent";
export const getDaprComponent: typeof import("./getDaprComponent").getDaprComponent = null as any;
export const getDaprComponentOutput: typeof import("./getDaprComponent").getDaprComponentOutput = null as any;
utilities.lazyLoad(exports, ["getDaprComponent","getDaprComponentOutput"], () => require("./getDaprComponent"));

export { GetManagedEnvironmentArgs, GetManagedEnvironmentResult, GetManagedEnvironmentOutputArgs } from "./getManagedEnvironment";
export const getManagedEnvironment: typeof import("./getManagedEnvironment").getManagedEnvironment = null as any;
export const getManagedEnvironmentOutput: typeof import("./getManagedEnvironment").getManagedEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getManagedEnvironment","getManagedEnvironmentOutput"], () => require("./getManagedEnvironment"));

export { GetManagedEnvironmentsStorageArgs, GetManagedEnvironmentsStorageResult, GetManagedEnvironmentsStorageOutputArgs } from "./getManagedEnvironmentsStorage";
export const getManagedEnvironmentsStorage: typeof import("./getManagedEnvironmentsStorage").getManagedEnvironmentsStorage = null as any;
export const getManagedEnvironmentsStorageOutput: typeof import("./getManagedEnvironmentsStorage").getManagedEnvironmentsStorageOutput = null as any;
utilities.lazyLoad(exports, ["getManagedEnvironmentsStorage","getManagedEnvironmentsStorageOutput"], () => require("./getManagedEnvironmentsStorage"));

export { ListContainerAppCustomHostNameAnalysisArgs, ListContainerAppCustomHostNameAnalysisResult, ListContainerAppCustomHostNameAnalysisOutputArgs } from "./listContainerAppCustomHostNameAnalysis";
export const listContainerAppCustomHostNameAnalysis: typeof import("./listContainerAppCustomHostNameAnalysis").listContainerAppCustomHostNameAnalysis = null as any;
export const listContainerAppCustomHostNameAnalysisOutput: typeof import("./listContainerAppCustomHostNameAnalysis").listContainerAppCustomHostNameAnalysisOutput = null as any;
utilities.lazyLoad(exports, ["listContainerAppCustomHostNameAnalysis","listContainerAppCustomHostNameAnalysisOutput"], () => require("./listContainerAppCustomHostNameAnalysis"));

export { ListContainerAppSecretsArgs, ListContainerAppSecretsResult, ListContainerAppSecretsOutputArgs } from "./listContainerAppSecrets";
export const listContainerAppSecrets: typeof import("./listContainerAppSecrets").listContainerAppSecrets = null as any;
export const listContainerAppSecretsOutput: typeof import("./listContainerAppSecrets").listContainerAppSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listContainerAppSecrets","listContainerAppSecretsOutput"], () => require("./listContainerAppSecrets"));

export { ManagedEnvironmentArgs } from "./managedEnvironment";
export type ManagedEnvironment = import("./managedEnvironment").ManagedEnvironment;
export const ManagedEnvironment: typeof import("./managedEnvironment").ManagedEnvironment = null as any;
utilities.lazyLoad(exports, ["ManagedEnvironment"], () => require("./managedEnvironment"));

export { ManagedEnvironmentsStorageArgs } from "./managedEnvironmentsStorage";
export type ManagedEnvironmentsStorage = import("./managedEnvironmentsStorage").ManagedEnvironmentsStorage;
export const ManagedEnvironmentsStorage: typeof import("./managedEnvironmentsStorage").ManagedEnvironmentsStorage = null as any;
utilities.lazyLoad(exports, ["ManagedEnvironmentsStorage"], () => require("./managedEnvironmentsStorage"));


// Export enums:
export * from "../types/enums/v20220101preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:app/v20220101preview:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-native:app/v20220101preview:ContainerApp":
                return new ContainerApp(name, <any>undefined, { urn })
            case "azure-native:app/v20220101preview:ContainerAppsAuthConfig":
                return new ContainerAppsAuthConfig(name, <any>undefined, { urn })
            case "azure-native:app/v20220101preview:ContainerAppsSourceControl":
                return new ContainerAppsSourceControl(name, <any>undefined, { urn })
            case "azure-native:app/v20220101preview:DaprComponent":
                return new DaprComponent(name, <any>undefined, { urn })
            case "azure-native:app/v20220101preview:ManagedEnvironment":
                return new ManagedEnvironment(name, <any>undefined, { urn })
            case "azure-native:app/v20220101preview:ManagedEnvironmentsStorage":
                return new ManagedEnvironmentsStorage(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "app/v20220101preview", _module)
