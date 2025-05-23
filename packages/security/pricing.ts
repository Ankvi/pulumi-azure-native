import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
 *
 * Uses Azure REST API version 2024-01-01. In version 2.x of the Azure Native provider, it used API version 2024-01-01.
 */
export class Pricing extends pulumi.CustomResource {
    /**
     * Get an existing Pricing resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Pricing {
        return new Pricing(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:Pricing';

    /**
     * Returns true if the given object is an instance of Pricing.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pricing {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pricing.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Optional. True if the plan is deprecated. If there are replacing plans they will appear in `replacedBy` property
     */
    public /*out*/ readonly deprecated!: pulumi.Output<boolean>;
    /**
     * Optional. If `pricingTier` is `Standard` then this property holds the date of the last time the `pricingTier` was set to `Standard`, when available (e.g 2023-03-01T12:42:42.1921106Z).
     */
    public /*out*/ readonly enablementTime!: pulumi.Output<string>;
    /**
     * If set to "False", it allows the descendants of this scope to override the pricing configuration set on this scope (allows setting inherited="False"). If set to "True", it prevents overrides and forces this pricing configuration on all the descendants of this scope. This field is only available for subscription-level pricing.
     */
    public readonly enforce!: pulumi.Output<string | undefined>;
    /**
     * Optional. List of extensions offered under a plan.
     */
    public readonly extensions!: pulumi.Output<types.outputs.ExtensionResponse[] | undefined>;
    /**
     * The duration left for the subscriptions free trial period - in ISO 8601 format (e.g. P3Y6M4DT12H30M5S).
     */
    public /*out*/ readonly freeTrialRemainingTime!: pulumi.Output<string>;
    /**
     * "inherited" = "True" indicates that the current scope inherits its pricing configuration from its parent. The ID of the parent scope that provides the inherited configuration is displayed in the "inheritedFrom" field. On the other hand, "inherited" = "False" indicates that the current scope has its own pricing configuration explicitly set, and does not inherit from its parent. This field is read only and available only for resource-level pricing.
     */
    public /*out*/ readonly inherited!: pulumi.Output<string>;
    /**
     * The id of the scope inherited from. "Null" if not inherited. This field is only available for resource-level pricing.
     */
    public /*out*/ readonly inheritedFrom!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Indicates whether the Defender plan is enabled on the selected scope. Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
     */
    public readonly pricingTier!: pulumi.Output<string>;
    /**
     * Optional. List of plans that replace this plan. This property exists only if this plan is deprecated.
     */
    public /*out*/ readonly replacedBy!: pulumi.Output<string[]>;
    /**
     * This field is available for subscription-level only, and reflects the coverage status of the resources under the subscription. Please note: The "pricingTier" field reflects the plan status of the subscription. However, since the plan status can also be defined at the resource level, there might be misalignment between the subscription's plan status and the resource status. This field helps indicate the coverage status of the resources.
     */
    public /*out*/ readonly resourcesCoverageStatus!: pulumi.Output<string>;
    /**
     * The sub-plan selected for a Standard pricing configuration, when more than one sub-plan is available. Each sub-plan enables a set of security features. When not specified, full plan is applied. For VirtualMachines plan, available sub plans are 'P1' & 'P2', where for resource level only 'P1' sub plan is supported.
     */
    public readonly subPlan!: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Pricing resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PricingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.pricingTier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pricingTier'");
            }
            if ((!args || args.scopeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopeId'");
            }
            resourceInputs["enforce"] = args ? args.enforce : undefined;
            resourceInputs["extensions"] = args ? args.extensions : undefined;
            resourceInputs["pricingName"] = args ? args.pricingName : undefined;
            resourceInputs["pricingTier"] = args ? args.pricingTier : undefined;
            resourceInputs["scopeId"] = args ? args.scopeId : undefined;
            resourceInputs["subPlan"] = args ? args.subPlan : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deprecated"] = undefined /*out*/;
            resourceInputs["enablementTime"] = undefined /*out*/;
            resourceInputs["freeTrialRemainingTime"] = undefined /*out*/;
            resourceInputs["inherited"] = undefined /*out*/;
            resourceInputs["inheritedFrom"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["replacedBy"] = undefined /*out*/;
            resourceInputs["resourcesCoverageStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deprecated"] = undefined /*out*/;
            resourceInputs["enablementTime"] = undefined /*out*/;
            resourceInputs["enforce"] = undefined /*out*/;
            resourceInputs["extensions"] = undefined /*out*/;
            resourceInputs["freeTrialRemainingTime"] = undefined /*out*/;
            resourceInputs["inherited"] = undefined /*out*/;
            resourceInputs["inheritedFrom"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pricingTier"] = undefined /*out*/;
            resourceInputs["replacedBy"] = undefined /*out*/;
            resourceInputs["resourcesCoverageStatus"] = undefined /*out*/;
            resourceInputs["subPlan"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20240101:Pricing" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Pricing.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Pricing resource.
 */
export interface PricingArgs {
    /**
     * If set to "False", it allows the descendants of this scope to override the pricing configuration set on this scope (allows setting inherited="False"). If set to "True", it prevents overrides and forces this pricing configuration on all the descendants of this scope. This field is only available for subscription-level pricing.
     */
    enforce?: pulumi.Input<string | types.enums.Enforce>;
    /**
     * Optional. List of extensions offered under a plan.
     */
    extensions?: pulumi.Input<pulumi.Input<types.inputs.ExtensionArgs>[]>;
    /**
     * name of the pricing configuration
     */
    pricingName?: pulumi.Input<string>;
    /**
     * Indicates whether the Defender plan is enabled on the selected scope. Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
     */
    pricingTier: pulumi.Input<string | types.enums.PricingTier>;
    /**
     * The scope id of the pricing. Valid scopes are: subscription (format: 'subscriptions/{subscriptionId}'), or a specific resource (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}) - Supported resources are (VirtualMachines)
     */
    scopeId: pulumi.Input<string>;
    /**
     * The sub-plan selected for a Standard pricing configuration, when more than one sub-plan is available. Each sub-plan enables a set of security features. When not specified, full plan is applied. For VirtualMachines plan, available sub plans are 'P1' & 'P2', where for resource level only 'P1' sub plan is supported.
     */
    subPlan?: pulumi.Input<string>;
}