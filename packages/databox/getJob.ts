import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified job.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2022-12-01, 2023-03-01, 2023-12-01, 2024-02-01-preview, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databox [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getJob(args: GetJobArgs, opts?: pulumi.InvokeOptions): Promise<GetJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databox:getJob", {
        "expand": args.expand,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobArgs {
    /**
     * $expand is supported on details parameter for job, which provides details on the job stages.
     */
    expand?: string;
    /**
     * The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    jobName: string;
    /**
     * The Resource Group Name
     */
    resourceGroupName: string;
}

/**
 * Job Resource.
 */
export interface GetJobResult {
    /**
     * Flag to indicate if all devices associated with the job are lost.
     */
    readonly allDevicesLost: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Reason for cancellation.
     */
    readonly cancellationReason: string;
    /**
     * Name of the stage where delay might be present.
     */
    readonly delayedStage: string;
    /**
     * Delivery Info of Job.
     */
    readonly deliveryInfo?: types.outputs.JobDeliveryInfoResponse;
    /**
     * Delivery type of Job.
     */
    readonly deliveryType?: string;
    /**
     * Details of a job run. This field will only be sent for expand details filter.
     */
    readonly details?: types.outputs.DataBoxCustomerDiskJobDetailsResponse | types.outputs.DataBoxDiskJobDetailsResponse | types.outputs.DataBoxHeavyJobDetailsResponse | types.outputs.DataBoxJobDetailsResponse;
    /**
     * Top level error for the job.
     */
    readonly error: types.outputs.CloudErrorResponse;
    /**
     * Id of the object.
     */
    readonly id: string;
    /**
     * Msi identity of the resource
     */
    readonly identity?: types.outputs.ResourceIdentityResponse;
    /**
     * Describes whether the job is cancellable or not.
     */
    readonly isCancellable: boolean;
    /**
     * Flag to indicate cancellation of scheduled job.
     */
    readonly isCancellableWithoutFee: boolean;
    /**
     * Describes whether the job is deletable or not.
     */
    readonly isDeletable: boolean;
    /**
     * Is Prepare To Ship Enabled on this job
     */
    readonly isPrepareToShipEnabled: boolean;
    /**
     * Describes whether the shipping address is editable or not.
     */
    readonly isShippingAddressEditable: boolean;
    /**
     * The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
     */
    readonly location: string;
    /**
     * Name of the object.
     */
    readonly name: string;
    /**
     * The Editable status for Reverse Shipping Address and Contact Info
     */
    readonly reverseShippingDetailsUpdate: string;
    /**
     * The Editable status for Reverse Transport preferences
     */
    readonly reverseTransportPreferenceUpdate: string;
    /**
     * The sku type.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Time at which the job was started in UTC ISO 8601 format.
     */
    readonly startTime: string;
    /**
     * Name of the stage which is in progress.
     */
    readonly status: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of the data transfer.
     */
    readonly transferType: string;
    /**
     * Type of the object.
     */
    readonly type: string;
}
/**
 * Gets information about the specified job.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2022-12-01, 2023-03-01, 2023-12-01, 2024-02-01-preview, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databox [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getJobOutput(args: GetJobOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databox:getJob", {
        "expand": args.expand,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobOutputArgs {
    /**
     * $expand is supported on details parameter for job, which provides details on the job stages.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    jobName: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}