import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An IP rule
 */
export interface IPRuleArgs {
    /**
     * Azure Networking ACL Action.
     */
    action?: pulumi.Input<string | enums.ACLAction>;
    /**
     * An IP or CIDR or ServiceTag
     */
    value?: pulumi.Input<string>;
}

/**
 * Live trace category configuration of a Microsoft.SignalRService resource.
 */
export interface LiveTraceCategoryArgs {
    /**
     * Indicates whether or the live trace category is enabled.
     * Available values: true, false.
     * Case insensitive.
     */
    enabled?: pulumi.Input<string>;
    /**
     * Gets or sets the live trace category's name.
     * Available values: ConnectivityLogs, MessagingLogs.
     * Case insensitive.
     */
    name?: pulumi.Input<string>;
}

/**
 * Live trace configuration of a Microsoft.SignalRService resource.
 */
export interface LiveTraceConfigurationArgs {
    /**
     * Gets or sets the list of category configurations.
     */
    categories?: pulumi.Input<pulumi.Input<LiveTraceCategoryArgs>[]>;
    /**
     * Indicates whether or not enable live trace.
     * When it's set to true, live trace client can connect to the service.
     * Otherwise, live trace client can't connect to the service, so that you are unable to receive any log, no matter what you configure in "categories".
     * Available values: true, false.
     * Case insensitive.
     */
    enabled?: pulumi.Input<string>;
}
/**
 * liveTraceConfigurationArgsProvideDefaults sets the appropriate defaults for LiveTraceConfigurationArgs
 */
export function liveTraceConfigurationArgsProvideDefaults(val: LiveTraceConfigurationArgs): LiveTraceConfigurationArgs {
    return {
        ...val,
        enabled: (val.enabled) ?? "false",
    };
}

/**
 * A class represent managed identities used for request and response
 */
export interface ManagedIdentityArgs {
    /**
     * Represents the identity type: systemAssigned, userAssigned, None
     */
    type?: pulumi.Input<string | enums.ManagedIdentityType>;
    /**
     * Get or set the user assigned identities
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Managed identity settings for upstream.
 */
export interface ManagedIdentitySettingsArgs {
    /**
     * The Resource indicating the App ID URI of the target resource.
     * It also appears in the aud (audience) claim of the issued token.
     */
    resource?: pulumi.Input<string>;
}

/**
 * Network ACL
 */
export interface NetworkACLArgs {
    /**
     * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
     */
    allow?: pulumi.Input<pulumi.Input<string | enums.SignalRRequestType>[]>;
    /**
     * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
     */
    deny?: pulumi.Input<pulumi.Input<string | enums.SignalRRequestType>[]>;
}

/**
 * Private endpoint
 */
export interface PrivateEndpointArgs {
    /**
     * Full qualified Id of the private endpoint
     */
    id?: pulumi.Input<string>;
}

/**
 * ACL for a private endpoint
 */
export interface PrivateEndpointACLArgs {
    /**
     * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
     */
    allow?: pulumi.Input<pulumi.Input<string | enums.SignalRRequestType>[]>;
    /**
     * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
     */
    deny?: pulumi.Input<pulumi.Input<string | enums.SignalRRequestType>[]>;
    /**
     * Name of the private endpoint connection
     */
    name: pulumi.Input<string>;
}

/**
 * Connection state of the private endpoint connection
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
    status?: pulumi.Input<string | enums.PrivateLinkServiceConnectionStatus>;
}

/**
 * Resource log category configuration of a Microsoft.SignalRService resource.
 */
export interface ResourceLogCategoryArgs {
    /**
     * Indicates whether or the resource log category is enabled.
     * Available values: true, false.
     * Case insensitive.
     */
    enabled?: pulumi.Input<string>;
    /**
     * Gets or sets the resource log category's name.
     * Available values: ConnectivityLogs, MessagingLogs.
     * Case insensitive.
     */
    name?: pulumi.Input<string>;
}

/**
 * Resource log configuration of a Microsoft.SignalRService resource.
 */
export interface ResourceLogConfigurationArgs {
    /**
     * Gets or sets the list of category configurations.
     */
    categories?: pulumi.Input<pulumi.Input<ResourceLogCategoryArgs>[]>;
}

/**
 * Reference to a resource.
 */
export interface ResourceReferenceArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
}

/**
 * The billing information of the resource.
 */
export interface ResourceSkuArgs {
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
    capacity?: pulumi.Input<number>;
    /**
     * The name of the SKU. Required.
     * 
     * Allowed values: Standard_S1, Free_F1, Premium_P1, Premium_P2
     */
    name: pulumi.Input<string>;
    /**
     * Optional tier of this particular SKU. 'Standard' or 'Free'. 
     * 
     * `Basic` is deprecated, use `Standard` instead.
     */
    tier?: pulumi.Input<string | enums.SignalRSkuTier>;
}

/**
 * Serverless settings.
 */
export interface ServerlessSettingsArgs {
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
    connectionTimeoutInSeconds?: pulumi.Input<number>;
}
/**
 * serverlessSettingsArgsProvideDefaults sets the appropriate defaults for ServerlessSettingsArgs
 */
export function serverlessSettingsArgsProvideDefaults(val: ServerlessSettingsArgs): ServerlessSettingsArgs {
    return {
        ...val,
        connectionTimeoutInSeconds: (val.connectionTimeoutInSeconds) ?? 30,
    };
}

/**
 * The settings for the Upstream when the service is in server-less mode.
 */
export interface ServerlessUpstreamSettingsArgs {
    /**
     * Gets or sets the list of Upstream URL templates. Order matters, and the first matching template takes effects.
     */
    templates?: pulumi.Input<pulumi.Input<UpstreamTemplateArgs>[]>;
}

/**
 * Cross-Origin Resource Sharing (CORS) settings.
 */
export interface SignalRCorsSettingsArgs {
    /**
     * Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.
     */
    allowedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Feature of a resource, which controls the runtime behavior.
 */
export interface SignalRFeatureArgs {
    /**
     * FeatureFlags is the supported features of Azure SignalR service.
     * - ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
     * - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
     * - EnableMessagingLogs: "true"/"false", to enable/disable the connectivity log category respectively.
     * - EnableLiveTrace: Live Trace allows you to know what's happening inside Azure SignalR service, it will give you live traces in real time, it will be helpful when you developing your own Azure SignalR based web application or self-troubleshooting some issues. Please note that live traces are counted as outbound messages that will be charged. Values allowed: "true"/"false", to enable/disable live trace feature.
     */
    flag: pulumi.Input<string | enums.FeatureFlags>;
    /**
     * Optional properties related to this feature.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.
     */
    value: pulumi.Input<string>;
}

/**
 * Network ACLs for the resource
 */
export interface SignalRNetworkACLsArgs {
    /**
     * Azure Networking ACL Action.
     */
    defaultAction?: pulumi.Input<string | enums.ACLAction>;
    /**
     * IP rules for filtering public traffic
     */
    ipRules?: pulumi.Input<pulumi.Input<IPRuleArgs>[]>;
    /**
     * ACLs for requests from private endpoints
     */
    privateEndpoints?: pulumi.Input<pulumi.Input<PrivateEndpointACLArgs>[]>;
    /**
     * Network ACL
     */
    publicNetwork?: pulumi.Input<NetworkACLArgs>;
}

/**
 * TLS settings for the resource
 */
export interface SignalRTlsSettingsArgs {
    /**
     * Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier.
     */
    clientCertEnabled?: pulumi.Input<boolean>;
}
/**
 * signalRTlsSettingsArgsProvideDefaults sets the appropriate defaults for SignalRTlsSettingsArgs
 */
export function signalRTlsSettingsArgsProvideDefaults(val: SignalRTlsSettingsArgs): SignalRTlsSettingsArgs {
    return {
        ...val,
        clientCertEnabled: (val.clientCertEnabled) ?? false,
    };
}

/**
 * Upstream auth settings. If not set, no auth is used for upstream messages.
 */
export interface UpstreamAuthSettingsArgs {
    /**
     * Managed identity settings for upstream.
     */
    managedIdentity?: pulumi.Input<ManagedIdentitySettingsArgs>;
    /**
     * Upstream auth type enum.
     */
    type?: pulumi.Input<string | enums.UpstreamAuthType>;
}

/**
 * Upstream template item settings. It defines the Upstream URL of the incoming requests.
 * The template defines the pattern of the event, the hub or the category of the incoming request that matches current URL template.
 */
export interface UpstreamTemplateArgs {
    /**
     * Upstream auth settings. If not set, no auth is used for upstream messages.
     */
    auth?: pulumi.Input<UpstreamAuthSettingsArgs>;
    /**
     * Gets or sets the matching pattern for category names. If not set, it matches any category.
     * There are 3 kind of patterns supported:
     *     1. "*", it to matches any category name.
     *     2. Combine multiple categories with ",", for example "connections,messages", it matches category "connections" and "messages".
     *     3. The single category name, for example, "connections", it matches the category "connections".
     */
    categoryPattern?: pulumi.Input<string>;
    /**
     * Gets or sets the matching pattern for event names. If not set, it matches any event.
     * There are 3 kind of patterns supported:
     *     1. "*", it to matches any event name.
     *     2. Combine multiple events with ",", for example "connect,disconnect", it matches event "connect" and "disconnect".
     *     3. The single event name, for example, "connect", it matches "connect".
     */
    eventPattern?: pulumi.Input<string>;
    /**
     * Gets or sets the matching pattern for hub names. If not set, it matches any hub.
     * There are 3 kind of patterns supported:
     *     1. "*", it to matches any hub name.
     *     2. Combine multiple hubs with ",", for example "hub1,hub2", it matches "hub1" and "hub2".
     *     3. The single hub name, for example, "hub1", it matches "hub1".
     */
    hubPattern?: pulumi.Input<string>;
    /**
     * Gets or sets the Upstream URL template. You can use 3 predefined parameters {hub}, {category} {event} inside the template, the value of the Upstream URL is dynamically calculated when the client request comes in.
     * For example, if the urlTemplate is `http://example.com/{hub}/api/{event}`, with a client request from hub `chat` connects, it will first POST to this URL: `http://example.com/chat/api/connect`.
     */
    urlTemplate: pulumi.Input<string>;
}
