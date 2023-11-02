import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Collector agent property class.
     */
    export interface CollectorAgentPropertiesBaseResponse {
        /**
         * Gets the collector agent id.
         */
        id?: string;
        /**
         * Gets the collector last heartbeat time.
         */
        lastHeartbeatUtc?: string;
        /**
         * Gets or sets the SPN details.
         */
        spnDetails?: CollectorAgentSpnPropertiesBaseResponse;
        /**
         * Gets the collector agent version.
         */
        version?: string;
    }

    /**
     * Collector agent SPN details class.
     */
    export interface CollectorAgentSpnPropertiesBaseResponse {
        /**
         * Gets the AAD application id.
         */
        applicationId?: string;
        /**
         * Gets the AAD audience url.
         */
        audience?: string;
        /**
         * Gets the AAD authority endpoint.
         */
        authority?: string;
        /**
         * Gets the object id of the AAD application.
         */
        objectId?: string;
        /**
         * Gets the tenant id of the AAD application.
         */
        tenantId?: string;
    }

    /**
     * Class to represent the component of the cost.
     */
    export interface CostComponentResponse {
        /**
         * The textual description of the component.
         */
        description?: string;
        /**
         * Gets the name of the component.
         */
        name: string;
        /**
         * The value of the component.
         */
        value?: number;
    }

    /**
     * Entity Uptime.
     */
    export interface EntityUptimeResponse {
        /**
         * Gets the days per month.
         */
        daysPerMonth?: number;
        /**
         * Gets the hours per day.
         */
        hoursPerDay?: number;
    }

    /**
     * Private endpoint connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * The group ids for the private endpoint resource.
         */
        groupIds: string[];
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The private endpoint resource.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * The private endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for private endpoint.
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * SQL database assessment settings.
     */
    export interface SqlDbSettingsResponse {
        /**
         * Gets or sets the azure SQL compute tier.
         */
        azureSqlComputeTier?: string;
        /**
         * Gets or sets the azure PAAS SQL instance type.
         */
        azureSqlDataBaseType?: string;
        /**
         * Gets or sets the azure SQL purchase model.
         */
        azureSqlPurchaseModel?: string;
        /**
         * Gets or sets the azure SQL service tier.
         */
        azureSqlServiceTier?: string;
    }

    /**
     * SQL managed instance assessment settings.
     */
    export interface SqlMiSettingsResponse {
        /**
         * Gets or sets the azure PAAS SQL instance type.
         */
        azureSqlInstanceType?: string;
        /**
         * Gets or sets the azure SQL service tier.
         */
        azureSqlServiceTier?: string;
    }

    /**
     * SQL VM assessment settings.
     */
    export interface SqlVmSettingsResponse {
        /**
         * Gets or sets the Azure VM families (calling instance series to keep it
         * consistent with other targets).
         */
        instanceSeries?: string[];
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
     * Details on the total up-time for the VM.
     */
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
