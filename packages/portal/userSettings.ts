import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response to get user settings
 *
 * Uses Azure REST API version 2018-10-01. In version 2.x of the Azure Native provider, it used API version 2018-10-01.
 */
export class UserSettings extends pulumi.CustomResource {
    /**
     * Get an existing UserSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): UserSettings {
        return new UserSettings(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:portal:UserSettings';

    /**
     * Returns true if the given object is an instance of UserSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserSettings.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The cloud shell user settings properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.UserPropertiesResponse>;

    /**
     * Create a UserSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserSettingsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["userSettingsName"] = args ? args.userSettingsName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:portal/v20181001:UserSettings" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(UserSettings.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a UserSettings resource.
 */
export interface UserSettingsArgs {
    /**
     * The cloud shell user settings properties.
     */
    properties: pulumi.Input<types.inputs.UserPropertiesArgs>;
    /**
     * The name of the user settings
     */
    userSettingsName?: pulumi.Input<string>;
}