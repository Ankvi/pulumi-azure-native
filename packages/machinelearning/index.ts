import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { ListWorkspaceKeysArgs, ListWorkspaceKeysResult, ListWorkspaceKeysOutputArgs } from "./listWorkspaceKeys";
export const listWorkspaceKeys: typeof import("./listWorkspaceKeys").listWorkspaceKeys = null as any;
export const listWorkspaceKeysOutput: typeof import("./listWorkspaceKeys").listWorkspaceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceKeys","listWorkspaceKeysOutput"], () => require("./listWorkspaceKeys"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearning:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearning", _module)