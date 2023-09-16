import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLabelByWorkspaceArgs, GetLabelByWorkspaceResult, GetLabelByWorkspaceOutputArgs } from "./getLabelByWorkspace";
export const getLabelByWorkspace: typeof import("./getLabelByWorkspace").getLabelByWorkspace = null as any;
export const getLabelByWorkspaceOutput: typeof import("./getLabelByWorkspace").getLabelByWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getLabelByWorkspace","getLabelByWorkspaceOutput"], () => require("./getLabelByWorkspace"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { LabelByWorkspaceArgs } from "./labelByWorkspace";
export type LabelByWorkspace = import("./labelByWorkspace").LabelByWorkspace;
export const LabelByWorkspace: typeof import("./labelByWorkspace").LabelByWorkspace = null as any;
utilities.lazyLoad(exports, ["LabelByWorkspace"], () => require("./labelByWorkspace"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));


// Export sub-modules:
import * as v20230401preview from "./v20230401preview";

export {
    v20230401preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:easm:LabelByWorkspace":
                return new LabelByWorkspace(name, <any>undefined, { urn })
            case "azure-native:easm:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "easm", _module)
