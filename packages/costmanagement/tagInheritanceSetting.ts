import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Tag Inheritance Setting definition.
 *
 * Uses Azure REST API version 2024-08-01. In version 2.x of the Azure Native provider, it used API version 2022-10-05-preview.
 */
export class TagInheritanceSetting extends pulumi.CustomResource {
    /**
     * Get an existing TagInheritanceSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TagInheritanceSetting {
        return new TagInheritanceSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:costmanagement:TagInheritanceSetting';

    /**
     * Returns true if the given object is an instance of TagInheritanceSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagInheritanceSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagInheritanceSetting.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Specifies the kind of settings.
     * Expected value is 'taginheritance'.
     */
    public readonly kind!: pulumi.Output<"taginheritance">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The properties of the tag inheritance setting.
     */
    public readonly properties!: pulumi.Output<types.outputs.TagInheritancePropertiesResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a TagInheritanceSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagInheritanceSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["kind"] = "taginheritance";
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement/v20221001preview:TagInheritanceSetting" }, { type: "azure-native:costmanagement/v20221005preview:TagInheritanceSetting" }, { type: "azure-native:costmanagement/v20230801:TagInheritanceSetting" }, { type: "azure-native:costmanagement/v20230901:TagInheritanceSetting" }, { type: "azure-native:costmanagement/v20231101:TagInheritanceSetting" }, { type: "azure-native:costmanagement/v20240801:TagInheritanceSetting" }, { type: "azure-native:costmanagement/v20241001preview:TagInheritanceSetting" }, { type: "azure-native:costmanagement/v20250301:TagInheritanceSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TagInheritanceSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TagInheritanceSetting resource.
 */
export interface TagInheritanceSettingArgs {
    /**
     * Specifies the kind of settings.
     * Expected value is 'taginheritance'.
     */
    kind: pulumi.Input<"taginheritance">;
    /**
     * The properties of the tag inheritance setting.
     */
    properties?: pulumi.Input<types.inputs.TagInheritancePropertiesArgs>;
    /**
     * The scope associated with this setting. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billing profile scope.
     */
    scope: pulumi.Input<string>;
    /**
     * Setting type.
     */
    type?: pulumi.Input<string>;
}