import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLinkedWorkspaceArgs, GetLinkedWorkspaceResult, GetLinkedWorkspaceOutputArgs } from "./getLinkedWorkspace";
export const getLinkedWorkspace: typeof import("./getLinkedWorkspace").getLinkedWorkspace = null as any;
export const getLinkedWorkspaceOutput: typeof import("./getLinkedWorkspace").getLinkedWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getLinkedWorkspace","getLinkedWorkspaceOutput"], () => require("./getLinkedWorkspace"));

export { LinkedWorkspaceArgs } from "./linkedWorkspace";
export type LinkedWorkspace = import("./linkedWorkspace").LinkedWorkspace;
export const LinkedWorkspace: typeof import("./linkedWorkspace").LinkedWorkspace = null as any;
utilities.lazyLoad(exports, ["LinkedWorkspace"], () => require("./linkedWorkspace"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearningservices/v20200515preview:LinkedWorkspace":
                return new LinkedWorkspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearningservices/v20200515preview", _module)