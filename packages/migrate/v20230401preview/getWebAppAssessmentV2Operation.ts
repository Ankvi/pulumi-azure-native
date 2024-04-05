import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WebAppAssessmentV2
 */
export function getWebAppAssessmentV2Operation(args: GetWebAppAssessmentV2OperationArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppAssessmentV2OperationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate/v20230401preview:getWebAppAssessmentV2Operation", {
        "assessmentName": args.assessmentName,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppAssessmentV2OperationArgs {
    /**
     * Web app Assessment arm name.
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
 * Web app Assessment REST resource.
 */
export interface GetWebAppAssessmentV2OperationResult {
    /**
     * Gets or sets user configurable app service container database settings.
     */
    readonly appSvcContainerSettings?: types.outputs.AppSvcContainerSettingsResponse;
    /**
     * Gets or sets user configurable app service native settings.
     */
    readonly appSvcNativeSettings?: types.outputs.AppSvcNativeSettingsResponse;
    /**
     * Assessment type of the assessment.
     */
    readonly assessmentType?: string;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    readonly azureLocation?: string;
    /**
     * Azure Offer Code.
     */
    readonly azureOfferCode?: string;
    /**
     * Gets or sets a value indicating azure security offering type.
     */
    readonly azureSecurityOfferingType?: string;
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
     * Custom discount percentage.
     */
    readonly discountPercentage?: number;
    /**
     * Gets or sets user configurable discovered entity settings.
     */
    readonly discoveredEntityLightSummary?: types.outputs.DiscoveredEntityLightSummaryResponse;
    /**
     * Gets or sets the Enterprise agreement subscription id.
     */
    readonly eaSubscriptionId?: string;
    /**
     * Gets or sets the duration for which the entity (Web app, VMs) are up in the
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
    readonly provisioningState: string;
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
 * Get a WebAppAssessmentV2
 */
export function getWebAppAssessmentV2OperationOutput(args: GetWebAppAssessmentV2OperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppAssessmentV2OperationResult> {
    return pulumi.output(args).apply((a: any) => getWebAppAssessmentV2Operation(a, opts))
}

export interface GetWebAppAssessmentV2OperationOutputArgs {
    /**
     * Web app Assessment arm name.
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