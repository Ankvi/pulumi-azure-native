import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Static Site Linked Backend ARM resource.
 */
export class StaticSiteLinkedBackend extends pulumi.CustomResource {
    /**
     * Get an existing StaticSiteLinkedBackend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StaticSiteLinkedBackend {
        return new StaticSiteLinkedBackend(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20220901:StaticSiteLinkedBackend';

    /**
     * Returns true if the given object is an instance of StaticSiteLinkedBackend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StaticSiteLinkedBackend {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StaticSiteLinkedBackend.__pulumiType;
    }

    /**
     * The resource id of the backend linked to the static site
     */
    public readonly backendResourceId!: pulumi.Output<string | undefined>;
    /**
     * The date and time on which the backend was linked to the static site.
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the linking process.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The region of the backend linked to the static site
     */
    public readonly region!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StaticSiteLinkedBackend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticSiteLinkedBackendArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["backendResourceId"] = args ? args.backendResourceId : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["linkedBackendName"] = args ? args.linkedBackendName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["backendResourceId"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:StaticSiteLinkedBackend" }, { type: "azure-native:web/v20220301:StaticSiteLinkedBackend" }, { type: "azure-native:web/v20230101:StaticSiteLinkedBackend" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StaticSiteLinkedBackend.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StaticSiteLinkedBackend resource.
 */
export interface StaticSiteLinkedBackendArgs {
    /**
     * The resource id of the backend linked to the static site
     */
    backendResourceId?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the backend to link to the static site
     */
    linkedBackendName?: pulumi.Input<string>;
    /**
     * Name of the static site
     */
    name: pulumi.Input<string>;
    /**
     * The region of the backend linked to the static site
     */
    region?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}