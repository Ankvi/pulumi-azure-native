import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SqlAssessmentV2
 * Azure REST API version: 2023-03-15.
 */
export function getSqlAssessmentV2Operation(args: GetSqlAssessmentV2OperationArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlAssessmentV2OperationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getSqlAssessmentV2Operation", {
        "assessmentName": args.assessmentName,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSqlAssessmentV2OperationArgs {
    /**
     * SQL Assessment arm name.
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
 * SQL Assessment REST resource.
 */
export interface GetSqlAssessmentV2OperationResult {
    /**
     * Assessment type of the assessment.
     */
    readonly assessmentType?: string;
    /**
     * Gets or sets user preference indicating intent of async commit mode.
     */
    readonly asyncCommitModeIntent?: string;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    readonly azureLocation?: string;
    /**
     * Azure Offer Code.
     */
    readonly azureOfferCode?: string;
    /**
     * Gets or sets Azure Offer Code for VM.
     */
    readonly azureOfferCodeForVm?: string;
    /**
     * Gets or sets a value indicating azure security offering type.
     */
    readonly azureSecurityOfferingType?: string;
    /**
     * Gets or sets user configurable SQL database settings.
     */
    readonly azureSqlDatabaseSettings?: types.outputs.SqlDbSettingsResponse;
    /**
     * Gets or sets user configurable SQL managed instance settings.
     */
    readonly azureSqlManagedInstanceSettings?: types.outputs.SqlMiSettingsResponse;
    /**
     * Gets or sets user configurable SQL VM settings.
     */
    readonly azureSqlVmSettings?: types.outputs.SqlVmSettingsResponse;
    /**
     * Confidence Rating in Percentage.
     */
    readonly confidenceRatingInPercentage?: number;
    /**
     * Date and Time when assessment was created.
     */
    readonly createdTimestamp: string;
    /**
     * Currency in which prices should be reported.
     */
    readonly currency?: string;
    /**
     * Gets or sets the Azure Location or Azure region where to which the machines
     * will be migrated.
     */
    readonly disasterRecoveryLocation?: string;
    /**
     * Custom discount percentage.
     */
    readonly discountPercentage?: number;
    /**
     * Gets or sets the Enterprise agreement subscription id.
     */
    readonly eaSubscriptionId?: string;
    /**
     * Gets or sets a value indicating whether HADR assessments needs to be created.
     */
    readonly enableHadrAssessment?: boolean;
    /**
     * Gets or sets the duration for which the entity (SQL, VMs) are up in the
     * on-premises environment.
     */
    readonly entityUptime?: types.outputs.EntityUptimeResponse;
    /**
     * Gets or sets user configurable setting to display the environment type.
     */
    readonly environmentType?: string;
    /**
     * Gets the group type for the assessment.
     */
    readonly groupType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Gets or sets a value indicating whether internet access is available.
     */
    readonly isInternetAccessAvailable?: boolean;
    /**
     * Gets or sets user preference indicating intent of multi-subnet configuration.
     */
    readonly multiSubnetIntent?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets SQL optimization logic.
     */
    readonly optimizationLogic?: string;
    /**
     * Gets or sets user configurable setting to display the azure hybrid use benefit.
     */
    readonly osLicense?: string;
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
     * Reserved instance.
     */
    readonly reservedInstance?: string;
    /**
     * Gets or sets azure reserved instance for VM.
     */
    readonly reservedInstanceForVm?: string;
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
     * SQL server license.
     */
    readonly sqlServerLicense?: string;
    /**
     * User configurable setting to display the Stage of Assessment.
     */
    readonly stage: string;
    /**
     * Whether assessment is in valid state and all machines have been assessed.
     */
    readonly status: string;
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
}
/**
 * Get a SqlAssessmentV2
 * Azure REST API version: 2023-03-15.
 */
export function getSqlAssessmentV2OperationOutput(args: GetSqlAssessmentV2OperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlAssessmentV2OperationResult> {
    return pulumi.output(args).apply((a: any) => getSqlAssessmentV2Operation(a, opts))
}

export interface GetSqlAssessmentV2OperationOutputArgs {
    /**
     * SQL Assessment arm name.
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