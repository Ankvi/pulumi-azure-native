import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationArgs } from "./application";
export type Application = import("./application").Application;
export const Application: typeof import("./application").Application = null as any;
utilities.lazyLoad(exports, ["Application"], () => require("./application"));

export { ApplicationResourceArgs } from "./applicationResource";
export type ApplicationResource = import("./applicationResource").ApplicationResource;
export const ApplicationResource: typeof import("./applicationResource").ApplicationResource = null as any;
utilities.lazyLoad(exports, ["ApplicationResource"], () => require("./applicationResource"));

export { BusinessProcessArgs } from "./businessProcess";
export type BusinessProcess = import("./businessProcess").BusinessProcess;
export const BusinessProcess: typeof import("./businessProcess").BusinessProcess = null as any;
utilities.lazyLoad(exports, ["BusinessProcess"], () => require("./businessProcess"));

export { GetApplicationArgs, GetApplicationResult, GetApplicationOutputArgs } from "./getApplication";
export const getApplication: typeof import("./getApplication").getApplication = null as any;
export const getApplicationOutput: typeof import("./getApplication").getApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getApplication","getApplicationOutput"], () => require("./getApplication"));

export { GetApplicationBusinessProcessDevelopmentArtifactArgs, GetApplicationBusinessProcessDevelopmentArtifactResult, GetApplicationBusinessProcessDevelopmentArtifactOutputArgs } from "./getApplicationBusinessProcessDevelopmentArtifact";
export const getApplicationBusinessProcessDevelopmentArtifact: typeof import("./getApplicationBusinessProcessDevelopmentArtifact").getApplicationBusinessProcessDevelopmentArtifact = null as any;
export const getApplicationBusinessProcessDevelopmentArtifactOutput: typeof import("./getApplicationBusinessProcessDevelopmentArtifact").getApplicationBusinessProcessDevelopmentArtifactOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationBusinessProcessDevelopmentArtifact","getApplicationBusinessProcessDevelopmentArtifactOutput"], () => require("./getApplicationBusinessProcessDevelopmentArtifact"));

export { GetApplicationResourceArgs, GetApplicationResourceResult, GetApplicationResourceOutputArgs } from "./getApplicationResource";
export const getApplicationResource: typeof import("./getApplicationResource").getApplicationResource = null as any;
export const getApplicationResourceOutput: typeof import("./getApplicationResource").getApplicationResourceOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationResource","getApplicationResourceOutput"], () => require("./getApplicationResource"));

export { GetBusinessProcessArgs, GetBusinessProcessResult, GetBusinessProcessOutputArgs } from "./getBusinessProcess";
export const getBusinessProcess: typeof import("./getBusinessProcess").getBusinessProcess = null as any;
export const getBusinessProcessOutput: typeof import("./getBusinessProcess").getBusinessProcessOutput = null as any;
utilities.lazyLoad(exports, ["getBusinessProcess","getBusinessProcessOutput"], () => require("./getBusinessProcess"));

export { GetInfrastructureResourceArgs, GetInfrastructureResourceResult, GetInfrastructureResourceOutputArgs } from "./getInfrastructureResource";
export const getInfrastructureResource: typeof import("./getInfrastructureResource").getInfrastructureResource = null as any;
export const getInfrastructureResourceOutput: typeof import("./getInfrastructureResource").getInfrastructureResourceOutput = null as any;
utilities.lazyLoad(exports, ["getInfrastructureResource","getInfrastructureResourceOutput"], () => require("./getInfrastructureResource"));

export { GetSpaceArgs, GetSpaceResult, GetSpaceOutputArgs } from "./getSpace";
export const getSpace: typeof import("./getSpace").getSpace = null as any;
export const getSpaceOutput: typeof import("./getSpace").getSpaceOutput = null as any;
utilities.lazyLoad(exports, ["getSpace","getSpaceOutput"], () => require("./getSpace"));

export { InfrastructureResourceArgs } from "./infrastructureResource";
export type InfrastructureResource = import("./infrastructureResource").InfrastructureResource;
export const InfrastructureResource: typeof import("./infrastructureResource").InfrastructureResource = null as any;
utilities.lazyLoad(exports, ["InfrastructureResource"], () => require("./infrastructureResource"));

export { ListApplicationBusinessProcessDevelopmentArtifactsArgs, ListApplicationBusinessProcessDevelopmentArtifactsResult, ListApplicationBusinessProcessDevelopmentArtifactsOutputArgs } from "./listApplicationBusinessProcessDevelopmentArtifacts";
export const listApplicationBusinessProcessDevelopmentArtifacts: typeof import("./listApplicationBusinessProcessDevelopmentArtifacts").listApplicationBusinessProcessDevelopmentArtifacts = null as any;
export const listApplicationBusinessProcessDevelopmentArtifactsOutput: typeof import("./listApplicationBusinessProcessDevelopmentArtifacts").listApplicationBusinessProcessDevelopmentArtifactsOutput = null as any;
utilities.lazyLoad(exports, ["listApplicationBusinessProcessDevelopmentArtifacts","listApplicationBusinessProcessDevelopmentArtifactsOutput"], () => require("./listApplicationBusinessProcessDevelopmentArtifacts"));

export { SpaceArgs } from "./space";
export type Space = import("./space").Space;
export const Space: typeof import("./space").Space = null as any;
utilities.lazyLoad(exports, ["Space"], () => require("./space"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:integrationspaces:Application":
                return new Application(name, <any>undefined, { urn })
            case "azure-native:integrationspaces:ApplicationResource":
                return new ApplicationResource(name, <any>undefined, { urn })
            case "azure-native:integrationspaces:BusinessProcess":
                return new BusinessProcess(name, <any>undefined, { urn })
            case "azure-native:integrationspaces:InfrastructureResource":
                return new InfrastructureResource(name, <any>undefined, { urn })
            case "azure-native:integrationspaces:Space":
                return new Space(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "integrationspaces", _module)