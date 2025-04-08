import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Model that represents a branch in the step. 9 total per experiment.
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
 * Model that represents the Customer Managed Storage for an Experiment.
 */
export interface CustomerDataStoragePropertiesArgs {
    /**
     * Name of the Azure Blob Storage container to use or create.
     */
    blobContainerName?: pulumi.Input<string>;
    /**
     * ARM Resource ID of the Storage account to use for Customer Data storage.
     */
    storageAccountResourceId?: pulumi.Input<string>;
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
 * The identity of the experiment resource.
 */
export interface ExperimentIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Model that represents the Experiment properties model.
 */
export interface ExperimentPropertiesArgs {
    /**
     * Optional customer-managed Storage account where Experiment schema will be stored.
     */
    customerDataStorage?: pulumi.Input<CustomerDataStoragePropertiesArgs>;
    /**
     * List of selectors.
     */
    selectors: pulumi.Input<pulumi.Input<ListSelectorArgs | QuerySelectorArgs>[]>;
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
