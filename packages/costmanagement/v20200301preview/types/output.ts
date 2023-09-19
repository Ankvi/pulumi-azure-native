import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Target resources and allocation
     */
    export interface CostAllocationProportionResponse {
        /**
         * Target resource for cost allocation
         */
        name: string;
        /**
         * Percentage of source cost to allocate to this resource. This value can be specified to two decimal places and the total percentage of all resources in this rule must sum to 100.00.
         */
        percentage: number;
    }

    /**
     * Resource details of the cost allocation rule
     */
    export interface CostAllocationRuleDetailsResponse {
        /**
         * Source resources for cost allocation. At this time, this list can contain no more than one element.
         */
        sourceResources?: SourceCostAllocationResourceResponse[];
        /**
         * Target resources for cost allocation. At this time, this list can contain no more than one element.
         */
        targetResources?: TargetCostAllocationResourceResponse[];
    }

    /**
     * The properties of a cost allocation rule
     */
    export interface CostAllocationRulePropertiesResponse {
        /**
         * Time at which the rule was created. Rules that change cost for the same resource are applied in order of creation.
         */
        createdDate: string;
        /**
         * Description of a cost allocation rule.
         */
        description?: string;
        /**
         * Resource information for the cost allocation rule
         */
        details: CostAllocationRuleDetailsResponse;
        /**
         * Status of the rule
         */
        status: string;
        /**
         * Time at which the rule was last updated.
         */
        updatedDate: string;
    }

    /**
     * Source resources for cost allocation
     */
    export interface SourceCostAllocationResourceResponse {
        /**
         * If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag
         */
        name: string;
        /**
         * Type of resources contained in this cost allocation rule
         */
        resourceType: string;
        /**
         * Source Resources for cost allocation. This list cannot contain more than 25 values.
         */
        values: string[];
    }

    /**
     * Target resources for cost allocation.
     */
    export interface TargetCostAllocationResourceResponse {
        /**
         * If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag
         */
        name: string;
        /**
         * Method of cost allocation for the rule
         */
        policyType: string;
        /**
         * Type of resources contained in this cost allocation rule
         */
        resourceType: string;
        /**
         * Target resources for cost allocation. This list cannot contain more than 25 values.
         */
        values: CostAllocationProportionResponse[];
    }
