import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents order item resource.
 *
 * Uses Azure REST API version 2024-02-01. In version 2.x of the Azure Native provider, it used API version 2022-05-01-preview.
 *
 * Other available API versions: 2022-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native edgeorder [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class OrderItem extends pulumi.CustomResource {
    /**
     * Get an existing OrderItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OrderItem {
        return new OrderItem(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:edgeorder:OrderItem';

    /**
     * Returns true if the given object is an instance of OrderItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrderItem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrderItem.__pulumiType;
    }

    /**
     * Represents shipping and return address for order item.
     */
    public readonly addressDetails!: pulumi.Output<types.outputs.AddressDetailsResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Msi identity of the resource
     */
    public readonly identity!: pulumi.Output<types.outputs.ResourceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Id of the order to which order item belongs to.
     */
    public readonly orderId!: pulumi.Output<string>;
    /**
     * Represents order item details.
     */
    public readonly orderItemDetails!: pulumi.Output<types.outputs.OrderItemDetailsResponse>;
    /**
     * Provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Start time of order item.
     */
    public /*out*/ readonly startTime!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
     * Create a OrderItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrderItemArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
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
            resourceInputs["identity"] = args ? (args.identity ? pulumi.output(args.identity).apply(types.inputs.resourceIdentityArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["orderId"] = args ? args.orderId : undefined;
            resourceInputs["orderItemDetails"] = args ? (args.orderItemDetails ? pulumi.output(args.orderItemDetails).apply(types.inputs.orderItemDetailsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["orderItemName"] = args ? args.orderItemName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressDetails"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["orderId"] = undefined /*out*/;
            resourceInputs["orderItemDetails"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:edgeorder/v20201201preview:OrderItem" }, { type: "azure-native:edgeorder/v20211201:OrderItem" }, { type: "azure-native:edgeorder/v20211201:OrderItemByName" }, { type: "azure-native:edgeorder/v20220501preview:OrderItem" }, { type: "azure-native:edgeorder/v20240201:OrderItem" }, { type: "azure-native:edgeorder:OrderItemByName" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OrderItem.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OrderItem resource.
 */
export interface OrderItemArgs {
    /**
     * Represents shipping and return address for order item.
     */
    addressDetails?: pulumi.Input<types.inputs.AddressDetailsArgs>;
    /**
     * Msi identity of the resource
     */
    identity?: pulumi.Input<types.inputs.ResourceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Id of the order to which order item belongs to.
     */
    orderId: pulumi.Input<string>;
    /**
     * Represents order item details.
     */
    orderItemDetails: pulumi.Input<types.inputs.OrderItemDetailsArgs>;
    /**
     * The name of the order item.
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