import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Integrations for Azure Monitor Workspace.
 */
export interface AzureMonitorWorkspaceIntegrationResponse {
    /**
     * The resource Id of the connected Azure Monitor Workspace.
     */
    azureMonitorWorkspaceResourceId?: string;
}

/**
 * Enterprise settings of a Grafana instance
 */
export interface EnterpriseConfigurationsResponse {
    /**
     * The AutoRenew setting of the Enterprise subscription
     */
    marketplaceAutoRenew?: string;
    /**
     * The Plan Id of the Azure Marketplace subscription for the Enterprise plugins
     */
    marketplacePlanId?: string;
}

/**
 * Server configurations of a Grafana instance
 */
export interface GrafanaConfigurationsResponse {
    /**
     * Grafana security settings
     */
    security?: SecurityResponse;
    /**
     * Email server settings.
     * https://grafana.com/docs/grafana/v9.0/setup-grafana/configure-grafana/#smtp
     */
    smtp?: SmtpResponse;
    /**
     * Grafana Snapshots settings
     */
    snapshots?: SnapshotsResponse;
    /**
     * Grafana users settings
     */
    users?: UsersResponse;
}
/**
 * grafanaConfigurationsResponseProvideDefaults sets the appropriate defaults for GrafanaConfigurationsResponse
 */
export function grafanaConfigurationsResponseProvideDefaults(val: GrafanaConfigurationsResponse): GrafanaConfigurationsResponse {
    return {
        ...val,
        smtp: (val.smtp ? smtpResponseProvideDefaults(val.smtp) : undefined),
    };
}

/**
 * GrafanaIntegrations is a bundled observability experience (e.g. pre-configured data source, tailored Grafana dashboards, alerting defaults) for common monitoring scenarios.
 */
export interface GrafanaIntegrationsResponse {
    azureMonitorWorkspaceIntegrations?: AzureMonitorWorkspaceIntegrationResponse[];
}

/**
 * Plugin of Grafana
 */
export interface GrafanaPluginResponse {
    /**
     * Grafana plugin id
     */
    pluginId: string;
}

export interface IntegrationFabricPropertiesResponse {
    /**
     * The resource Id of the Azure resource which is used to configure Grafana data source. E.g., an Azure Monitor Workspace, an Azure Data Explorer cluster, etc.
     */
    dataSourceResourceId?: string;
    /**
     * Provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * A list of integration scenarios covered by this integration fabric
     */
    scenarios?: string[];
    /**
     * The resource Id of the Azure resource being integrated with Azure Managed Grafana. E.g., an Azure Kubernetes Service cluster.
     */
    targetResourceId?: string;
}

/**
 * Properties specific to the grafana resource.
 */
export interface ManagedGrafanaPropertiesResponse {
    /**
     * The api key setting of the Grafana instance.
     */
    apiKey?: string;
    /**
     * Scope for dns deterministic name hash calculation.
     */
    autoGeneratedDomainNameLabelScope?: string;
    /**
     * Whether a Grafana instance uses deterministic outbound IPs.
     */
    deterministicOutboundIP?: string;
    /**
     * The endpoint of the Grafana instance.
     */
    endpoint: string;
    /**
     * Enterprise settings of a Grafana instance
     */
    enterpriseConfigurations?: EnterpriseConfigurationsResponse;
    /**
     * Server configurations of a Grafana instance
     */
    grafanaConfigurations?: GrafanaConfigurationsResponse;
    /**
     * GrafanaIntegrations is a bundled observability experience (e.g. pre-configured data source, tailored Grafana dashboards, alerting defaults) for common monitoring scenarios.
     */
    grafanaIntegrations?: GrafanaIntegrationsResponse;
    /**
     * The major Grafana software version to target.
     */
    grafanaMajorVersion?: string;
    /**
     * Installed plugin list of the Grafana instance. Key is plugin id, value is plugin definition.
     */
    grafanaPlugins?: {[key: string]: GrafanaPluginResponse};
    /**
     * The Grafana software version.
     */
    grafanaVersion: string;
    /**
     * List of outbound IPs if deterministicOutboundIP is enabled.
     */
    outboundIPs: string[];
    /**
     * The private endpoint connections of the Grafana instance.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Indicate the state for enable or disable traffic over the public interface.
     */
    publicNetworkAccess?: string;
    /**
     * The zone redundancy setting of the Grafana instance.
     */
    zoneRedundancy?: string;
}
/**
 * managedGrafanaPropertiesResponseProvideDefaults sets the appropriate defaults for ManagedGrafanaPropertiesResponse
 */
export function managedGrafanaPropertiesResponseProvideDefaults(val: ManagedGrafanaPropertiesResponse): ManagedGrafanaPropertiesResponse {
    return {
        ...val,
        grafanaConfigurations: (val.grafanaConfigurations ? grafanaConfigurationsResponseProvideDefaults(val.grafanaConfigurations) : undefined),
    };
}

/**
 * The state of managed private endpoint connection.
 */
export interface ManagedPrivateEndpointConnectionStateResponse {
    /**
     * Gets or sets the reason for approval/rejection of the connection.
     */
    description: string;
    /**
     * The approval/rejection status of managed private endpoint connection.
     */
    status: string;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The private endpoint connection group ids.
     */
    groupIds?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The resource of private end point.
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
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
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

export interface ResourceSkuResponse {
    name: string;
}

/**
 * Grafana security settings
 */
export interface SecurityResponse {
    /**
     * Set to true to execute the CSRF check even if the login cookie is not in a request (default false).
     */
    csrfAlwaysCheck?: boolean;
}

/**
 * Email server settings.
 * https://grafana.com/docs/grafana/v9.0/setup-grafana/configure-grafana/#smtp
 */
export interface SmtpResponse {
    /**
     * Enable this to allow Grafana to send email. Default is false
     */
    enabled?: boolean;
    /**
     * Address used when sending out emails
     * https://pkg.go.dev/net/mail#Address
     */
    fromAddress?: string;
    /**
     * Name to be used when sending out emails. Default is "Azure Managed Grafana Notification"
     * https://pkg.go.dev/net/mail#Address
     */
    fromName?: string;
    /**
     * SMTP server hostname with port, e.g. test.email.net:587
     */
    host?: string;
    /**
     * Password of SMTP auth. If the password contains # or ;, then you have to wrap it with triple quotes
     */
    password?: string;
    /**
     * Verify SSL for SMTP server. Default is false
     * https://pkg.go.dev/crypto/tls#Config
     */
    skipVerify?: boolean;
    /**
     * The StartTLSPolicy setting of the SMTP configuration
     * https://pkg.go.dev/github.com/go-mail/mail#StartTLSPolicy
     */
    startTLSPolicy?: string;
    /**
     * User of SMTP auth
     */
    user?: string;
}
/**
 * smtpResponseProvideDefaults sets the appropriate defaults for SmtpResponse
 */
export function smtpResponseProvideDefaults(val: SmtpResponse): SmtpResponse {
    return {
        ...val,
        enabled: (val.enabled) ?? false,
    };
}

/**
 * Grafana Snapshots settings
 */
export interface SnapshotsResponse {
    /**
     * Set to false to disable external snapshot publish endpoint
     */
    externalEnabled?: boolean;
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
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

/**
 * Grafana users settings
 */
export interface UsersResponse {
    /**
     * Set to true so viewers can access and use explore and perform temporary edits on panels in dashboards they have access to. They cannot save their changes.
     */
    viewersCanEdit?: boolean;
}
