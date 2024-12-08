import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a devcenter encryption set.
 * Azure REST API version: 2024-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export function getEncryptionSet(args: GetEncryptionSetArgs, opts?: pulumi.InvokeOptions): Promise<GetEncryptionSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getEncryptionSet", {
        "devCenterName": args.devCenterName,
        "encryptionSetName": args.encryptionSetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEncryptionSetArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the devcenter encryption set.
     */
    encryptionSetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a devcenter encryption set resource.
 */
export interface GetEncryptionSetResult {
    /**
     * Devbox disk encryption enable or disable status. Indicates if Devbox disks encryption using DevCenter CMK is enabled or not.
     */
    readonly devboxDisksEncryptionEnableStatus?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Managed identity properties
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
     */
    readonly keyEncryptionKeyUrl?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
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
 * Gets a devcenter encryption set.
 * Azure REST API version: 2024-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export function getEncryptionSetOutput(args: GetEncryptionSetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEncryptionSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getEncryptionSet", {
        "devCenterName": args.devCenterName,
        "encryptionSetName": args.encryptionSetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEncryptionSetOutputArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the devcenter encryption set.
     */
    encryptionSetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}