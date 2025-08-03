import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get configuration assignment for resource.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-04-01, 2023-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native maintenance [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConfigurationAssignmentsForSubscription(args: GetConfigurationAssignmentsForSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationAssignmentsForSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maintenance:getConfigurationAssignmentsForSubscription", {
        "configurationAssignmentName": args.configurationAssignmentName,
    }, opts);
}

export interface GetConfigurationAssignmentsForSubscriptionArgs {
    /**
     * The name of the ConfigurationAssignment
     */
    configurationAssignmentName: string;
}

/**
 * Configuration Assignment
 */
export interface GetConfigurationAssignmentsForSubscriptionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Properties of the configuration assignment
     */
    readonly filter?: types.outputs.ConfigurationAssignmentFilterPropertiesResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The name of the resource
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get configuration assignment for resource.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-04-01, 2023-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native maintenance [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConfigurationAssignmentsForSubscriptionOutput(args: GetConfigurationAssignmentsForSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConfigurationAssignmentsForSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:maintenance:getConfigurationAssignmentsForSubscription", {
        "configurationAssignmentName": args.configurationAssignmentName,
    }, opts);
}

export interface GetConfigurationAssignmentsForSubscriptionOutputArgs {
    /**
     * The name of the ConfigurationAssignment
     */
    configurationAssignmentName: pulumi.Input<string>;
}