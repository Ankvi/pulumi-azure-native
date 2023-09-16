import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace storagemover {
    export interface AzureStorageBlobContainerEndpointPropertiesArgs {
        /**
         * The name of the Storage blob container that is the target destination.
         */
        blobContainerName: pulumi.Input<string>;
        /**
         * A description for the Endpoint.
         */
        description?: pulumi.Input<string>;
        /**
         * The Endpoint resource type.
         * Expected value is 'AzureStorageBlobContainer'.
         */
        endpointType: pulumi.Input<"AzureStorageBlobContainer">;
        /**
         * The Azure Resource ID of the storage account that is the target destination.
         */
        storageAccountResourceId: pulumi.Input<string>;
    }

    export interface NfsMountEndpointPropertiesArgs {
        /**
         * A description for the Endpoint.
         */
        description?: pulumi.Input<string>;
        /**
         * The Endpoint resource type.
         * Expected value is 'NfsMount'.
         */
        endpointType: pulumi.Input<"NfsMount">;
        /**
         * The directory being exported from the server.
         */
        export: pulumi.Input<string>;
        /**
         * The host name or IP address of the server exporting the file system.
         */
        host: pulumi.Input<string>;
        /**
         * The NFS protocol version.
         */
        nfsVersion?: pulumi.Input<string | enums.NfsVersion>;
    }

    export namespace v20230301 {
        export interface AzureStorageBlobContainerEndpointPropertiesArgs {
            /**
             * The name of the Storage blob container that is the target destination.
             */
            blobContainerName: pulumi.Input<string>;
            /**
             * A description for the Endpoint.
             */
            description?: pulumi.Input<string>;
            /**
             * The Endpoint resource type.
             * Expected value is 'AzureStorageBlobContainer'.
             */
            endpointType: pulumi.Input<"AzureStorageBlobContainer">;
            /**
             * The Azure Resource ID of the storage account that is the target destination.
             */
            storageAccountResourceId: pulumi.Input<string>;
        }

        export interface NfsMountEndpointPropertiesArgs {
            /**
             * A description for the Endpoint.
             */
            description?: pulumi.Input<string>;
            /**
             * The Endpoint resource type.
             * Expected value is 'NfsMount'.
             */
            endpointType: pulumi.Input<"NfsMount">;
            /**
             * The directory being exported from the server.
             */
            export: pulumi.Input<string>;
            /**
             * The host name or IP address of the server exporting the file system.
             */
            host: pulumi.Input<string>;
            /**
             * The NFS protocol version.
             */
            nfsVersion?: pulumi.Input<string | enums.v20230301.NfsVersion>;
        }

    }

    export namespace v20230701preview {
        /**
         * The Azure Key Vault secret URIs which store the credentials.
         */
        export interface AzureKeyVaultSmbCredentialsArgs {
            /**
             * The Azure Key Vault secret URI which stores the password. Use empty string to clean-up existing value.
             */
            passwordUri?: pulumi.Input<string>;
            /**
             * The Credentials type.
             * Expected value is 'AzureKeyVaultSmb'.
             */
            type: pulumi.Input<"AzureKeyVaultSmb">;
            /**
             * The Azure Key Vault secret URI which stores the username. Use empty string to clean-up existing value.
             */
            usernameUri?: pulumi.Input<string>;
        }

        /**
         * The properties of Azure Storage blob container endpoint.
         */
        export interface AzureStorageBlobContainerEndpointPropertiesArgs {
            /**
             * The name of the Storage blob container that is the target destination.
             */
            blobContainerName: pulumi.Input<string>;
            /**
             * A description for the Endpoint.
             */
            description?: pulumi.Input<string>;
            /**
             * The Endpoint resource type.
             * Expected value is 'AzureStorageBlobContainer'.
             */
            endpointType: pulumi.Input<"AzureStorageBlobContainer">;
            /**
             * The Azure Resource ID of the storage account that is the target destination.
             */
            storageAccountResourceId: pulumi.Input<string>;
        }

        /**
         * The properties of Azure Storage SMB file share endpoint.
         */
        export interface AzureStorageSmbFileShareEndpointPropertiesArgs {
            /**
             * A description for the Endpoint.
             */
            description?: pulumi.Input<string>;
            /**
             * The Endpoint resource type.
             * Expected value is 'AzureStorageSmbFileShare'.
             */
            endpointType: pulumi.Input<"AzureStorageSmbFileShare">;
            /**
             * The name of the Azure Storage file share.
             */
            fileShareName: pulumi.Input<string>;
            /**
             * The Azure Resource ID of the storage account.
             */
            storageAccountResourceId: pulumi.Input<string>;
        }

        /**
         * The properties of NFS share endpoint.
         */
        export interface NfsMountEndpointPropertiesArgs {
            /**
             * A description for the Endpoint.
             */
            description?: pulumi.Input<string>;
            /**
             * The Endpoint resource type.
             * Expected value is 'NfsMount'.
             */
            endpointType: pulumi.Input<"NfsMount">;
            /**
             * The directory being exported from the server.
             */
            export: pulumi.Input<string>;
            /**
             * The host name or IP address of the server exporting the file system.
             */
            host: pulumi.Input<string>;
            /**
             * The NFS protocol version.
             */
            nfsVersion?: pulumi.Input<string | enums.v20230701preview.NfsVersion>;
        }

        /**
         * The properties of SMB share endpoint.
         */
        export interface SmbMountEndpointPropertiesArgs {
            /**
             * The Azure Key Vault secret URIs which store the required credentials to access the SMB share.
             */
            credentials?: pulumi.Input<v20230701preview.AzureKeyVaultSmbCredentialsArgs>;
            /**
             * A description for the Endpoint.
             */
            description?: pulumi.Input<string>;
            /**
             * The Endpoint resource type.
             * Expected value is 'SmbMount'.
             */
            endpointType: pulumi.Input<"SmbMount">;
            /**
             * The host name or IP address of the server exporting the file system.
             */
            host: pulumi.Input<string>;
            /**
             * The name of the SMB share being exported from the server.
             */
            shareName: pulumi.Input<string>;
        }

    }
}
