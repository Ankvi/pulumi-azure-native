import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetProjectArgs, GetProjectResult, GetProjectOutputArgs } from "./getProject";
export const getProject: typeof import("./getProject").getProject = null as any;
export const getProjectOutput: typeof import("./getProject").getProjectOutput = null as any;
utilities.lazyLoad(exports, ["getProject","getProjectOutput"], () => require("./getProject"));

export { ProjectArgs } from "./project";
export type Project = import("./project").Project;
export const Project: typeof import("./project").Project = null as any;
utilities.lazyLoad(exports, ["Project"], () => require("./project"));


// Export enums:
export * from "../types/enums/v20211030preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:datamigration/v20211030preview:Project":
                return new Project(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "datamigration/v20211030preview", _module)
