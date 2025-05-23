import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a specific offer.
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native marketplace [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateStoreCollectionOffer(args: GetPrivateStoreCollectionOfferArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateStoreCollectionOfferResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:marketplace:getPrivateStoreCollectionOffer", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native marketplace [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateStoreCollectionOfferOutput(args: GetPrivateStoreCollectionOfferOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateStoreCollectionOfferResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:marketplace:getPrivateStoreCollectionOffer", {
        "collectionId": args.collectionId,
        "offerId": args.offerId,
        "privateStoreId": args.privateStoreId,
    }, opts);
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