import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An HCX Enterprise Site resource
 * Azure REST API version: 2022-05-01. Prior API version in Azure Native 1.x: 2020-03-20.
 *
 * Other available API versions: 2023-03-01.
 */
export class HcxEnterpriseSite extends pulumi.CustomResource {
    /**
     * Get an existing HcxEnterpriseSite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HcxEnterpriseSite {
        return new HcxEnterpriseSite(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:HcxEnterpriseSite';

    /**
     * Returns true if the given object is an instance of HcxEnterpriseSite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HcxEnterpriseSite {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HcxEnterpriseSite.__pulumiType;
    }

    /**
     * The activation key
     */
    public /*out*/ readonly activationKey!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the HCX Enterprise Site
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a HcxEnterpriseSite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HcxEnterpriseSiteArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["hcxEnterpriseSiteName"] = args ? args.hcxEnterpriseSiteName : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["activationKey"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activationKey"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20200320:HcxEnterpriseSite" }, { type: "azure-native:avs/v20200717preview:HcxEnterpriseSite" }, { type: "azure-native:avs/v20210101preview:HcxEnterpriseSite" }, { type: "azure-native:avs/v20210601:HcxEnterpriseSite" }, { type: "azure-native:avs/v20211201:HcxEnterpriseSite" }, { type: "azure-native:avs/v20220501:HcxEnterpriseSite" }, { type: "azure-native:avs/v20230301:HcxEnterpriseSite" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HcxEnterpriseSite.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HcxEnterpriseSite resource.
 */
export interface HcxEnterpriseSiteArgs {
    /**
     * Name of the HCX Enterprise Site in the private cloud
     */
    hcxEnterpriseSiteName?: pulumi.Input<string>;
    /**
     * The name of the private cloud.
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
