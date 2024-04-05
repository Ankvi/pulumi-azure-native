import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a disk encryption set.
 */
export function getDiskEncryptionSet(args: GetDiskEncryptionSetArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskEncryptionSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20220702:getDiskEncryptionSet", {
        "diskEncryptionSetName": args.diskEncryptionSetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiskEncryptionSetArgs {
    /**
     * The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskEncryptionSetName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * disk encryption set resource.
 */
export interface GetDiskEncryptionSetResult {
    /**
     * The key vault key which is currently used by this disk encryption set.
     */
    readonly activeKey?: types.outputs.KeyForDiskEncryptionSetResponse;
    /**
     * The error that was encountered during auto-key rotation. If an error is present, then auto-key rotation will not be attempted until the error on this disk encryption set is fixed.
     */
    readonly autoKeyRotationError: types.outputs.ApiErrorResponse;
    /**
     * The type of key used to encrypt the data of the disk.
     */
    readonly encryptionType?: string;
    /**
     * Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property.
     */
    readonly federatedClientId?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
     */
    readonly identity?: types.outputs.EncryptionSetIdentityResponse;
    /**
     * The time when the active key of this disk encryption set was updated.
     */
    readonly lastKeyRotationTimestamp: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation.
     */
    readonly previousKeys: types.outputs.KeyForDiskEncryptionSetResponse[];
    /**
     * The disk encryption set provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Set this flag to true to enable auto-updating of this disk encryption set to the latest key version.
     */
    readonly rotationToLatestKeyVersionEnabled?: boolean;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets information about a disk encryption set.
 */
export function getDiskEncryptionSetOutput(args: GetDiskEncryptionSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDiskEncryptionSetResult> {
    return pulumi.output(args).apply((a: any) => getDiskEncryptionSet(a, opts))
}

export interface GetDiskEncryptionSetOutputArgs {
    /**
     * The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskEncryptionSetName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}