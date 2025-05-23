import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Collection data structure.
 *
 * Uses Azure REST API version 2023-01-01. In version 2.x of the Azure Native provider, it used API version 2023-01-01.
 *
 * Other available API versions: 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native marketplace [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PrivateStoreCollection extends pulumi.CustomResource {
    /**
     * Get an existing PrivateStoreCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateStoreCollection {
        return new PrivateStoreCollection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:marketplace:PrivateStoreCollection';

    /**
     * Returns true if the given object is an instance of PrivateStoreCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateStoreCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateStoreCollection.__pulumiType;
    }

    /**
     * Indicating whether all subscriptions are selected (=true) or not (=false).
     */
    public readonly allSubscriptions!: pulumi.Output<boolean | undefined>;
    /**
     * Gets list of collection rules
     */
    public /*out*/ readonly appliedRules!: pulumi.Output<types.outputs.RuleResponse[]>;
    /**
     * Indicating whether all items are approved for this collection (=true) or not (=false).
     */
    public /*out*/ readonly approveAllItems!: pulumi.Output<boolean>;
    /**
     * Gets the modified date of all items approved.
     */
    public /*out*/ readonly approveAllItemsModifiedAt!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the association with Commercial's Billing Account.
     */
    public readonly claim!: pulumi.Output<string | undefined>;
    /**
     * Gets collection Id.
     */
    public readonly collectionId!: pulumi.Output<string>;
    /**
     * Gets or sets collection name.
     */
    public readonly collectionName!: pulumi.Output<string | undefined>;
    /**
     * Indicating whether the collection is enabled or disabled.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the number of offers associated with the collection.
     */
    public /*out*/ readonly numberOfOffers!: pulumi.Output<number>;
    /**
     * Gets or sets subscription ids list. Empty list indicates all subscriptions are selected, null indicates no update is done, explicit list indicates the explicit selected subscriptions. On insert, null is considered as bad request
     */
    public readonly subscriptionsList!: pulumi.Output<string[] | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateStoreCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateStoreCollectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateStoreId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateStoreId'");
            }
            resourceInputs["allSubscriptions"] = args ? args.allSubscriptions : undefined;
            resourceInputs["claim"] = args ? args.claim : undefined;
            resourceInputs["collectionId"] = args ? args.collectionId : undefined;
            resourceInputs["collectionName"] = args ? args.collectionName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["privateStoreId"] = args ? args.privateStoreId : undefined;
            resourceInputs["subscriptionsList"] = args ? args.subscriptionsList : undefined;
            resourceInputs["appliedRules"] = undefined /*out*/;
            resourceInputs["approveAllItems"] = undefined /*out*/;
            resourceInputs["approveAllItemsModifiedAt"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfOffers"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allSubscriptions"] = undefined /*out*/;
            resourceInputs["appliedRules"] = undefined /*out*/;
            resourceInputs["approveAllItems"] = undefined /*out*/;
            resourceInputs["approveAllItemsModifiedAt"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["claim"] = undefined /*out*/;
            resourceInputs["collectionId"] = undefined /*out*/;
            resourceInputs["collectionName"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfOffers"] = undefined /*out*/;
            resourceInputs["subscriptionsList"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:marketplace/v20210601:PrivateStoreCollection" }, { type: "azure-native:marketplace/v20211201:PrivateStoreCollection" }, { type: "azure-native:marketplace/v20220301:PrivateStoreCollection" }, { type: "azure-native:marketplace/v20220901:PrivateStoreCollection" }, { type: "azure-native:marketplace/v20230101:PrivateStoreCollection" }, { type: "azure-native:marketplace/v20250101:PrivateStoreCollection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateStoreCollection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateStoreCollection resource.
 */
export interface PrivateStoreCollectionArgs {
    /**
     * Indicating whether all subscriptions are selected (=true) or not (=false).
     */
    allSubscriptions?: pulumi.Input<boolean>;
    /**
     * Gets or sets the association with Commercial's Billing Account.
     */
    claim?: pulumi.Input<string>;
    /**
     * The collection ID
     */
    collectionId?: pulumi.Input<string>;
    /**
     * Gets or sets collection name.
     */
    collectionName?: pulumi.Input<string>;
    /**
     * Indicating whether the collection is enabled or disabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: pulumi.Input<string>;
    /**
     * Gets or sets subscription ids list. Empty list indicates all subscriptions are selected, null indicates no update is done, explicit list indicates the explicit selected subscriptions. On insert, null is considered as bad request
     */
    subscriptionsList?: pulumi.Input<pulumi.Input<string>[]>;
}