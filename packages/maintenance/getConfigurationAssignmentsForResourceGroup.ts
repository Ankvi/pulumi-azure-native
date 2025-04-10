import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get configuration assignment for resource..
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-09-01-preview, 2023-10-01-preview.
 */
export function getConfigurationAssignmentsForResourceGroup(args: GetConfigurationAssignmentsForResourceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationAssignmentsForResourceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maintenance:getConfigurationAssignmentsForResourceGroup", {
        "configurationAssignmentName": args.configurationAssignmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConfigurationAssignmentsForResourceGroupArgs {
    /**
     * Configuration assignment name
     */
    configurationAssignmentName: string;
    /**
     * Resource group name
     */
    resourceGroupName: string;
}

/**
 * Configuration Assignment
 */
export interface GetConfigurationAssignmentsForResourceGroupResult {
    /**
     * Properties of the configuration assignment
     */
    readonly filter?: types.outputs.ConfigurationAssignmentFilterPropertiesResponse;
    /**
     * Fully qualified identifier of the resource
     */
    readonly id: string;
    /**
     * Location of the resource
     */
    readonly location?: string;
    /**
     * The maintenance configuration Id
     */
    readonly maintenanceConfigurationId?: string;
    /**
     * Name of the resource
     */
    readonly name: string;
    /**
     * The unique resourceId
     */
    readonly resourceId?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource
     */
    readonly type: string;
}
/**
 * Get configuration assignment for resource..
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-09-01-preview, 2023-10-01-preview.
 */
export function getConfigurationAssignmentsForResourceGroupOutput(args: GetConfigurationAssignmentsForResourceGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConfigurationAssignmentsForResourceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:maintenance:getConfigurationAssignmentsForResourceGroup", {
        "configurationAssignmentName": args.configurationAssignmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConfigurationAssignmentsForResourceGroupOutputArgs {
    /**
     * Configuration assignment name
     */
    configurationAssignmentName: pulumi.Input<string>;
    /**
     * Resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}