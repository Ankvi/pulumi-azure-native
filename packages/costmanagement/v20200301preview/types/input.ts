import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Target resources and allocation
     */
    export interface CostAllocationProportionArgs {
        /**
         * Target resource for cost allocation
         */
        name: pulumi.Input<string>;
        /**
         * Percentage of source cost to allocate to this resource. This value can be specified to two decimal places and the total percentage of all resources in this rule must sum to 100.00.
         */
        percentage: pulumi.Input<number>;
    }

    /**
     * Resource details of the cost allocation rule
     */
    export interface CostAllocationRuleDetailsArgs {
        /**
         * Source resources for cost allocation. At this time, this list can contain no more than one element.
         */
        sourceResources?: pulumi.Input<pulumi.Input<SourceCostAllocationResourceArgs>[]>;
        /**
         * Target resources for cost allocation. At this time, this list can contain no more than one element.
         */
        targetResources?: pulumi.Input<pulumi.Input<TargetCostAllocationResourceArgs>[]>;
    }

    /**
     * The properties of a cost allocation rule
     */
    export interface CostAllocationRulePropertiesArgs {
        /**
         * Description of a cost allocation rule.
         */
        description?: pulumi.Input<string>;
        /**
         * Resource information for the cost allocation rule
         */
        details: pulumi.Input<CostAllocationRuleDetailsArgs>;
        /**
         * Status of the rule
         */
        status: pulumi.Input<string | enums.RuleStatus>;
    }

    /**
     * Source resources for cost allocation
     */
    export interface SourceCostAllocationResourceArgs {
        /**
         * If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag
         */
        name: pulumi.Input<string>;
        /**
         * Type of resources contained in this cost allocation rule
         */
        resourceType: pulumi.Input<string | enums.CostAllocationResourceType>;
        /**
         * Source Resources for cost allocation. This list cannot contain more than 25 values.
         */
        values: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Target resources for cost allocation.
     */
    export interface TargetCostAllocationResourceArgs {
        /**
         * If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag
         */
        name: pulumi.Input<string>;
        /**
         * Method of cost allocation for the rule
         */
        policyType: pulumi.Input<string | enums.CostAllocationPolicyType>;
        /**
         * Type of resources contained in this cost allocation rule
         */
        resourceType: pulumi.Input<string | enums.CostAllocationResourceType>;
        /**
         * Target resources for cost allocation. This list cannot contain more than 25 values.
         */
        values: pulumi.Input<pulumi.Input<CostAllocationProportionArgs>[]>;
    }
