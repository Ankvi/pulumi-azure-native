import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * DependencyProcessFilter model
 */
export interface DependencyProcessFilter {
    /**
     * Process name filter
     */
    processNameFilter?: ProcessNameFilter;
}

/**
 * DependencyProcessFilter model
 */
export interface DependencyProcessFilterArgs {
    /**
     * Process name filter
     */
    processNameFilter?: pulumi.Input<ProcessNameFilterArgs | undefined>;
}

/**
 * OffAzure discovery source resource properties
 */
export interface OffAzureDiscoverySourceResourcePropertiesArgs {
    /**
     * Source ArmId of Discovery Source resource
     */
    sourceId: pulumi.Input<string>;
    /**
     * Source type of the discoverySource
     * Expected value is 'OffAzure'.
     */
    sourceType: pulumi.Input<"OffAzure">;
}

/**
 * Process name filter for dependency map visualization apis
 */
export interface ProcessNameFilter {
    /**
     * Operator for process name filter
     */
    operator: string | enums.ProcessNameFilterOperator;
    /**
     * List of process names on which the operator should be applied
     */
    processNames: string[];
}

/**
 * Process name filter for dependency map visualization apis
 */
export interface ProcessNameFilterArgs {
    /**
     * Operator for process name filter
     */
    operator: pulumi.Input<string | enums.ProcessNameFilterOperator>;
    /**
     * List of process names on which the operator should be applied
     */
    processNames: pulumi.Input<pulumi.Input<string>[]>;
}
