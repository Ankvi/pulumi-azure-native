import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An IP rule
 */
export interface IPRuleResponse {
    /**
     * Azure Networking ACL Action.
     */
    action?: string;
    /**
     * An IP or CIDR or ServiceTag
     */
    value?: string;
}

/**
 * Live trace category configuration of a Microsoft.SignalRService resource.
 */
export interface LiveTraceCategoryResponse {
    /**
     * Indicates whether or the live trace category is enabled.
     * Available values: true, false.
     * Case insensitive.
     */
    enabled?: string;
    /**
     * Gets or sets the live trace category's name.
     * Available values: ConnectivityLogs, MessagingLogs.
     * Case insensitive.
     */
    name?: string;
}

/**
 * Live trace configuration of a Microsoft.SignalRService resource.
 */
export interface LiveTraceConfigurationResponse {
    /**
     * Gets or sets the list of category configurations.
     */
    categories?: LiveTraceCategoryResponse[];
    /**
     * Indicates whether or not enable live trace.
     * When it's set to true, live trace client can connect to the service.
     * Otherwise, live trace client can't connect to the service, so that you are unable to receive any log, no matter what you configure in "categories".
     * Available values: true, false.
     * Case insensitive.
     */
    enabled?: string;
}
/**
 * liveTraceConfigurationResponseProvideDefaults sets the appropriate defaults for LiveTraceConfigurationResponse
 */
export function liveTraceConfigurationResponseProvideDefaults(val: LiveTraceConfigurationResponse): LiveTraceConfigurationResponse {
    return {
        ...val,
        enabled: (val.enabled) ?? "false",
    };
}

/**
 * A class represent managed identities used for request and response
 */
export interface ManagedIdentityResponse {
    /**
     * Get the principal id for the system assigned identity.
     * Only be used in response.
     */
    principalId: string;
    /**
     * Get the tenant id for the system assigned identity.
     * Only be used in response
     */
    tenantId: string;
    /**
     * Represents the identity type: systemAssigned, userAssigned, None
     */
    type?: string;
    /**
     * Get or set the user assigned identities
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityPropertyResponse};
}

/**
 * Managed identity settings for upstream.
 */
export interface ManagedIdentitySettingsResponse {
    /**
     * The Resource indicating the App ID URI of the target resource.
     * It also appears in the aud (audience) claim of the issued token.
     */
    resource?: string;
}

/**
 * Network ACL
 */
export interface NetworkACLResponse {
    /**
     * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
     */
    allow?: string[];
    /**
     * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
     */
    deny?: string[];
}

/**
 * ACL for a private endpoint
 */
export interface PrivateEndpointACLResponse {
    /**
     * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
     */
    allow?: string[];
    /**
     * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
     */
    deny?: string[];
    /**
     * Name of the private endpoint connection
     */
    name: string;
}

/**
 * A private endpoint connection to an azure resource
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Group IDs
     */
    groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Private endpoint
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * Connection state of the private endpoint connection
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the resource.
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
 * Private endpoint
 */
export interface PrivateEndpointResponse {
    /**
     * Full qualified Id of the private endpoint
     */
    id?: string;
}

/**
 * Connection state of the private endpoint connection
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
 * Resource log category configuration of a Microsoft.SignalRService resource.
 */
export interface ResourceLogCategoryResponse {
    /**
     * Indicates whether or the resource log category is enabled.
     * Available values: true, false.
     * Case insensitive.
     */
    enabled?: string;
    /**
     * Gets or sets the resource log category's name.
     * Available values: ConnectivityLogs, MessagingLogs.
     * Case insensitive.
     */
    name?: string;
}

/**
 * Resource log configuration of a Microsoft.SignalRService resource.
 */
export interface ResourceLogConfigurationResponse {
    /**
     * Gets or sets the list of category configurations.
     */
    categories?: ResourceLogCategoryResponse[];
}

/**
 * Reference to a resource.
 */
export interface ResourceReferenceResponse {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * The billing information of the resource.
 */
export interface ResourceSkuResponse {
    /**
     * Optional, integer. The unit count of the resource.
     * 1 for Free_F1/Standard_S1/Premium_P1, 100 for Premium_P2 by default.
     * 
     * If present, following values are allowed:
     *     Free_F1: 1;
     *     Standard_S1: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
     *     Premium_P1:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
     *     Premium_P2:  100,200,300,400,500,600,700,800,900,1000;
     */
    capacity?: number;
    /**
     * Not used. Retained for future use.
     */
    family: string;
    /**
     * The name of the SKU. Required.
     * 
     * Allowed values: Standard_S1, Free_F1, Premium_P1, Premium_P2
     */
    name: string;
    /**
     * Not used. Retained for future use.
     */
    size: string;
    /**
     * Optional tier of this particular SKU. 'Standard' or 'Free'. 
     * 
     * `Basic` is deprecated, use `Standard` instead.
     */
    tier?: string;
}

/**
 * Serverless settings.
 */
export interface ServerlessSettingsResponse {
    /**
     * Gets or sets Client Connection Timeout. Optional to be set.
     * Value in seconds.
     * Default value is 30 seconds.
     * Customer should set the timeout to a shorter period if messages are expected to be sent in shorter intervals,
     * and want the client to disconnect more quickly after the last message is sent.
     * You can set the timeout to a longer period if messages are expected to be sent in longer intervals,
     * and they want to keep the same client connection alive during this session.
     * The service considers the client disconnected if it hasn't received a message (including keep-alive) in this interval.
     */
    connectionTimeoutInSeconds?: number;
}
/**
 * serverlessSettingsResponseProvideDefaults sets the appropriate defaults for ServerlessSettingsResponse
 */
export function serverlessSettingsResponseProvideDefaults(val: ServerlessSettingsResponse): ServerlessSettingsResponse {
    return {
        ...val,
        connectionTimeoutInSeconds: (val.connectionTimeoutInSeconds) ?? 30,
    };
}

/**
 * The settings for the Upstream when the service is in server-less mode.
 */
export interface ServerlessUpstreamSettingsResponse {
    /**
     * Gets or sets the list of Upstream URL templates. Order matters, and the first matching template takes effects.
     */
    templates?: UpstreamTemplateResponse[];
}

/**
 * Describes a Shared Private Link Resource
 */
export interface SharedPrivateLinkResourceResponse {
    /**
     * The group id from the provider of resource the shared private link resource is for
     */
    groupId: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The resource id of the resource the shared private link resource is for
     */
    privateLinkResourceId: string;
    /**
     * Provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * The request message for requesting approval of the shared private link resource
     */
    requestMessage?: string;
    /**
     * Status of the shared private link resource
     */
    status: string;
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
 * Cross-Origin Resource Sharing (CORS) settings.
 */
export interface SignalRCorsSettingsResponse {
    /**
     * Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.
     */
    allowedOrigins?: string[];
}

/**
 * Feature of a resource, which controls the runtime behavior.
 */
export interface SignalRFeatureResponse {
    /**
     * FeatureFlags is the supported features of Azure SignalR service.
     * - ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
     * - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
     * - EnableMessagingLogs: "true"/"false", to enable/disable the connectivity log category respectively.
     * - EnableLiveTrace: Live Trace allows you to know what's happening inside Azure SignalR service, it will give you live traces in real time, it will be helpful when you developing your own Azure SignalR based web application or self-troubleshooting some issues. Please note that live traces are counted as outbound messages that will be charged. Values allowed: "true"/"false", to enable/disable live trace feature.
     */
    flag: string;
    /**
     * Optional properties related to this feature.
     */
    properties?: {[key: string]: string};
    /**
     * Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.
     */
    value: string;
}

/**
 * Network ACLs for the resource
 */
export interface SignalRNetworkACLsResponse {
    /**
     * Azure Networking ACL Action.
     */
    defaultAction?: string;
    /**
     * IP rules for filtering public traffic
     */
    ipRules?: IPRuleResponse[];
    /**
     * ACLs for requests from private endpoints
     */
    privateEndpoints?: PrivateEndpointACLResponse[];
    /**
     * Network ACL
     */
    publicNetwork?: NetworkACLResponse;
}

/**
 * TLS settings for the resource
 */
export interface SignalRTlsSettingsResponse {
    /**
     * Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier.
     */
    clientCertEnabled?: boolean;
}
/**
 * signalRTlsSettingsResponseProvideDefaults sets the appropriate defaults for SignalRTlsSettingsResponse
 */
export function signalRTlsSettingsResponseProvideDefaults(val: SignalRTlsSettingsResponse): SignalRTlsSettingsResponse {
    return {
        ...val,
        clientCertEnabled: (val.clientCertEnabled) ?? false,
    };
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
 * Upstream auth settings. If not set, no auth is used for upstream messages.
 */
export interface UpstreamAuthSettingsResponse {
    /**
     * Managed identity settings for upstream.
     */
    managedIdentity?: ManagedIdentitySettingsResponse;
    /**
     * Upstream auth type enum.
     */
    type?: string;
}

/**
 * Upstream template item settings. It defines the Upstream URL of the incoming requests.
 * The template defines the pattern of the event, the hub or the category of the incoming request that matches current URL template.
 */
export interface UpstreamTemplateResponse {
    /**
     * Upstream auth settings. If not set, no auth is used for upstream messages.
     */
    auth?: UpstreamAuthSettingsResponse;
    /**
     * Gets or sets the matching pattern for category names. If not set, it matches any category.
     * There are 3 kind of patterns supported:
     *     1. "*", it to matches any category name.
     *     2. Combine multiple categories with ",", for example "connections,messages", it matches category "connections" and "messages".
     *     3. The single category name, for example, "connections", it matches the category "connections".
     */
    categoryPattern?: string;
    /**
     * Gets or sets the matching pattern for event names. If not set, it matches any event.
     * There are 3 kind of patterns supported:
     *     1. "*", it to matches any event name.
     *     2. Combine multiple events with ",", for example "connect,disconnect", it matches event "connect" and "disconnect".
     *     3. The single event name, for example, "connect", it matches "connect".
     */
    eventPattern?: string;
    /**
     * Gets or sets the matching pattern for hub names. If not set, it matches any hub.
     * There are 3 kind of patterns supported:
     *     1. "*", it to matches any hub name.
     *     2. Combine multiple hubs with ",", for example "hub1,hub2", it matches "hub1" and "hub2".
     *     3. The single hub name, for example, "hub1", it matches "hub1".
     */
    hubPattern?: string;
    /**
     * Gets or sets the Upstream URL template. You can use 3 predefined parameters {hub}, {category} {event} inside the template, the value of the Upstream URL is dynamically calculated when the client request comes in.
     * For example, if the urlTemplate is `http://example.com/{hub}/api/{event}`, with a client request from hub `chat` connects, it will first POST to this URL: `http://example.com/chat/api/connect`.
     */
    urlTemplate: string;
}

/**
 * Properties of user assigned identity.
 */
export interface UserAssignedIdentityPropertyResponse {
    /**
     * Get the client id for the user assigned identity
     */
    clientId: string;
    /**
     * Get the principal id for the user assigned identity
     */
    principalId: string;
}
