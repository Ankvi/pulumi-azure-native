import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties for a Media Services REST API endpoint.
     */
    export interface ApiEndpointResponse {
        /**
         * The Media Services REST endpoint.
         */
        endpoint?: string;
        /**
         * The version of Media Services REST API.
         */
        majorVersion?: string;
    }

    /**
     * The properties of a storage account associated with this resource.
     */
    export interface StorageAccountResponse {
        /**
         * The id of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts (isPrimary false).
         */
        id: string;
        /**
         * Is this storage account resource the primary storage account for the Media Service resource. Blob only storage must set this to false.
         */
        isPrimary: boolean;
    }
