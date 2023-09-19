import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties of a storage account associated with this resource.
     */
    export interface StorageAccountArgs {
        /**
         * The id of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts (isPrimary false).
         */
        id: pulumi.Input<string>;
        /**
         * Is this storage account resource the primary storage account for the Media Service resource. Blob only storage must set this to false.
         */
        isPrimary: pulumi.Input<boolean>;
    }
