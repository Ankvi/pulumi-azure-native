import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLabelingJobArgs, GetLabelingJobResult, GetLabelingJobOutputArgs } from "./getLabelingJob";
export const getLabelingJob: typeof import("./getLabelingJob").getLabelingJob = null as any;
export const getLabelingJobOutput: typeof import("./getLabelingJob").getLabelingJobOutput = null as any;
utilities.lazyLoad(exports, ["getLabelingJob","getLabelingJobOutput"], () => require("./getLabelingJob"));

export { GetLinkedServiceArgs, GetLinkedServiceResult, GetLinkedServiceOutputArgs } from "./getLinkedService";
export const getLinkedService: typeof import("./getLinkedService").getLinkedService = null as any;
export const getLinkedServiceOutput: typeof import("./getLinkedService").getLinkedServiceOutput = null as any;
utilities.lazyLoad(exports, ["getLinkedService","getLinkedServiceOutput"], () => require("./getLinkedService"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { LabelingJobArgs } from "./labelingJob";
export type LabelingJob = import("./labelingJob").LabelingJob;
export const LabelingJob: typeof import("./labelingJob").LabelingJob = null as any;
utilities.lazyLoad(exports, ["LabelingJob"], () => require("./labelingJob"));

export { LinkedServiceArgs } from "./linkedService";
export type LinkedService = import("./linkedService").LinkedService;
export const LinkedService: typeof import("./linkedService").LinkedService = null as any;
utilities.lazyLoad(exports, ["LinkedService"], () => require("./linkedService"));

export { ListNotebookKeysArgs, ListNotebookKeysResult, ListNotebookKeysOutputArgs } from "./listNotebookKeys";
export const listNotebookKeys: typeof import("./listNotebookKeys").listNotebookKeys = null as any;
export const listNotebookKeysOutput: typeof import("./listNotebookKeys").listNotebookKeysOutput = null as any;
utilities.lazyLoad(exports, ["listNotebookKeys","listNotebookKeysOutput"], () => require("./listNotebookKeys"));

export { ListWorkspaceKeysArgs, ListWorkspaceKeysResult, ListWorkspaceKeysOutputArgs } from "./listWorkspaceKeys";
export const listWorkspaceKeys: typeof import("./listWorkspaceKeys").listWorkspaceKeys = null as any;
export const listWorkspaceKeysOutput: typeof import("./listWorkspaceKeys").listWorkspaceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceKeys","listWorkspaceKeysOutput"], () => require("./listWorkspaceKeys"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearningservices/v20200901preview:LabelingJob":
                return new LabelingJob(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20200901preview:LinkedService":
                return new LinkedService(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20200901preview:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearningservices/v20200901preview", _module)
