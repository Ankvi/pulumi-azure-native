import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetOnlineExperimentWorkspaceArgs, GetOnlineExperimentWorkspaceResult, GetOnlineExperimentWorkspaceOutputArgs } from "./getOnlineExperimentWorkspace";
export const getOnlineExperimentWorkspace: typeof import("./getOnlineExperimentWorkspace").getOnlineExperimentWorkspace = null as any;
export const getOnlineExperimentWorkspaceOutput: typeof import("./getOnlineExperimentWorkspace").getOnlineExperimentWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getOnlineExperimentWorkspace","getOnlineExperimentWorkspaceOutput"], () => require("./getOnlineExperimentWorkspace"));

export { OnlineExperimentWorkspaceArgs } from "./onlineExperimentWorkspace";
export type OnlineExperimentWorkspace = import("./onlineExperimentWorkspace").OnlineExperimentWorkspace;
export const OnlineExperimentWorkspace: typeof import("./onlineExperimentWorkspace").OnlineExperimentWorkspace = null as any;
utilities.lazyLoad(exports, ["OnlineExperimentWorkspace"], () => require("./onlineExperimentWorkspace"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:onlineexperimentation:OnlineExperimentWorkspace":
                return new OnlineExperimentWorkspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "onlineexperimentation", _module)