import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * AVS assessment resource.
 * Azure REST API version: 2023-03-15.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview.
 */
export class AvsAssessmentsOperation extends pulumi.CustomResource {
    /**
     * Get an existing AvsAssessmentsOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AvsAssessmentsOperation {
        return new AvsAssessmentsOperation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:AvsAssessmentsOperation';

    /**
     * Returns true if the given object is an instance of AvsAssessmentsOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AvsAssessmentsOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AvsAssessmentsOperation.__pulumiType;
    }

    /**
     * Gets the assessment error summary.
     *             This is the number of machines
     * affected by each type of error in this assessment.
     */
    public /*out*/ readonly assessmentErrorSummary!: pulumi.Output<{[key: string]: number}>;
    /**
     * Assessment type of the assessment.
     */
    public /*out*/ readonly assessmentType!: pulumi.Output<string>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    public readonly azureLocation!: pulumi.Output<string | undefined>;
    /**
     * Azure Offer code according to which cost estimation is done.
     */
    public readonly azureOfferCode!: pulumi.Output<string | undefined>;
    /**
     * Confidence Rating in Percentage.
     */
    public /*out*/ readonly confidenceRatingInPercentage!: pulumi.Output<number>;
    /**
     * Predicted CPU utilization.
     */
    public /*out*/ readonly cpuUtilization!: pulumi.Output<number>;
    /**
     * Date and Time when assessment was created.
     */
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    /**
     * Currency in which prices should be reported.
     */
    public readonly currency!: pulumi.Output<string | undefined>;
    /**
     * De-duplication compression.
     */
    public readonly dedupeCompression!: pulumi.Output<number | undefined>;
    /**
     * Custom discount percentage.
     */
    public readonly discountPercentage!: pulumi.Output<number | undefined>;
    /**
     * Failures to tolerate and RAID level in a common property.
     */
    public readonly failuresToTolerateAndRaidLevel!: pulumi.Output<string | undefined>;
    /**
     * Gets the group type for the assessment.
     */
    public /*out*/ readonly groupType!: pulumi.Output<string>;
    /**
     * Is Stretch Cluster Enabled.
     */
    public readonly isStretchClusterEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Limiting factor.
     */
    public /*out*/ readonly limitingFactor!: pulumi.Output<string>;
    /**
     * Memory overcommit.
     */
    public readonly memOvercommit!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * AVS node type.
     */
    public readonly nodeType!: pulumi.Output<string | undefined>;
    /**
     * Number of machines part of the assessment.
     */
    public /*out*/ readonly numberOfMachines!: pulumi.Output<number>;
    /**
     * Recommended number of nodes.
     */
    public /*out*/ readonly numberOfNodes!: pulumi.Output<number>;
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
     * Time when the Azure Prices were queried. Date-Time represented in ISO-8601
     * format.
     */
    public /*out*/ readonly pricesTimestamp!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Predicted RAM utilization.
     */
    public /*out*/ readonly ramUtilization!: pulumi.Output<number>;
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
     * Predicted storage utilization.
     */
    public /*out*/ readonly storageUtilization!: pulumi.Output<number>;
    /**
     * Gets or sets the Assessment cloud suitability.
     */
    public /*out*/ readonly suitability!: pulumi.Output<string>;
    /**
     * Gets or sets the Assessment suitability explanation.
     */
    public /*out*/ readonly suitabilityExplanation!: pulumi.Output<string>;
    /**
     * Cloud suitability summary for all the machines in the assessment.
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
     * Predicted total CPU cores used.
     */
    public /*out*/ readonly totalCpuCores!: pulumi.Output<number>;
    /**
     * Total monthly cost.
     */
    public /*out*/ readonly totalMonthlyCost!: pulumi.Output<number>;
    /**
     * Predicted total RAM used in GB.
     */
    public /*out*/ readonly totalRamInGB!: pulumi.Output<number>;
    /**
     * Predicted total Storage used in GB.
     */
    public /*out*/ readonly totalStorageInGB!: pulumi.Output<number>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Date and Time when assessment was last updated.
     */
    public /*out*/ readonly updatedTimestamp!: pulumi.Output<string>;
    /**
     * VCPU over subscription.
     */
    public readonly vcpuOversubscription!: pulumi.Output<number | undefined>;

    /**
     * Create a AvsAssessmentsOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AvsAssessmentsOperationArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["azureLocation"] = args ? args.azureLocation : undefined;
            resourceInputs["azureOfferCode"] = args ? args.azureOfferCode : undefined;
            resourceInputs["currency"] = args ? args.currency : undefined;
            resourceInputs["dedupeCompression"] = args ? args.dedupeCompression : undefined;
            resourceInputs["discountPercentage"] = args ? args.discountPercentage : undefined;
            resourceInputs["failuresToTolerateAndRaidLevel"] = args ? args.failuresToTolerateAndRaidLevel : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["isStretchClusterEnabled"] = args ? args.isStretchClusterEnabled : undefined;
            resourceInputs["memOvercommit"] = args ? args.memOvercommit : undefined;
            resourceInputs["nodeType"] = args ? args.nodeType : undefined;
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
            resourceInputs["vcpuOversubscription"] = args ? args.vcpuOversubscription : undefined;
            resourceInputs["assessmentErrorSummary"] = undefined /*out*/;
            resourceInputs["assessmentType"] = undefined /*out*/;
            resourceInputs["confidenceRatingInPercentage"] = undefined /*out*/;
            resourceInputs["cpuUtilization"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["groupType"] = undefined /*out*/;
            resourceInputs["limitingFactor"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfMachines"] = undefined /*out*/;
            resourceInputs["numberOfNodes"] = undefined /*out*/;
            resourceInputs["pricesTimestamp"] = undefined /*out*/;
            resourceInputs["ramUtilization"] = undefined /*out*/;
            resourceInputs["schemaVersion"] = undefined /*out*/;
            resourceInputs["stage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageUtilization"] = undefined /*out*/;
            resourceInputs["suitability"] = undefined /*out*/;
            resourceInputs["suitabilityExplanation"] = undefined /*out*/;
            resourceInputs["suitabilitySummary"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalCpuCores"] = undefined /*out*/;
            resourceInputs["totalMonthlyCost"] = undefined /*out*/;
            resourceInputs["totalRamInGB"] = undefined /*out*/;
            resourceInputs["totalStorageInGB"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        } else {
            resourceInputs["assessmentErrorSummary"] = undefined /*out*/;
            resourceInputs["assessmentType"] = undefined /*out*/;
            resourceInputs["azureLocation"] = undefined /*out*/;
            resourceInputs["azureOfferCode"] = undefined /*out*/;
            resourceInputs["confidenceRatingInPercentage"] = undefined /*out*/;
            resourceInputs["cpuUtilization"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["currency"] = undefined /*out*/;
            resourceInputs["dedupeCompression"] = undefined /*out*/;
            resourceInputs["discountPercentage"] = undefined /*out*/;
            resourceInputs["failuresToTolerateAndRaidLevel"] = undefined /*out*/;
            resourceInputs["groupType"] = undefined /*out*/;
            resourceInputs["isStretchClusterEnabled"] = undefined /*out*/;
            resourceInputs["limitingFactor"] = undefined /*out*/;
            resourceInputs["memOvercommit"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeType"] = undefined /*out*/;
            resourceInputs["numberOfMachines"] = undefined /*out*/;
            resourceInputs["numberOfNodes"] = undefined /*out*/;
            resourceInputs["percentile"] = undefined /*out*/;
            resourceInputs["perfDataEndTime"] = undefined /*out*/;
            resourceInputs["perfDataStartTime"] = undefined /*out*/;
            resourceInputs["pricesTimestamp"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["ramUtilization"] = undefined /*out*/;
            resourceInputs["reservedInstance"] = undefined /*out*/;
            resourceInputs["scalingFactor"] = undefined /*out*/;
            resourceInputs["schemaVersion"] = undefined /*out*/;
            resourceInputs["sizingCriterion"] = undefined /*out*/;
            resourceInputs["stage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageUtilization"] = undefined /*out*/;
            resourceInputs["suitability"] = undefined /*out*/;
            resourceInputs["suitabilityExplanation"] = undefined /*out*/;
            resourceInputs["suitabilitySummary"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeRange"] = undefined /*out*/;
            resourceInputs["totalCpuCores"] = undefined /*out*/;
            resourceInputs["totalMonthlyCost"] = undefined /*out*/;
            resourceInputs["totalRamInGB"] = undefined /*out*/;
            resourceInputs["totalStorageInGB"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
            resourceInputs["vcpuOversubscription"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20230315:AvsAssessmentsOperation" }, { type: "azure-native:migrate/v20230401preview:AvsAssessmentsOperation" }, { type: "azure-native:migrate/v20230501preview:AvsAssessmentsOperation" }, { type: "azure-native:migrate/v20230909preview:AvsAssessmentsOperation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AvsAssessmentsOperation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AvsAssessmentsOperation resource.
 */
export interface AvsAssessmentsOperationArgs {
    /**
     * AVS Assessment ARM name
     */
    assessmentName?: pulumi.Input<string>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    azureLocation?: pulumi.Input<string | types.enums.AzureLocation>;
    /**
     * Azure Offer code according to which cost estimation is done.
     */
    azureOfferCode?: pulumi.Input<string | types.enums.AzureOfferCode>;
    /**
     * Currency in which prices should be reported.
     */
    currency?: pulumi.Input<string | types.enums.AzureCurrency>;
    /**
     * De-duplication compression.
     */
    dedupeCompression?: pulumi.Input<number>;
    /**
     * Custom discount percentage.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Failures to tolerate and RAID level in a common property.
     */
    failuresToTolerateAndRaidLevel?: pulumi.Input<string | types.enums.FttAndRaidLevel>;
    /**
     * Group ARM name
     */
    groupName: pulumi.Input<string>;
    /**
     * Is Stretch Cluster Enabled.
     */
    isStretchClusterEnabled?: pulumi.Input<boolean>;
    /**
     * Memory overcommit.
     */
    memOvercommit?: pulumi.Input<number>;
    /**
     * AVS node type.
     */
    nodeType?: pulumi.Input<string | types.enums.AzureAvsNodeType>;
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
     * VCPU over subscription.
     */
    vcpuOversubscription?: pulumi.Input<number>;
}