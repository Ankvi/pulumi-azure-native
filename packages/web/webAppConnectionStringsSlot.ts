import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * String dictionary resource.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01.
 */
export class WebAppConnectionStringsSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppConnectionStringsSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppConnectionStringsSlot {
        return new WebAppConnectionStringsSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppConnectionStringsSlot';

    /**
     * Returns true if the given object is an instance of WebAppConnectionStringsSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppConnectionStringsSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppConnectionStringsSlot.__pulumiType;
    }

    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Connection strings.
     */
    public readonly properties!: pulumi.Output<{[key: string]: types.outputs.ConnStringValueTypePairResponse}>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppConnectionStringsSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppConnectionStringsSlotArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20160801:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20180201:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20181101:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20190801:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20200601:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20200901:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20201001:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20201201:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20210101:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20210115:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20210201:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20210301:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20220301:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20220901:WebAppConnectionStringsSlot" }, { type: "azure-native:web/v20230101:WebAppConnectionStringsSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppConnectionStringsSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppConnectionStringsSlot resource.
 */
export interface WebAppConnectionStringsSlotArgs {
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Connection strings.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ConnStringValueTypePairArgs>}>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will update the connection settings for the production slot.
     */
    slot: pulumi.Input<string>;
}
