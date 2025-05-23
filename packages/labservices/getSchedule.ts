import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties of a lab Schedule.
 *
 * Uses Azure REST API version 2023-06-07.
 *
 * Other available API versions: 2021-10-01-preview, 2021-11-15-preview, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native labservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSchedule(args: GetScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:getSchedule", {
        "labName": args.labName,
        "resourceGroupName": args.resourceGroupName,
        "scheduleName": args.scheduleName,
    }, opts);
}

export interface GetScheduleArgs {
    /**
     * The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
     */
    labName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the schedule that uniquely identifies it within containing lab. Used in resource URIs.
     */
    scheduleName: string;
}

/**
 * Schedule for automatically turning virtual machines in a lab on and off at specified times.
 */
export interface GetScheduleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Notes for this schedule.
     */
    readonly notes?: string;
    /**
     * Current provisioning state of the schedule.
     */
    readonly provisioningState: string;
    /**
     * The recurrence pattern of the scheduled actions.
     */
    readonly recurrencePattern?: types.outputs.RecurrencePatternResponse;
    /**
     * Error details of last operation done on schedule.
     */
    readonly resourceOperationError: types.outputs.ResourceOperationErrorResponse;
    /**
     * When lab user virtual machines will be started. Timestamp offsets will be ignored and timeZoneId is used instead.
     */
    readonly startAt?: string;
    /**
     * When lab user virtual machines will be stopped. Timestamp offsets will be ignored and timeZoneId is used instead.
     */
    readonly stopAt: string;
    /**
     * Metadata pertaining to creation and last modification of the schedule.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The IANA timezone id for the schedule.
     */
    readonly timeZoneId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns the properties of a lab Schedule.
 *
 * Uses Azure REST API version 2023-06-07.
 *
 * Other available API versions: 2021-10-01-preview, 2021-11-15-preview, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native labservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScheduleOutput(args: GetScheduleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:labservices:getSchedule", {
        "labName": args.labName,
        "resourceGroupName": args.resourceGroupName,
        "scheduleName": args.scheduleName,
    }, opts);
}

export interface GetScheduleOutputArgs {
    /**
     * The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the schedule that uniquely identifies it within containing lab. Used in resource URIs.
     */
    scheduleName: pulumi.Input<string>;
}