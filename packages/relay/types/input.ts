import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * ConnectionState information.
 */
export interface ConnectionStateArgs {
    /**
     * Description of the connection state.
     */
    description?: pulumi.Input<string>;
    /**
     * Status of the connection.
     */
    status?: pulumi.Input<string | enums.PrivateLinkConnectionStatus>;
}

/**
 * PrivateEndpoint information.
 */
export interface PrivateEndpointArgs {
    /**
     * The ARM identifier for Private Endpoint.
     */
    id?: pulumi.Input<string>;
}

/**
 * Properties of the PrivateEndpointConnection.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * The Private Endpoint resource for this Connection.
     */
    privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
    /**
     * Details about the state of the connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<ConnectionStateArgs>;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    provisioningState?: pulumi.Input<string | enums.EndPointProvisioningState>;
}

/**
 * SKU of the namespace.
 */
export interface SkuArgs {
    /**
     * Name of this SKU.
     */
    name: pulumi.Input<string | enums.SkuName>;
    /**
     * The tier of this SKU.
     */
    tier?: pulumi.Input<string | enums.SkuTier>;
}


