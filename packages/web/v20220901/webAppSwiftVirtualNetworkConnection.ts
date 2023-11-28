import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration.
 */
export class WebAppSwiftVirtualNetworkConnection extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSwiftVirtualNetworkConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSwiftVirtualNetworkConnection {
        return new WebAppSwiftVirtualNetworkConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20220901:WebAppSwiftVirtualNetworkConnection';

    /**
     * Returns true if the given object is an instance of WebAppSwiftVirtualNetworkConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppSwiftVirtualNetworkConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppSwiftVirtualNetworkConnection.__pulumiType;
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
     * Create a WebAppSwiftVirtualNetworkConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSwiftVirtualNetworkConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20180201:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20181101:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20190801:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20200601:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20200901:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20201001:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20201201:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20210101:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20210115:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20210201:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20210301:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20220301:WebAppSwiftVirtualNetworkConnection" }, { type: "azure-native:web/v20230101:WebAppSwiftVirtualNetworkConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppSwiftVirtualNetworkConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppSwiftVirtualNetworkConnection resource.
 */
export interface WebAppSwiftVirtualNetworkConnectionArgs {
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
     * The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
     */
    subnetResourceId?: pulumi.Input<string>;
    /**
     * A flag that specifies if the scale unit this Web App is on supports Swift integration.
     */
    swiftSupported?: pulumi.Input<boolean>;
}
