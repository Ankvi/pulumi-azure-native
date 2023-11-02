import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Product details.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview.
 */
export class WorkspaceProduct extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceProduct resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceProduct {
        return new WorkspaceProduct(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:WorkspaceProduct';

    /**
     * Returns true if the given object is an instance of WorkspaceProduct.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceProduct {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceProduct.__pulumiType;
    }

    /**
     * whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
     */
    public readonly approvalRequired!: pulumi.Output<boolean | undefined>;
    /**
     * Product description. May include HTML formatting tags.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Product name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
     */
    public readonly subscriptionRequired!: pulumi.Output<boolean | undefined>;
    /**
     * Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
     */
    public readonly subscriptionsLimit!: pulumi.Output<number | undefined>;
    /**
     * Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.
     */
    public readonly terms!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkspaceProduct resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceProductArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["approvalRequired"] = args ? args.approvalRequired : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["productId"] = args ? args.productId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["subscriptionRequired"] = args ? args.subscriptionRequired : undefined;
            resourceInputs["subscriptionsLimit"] = args ? args.subscriptionsLimit : undefined;
            resourceInputs["terms"] = args ? args.terms : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["approvalRequired"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["subscriptionRequired"] = undefined /*out*/;
            resourceInputs["subscriptionsLimit"] = undefined /*out*/;
            resourceInputs["terms"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20220901preview:WorkspaceProduct" }, { type: "azure-native:apimanagement/v20230301preview:WorkspaceProduct" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceProduct.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceProduct resource.
 */
export interface WorkspaceProductArgs {
    /**
     * whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
     */
    approvalRequired?: pulumi.Input<boolean>;
    /**
     * Product description. May include HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * Product name.
     */
    displayName: pulumi.Input<string>;
    /**
     * Product identifier. Must be unique in the current API Management service instance.
     */
    productId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
     */
    state?: pulumi.Input<types.enums.ProductState>;
    /**
     * Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
     */
    subscriptionRequired?: pulumi.Input<boolean>;
    /**
     * Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
     */
    subscriptionsLimit?: pulumi.Input<number>;
    /**
     * Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.
     */
    terms?: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}
