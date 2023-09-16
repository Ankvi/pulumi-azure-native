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

export { MigrateProjectsControllerMigrateProjectArgs } from "./migrateProjectsControllerMigrateProject";
export type MigrateProjectsControllerMigrateProject = import("./migrateProjectsControllerMigrateProject").MigrateProjectsControllerMigrateProject;
export const MigrateProjectsControllerMigrateProject: typeof import("./migrateProjectsControllerMigrateProject").MigrateProjectsControllerMigrateProject = null as any;
utilities.lazyLoad(exports, ["MigrateProjectsControllerMigrateProject"], () => require("./migrateProjectsControllerMigrateProject"));

export { PrivateEndpointConnectionControllerPrivateEndpointConnectionArgs } from "./privateEndpointConnectionControllerPrivateEndpointConnection";
export type PrivateEndpointConnectionControllerPrivateEndpointConnection = import("./privateEndpointConnectionControllerPrivateEndpointConnection").PrivateEndpointConnectionControllerPrivateEndpointConnection;
export const PrivateEndpointConnectionControllerPrivateEndpointConnection: typeof import("./privateEndpointConnectionControllerPrivateEndpointConnection").PrivateEndpointConnectionControllerPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnectionControllerPrivateEndpointConnection"], () => require("./privateEndpointConnectionControllerPrivateEndpointConnection"));


// Export enums:
export * from "../types/enums/v20200501";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:migrate/v20200501:MigrateProjectsControllerMigrateProject":
                return new MigrateProjectsControllerMigrateProject(name, <any>undefined, { urn })
            case "azure-native:migrate/v20200501:PrivateEndpointConnectionControllerPrivateEndpointConnection":
                return new PrivateEndpointConnectionControllerPrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "migrate/v20200501", _module)
