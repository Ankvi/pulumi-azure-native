import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The Advanced Threat Protection resource.
 *
 * Uses Azure REST API version 2019-01-01. In version 2.x of the Azure Native provider, it used API version 2019-01-01.
 *
 * Other available API versions: 2017-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AdvancedThreatProtection extends pulumi.CustomResource {
    /**
     * Get an existing AdvancedThreatProtection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AdvancedThreatProtection {
        return new AdvancedThreatProtection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:AdvancedThreatProtection';

    /**
     * Returns true if the given object is an instance of AdvancedThreatProtection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AdvancedThreatProtection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdvancedThreatProtection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Indicates whether Advanced Threat Protection is enabled.
     */
    public readonly isEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AdvancedThreatProtection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdvancedThreatProtectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            resourceInputs["isEnabled"] = args ? args.isEnabled : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["settingName"] = args ? args.settingName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20170801preview:AdvancedThreatProtection" }, { type: "azure-native:security/v20190101:AdvancedThreatProtection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AdvancedThreatProtection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AdvancedThreatProtection resource.
 */
export interface AdvancedThreatProtectionArgs {
    /**
     * Indicates whether Advanced Threat Protection is enabled.
     */
    isEnabled?: pulumi.Input<boolean>;
    /**
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * Advanced Threat Protection setting name.
     */
    settingName?: pulumi.Input<string>;
}