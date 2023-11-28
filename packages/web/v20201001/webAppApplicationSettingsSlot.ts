import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * String dictionary resource.
 */
export class WebAppApplicationSettingsSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppApplicationSettingsSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppApplicationSettingsSlot {
        return new WebAppApplicationSettingsSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20201001:WebAppApplicationSettingsSlot';

    /**
     * Returns true if the given object is an instance of WebAppApplicationSettingsSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppApplicationSettingsSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppApplicationSettingsSlot.__pulumiType;
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
     * Settings.
     */
    public readonly properties!: pulumi.Output<{[key: string]: string}>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppApplicationSettingsSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppApplicationSettingsSlotArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20150801:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20160801:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20180201:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20181101:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20190801:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20200601:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20200901:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20201201:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20210101:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20210115:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20210201:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20210301:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20220301:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20220901:WebAppApplicationSettingsSlot" }, { type: "azure-native:web/v20230101:WebAppApplicationSettingsSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppApplicationSettingsSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppApplicationSettingsSlot resource.
 */
export interface WebAppApplicationSettingsSlotArgs {
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Settings.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will update the application settings for the production slot.
     */
    slot: pulumi.Input<string>;
}
