import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Static Site Custom Domain Overview ARM resource.
 */
export class StaticSiteCustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing StaticSiteCustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StaticSiteCustomDomain {
        return new StaticSiteCustomDomain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20220901:StaticSiteCustomDomain';

    /**
     * Returns true if the given object is an instance of StaticSiteCustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StaticSiteCustomDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StaticSiteCustomDomain.__pulumiType;
    }

    /**
     * The date and time on which the custom domain was created for the static site.
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * The domain name for the static site custom domain.
     */
    public readonly domainName!: pulumi.Output<string>;
    public /*out*/ readonly errorMessage!: pulumi.Output<string>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The status of the custom domain
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The TXT record validation token
     */
    public /*out*/ readonly validationToken!: pulumi.Output<string>;

    /**
     * Create a StaticSiteCustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticSiteCustomDomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["validationMethod"] = (args ? args.validationMethod : undefined) ?? "cname-delegation";
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationToken"] = undefined /*out*/;
        } else {
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationToken"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:StaticSiteCustomDomain" }, { type: "azure-native:web/v20201201:StaticSiteCustomDomain" }, { type: "azure-native:web/v20210101:StaticSiteCustomDomain" }, { type: "azure-native:web/v20210115:StaticSiteCustomDomain" }, { type: "azure-native:web/v20210201:StaticSiteCustomDomain" }, { type: "azure-native:web/v20210301:StaticSiteCustomDomain" }, { type: "azure-native:web/v20220301:StaticSiteCustomDomain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StaticSiteCustomDomain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StaticSiteCustomDomain resource.
 */
export interface StaticSiteCustomDomainArgs {
    /**
     * The custom domain to create.
     */
    domainName?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Validation method for adding a custom domain
     */
    validationMethod?: pulumi.Input<string>;
}
