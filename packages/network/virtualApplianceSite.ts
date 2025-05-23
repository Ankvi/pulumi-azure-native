import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Virtual Appliance Site resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VirtualApplianceSite extends pulumi.CustomResource {
    /**
     * Get an existing VirtualApplianceSite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualApplianceSite {
        return new VirtualApplianceSite(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualApplianceSite';

    /**
     * Returns true if the given object is an instance of VirtualApplianceSite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualApplianceSite {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualApplianceSite.__pulumiType;
    }

    /**
     * Address Prefix.
     */
    public readonly addressPrefix!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Name of the virtual appliance site.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Office 365 Policy.
     */
    public readonly o365Policy!: pulumi.Output<types.outputs.Office365PolicyPropertiesResponse | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Site type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VirtualApplianceSite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualApplianceSiteArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkVirtualApplianceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkVirtualApplianceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["addressPrefix"] = args ? args.addressPrefix : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkVirtualApplianceName"] = args ? args.networkVirtualApplianceName : undefined;
            resourceInputs["o365Policy"] = args ? args.o365Policy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressPrefix"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["o365Policy"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200501:VirtualApplianceSite" }, { type: "azure-native:network/v20200601:VirtualApplianceSite" }, { type: "azure-native:network/v20200701:VirtualApplianceSite" }, { type: "azure-native:network/v20200801:VirtualApplianceSite" }, { type: "azure-native:network/v20201101:VirtualApplianceSite" }, { type: "azure-native:network/v20210201:VirtualApplianceSite" }, { type: "azure-native:network/v20210301:VirtualApplianceSite" }, { type: "azure-native:network/v20210501:VirtualApplianceSite" }, { type: "azure-native:network/v20210801:VirtualApplianceSite" }, { type: "azure-native:network/v20220101:VirtualApplianceSite" }, { type: "azure-native:network/v20220501:VirtualApplianceSite" }, { type: "azure-native:network/v20220701:VirtualApplianceSite" }, { type: "azure-native:network/v20220901:VirtualApplianceSite" }, { type: "azure-native:network/v20221101:VirtualApplianceSite" }, { type: "azure-native:network/v20230201:VirtualApplianceSite" }, { type: "azure-native:network/v20230401:VirtualApplianceSite" }, { type: "azure-native:network/v20230501:VirtualApplianceSite" }, { type: "azure-native:network/v20230601:VirtualApplianceSite" }, { type: "azure-native:network/v20230901:VirtualApplianceSite" }, { type: "azure-native:network/v20231101:VirtualApplianceSite" }, { type: "azure-native:network/v20240101:VirtualApplianceSite" }, { type: "azure-native:network/v20240301:VirtualApplianceSite" }, { type: "azure-native:network/v20240501:VirtualApplianceSite" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualApplianceSite.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualApplianceSite resource.
 */
export interface VirtualApplianceSiteArgs {
    /**
     * Address Prefix.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the virtual appliance site.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Network Virtual Appliance.
     */
    networkVirtualApplianceName: pulumi.Input<string>;
    /**
     * Office 365 Policy.
     */
    o365Policy?: pulumi.Input<types.inputs.Office365PolicyPropertiesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the site.
     */
    siteName?: pulumi.Input<string>;
}