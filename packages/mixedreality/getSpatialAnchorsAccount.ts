import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * > [!NOTE]
 * > 
 * > **Mixed Reality retirement**
 * > 
 * > The Mixed Reality service is now deprecated and will be retired.
 *
 *  Retrieve a Spatial Anchors Account.
 *
 * Uses Azure REST API version 2021-01-01.
 *
 * Other available API versions: 2021-03-01-preview.
 */
export function getSpatialAnchorsAccount(args: GetSpatialAnchorsAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetSpatialAnchorsAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mixedreality:getSpatialAnchorsAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSpatialAnchorsAccountArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    accountName: string;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * SpatialAnchorsAccount Response.
 */
export interface GetSpatialAnchorsAccountResult {
    /**
     * Correspond domain name of certain Spatial Anchors Account
     */
    readonly accountDomain: string;
    /**
     * unique id of certain account.
     */
    readonly accountId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity associated with this account
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The kind of account, if supported
     */
    readonly kind?: types.outputs.SkuResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The plan associated with this account
     */
    readonly plan?: types.outputs.IdentityResponse;
    /**
     * The sku associated with this account
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The name of the storage account associated with this accountId
     */
    readonly storageAccountName?: string;
    /**
     * System metadata for this account
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
 * > [!NOTE]
 * > 
 * > **Mixed Reality retirement**
 * > 
 * > The Mixed Reality service is now deprecated and will be retired.
 *
 *  Retrieve a Spatial Anchors Account.
 *
 * Uses Azure REST API version 2021-01-01.
 *
 * Other available API versions: 2021-03-01-preview.
 */
export function getSpatialAnchorsAccountOutput(args: GetSpatialAnchorsAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSpatialAnchorsAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mixedreality:getSpatialAnchorsAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSpatialAnchorsAccountOutputArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}