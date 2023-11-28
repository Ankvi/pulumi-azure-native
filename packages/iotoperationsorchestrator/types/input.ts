import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines a component binding for a provider.
 */
export interface BindingPropertiesArgs {
    /**
     * Configuration values for the binding.
     */
    config: any;
    /**
     * Name of the provider.
     */
    provider: pulumi.Input<string>;
    /**
     * Role that the provider binds to with the component.
     */
    role: pulumi.Input<string>;
}

/**
 * Defines a desired runtime component.
 */
export interface ComponentPropertiesArgs {
    /**
     * Component dependencies.
     */
    dependencies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the component.
     */
    name: pulumi.Input<string>;
    /**
     * Properties of the component.
     */
    properties?: any;
    /**
     * Component type.
     */
    type: pulumi.Input<string>;
}

/**
 * Extended location is an extension of Azure locations. They provide a way to use their Azure ARC enabled Kubernetes clusters as target locations for deploying Azure services instances.
 */
export interface ExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name: pulumi.Input<string>;
    /**
     * The type of the extended location.
     */
    type: pulumi.Input<string>;
}

/**
 * Reconciliation Policy.
 */
export interface ReconciliationPolicyArgs {
    /**
     * Policy interval.
     */
    interval?: pulumi.Input<string>;
    /**
     * Policy type
     */
    type: pulumi.Input<string | enums.ReconciliationPolicies>;
}

/**
 * Properties of the reference target.
 */
export interface TargetSelectorPropertiesArgs {
    /**
     * Name of the target.
     */
    name?: pulumi.Input<string>;
}

/**
 * Defines a desired runtime component.
 */
export interface TopologiesPropertiesArgs {
    /**
     * bindings description.
     */
    bindings?: pulumi.Input<pulumi.Input<BindingPropertiesArgs>[]>;
}
