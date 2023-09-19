import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Image reference information
     */
    export interface ImageReferenceResponse {
        /**
         * The actual version of the image after use. When id references a gallery image latest version, this will indicate the actual version in use.
         */
        exactVersion: string;
        /**
         * Image ID, or Image version ID. When Image ID is provided, its latest version will be used.
         */
        id?: string;
        /**
         * The image offer.
         */
        offer?: string;
        /**
         * The image publisher.
         */
        publisher?: string;
        /**
         * The image sku.
         */
        sku?: string;
    }

    /**
     * Image validation error details
     */
    export interface ImageValidationErrorDetailsResponse {
        /**
         * An identifier for the error.
         */
        code?: string;
        /**
         * A message describing the error.
         */
        message?: string;
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuResponse {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: number;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: string;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: string;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: string;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: string;
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
