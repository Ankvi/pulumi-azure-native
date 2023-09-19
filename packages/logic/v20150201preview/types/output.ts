import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface ContentHashResponse {
        /**
         * Gets or sets the algorithm.
         */
        algorithm?: string;
        /**
         * Gets or sets the value.
         */
        value?: string;
    }

    export interface ContentLinkResponse {
        /**
         * Gets or sets the content hash.
         */
        contentHash?: ContentHashResponse;
        /**
         * Gets or sets the content size.
         */
        contentSize?: number;
        /**
         * Gets or sets the content version.
         */
        contentVersion?: string;
        /**
         * Gets or sets the metadata.
         */
        metadata?: any;
        /**
         * Gets or sets the content link URI.
         */
        uri?: string;
    }

    export interface ResourceReferenceResponse {
        /**
         * Gets or sets the resource id.
         */
        id?: string;
        /**
         * Gets the resource name.
         */
        name: string;
        /**
         * Gets the resource type.
         */
        type: string;
    }

    export interface SkuResponse {
        /**
         * Gets or sets the name.
         */
        name?: string;
        /**
         * Gets or sets the reference to plan.
         */
        plan?: ResourceReferenceResponse;
    }

    export interface WorkflowParameterResponse {
        /**
         * Gets or sets the metadata.
         */
        metadata?: any;
        /**
         * Gets or sets the type.
         */
        type?: string;
        /**
         * Gets or sets the value.
         */
        value?: any;
    }
