import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Security assessment metadata
 *
 * Uses Azure REST API version 2019-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2019-01-01-preview.
 */
export class AssessmentsMetadataSubscription extends pulumi.CustomResource {
    /**
     * Get an existing AssessmentsMetadataSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AssessmentsMetadataSubscription {
        return new AssessmentsMetadataSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:AssessmentsMetadataSubscription';

    /**
     * Returns true if the given object is an instance of AssessmentsMetadataSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AssessmentsMetadataSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AssessmentsMetadataSubscription.__pulumiType;
    }

    /**
     * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
     */
    public readonly assessmentType!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * Azure resource ID of the policy definition that turns this assessment calculation on
     */
    public /*out*/ readonly policyDefinitionId!: pulumi.Output<string>;
    /**
     * True if this assessment is in preview release status
     */
    public readonly preview!: pulumi.Output<boolean | undefined>;
    /**
     * Human readable description of what you should do to mitigate this security issue
     */
    public readonly remediationDescription!: pulumi.Output<string | undefined>;
    /**
     * The severity level of the assessment
     */
    public readonly severity!: pulumi.Output<string>;
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
     * Create a AssessmentsMetadataSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssessmentsMetadataSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["preview"] = args ? args.preview : undefined;
            resourceInputs["remediationDescription"] = args ? args.remediationDescription : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["threats"] = args ? args.threats : undefined;
            resourceInputs["userImpact"] = args ? args.userImpact : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyDefinitionId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assessmentType"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["categories"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["implementationEffort"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyDefinitionId"] = undefined /*out*/;
            resourceInputs["preview"] = undefined /*out*/;
            resourceInputs["remediationDescription"] = undefined /*out*/;
            resourceInputs["severity"] = undefined /*out*/;
            resourceInputs["threats"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userImpact"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20190101preview:AssessmentsMetadataSubscription" }, { type: "azure-native:security/v20200101:AssessmentsMetadataSubscription" }, { type: "azure-native:security/v20210601:AssessmentMetadataInSubscription" }, { type: "azure-native:security/v20210601:AssessmentsMetadataSubscription" }, { type: "azure-native:security:AssessmentMetadataInSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AssessmentsMetadataSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AssessmentsMetadataSubscription resource.
 */
export interface AssessmentsMetadataSubscriptionArgs {
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
     * True if this assessment is in preview release status
     */
    preview?: pulumi.Input<boolean>;
    /**
     * Human readable description of what you should do to mitigate this security issue
     */
    remediationDescription?: pulumi.Input<string>;
    /**
     * The severity level of the assessment
     */
    severity: pulumi.Input<string | types.enums.Severity>;
    threats?: pulumi.Input<pulumi.Input<string | types.enums.Threats>[]>;
    /**
     * The user impact of the assessment
     */
    userImpact?: pulumi.Input<string | types.enums.UserImpact>;
}