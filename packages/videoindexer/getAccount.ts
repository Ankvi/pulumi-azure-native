import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of an Azure Video Indexer account.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2024-01-01, 2024-04-01-preview, 2024-06-01-preview, 2024-09-23-preview, 2025-01-01, 2025-03-01.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoindexer:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the Azure Video Indexer account.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Video Indexer account.
 */
export interface GetAccountResult {
    /**
     * The account's data-plane ID. This can be set only when connecting an existing classic account
     */
    readonly accountId?: string;
    /**
     * The account's name
     */
    readonly accountName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The media services details
     */
    readonly mediaServices?: types.outputs.MediaServicesForPutRequestResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the status of the account at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The account's tenant id
     */
    readonly tenantId: string;
    /**
     * An integer representing the total seconds that have been indexed on the account
     */
    readonly totalSecondsIndexed: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the properties of an Azure Video Indexer account.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2024-01-01, 2024-04-01-preview, 2024-06-01-preview, 2024-09-23-preview, 2025-01-01, 2025-03-01.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:videoindexer:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountOutputArgs {
    /**
     * The name of the Azure Video Indexer account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}