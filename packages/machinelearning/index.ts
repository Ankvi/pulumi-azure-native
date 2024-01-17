import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CommitmentPlanArgs } from "./commitmentPlan";
export type CommitmentPlan = import("./commitmentPlan").CommitmentPlan;
export const CommitmentPlan: typeof import("./commitmentPlan").CommitmentPlan = null as any;
utilities.lazyLoad(exports, ["CommitmentPlan"], () => require("./commitmentPlan"));

export { GetCommitmentPlanArgs, GetCommitmentPlanResult, GetCommitmentPlanOutputArgs } from "./getCommitmentPlan";
export const getCommitmentPlan: typeof import("./getCommitmentPlan").getCommitmentPlan = null as any;
export const getCommitmentPlanOutput: typeof import("./getCommitmentPlan").getCommitmentPlanOutput = null as any;
utilities.lazyLoad(exports, ["getCommitmentPlan","getCommitmentPlanOutput"], () => require("./getCommitmentPlan"));

export { GetWebServiceArgs, GetWebServiceResult, GetWebServiceOutputArgs } from "./getWebService";
export const getWebService: typeof import("./getWebService").getWebService = null as any;
export const getWebServiceOutput: typeof import("./getWebService").getWebServiceOutput = null as any;
utilities.lazyLoad(exports, ["getWebService","getWebServiceOutput"], () => require("./getWebService"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { ListWorkspaceKeysArgs, ListWorkspaceKeysResult, ListWorkspaceKeysOutputArgs } from "./listWorkspaceKeys";
export const listWorkspaceKeys: typeof import("./listWorkspaceKeys").listWorkspaceKeys = null as any;
export const listWorkspaceKeysOutput: typeof import("./listWorkspaceKeys").listWorkspaceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceKeys","listWorkspaceKeysOutput"], () => require("./listWorkspaceKeys"));

export { WebServiceArgs } from "./webService";
export type WebService = import("./webService").WebService;
export const WebService: typeof import("./webService").WebService = null as any;
utilities.lazyLoad(exports, ["WebService"], () => require("./webService"));

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
            case "azure-native:machinelearning:CommitmentPlan":
                return new CommitmentPlan(name, <any>undefined, { urn })
            case "azure-native:machinelearning:WebService":
                return new WebService(name, <any>undefined, { urn })
            case "azure-native:machinelearning:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearning", _module)