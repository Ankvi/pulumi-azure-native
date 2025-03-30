import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The order details.
 *
 * Uses Azure REST API version 2022-03-01. In version 1.x of the Azure Native provider, it used API version 2020-12-01.
 *
 * Other available API versions: 2022-04-01-preview, 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export class Order extends pulumi.CustomResource {
    /**
     * Get an existing Order resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Order {
        return new Order(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:Order';

    /**
     * Returns true if the given object is an instance of Order.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Order {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Order.__pulumiType;
    }

    /**
     * The contact details.
     */
    public readonly contactInformation!: pulumi.Output<types.outputs.ContactDetailsResponse>;
    /**
     * Current status of the order.
     */
    public /*out*/ readonly currentStatus!: pulumi.Output<types.outputs.OrderStatusResponse>;
    /**
     * Tracking information for the package delivered to the customer whether it has an original or a replacement device.
     */
    public /*out*/ readonly deliveryTrackingInfo!: pulumi.Output<types.outputs.TrackingInfoResponse[]>;
    /**
     * It specify the order api version.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * The object name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of status changes in the order.
     */
    public /*out*/ readonly orderHistory!: pulumi.Output<types.outputs.OrderStatusResponse[]>;
    /**
     * It specify the order resource id.
     */
    public /*out*/ readonly orderId!: pulumi.Output<string>;
    /**
     * Tracking information for the package returned from the customer whether it has an original or a replacement device.
     */
    public /*out*/ readonly returnTrackingInfo!: pulumi.Output<types.outputs.TrackingInfoResponse[]>;
    /**
     * Serial number of the device.
     */
    public /*out*/ readonly serialNumber!: pulumi.Output<string>;
    /**
     * ShipmentType of the order
     */
    public readonly shipmentType!: pulumi.Output<string | undefined>;
    /**
     * The shipping address.
     */
    public readonly shippingAddress!: pulumi.Output<types.outputs.AddressResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of Order
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Order resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrderArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.contactInformation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contactInformation'");
            }
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["contactInformation"] = args ? args.contactInformation : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shipmentType"] = args ? args.shipmentType : undefined;
            resourceInputs["shippingAddress"] = args ? args.shippingAddress : undefined;
            resourceInputs["currentStatus"] = undefined /*out*/;
            resourceInputs["deliveryTrackingInfo"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["orderHistory"] = undefined /*out*/;
            resourceInputs["orderId"] = undefined /*out*/;
            resourceInputs["returnTrackingInfo"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["contactInformation"] = undefined /*out*/;
            resourceInputs["currentStatus"] = undefined /*out*/;
            resourceInputs["deliveryTrackingInfo"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["orderHistory"] = undefined /*out*/;
            resourceInputs["orderId"] = undefined /*out*/;
            resourceInputs["returnTrackingInfo"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
            resourceInputs["shipmentType"] = undefined /*out*/;
            resourceInputs["shippingAddress"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190301:Order" }, { type: "azure-native:databoxedge/v20190701:Order" }, { type: "azure-native:databoxedge/v20190801:Order" }, { type: "azure-native:databoxedge/v20200501preview:Order" }, { type: "azure-native:databoxedge/v20200901:Order" }, { type: "azure-native:databoxedge/v20200901preview:Order" }, { type: "azure-native:databoxedge/v20201201:Order" }, { type: "azure-native:databoxedge/v20210201:Order" }, { type: "azure-native:databoxedge/v20210201preview:Order" }, { type: "azure-native:databoxedge/v20210601:Order" }, { type: "azure-native:databoxedge/v20210601preview:Order" }, { type: "azure-native:databoxedge/v20220301:Order" }, { type: "azure-native:databoxedge/v20220401preview:Order" }, { type: "azure-native:databoxedge/v20221201preview:Order" }, { type: "azure-native:databoxedge/v20230101preview:Order" }, { type: "azure-native:databoxedge/v20230701:Order" }, { type: "azure-native:databoxedge/v20231201:Order" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Order.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Order resource.
 */
export interface OrderArgs {
    /**
     * The contact details.
     */
    contactInformation: pulumi.Input<types.inputs.ContactDetailsArgs>;
    /**
     * The order details of a device.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * ShipmentType of the order
     */
    shipmentType?: pulumi.Input<string | types.enums.ShipmentType>;
    /**
     * The shipping address.
     */
    shippingAddress?: pulumi.Input<types.inputs.AddressArgs>;
}