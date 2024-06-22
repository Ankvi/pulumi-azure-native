import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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



