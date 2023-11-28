import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Virtual Network information ARM resource.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01.
 */
export class WebAppVnetConnection extends pulumi.CustomResource {
    /**
     * Get an existing WebAppVnetConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppVnetConnection {
        return new WebAppVnetConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppVnetConnection';

    /**
     * Returns true if the given object is an instance of WebAppVnetConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppVnetConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppVnetConnection.__pulumiType;
    }

    /**
     * A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
     * Point-To-Site VPN connection.
     */
    public readonly certBlob!: pulumi.Output<string | undefined>;
    /**
     * The client certificate thumbprint.
     */
    public /*out*/ readonly certThumbprint!: pulumi.Output<string>;
    /**
     * DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
     */
    public readonly dnsServers!: pulumi.Output<string | undefined>;
    /**
     * Flag that is used to denote if this is VNET injection
     */
    public readonly isSwift!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * <code>true</code> if a resync is required; otherwise, <code>false</code>.
     */
    public /*out*/ readonly resyncRequired!: pulumi.Output<boolean>;
    /**
     * The routes that this Virtual Network connection uses.
     */
    public /*out*/ readonly routes!: pulumi.Output<types.outputs.VnetRouteResponse[]>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The Virtual Network's resource ID.
     */
    public readonly vnetResourceId!: pulumi.Output<string | undefined>;

    /**
     * Create a WebAppVnetConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppVnetConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["certBlob"] = args ? args.certBlob : undefined;
            resourceInputs["dnsServers"] = args ? args.dnsServers : undefined;
            resourceInputs["isSwift"] = args ? args.isSwift : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["vnetName"] = args ? args.vnetName : undefined;
            resourceInputs["vnetResourceId"] = args ? args.vnetResourceId : undefined;
            resourceInputs["certThumbprint"] = undefined /*out*/;
            resourceInputs["resyncRequired"] = undefined /*out*/;
            resourceInputs["routes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["certBlob"] = undefined /*out*/;
            resourceInputs["certThumbprint"] = undefined /*out*/;
            resourceInputs["dnsServers"] = undefined /*out*/;
            resourceInputs["isSwift"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resyncRequired"] = undefined /*out*/;
            resourceInputs["routes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vnetResourceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:WebAppVnetConnection" }, { type: "azure-native:web/v20160801:WebAppVnetConnection" }, { type: "azure-native:web/v20180201:WebAppVnetConnection" }, { type: "azure-native:web/v20181101:WebAppVnetConnection" }, { type: "azure-native:web/v20190801:WebAppVnetConnection" }, { type: "azure-native:web/v20200601:WebAppVnetConnection" }, { type: "azure-native:web/v20200901:WebAppVnetConnection" }, { type: "azure-native:web/v20201001:WebAppVnetConnection" }, { type: "azure-native:web/v20201201:WebAppVnetConnection" }, { type: "azure-native:web/v20210101:WebAppVnetConnection" }, { type: "azure-native:web/v20210115:WebAppVnetConnection" }, { type: "azure-native:web/v20210201:WebAppVnetConnection" }, { type: "azure-native:web/v20210301:WebAppVnetConnection" }, { type: "azure-native:web/v20220301:WebAppVnetConnection" }, { type: "azure-native:web/v20220901:WebAppVnetConnection" }, { type: "azure-native:web/v20230101:WebAppVnetConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppVnetConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppVnetConnection resource.
 */
export interface WebAppVnetConnectionArgs {
    /**
     * A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
     * Point-To-Site VPN connection.
     */
    certBlob?: pulumi.Input<string>;
    /**
     * DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
     */
    dnsServers?: pulumi.Input<string>;
    /**
     * Flag that is used to denote if this is VNET injection
     */
    isSwift?: pulumi.Input<boolean>;
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
     * Name of an existing Virtual Network.
     */
    vnetName?: pulumi.Input<string>;
    /**
     * The Virtual Network's resource ID.
     */
    vnetResourceId?: pulumi.Input<string>;
}
