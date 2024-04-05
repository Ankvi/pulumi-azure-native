import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMigrateProjectsControllerMigrateProjectArgs, GetMigrateProjectsControllerMigrateProjectResult, GetMigrateProjectsControllerMigrateProjectOutputArgs } from "./getMigrateProjectsControllerMigrateProject";
export const getMigrateProjectsControllerMigrateProject: typeof import("./getMigrateProjectsControllerMigrateProject").getMigrateProjectsControllerMigrateProject = null as any;
export const getMigrateProjectsControllerMigrateProjectOutput: typeof import("./getMigrateProjectsControllerMigrateProject").getMigrateProjectsControllerMigrateProjectOutput = null as any;
utilities.lazyLoad(exports, ["getMigrateProjectsControllerMigrateProject","getMigrateProjectsControllerMigrateProjectOutput"], () => require("./getMigrateProjectsControllerMigrateProject"));

export { GetPrivateEndpointConnectionControllerPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionControllerPrivateEndpointConnectionResult, GetPrivateEndpointConnectionControllerPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnectionControllerPrivateEndpointConnection";
export const getPrivateEndpointConnectionControllerPrivateEndpointConnection: typeof import("./getPrivateEndpointConnectionControllerPrivateEndpointConnection").getPrivateEndpointConnectionControllerPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionControllerPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnectionControllerPrivateEndpointConnection").getPrivateEndpointConnectionControllerPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnectionControllerPrivateEndpointConnection","getPrivateEndpointConnectionControllerPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnectionControllerPrivateEndpointConnection"));

export { GetPrivateEndpointConnectionProxyControllerArgs, GetPrivateEndpointConnectionProxyControllerResult, GetPrivateEndpointConnectionProxyControllerOutputArgs } from "./getPrivateEndpointConnectionProxyController";
export const getPrivateEndpointConnectionProxyController: typeof import("./getPrivateEndpointConnectionProxyController").getPrivateEndpointConnectionProxyController = null as any;
export const getPrivateEndpointConnectionProxyControllerOutput: typeof import("./getPrivateEndpointConnectionProxyController").getPrivateEndpointConnectionProxyControllerOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnectionProxyController","getPrivateEndpointConnectionProxyControllerOutput"], () => require("./getPrivateEndpointConnectionProxyController"));

export { GetSolutionsControllerConfigArgs, GetSolutionsControllerConfigResult, GetSolutionsControllerConfigOutputArgs } from "./getSolutionsControllerConfig";
export const getSolutionsControllerConfig: typeof import("./getSolutionsControllerConfig").getSolutionsControllerConfig = null as any;
export const getSolutionsControllerConfigOutput: typeof import("./getSolutionsControllerConfig").getSolutionsControllerConfigOutput = null as any;
utilities.lazyLoad(exports, ["getSolutionsControllerConfig","getSolutionsControllerConfigOutput"], () => require("./getSolutionsControllerConfig"));

export { GetSolutionsControllerSolutionArgs, GetSolutionsControllerSolutionResult, GetSolutionsControllerSolutionOutputArgs } from "./getSolutionsControllerSolution";
export const getSolutionsControllerSolution: typeof import("./getSolutionsControllerSolution").getSolutionsControllerSolution = null as any;
export const getSolutionsControllerSolutionOutput: typeof import("./getSolutionsControllerSolution").getSolutionsControllerSolutionOutput = null as any;
utilities.lazyLoad(exports, ["getSolutionsControllerSolution","getSolutionsControllerSolutionOutput"], () => require("./getSolutionsControllerSolution"));

export { MigrateProjectsControllerMigrateProjectArgs } from "./migrateProjectsControllerMigrateProject";
export type MigrateProjectsControllerMigrateProject = import("./migrateProjectsControllerMigrateProject").MigrateProjectsControllerMigrateProject;
export const MigrateProjectsControllerMigrateProject: typeof import("./migrateProjectsControllerMigrateProject").MigrateProjectsControllerMigrateProject = null as any;
utilities.lazyLoad(exports, ["MigrateProjectsControllerMigrateProject"], () => require("./migrateProjectsControllerMigrateProject"));

export { PrivateEndpointConnectionControllerPrivateEndpointConnectionArgs } from "./privateEndpointConnectionControllerPrivateEndpointConnection";
export type PrivateEndpointConnectionControllerPrivateEndpointConnection = import("./privateEndpointConnectionControllerPrivateEndpointConnection").PrivateEndpointConnectionControllerPrivateEndpointConnection;
export const PrivateEndpointConnectionControllerPrivateEndpointConnection: typeof import("./privateEndpointConnectionControllerPrivateEndpointConnection").PrivateEndpointConnectionControllerPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnectionControllerPrivateEndpointConnection"], () => require("./privateEndpointConnectionControllerPrivateEndpointConnection"));

export { PrivateEndpointConnectionProxyControllerArgs } from "./privateEndpointConnectionProxyController";
export type PrivateEndpointConnectionProxyController = import("./privateEndpointConnectionProxyController").PrivateEndpointConnectionProxyController;
export const PrivateEndpointConnectionProxyController: typeof import("./privateEndpointConnectionProxyController").PrivateEndpointConnectionProxyController = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnectionProxyController"], () => require("./privateEndpointConnectionProxyController"));

export { SolutionsControllerSolutionArgs } from "./solutionsControllerSolution";
export type SolutionsControllerSolution = import("./solutionsControllerSolution").SolutionsControllerSolution;
export const SolutionsControllerSolution: typeof import("./solutionsControllerSolution").SolutionsControllerSolution = null as any;
utilities.lazyLoad(exports, ["SolutionsControllerSolution"], () => require("./solutionsControllerSolution"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:migrate/v20230101:MigrateProjectsControllerMigrateProject":
                return new MigrateProjectsControllerMigrateProject(name, <any>undefined, { urn })
            case "azure-native:migrate/v20230101:PrivateEndpointConnectionControllerPrivateEndpointConnection":
                return new PrivateEndpointConnectionControllerPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:migrate/v20230101:PrivateEndpointConnectionProxyController":
                return new PrivateEndpointConnectionProxyController(name, <any>undefined, { urn })
            case "azure-native:migrate/v20230101:SolutionsControllerSolution":
                return new SolutionsControllerSolution(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "migrate/v20230101", _module)