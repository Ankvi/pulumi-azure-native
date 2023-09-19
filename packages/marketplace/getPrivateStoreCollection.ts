import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets private store collection
 * Azure REST API version: 2023-01-01.
 */
export function getPrivateStoreCollection(args: GetPrivateStoreCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateStoreCollectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:marketplace:getPrivateStoreCollection", {
        "collectionId": args.collectionId,
        "privateStoreId": args.privateStoreId,
    }, opts);
}

export interface GetPrivateStoreCollectionArgs {
    /**
     * The collection ID
     */
    collectionId: string;
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: string;
}

/**
 * The Collection data structure.
 */
export interface GetPrivateStoreCollectionResult {
    /**
     * Indicating whether all subscriptions are selected (=true) or not (=false).
     */
    readonly allSubscriptions?: boolean;
    /**
     * Gets list of collection rules
     */
    readonly appliedRules: types.outputs.RuleResponse[];
    /**
     * Indicating whether all items are approved for this collection (=true) or not (=false).
     */
    readonly approveAllItems: boolean;
    /**
     * Gets the modified date of all items approved.
     */
    readonly approveAllItemsModifiedAt: string;
    /**
     * Gets or sets the association with Commercial's Billing Account.
     */
    readonly claim?: string;
    /**
     * Gets collection Id.
     */
    readonly collectionId: string;
    /**
     * Gets or sets collection name.
     */
    readonly collectionName?: string;
    /**
     * Indicating whether the collection is enabled or disabled.
     */
    readonly enabled?: boolean;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Gets the number of offers associated with the collection.
     */
    readonly numberOfOffers: number;
    /**
     * Gets or sets subscription ids list. Empty list indicates all subscriptions are selected, null indicates no update is done, explicit list indicates the explicit selected subscriptions. On insert, null is considered as bad request
     */
    readonly subscriptionsList?: string[];
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets private store collection
 * Azure REST API version: 2023-01-01.
 */
export function getPrivateStoreCollectionOutput(args: GetPrivateStoreCollectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateStoreCollectionResult> {
    return pulumi.output(args).apply((a: any) => getPrivateStoreCollection(a, opts))
}

export interface GetPrivateStoreCollectionOutputArgs {
    /**
     * The collection ID
     */
    collectionId: pulumi.Input<string>;
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: pulumi.Input<string>;
}
