import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * P2SVpnServerConfiguration Resource.
 *
 * Uses Azure REST API version 2019-07-01. In version 2.x of the Azure Native provider, it used API version 2019-07-01.
 *
 * Other available API versions: 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class P2sVpnServerConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing P2sVpnServerConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): P2sVpnServerConfiguration {
        return new P2sVpnServerConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:P2sVpnServerConfiguration';

    /**
     * Returns true if the given object is an instance of P2sVpnServerConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is P2sVpnServerConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === P2sVpnServerConfiguration.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Properties of the P2SVpnServer configuration.
     */
    public readonly properties!: pulumi.Output<types.outputs.P2SVpnServerConfigurationPropertiesResponse>;

    /**
     * Create a P2sVpnServerConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: P2sVpnServerConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualWanName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualWanName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["p2SVpnServerConfigurationName"] = args ? args.p2SVpnServerConfigurationName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["virtualWanName"] = args ? args.virtualWanName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180801:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20181001:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20181101:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20181201:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20190201:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20190401:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20190601:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20190701:P2sVpnServerConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(P2sVpnServerConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a P2sVpnServerConfiguration resource.
 */
export interface P2sVpnServerConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigurationName?: pulumi.Input<string>;
    /**
     * Properties of the P2SVpnServer configuration.
     */
    properties?: pulumi.Input<types.inputs.P2SVpnServerConfigurationPropertiesArgs>;
    /**
     * The resource group name of the VirtualWan.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualWan.
     */
    virtualWanName: pulumi.Input<string>;
}