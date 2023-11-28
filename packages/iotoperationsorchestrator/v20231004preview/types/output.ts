import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines a component binding for a provider.
     */
    export interface BindingPropertiesResponse {
        /**
         * Configuration values for the binding.
         */
        config: any;
        /**
         * Name of the provider.
         */
        provider: string;
        /**
         * Role that the provider binds to with the component.
         */
        role: string;
    }

    /**
     * Defines a desired runtime component.
     */
    export interface ComponentPropertiesResponse {
        /**
         * Component dependencies.
         */
        dependencies?: string[];
        /**
         * Name of the component.
         */
        name: string;
        /**
         * Properties of the component.
         */
        properties?: any;
        /**
         * Component type.
         */
        type: string;
    }

    /**
     * Extended location is an extension of Azure locations. They provide a way to use their Azure ARC enabled Kubernetes clusters as target locations for deploying Azure services instances.
     */
    export interface ExtendedLocationResponse {
        /**
         * The name of the extended location.
         */
        name: string;
        /**
         * The type of the extended location.
         */
        type: string;
    }

    /**
     * Reconciliation Policy.
     */
    export interface ReconciliationPolicyResponse {
        /**
         * Policy interval.
         */
        interval?: string;
        /**
         * Policy type
         */
        type: string;
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

    /**
     * Properties of the reference target.
     */
    export interface TargetSelectorPropertiesResponse {
        /**
         * Name of the target.
         */
        name?: string;
    }

    /**
     * Defines a desired runtime component.
     */
    export interface TopologiesPropertiesResponse {
        /**
         * bindings description.
         */
        bindings?: BindingPropertiesResponse[];
    }
