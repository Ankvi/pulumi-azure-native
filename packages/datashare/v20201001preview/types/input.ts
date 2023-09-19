import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines a single ADLS Gen2 storage account path.
     */
    export interface ADLSGen2StorageAccountPathArgs {
        /**
         * Gets or sets the path on the consumer side where the dataset is to be mapped.
         */
        consumerPath?: pulumi.Input<string>;
        /**
         * Gets or sets the container name to share.
         */
        containerName: pulumi.Input<string>;
        /**
         * Gets or sets the path to file/folder within the container.
         */
        providerPath?: pulumi.Input<string>;
    }

    /**
     * Defines a single blob storage account path.
     */
    export interface BlobStorageAccountPathArgs {
        /**
         * Gets or sets the path on the consumer side where the dataset is to be mapped.
         */
        consumerPath?: pulumi.Input<string>;
        /**
         * Gets or sets the container name to share.
         */
        containerName: pulumi.Input<string>;
        /**
         * Gets or sets the path to file/folder within the container.
         */
        providerPath?: pulumi.Input<string>;
    }
