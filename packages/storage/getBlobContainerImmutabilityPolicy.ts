import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the existing immutability policy along with the corresponding ETag in response headers and body.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01, 2023-05-01.
 */
export function getBlobContainerImmutabilityPolicy(args: GetBlobContainerImmutabilityPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetBlobContainerImmutabilityPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:getBlobContainerImmutabilityPolicy", {
        "accountName": args.accountName,
        "containerName": args.containerName,
        "immutabilityPolicyName": args.immutabilityPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBlobContainerImmutabilityPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    containerName: string;
    /**
     * The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
     */
    immutabilityPolicyName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The ImmutabilityPolicy property of a blob container, including Id, resource name, resource type, Etag.
 */
export interface GetBlobContainerImmutabilityPolicyResult {
    /**
     * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API.
     */
    readonly allowProtectedAppendWrites?: boolean;
    /**
     * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive.
     */
    readonly allowProtectedAppendWritesAll?: boolean;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The immutability period for the blobs in the container since the policy creation, in days.
     */
    readonly immutabilityPeriodSinceCreationInDays?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked.
     */
    readonly state: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the existing immutability policy along with the corresponding ETag in response headers and body.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01, 2023-05-01.
 */
export function getBlobContainerImmutabilityPolicyOutput(args: GetBlobContainerImmutabilityPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBlobContainerImmutabilityPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storage:getBlobContainerImmutabilityPolicy", {
        "accountName": args.accountName,
        "containerName": args.containerName,
        "immutabilityPolicyName": args.immutabilityPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBlobContainerImmutabilityPolicyOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    containerName: pulumi.Input<string>;
    /**
     * The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
     */
    immutabilityPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}