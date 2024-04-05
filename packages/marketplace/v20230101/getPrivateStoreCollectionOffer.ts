import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a specific offer.
 */
export function getPrivateStoreCollectionOffer(args: GetPrivateStoreCollectionOfferArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateStoreCollectionOfferResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:marketplace/v20230101:getPrivateStoreCollectionOffer", {
        "collectionId": args.collectionId,
        "offerId": args.offerId,
        "privateStoreId": args.privateStoreId,
    }, opts);
}

export interface GetPrivateStoreCollectionOfferArgs {
    /**
     * The collection ID
     */
    collectionId: string;
    /**
     * The offer ID to update or delete
     */
    offerId: string;
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: string;
}

/**
 * The privateStore offer data structure.
 */
export interface GetPrivateStoreCollectionOfferResult {
    /**
     * Private store offer creation date
     */
    readonly createdAt: string;
    /**
     * Identifier for purposes of race condition
     */
    readonly eTag?: string;
    /**
     * Icon File Uris
     */
    readonly iconFileUris?: {[key: string]: string};
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * Private store offer modification date
     */
    readonly modifiedAt: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * It will be displayed prominently in the marketplace
     */
    readonly offerDisplayName: string;
    /**
     * Offer plans
     */
    readonly plans?: types.outputs.PlanResponse[];
    /**
     * Private store unique id
     */
    readonly privateStoreId: string;
    /**
     * Publisher name that will be displayed prominently in the marketplace
     */
    readonly publisherDisplayName: string;
    /**
     * Plan ids limitation for this offer
     */
    readonly specificPlanIdsLimitation?: string[];
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Offers unique id
     */
    readonly uniqueOfferId: string;
    /**
     * Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.
     */
    readonly updateSuppressedDueIdempotence?: boolean;
}
/**
 * Gets information about a specific offer.
 */
export function getPrivateStoreCollectionOfferOutput(args: GetPrivateStoreCollectionOfferOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateStoreCollectionOfferResult> {
    return pulumi.output(args).apply((a: any) => getPrivateStoreCollectionOffer(a, opts))
}

export interface GetPrivateStoreCollectionOfferOutputArgs {
    /**
     * The collection ID
     */
    collectionId: pulumi.Input<string>;
    /**
     * The offer ID to update or delete
     */
    offerId: pulumi.Input<string>;
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: pulumi.Input<string>;
}