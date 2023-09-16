import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetIotSecuritySolutionArgs, GetIotSecuritySolutionResult, GetIotSecuritySolutionOutputArgs } from "./getIotSecuritySolution";
export const getIotSecuritySolution: typeof import("./getIotSecuritySolution").getIotSecuritySolution = null as any;
export const getIotSecuritySolutionOutput: typeof import("./getIotSecuritySolution").getIotSecuritySolutionOutput = null as any;
utilities.lazyLoad(exports, ["getIotSecuritySolution","getIotSecuritySolutionOutput"], () => require("./getIotSecuritySolution"));

export { GetSecurityContactArgs, GetSecurityContactResult, GetSecurityContactOutputArgs } from "./getSecurityContact";
export const getSecurityContact: typeof import("./getSecurityContact").getSecurityContact = null as any;
export const getSecurityContactOutput: typeof import("./getSecurityContact").getSecurityContactOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityContact","getSecurityContactOutput"], () => require("./getSecurityContact"));

export { GetWorkspaceSettingArgs, GetWorkspaceSettingResult, GetWorkspaceSettingOutputArgs } from "./getWorkspaceSetting";
export const getWorkspaceSetting: typeof import("./getWorkspaceSetting").getWorkspaceSetting = null as any;
export const getWorkspaceSettingOutput: typeof import("./getWorkspaceSetting").getWorkspaceSettingOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceSetting","getWorkspaceSettingOutput"], () => require("./getWorkspaceSetting"));

export { IotSecuritySolutionArgs } from "./iotSecuritySolution";
export type IotSecuritySolution = import("./iotSecuritySolution").IotSecuritySolution;
export const IotSecuritySolution: typeof import("./iotSecuritySolution").IotSecuritySolution = null as any;
utilities.lazyLoad(exports, ["IotSecuritySolution"], () => require("./iotSecuritySolution"));

export { SecurityContactArgs } from "./securityContact";
export type SecurityContact = import("./securityContact").SecurityContact;
export const SecurityContact: typeof import("./securityContact").SecurityContact = null as any;
utilities.lazyLoad(exports, ["SecurityContact"], () => require("./securityContact"));

export { WorkspaceSettingArgs } from "./workspaceSetting";
export type WorkspaceSetting = import("./workspaceSetting").WorkspaceSetting;
export const WorkspaceSetting: typeof import("./workspaceSetting").WorkspaceSetting = null as any;
utilities.lazyLoad(exports, ["WorkspaceSetting"], () => require("./workspaceSetting"));


// Export enums:
export * from "../types/enums/v20170801preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20170801preview:IotSecuritySolution":
                return new IotSecuritySolution(name, <any>undefined, { urn })
            case "azure-native:security/v20170801preview:SecurityContact":
                return new SecurityContact(name, <any>undefined, { urn })
            case "azure-native:security/v20170801preview:WorkspaceSetting":
                return new WorkspaceSetting(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20170801preview", _module)
