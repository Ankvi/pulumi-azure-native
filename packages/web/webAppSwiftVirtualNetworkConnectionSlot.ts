import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration.
 *
 * Uses Azure REST API version 2022-09-01. In version 1.x of the Azure Native provider, it used API version 2020-10-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export class WebAppSwiftVirtualNetworkConnectionSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSwiftVirtualNetworkConnectionSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSwiftVirtualNetworkConnectionSlot {
        return new WebAppSwiftVirtualNetworkConnectionSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppSwiftVirtualNetworkConnectionSlot';

    /**
     * Returns true if the given object is an instance of WebAppSwiftVirtualNetworkConnectionSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppSwiftVirtualNetworkConnectionSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppSwiftVirtualNetworkConnectionSlot.__pulumiType;
    }

    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
     */
    public readonly subnetResourceId!: pulumi.Output<string | undefined>;
    /**
     * A flag that specifies if the scale unit this Web App is on supports Swift integration.
     */
    public readonly swiftSupported!: pulumi.Output<boolean | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppSwiftVirtualNetworkConnectionSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSwiftVirtualNetworkConnectionSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.slot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slot'");
            }
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["subnetResourceId"] = args ? args.subnetResourceId : undefined;
            resourceInputs["swiftSupported"] = args ? args.swiftSupported : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["subnetResourceId"] = undefined /*out*/;
            resourceInputs["swiftSupported"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20180201:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20181101:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20190801:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20200601:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20200901:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20201001:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20210115:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20210201:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20210301:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20220301:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20220901:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20230101:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20231201:WebAppSwiftVirtualNetworkConnectionSlot" }, { type: "azure-native:web/v20240401:WebAppSwiftVirtualNetworkConnectionSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppSwiftVirtualNetworkConnectionSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppSwiftVirtualNetworkConnectionSlot resource.
 */
export interface WebAppSwiftVirtualNetworkConnectionSlotArgs {
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
     */
    slot: pulumi.Input<string>;
    /**
     * The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
     */
    subnetResourceId?: pulumi.Input<string>;
    /**
     * A flag that specifies if the scale unit this Web App is on supports Swift integration.
     */
    swiftSupported?: pulumi.Input<boolean>;
}