import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetOnlineExperimentationWorkspaceArgs, GetOnlineExperimentationWorkspaceResult, GetOnlineExperimentationWorkspaceOutputArgs } from "./getOnlineExperimentationWorkspace";
export const getOnlineExperimentationWorkspace: typeof import("./getOnlineExperimentationWorkspace").getOnlineExperimentationWorkspace = null as any;
export const getOnlineExperimentationWorkspaceOutput: typeof import("./getOnlineExperimentationWorkspace").getOnlineExperimentationWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getOnlineExperimentationWorkspace","getOnlineExperimentationWorkspaceOutput"], () => require("./getOnlineExperimentationWorkspace"));

export { OnlineExperimentationWorkspaceArgs } from "./onlineExperimentationWorkspace";
export type OnlineExperimentationWorkspace = import("./onlineExperimentationWorkspace").OnlineExperimentationWorkspace;
export const OnlineExperimentationWorkspace: typeof import("./onlineExperimentationWorkspace").OnlineExperimentationWorkspace = null as any;
utilities.lazyLoad(exports, ["OnlineExperimentationWorkspace"], () => require("./onlineExperimentationWorkspace"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:onlineexperimentation:OnlineExperimentationWorkspace":
                return new OnlineExperimentationWorkspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "onlineexperimentation", _module)