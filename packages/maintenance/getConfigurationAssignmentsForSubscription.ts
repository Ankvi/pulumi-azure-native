import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get configuration assignment for resource..
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-09-01-preview.
 */
export function getConfigurationAssignmentsForSubscription(args: GetConfigurationAssignmentsForSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationAssignmentsForSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maintenance:getConfigurationAssignmentsForSubscription", {
        "configurationAssignmentName": args.configurationAssignmentName,
    }, opts);
}

export interface GetConfigurationAssignmentsForSubscriptionArgs {
    /**
     * Configuration assignment name
     */
    configurationAssignmentName: string;
}

/**
 * Configuration Assignment
 */
export interface GetConfigurationAssignmentsForSubscriptionResult {
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
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-09-01-preview.
 */
export function getConfigurationAssignmentsForSubscriptionOutput(args: GetConfigurationAssignmentsForSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationAssignmentsForSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationAssignmentsForSubscription(a, opts))
}

export interface GetConfigurationAssignmentsForSubscriptionOutputArgs {
    /**
     * Configuration assignment name
     */
    configurationAssignmentName: pulumi.Input<string>;
}
