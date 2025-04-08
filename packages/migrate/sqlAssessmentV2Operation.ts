import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * SQL Assessment REST resource.
 *
 * Uses Azure REST API version 2023-03-15.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview, 2024-01-01-preview.
 */
export class SqlAssessmentV2Operation extends pulumi.CustomResource {
    /**
     * Get an existing SqlAssessmentV2Operation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlAssessmentV2Operation {
        return new SqlAssessmentV2Operation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:SqlAssessmentV2Operation';

    /**
     * Returns true if the given object is an instance of SqlAssessmentV2Operation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlAssessmentV2Operation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlAssessmentV2Operation.__pulumiType;
    }

    /**
     * Assessment type of the assessment.
     */
    public readonly assessmentType!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets user preference indicating intent of async commit mode.
     */
    public readonly asyncCommitModeIntent!: pulumi.Output<string | undefined>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    public readonly azureLocation!: pulumi.Output<string | undefined>;
    /**
     * Azure Offer Code.
     */
    public readonly azureOfferCode!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets Azure Offer Code for VM.
     */
    public readonly azureOfferCodeForVm!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a value indicating azure security offering type.
     */
    public readonly azureSecurityOfferingType!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets user configurable SQL database settings.
     */
    public readonly azureSqlDatabaseSettings!: pulumi.Output<types.outputs.SqlDbSettingsResponse | undefined>;
    /**
     * Gets or sets user configurable SQL managed instance settings.
     */
    public readonly azureSqlManagedInstanceSettings!: pulumi.Output<types.outputs.SqlMiSettingsResponse | undefined>;
    /**
     * Gets or sets user configurable SQL VM settings.
     */
    public readonly azureSqlVmSettings!: pulumi.Output<types.outputs.SqlVmSettingsResponse | undefined>;
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
     * Gets or sets the Azure Location or Azure region where to which the machines
     * will be migrated.
     */
    public readonly disasterRecoveryLocation!: pulumi.Output<string | undefined>;
    /**
     * Custom discount percentage.
     */
    public readonly discountPercentage!: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the Enterprise agreement subscription id.
     */
    public readonly eaSubscriptionId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a value indicating whether HADR assessments needs to be created.
     */
    public readonly enableHadrAssessment!: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the duration for which the entity (SQL, VMs) are up in the
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
     * Gets or sets a value indicating whether internet access is available.
     */
    public readonly isInternetAccessAvailable!: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets user preference indicating intent of multi-subnet configuration.
     */
    public readonly multiSubnetIntent!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets SQL optimization logic.
     */
    public readonly optimizationLogic!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets user configurable setting to display the azure hybrid use benefit.
     */
    public readonly osLicense!: pulumi.Output<string | undefined>;
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
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Reserved instance.
     */
    public readonly reservedInstance!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets azure reserved instance for VM.
     */
    public readonly reservedInstanceForVm!: pulumi.Output<string | undefined>;
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
     * SQL server license.
     */
    public readonly sqlServerLicense!: pulumi.Output<string | undefined>;
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
     * Create a SqlAssessmentV2Operation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlAssessmentV2OperationArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["assessmentName"] = args ? args.assessmentName : undefined;
            resourceInputs["assessmentType"] = args ? args.assessmentType : undefined;
            resourceInputs["asyncCommitModeIntent"] = args ? args.asyncCommitModeIntent : undefined;
            resourceInputs["azureLocation"] = args ? args.azureLocation : undefined;
            resourceInputs["azureOfferCode"] = args ? args.azureOfferCode : undefined;
            resourceInputs["azureOfferCodeForVm"] = args ? args.azureOfferCodeForVm : undefined;
            resourceInputs["azureSecurityOfferingType"] = args ? args.azureSecurityOfferingType : undefined;
            resourceInputs["azureSqlDatabaseSettings"] = args ? args.azureSqlDatabaseSettings : undefined;
            resourceInputs["azureSqlManagedInstanceSettings"] = args ? args.azureSqlManagedInstanceSettings : undefined;
            resourceInputs["azureSqlVmSettings"] = args ? args.azureSqlVmSettings : undefined;
            resourceInputs["confidenceRatingInPercentage"] = args ? args.confidenceRatingInPercentage : undefined;
            resourceInputs["currency"] = args ? args.currency : undefined;
            resourceInputs["disasterRecoveryLocation"] = args ? args.disasterRecoveryLocation : undefined;
            resourceInputs["discountPercentage"] = args ? args.discountPercentage : undefined;
            resourceInputs["eaSubscriptionId"] = args ? args.eaSubscriptionId : undefined;
            resourceInputs["enableHadrAssessment"] = args ? args.enableHadrAssessment : undefined;
            resourceInputs["entityUptime"] = args ? args.entityUptime : undefined;
            resourceInputs["environmentType"] = args ? args.environmentType : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["groupType"] = args ? args.groupType : undefined;
            resourceInputs["isInternetAccessAvailable"] = args ? args.isInternetAccessAvailable : undefined;
            resourceInputs["multiSubnetIntent"] = args ? args.multiSubnetIntent : undefined;
            resourceInputs["optimizationLogic"] = args ? args.optimizationLogic : undefined;
            resourceInputs["osLicense"] = args ? args.osLicense : undefined;
            resourceInputs["percentile"] = args ? args.percentile : undefined;
            resourceInputs["perfDataEndTime"] = args ? args.perfDataEndTime : undefined;
            resourceInputs["perfDataStartTime"] = args ? args.perfDataStartTime : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["reservedInstance"] = args ? args.reservedInstance : undefined;
            resourceInputs["reservedInstanceForVm"] = args ? args.reservedInstanceForVm : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scalingFactor"] = args ? args.scalingFactor : undefined;
            resourceInputs["sizingCriterion"] = args ? args.sizingCriterion : undefined;
            resourceInputs["sqlServerLicense"] = args ? args.sqlServerLicense : undefined;
            resourceInputs["timeRange"] = args ? args.timeRange : undefined;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pricesTimestamp"] = undefined /*out*/;
            resourceInputs["schemaVersion"] = undefined /*out*/;
            resourceInputs["stage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        } else {
            resourceInputs["assessmentType"] = undefined /*out*/;
            resourceInputs["asyncCommitModeIntent"] = undefined /*out*/;
            resourceInputs["azureLocation"] = undefined /*out*/;
            resourceInputs["azureOfferCode"] = undefined /*out*/;
            resourceInputs["azureOfferCodeForVm"] = undefined /*out*/;
            resourceInputs["azureSecurityOfferingType"] = undefined /*out*/;
            resourceInputs["azureSqlDatabaseSettings"] = undefined /*out*/;
            resourceInputs["azureSqlManagedInstanceSettings"] = undefined /*out*/;
            resourceInputs["azureSqlVmSettings"] = undefined /*out*/;
            resourceInputs["confidenceRatingInPercentage"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["currency"] = undefined /*out*/;
            resourceInputs["disasterRecoveryLocation"] = undefined /*out*/;
            resourceInputs["discountPercentage"] = undefined /*out*/;
            resourceInputs["eaSubscriptionId"] = undefined /*out*/;
            resourceInputs["enableHadrAssessment"] = undefined /*out*/;
            resourceInputs["entityUptime"] = undefined /*out*/;
            resourceInputs["environmentType"] = undefined /*out*/;
            resourceInputs["groupType"] = undefined /*out*/;
            resourceInputs["isInternetAccessAvailable"] = undefined /*out*/;
            resourceInputs["multiSubnetIntent"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["optimizationLogic"] = undefined /*out*/;
            resourceInputs["osLicense"] = undefined /*out*/;
            resourceInputs["percentile"] = undefined /*out*/;
            resourceInputs["perfDataEndTime"] = undefined /*out*/;
            resourceInputs["perfDataStartTime"] = undefined /*out*/;
            resourceInputs["pricesTimestamp"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["reservedInstance"] = undefined /*out*/;
            resourceInputs["reservedInstanceForVm"] = undefined /*out*/;
            resourceInputs["scalingFactor"] = undefined /*out*/;
            resourceInputs["schemaVersion"] = undefined /*out*/;
            resourceInputs["sizingCriterion"] = undefined /*out*/;
            resourceInputs["sqlServerLicense"] = undefined /*out*/;
            resourceInputs["stage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeRange"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20230315:SqlAssessmentV2Operation" }, { type: "azure-native:migrate/v20230401preview:SqlAssessmentV2Operation" }, { type: "azure-native:migrate/v20230501preview:SqlAssessmentV2Operation" }, { type: "azure-native:migrate/v20230909preview:SqlAssessmentV2Operation" }, { type: "azure-native:migrate/v20240101preview:SqlAssessmentV2Operation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlAssessmentV2Operation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlAssessmentV2Operation resource.
 */
export interface SqlAssessmentV2OperationArgs {
    /**
     * SQL Assessment arm name.
     */
    assessmentName?: pulumi.Input<string>;
    /**
     * Assessment type of the assessment.
     */
    assessmentType?: pulumi.Input<string | types.enums.AssessmentType>;
    /**
     * Gets or sets user preference indicating intent of async commit mode.
     */
    asyncCommitModeIntent?: pulumi.Input<string | types.enums.AsyncCommitModeIntent>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    azureLocation?: pulumi.Input<string>;
    /**
     * Azure Offer Code.
     */
    azureOfferCode?: pulumi.Input<string | types.enums.AzureOfferCode>;
    /**
     * Gets or sets Azure Offer Code for VM.
     */
    azureOfferCodeForVm?: pulumi.Input<string | types.enums.AzureOfferCode>;
    /**
     * Gets or sets a value indicating azure security offering type.
     */
    azureSecurityOfferingType?: pulumi.Input<string | types.enums.AzureSecurityOfferingType>;
    /**
     * Gets or sets user configurable SQL database settings.
     */
    azureSqlDatabaseSettings?: pulumi.Input<types.inputs.SqlDbSettingsArgs>;
    /**
     * Gets or sets user configurable SQL managed instance settings.
     */
    azureSqlManagedInstanceSettings?: pulumi.Input<types.inputs.SqlMiSettingsArgs>;
    /**
     * Gets or sets user configurable SQL VM settings.
     */
    azureSqlVmSettings?: pulumi.Input<types.inputs.SqlVmSettingsArgs>;
    /**
     * Confidence Rating in Percentage.
     */
    confidenceRatingInPercentage?: pulumi.Input<number>;
    /**
     * Currency in which prices should be reported.
     */
    currency?: pulumi.Input<string | types.enums.AzureCurrency>;
    /**
     * Gets or sets the Azure Location or Azure region where to which the machines
     * will be migrated.
     */
    disasterRecoveryLocation?: pulumi.Input<string | types.enums.AzureLocation>;
    /**
     * Custom discount percentage.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Gets or sets the Enterprise agreement subscription id.
     */
    eaSubscriptionId?: pulumi.Input<string>;
    /**
     * Gets or sets a value indicating whether HADR assessments needs to be created.
     */
    enableHadrAssessment?: pulumi.Input<boolean>;
    /**
     * Gets or sets the duration for which the entity (SQL, VMs) are up in the
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
     * Gets or sets a value indicating whether internet access is available.
     */
    isInternetAccessAvailable?: pulumi.Input<boolean>;
    /**
     * Gets or sets user preference indicating intent of multi-subnet configuration.
     */
    multiSubnetIntent?: pulumi.Input<string | types.enums.MultiSubnetIntent>;
    /**
     * Gets or sets SQL optimization logic.
     */
    optimizationLogic?: pulumi.Input<string | types.enums.OptimizationLogic>;
    /**
     * Gets or sets user configurable setting to display the azure hybrid use benefit.
     */
    osLicense?: pulumi.Input<string | types.enums.OsLicense>;
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
     * The status of the last operation.
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningState>;
    /**
     * Reserved instance.
     */
    reservedInstance?: pulumi.Input<string | types.enums.AzureReservedInstance>;
    /**
     * Gets or sets azure reserved instance for VM.
     */
    reservedInstanceForVm?: pulumi.Input<string | types.enums.AzureReservedInstance>;
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
     * SQL server license.
     */
    sqlServerLicense?: pulumi.Input<string | types.enums.SqlServerLicense>;
    /**
     * Time Range for which the historic utilization data should be considered for
     * assessment.
     */
    timeRange?: pulumi.Input<string | types.enums.TimeRange>;
}