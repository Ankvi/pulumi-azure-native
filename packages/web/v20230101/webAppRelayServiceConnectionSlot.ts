import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Hybrid Connection for an App Service app.
 */
export class WebAppRelayServiceConnectionSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppRelayServiceConnectionSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppRelayServiceConnectionSlot {
        return new WebAppRelayServiceConnectionSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20230101:WebAppRelayServiceConnectionSlot';

    /**
     * Returns true if the given object is an instance of WebAppRelayServiceConnectionSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppRelayServiceConnectionSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppRelayServiceConnectionSlot.__pulumiType;
    }

    public readonly biztalkUri!: pulumi.Output<string | undefined>;
    public readonly entityConnectionString!: pulumi.Output<string | undefined>;
    public readonly entityName!: pulumi.Output<string | undefined>;
    public readonly hostname!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number | undefined>;
    public readonly resourceConnectionString!: pulumi.Output<string | undefined>;
    public readonly resourceType!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppRelayServiceConnectionSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppRelayServiceConnectionSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.slot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slot'");
            }
            resourceInputs["biztalkUri"] = args ? args.biztalkUri : undefined;
            resourceInputs["entityConnectionString"] = args ? args.entityConnectionString : undefined;
            resourceInputs["entityName"] = args ? args.entityName : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["resourceConnectionString"] = args ? args.resourceConnectionString : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["biztalkUri"] = undefined /*out*/;
            resourceInputs["entityConnectionString"] = undefined /*out*/;
            resourceInputs["entityName"] = undefined /*out*/;
            resourceInputs["hostname"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["resourceConnectionString"] = undefined /*out*/;
            resourceInputs["resourceType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20150801:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20160801:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20180201:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20181101:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20190801:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20200601:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20200901:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20201001:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20201201:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20210101:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20210115:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20210201:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20210301:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20220301:WebAppRelayServiceConnectionSlot" }, { type: "azure-native:web/v20220901:WebAppRelayServiceConnectionSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppRelayServiceConnectionSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppRelayServiceConnectionSlot resource.
 */
export interface WebAppRelayServiceConnectionSlotArgs {
    biztalkUri?: pulumi.Input<string>;
    entityConnectionString?: pulumi.Input<string>;
    entityName?: pulumi.Input<string>;
    hostname?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    resourceConnectionString?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    resourceType?: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will create or update a hybrid connection for the production slot.
     */
    slot: pulumi.Input<string>;
}