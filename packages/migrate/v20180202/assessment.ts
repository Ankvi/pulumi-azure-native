import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * An assessment created for a group in the Migration project.
 */
export class Assessment extends pulumi.CustomResource {
    /**
     * Get an existing Assessment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Assessment {
        return new Assessment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate/v20180202:Assessment';

    /**
     * Returns true if the given object is an instance of Assessment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Assessment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Assessment.__pulumiType;
    }

    /**
     * AHUB discount on windows virtual machines.
     */
    public readonly azureHybridUseBenefit!: pulumi.Output<string>;
    /**
     * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
     */
    public readonly azureLocation!: pulumi.Output<string>;
    /**
     * Offer code according to which cost estimation is done.
     */
    public readonly azureOfferCode!: pulumi.Output<string>;
    /**
     * Pricing tier for Size evaluation.
     */
    public readonly azurePricingTier!: pulumi.Output<string>;
    /**
     * Storage Redundancy type offered by Azure.
     */
    public readonly azureStorageRedundancy!: pulumi.Output<string>;
    /**
     * Confidence rating percentage for assessment. Can be in the range [0, 100].
     */
    public /*out*/ readonly confidenceRatingInPercentage!: pulumi.Output<number>;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    /**
     * Currency to report prices in.
     */
    public readonly currency!: pulumi.Output<string>;
    /**
     * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
     */
    public readonly discountPercentage!: pulumi.Output<number>;
    /**
     * For optimistic concurrency control.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    public /*out*/ readonly monthlyBandwidthCost!: pulumi.Output<number>;
    /**
     * Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    public /*out*/ readonly monthlyComputeCost!: pulumi.Output<number>;
    /**
     * Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    public /*out*/ readonly monthlyStorageCost!: pulumi.Output<number>;
    /**
     * Unique name of an assessment.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Number of assessed machines part of this assessment.
     */
    public /*out*/ readonly numberOfMachines!: pulumi.Output<number>;
    /**
     * Percentile of performance data used to recommend Azure size.
     */
    public readonly percentile!: pulumi.Output<string>;
    /**
     * Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format.
     */
    public /*out*/ readonly pricesTimestamp!: pulumi.Output<string>;
    /**
     * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
     */
    public readonly scalingFactor!: pulumi.Output<number>;
    /**
     * Assessment sizing criterion.
     */
    public readonly sizingCriterion!: pulumi.Output<string>;
    /**
     * User configurable setting that describes the status of the assessment.
     */
    public readonly stage!: pulumi.Output<string>;
    /**
     * Whether the assessment has been created and is valid.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Time range of performance data used to recommend a size.
     */
    public readonly timeRange!: pulumi.Output<string>;
    /**
     * Type of the object = [Microsoft.Migrate/projects/groups/assessments].
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601 format.
     */
    public /*out*/ readonly updatedTimestamp!: pulumi.Output<string>;

    /**
     * Create a Assessment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssessmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.azureHybridUseBenefit === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azureHybridUseBenefit'");
            }
            if ((!args || args.azureLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azureLocation'");
            }
            if ((!args || args.azureOfferCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azureOfferCode'");
            }
            if ((!args || args.azurePricingTier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azurePricingTier'");
            }
            if ((!args || args.azureStorageRedundancy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azureStorageRedundancy'");
            }
            if ((!args || args.currency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'currency'");
            }
            if ((!args || args.discountPercentage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'discountPercentage'");
            }
            if ((!args || args.groupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupName'");
            }
            if ((!args || args.percentile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'percentile'");
            }
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scalingFactor === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scalingFactor'");
            }
            if ((!args || args.sizingCriterion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sizingCriterion'");
            }
            if ((!args || args.stage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stage'");
            }
            if ((!args || args.timeRange === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeRange'");
            }
            resourceInputs["assessmentName"] = args ? args.assessmentName : undefined;
            resourceInputs["azureHybridUseBenefit"] = args ? args.azureHybridUseBenefit : undefined;
            resourceInputs["azureLocation"] = args ? args.azureLocation : undefined;
            resourceInputs["azureOfferCode"] = args ? args.azureOfferCode : undefined;
            resourceInputs["azurePricingTier"] = args ? args.azurePricingTier : undefined;
            resourceInputs["azureStorageRedundancy"] = args ? args.azureStorageRedundancy : undefined;
            resourceInputs["currency"] = args ? args.currency : undefined;
            resourceInputs["discountPercentage"] = args ? args.discountPercentage : undefined;
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["percentile"] = args ? args.percentile : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scalingFactor"] = args ? args.scalingFactor : undefined;
            resourceInputs["sizingCriterion"] = args ? args.sizingCriterion : undefined;
            resourceInputs["stage"] = args ? args.stage : undefined;
            resourceInputs["timeRange"] = args ? args.timeRange : undefined;
            resourceInputs["confidenceRatingInPercentage"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["monthlyBandwidthCost"] = undefined /*out*/;
            resourceInputs["monthlyComputeCost"] = undefined /*out*/;
            resourceInputs["monthlyStorageCost"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfMachines"] = undefined /*out*/;
            resourceInputs["pricesTimestamp"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        } else {
            resourceInputs["azureHybridUseBenefit"] = undefined /*out*/;
            resourceInputs["azureLocation"] = undefined /*out*/;
            resourceInputs["azureOfferCode"] = undefined /*out*/;
            resourceInputs["azurePricingTier"] = undefined /*out*/;
            resourceInputs["azureStorageRedundancy"] = undefined /*out*/;
            resourceInputs["confidenceRatingInPercentage"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["currency"] = undefined /*out*/;
            resourceInputs["discountPercentage"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["monthlyBandwidthCost"] = undefined /*out*/;
            resourceInputs["monthlyComputeCost"] = undefined /*out*/;
            resourceInputs["monthlyStorageCost"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfMachines"] = undefined /*out*/;
            resourceInputs["percentile"] = undefined /*out*/;
            resourceInputs["pricesTimestamp"] = undefined /*out*/;
            resourceInputs["scalingFactor"] = undefined /*out*/;
            resourceInputs["sizingCriterion"] = undefined /*out*/;
            resourceInputs["stage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["timeRange"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20171111preview:Assessment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Assessment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Assessment resource.
 */
export interface AssessmentArgs {
    /**
     * Unique name of an assessment within a project.
     */
    assessmentName?: pulumi.Input<string>;
    /**
     * AHUB discount on windows virtual machines.
     */
    azureHybridUseBenefit: pulumi.Input<string | types.enums.v20180202.AzureHybridUseBenefit>;
    /**
     * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
     */
    azureLocation: pulumi.Input<string | types.enums.v20180202.AzureLocation>;
    /**
     * Offer code according to which cost estimation is done.
     */
    azureOfferCode: pulumi.Input<string | types.enums.v20180202.AzureOfferCode>;
    /**
     * Pricing tier for Size evaluation.
     */
    azurePricingTier: pulumi.Input<string | types.enums.v20180202.AzurePricingTier>;
    /**
     * Storage Redundancy type offered by Azure.
     */
    azureStorageRedundancy: pulumi.Input<string | types.enums.v20180202.AzureStorageRedundancy>;
    /**
     * Currency to report prices in.
     */
    currency: pulumi.Input<string | types.enums.v20180202.Currency>;
    /**
     * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
     */
    discountPercentage: pulumi.Input<number>;
    /**
     * For optimistic concurrency control.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Unique name of a group within a project.
     */
    groupName: pulumi.Input<string>;
    /**
     * Percentile of performance data used to recommend Azure size.
     */
    percentile: pulumi.Input<string | types.enums.v20180202.Percentile>;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
     */
    scalingFactor: pulumi.Input<number>;
    /**
     * Assessment sizing criterion.
     */
    sizingCriterion: pulumi.Input<string | types.enums.v20180202.AssessmentSizingCriterion>;
    /**
     * User configurable setting that describes the status of the assessment.
     */
    stage: pulumi.Input<string | types.enums.v20180202.AssessmentStage>;
    /**
     * Time range of performance data used to recommend a size.
     */
    timeRange: pulumi.Input<string | types.enums.v20180202.TimeRange>;
}
