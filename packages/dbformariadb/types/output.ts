import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface PrivateEndpointPropertyResponse {
    /**
     * Resource id of the private endpoint.
     */
    id?: string;
}

export interface PrivateLinkServiceConnectionStatePropertyResponse {
    /**
     * The actions required for private link service connection.
     */
    actionsRequired: string;
    /**
     * The private link service connection description.
     */
    description: string;
    /**
     * The private link service connection status.
     */
    status: string;
}

/**
 * Properties of a private endpoint connection.
 */
export interface ServerPrivateEndpointConnectionPropertiesResponse {
    /**
     * Private endpoint which the connection belongs to.
     */
    privateEndpoint?: PrivateEndpointPropertyResponse;
    /**
     * Connection state of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: ServerPrivateLinkServiceConnectionStatePropertyResponse;
    /**
     * State of the private endpoint connection.
     */
    provisioningState: string;
}

/**
 * A private endpoint connection under a server
 */
export interface ServerPrivateEndpointConnectionResponse {
    /**
     * Resource Id of the private endpoint connection.
     */
    id: string;
    /**
     * Private endpoint connection properties
     */
    properties: ServerPrivateEndpointConnectionPropertiesResponse;
}

export interface ServerPrivateLinkServiceConnectionStatePropertyResponse {
    /**
     * The actions required for private link service connection.
     */
    actionsRequired: string;
    /**
     * The private link service connection description.
     */
    description: string;
    /**
     * The private link service connection status.
     */
    status: string;
}

/**
 * Billing information related properties of a server.
 */
export interface SkuResponse {
    /**
     * The scale up/out capacity, representing server's compute units.
     */
    capacity?: number;
    /**
     * The family of hardware.
     */
    family?: string;
    /**
     * The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8.
     */
    name: string;
    /**
     * The size code, to be interpreted by resource as appropriate.
     */
    size?: string;
    /**
     * The tier of the particular SKU, e.g. Basic.
     */
    tier?: string;
}

/**
 * Storage Profile properties of a server
 */
export interface StorageProfileResponse {
    /**
     * Backup retention days for the server.
     */
    backupRetentionDays?: number;
    /**
     * Enable Geo-redundant or not for server backup.
     */
    geoRedundantBackup?: string;
    /**
     * Enable Storage Auto Grow.
     */
    storageAutogrow?: string;
    /**
     * Max storage allowed for a server.
     */
    storageMB?: number;
}
