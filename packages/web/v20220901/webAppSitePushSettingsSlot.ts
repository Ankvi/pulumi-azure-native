import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Push settings for the App.
 */
export class WebAppSitePushSettingsSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSitePushSettingsSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSitePushSettingsSlot {
        return new WebAppSitePushSettingsSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20220901:WebAppSitePushSettingsSlot';

    /**
     * Returns true if the given object is an instance of WebAppSitePushSettingsSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppSitePushSettingsSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppSitePushSettingsSlot.__pulumiType;
    }

    /**
     * Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
     */
    public readonly dynamicTagsJson!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a flag indicating whether the Push endpoint is enabled.
     */
    public readonly isPushEnabled!: pulumi.Output<boolean>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
     */
    public readonly tagWhitelistJson!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
     * Tags can consist of alphanumeric characters and the following:
     * '_', '@', '#', '.', ':', '-'. 
     * Validation should be performed at the PushRequestHandler.
     */
    public readonly tagsRequiringAuth!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppSitePushSettingsSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSitePushSettingsSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.isPushEnabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'isPushEnabled'");
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
            resourceInputs["dynamicTagsJson"] = args ? args.dynamicTagsJson : undefined;
            resourceInputs["isPushEnabled"] = args ? args.isPushEnabled : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["tagWhitelistJson"] = args ? args.tagWhitelistJson : undefined;
            resourceInputs["tagsRequiringAuth"] = args ? args.tagsRequiringAuth : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dynamicTagsJson"] = undefined /*out*/;
            resourceInputs["isPushEnabled"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tagWhitelistJson"] = undefined /*out*/;
            resourceInputs["tagsRequiringAuth"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20160801:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20180201:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20181101:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20190801:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20200601:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20200901:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20201001:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20201201:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20210101:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20210115:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20210201:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20210301:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20220301:WebAppSitePushSettingsSlot" }, { type: "azure-native:web/v20230101:WebAppSitePushSettingsSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppSitePushSettingsSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppSitePushSettingsSlot resource.
 */
export interface WebAppSitePushSettingsSlotArgs {
    /**
     * Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
     */
    dynamicTagsJson?: pulumi.Input<string>;
    /**
     * Gets or sets a flag indicating whether the Push endpoint is enabled.
     */
    isPushEnabled: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of web app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of web app slot. If not specified then will default to production slot.
     */
    slot: pulumi.Input<string>;
    /**
     * Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
     */
    tagWhitelistJson?: pulumi.Input<string>;
    /**
     * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
     * Tags can consist of alphanumeric characters and the following:
     * '_', '@', '#', '.', ':', '-'. 
     * Validation should be performed at the PushRequestHandler.
     */
    tagsRequiringAuth?: pulumi.Input<string>;
}