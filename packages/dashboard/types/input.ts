import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Integrations for Azure Monitor Workspace.
 */
export interface AzureMonitorWorkspaceIntegrationArgs {
    /**
     * The resource Id of the connected Azure Monitor Workspace.
     */
    azureMonitorWorkspaceResourceId?: pulumi.Input<string>;
}

/**
 * GrafanaIntegrations is a bundled observability experience (e.g. pre-configured data source, tailored Grafana dashboards, alerting defaults) for common monitoring scenarios.
 */
export interface GrafanaIntegrationsArgs {
    azureMonitorWorkspaceIntegrations?: pulumi.Input<pulumi.Input<AzureMonitorWorkspaceIntegrationArgs>[]>;
}

export interface IntegrationFabricPropertiesArgs {
    /**
     * The resource Id of the Azure resource which is used to configure Grafana data source. E.g., an Azure Monitor Workspace, an Azure Data Explorer cluster, etc.
     */
    dataSourceResourceId?: pulumi.Input<string>;
    /**
     * A list of integration scenarios covered by this integration fabric
     */
    scenarios?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource Id of the Azure resource being integrated with Azure Managed Grafana. E.g., an Azure Kubernetes Service cluster.
     */
    targetResourceId?: pulumi.Input<string>;
}

/**
 * Properties specific to the grafana resource.
 */
export interface ManagedGrafanaPropertiesArgs {
    /**
     * The api key setting of the Grafana instance.
     */
    apiKey?: pulumi.Input<string | enums.ApiKey>;
    /**
     * Scope for dns deterministic name hash calculation.
     */
    autoGeneratedDomainNameLabelScope?: pulumi.Input<string | enums.AutoGeneratedDomainNameLabelScope>;
    /**
     * Whether a Grafana instance uses deterministic outbound IPs.
     */
    deterministicOutboundIP?: pulumi.Input<string | enums.DeterministicOutboundIP>;
    /**
     * GrafanaIntegrations is a bundled observability experience (e.g. pre-configured data source, tailored Grafana dashboards, alerting defaults) for common monitoring scenarios.
     */
    grafanaIntegrations?: pulumi.Input<GrafanaIntegrationsArgs>;
    /**
     * Indicate the state for enable or disable traffic over the public interface.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
    /**
     * The zone redundancy setting of the Grafana instance.
     */
    zoneRedundancy?: pulumi.Input<string | enums.ZoneRedundancy>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

export interface ResourceSkuArgs {
    name: pulumi.Input<string>;
}





