import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of a specified container.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2022-09-01, 2023-01-01, 2023-04-01, 2023-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storage [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBlobContainer(args: GetBlobContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetBlobContainerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:getBlobContainer", {
        "accountName": args.accountName,
        "containerName": args.containerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBlobContainerArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    containerName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Properties of the blob container, including Id, resource name, resource type, Etag.
 */
export interface GetBlobContainerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Default the container to use specified encryption scope for all writes.
     */
    readonly defaultEncryptionScope?: string;
    /**
     * Indicates whether the blob container was deleted.
     */
    readonly deleted: boolean;
    /**
     * Blob container deletion time.
     */
    readonly deletedTime: string;
    /**
     * Block override of encryption scope from the container default.
     */
    readonly denyEncryptionScopeOverride?: boolean;
    /**
     * Enable NFSv3 all squash on blob container.
     */
    readonly enableNfsV3AllSquash?: boolean;
    /**
     * Enable NFSv3 root squash on blob container.
     */
    readonly enableNfsV3RootSquash?: boolean;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container.
     */
    readonly hasImmutabilityPolicy: boolean;
    /**
     * The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
     */
    readonly hasLegalHold: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The ImmutabilityPolicy property of the container.
     */
    readonly immutabilityPolicy: types.outputs.ImmutabilityPolicyPropertiesResponse;
    /**
     * The object level immutability property of the container. The property is immutable and can only be set to true at the container creation time. Existing containers must undergo a migration process.
     */
    readonly immutableStorageWithVersioning?: types.outputs.ImmutableStorageWithVersioningResponse;
    /**
     * Returns the date and time the container was last modified.
     */
    readonly lastModifiedTime: string;
    /**
     * Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased.
     */
    readonly leaseDuration: string;
    /**
     * Lease state of the container.
     */
    readonly leaseState: string;
    /**
     * The lease status of the container.
     */
    readonly leaseStatus: string;
    /**
     * The LegalHold property of the container.
     */
    readonly legalHold: types.outputs.LegalHoldPropertiesResponse;
    /**
     * A name-value pair to associate with the container as metadata.
     */
    readonly metadata?: {[key: string]: string};
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Specifies whether data in the container may be accessed publicly and the level of access.
     */
    readonly publicAccess?: string;
    /**
     * Remaining retention days for soft deleted blob container.
     */
    readonly remainingRetentionDays: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The version of the deleted blob container.
     */
    readonly version: string;
}
/**
 * Gets properties of a specified container.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2022-09-01, 2023-01-01, 2023-04-01, 2023-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storage [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBlobContainerOutput(args: GetBlobContainerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBlobContainerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storage:getBlobContainer", {
        "accountName": args.accountName,
        "containerName": args.containerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBlobContainerOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    containerName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}