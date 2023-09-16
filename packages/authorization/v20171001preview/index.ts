import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRoleAssignmentArgs, GetRoleAssignmentResult, GetRoleAssignmentOutputArgs } from "./getRoleAssignment";
export const getRoleAssignment: typeof import("./getRoleAssignment").getRoleAssignment = null as any;
export const getRoleAssignmentOutput: typeof import("./getRoleAssignment").getRoleAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getRoleAssignment","getRoleAssignmentOutput"], () => require("./getRoleAssignment"));

export { RoleAssignmentArgs } from "./roleAssignment";
export type RoleAssignment = import("./roleAssignment").RoleAssignment;
export const RoleAssignment: typeof import("./roleAssignment").RoleAssignment = null as any;
utilities.lazyLoad(exports, ["RoleAssignment"], () => require("./roleAssignment"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:authorization/v20171001preview:RoleAssignment":
                return new RoleAssignment(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "authorization/v20171001preview", _module)
