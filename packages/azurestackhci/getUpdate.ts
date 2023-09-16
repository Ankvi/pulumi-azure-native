import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get specified Update
 * Azure REST API version: 2023-03-01.
 */
export function getUpdate(args: GetUpdateArgs, opts?: pulumi.InvokeOptions): Promise<GetUpdateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getUpdate", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "updateName": args.updateName,
    }, opts);
}

export interface GetUpdateArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Update
     */
    updateName: string;
}

/**
 * Update details
 */
export interface GetUpdateResult {
    /**
     * Extensible KV pairs serialized as a string. This is currently used to report the stamp OEM family and hardware model information when an update is flagged as Invalid for the stamp based on OEM type.
     */
    readonly additionalProperties?: string;
    /**
     * Indicates the way the update content can be downloaded.
     */
    readonly availabilityType?: string;
    /**
     * Description of the update.
     */
    readonly description?: string;
    /**
     * Display name of the Update
     */
    readonly displayName?: string;
    /**
     * Last time the package-specific checks were run.
     */
    readonly healthCheckDate?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Date that the update was installed.
     */
    readonly installedDate?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Brief message with instructions for updates of AvailabilityType Notify.
     */
    readonly notifyMessage?: string;
    /**
     * Path where the update package is available.
     */
    readonly packagePath?: string;
    /**
     * Size of the package. This value is a combination of the size from update metadata and size of the payload that results from the live scan operation for OS update content.
     */
    readonly packageSizeInMb?: number;
    /**
     * Customer-visible type of the update.
     */
    readonly packageType?: string;
    /**
     * If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty.
     */
    readonly prerequisites?: types.outputs.azurestackhci.UpdatePrerequisiteResponse[];
    /**
     * Progress percentage of ongoing operation. Currently this property is only valid when the update is in the Downloading state, where it maps to how much of the update content has been downloaded.
     */
    readonly progressPercentage?: number;
    /**
     * Provisioning state of the Updates proxy resource.
     */
    readonly provisioningState: string;
    /**
     * Publisher of the update package.
     */
    readonly publisher?: string;
    /**
     * Link to release notes for the update.
     */
    readonly releaseLink?: string;
    /**
     * State of the update as it relates to this stamp.
     */
    readonly state?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.azurestackhci.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Version of the update.
     */
    readonly version?: string;
}
/**
 * Get specified Update
 * Azure REST API version: 2023-03-01.
 */
export function getUpdateOutput(args: GetUpdateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUpdateResult> {
    return pulumi.output(args).apply((a: any) => getUpdate(a, opts))
}

export interface GetUpdateOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Update
     */
    updateName: pulumi.Input<string>;
}
