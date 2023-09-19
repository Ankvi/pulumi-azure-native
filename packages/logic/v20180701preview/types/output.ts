import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The azure resource error info.
     */
    export interface AzureResourceErrorInfoResponse {
        /**
         * The error code.
         */
        code: string;
        /**
         * The error details.
         */
        details?: AzureResourceErrorInfoResponse[];
        /**
         * The error message.
         */
        message: string;
    }

    export interface ExpressionResponse {
        /**
         * The azure resource error info.
         */
        error?: AzureResourceErrorInfoResponse;
        subexpressions?: ExpressionResponse[];
        text?: string;
        value?: any;
    }

    export interface ExpressionRootResponse {
        /**
         * The azure resource error info.
         */
        error?: AzureResourceErrorInfoResponse;
        /**
         * The path.
         */
        path?: string;
        subexpressions?: ExpressionResponse[];
        text?: string;
        value?: any;
    }

    /**
     * The resource reference.
     */
    export interface ResourceReferenceResponse {
        /**
         * The resource id.
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

    /**
     * The sku type.
     */
    export interface SkuResponse {
        /**
         * The name.
         */
        name: string;
        /**
         * The reference to plan.
         */
        plan?: ResourceReferenceResponse;
    }

    /**
     * The workflow parameters.
     */
    export interface WorkflowParameterResponse {
        /**
         * The description.
         */
        description?: string;
        /**
         * The metadata.
         */
        metadata?: any;
        /**
         * The type.
         */
        type?: string;
        /**
         * The value.
         */
        value?: any;
    }

    /**
     * Gets the workflow trigger callback URL query parameters.
     */
    export interface WorkflowTriggerListCallbackUrlQueriesResponse {
        /**
         * The api version.
         */
        apiVersion?: string;
        /**
         * The SAS timestamp.
         */
        se?: string;
        /**
         * The SAS signature.
         */
        sig?: string;
        /**
         * The SAS permissions.
         */
        sp?: string;
        /**
         * The SAS version.
         */
        sv?: string;
    }
