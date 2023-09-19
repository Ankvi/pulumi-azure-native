import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Database server metadata.
     */
    export interface DBServerMetadataResponse {
        location?: string;
        /**
         * Sku information related properties of a server.
         */
        sku?: ServerSkuResponse;
        storageMB?: number;
        version?: string;
    }

    /**
     * Migration status.
     */
    export interface MigrationStatusResponse {
        /**
         * Migration sub state details.
         */
        currentSubStateDetails: MigrationSubStateDetailsResponse;
        error: string;
        /**
         * Migration state.
         */
        state: string;
    }

    /**
     * Migration sub state details.
     */
    export interface MigrationSubStateDetailsResponse {
        /**
         * Migration sub state.
         */
        currentSubState: string;
    }

    /**
     * Sku information related properties of a server.
     */
    export interface ServerSkuResponse {
        /**
         * The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
         */
        name: string;
        /**
         * The tier of the particular SKU, e.g. Burstable.
         */
        tier: string;
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
