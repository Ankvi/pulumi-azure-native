import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Defender for Storage resource.
 * Azure REST API version: 2022-12-01-preview.
 *
 * Other available API versions: 2024-10-01-preview.
 */
export class DefenderForStorage extends pulumi.CustomResource {
    /**
     * Get an existing DefenderForStorage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DefenderForStorage {
        return new DefenderForStorage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:DefenderForStorage';

    /**
     * Returns true if the given object is an instance of DefenderForStorage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefenderForStorage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefenderForStorage.__pulumiType;
    }

    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defender for Storage resource properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.DefenderForStorageSettingPropertiesResponse>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefenderForStorage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefenderForStorageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["settingName"] = args ? args.settingName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20221201preview:DefenderForStorage" }, { type: "azure-native:security/v20241001preview:DefenderForStorage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DefenderForStorage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DefenderForStorage resource.
 */
export interface DefenderForStorageArgs {
    /**
     * Defender for Storage resource properties.
     */
    properties?: pulumi.Input<types.inputs.DefenderForStorageSettingPropertiesArgs>;
    /**
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * Defender for Storage setting name.
     */
    settingName?: pulumi.Input<string>;
}