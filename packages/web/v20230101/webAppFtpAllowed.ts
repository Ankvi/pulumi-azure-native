import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Publishing Credentials Policies parameters.
 */
export class WebAppFtpAllowed extends pulumi.CustomResource {
    /**
     * Get an existing WebAppFtpAllowed resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppFtpAllowed {
        return new WebAppFtpAllowed(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20230101:WebAppFtpAllowed';

    /**
     * Returns true if the given object is an instance of WebAppFtpAllowed.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppFtpAllowed {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppFtpAllowed.__pulumiType;
    }

    /**
     * <code>true</code> to allow access to a publishing method; otherwise, <code>false</code>.
     */
    public readonly allow!: pulumi.Output<boolean>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppFtpAllowed resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppFtpAllowedArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.allow === undefined) && !opts.urn) {
                throw new Error("Missing required property 'allow'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allow"] = args ? args.allow : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allow"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppFtpAllowed" }, { type: "azure-native:web/v20190801:WebAppFtpAllowed" }, { type: "azure-native:web/v20200601:WebAppFtpAllowed" }, { type: "azure-native:web/v20200901:WebAppFtpAllowed" }, { type: "azure-native:web/v20201001:WebAppFtpAllowed" }, { type: "azure-native:web/v20201201:WebAppFtpAllowed" }, { type: "azure-native:web/v20210101:WebAppFtpAllowed" }, { type: "azure-native:web/v20210115:WebAppFtpAllowed" }, { type: "azure-native:web/v20210201:WebAppFtpAllowed" }, { type: "azure-native:web/v20210301:WebAppFtpAllowed" }, { type: "azure-native:web/v20220301:WebAppFtpAllowed" }, { type: "azure-native:web/v20220901:WebAppFtpAllowed" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppFtpAllowed.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppFtpAllowed resource.
 */
export interface WebAppFtpAllowedArgs {
    /**
     * <code>true</code> to allow access to a publishing method; otherwise, <code>false</code>.
     */
    allow: pulumi.Input<boolean>;
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
}