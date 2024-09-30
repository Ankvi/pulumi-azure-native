import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Web app Assessment REST resource.
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-05-01-preview.
 */
export class WebAppAssessmentV2Operation extends pulumi.CustomResource {
    /**
     * Get an existing WebAppAssessmentV2Operation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppAssessmentV2Operation {
        return new WebAppAssessmentV2Operation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:WebAppAssessmentV2Operation';

    /**
     * Returns true if the given object is an instance of WebAppAssessmentV2Operation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppAssessmentV2Operation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppAssessmentV2Operation.__pulumiType;
    }

    /**
     * Gets or sets user configurable app service container database settings.
     */
    public readonly appSvcContainerSettings!: pulumi.Output<types.outputs.AppSvcContainerSettingsResponse | undefined>;
    /**
     * Gets or sets user configurable app service native settings.
     */
    public readonly appSvcNativeSettings!: pulumi.Output<types.outputs.AppSvcNativeSettingsResponse | undefined>;
    /**
     * Assessment type of the assessment.
     */
    public readonly assessmentType!: pulumi.Output<string | undefined>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    public readonly azureLocation!: pulumi.Output<string | undefined>;
    /**
     * Azure Offer Code.
     */
    public readonly azureOfferCode!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a value indicating azure security offering type.
     */
    public readonly azureSecurityOfferingType!: pulumi.Output<string | undefined>;
    /**
     * Confidence Rating in Percentage.
     */
    public readonly confidenceRatingInPercentage!: pulumi.Output<number | undefined>;
    /**
     * Date and Time when assessment was created.
     */
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    /**
     * Currency in which prices should be reported.
     */
    public readonly currency!: pulumi.Output<string | undefined>;
    /**
     * Custom discount percentage.
     */
    public readonly discountPercentage!: pulumi.Output<number | undefined>;
    /**
     * Gets or sets user configurable discovered entity settings.
     */
    public readonly discoveredEntityLightSummary!: pulumi.Output<types.outputs.DiscoveredEntityLightSummaryResponse | undefined>;
    /**
     * Gets or sets the Enterprise agreement subscription id.
     */
    public readonly eaSubscriptionId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the duration for which the entity (Web app, VMs) are up in the
     * on-premises environment.
     */
    public readonly entityUptime!: pulumi.Output<types.outputs.EntityUptimeResponse | undefined>;
    /**
     * Gets or sets user configurable setting to display the environment type.
     */
    public readonly environmentType!: pulumi.Output<string | undefined>;
    /**
     * Gets the group type for the assessment.
     */
    public readonly groupType!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Percentile of the utilization data values to be considered while assessing
     * machines.
     */
    public readonly percentile!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the end time to consider performance data for assessment.
     */
    public readonly perfDataEndTime!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the start time to consider performance data for assessment.
     */
    public readonly perfDataStartTime!: pulumi.Output<string | undefined>;
    /**
     * Last time when rates were queried.
     */
    public /*out*/ readonly pricesTimestamp!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Reserved instance.
     */
    public readonly reservedInstance!: pulumi.Output<string | undefined>;
    /**
     * Percentage of buffer that user wants on performance metrics when recommending
     * Azure sizes.
     */
    public readonly scalingFactor!: pulumi.Output<number | undefined>;
    /**
     * Schema version.
     */
    public /*out*/ readonly schemaVersion!: pulumi.Output<string>;
    /**
     * Assessment sizing criterion.
     */
    public readonly sizingCriterion!: pulumi.Output<string | undefined>;
    /**
     * User configurable setting to display the Stage of Assessment.
     */
    public /*out*/ readonly stage!: pulumi.Output<string>;
    /**
     * Whether assessment is in valid state and all machines have been assessed.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Time Range for which the historic utilization data should be considered for
     * assessment.
     */
    public readonly timeRange!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Date and Time when assessment was last updated.
     */
    public /*out*/ readonly updatedTimestamp!: pulumi.Output<string>;

    /**
     * Create a WebAppAssessmentV2Operation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppAssessmentV2OperationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupName'");
            }
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appSvcContainerSettings"] = args ? args.appSvcContainerSettings : undefined;
            resourceInputs["appSvcNativeSettings"] = args ? args.appSvcNativeSettings : undefined;
            resourceInputs["assessmentName"] = args ? args.assessmentName : undefined;
            resourceInputs["assessmentType"] = args ? args.assessmentType : undefined;
            resourceInputs["azureLocation"] = args ? args.azureLocation : undefined;
            resourceInputs["azureOfferCode"] = args ? args.azureOfferCode : undefined;
            resourceInputs["azureSecurityOfferingType"] = args ? args.azureSecurityOfferingType : undefined;
            resourceInputs["confidenceRatingInPercentage"] = args ? args.confidenceRatingInPercentage : undefined;
            resourceInputs["currency"] = args ? args.currency : undefined;
            resourceInputs["discountPercentage"] = args ? args.discountPercentage : undefined;
            resourceInputs["discoveredEntityLightSummary"] = args ? args.discoveredEntityLightSummary : undefined;
            resourceInputs["eaSubscriptionId"] = args ? args.eaSubscriptionId : undefined;
            resourceInputs["entityUptime"] = args ? args.entityUptime : undefined;
            resourceInputs["environmentType"] = args ? args.environmentType : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["groupType"] = args ? args.groupType : undefined;
            resourceInputs["percentile"] = args ? args.percentile : undefined;
            resourceInputs["perfDataEndTime"] = args ? args.perfDataEndTime : undefined;
            resourceInputs["perfDataStartTime"] = args ? args.perfDataStartTime : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["reservedInstance"] = args ? args.reservedInstance : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scalingFactor"] = args ? args.scalingFactor : undefined;
            resourceInputs["sizingCriterion"] = args ? args.sizingCriterion : undefined;
            resourceInputs["timeRange"] = args ? args.timeRange : undefined;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pricesTimestamp"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["schemaVersion"] = undefined /*out*/;
            resourceInputs["stage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        } else {
            resourceInputs["appSvcContainerSettings"] = undefined /*out*/;
            resourceInputs["appSvcNativeSettings"] = undefined /*out*/;
            resourceInputs["assessmentType"] = undefined /*out*/;
            resourceInputs["azureLocation"] = undefined /*out*/;
            resourceInputs["azureOfferCode"] = undefined /*out*/;
            resourceInputs["azureSecurityOfferingType"] = undefined /*out*/;
            resourceInputs["confidenceRatingInPercentage"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["currency"] = undefined /*out*/;
            resourceInputs["discountPercentage"] = undefined /*out*/;
            resourceInputs["discoveredEntityLightSummary"] = undefined /*out*/;
            resourceInputs["eaSubscriptionId"] = undefined /*out*/;
            resourceInputs["entityUptime"] = undefined /*out*/;
            resourceInputs["environmentType"] = undefined /*out*/;
            resourceInputs["groupType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["percentile"] = undefined /*out*/;
            resourceInputs["perfDataEndTime"] = undefined /*out*/;
            resourceInputs["perfDataStartTime"] = undefined /*out*/;
            resourceInputs["pricesTimestamp"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["reservedInstance"] = undefined /*out*/;
            resourceInputs["scalingFactor"] = undefined /*out*/;
            resourceInputs["schemaVersion"] = undefined /*out*/;
            resourceInputs["sizingCriterion"] = undefined /*out*/;
            resourceInputs["stage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeRange"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20230401preview:WebAppAssessmentV2Operation" }, { type: "azure-native:migrate/v20230501preview:WebAppAssessmentV2Operation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppAssessmentV2Operation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppAssessmentV2Operation resource.
 */
export interface WebAppAssessmentV2OperationArgs {
    /**
     * Gets or sets user configurable app service container database settings.
     */
    appSvcContainerSettings?: pulumi.Input<types.inputs.AppSvcContainerSettingsArgs>;
    /**
     * Gets or sets user configurable app service native settings.
     */
    appSvcNativeSettings?: pulumi.Input<types.inputs.AppSvcNativeSettingsArgs>;
    /**
     * Web app Assessment arm name.
     */
    assessmentName?: pulumi.Input<string>;
    /**
     * Assessment type of the assessment.
     */
    assessmentType?: pulumi.Input<string | types.enums.AssessmentType>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    azureLocation?: pulumi.Input<string>;
    /**
     * Azure Offer Code.
     */
    azureOfferCode?: pulumi.Input<string | types.enums.AzureOfferCode>;
    /**
     * Gets or sets a value indicating azure security offering type.
     */
    azureSecurityOfferingType?: pulumi.Input<string | types.enums.AzureSecurityOfferingType>;
    /**
     * Confidence Rating in Percentage.
     */
    confidenceRatingInPercentage?: pulumi.Input<number>;
    /**
     * Currency in which prices should be reported.
     */
    currency?: pulumi.Input<string | types.enums.AzureCurrency>;
    /**
     * Custom discount percentage.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Gets or sets user configurable discovered entity settings.
     */
    discoveredEntityLightSummary?: pulumi.Input<types.inputs.DiscoveredEntityLightSummaryArgs>;
    /**
     * Gets or sets the Enterprise agreement subscription id.
     */
    eaSubscriptionId?: pulumi.Input<string>;
    /**
     * Gets or sets the duration for which the entity (Web app, VMs) are up in the
     * on-premises environment.
     */
    entityUptime?: pulumi.Input<types.inputs.EntityUptimeArgs>;
    /**
     * Gets or sets user configurable setting to display the environment type.
     */
    environmentType?: pulumi.Input<string | types.enums.EnvironmentType>;
    /**
     * Group ARM name
     */
    groupName: pulumi.Input<string>;
    /**
     * Gets the group type for the assessment.
     */
    groupType?: pulumi.Input<string | types.enums.GroupType>;
    /**
     * Percentile of the utilization data values to be considered while assessing
     * machines.
     */
    percentile?: pulumi.Input<string | types.enums.Percentile>;
    /**
     * Gets or sets the end time to consider performance data for assessment.
     */
    perfDataEndTime?: pulumi.Input<string>;
    /**
     * Gets or sets the start time to consider performance data for assessment.
     */
    perfDataStartTime?: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * Reserved instance.
     */
    reservedInstance?: pulumi.Input<string | types.enums.AzureReservedInstance>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Percentage of buffer that user wants on performance metrics when recommending
     * Azure sizes.
     */
    scalingFactor?: pulumi.Input<number>;
    /**
     * Assessment sizing criterion.
     */
    sizingCriterion?: pulumi.Input<string | types.enums.AssessmentSizingCriterion>;
    /**
     * Time Range for which the historic utilization data should be considered for
     * assessment.
     */
    timeRange?: pulumi.Input<string | types.enums.TimeRange>;
}