import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Scheduler
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2025-04-01-preview, 2025-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native durabletask [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScheduler(args: GetSchedulerArgs, opts?: pulumi.InvokeOptions): Promise<GetSchedulerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:durabletask:getScheduler", {
        "resourceGroupName": args.resourceGroupName,
        "schedulerName": args.schedulerName,
    }, opts);
}

export interface GetSchedulerArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Scheduler
     */
    schedulerName: string;
}

/**
 * A Durable Task Scheduler resource
 */
export interface GetSchedulerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.SchedulerPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Scheduler
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2025-04-01-preview, 2025-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native durabletask [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSchedulerOutput(args: GetSchedulerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSchedulerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:durabletask:getScheduler", {
        "resourceGroupName": args.resourceGroupName,
        "schedulerName": args.schedulerName,
    }, opts);
}

export interface GetSchedulerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Scheduler
     */
    schedulerName: pulumi.Input<string>;
}