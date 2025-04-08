import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VpnServerConfiguration Resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VpnServerConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing VpnServerConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnServerConfiguration {
        return new VpnServerConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VpnServerConfiguration';

    /**
     * Returns true if the given object is an instance of VpnServerConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnServerConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnServerConfiguration.__pulumiType;
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
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Properties of the P2SVpnServer configuration.
     */
    public readonly properties!: pulumi.Output<types.outputs.VpnServerConfigurationPropertiesResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VpnServerConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnServerConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpnServerConfigurationName"] = args ? args.vpnServerConfigurationName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20190801:VpnServerConfiguration" }, { type: "azure-native:network/v20190901:VpnServerConfiguration" }, { type: "azure-native:network/v20191101:VpnServerConfiguration" }, { type: "azure-native:network/v20191201:VpnServerConfiguration" }, { type: "azure-native:network/v20200301:VpnServerConfiguration" }, { type: "azure-native:network/v20200401:VpnServerConfiguration" }, { type: "azure-native:network/v20200501:VpnServerConfiguration" }, { type: "azure-native:network/v20200601:VpnServerConfiguration" }, { type: "azure-native:network/v20200701:VpnServerConfiguration" }, { type: "azure-native:network/v20200801:VpnServerConfiguration" }, { type: "azure-native:network/v20201101:VpnServerConfiguration" }, { type: "azure-native:network/v20210201:VpnServerConfiguration" }, { type: "azure-native:network/v20210301:VpnServerConfiguration" }, { type: "azure-native:network/v20210501:VpnServerConfiguration" }, { type: "azure-native:network/v20210801:VpnServerConfiguration" }, { type: "azure-native:network/v20220101:VpnServerConfiguration" }, { type: "azure-native:network/v20220501:VpnServerConfiguration" }, { type: "azure-native:network/v20220701:VpnServerConfiguration" }, { type: "azure-native:network/v20220901:VpnServerConfiguration" }, { type: "azure-native:network/v20221101:VpnServerConfiguration" }, { type: "azure-native:network/v20230201:VpnServerConfiguration" }, { type: "azure-native:network/v20230401:VpnServerConfiguration" }, { type: "azure-native:network/v20230501:VpnServerConfiguration" }, { type: "azure-native:network/v20230601:VpnServerConfiguration" }, { type: "azure-native:network/v20230901:VpnServerConfiguration" }, { type: "azure-native:network/v20231101:VpnServerConfiguration" }, { type: "azure-native:network/v20240101:VpnServerConfiguration" }, { type: "azure-native:network/v20240301:VpnServerConfiguration" }, { type: "azure-native:network/v20240501:VpnServerConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VpnServerConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VpnServerConfiguration resource.
 */
export interface VpnServerConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Properties of the P2SVpnServer configuration.
     */
    properties?: pulumi.Input<types.inputs.VpnServerConfigurationPropertiesArgs>;
    /**
     * The resource group name of the VpnServerConfiguration.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the VpnServerConfiguration being created or updated.
     */
    vpnServerConfigurationName?: pulumi.Input<string>;
}