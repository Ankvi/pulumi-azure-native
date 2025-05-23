import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FederatedIdentityCredentialArgs } from "./federatedIdentityCredential";
export type FederatedIdentityCredential = import("./federatedIdentityCredential").FederatedIdentityCredential;
export const FederatedIdentityCredential: typeof import("./federatedIdentityCredential").FederatedIdentityCredential = null as any;
utilities.lazyLoad(exports, ["FederatedIdentityCredential"], () => require("./federatedIdentityCredential"));

export { GetFederatedIdentityCredentialArgs, GetFederatedIdentityCredentialResult, GetFederatedIdentityCredentialOutputArgs } from "./getFederatedIdentityCredential";
export const getFederatedIdentityCredential: typeof import("./getFederatedIdentityCredential").getFederatedIdentityCredential = null as any;
export const getFederatedIdentityCredentialOutput: typeof import("./getFederatedIdentityCredential").getFederatedIdentityCredentialOutput = null as any;
utilities.lazyLoad(exports, ["getFederatedIdentityCredential","getFederatedIdentityCredentialOutput"], () => require("./getFederatedIdentityCredential"));

export { GetUserAssignedIdentityArgs, GetUserAssignedIdentityResult, GetUserAssignedIdentityOutputArgs } from "./getUserAssignedIdentity";
export const getUserAssignedIdentity: typeof import("./getUserAssignedIdentity").getUserAssignedIdentity = null as any;
export const getUserAssignedIdentityOutput: typeof import("./getUserAssignedIdentity").getUserAssignedIdentityOutput = null as any;
utilities.lazyLoad(exports, ["getUserAssignedIdentity","getUserAssignedIdentityOutput"], () => require("./getUserAssignedIdentity"));

export { UserAssignedIdentityArgs } from "./userAssignedIdentity";
export type UserAssignedIdentity = import("./userAssignedIdentity").UserAssignedIdentity;
export const UserAssignedIdentity: typeof import("./userAssignedIdentity").UserAssignedIdentity = null as any;
utilities.lazyLoad(exports, ["UserAssignedIdentity"], () => require("./userAssignedIdentity"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:managedidentity:FederatedIdentityCredential":
                return new FederatedIdentityCredential(name, <any>undefined, { urn })
            case "azure-native:managedidentity:UserAssignedIdentity":
                return new UserAssignedIdentity(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "managedidentity", _module)