import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The resource reference.
     */
    export interface ResourceReferenceArgs {
        /**
         * The resource id.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * The sku type.
     */
    export interface SkuArgs {
        /**
         * The name.
         */
        name: pulumi.Input<string | enums.SkuName>;
        /**
         * The reference to plan.
         */
        plan?: pulumi.Input<ResourceReferenceArgs>;
    }

    /**
     * The workflow parameters.
     */
    export interface WorkflowParameterArgs {
        /**
         * The description.
         */
        description?: pulumi.Input<string>;
        /**
         * The metadata.
         */
        metadata?: any;
        /**
         * The type.
         */
        type?: pulumi.Input<string | enums.ParameterType>;
        /**
         * The value.
         */
        value?: any;
    }
