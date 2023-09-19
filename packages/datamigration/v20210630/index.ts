import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FileArgs } from "./file";
export type File = import("./file").File;
export const File: typeof import("./file").File = null as any;
utilities.lazyLoad(exports, ["File"], () => require("./file"));

export { GetFileArgs, GetFileResult, GetFileOutputArgs } from "./getFile";
export const getFile: typeof import("./getFile").getFile = null as any;
export const getFileOutput: typeof import("./getFile").getFileOutput = null as any;
utilities.lazyLoad(exports, ["getFile","getFileOutput"], () => require("./getFile"));

export { GetProjectArgs, GetProjectResult, GetProjectOutputArgs } from "./getProject";
export const getProject: typeof import("./getProject").getProject = null as any;
export const getProjectOutput: typeof import("./getProject").getProjectOutput = null as any;
utilities.lazyLoad(exports, ["getProject","getProjectOutput"], () => require("./getProject"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetServiceTaskArgs, GetServiceTaskResult, GetServiceTaskOutputArgs } from "./getServiceTask";
export const getServiceTask: typeof import("./getServiceTask").getServiceTask = null as any;
export const getServiceTaskOutput: typeof import("./getServiceTask").getServiceTaskOutput = null as any;
utilities.lazyLoad(exports, ["getServiceTask","getServiceTaskOutput"], () => require("./getServiceTask"));

export { GetTaskArgs, GetTaskResult, GetTaskOutputArgs } from "./getTask";
export const getTask: typeof import("./getTask").getTask = null as any;
export const getTaskOutput: typeof import("./getTask").getTaskOutput = null as any;
utilities.lazyLoad(exports, ["getTask","getTaskOutput"], () => require("./getTask"));

export { ProjectArgs } from "./project";
export type Project = import("./project").Project;
export const Project: typeof import("./project").Project = null as any;
utilities.lazyLoad(exports, ["Project"], () => require("./project"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { ServiceTaskArgs } from "./serviceTask";
export type ServiceTask = import("./serviceTask").ServiceTask;
export const ServiceTask: typeof import("./serviceTask").ServiceTask = null as any;
utilities.lazyLoad(exports, ["ServiceTask"], () => require("./serviceTask"));

export { TaskArgs } from "./task";
export type Task = import("./task").Task;
export const Task: typeof import("./task").Task = null as any;
utilities.lazyLoad(exports, ["Task"], () => require("./task"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:datamigration/v20210630:File":
                return new File(name, <any>undefined, { urn })
            case "azure-native:datamigration/v20210630:Project":
                return new Project(name, <any>undefined, { urn })
            case "azure-native:datamigration/v20210630:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:datamigration/v20210630:ServiceTask":
                return new ServiceTask(name, <any>undefined, { urn })
            case "azure-native:datamigration/v20210630:Task":
                return new Task(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "datamigration/v20210630", _module)
