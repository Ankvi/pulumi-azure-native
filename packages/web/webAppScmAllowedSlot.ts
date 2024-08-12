import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Publishing Credentials Policies parameters.
 * Azure REST API version: 2023-12-01.
 *
 * Other available API versions: 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01.
 */
export class WebAppScmAllowedSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppScmAllowedSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppScmAllowedSlot {
        return new WebAppScmAllowedSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppScmAllowedSlot';

    /**
     * Returns true if the given object is an instance of WebAppScmAllowedSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppScmAllowedSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppScmAllowedSlot.__pulumiType;
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
     * Create a WebAppScmAllowedSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppScmAllowedSlotArgs, opts?: pulumi.CustomResourceOptions) {
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
            if ((!args || args.slot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slot'");
            }
            resourceInputs["allow"] = args ? args.allow : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allow"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20201201:WebAppScmAllowedSlot" }, { type: "azure-native:web/v20210101:WebAppScmAllowedSlot" }, { type: "azure-native:web/v20210115:WebAppScmAllowedSlot" }, { type: "azure-native:web/v20210201:WebAppScmAllowedSlot" }, { type: "azure-native:web/v20210301:WebAppScmAllowedSlot" }, { type: "azure-native:web/v20220301:WebAppScmAllowedSlot" }, { type: "azure-native:web/v20220901:WebAppScmAllowedSlot" }, { type: "azure-native:web/v20230101:WebAppScmAllowedSlot" }, { type: "azure-native:web/v20231201:WebAppScmAllowedSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppScmAllowedSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppScmAllowedSlot resource.
 */
export interface WebAppScmAllowedSlotArgs {
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
    slot: pulumi.Input<string>;
}