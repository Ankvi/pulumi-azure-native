import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMigrateAgentArgs, GetMigrateAgentResult, GetMigrateAgentOutputArgs } from "./getMigrateAgent";
export const getMigrateAgent: typeof import("./getMigrateAgent").getMigrateAgent = null as any;
export const getMigrateAgentOutput: typeof import("./getMigrateAgent").getMigrateAgentOutput = null as any;
utilities.lazyLoad(exports, ["getMigrateAgent","getMigrateAgentOutput"], () => require("./getMigrateAgent"));

export { GetModernizeProjectArgs, GetModernizeProjectResult, GetModernizeProjectOutputArgs } from "./getModernizeProject";
export const getModernizeProject: typeof import("./getModernizeProject").getModernizeProject = null as any;
export const getModernizeProjectOutput: typeof import("./getModernizeProject").getModernizeProjectOutput = null as any;
utilities.lazyLoad(exports, ["getModernizeProject","getModernizeProjectOutput"], () => require("./getModernizeProject"));

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

export { MigrateAgentArgs } from "./migrateAgent";
export type MigrateAgent = import("./migrateAgent").MigrateAgent;
export const MigrateAgent: typeof import("./migrateAgent").MigrateAgent = null as any;
utilities.lazyLoad(exports, ["MigrateAgent"], () => require("./migrateAgent"));

export { ModernizeProjectArgs } from "./modernizeProject";
export type ModernizeProject = import("./modernizeProject").ModernizeProject;
export const ModernizeProject: typeof import("./modernizeProject").ModernizeProject = null as any;
utilities.lazyLoad(exports, ["ModernizeProject"], () => require("./modernizeProject"));

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

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:migrate/v20220501preview:MigrateAgent":
                return new MigrateAgent(name, <any>undefined, { urn })
            case "azure-native:migrate/v20220501preview:ModernizeProject":
                return new ModernizeProject(name, <any>undefined, { urn })
            case "azure-native:migrate/v20220501preview:WorkloadDeployment":
                return new WorkloadDeployment(name, <any>undefined, { urn })
            case "azure-native:migrate/v20220501preview:WorkloadInstance":
                return new WorkloadInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "migrate/v20220501preview", _module)