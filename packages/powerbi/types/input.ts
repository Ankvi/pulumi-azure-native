import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AzureSkuArgs {
    /**
     * SKU name
     */
    name: pulumi.Input<string | enums.AzureSkuName>;
    /**
     * SKU tier
     */
    tier: pulumi.Input<string | enums.AzureSkuTier>;
}

/**
 * ConnectionState information.
 */
export interface ConnectionStateArgs {
    /**
     * Actions required (if any).
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * Description of the connection state.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Status of the connection.
     */
    status?: pulumi.Input<string | enums.PersistedConnectionStatus | undefined>;
}

export interface PrivateEndpointArgs {
    /**
     * Specifies the id of private endpoint.
     */
    id?: pulumi.Input<string | undefined>;
}

export interface PrivateEndpointConnectionArgs {
    /**
     * Specifies the private endpoint.
     */
    privateEndpoint?: pulumi.Input<PrivateEndpointArgs | undefined>;
    /**
     * Specifies the connection state.
     */
    privateLinkServiceConnectionState?: pulumi.Input<ConnectionStateArgs | undefined>;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    provisioningState?: pulumi.Input<string | enums.ResourceProvisioningState | undefined>;
}
