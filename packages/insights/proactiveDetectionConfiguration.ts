import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A ProactiveDetection configuration definition.
 *
 * Uses Azure REST API version 2018-05-01-preview. In version 1.x of the Azure Native provider, it used API version 2015-05-01.
 *
 * Other available API versions: 2015-05-01.
 */
export class ProactiveDetectionConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing ProactiveDetectionConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProactiveDetectionConfiguration {
        return new ProactiveDetectionConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:insights:ProactiveDetectionConfiguration';

    /**
     * Returns true if the given object is an instance of ProactiveDetectionConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProactiveDetectionConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProactiveDetectionConfiguration.__pulumiType;
    }

    /**
     * Custom email addresses for this rule notifications
     */
    public readonly customEmails!: pulumi.Output<string[] | undefined>;
    /**
     * A flag that indicates whether this rule is enabled by the user
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The last time this rule was updated
     */
    public /*out*/ readonly lastUpdatedTime!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The rule name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Static definitions of the ProactiveDetection configuration rule (same values for all components).
     */
    public readonly ruleDefinitions!: pulumi.Output<types.outputs.ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesResponseRuleDefinitions | undefined>;
    /**
     * A flag that indicated whether notifications on this rule should be sent to subscription owners
     */
    public readonly sendEmailsToSubscriptionOwners!: pulumi.Output<boolean | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProactiveDetectionConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProactiveDetectionConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["configurationId"] = args ? args.configurationId : undefined;
            resourceInputs["customEmails"] = args ? args.customEmails : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["ruleDefinitions"] = args ? args.ruleDefinitions : undefined;
            resourceInputs["sendEmailsToSubscriptionOwners"] = args ? args.sendEmailsToSubscriptionOwners : undefined;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["customEmails"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["ruleDefinitions"] = undefined /*out*/;
            resourceInputs["sendEmailsToSubscriptionOwners"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20150501:ProactiveDetectionConfiguration" }, { type: "azure-native:insights/v20180501preview:ProactiveDetectionConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProactiveDetectionConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProactiveDetectionConfiguration resource.
 */
export interface ProactiveDetectionConfigurationArgs {
    /**
     * The ProactiveDetection configuration ID. This is unique within a Application Insights component.
     */
    configurationId?: pulumi.Input<string>;
    /**
     * Custom email addresses for this rule notifications
     */
    customEmails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A flag that indicates whether this rule is enabled by the user
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Azure resource name
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Static definitions of the ProactiveDetection configuration rule (same values for all components).
     */
    ruleDefinitions?: pulumi.Input<types.inputs.ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitionsArgs>;
    /**
     * A flag that indicated whether notifications on this rule should be sent to subscription owners
     */
    sendEmailsToSubscriptionOwners?: pulumi.Input<boolean>;
}