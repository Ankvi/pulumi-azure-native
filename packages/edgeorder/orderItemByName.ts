import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents order item contract
 *
 * Uses Azure REST API version 2021-12-01. In version 1.x of the Azure Native provider, it used API version 2021-12-01.
 */
export class OrderItemByName extends pulumi.CustomResource {
    /**
     * Get an existing OrderItemByName resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OrderItemByName {
        return new OrderItemByName(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:edgeorder:OrderItemByName';

    /**
     * Returns true if the given object is an instance of OrderItemByName.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrderItemByName {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrderItemByName.__pulumiType;
    }

    /**
     * Represents shipping and return address for order item
     */
    public readonly addressDetails!: pulumi.Output<types.outputs.AddressDetailsResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Id of the order to which order item belongs to
     */
    public readonly orderId!: pulumi.Output<string>;
    /**
     * Represents order item details.
     */
    public readonly orderItemDetails!: pulumi.Output<types.outputs.OrderItemDetailsResponse>;
    /**
     * Start time of order item
     */
    public /*out*/ readonly startTime!: pulumi.Output<string>;
    /**
     * Represents resource creation and update time
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OrderItemByName resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrderItemByNameArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.addressDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addressDetails'");
            }
            if ((!args || args.orderId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'orderId'");
            }
            if ((!args || args.orderItemDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'orderItemDetails'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["addressDetails"] = args ? args.addressDetails : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["orderId"] = args ? args.orderId : undefined;
            resourceInputs["orderItemDetails"] = args ? args.orderItemDetails : undefined;
            resourceInputs["orderItemName"] = args ? args.orderItemName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressDetails"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["orderId"] = undefined /*out*/;
            resourceInputs["orderItemDetails"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:edgeorder/v20201201preview:OrderItemByName" }, { type: "azure-native:edgeorder/v20211201:OrderItemByName" }, { type: "azure-native:edgeorder/v20220501preview:OrderItemByName" }, { type: "azure-native:edgeorder/v20240201:OrderItemByName" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OrderItemByName.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OrderItemByName resource.
 */
export interface OrderItemByNameArgs {
    /**
     * Represents shipping and return address for order item
     */
    addressDetails: pulumi.Input<types.inputs.AddressDetailsArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Id of the order to which order item belongs to
     */
    orderId: pulumi.Input<string>;
    /**
     * Represents order item details.
     */
    orderItemDetails: pulumi.Input<types.inputs.OrderItemDetailsArgs>;
    /**
     * The name of the order item
     */
    orderItemName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}