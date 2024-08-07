import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AgentPropertiesResponseErrorDetails {
    /**
     * Error code reported by Agent
     */
    code?: string;
    /**
     * Expanded description of reported error code
     */
    message?: string;
}

export interface AzureStorageBlobContainerEndpointPropertiesResponse {
    /**
     * The name of the Storage blob container that is the target destination.
     */
    blobContainerName: string;
    /**
     * A description for the Endpoint.
     */
    description?: string;
    /**
     * The Endpoint resource type.
     * Expected value is 'AzureStorageBlobContainer'.
     */
    endpointType: "AzureStorageBlobContainer";
    /**
     * The provisioning state of this resource.
     */
    provisioningState: string;
    /**
     * The Azure Resource ID of the storage account that is the target destination.
     */
    storageAccountResourceId: string;
}

export interface NfsMountEndpointPropertiesResponse {
    /**
     * A description for the Endpoint.
     */
    description?: string;
    /**
     * The Endpoint resource type.
     * Expected value is 'NfsMount'.
     */
    endpointType: "NfsMount";
    /**
     * The directory being exported from the server.
     */
    export: string;
    /**
     * The host name or IP address of the server exporting the file system.
     */
    host: string;
    /**
     * The NFS protocol version.
     */
    nfsVersion?: string;
    /**
     * The provisioning state of this resource.
     */
    provisioningState: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}



