import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Bastion Host resource.
 *
 * Uses Azure REST API version 2023-02-01. In version 1.x of the Azure Native provider, it used API version 2020-11-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export class BastionHost extends pulumi.CustomResource {
    /**
     * Get an existing BastionHost resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BastionHost {
        return new BastionHost(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:BastionHost';

    /**
     * Returns true if the given object is an instance of BastionHost.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BastionHost {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BastionHost.__pulumiType;
    }

    /**
     * Enable/Disable Copy/Paste feature of the Bastion Host resource.
     */
    public readonly disableCopyPaste!: pulumi.Output<boolean | undefined>;
    /**
     * FQDN for the endpoint on which bastion host is accessible.
     */
    public readonly dnsName!: pulumi.Output<string | undefined>;
    /**
     * Enable/Disable File Copy feature of the Bastion Host resource.
     */
    public readonly enableFileCopy!: pulumi.Output<boolean | undefined>;
    /**
     * Enable/Disable IP Connect feature of the Bastion Host resource.
     */
    public readonly enableIpConnect!: pulumi.Output<boolean | undefined>;
    /**
     * Enable/Disable Kerberos feature of the Bastion Host resource.
     */
    public readonly enableKerberos!: pulumi.Output<boolean | undefined>;
    /**
     * Enable/Disable Shareable Link of the Bastion Host resource.
     */
    public readonly enableShareableLink!: pulumi.Output<boolean | undefined>;
    /**
     * Enable/Disable Tunneling feature of the Bastion Host resource.
     */
    public readonly enableTunneling!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * IP configuration of the Bastion Host resource.
     */
    public readonly ipConfigurations!: pulumi.Output<types.outputs.BastionHostIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the bastion host resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The scale units for the Bastion Host resource.
     */
    public readonly scaleUnits!: pulumi.Output<number | undefined>;
    /**
     * The sku of this Bastion Host.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BastionHost resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BastionHostArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["bastionHostName"] = args ? args.bastionHostName : undefined;
            resourceInputs["disableCopyPaste"] = (args ? args.disableCopyPaste : undefined) ?? false;
            resourceInputs["dnsName"] = args ? args.dnsName : undefined;
            resourceInputs["enableFileCopy"] = (args ? args.enableFileCopy : undefined) ?? false;
            resourceInputs["enableIpConnect"] = (args ? args.enableIpConnect : undefined) ?? false;
            resourceInputs["enableKerberos"] = (args ? args.enableKerberos : undefined) ?? false;
            resourceInputs["enableShareableLink"] = (args ? args.enableShareableLink : undefined) ?? false;
            resourceInputs["enableTunneling"] = (args ? args.enableTunneling : undefined) ?? false;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scaleUnits"] = args ? args.scaleUnits : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["disableCopyPaste"] = undefined /*out*/;
            resourceInputs["dnsName"] = undefined /*out*/;
            resourceInputs["enableFileCopy"] = undefined /*out*/;
            resourceInputs["enableIpConnect"] = undefined /*out*/;
            resourceInputs["enableKerberos"] = undefined /*out*/;
            resourceInputs["enableShareableLink"] = undefined /*out*/;
            resourceInputs["enableTunneling"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scaleUnits"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20190401:BastionHost" }, { type: "azure-native:network/v20190601:BastionHost" }, { type: "azure-native:network/v20190701:BastionHost" }, { type: "azure-native:network/v20190801:BastionHost" }, { type: "azure-native:network/v20190901:BastionHost" }, { type: "azure-native:network/v20191101:BastionHost" }, { type: "azure-native:network/v20191201:BastionHost" }, { type: "azure-native:network/v20200301:BastionHost" }, { type: "azure-native:network/v20200401:BastionHost" }, { type: "azure-native:network/v20200501:BastionHost" }, { type: "azure-native:network/v20200601:BastionHost" }, { type: "azure-native:network/v20200701:BastionHost" }, { type: "azure-native:network/v20200801:BastionHost" }, { type: "azure-native:network/v20201101:BastionHost" }, { type: "azure-native:network/v20210201:BastionHost" }, { type: "azure-native:network/v20210301:BastionHost" }, { type: "azure-native:network/v20210501:BastionHost" }, { type: "azure-native:network/v20210801:BastionHost" }, { type: "azure-native:network/v20220101:BastionHost" }, { type: "azure-native:network/v20220501:BastionHost" }, { type: "azure-native:network/v20220701:BastionHost" }, { type: "azure-native:network/v20220901:BastionHost" }, { type: "azure-native:network/v20221101:BastionHost" }, { type: "azure-native:network/v20230201:BastionHost" }, { type: "azure-native:network/v20230401:BastionHost" }, { type: "azure-native:network/v20230501:BastionHost" }, { type: "azure-native:network/v20230601:BastionHost" }, { type: "azure-native:network/v20230901:BastionHost" }, { type: "azure-native:network/v20231101:BastionHost" }, { type: "azure-native:network/v20240101:BastionHost" }, { type: "azure-native:network/v20240301:BastionHost" }, { type: "azure-native:network/v20240501:BastionHost" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BastionHost.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BastionHost resource.
 */
export interface BastionHostArgs {
    /**
     * The name of the Bastion Host.
     */
    bastionHostName?: pulumi.Input<string>;
    /**
     * Enable/Disable Copy/Paste feature of the Bastion Host resource.
     */
    disableCopyPaste?: pulumi.Input<boolean>;
    /**
     * FQDN for the endpoint on which bastion host is accessible.
     */
    dnsName?: pulumi.Input<string>;
    /**
     * Enable/Disable File Copy feature of the Bastion Host resource.
     */
    enableFileCopy?: pulumi.Input<boolean>;
    /**
     * Enable/Disable IP Connect feature of the Bastion Host resource.
     */
    enableIpConnect?: pulumi.Input<boolean>;
    /**
     * Enable/Disable Kerberos feature of the Bastion Host resource.
     */
    enableKerberos?: pulumi.Input<boolean>;
    /**
     * Enable/Disable Shareable Link of the Bastion Host resource.
     */
    enableShareableLink?: pulumi.Input<boolean>;
    /**
     * Enable/Disable Tunneling feature of the Bastion Host resource.
     */
    enableTunneling?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * IP configuration of the Bastion Host resource.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<types.inputs.BastionHostIPConfigurationArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The scale units for the Bastion Host resource.
     */
    scaleUnits?: pulumi.Input<number>;
    /**
     * The sku of this Bastion Host.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}