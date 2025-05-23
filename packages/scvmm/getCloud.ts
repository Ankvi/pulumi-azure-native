import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements Cloud GET method.
 *
 * Uses Azure REST API version 2023-04-01-preview.
 *
 * Other available API versions: 2022-05-21-preview, 2023-10-07, 2024-06-01, 2025-03-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native scvmm [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCloud(args: GetCloudArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm:getCloud", {
        "cloudName": args.cloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudArgs {
    /**
     * Name of the Cloud.
     */
    cloudName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The Clouds resource definition.
 */
export interface GetCloudResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Capacity of the cloud.
     */
    readonly cloudCapacity: types.outputs.CloudCapacityResponse;
    /**
     * Name of the cloud in VMMServer.
     */
    readonly cloudName: string;
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    readonly inventoryItemId?: string;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * List of QoS policies available for the cloud.
     */
    readonly storageQoSPolicies: types.outputs.StorageQoSPolicyResponse[];
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource Type
     */
    readonly type: string;
    /**
     * Unique ID of the cloud.
     */
    readonly uuid?: string;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    readonly vmmServerId?: string;
}
/**
 * Implements Cloud GET method.
 *
 * Uses Azure REST API version 2023-04-01-preview.
 *
 * Other available API versions: 2022-05-21-preview, 2023-10-07, 2024-06-01, 2025-03-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native scvmm [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCloudOutput(args: GetCloudOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCloudResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:scvmm:getCloud", {
        "cloudName": args.cloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudOutputArgs {
    /**
     * Name of the Cloud.
     */
    cloudName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}