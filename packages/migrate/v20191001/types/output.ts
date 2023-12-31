import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties of an assessment.
     */
    export interface AssessmentPropertiesResponse {
        /**
         * Storage type selected for this disk.
         */
        azureDiskType: string;
        /**
         * AHUB discount on windows virtual machines.
         */
        azureHybridUseBenefit: string;
        /**
         * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
         */
        azureLocation: string;
        /**
         * Offer code according to which cost estimation is done.
         */
        azureOfferCode: string;
        /**
         * Pricing tier for Size evaluation.
         */
        azurePricingTier: string;
        /**
         * Storage Redundancy type offered by Azure.
         */
        azureStorageRedundancy: string;
        /**
         * List of azure VM families.
         */
        azureVmFamilies: string[];
        /**
         * Confidence rating percentage for assessment. Can be in the range [0, 100].
         */
        confidenceRatingInPercentage: number;
        /**
         * Time when this project was created. Date-Time represented in ISO-8601 format.
         */
        createdTimestamp: string;
        /**
         * Currency to report prices in.
         */
        currency: string;
        /**
         * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
         */
        discountPercentage: number;
        /**
         * Enterprise agreement subscription arm id.
         */
        eaSubscriptionId: string;
        /**
         * Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
         */
        monthlyBandwidthCost: number;
        /**
         * Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
         */
        monthlyComputeCost: number;
        /**
         * Monthly premium storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
         */
        monthlyPremiumStorageCost: number;
        /**
         * Monthly standard SSD storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
         */
        monthlyStandardSSDStorageCost: number;
        /**
         * Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
         */
        monthlyStorageCost: number;
        /**
         * Number of assessed machines part of this assessment.
         */
        numberOfMachines: number;
        /**
         * Percentile of performance data used to recommend Azure size.
         */
        percentile: string;
        /**
         * End time to consider performance data for assessment
         */
        perfDataEndTime: string;
        /**
         * Start time to consider performance data for assessment
         */
        perfDataStartTime: string;
        /**
         * Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format.
         */
        pricesTimestamp: string;
        /**
         * Azure reserved instance.
         */
        reservedInstance: string;
        /**
         * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
         */
        scalingFactor: number;
        /**
         * Assessment sizing criterion.
         */
        sizingCriterion: string;
        /**
         * User configurable setting that describes the status of the assessment.
         */
        stage: string;
        /**
         * Whether the assessment has been created and is valid.
         */
        status: string;
        /**
         * Time range of performance data used to recommend a size.
         */
        timeRange: string;
        /**
         * Time when this project was last updated. Date-Time represented in ISO-8601 format.
         */
        updatedTimestamp: string;
        /**
         * Specify the duration for which the VMs are up in the on-premises environment.
         */
        vmUptime: VmUptimeResponse;
    }

    export interface CollectorAgentPropertiesResponse {
        id: string;
        lastHeartbeatUtc: string;
        spnDetails?: CollectorBodyAgentSpnPropertiesResponse;
        version: string;
    }

    export interface CollectorBodyAgentSpnPropertiesResponse {
        /**
         * Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        applicationId?: string;
        /**
         * Intended audience for the service principal.
         */
        audience?: string;
        /**
         * AAD Authority URL which was used to request the token for the service principal.
         */
        authority?: string;
        /**
         * Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        objectId?: string;
        /**
         * Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        tenantId?: string;
    }

    export interface CollectorPropertiesResponse {
        agentProperties?: CollectorAgentPropertiesResponse;
        /**
         * Time when this collector was created. Date-Time represented in ISO-8601 format.
         */
        createdTimestamp: string;
        /**
         * The ARM id of the discovery service site.
         */
        discoverySiteId?: string;
        /**
         * Time when this collector was updated. Date-Time represented in ISO-8601 format.
         */
        updatedTimestamp: string;
    }

    /**
     * Properties of group resource.
     */
    export interface GroupPropertiesResponse {
        /**
         * If the assessments are in running state.
         */
        areAssessmentsRunning: boolean;
        /**
         * List of References to Assessments created on this group.
         */
        assessments: string[];
        /**
         * Time when this group was created. Date-Time represented in ISO-8601 format.
         */
        createdTimestamp: string;
        /**
         * Whether the group has been created and is valid.
         */
        groupStatus: string;
        /**
         * The type of group.
         */
        groupType?: string;
        /**
         * Number of machines part of this group.
         */
        machineCount: number;
        /**
         * Time when this group was last updated. Date-Time represented in ISO-8601 format.
         */
        updatedTimestamp: string;
    }

    export interface ImportCollectorPropertiesResponse {
        createdTimestamp: string;
        discoverySiteId?: string;
        updatedTimestamp: string;
    }

    /**
     * Private endpoint connection properties.
     */
    export interface PrivateEndpointConnectionPropertiesResponse {
        /**
         * ARM id for the private endpoint resource corresponding to the connection.
         */
        privateEndpoint: ResourceIdResponse;
        /**
         * State of the private endpoint connection.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * Indicates whether there is an ongoing operation on the private endpoint.
         */
        provisioningState: string;
    }

    /**
     * A private endpoint connection for a project.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * For optimistic concurrency control.
         */
        eTag?: string;
        /**
         * Path reference to this private endpoint endpoint connection. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/privateEndpointConnections/{privateEndpointConnectionName}
         */
        id: string;
        /**
         * Name of the private endpoint endpoint connection.
         */
        name: string;
        /**
         * Properties of the private endpoint endpoint connection.
         */
        properties: PrivateEndpointConnectionPropertiesResponse;
        /**
         * Type of the object = [Microsoft.Migrate/assessmentProjects/privateEndpointConnections].
         */
        type: string;
    }

    /**
     * State of a private endpoint connection.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * Actions required on the private endpoint connection.
         */
        actionsRequired?: string;
        /**
         * Description of the private endpoint connection.
         */
        description?: string;
        /**
         * Connection status of the private endpoint connection.
         */
        status?: string;
    }

    /**
     * Properties of a project.
     */
    export interface ProjectPropertiesResponse {
        /**
         * Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
         */
        assessmentSolutionId?: string;
        /**
         * Time when this project was created. Date-Time represented in ISO-8601 format.
         */
        createdTimestamp: string;
        /**
         * The ARM id of the storage account used for interactions when public access is disabled.
         */
        customerStorageAccountArmId?: string;
        /**
         * The ARM id of service map workspace created by customer.
         */
        customerWorkspaceId?: string;
        /**
         * Location of service map workspace created by customer.
         */
        customerWorkspaceLocation?: string;
        /**
         * Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created.
         */
        lastAssessmentTimestamp: string;
        /**
         * Number of assessments created in the project.
         */
        numberOfAssessments: number;
        /**
         * Number of groups created in the project.
         */
        numberOfGroups: number;
        /**
         * Number of machines in the project.
         */
        numberOfMachines: number;
        /**
         * The list of private endpoint connections to the project.
         */
        privateEndpointConnections: PrivateEndpointConnectionResponse[];
        /**
         * Assessment project status.
         */
        projectStatus?: string;
        /**
         * Provisioning state of the project.
         */
        provisioningState: string;
        /**
         * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
         */
        publicNetworkAccess?: string;
        /**
         * Endpoint at which the collector agent can call agent REST API.
         */
        serviceEndpoint: string;
        /**
         * Time when this project was last updated. Date-Time represented in ISO-8601 format.
         */
        updatedTimestamp: string;
    }

    /**
     * ARM id for a resource.
     */
    export interface ResourceIdResponse {
        id: string;
    }

    export interface VmUptimeResponse {
        /**
         * Number of days in a month for VM uptime.
         */
        daysPerMonth?: number;
        /**
         * Number of hours per day for VM uptime.
         */
        hoursPerDay?: number;
    }
