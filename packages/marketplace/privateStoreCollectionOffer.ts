import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The privateStore offer data structure.
 *
 * Uses Azure REST API version 2023-01-01. In version 2.x of the Azure Native provider, it used API version 2023-01-01.
 */
export class PrivateStoreCollectionOffer extends pulumi.CustomResource {
    /**
     * Get an existing PrivateStoreCollectionOffer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateStoreCollectionOffer {
        return new PrivateStoreCollectionOffer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:marketplace:PrivateStoreCollectionOffer';

    /**
     * Returns true if the given object is an instance of PrivateStoreCollectionOffer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateStoreCollectionOffer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateStoreCollectionOffer.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Private store offer creation date
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Identifier for purposes of race condition
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Icon File Uris
     */
    public readonly iconFileUris!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Private store offer modification date
     */
    public /*out*/ readonly modifiedAt!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * It will be displayed prominently in the marketplace
     */
    public /*out*/ readonly offerDisplayName!: pulumi.Output<string>;
    /**
     * Offer plans
     */
    public readonly plans!: pulumi.Output<types.outputs.PlanResponse[] | undefined>;
    /**
     * Private store unique id
     */
    public readonly privateStoreId!: pulumi.Output<string>;
    /**
     * Publisher name that will be displayed prominently in the marketplace
     */
    public /*out*/ readonly publisherDisplayName!: pulumi.Output<string>;
    /**
     * Plan ids limitation for this offer
     */
    public readonly specificPlanIdsLimitation!: pulumi.Output<string[] | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Offers unique id
     */
    public /*out*/ readonly uniqueOfferId!: pulumi.Output<string>;
    /**
     * Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.
     */
    public readonly updateSuppressedDueIdempotence!: pulumi.Output<boolean | undefined>;

    /**
     * Create a PrivateStoreCollectionOffer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateStoreCollectionOfferArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.collectionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'collectionId'");
            }
            if ((!args || args.privateStoreId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateStoreId'");
            }
            resourceInputs["collectionId"] = args ? args.collectionId : undefined;
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["iconFileUris"] = args ? args.iconFileUris : undefined;
            resourceInputs["offerId"] = args ? args.offerId : undefined;
            resourceInputs["plans"] = args ? args.plans : undefined;
            resourceInputs["privateStoreId"] = args ? args.privateStoreId : undefined;
            resourceInputs["specificPlanIdsLimitation"] = args ? args.specificPlanIdsLimitation : undefined;
            resourceInputs["updateSuppressedDueIdempotence"] = args ? args.updateSuppressedDueIdempotence : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["modifiedAt"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["offerDisplayName"] = undefined /*out*/;
            resourceInputs["publisherDisplayName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueOfferId"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["iconFileUris"] = undefined /*out*/;
            resourceInputs["modifiedAt"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["offerDisplayName"] = undefined /*out*/;
            resourceInputs["plans"] = undefined /*out*/;
            resourceInputs["privateStoreId"] = undefined /*out*/;
            resourceInputs["publisherDisplayName"] = undefined /*out*/;
            resourceInputs["specificPlanIdsLimitation"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueOfferId"] = undefined /*out*/;
            resourceInputs["updateSuppressedDueIdempotence"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:marketplace/v20210601:PrivateStoreCollectionOffer" }, { type: "azure-native:marketplace/v20211201:PrivateStoreCollectionOffer" }, { type: "azure-native:marketplace/v20220301:PrivateStoreCollectionOffer" }, { type: "azure-native:marketplace/v20220901:PrivateStoreCollectionOffer" }, { type: "azure-native:marketplace/v20230101:PrivateStoreCollectionOffer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateStoreCollectionOffer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateStoreCollectionOffer resource.
 */
export interface PrivateStoreCollectionOfferArgs {
    /**
     * The collection ID
     */
    collectionId: pulumi.Input<string>;
    /**
     * Identifier for purposes of race condition
     */
    eTag?: pulumi.Input<string>;
    /**
     * Icon File Uris
     */
    iconFileUris?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The offer ID to update or delete
     */
    offerId?: pulumi.Input<string>;
    /**
     * Offer plans
     */
    plans?: pulumi.Input<pulumi.Input<types.inputs.PlanArgs>[]>;
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: pulumi.Input<string>;
    /**
     * Plan ids limitation for this offer
     */
    specificPlanIdsLimitation?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.
     */
    updateSuppressedDueIdempotence?: pulumi.Input<boolean>;
}