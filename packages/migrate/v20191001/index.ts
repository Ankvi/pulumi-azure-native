import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AssessmentArgs } from "./assessment";
export type Assessment = import("./assessment").Assessment;
export const Assessment: typeof import("./assessment").Assessment = null as any;
utilities.lazyLoad(exports, ["Assessment"], () => require("./assessment"));

export { GetAssessmentArgs, GetAssessmentResult, GetAssessmentOutputArgs } from "./getAssessment";
export const getAssessment: typeof import("./getAssessment").getAssessment = null as any;
export const getAssessmentOutput: typeof import("./getAssessment").getAssessmentOutput = null as any;
utilities.lazyLoad(exports, ["getAssessment","getAssessmentOutput"], () => require("./getAssessment"));

export { GetGroupArgs, GetGroupResult, GetGroupOutputArgs } from "./getGroup";
export const getGroup: typeof import("./getGroup").getGroup = null as any;
export const getGroupOutput: typeof import("./getGroup").getGroupOutput = null as any;
utilities.lazyLoad(exports, ["getGroup","getGroupOutput"], () => require("./getGroup"));

export { GetHyperVCollectorArgs, GetHyperVCollectorResult, GetHyperVCollectorOutputArgs } from "./getHyperVCollector";
export const getHyperVCollector: typeof import("./getHyperVCollector").getHyperVCollector = null as any;
export const getHyperVCollectorOutput: typeof import("./getHyperVCollector").getHyperVCollectorOutput = null as any;
utilities.lazyLoad(exports, ["getHyperVCollector","getHyperVCollectorOutput"], () => require("./getHyperVCollector"));

export { GetImportCollectorArgs, GetImportCollectorResult, GetImportCollectorOutputArgs } from "./getImportCollector";
export const getImportCollector: typeof import("./getImportCollector").getImportCollector = null as any;
export const getImportCollectorOutput: typeof import("./getImportCollector").getImportCollectorOutput = null as any;
utilities.lazyLoad(exports, ["getImportCollector","getImportCollectorOutput"], () => require("./getImportCollector"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetProjectArgs, GetProjectResult, GetProjectOutputArgs } from "./getProject";
export const getProject: typeof import("./getProject").getProject = null as any;
export const getProjectOutput: typeof import("./getProject").getProjectOutput = null as any;
utilities.lazyLoad(exports, ["getProject","getProjectOutput"], () => require("./getProject"));

export { GetServerCollectorArgs, GetServerCollectorResult, GetServerCollectorOutputArgs } from "./getServerCollector";
export const getServerCollector: typeof import("./getServerCollector").getServerCollector = null as any;
export const getServerCollectorOutput: typeof import("./getServerCollector").getServerCollectorOutput = null as any;
utilities.lazyLoad(exports, ["getServerCollector","getServerCollectorOutput"], () => require("./getServerCollector"));

export { GetVMwareCollectorArgs, GetVMwareCollectorResult, GetVMwareCollectorOutputArgs } from "./getVMwareCollector";
export const getVMwareCollector: typeof import("./getVMwareCollector").getVMwareCollector = null as any;
export const getVMwareCollectorOutput: typeof import("./getVMwareCollector").getVMwareCollectorOutput = null as any;
utilities.lazyLoad(exports, ["getVMwareCollector","getVMwareCollectorOutput"], () => require("./getVMwareCollector"));

export { GroupArgs } from "./group";
export type Group = import("./group").Group;
export const Group: typeof import("./group").Group = null as any;
utilities.lazyLoad(exports, ["Group"], () => require("./group"));

export { HyperVCollectorArgs } from "./hyperVCollector";
export type HyperVCollector = import("./hyperVCollector").HyperVCollector;
export const HyperVCollector: typeof import("./hyperVCollector").HyperVCollector = null as any;
utilities.lazyLoad(exports, ["HyperVCollector"], () => require("./hyperVCollector"));

export { ImportCollectorArgs } from "./importCollector";
export type ImportCollector = import("./importCollector").ImportCollector;
export const ImportCollector: typeof import("./importCollector").ImportCollector = null as any;
utilities.lazyLoad(exports, ["ImportCollector"], () => require("./importCollector"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ProjectArgs } from "./project";
export type Project = import("./project").Project;
export const Project: typeof import("./project").Project = null as any;
utilities.lazyLoad(exports, ["Project"], () => require("./project"));

export { ServerCollectorArgs } from "./serverCollector";
export type ServerCollector = import("./serverCollector").ServerCollector;
export const ServerCollector: typeof import("./serverCollector").ServerCollector = null as any;
utilities.lazyLoad(exports, ["ServerCollector"], () => require("./serverCollector"));

export { VMwareCollectorArgs } from "./vmwareCollector";
export type VMwareCollector = import("./vmwareCollector").VMwareCollector;
export const VMwareCollector: typeof import("./vmwareCollector").VMwareCollector = null as any;
utilities.lazyLoad(exports, ["VMwareCollector"], () => require("./vmwareCollector"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:migrate/v20191001:Assessment":
                return new Assessment(name, <any>undefined, { urn })
            case "azure-native:migrate/v20191001:Group":
                return new Group(name, <any>undefined, { urn })
            case "azure-native:migrate/v20191001:HyperVCollector":
                return new HyperVCollector(name, <any>undefined, { urn })
            case "azure-native:migrate/v20191001:ImportCollector":
                return new ImportCollector(name, <any>undefined, { urn })
            case "azure-native:migrate/v20191001:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:migrate/v20191001:Project":
                return new Project(name, <any>undefined, { urn })
            case "azure-native:migrate/v20191001:ServerCollector":
                return new ServerCollector(name, <any>undefined, { urn })
            case "azure-native:migrate/v20191001:VMwareCollector":
                return new VMwareCollector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "migrate/v20191001", _module)
