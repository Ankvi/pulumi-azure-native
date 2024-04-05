import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRoleDefinitionArgs, GetRoleDefinitionResult, GetRoleDefinitionOutputArgs } from "./getRoleDefinition";
export const getRoleDefinition: typeof import("./getRoleDefinition").getRoleDefinition = null as any;
export const getRoleDefinitionOutput: typeof import("./getRoleDefinition").getRoleDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getRoleDefinition","getRoleDefinitionOutput"], () => require("./getRoleDefinition"));

export { RoleDefinitionArgs } from "./roleDefinition";
export type RoleDefinition = import("./roleDefinition").RoleDefinition;
export const RoleDefinition: typeof import("./roleDefinition").RoleDefinition = null as any;
utilities.lazyLoad(exports, ["RoleDefinition"], () => require("./roleDefinition"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:authorization/v20220501preview:RoleDefinition":
                return new RoleDefinition(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "authorization/v20220501preview", _module)