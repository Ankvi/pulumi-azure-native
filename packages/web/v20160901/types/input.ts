import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes the capabilities/features allowed for a specific SKU.
     */
    export interface CapabilityArgs {
        /**
         * Name of the SKU capability.
         */
        name?: pulumi.Input<string>;
        /**
         * Reason of the SKU capability.
         */
        reason?: pulumi.Input<string>;
        /**
         * Value of the SKU capability.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Specification for an App Service Environment to use for this resource.
     */
    export interface HostingEnvironmentProfileArgs {
        /**
         * Resource ID of the App Service Environment.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Description of the App Service plan scale options.
     */
    export interface SkuCapacityArgs {
        /**
         * Default number of workers for this App Service plan SKU.
         */
        default?: pulumi.Input<number>;
        /**
         * Maximum number of workers for this App Service plan SKU.
         */
        maximum?: pulumi.Input<number>;
        /**
         * Minimum number of workers for this App Service plan SKU.
         */
        minimum?: pulumi.Input<number>;
        /**
         * Available scale configurations for an App Service plan.
         */
        scaleType?: pulumi.Input<string>;
    }

    /**
     * Description of a SKU for a scalable resource.
     */
    export interface SkuDescriptionArgs {
        /**
         * Capabilities of the SKU, e.g., is traffic manager enabled?
         */
        capabilities?: pulumi.Input<pulumi.Input<CapabilityArgs>[]>;
        /**
         * Current number of instances assigned to the resource.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Family code of the resource SKU.
         */
        family?: pulumi.Input<string>;
        /**
         * Locations of the SKU.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Name of the resource SKU.
         */
        name?: pulumi.Input<string>;
        /**
         * Size specifier of the resource SKU.
         */
        size?: pulumi.Input<string>;
        /**
         * Min, max, and default scale values of the SKU.
         */
        skuCapacity?: pulumi.Input<SkuCapacityArgs>;
        /**
         * Service tier of the resource SKU.
         */
        tier?: pulumi.Input<string>;
    }
