import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * State of the myscope setting.
 *
 * Uses Azure REST API version 2019-11-01. In version 2.x of the Azure Native provider, it used API version 2019-11-01.
 */
export class Setting extends pulumi.CustomResource {
    /**
     * Get an existing Setting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Setting {
        return new Setting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:costmanagement:Setting';

    /**
     * Returns true if the given object is an instance of Setting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Setting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Setting.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Array of scopes with additional details used by Cost Management in the Azure portal.
     */
    public readonly cache!: pulumi.Output<types.outputs.SettingsPropertiesResponseCache[] | undefined>;
    /**
     * Resource kind.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Sets the default scope the current user will see when they sign into Azure Cost Management in the Azure portal.
     */
    public readonly scope!: pulumi.Output<string>;
    /**
     * Indicates what scope Cost Management in the Azure portal should default to. Allowed values: LastUsed.
     */
    public readonly startOn!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Setting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["cache"] = args ? args.cache : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["settingName"] = args ? args.settingName : undefined;
            resourceInputs["startOn"] = args ? args.startOn : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cache"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["startOn"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement/v20191101:Setting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Setting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Setting resource.
 */
export interface SettingArgs {
    /**
     * Array of scopes with additional details used by Cost Management in the Azure portal.
     */
    cache?: pulumi.Input<pulumi.Input<types.inputs.SettingsPropertiesCacheArgs>[]>;
    /**
     * Sets the default scope the current user will see when they sign into Azure Cost Management in the Azure portal.
     */
    scope: pulumi.Input<string>;
    /**
     * Name of the setting. Allowed values: myscope
     */
    settingName?: pulumi.Input<string>;
    /**
     * Indicates what scope Cost Management in the Azure portal should default to. Allowed values: LastUsed.
     */
    startOn?: pulumi.Input<string>;
}