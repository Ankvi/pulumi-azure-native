import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Credentials to access the event streaming service attached to the purview account.
 */
export interface CredentialsArgs {
    /**
     * Identity identifier for UserAssign type.
     */
    identityId?: pulumi.Input<string>;
    /**
     * Identity Type.
     */
    type?: pulumi.Input<string | enums.CredentialsType>;
}

/**
 * The Managed Identity of the resource
 */
export interface IdentityArgs {
    /**
     * Identity Type
     */
    type?: pulumi.Input<string | enums.Type>;
    /**
     * User Assigned Identities
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * A private endpoint class.
 */
export interface PrivateEndpointArgs {
    /**
     * The private endpoint identifier.
     */
    id?: pulumi.Input<string>;
}

/**
 * The private link service connection state.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * The required actions.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The description.
     */
    description?: pulumi.Input<string>;
    /**
     * The status.
     */
    status?: pulumi.Input<string | enums.Status>;
}




