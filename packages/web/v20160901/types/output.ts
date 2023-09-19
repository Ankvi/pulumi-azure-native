import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes the capabilities/features allowed for a specific SKU.
     */
    export interface CapabilityResponse {
        /**
         * Name of the SKU capability.
         */
        name?: string;
        /**
         * Reason of the SKU capability.
         */
        reason?: string;
        /**
         * Value of the SKU capability.
         */
        value?: string;
    }

    /**
     * Specification for an App Service Environment to use for this resource.
     */
    export interface HostingEnvironmentProfileResponse {
        /**
         * Resource ID of the App Service Environment.
         */
        id?: string;
        /**
         * Name of the App Service Environment.
         */
        name: string;
        /**
         * Resource type of the App Service Environment.
         */
        type: string;
    }

    /**
     * Description of the App Service plan scale options.
     */
    export interface SkuCapacityResponse {
        /**
         * Default number of workers for this App Service plan SKU.
         */
        default?: number;
        /**
         * Maximum number of workers for this App Service plan SKU.
         */
        maximum?: number;
        /**
         * Minimum number of workers for this App Service plan SKU.
         */
        minimum?: number;
        /**
         * Available scale configurations for an App Service plan.
         */
        scaleType?: string;
    }

    /**
     * Description of a SKU for a scalable resource.
     */
    export interface SkuDescriptionResponse {
        /**
         * Capabilities of the SKU, e.g., is traffic manager enabled?
         */
        capabilities?: CapabilityResponse[];
        /**
         * Current number of instances assigned to the resource.
         */
        capacity?: number;
        /**
         * Family code of the resource SKU.
         */
        family?: string;
        /**
         * Locations of the SKU.
         */
        locations?: string[];
        /**
         * Name of the resource SKU.
         */
        name?: string;
        /**
         * Size specifier of the resource SKU.
         */
        size?: string;
        /**
         * Min, max, and default scale values of the SKU.
         */
        skuCapacity?: SkuCapacityResponse;
        /**
         * Service tier of the resource SKU.
         */
        tier?: string;
    }
