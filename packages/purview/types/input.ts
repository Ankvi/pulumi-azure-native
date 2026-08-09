import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Sku
 */
export interface AccountSkuArgs {
    /**
     * Gets or sets the sku capacity.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets the sku name.
     */
    name?: pulumi.Input<string | enums.AccountSkuName | undefined>;
}

/**
 * Credentials to access the event streaming service attached to the purview account.
 */
export interface CredentialsArgs {
    /**
     * Identity identifier for UserAssign type.
     */
    identityId?: pulumi.Input<string | undefined>;
    /**
     * Identity Type.
     */
    type?: pulumi.Input<string | enums.KafkaConfigurationIdentityType | undefined>;
}

/**
 * The Managed Identity of the resource
 */
export interface IdentityArgs {
    /**
     * Identity Type
     */
    type?: pulumi.Input<string | enums.ManagedIdentityType | undefined>;
    /**
     * User Assigned Identities
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Ingestion Storage Account Info
 */
export interface IngestionStorageArgs {
    /**
     * Gets or sets the public network access setting
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess | undefined>;
}

/**
 * A private endpoint class.
 */
export interface PrivateEndpointArgs {
    /**
     * The private endpoint identifier.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * The private link service connection state.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * The required actions.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * The description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The status.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointConnectionStatus | undefined>;
}
