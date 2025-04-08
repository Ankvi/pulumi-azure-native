import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Gets or sets the Sku.
 */
export interface AccountSkuArgs {
    /**
     * Gets or sets the sku capacity.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Gets or sets the sku name.
     */
    name?: pulumi.Input<string | enums.AccountSkuName>;
}

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
    type?: pulumi.Input<string | enums.KafkaConfigurationIdentityType>;
}

/**
 * The Managed Identity of the resource
 */
export interface IdentityArgs {
    /**
     * Identity Type
     */
    type?: pulumi.Input<string | enums.ManagedIdentityType>;
    /**
     * User Assigned Identities
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Ingestion Storage Account Info
 */
export interface IngestionStorageArgs {
    /**
     * Gets or sets the public network access setting
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
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
    status?: pulumi.Input<string | enums.PrivateEndpointConnectionStatus>;
}
