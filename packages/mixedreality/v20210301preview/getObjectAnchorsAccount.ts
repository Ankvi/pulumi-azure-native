import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieve an Object Anchors Account.
 */
export function getObjectAnchorsAccount(args: GetObjectAnchorsAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetObjectAnchorsAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mixedreality/v20210301preview:getObjectAnchorsAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetObjectAnchorsAccountArgs {
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
 * ObjectAnchorsAccount Response.
 */
export interface GetObjectAnchorsAccountResult {
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
    readonly identity?: types.outputs.mixedreality.v20210301preview.ObjectAnchorsAccountResponseIdentity;
    /**
     * The kind of account, if supported
     */
    readonly kind?: types.outputs.mixedreality.v20210301preview.SkuResponse;
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
    readonly plan?: types.outputs.mixedreality.v20210301preview.IdentityResponse;
    /**
     * The sku associated with this account
     */
    readonly sku?: types.outputs.mixedreality.v20210301preview.SkuResponse;
    /**
     * The name of the storage account associated with this accountId
     */
    readonly storageAccountName?: string;
    /**
     * The system metadata related to an object anchors account.
     */
    readonly systemData: types.outputs.mixedreality.v20210301preview.SystemDataResponse;
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
 * Retrieve an Object Anchors Account.
 */
export function getObjectAnchorsAccountOutput(args: GetObjectAnchorsAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetObjectAnchorsAccountResult> {
    return pulumi.output(args).apply((a: any) => getObjectAnchorsAccount(a, opts))
}

export interface GetObjectAnchorsAccountOutputArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
