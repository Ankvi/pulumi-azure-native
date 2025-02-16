import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Model that represents a branch in the step.
 */
export interface BranchArgs {
    /**
     * List of actions.
     */
    actions: pulumi.Input<pulumi.Input<ContinuousActionArgs | DelayActionArgs | DiscreteActionArgs>[]>;
    /**
     * String of the branch name.
     */
    name: pulumi.Input<string>;
}

/**
 * Model that represents a continuous action.
 */
export interface ContinuousActionArgs {
    /**
     * ISO8601 formatted string that represents a duration.
     */
    duration: pulumi.Input<string>;
    /**
     * String that represents a Capability URN.
     */
    name: pulumi.Input<string>;
    /**
     * List of key value pairs.
     */
    parameters: pulumi.Input<pulumi.Input<KeyValuePairArgs>[]>;
    /**
     * String that represents a selector.
     */
    selectorId: pulumi.Input<string>;
    /**
     * Enum that discriminates between action models.
     * Expected value is 'continuous'.
     */
    type: pulumi.Input<"continuous">;
}

/**
 * Model that represents a delay action.
 */
export interface DelayActionArgs {
    /**
     * ISO8601 formatted string that represents a duration.
     */
    duration: pulumi.Input<string>;
    /**
     * String that represents a Capability URN.
     */
    name: pulumi.Input<string>;
    /**
     * Enum that discriminates between action models.
     * Expected value is 'delay'.
     */
    type: pulumi.Input<"delay">;
}

/**
 * Model that represents a discrete action.
 */
export interface DiscreteActionArgs {
    /**
     * String that represents a Capability URN.
     */
    name: pulumi.Input<string>;
    /**
     * List of key value pairs.
     */
    parameters: pulumi.Input<pulumi.Input<KeyValuePairArgs>[]>;
    /**
     * String that represents a selector.
     */
    selectorId: pulumi.Input<string>;
    /**
     * Enum that discriminates between action models.
     * Expected value is 'discrete'.
     */
    type: pulumi.Input<"discrete">;
}

/**
 * Model that represents the Experiment properties model.
 */
export interface ExperimentPropertiesArgs {
    /**
     * List of selectors.
     */
    selectors: pulumi.Input<pulumi.Input<ListSelectorArgs | QuerySelectorArgs>[]>;
    /**
     * A boolean value that indicates if experiment should be started on creation or not.
     */
    startOnCreation?: pulumi.Input<boolean>;
    /**
     * List of steps.
     */
    steps: pulumi.Input<pulumi.Input<StepArgs>[]>;
}

/**
 * A map to describe the settings of an action.
 */
export interface KeyValuePairArgs {
    /**
     * The name of the setting for the action.
     */
    key: pulumi.Input<string>;
    /**
     * The value of the setting for the action.
     */
    value: pulumi.Input<string>;
}

/**
 * Model that represents a list selector.
 */
export interface ListSelectorArgs {
    /**
     * Model that represents available filter types that can be applied to a targets list.
     */
    filter?: pulumi.Input<SimpleFilterArgs>;
    /**
     * String of the selector ID.
     */
    id: pulumi.Input<string>;
    /**
     * List of Target references.
     */
    targets: pulumi.Input<pulumi.Input<TargetReferenceArgs>[]>;
    /**
     * Enum of the selector type.
     * Expected value is 'List'.
     */
    type: pulumi.Input<"List">;
}

/**
 * Model that represents a query selector.
 */
export interface QuerySelectorArgs {
    /**
     * Model that represents available filter types that can be applied to a targets list.
     */
    filter?: pulumi.Input<SimpleFilterArgs>;
    /**
     * String of the selector ID.
     */
    id: pulumi.Input<string>;
    /**
     * Azure Resource Graph (ARG) Query Language query for target resources.
     */
    queryString: pulumi.Input<string>;
    /**
     * Subscription id list to scope resource query.
     */
    subscriptionIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enum of the selector type.
     * Expected value is 'Query'.
     */
    type: pulumi.Input<"Query">;
}

/**
 * The identity of a resource.
 */
export interface ResourceIdentityArgs {
    /**
     * String of the resource identity type.
     */
    type: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the Experiment. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Model that represents a simple target filter.
 */
export interface SimpleFilterArgs {
    /**
     * Model that represents the Simple filter parameters.
     */
    parameters?: pulumi.Input<SimpleFilterParametersArgs>;
    /**
     * Enum that discriminates between filter types. Currently only `Simple` type is supported.
     * Expected value is 'Simple'.
     */
    type: pulumi.Input<"Simple">;
}

/**
 * Model that represents the Simple filter parameters.
 */
export interface SimpleFilterParametersArgs {
    /**
     * List of Azure availability zones to filter targets by.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Model that represents a step in the Experiment resource.
 */
export interface StepArgs {
    /**
     * List of branches.
     */
    branches: pulumi.Input<pulumi.Input<BranchArgs>[]>;
    /**
     * String of the step name.
     */
    name: pulumi.Input<string>;
}

/**
 * Model that represents a reference to a Target in the selector.
 */
export interface TargetReferenceArgs {
    /**
     * String of the resource ID of a Target resource.
     */
    id: pulumi.Input<string>;
    /**
     * Enum of the Target reference type.
     */
    type: pulumi.Input<string | enums.TargetReferenceType>;
}







