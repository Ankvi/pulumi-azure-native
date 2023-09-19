import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface ContentHashArgs {
        /**
         * Gets or sets the algorithm.
         */
        algorithm?: pulumi.Input<string>;
        /**
         * Gets or sets the value.
         */
        value?: pulumi.Input<string>;
    }

    export interface ContentLinkArgs {
        /**
         * Gets or sets the content hash.
         */
        contentHash?: pulumi.Input<ContentHashArgs>;
        /**
         * Gets or sets the content size.
         */
        contentSize?: pulumi.Input<number>;
        /**
         * Gets or sets the content version.
         */
        contentVersion?: pulumi.Input<string>;
        /**
         * Gets or sets the metadata.
         */
        metadata?: any;
        /**
         * Gets or sets the content link URI.
         */
        uri?: pulumi.Input<string>;
    }

    export interface ResourceReferenceArgs {
        /**
         * Gets or sets the resource id.
         */
        id?: pulumi.Input<string>;
    }

    export interface SkuArgs {
        /**
         * Gets or sets the name.
         */
        name?: pulumi.Input<enums.SkuName>;
        /**
         * Gets or sets the reference to plan.
         */
        plan?: pulumi.Input<ResourceReferenceArgs>;
    }

    export interface WorkflowParameterArgs {
        /**
         * Gets or sets the metadata.
         */
        metadata?: any;
        /**
         * Gets or sets the type.
         */
        type?: pulumi.Input<enums.ParameterType>;
        /**
         * Gets or sets the value.
         */
        value?: any;
    }
