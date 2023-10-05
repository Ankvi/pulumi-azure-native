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

export { GetMigrateAgentArgs, GetMigrateAgentResult, GetMigrateAgentOutputArgs } from "./getMigrateAgent";
export const getMigrateAgent: typeof import("./getMigrateAgent").getMigrateAgent = null as any;
export const getMigrateAgentOutput: typeof import("./getMigrateAgent").getMigrateAgentOutput = null as any;
utilities.lazyLoad(exports, ["getMigrateAgent","getMigrateAgentOutput"], () => require("./getMigrateAgent"));

export { GetMigrateProjectArgs, GetMigrateProjectResult, GetMigrateProjectOutputArgs } from "./getMigrateProject";
export const getMigrateProject: typeof import("./getMigrateProject").getMigrateProject = null as any;
export const getMigrateProjectOutput: typeof import("./getMigrateProject").getMigrateProjectOutput = null as any;
utilities.lazyLoad(exports, ["getMigrateProject","getMigrateProjectOutput"], () => require("./getMigrateProject"));

export { GetMigrateProjectsControllerMigrateProjectArgs, GetMigrateProjectsControllerMigrateProjectResult, GetMigrateProjectsControllerMigrateProjectOutputArgs } from "./getMigrateProjectsControllerMigrateProject";
export const getMigrateProjectsControllerMigrateProject: typeof import("./getMigrateProjectsControllerMigrateProject").getMigrateProjectsControllerMigrateProject = null as any;
export const getMigrateProjectsControllerMigrateProjectOutput: typeof import("./getMigrateProjectsControllerMigrateProject").getMigrateProjectsControllerMigrateProjectOutput = null as any;
utilities.lazyLoad(exports, ["getMigrateProjectsControllerMigrateProject","getMigrateProjectsControllerMigrateProjectOutput"], () => require("./getMigrateProjectsControllerMigrateProject"));

export { GetModernizeProjectArgs, GetModernizeProjectResult, GetModernizeProjectOutputArgs } from "./getModernizeProject";
export const getModernizeProject: typeof import("./getModernizeProject").getModernizeProject = null as any;
export const getModernizeProjectOutput: typeof import("./getModernizeProject").getModernizeProjectOutput = null as any;
utilities.lazyLoad(exports, ["getModernizeProject","getModernizeProjectOutput"], () => require("./getModernizeProject"));

export { GetMoveCollectionArgs, GetMoveCollectionResult, GetMoveCollectionOutputArgs } from "./getMoveCollection";
export const getMoveCollection: typeof import("./getMoveCollection").getMoveCollection = null as any;
export const getMoveCollectionOutput: typeof import("./getMoveCollection").getMoveCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getMoveCollection","getMoveCollectionOutput"], () => require("./getMoveCollection"));

export { GetMoveResourceArgs, GetMoveResourceResult, GetMoveResourceOutputArgs } from "./getMoveResource";
export const getMoveResource: typeof import("./getMoveResource").getMoveResource = null as any;
export const getMoveResourceOutput: typeof import("./getMoveResource").getMoveResourceOutput = null as any;
utilities.lazyLoad(exports, ["getMoveResource","getMoveResourceOutput"], () => require("./getMoveResource"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetPrivateEndpointConnectionControllerPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionControllerPrivateEndpointConnectionResult, GetPrivateEndpointConnectionControllerPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnectionControllerPrivateEndpointConnection";
export const getPrivateEndpointConnectionControllerPrivateEndpointConnection: typeof import("./getPrivateEndpointConnectionControllerPrivateEndpointConnection").getPrivateEndpointConnectionControllerPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionControllerPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnectionControllerPrivateEndpointConnection").getPrivateEndpointConnectionControllerPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnectionControllerPrivateEndpointConnection","getPrivateEndpointConnectionControllerPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnectionControllerPrivateEndpointConnection"));

export { GetPrivateEndpointConnectionProxyControllerArgs, GetPrivateEndpointConnectionProxyControllerResult, GetPrivateEndpointConnectionProxyControllerOutputArgs } from "./getPrivateEndpointConnectionProxyController";
export const getPrivateEndpointConnectionProxyController: typeof import("./getPrivateEndpointConnectionProxyController").getPrivateEndpointConnectionProxyController = null as any;
export const getPrivateEndpointConnectionProxyControllerOutput: typeof import("./getPrivateEndpointConnectionProxyController").getPrivateEndpointConnectionProxyControllerOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnectionProxyController","getPrivateEndpointConnectionProxyControllerOutput"], () => require("./getPrivateEndpointConnectionProxyController"));

export { GetProjectArgs, GetProjectResult, GetProjectOutputArgs } from "./getProject";
export const getProject: typeof import("./getProject").getProject = null as any;
export const getProjectOutput: typeof import("./getProject").getProjectOutput = null as any;
utilities.lazyLoad(exports, ["getProject","getProjectOutput"], () => require("./getProject"));

export { GetProjectKeysArgs, GetProjectKeysResult, GetProjectKeysOutputArgs } from "./getProjectKeys";
export const getProjectKeys: typeof import("./getProjectKeys").getProjectKeys = null as any;
export const getProjectKeysOutput: typeof import("./getProjectKeys").getProjectKeysOutput = null as any;
utilities.lazyLoad(exports, ["getProjectKeys","getProjectKeysOutput"], () => require("./getProjectKeys"));

export { GetServerCollectorArgs, GetServerCollectorResult, GetServerCollectorOutputArgs } from "./getServerCollector";
export const getServerCollector: typeof import("./getServerCollector").getServerCollector = null as any;
export const getServerCollectorOutput: typeof import("./getServerCollector").getServerCollectorOutput = null as any;
utilities.lazyLoad(exports, ["getServerCollector","getServerCollectorOutput"], () => require("./getServerCollector"));

export { GetSolutionArgs, GetSolutionResult, GetSolutionOutputArgs } from "./getSolution";
export const getSolution: typeof import("./getSolution").getSolution = null as any;
export const getSolutionOutput: typeof import("./getSolution").getSolutionOutput = null as any;
utilities.lazyLoad(exports, ["getSolution","getSolutionOutput"], () => require("./getSolution"));

export { GetSolutionConfigArgs, GetSolutionConfigResult, GetSolutionConfigOutputArgs } from "./getSolutionConfig";
export const getSolutionConfig: typeof import("./getSolutionConfig").getSolutionConfig = null as any;
export const getSolutionConfigOutput: typeof import("./getSolutionConfig").getSolutionConfigOutput = null as any;
utilities.lazyLoad(exports, ["getSolutionConfig","getSolutionConfigOutput"], () => require("./getSolutionConfig"));

export { GetSolutionsControllerConfigArgs, GetSolutionsControllerConfigResult, GetSolutionsControllerConfigOutputArgs } from "./getSolutionsControllerConfig";
export const getSolutionsControllerConfig: typeof import("./getSolutionsControllerConfig").getSolutionsControllerConfig = null as any;
export const getSolutionsControllerConfigOutput: typeof import("./getSolutionsControllerConfig").getSolutionsControllerConfigOutput = null as any;
utilities.lazyLoad(exports, ["getSolutionsControllerConfig","getSolutionsControllerConfigOutput"], () => require("./getSolutionsControllerConfig"));

export { GetSolutionsControllerSolutionArgs, GetSolutionsControllerSolutionResult, GetSolutionsControllerSolutionOutputArgs } from "./getSolutionsControllerSolution";
export const getSolutionsControllerSolution: typeof import("./getSolutionsControllerSolution").getSolutionsControllerSolution = null as any;
export const getSolutionsControllerSolutionOutput: typeof import("./getSolutionsControllerSolution").getSolutionsControllerSolutionOutput = null as any;
utilities.lazyLoad(exports, ["getSolutionsControllerSolution","getSolutionsControllerSolutionOutput"], () => require("./getSolutionsControllerSolution"));

export { GetVMwareCollectorArgs, GetVMwareCollectorResult, GetVMwareCollectorOutputArgs } from "./getVMwareCollector";
export const getVMwareCollector: typeof import("./getVMwareCollector").getVMwareCollector = null as any;
export const getVMwareCollectorOutput: typeof import("./getVMwareCollector").getVMwareCollectorOutput = null as any;
utilities.lazyLoad(exports, ["getVMwareCollector","getVMwareCollectorOutput"], () => require("./getVMwareCollector"));

export { GetWorkloadDeploymentArgs, GetWorkloadDeploymentResult, GetWorkloadDeploymentOutputArgs } from "./getWorkloadDeployment";
export const getWorkloadDeployment: typeof import("./getWorkloadDeployment").getWorkloadDeployment = null as any;
export const getWorkloadDeploymentOutput: typeof import("./getWorkloadDeployment").getWorkloadDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadDeployment","getWorkloadDeploymentOutput"], () => require("./getWorkloadDeployment"));

export { GetWorkloadDeploymentSecretConfigurationsArgs, GetWorkloadDeploymentSecretConfigurationsResult, GetWorkloadDeploymentSecretConfigurationsOutputArgs } from "./getWorkloadDeploymentSecretConfigurations";
export const getWorkloadDeploymentSecretConfigurations: typeof import("./getWorkloadDeploymentSecretConfigurations").getWorkloadDeploymentSecretConfigurations = null as any;
export const getWorkloadDeploymentSecretConfigurationsOutput: typeof import("./getWorkloadDeploymentSecretConfigurations").getWorkloadDeploymentSecretConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadDeploymentSecretConfigurations","getWorkloadDeploymentSecretConfigurationsOutput"], () => require("./getWorkloadDeploymentSecretConfigurations"));

export { GetWorkloadInstanceArgs, GetWorkloadInstanceResult, GetWorkloadInstanceOutputArgs } from "./getWorkloadInstance";
export const getWorkloadInstance: typeof import("./getWorkloadInstance").getWorkloadInstance = null as any;
export const getWorkloadInstanceOutput: typeof import("./getWorkloadInstance").getWorkloadInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadInstance","getWorkloadInstanceOutput"], () => require("./getWorkloadInstance"));

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

export { MigrateAgentArgs } from "./migrateAgent";
export type MigrateAgent = import("./migrateAgent").MigrateAgent;
export const MigrateAgent: typeof import("./migrateAgent").MigrateAgent = null as any;
utilities.lazyLoad(exports, ["MigrateAgent"], () => require("./migrateAgent"));

export { MigrateProjectArgs } from "./migrateProject";
export type MigrateProject = import("./migrateProject").MigrateProject;
export const MigrateProject: typeof import("./migrateProject").MigrateProject = null as any;
utilities.lazyLoad(exports, ["MigrateProject"], () => require("./migrateProject"));

export { MigrateProjectsControllerMigrateProjectArgs } from "./migrateProjectsControllerMigrateProject";
export type MigrateProjectsControllerMigrateProject = import("./migrateProjectsControllerMigrateProject").MigrateProjectsControllerMigrateProject;
export const MigrateProjectsControllerMigrateProject: typeof import("./migrateProjectsControllerMigrateProject").MigrateProjectsControllerMigrateProject = null as any;
utilities.lazyLoad(exports, ["MigrateProjectsControllerMigrateProject"], () => require("./migrateProjectsControllerMigrateProject"));

export { ModernizeProjectArgs } from "./modernizeProject";
export type ModernizeProject = import("./modernizeProject").ModernizeProject;
export const ModernizeProject: typeof import("./modernizeProject").ModernizeProject = null as any;
utilities.lazyLoad(exports, ["ModernizeProject"], () => require("./modernizeProject"));

export { MoveCollectionArgs } from "./moveCollection";
export type MoveCollection = import("./moveCollection").MoveCollection;
export const MoveCollection: typeof import("./moveCollection").MoveCollection = null as any;
utilities.lazyLoad(exports, ["MoveCollection"], () => require("./moveCollection"));

export { MoveResourceArgs } from "./moveResource";
export type MoveResource = import("./moveResource").MoveResource;
export const MoveResource: typeof import("./moveResource").MoveResource = null as any;
utilities.lazyLoad(exports, ["MoveResource"], () => require("./moveResource"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { PrivateEndpointConnectionControllerPrivateEndpointConnectionArgs } from "./privateEndpointConnectionControllerPrivateEndpointConnection";
export type PrivateEndpointConnectionControllerPrivateEndpointConnection = import("./privateEndpointConnectionControllerPrivateEndpointConnection").PrivateEndpointConnectionControllerPrivateEndpointConnection;
export const PrivateEndpointConnectionControllerPrivateEndpointConnection: typeof import("./privateEndpointConnectionControllerPrivateEndpointConnection").PrivateEndpointConnectionControllerPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnectionControllerPrivateEndpointConnection"], () => require("./privateEndpointConnectionControllerPrivateEndpointConnection"));

export { PrivateEndpointConnectionProxyControllerArgs } from "./privateEndpointConnectionProxyController";
export type PrivateEndpointConnectionProxyController = import("./privateEndpointConnectionProxyController").PrivateEndpointConnectionProxyController;
export const PrivateEndpointConnectionProxyController: typeof import("./privateEndpointConnectionProxyController").PrivateEndpointConnectionProxyController = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnectionProxyController"], () => require("./privateEndpointConnectionProxyController"));

export { ProjectArgs } from "./project";
export type Project = import("./project").Project;
export const Project: typeof import("./project").Project = null as any;
utilities.lazyLoad(exports, ["Project"], () => require("./project"));

export { ServerCollectorArgs } from "./serverCollector";
export type ServerCollector = import("./serverCollector").ServerCollector;
export const ServerCollector: typeof import("./serverCollector").ServerCollector = null as any;
utilities.lazyLoad(exports, ["ServerCollector"], () => require("./serverCollector"));

export { SolutionArgs } from "./solution";
export type Solution = import("./solution").Solution;
export const Solution: typeof import("./solution").Solution = null as any;
utilities.lazyLoad(exports, ["Solution"], () => require("./solution"));

export { SolutionsControllerSolutionArgs } from "./solutionsControllerSolution";
export type SolutionsControllerSolution = import("./solutionsControllerSolution").SolutionsControllerSolution;
export const SolutionsControllerSolution: typeof import("./solutionsControllerSolution").SolutionsControllerSolution = null as any;
utilities.lazyLoad(exports, ["SolutionsControllerSolution"], () => require("./solutionsControllerSolution"));

export { VMwareCollectorArgs } from "./vmwareCollector";
export type VMwareCollector = import("./vmwareCollector").VMwareCollector;
export const VMwareCollector: typeof import("./vmwareCollector").VMwareCollector = null as any;
utilities.lazyLoad(exports, ["VMwareCollector"], () => require("./vmwareCollector"));

export { WorkloadDeploymentArgs } from "./workloadDeployment";
export type WorkloadDeployment = import("./workloadDeployment").WorkloadDeployment;
export const WorkloadDeployment: typeof import("./workloadDeployment").WorkloadDeployment = null as any;
utilities.lazyLoad(exports, ["WorkloadDeployment"], () => require("./workloadDeployment"));

export { WorkloadInstanceArgs } from "./workloadInstance";
export type WorkloadInstance = import("./workloadInstance").WorkloadInstance;
export const WorkloadInstance: typeof import("./workloadInstance").WorkloadInstance = null as any;
utilities.lazyLoad(exports, ["WorkloadInstance"], () => require("./workloadInstance"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20180202 from "./v20180202";
import * as v20180901preview from "./v20180901preview";
import * as v20191001 from "./v20191001";
import * as v20200501 from "./v20200501";
import * as v20220501preview from "./v20220501preview";
import * as v20220801 from "./v20220801";
import * as v20230101 from "./v20230101";
import * as v20230801 from "./v20230801";

export {
    v20180202,
    v20180901preview,
    v20191001,
    v20200501,
    v20220501preview,
    v20220801,
    v20230101,
    v20230801,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:migrate:Assessment":
                return new Assessment(name, <any>undefined, { urn })
            case "azure-native:migrate:Group":
                return new Group(name, <any>undefined, { urn })
            case "azure-native:migrate:HyperVCollector":
                return new HyperVCollector(name, <any>undefined, { urn })
            case "azure-native:migrate:ImportCollector":
                return new ImportCollector(name, <any>undefined, { urn })
            case "azure-native:migrate:MigrateAgent":
                return new MigrateAgent(name, <any>undefined, { urn })
            case "azure-native:migrate:MigrateProject":
                return new MigrateProject(name, <any>undefined, { urn })
            case "azure-native:migrate:MigrateProjectsControllerMigrateProject":
                return new MigrateProjectsControllerMigrateProject(name, <any>undefined, { urn })
            case "azure-native:migrate:ModernizeProject":
                return new ModernizeProject(name, <any>undefined, { urn })
            case "azure-native:migrate:MoveCollection":
                return new MoveCollection(name, <any>undefined, { urn })
            case "azure-native:migrate:MoveResource":
                return new MoveResource(name, <any>undefined, { urn })
            case "azure-native:migrate:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:migrate:PrivateEndpointConnectionControllerPrivateEndpointConnection":
                return new PrivateEndpointConnectionControllerPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:migrate:PrivateEndpointConnectionProxyController":
                return new PrivateEndpointConnectionProxyController(name, <any>undefined, { urn })
            case "azure-native:migrate:Project":
                return new Project(name, <any>undefined, { urn })
            case "azure-native:migrate:ServerCollector":
                return new ServerCollector(name, <any>undefined, { urn })
            case "azure-native:migrate:Solution":
                return new Solution(name, <any>undefined, { urn })
            case "azure-native:migrate:SolutionsControllerSolution":
                return new SolutionsControllerSolution(name, <any>undefined, { urn })
            case "azure-native:migrate:VMwareCollector":
                return new VMwareCollector(name, <any>undefined, { urn })
            case "azure-native:migrate:WorkloadDeployment":
                return new WorkloadDeployment(name, <any>undefined, { urn })
            case "azure-native:migrate:WorkloadInstance":
                return new WorkloadInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "migrate", _module)
