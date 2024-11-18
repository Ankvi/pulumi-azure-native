import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Client incident details ex: incidentId , incident source
 */
export interface ClientIncidentDetailsResponse {
    /**
     * Client incident id. ex : id of the incident created to investigate and address the impact if any.
     */
    clientIncidentId?: string;
    /**
     * Client incident source. ex : source system name where the incident is created
     */
    clientIncidentSource?: string;
}

/**
 * Details about connectivity issue. Applicable when root resource causing the issue is not identified. For example, when a VM is impacted due to a network issue, the impacted resource could be VM or the network. In such cases, the connectivity field will have the details about both VM and network.
 */
export interface ConnectivityResponse {
    /**
     * Port number for the connection
     */
    port?: number;
    /**
     * Protocol used for the connection
     */
    protocol?: string;
    /**
     * Source from which the connection was attempted
     */
    source?: SourceOrTargetResponse;
    /**
     * target which connection was attempted
     */
    target?: SourceOrTargetResponse;
}

/**
 * Details of the Connector.
 */
export interface ConnectorPropertiesResponse {
    /**
     * unique id of the connector.
     */
    connectorId: string;
    /**
     * connector type
     */
    connectorType: string;
    /**
     * last run time stamp of this connector in UTC time zone
     */
    lastRunTimeStamp: string;
    /**
     * Resource provisioning state.
     */
    provisioningState: string;
    /**
     * tenant id of this connector
     */
    tenantId: string;
}

/**
 * Article details of the insight like title, description etc
 */
export interface ContentResponse {
    /**
     * Description of the insight
     */
    description: string;
    /**
     * Title of the insight
     */
    title: string;
}

/**
 * ARM error code and error message associated with the impact
 */
export interface ErrorDetailPropertiesResponse {
    /**
     * ARM Error code associated with the impact.
     */
    errorCode?: string;
    /**
     * ARM Error Message associated with the impact
     */
    errorMessage?: string;
}

/**
 * Max and Min Threshold values for the metric
 */
export interface ExpectedValueRangeResponse {
    /**
     * Max threshold value for the metric
     */
    max: number;
    /**
     * Min threshold value for the metric
     */
    min: number;
}

/**
 * details of of the impact for which insight has been generated.
 */
export interface ImpactDetailsResponse {
    /**
     * Time at which impact was ended according to reported impact.
     */
    endTime?: string;
    /**
     * Azure Id of the impact.
     */
    impactId: string;
    /**
     * List of impacted Azure resources.
     */
    impactedResourceId: string;
    /**
     * Time at which impact was started according to reported impact.
     */
    startTime: string;
}

/**
 * Impact category properties.
 */
export interface InsightPropertiesResponse {
    /**
     * additional details of the insight.
     */
    additionalDetails?: any;
    /**
     * category of the insight.
     */
    category: string;
    /**
     * Contains title & description for the insight
     */
    content: ContentResponse;
    /**
     * Identifier of the event that has been correlated with this insight. This can be used to aggregate insights for the same event.
     */
    eventId?: string;
    /**
     * Time of the event, which has been correlated the impact.
     */
    eventTime?: string;
    /**
     * Identifier that can be used to group similar insights.
     */
    groupId?: string;
    /**
     * details of of the impact for which insight has been generated.
     */
    impact: ImpactDetailsResponse;
    /**
     * unique id of the insight.
     */
    insightUniqueId: string;
    /**
     * Resource provisioning state.
     */
    provisioningState: string;
    /**
     * status of the insight. example resolved, repaired, other.
     */
    status?: string;
}

/**
 * Details about impacted performance metrics. Applicable for performance related impact
 */
export interface PerformanceResponse {
    /**
     * Observed value for the metric
     */
    actual?: number;
    /**
     * Threshold value for the metric
     */
    expected?: number;
    /**
     * Max and Min Threshold values for the metric
     */
    expectedValueRange?: ExpectedValueRangeResponse;
    /**
     * Name of the Metric examples:  Disk, IOPs, CPU, GPU, Memory, details can be found from /impactCategories API
     */
    metricName?: string;
    /**
     * Unit of the metric ex: Bytes, Percentage, Count, Seconds, Milliseconds, Bytes/Second, Count/Second, etc.., Other
     */
    unit?: string;
}

/**
 * Resource details
 */
export interface SourceOrTargetResponse {
    /**
     * Azure resource id, example /subscription/{subscription}/resourceGroup/{rg}/Microsoft.compute/virtualMachine/{vmName}
     */
    azureResourceId?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Workload impact properties
 */
export interface WorkloadImpactPropertiesResponse {
    /**
     * Additional fields related to impact, applicable fields per resource type are list under /impactCategories API
     */
    additionalProperties?: any;
    /**
     * The ARM correlation ids, this is important field for control plane related impacts
     */
    armCorrelationIds?: string[];
    /**
     * Client incident details ex: incidentId , incident source
     */
    clientIncidentDetails?: ClientIncidentDetailsResponse;
    /**
     * Degree of confidence on the impact being a platform issue
     */
    confidenceLevel?: string;
    /**
     * Details about connectivity issue. Applicable when root resource causing the issue is not identified. For example, when a VM is impacted due to a network issue, the impacted resource is identified as the VM, but the root cause is the network. In such cases, the connectivity field will have the details about the network issue
     */
    connectivity?: ConnectivityResponse;
    /**
     * Time at which impact has ended 
     */
    endDateTime?: string;
    /**
     * ARM error code and error message associated with the impact
     */
    errorDetails?: ErrorDetailPropertiesResponse;
    /**
     * Category of the impact,  details can found from /impactCategories API
     */
    impactCategory: string;
    /**
     * A detailed description of the impact
     */
    impactDescription?: string;
    /**
     * Use this field to group impacts
     */
    impactGroupId?: string;
    /**
     * Unique ID of the impact (UUID)
     */
    impactUniqueId: string;
    /**
     * Azure resource id of the impacted resource
     */
    impactedResourceId: string;
    /**
     * Details about performance issue. Applicable for performance impacts.
     */
    performance?: PerformanceResponse[];
    /**
     * Resource provisioning state.
     */
    provisioningState: string;
    /**
     * Time at which impact is reported
     */
    reportedTimeUtc: string;
    /**
     * Time at which impact was observed 
     */
    startDateTime: string;
    /**
     * Information about the impacted workload
     */
    workload?: WorkloadResponse;
}

/**
 * Information about the impacted workload
 */
export interface WorkloadResponse {
    /**
     * the scenario for the workload
     */
    context?: string;
    /**
     * Tool used to interact with Azure. SDK, AzPortal, etc.., Other
     */
    toolset?: string;
}
