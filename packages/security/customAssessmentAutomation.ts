import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Custom Assessment Automation
 * Azure REST API version: 2021-07-01-preview. Prior API version in Azure Native 1.x: 2021-07-01-preview.
 */
export class CustomAssessmentAutomation extends pulumi.CustomResource {
    /**
     * Get an existing CustomAssessmentAutomation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomAssessmentAutomation {
        return new CustomAssessmentAutomation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:CustomAssessmentAutomation';

    /**
     * Returns true if the given object is an instance of CustomAssessmentAutomation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomAssessmentAutomation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomAssessmentAutomation.__pulumiType;
    }

    /**
     * The assessment metadata key used when an assessment is generated for this assessment automation.
     */
    public /*out*/ readonly assessmentKey!: pulumi.Output<string | undefined>;
    /**
     * GZip encoded KQL query representing the assessment automation results required.
     */
    public readonly compressedQuery!: pulumi.Output<string | undefined>;
    /**
     * The description to relate to the assessments generated by this assessment automation.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the assessments generated by this assessment automation.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The remediation description to relate to the assessments generated by this assessment automation.
     */
    public readonly remediationDescription!: pulumi.Output<string | undefined>;
    /**
     * The severity to relate to the assessments generated by this assessment automation.
     */
    public readonly severity!: pulumi.Output<string | undefined>;
    /**
     * Relevant cloud for the custom assessment automation.
     */
    public readonly supportedCloud!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CustomAssessmentAutomation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomAssessmentAutomationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["compressedQuery"] = args ? args.compressedQuery : undefined;
            resourceInputs["customAssessmentAutomationName"] = args ? args.customAssessmentAutomationName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["remediationDescription"] = args ? args.remediationDescription : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["supportedCloud"] = args ? args.supportedCloud : undefined;
            resourceInputs["assessmentKey"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assessmentKey"] = undefined /*out*/;
            resourceInputs["compressedQuery"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["remediationDescription"] = undefined /*out*/;
            resourceInputs["severity"] = undefined /*out*/;
            resourceInputs["supportedCloud"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20210701preview:CustomAssessmentAutomation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomAssessmentAutomation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomAssessmentAutomation resource.
 */
export interface CustomAssessmentAutomationArgs {
    /**
     * Base 64 encoded KQL query representing the assessment automation results required.
     */
    compressedQuery?: pulumi.Input<string>;
    /**
     * Name of the Custom Assessment Automation.
     */
    customAssessmentAutomationName?: pulumi.Input<string>;
    /**
     * The description to relate to the assessments generated by this assessment automation.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the assessments generated by this assessment automation.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The remediation description to relate to the assessments generated by this assessment automation.
     */
    remediationDescription?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The severity to relate to the assessments generated by this assessment automation.
     */
    severity?: pulumi.Input<string | types.enums.SeverityEnum>;
    /**
     * Relevant cloud for the custom assessment automation.
     */
    supportedCloud?: pulumi.Input<string | types.enums.SupportedCloudEnum>;
}