import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a schedule resource.
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-08-01-preview, 2023-10-01-preview, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSchedule(args: GetScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getSchedule", {
        "poolName": args.poolName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "scheduleName": args.scheduleName,
        "top": args.top,
    }, opts);
}

export interface GetScheduleArgs {
    /**
     * Name of the pool.
     */
    poolName: string;
    /**
     * The name of the project.
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the schedule that uniquely identifies it.
     */
    scheduleName: string;
    /**
     * The maximum number of resources to return from the operation. Example: '$top=10'.
     */
    top?: number;
}

/**
 * Represents a Schedule to execute a task.
 */
export interface GetScheduleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The frequency of this scheduled task.
     */
    readonly frequency: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Indicates whether or not this scheduled task is enabled.
     */
    readonly state?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The target time to trigger the action. The format is HH:MM.
     */
    readonly time: string;
    /**
     * The IANA timezone id at which the schedule should execute.
     */
    readonly timeZone: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a schedule resource.
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-08-01-preview, 2023-10-01-preview, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScheduleOutput(args: GetScheduleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getSchedule", {
        "poolName": args.poolName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "scheduleName": args.scheduleName,
        "top": args.top,
    }, opts);
}

export interface GetScheduleOutputArgs {
    /**
     * Name of the pool.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the schedule that uniquely identifies it.
     */
    scheduleName: pulumi.Input<string>;
    /**
     * The maximum number of resources to return from the operation. Example: '$top=10'.
     */
    top?: pulumi.Input<number>;
}