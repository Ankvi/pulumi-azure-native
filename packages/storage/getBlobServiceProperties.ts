import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01, 2023-05-01.
 */
export function getBlobServiceProperties(args: GetBlobServicePropertiesArgs, opts?: pulumi.InvokeOptions): Promise<GetBlobServicePropertiesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:getBlobServiceProperties", {
        "accountName": args.accountName,
        "blobServicesName": args.blobServicesName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBlobServicePropertiesArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the blob Service within the specified storage account. Blob Service Name must be 'default'
     */
    blobServicesName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The properties of a storage account’s Blob service.
 */
export interface GetBlobServicePropertiesResult {
    /**
     * Deprecated in favor of isVersioningEnabled property.
     */
    readonly automaticSnapshotPolicyEnabled?: boolean;
    /**
     * The blob service properties for change feed events.
     */
    readonly changeFeed?: types.outputs.ChangeFeedResponse;
    /**
     * The blob service properties for container soft delete.
     */
    readonly containerDeleteRetentionPolicy?: types.outputs.DeleteRetentionPolicyResponse;
    /**
     * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
     */
    readonly cors?: types.outputs.CorsRulesResponse;
    /**
     * DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming request’s version is not specified. Possible values include version 2008-10-27 and all more recent versions.
     */
    readonly defaultServiceVersion?: string;
    /**
     * The blob service properties for blob soft delete.
     */
    readonly deleteRetentionPolicy?: types.outputs.DeleteRetentionPolicyResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Versioning is enabled if set to true.
     */
    readonly isVersioningEnabled?: boolean;
    /**
     * The blob service property to configure last access time based tracking policy.
     */
    readonly lastAccessTimeTrackingPolicy?: types.outputs.LastAccessTimeTrackingPolicyResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The blob service properties for blob restore policy.
     */
    readonly restorePolicy?: types.outputs.RestorePolicyPropertiesResponse;
    /**
     * Sku name and tier.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01, 2023-05-01.
 */
export function getBlobServicePropertiesOutput(args: GetBlobServicePropertiesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlobServicePropertiesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storage:getBlobServiceProperties", {
        "accountName": args.accountName,
        "blobServicesName": args.blobServicesName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBlobServicePropertiesOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the blob Service within the specified storage account. Blob Service Name must be 'default'
     */
    blobServicesName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}