import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AvsAssessment
 * Azure REST API version: 2023-03-15.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview.
 */
export function getAvsAssessmentsOperation(args: GetAvsAssessmentsOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetAvsAssessmentsOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getAvsAssessmentsOperation", {
        "assessmentName": args.assessmentName,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAvsAssessmentsOperationArgs {
    /**
     * AVS Assessment ARM name
     */
    assessmentName: string;
    /**
     * Group ARM name
     */
    groupName: string;
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * AVS assessment resource.
 */
export interface GetAvsAssessmentsOperationResult {
    /**
     * Gets the assessment error summary.
     *             This is the number of machines
     * affected by each type of error in this assessment.
     */
    readonly assessmentErrorSummary: {[key: string]: number};
    /**
     * Assessment type of the assessment.
     */
    readonly assessmentType: string;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    readonly azureLocation?: string;
    /**
     * Azure Offer code according to which cost estimation is done.
     */
    readonly azureOfferCode?: string;
    /**
     * Confidence Rating in Percentage.
     */
    readonly confidenceRatingInPercentage: number;
    /**
     * Predicted CPU utilization.
     */
    readonly cpuUtilization: number;
    /**
     * Date and Time when assessment was created.
     */
    readonly createdTimestamp: string;
    /**
     * Currency in which prices should be reported.
     */
    readonly currency?: string;
    /**
     * De-duplication compression.
     */
    readonly dedupeCompression?: number;
    /**
     * Custom discount percentage.
     */
    readonly discountPercentage?: number;
    /**
     * Failures to tolerate and RAID level in a common property.
     */
    readonly failuresToTolerateAndRaidLevel?: string;
    /**
     * Gets the group type for the assessment.
     */
    readonly groupType: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Is Stretch Cluster Enabled.
     */
    readonly isStretchClusterEnabled?: boolean;
    /**
     * Limiting factor.
     */
    readonly limitingFactor: string;
    /**
     * Memory overcommit.
     */
    readonly memOvercommit?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * AVS node type.
     */
    readonly nodeType?: string;
    /**
     * Number of machines part of the assessment.
     */
    readonly numberOfMachines: number;
    /**
     * Recommended number of nodes.
     */
    readonly numberOfNodes: number;
    /**
     * Percentile of the utilization data values to be considered while assessing
     * machines.
     */
    readonly percentile?: string;
    /**
     * Gets or sets the end time to consider performance data for assessment.
     */
    readonly perfDataEndTime?: string;
    /**
     * Gets or sets the start time to consider performance data for assessment.
     */
    readonly perfDataStartTime?: string;
    /**
     * Time when the Azure Prices were queried. Date-Time represented in ISO-8601
     * format.
     */
    readonly pricesTimestamp: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState?: string;
    /**
     * Predicted RAM utilization.
     */
    readonly ramUtilization: number;
    /**
     * Reserved instance.
     */
    readonly reservedInstance?: string;
    /**
     * Percentage of buffer that user wants on performance metrics when recommending
     * Azure sizes.
     */
    readonly scalingFactor?: number;
    /**
     * Schema version.
     */
    readonly schemaVersion: string;
    /**
     * Assessment sizing criterion.
     */
    readonly sizingCriterion?: string;
    /**
     * User configurable setting to display the Stage of Assessment.
     */
    readonly stage: string;
    /**
     * Whether assessment is in valid state and all machines have been assessed.
     */
    readonly status: string;
    /**
     * Predicted storage utilization.
     */
    readonly storageUtilization: number;
    /**
     * Gets or sets the Assessment cloud suitability.
     */
    readonly suitability: string;
    /**
     * Gets or sets the Assessment suitability explanation.
     */
    readonly suitabilityExplanation: string;
    /**
     * Cloud suitability summary for all the machines in the assessment.
     */
    readonly suitabilitySummary: {[key: string]: number};
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Time Range for which the historic utilization data should be considered for
     * assessment.
     */
    readonly timeRange?: string;
    /**
     * Predicted total CPU cores used.
     */
    readonly totalCpuCores: number;
    /**
     * Total monthly cost.
     */
    readonly totalMonthlyCost: number;
    /**
     * Predicted total RAM used in GB.
     */
    readonly totalRamInGB: number;
    /**
     * Predicted total Storage used in GB.
     */
    readonly totalStorageInGB: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Date and Time when assessment was last updated.
     */
    readonly updatedTimestamp: string;
    /**
     * VCPU over subscription.
     */
    readonly vcpuOversubscription?: number;
}
/**
 * Get a AvsAssessment
 * Azure REST API version: 2023-03-15.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview.
 */
export function getAvsAssessmentsOperationOutput(args: GetAvsAssessmentsOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAvsAssessmentsOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getAvsAssessmentsOperation", {
        "assessmentName": args.assessmentName,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAvsAssessmentsOperationOutputArgs {
    /**
     * AVS Assessment ARM name
     */
    assessmentName: pulumi.Input<string>;
    /**
     * Group ARM name
     */
    groupName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}