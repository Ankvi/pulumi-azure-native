import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get an existing assessment with the specified name. Returns a json object of type 'assessment' as specified in Models section.
 */
export function getAssessment(args: GetAssessmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate/v20180202:getAssessment", {
        "assessmentName": args.assessmentName,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssessmentArgs {
    /**
     * Unique name of an assessment within a project.
     */
    assessmentName: string;
    /**
     * Unique name of a group within a project.
     */
    groupName: string;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
}

/**
 * An assessment created for a group in the Migration project.
 */
export interface GetAssessmentResult {
    /**
     * AHUB discount on windows virtual machines.
     */
    readonly azureHybridUseBenefit: string;
    /**
     * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
     */
    readonly azureLocation: string;
    /**
     * Offer code according to which cost estimation is done.
     */
    readonly azureOfferCode: string;
    /**
     * Pricing tier for Size evaluation.
     */
    readonly azurePricingTier: string;
    /**
     * Storage Redundancy type offered by Azure.
     */
    readonly azureStorageRedundancy: string;
    /**
     * Confidence rating percentage for assessment. Can be in the range [0, 100].
     */
    readonly confidenceRatingInPercentage: number;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    readonly createdTimestamp: string;
    /**
     * Currency to report prices in.
     */
    readonly currency: string;
    /**
     * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
     */
    readonly discountPercentage: number;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: string;
    /**
     * Path reference to this assessment. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessment/{assessmentName}
     */
    readonly id: string;
    /**
     * Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    readonly monthlyBandwidthCost: number;
    /**
     * Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    readonly monthlyComputeCost: number;
    /**
     * Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    readonly monthlyStorageCost: number;
    /**
     * Unique name of an assessment.
     */
    readonly name: string;
    /**
     * Number of assessed machines part of this assessment.
     */
    readonly numberOfMachines: number;
    /**
     * Percentile of performance data used to recommend Azure size.
     */
    readonly percentile: string;
    /**
     * Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format.
     */
    readonly pricesTimestamp: string;
    /**
     * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
     */
    readonly scalingFactor: number;
    /**
     * Assessment sizing criterion.
     */
    readonly sizingCriterion: string;
    /**
     * User configurable setting that describes the status of the assessment.
     */
    readonly stage: string;
    /**
     * Whether the assessment has been created and is valid.
     */
    readonly status: string;
    /**
     * Time range of performance data used to recommend a size.
     */
    readonly timeRange: string;
    /**
     * Type of the object = [Microsoft.Migrate/projects/groups/assessments].
     */
    readonly type: string;
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601 format.
     */
    readonly updatedTimestamp: string;
}
/**
 * Get an existing assessment with the specified name. Returns a json object of type 'assessment' as specified in Models section.
 */
export function getAssessmentOutput(args: GetAssessmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssessmentResult> {
    return pulumi.output(args).apply((a: any) => getAssessment(a, opts))
}

export interface GetAssessmentOutputArgs {
    /**
     * Unique name of an assessment within a project.
     */
    assessmentName: pulumi.Input<string>;
    /**
     * Unique name of a group within a project.
     */
    groupName: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}