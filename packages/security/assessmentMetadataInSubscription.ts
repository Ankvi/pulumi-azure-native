import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Security assessment metadata response
 *
 * Uses Azure REST API version 2021-06-01. In version 1.x of the Azure Native provider, it used API version 2020-01-01.
 */
export class AssessmentMetadataInSubscription extends pulumi.CustomResource {
    /**
     * Get an existing AssessmentMetadataInSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AssessmentMetadataInSubscription {
        return new AssessmentMetadataInSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:AssessmentMetadataInSubscription';

    /**
     * Returns true if the given object is an instance of AssessmentMetadataInSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AssessmentMetadataInSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AssessmentMetadataInSubscription.__pulumiType;
    }

    /**
     * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
     */
    public readonly assessmentType!: pulumi.Output<string>;
    public readonly categories!: pulumi.Output<string[] | undefined>;
    /**
     * Human readable description of the assessment
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * User friendly display name of the assessment
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The implementation effort required to remediate this assessment
     */
    public readonly implementationEffort!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Describes the partner that created the assessment
     */
    public readonly partnerData!: pulumi.Output<types.outputs.SecurityAssessmentMetadataPartnerDataResponse | undefined>;
    public readonly plannedDeprecationDate!: pulumi.Output<string | undefined>;
    /**
     * Azure resource ID of the policy definition that turns this assessment calculation on
     */
    public /*out*/ readonly policyDefinitionId!: pulumi.Output<string>;
    /**
     * True if this assessment is in preview release status
     */
    public readonly preview!: pulumi.Output<boolean | undefined>;
    public readonly publishDates!: pulumi.Output<types.outputs.SecurityAssessmentMetadataPropertiesResponseResponsePublishDates | undefined>;
    /**
     * Human readable description of what you should do to mitigate this security issue
     */
    public readonly remediationDescription!: pulumi.Output<string | undefined>;
    /**
     * The severity level of the assessment
     */
    public readonly severity!: pulumi.Output<string>;
    public readonly tactics!: pulumi.Output<string[] | undefined>;
    public readonly techniques!: pulumi.Output<string[] | undefined>;
    public readonly threats!: pulumi.Output<string[] | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The user impact of the assessment
     */
    public readonly userImpact!: pulumi.Output<string | undefined>;

    /**
     * Create a AssessmentMetadataInSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssessmentMetadataInSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.assessmentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'assessmentType'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.severity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'severity'");
            }
            resourceInputs["assessmentMetadataName"] = args ? args.assessmentMetadataName : undefined;
            resourceInputs["assessmentType"] = args ? args.assessmentType : undefined;
            resourceInputs["categories"] = args ? args.categories : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["implementationEffort"] = args ? args.implementationEffort : undefined;
            resourceInputs["partnerData"] = args ? args.partnerData : undefined;
            resourceInputs["plannedDeprecationDate"] = args ? args.plannedDeprecationDate : undefined;
            resourceInputs["preview"] = args ? args.preview : undefined;
            resourceInputs["publishDates"] = args ? args.publishDates : undefined;
            resourceInputs["remediationDescription"] = args ? args.remediationDescription : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["tactics"] = args ? args.tactics : undefined;
            resourceInputs["techniques"] = args ? args.techniques : undefined;
            resourceInputs["threats"] = args ? args.threats : undefined;
            resourceInputs["userImpact"] = args ? args.userImpact : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyDefinitionId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assessmentType"] = undefined /*out*/;
            resourceInputs["categories"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["implementationEffort"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerData"] = undefined /*out*/;
            resourceInputs["plannedDeprecationDate"] = undefined /*out*/;
            resourceInputs["policyDefinitionId"] = undefined /*out*/;
            resourceInputs["preview"] = undefined /*out*/;
            resourceInputs["publishDates"] = undefined /*out*/;
            resourceInputs["remediationDescription"] = undefined /*out*/;
            resourceInputs["severity"] = undefined /*out*/;
            resourceInputs["tactics"] = undefined /*out*/;
            resourceInputs["techniques"] = undefined /*out*/;
            resourceInputs["threats"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userImpact"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20190101preview:AssessmentMetadataInSubscription" }, { type: "azure-native:security/v20200101:AssessmentMetadataInSubscription" }, { type: "azure-native:security/v20210601:AssessmentMetadataInSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AssessmentMetadataInSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AssessmentMetadataInSubscription resource.
 */
export interface AssessmentMetadataInSubscriptionArgs {
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    assessmentMetadataName?: pulumi.Input<string>;
    /**
     * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
     */
    assessmentType: pulumi.Input<string | types.enums.AssessmentType>;
    categories?: pulumi.Input<pulumi.Input<string | types.enums.Categories>[]>;
    /**
     * Human readable description of the assessment
     */
    description?: pulumi.Input<string>;
    /**
     * User friendly display name of the assessment
     */
    displayName: pulumi.Input<string>;
    /**
     * The implementation effort required to remediate this assessment
     */
    implementationEffort?: pulumi.Input<string | types.enums.ImplementationEffort>;
    /**
     * Describes the partner that created the assessment
     */
    partnerData?: pulumi.Input<types.inputs.SecurityAssessmentMetadataPartnerDataArgs>;
    plannedDeprecationDate?: pulumi.Input<string>;
    /**
     * True if this assessment is in preview release status
     */
    preview?: pulumi.Input<boolean>;
    publishDates?: pulumi.Input<types.inputs.SecurityAssessmentMetadataPropertiesResponsePublishDatesArgs>;
    /**
     * Human readable description of what you should do to mitigate this security issue
     */
    remediationDescription?: pulumi.Input<string>;
    /**
     * The severity level of the assessment
     */
    severity: pulumi.Input<string | types.enums.Severity>;
    tactics?: pulumi.Input<pulumi.Input<string | types.enums.Tactics>[]>;
    techniques?: pulumi.Input<pulumi.Input<string | types.enums.Techniques>[]>;
    threats?: pulumi.Input<pulumi.Input<string | types.enums.Threats>[]>;
    /**
     * The user impact of the assessment
     */
    userImpact?: pulumi.Input<string | types.enums.UserImpact>;
}