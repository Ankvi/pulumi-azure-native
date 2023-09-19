import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines a single ADLS Gen2 storage account path.
     */
    export interface ADLSGen2StorageAccountPathResponse {
        /**
         * Gets or sets the path on the consumer side where the dataset is to be mapped.
         */
        consumerPath?: string;
        /**
         * Gets or sets the container name to share.
         */
        containerName: string;
        /**
         * Gets or sets the path to file/folder within the container.
         */
        providerPath?: string;
    }

    /**
     * Defines a single blob storage account path.
     */
    export interface BlobStorageAccountPathResponse {
        /**
         * Gets or sets the path on the consumer side where the dataset is to be mapped.
         */
        consumerPath?: string;
        /**
         * Gets or sets the container name to share.
         */
        containerName: string;
        /**
         * Gets or sets the path to file/folder within the container.
         */
        providerPath?: string;
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
         * The type of identity that last modified the resource.
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
