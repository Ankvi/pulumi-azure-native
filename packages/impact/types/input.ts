import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Client incident details ex: incidentId , incident source
 */
export interface ClientIncidentDetailsArgs {
    /**
     * Client incident id. ex : id of the incident created to investigate and address the impact if any.
     */
    clientIncidentId?: pulumi.Input<string | undefined>;
    /**
     * Client incident source. ex : source system name where the incident is created
     */
    clientIncidentSource?: pulumi.Input<string | enums.IncidentSource | undefined>;
}

/**
 * Details about connectivity issue. Applicable when root resource causing the issue is not identified. For example, when a VM is impacted due to a network issue, the impacted resource could be VM or the network. In such cases, the connectivity field will have the details about both VM and network.
 */
export interface ConnectivityArgs {
    /**
     * Port number for the connection
     */
    port?: pulumi.Input<number | undefined>;
    /**
     * Protocol used for the connection
     */
    protocol?: pulumi.Input<string | enums.Protocol | undefined>;
    /**
     * Source from which the connection was attempted
     */
    source?: pulumi.Input<SourceOrTargetArgs | undefined>;
    /**
     * target which connection was attempted
     */
    target?: pulumi.Input<SourceOrTargetArgs | undefined>;
}

/**
 * Details of the Connector.
 */
export interface ConnectorPropertiesArgs {
    /**
     * connector type
     */
    connectorType: pulumi.Input<string | enums.Platform>;
}

/**
 * Article details of the insight like title, description etc
 */
export interface ContentArgs {
    /**
     * Description of the insight
     */
    description: pulumi.Input<string>;
    /**
     * Title of the insight
     */
    title: pulumi.Input<string>;
}

/**
 * ARM error code and error message associated with the impact
 */
export interface ErrorDetailPropertiesArgs {
    /**
     * ARM Error code associated with the impact.
     */
    errorCode?: pulumi.Input<string | undefined>;
    /**
     * ARM Error Message associated with the impact
     */
    errorMessage?: pulumi.Input<string | undefined>;
}

/**
 * Max and Min Threshold values for the metric
 */
export interface ExpectedValueRangeArgs {
    /**
     * Max threshold value for the metric
     */
    max: pulumi.Input<number>;
    /**
     * Min threshold value for the metric
     */
    min: pulumi.Input<number>;
}

/**
 * details of of the impact for which insight has been generated.
 */
export interface ImpactDetailsArgs {
    /**
     * Time at which impact was ended according to reported impact.
     */
    endTime?: pulumi.Input<string | undefined>;
    /**
     * Azure Id of the impact.
     */
    impactId: pulumi.Input<string>;
    /**
     * List of impacted Azure resources.
     */
    impactedResourceId: pulumi.Input<string>;
    /**
     * Time at which impact was started according to reported impact.
     */
    startTime: pulumi.Input<string>;
}

/**
 * Impact category properties.
 */
export interface InsightPropertiesArgs {
    /**
     * additional details of the insight.
     */
    additionalDetails?: any | undefined;
    /**
     * category of the insight.
     */
    category: pulumi.Input<string>;
    /**
     * Contains title & description for the insight
     */
    content: pulumi.Input<ContentArgs>;
    /**
     * Identifier of the event that has been correlated with this insight. This can be used to aggregate insights for the same event.
     */
    eventId?: pulumi.Input<string | undefined>;
    /**
     * Time of the event, which has been correlated the impact.
     */
    eventTime?: pulumi.Input<string | undefined>;
    /**
     * Identifier that can be used to group similar insights.
     */
    groupId?: pulumi.Input<string | undefined>;
    /**
     * details of of the impact for which insight has been generated.
     */
    impact: pulumi.Input<ImpactDetailsArgs>;
    /**
     * unique id of the insight.
     */
    insightUniqueId: pulumi.Input<string>;
    /**
     * status of the insight. example resolved, repaired, other.
     */
    status?: pulumi.Input<string | undefined>;
}

/**
 * Details about impacted performance metrics. Applicable for performance related impact
 */
export interface PerformanceArgs {
    /**
     * Observed value for the metric
     */
    actual?: pulumi.Input<number | undefined>;
    /**
     * Threshold value for the metric
     */
    expected?: pulumi.Input<number | undefined>;
    /**
     * Max and Min Threshold values for the metric
     */
    expectedValueRange?: pulumi.Input<ExpectedValueRangeArgs | undefined>;
    /**
     * Name of the Metric examples:  Disk, IOPs, CPU, GPU, Memory, details can be found from /impactCategories API
     */
    metricName?: pulumi.Input<string | undefined>;
    /**
     * Unit of the metric ex: Bytes, Percentage, Count, Seconds, Milliseconds, Bytes/Second, Count/Second, etc.., Other
     */
    unit?: pulumi.Input<string | enums.MetricUnit | undefined>;
}

/**
 * Resource details
 */
export interface SourceOrTargetArgs {
    /**
     * Azure resource id, example /subscription/{subscription}/resourceGroup/{rg}/Microsoft.compute/virtualMachine/{vmName}
     */
    azureResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Information about the impacted workload
 */
export interface WorkloadArgs {
    /**
     * the scenario for the workload
     */
    context?: pulumi.Input<string | undefined>;
    /**
     * Tool used to interact with Azure. SDK, AzPortal, etc.., Other
     */
    toolset?: pulumi.Input<string | enums.Toolset | undefined>;
}

/**
 * Workload impact properties
 */
export interface WorkloadImpactPropertiesArgs {
    /**
     * Additional fields related to impact, applicable fields per resource type are list under /impactCategories API
     */
    additionalProperties?: any | undefined;
    /**
     * The ARM correlation ids, this is important field for control plane related impacts
     */
    armCorrelationIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Client incident details ex: incidentId , incident source
     */
    clientIncidentDetails?: pulumi.Input<ClientIncidentDetailsArgs | undefined>;
    /**
     * Degree of confidence on the impact being a platform issue
     */
    confidenceLevel?: pulumi.Input<string | enums.ConfidenceLevel | undefined>;
    /**
     * Details about connectivity issue. Applicable when root resource causing the issue is not identified. For example, when a VM is impacted due to a network issue, the impacted resource is identified as the VM, but the root cause is the network. In such cases, the connectivity field will have the details about the network issue
     */
    connectivity?: pulumi.Input<ConnectivityArgs | undefined>;
    /**
     * Time at which impact has ended
     */
    endDateTime?: pulumi.Input<string | undefined>;
    /**
     * ARM error code and error message associated with the impact
     */
    errorDetails?: pulumi.Input<ErrorDetailPropertiesArgs | undefined>;
    /**
     * Category of the impact,  details can found from /impactCategories API
     */
    impactCategory: pulumi.Input<string>;
    /**
     * A detailed description of the impact
     */
    impactDescription?: pulumi.Input<string | undefined>;
    /**
     * Use this field to group impacts
     */
    impactGroupId?: pulumi.Input<string | undefined>;
    /**
     * Azure resource id of the impacted resource
     */
    impactedResourceId: pulumi.Input<string>;
    /**
     * Details about performance issue. Applicable for performance impacts.
     */
    performance?: pulumi.Input<pulumi.Input<PerformanceArgs>[] | undefined>;
    /**
     * Time at which impact was observed
     */
    startDateTime: pulumi.Input<string>;
    /**
     * Information about the impacted workload
     */
    workload?: pulumi.Input<WorkloadArgs | undefined>;
}
