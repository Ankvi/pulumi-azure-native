import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Assessment
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-03-15, 2023-05-01-preview.
 */
export function getAssessmentsOperation(args: GetAssessmentsOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentsOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getAssessmentsOperation", {
        "assessmentName": args.assessmentName,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssessmentsOperationArgs {
    /**
     * Machine Assessment ARM name
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
 * Machine assessment resource.
 */
export interface GetAssessmentsOperationResult {
    /**
     * Gets or sets the assessment error summary.
     *             This is the number of
     * machines affected by each type of error in this assessment.
     */
    readonly assessmentErrorSummary: {[key: string]: number};
    /**
     * Assessment type of the assessment.
     */
    readonly assessmentType: string;
    /**
     * Gets or sets the azure storage type. Premium, Standard etc.
     */
    readonly azureDiskTypes?: string[];
    /**
     * Gets or sets the user configurable setting to display the azure hybrid use
     * benefit.
     */
    readonly azureHybridUseBenefit?: string;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    readonly azureLocation?: string;
    /**
     * Azure Offer Code.
     */
    readonly azureOfferCode?: string;
    /**
     * Gets or sets Azure Pricing Tier - Free, Basic, etc.
     */
    readonly azurePricingTier?: string;
    /**
     * Gets or sets the Azure Storage Redundancy. Example: Locally Redundant Storage.
     */
    readonly azureStorageRedundancy?: string;
    /**
     * Gets or sets the Azure VM families.
     */
    readonly azureVmFamilies?: string[];
    /**
     * Confidence Rating in Percentage.
     */
    readonly confidenceRatingInPercentage: number;
    /**
     * Gets the collection of cost components.
     */
    readonly costComponents: types.outputs.CostComponentResponse[];
    /**
     * Date and Time when assessment was created.
     */
    readonly createdTimestamp: string;
    /**
     * Currency in which prices should be reported.
     */
    readonly currency?: string;
    /**
     * Custom discount percentage.
     */
    readonly discountPercentage?: number;
    /**
     * Gets the distribution by os name.
     */
    readonly distributionByOsName: {[key: string]: number};
    /**
     * Gets the distribution distribution of sqlInstances by service pack insight.
     */
    readonly distributionByServicePackInsight: {[key: string]: number};
    /**
     * Gets the distribution of sqlInstances by support status.
     */
    readonly distributionBySupportStatus: {[key: string]: number};
    /**
     * Gets or sets enterprise agreement subscription id.
     */
    readonly eaSubscriptionId?: string;
    /**
     * Gets the group type for the assessment.
     */
    readonly groupType: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Gets or sets the user configurable setting to display the linux azure hybrid use
     * benefit.
     */
    readonly linuxAzureHybridUseBenefit?: string;
    /**
     * Gets or sets the aggregate Bandwidth Cost for all machines in the assessment.
     */
    readonly monthlyBandwidthCost: number;
    /**
     * Gets or sets the aggregate Compute Cost for all machines in the assessment.
     */
    readonly monthlyComputeCost: number;
    /**
     * Gets or sets the aggregate premium storage cost for all machines in the
     * assessment.
     */
    readonly monthlyPremiumStorageCost: number;
    /**
     * Gets or sets the aggregate standard SSD storage cost for all the machines in
     * the assessment.
     */
    readonly monthlyStandardSsdStorageCost: number;
    /**
     * Gets or sets the aggregate Storage Cost for all machines in the assessment.
     */
    readonly monthlyStorageCost: number;
    /**
     * Gets or sets the aggregate ultra storage cost for all machines in the
     * assessment.
     */
    readonly monthlyUltraStorageCost: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the Number of machines part of the assessment.
     */
    readonly numberOfMachines: number;
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
     * Last time when rates were queried.
     */
    readonly pricesTimestamp: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets the Azure Reserved Instance - 1-Year, 3-Year.
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
     * Gets or sets the Cloud suitability summary for all the machines in the
     * assessment.
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Date and Time when assessment was last updated.
     */
    readonly updatedTimestamp: string;
    /**
     * Gets or sets the duration for which the VMs are up in the on-premises
     * environment.
     */
    readonly vmUptime?: types.outputs.VmUptimeResponse;
}
/**
 * Get a Assessment
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-03-15, 2023-05-01-preview.
 */
export function getAssessmentsOperationOutput(args: GetAssessmentsOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssessmentsOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getAssessmentsOperation", {
        "assessmentName": args.assessmentName,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssessmentsOperationOutputArgs {
    /**
     * Machine Assessment ARM name
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