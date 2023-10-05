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

    /**
     * The Azure Key Vault secret URIs which store the credentials.
     */
    export interface AzureKeyVaultSmbCredentialsResponse {
        /**
         * The Azure Key Vault secret URI which stores the password. Use empty string to clean-up existing value.
         */
        passwordUri?: string;
        /**
         * The Credentials type.
         * Expected value is 'AzureKeyVaultSmb'.
         */
        type: "AzureKeyVaultSmb";
        /**
         * The Azure Key Vault secret URI which stores the username. Use empty string to clean-up existing value.
         */
        usernameUri?: string;
    }

    /**
     * The properties of Azure Storage blob container endpoint.
     */
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

    /**
     * The properties of Azure Storage SMB file share endpoint.
     */
    export interface AzureStorageSmbFileShareEndpointPropertiesResponse {
        /**
         * A description for the Endpoint.
         */
        description?: string;
        /**
         * The Endpoint resource type.
         * Expected value is 'AzureStorageSmbFileShare'.
         */
        endpointType: "AzureStorageSmbFileShare";
        /**
         * The name of the Azure Storage file share.
         */
        fileShareName: string;
        /**
         * The provisioning state of this resource.
         */
        provisioningState: string;
        /**
         * The Azure Resource ID of the storage account.
         */
        storageAccountResourceId: string;
    }

    /**
     * The properties of NFS share endpoint.
     */
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
     * The properties of SMB share endpoint.
     */
    export interface SmbMountEndpointPropertiesResponse {
        /**
         * The Azure Key Vault secret URIs which store the required credentials to access the SMB share.
         */
        credentials?: AzureKeyVaultSmbCredentialsResponse;
        /**
         * A description for the Endpoint.
         */
        description?: string;
        /**
         * The Endpoint resource type.
         * Expected value is 'SmbMount'.
         */
        endpointType: "SmbMount";
        /**
         * The host name or IP address of the server exporting the file system.
         */
        host: string;
        /**
         * The provisioning state of this resource.
         */
        provisioningState: string;
        /**
         * The name of the SMB share being exported from the server.
         */
        shareName: string;
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
