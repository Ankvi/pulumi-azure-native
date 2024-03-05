import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Machine assessment resource.
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-03-15.
 */
export class AssessmentsOperation extends pulumi.CustomResource {
    /**
     * Get an existing AssessmentsOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AssessmentsOperation {
        return new AssessmentsOperation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:AssessmentsOperation';

    /**
     * Returns true if the given object is an instance of AssessmentsOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AssessmentsOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AssessmentsOperation.__pulumiType;
    }

    /**
     * Gets or sets the assessment error summary.
     *             This is the number of
     * machines affected by each type of error in this assessment.
     */
    public /*out*/ readonly assessmentErrorSummary!: pulumi.Output<{[key: string]: number}>;
    /**
     * Assessment type of the assessment.
     */
    public /*out*/ readonly assessmentType!: pulumi.Output<string>;
    /**
     * Gets or sets the azure storage type. Premium, Standard etc.
     */
    public readonly azureDiskTypes!: pulumi.Output<string[] | undefined>;
    /**
     * Gets or sets the user configurable setting to display the azure hybrid use
     * benefit.
     */
    public readonly azureHybridUseBenefit!: pulumi.Output<string | undefined>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    public readonly azureLocation!: pulumi.Output<string | undefined>;
    /**
     * Azure Offer Code.
     */
    public readonly azureOfferCode!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets Azure Pricing Tier - Free, Basic, etc.
     */
    public readonly azurePricingTier!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the Azure Storage Redundancy. Example: Locally Redundant Storage.
     */
    public readonly azureStorageRedundancy!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the Azure VM families.
     */
    public readonly azureVmFamilies!: pulumi.Output<string[] | undefined>;
    /**
     * Confidence Rating in Percentage.
     */
    public /*out*/ readonly confidenceRatingInPercentage!: pulumi.Output<number>;
    /**
     * Gets the collection of cost components.
     */
    public /*out*/ readonly costComponents!: pulumi.Output<types.outputs.CostComponentResponse[]>;
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
     * Gets the distribution by os name.
     */
    public /*out*/ readonly distributionByOsName!: pulumi.Output<{[key: string]: number}>;
    /**
     * Gets the distribution distribution of sqlInstances by service pack insight.
     */
    public /*out*/ readonly distributionByServicePackInsight!: pulumi.Output<{[key: string]: number}>;
    /**
     * Gets the distribution of sqlInstances by support status.
     */
    public /*out*/ readonly distributionBySupportStatus!: pulumi.Output<{[key: string]: number}>;
    /**
     * Gets or sets enterprise agreement subscription id.
     */
    public readonly eaSubscriptionId!: pulumi.Output<string | undefined>;
    /**
     * Gets the group type for the assessment.
     */
    public /*out*/ readonly groupType!: pulumi.Output<string>;
    /**
     * Gets or sets the user configurable setting to display the linux azure hybrid use
     * benefit.
     */
    public readonly linuxAzureHybridUseBenefit!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the aggregate Bandwidth Cost for all machines in the assessment.
     */
    public /*out*/ readonly monthlyBandwidthCost!: pulumi.Output<number>;
    /**
     * Gets or sets the aggregate Compute Cost for all machines in the assessment.
     */
    public /*out*/ readonly monthlyComputeCost!: pulumi.Output<number>;
    /**
     * Gets or sets the aggregate premium storage cost for all machines in the
     * assessment.
     */
    public /*out*/ readonly monthlyPremiumStorageCost!: pulumi.Output<number>;
    /**
     * Gets or sets the aggregate standard SSD storage cost for all the machines in
     * the assessment.
     */
    public /*out*/ readonly monthlyStandardSsdStorageCost!: pulumi.Output<number>;
    /**
     * Gets or sets the aggregate Storage Cost for all machines in the assessment.
     */
    public /*out*/ readonly monthlyStorageCost!: pulumi.Output<number>;
    /**
     * Gets or sets the aggregate ultra storage cost for all machines in the
     * assessment.
     */
    public /*out*/ readonly monthlyUltraStorageCost!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the Number of machines part of the assessment.
     */
    public /*out*/ readonly numberOfMachines!: pulumi.Output<number>;
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
     * Gets or sets the Azure Reserved Instance - 1-Year, 3-Year.
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
     * Gets or sets the Cloud suitability summary for all the machines in the
     * assessment.
     */
    public /*out*/ readonly suitabilitySummary!: pulumi.Output<{[key: string]: number}>;
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
     * Gets or sets the duration for which the VMs are up in the on-premises
     * environment.
     */
    public readonly vmUptime!: pulumi.Output<types.outputs.VmUptimeResponse | undefined>;

    /**
     * Create a AssessmentsOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssessmentsOperationArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["azureDiskTypes"] = args ? args.azureDiskTypes : undefined;
            resourceInputs["azureHybridUseBenefit"] = args ? args.azureHybridUseBenefit : undefined;
            resourceInputs["azureLocation"] = args ? args.azureLocation : undefined;
            resourceInputs["azureOfferCode"] = args ? args.azureOfferCode : undefined;
            resourceInputs["azurePricingTier"] = args ? args.azurePricingTier : undefined;
            resourceInputs["azureStorageRedundancy"] = args ? args.azureStorageRedundancy : undefined;
            resourceInputs["azureVmFamilies"] = args ? args.azureVmFamilies : undefined;
            resourceInputs["currency"] = args ? args.currency : undefined;
            resourceInputs["discountPercentage"] = args ? args.discountPercentage : undefined;
            resourceInputs["eaSubscriptionId"] = args ? args.eaSubscriptionId : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["linuxAzureHybridUseBenefit"] = args ? args.linuxAzureHybridUseBenefit : undefined;
            resourceInputs["percentile"] = args ? args.percentile : undefined;
            resourceInputs["perfDataEndTime"] = args ? args.perfDataEndTime : undefined;
            resourceInputs["perfDataStartTime"] = args ? args.perfDataStartTime : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["reservedInstance"] = args ? args.reservedInstance : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scalingFactor"] = args ? args.scalingFactor : undefined;
            resourceInputs["sizingCriterion"] = args ? args.sizingCriterion : undefined;
            resourceInputs["timeRange"] = args ? args.timeRange : undefined;
            resourceInputs["vmUptime"] = args ? args.vmUptime : undefined;
            resourceInputs["assessmentErrorSummary"] = undefined /*out*/;
            resourceInputs["assessmentType"] = undefined /*out*/;
            resourceInputs["confidenceRatingInPercentage"] = undefined /*out*/;
            resourceInputs["costComponents"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["distributionByOsName"] = undefined /*out*/;
            resourceInputs["distributionByServicePackInsight"] = undefined /*out*/;
            resourceInputs["distributionBySupportStatus"] = undefined /*out*/;
            resourceInputs["groupType"] = undefined /*out*/;
            resourceInputs["monthlyBandwidthCost"] = undefined /*out*/;
            resourceInputs["monthlyComputeCost"] = undefined /*out*/;
            resourceInputs["monthlyPremiumStorageCost"] = undefined /*out*/;
            resourceInputs["monthlyStandardSsdStorageCost"] = undefined /*out*/;
            resourceInputs["monthlyStorageCost"] = undefined /*out*/;
            resourceInputs["monthlyUltraStorageCost"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfMachines"] = undefined /*out*/;
            resourceInputs["pricesTimestamp"] = undefined /*out*/;
            resourceInputs["schemaVersion"] = undefined /*out*/;
            resourceInputs["stage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["suitabilitySummary"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        } else {
            resourceInputs["assessmentErrorSummary"] = undefined /*out*/;
            resourceInputs["assessmentType"] = undefined /*out*/;
            resourceInputs["azureDiskTypes"] = undefined /*out*/;
            resourceInputs["azureHybridUseBenefit"] = undefined /*out*/;
            resourceInputs["azureLocation"] = undefined /*out*/;
            resourceInputs["azureOfferCode"] = undefined /*out*/;
            resourceInputs["azurePricingTier"] = undefined /*out*/;
            resourceInputs["azureStorageRedundancy"] = undefined /*out*/;
            resourceInputs["azureVmFamilies"] = undefined /*out*/;
            resourceInputs["confidenceRatingInPercentage"] = undefined /*out*/;
            resourceInputs["costComponents"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["currency"] = undefined /*out*/;
            resourceInputs["discountPercentage"] = undefined /*out*/;
            resourceInputs["distributionByOsName"] = undefined /*out*/;
            resourceInputs["distributionByServicePackInsight"] = undefined /*out*/;
            resourceInputs["distributionBySupportStatus"] = undefined /*out*/;
            resourceInputs["eaSubscriptionId"] = undefined /*out*/;
            resourceInputs["groupType"] = undefined /*out*/;
            resourceInputs["linuxAzureHybridUseBenefit"] = undefined /*out*/;
            resourceInputs["monthlyBandwidthCost"] = undefined /*out*/;
            resourceInputs["monthlyComputeCost"] = undefined /*out*/;
            resourceInputs["monthlyPremiumStorageCost"] = undefined /*out*/;
            resourceInputs["monthlyStandardSsdStorageCost"] = undefined /*out*/;
            resourceInputs["monthlyStorageCost"] = undefined /*out*/;
            resourceInputs["monthlyUltraStorageCost"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfMachines"] = undefined /*out*/;
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
            resourceInputs["suitabilitySummary"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeRange"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
            resourceInputs["vmUptime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20191001:AssessmentsOperation" }, { type: "azure-native:migrate/v20230315:AssessmentsOperation" }, { type: "azure-native:migrate/v20230401preview:AssessmentsOperation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AssessmentsOperation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AssessmentsOperation resource.
 */
export interface AssessmentsOperationArgs {
    /**
     * Machine Assessment ARM name
     */
    assessmentName?: pulumi.Input<string>;
    /**
     * Gets or sets the azure storage type. Premium, Standard etc.
     */
    azureDiskTypes?: pulumi.Input<pulumi.Input<string | types.enums.AzureDiskType>[]>;
    /**
     * Gets or sets the user configurable setting to display the azure hybrid use
     * benefit.
     */
    azureHybridUseBenefit?: pulumi.Input<string | types.enums.AzureHybridUseBenefit>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    azureLocation?: pulumi.Input<string>;
    /**
     * Azure Offer Code.
     */
    azureOfferCode?: pulumi.Input<string | types.enums.AzureOfferCode>;
    /**
     * Gets or sets Azure Pricing Tier - Free, Basic, etc.
     */
    azurePricingTier?: pulumi.Input<string | types.enums.AzurePricingTier>;
    /**
     * Gets or sets the Azure Storage Redundancy. Example: Locally Redundant Storage.
     */
    azureStorageRedundancy?: pulumi.Input<string | types.enums.AzureStorageRedundancy>;
    /**
     * Gets or sets the Azure VM families.
     */
    azureVmFamilies?: pulumi.Input<pulumi.Input<string | types.enums.AzureVmFamily>[]>;
    /**
     * Currency in which prices should be reported.
     */
    currency?: pulumi.Input<string | types.enums.AzureCurrency>;
    /**
     * Custom discount percentage.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Gets or sets enterprise agreement subscription id.
     */
    eaSubscriptionId?: pulumi.Input<string>;
    /**
     * Group ARM name
     */
    groupName: pulumi.Input<string>;
    /**
     * Gets or sets the user configurable setting to display the linux azure hybrid use
     * benefit.
     */
    linuxAzureHybridUseBenefit?: pulumi.Input<string | types.enums.AzureHybridUseBenefit>;
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
     * Gets or sets the Azure Reserved Instance - 1-Year, 3-Year.
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
    /**
     * Gets or sets the duration for which the VMs are up in the on-premises
     * environment.
     */
    vmUptime?: pulumi.Input<types.inputs.VmUptimeArgs>;
}