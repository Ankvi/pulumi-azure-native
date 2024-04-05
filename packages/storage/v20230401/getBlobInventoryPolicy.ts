import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the blob inventory policy associated with the specified storage account.
 */
export function getBlobInventoryPolicy(args: GetBlobInventoryPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetBlobInventoryPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage/v20230401:getBlobInventoryPolicy", {
        "accountName": args.accountName,
        "blobInventoryPolicyName": args.blobInventoryPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBlobInventoryPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the storage account blob inventory policy. It should always be 'default'
     */
    blobInventoryPolicyName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The storage account blob inventory policy.
 */
export interface GetBlobInventoryPolicyResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Returns the last modified date and time of the blob inventory policy.
     */
    readonly lastModifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The storage account blob inventory policy object. It is composed of policy rules.
     */
    readonly policy: types.outputs.BlobInventoryPolicySchemaResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the blob inventory policy associated with the specified storage account.
 */
export function getBlobInventoryPolicyOutput(args: GetBlobInventoryPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlobInventoryPolicyResult> {
    return pulumi.output(args).apply((a: any) => getBlobInventoryPolicy(a, opts))
}

export interface GetBlobInventoryPolicyOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the storage account blob inventory policy. It should always be 'default'
     */
    blobInventoryPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}