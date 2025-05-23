import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties of event handler.
 */
export interface EventHandlerArgs {
    /**
     * Upstream auth settings. If not set, no auth is used for upstream messages.
     */
    auth?: pulumi.Input<UpstreamAuthSettingsArgs>;
    /**
     * Gets or sets the list of system events.
     */
    systemEvents?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
     * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
     */
    urlTemplate: pulumi.Input<string>;
    /**
     * Gets or sets the matching pattern for event names.
     * There are 3 kinds of patterns supported:
     *     1. "*", it matches any event name
     *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
     *     3. A single event name, for example, "event1", it matches "event1"
     */
    userEventPattern?: pulumi.Input<string>;
}

/**
 * An Event Hub endpoint. 
 * The managed identity of Web PubSub service must be enabled, and the identity should have the "Azure Event Hubs Data sender" role to access Event Hub.
 */
export interface EventHubEndpointArgs {
    /**
     * The name of the Event Hub.
     */
    eventHubName: pulumi.Input<string>;
    /**
     * The fully qualified namespace name of the Event Hub resource. For example, "example.servicebus.windows.net".
     */
    fullyQualifiedNamespace: pulumi.Input<string>;
    /**
     *
     * Expected value is 'EventHub'.
     */
    type: pulumi.Input<"EventHub">;
}

/**
 * A setting defines which kinds of events should be sent to which endpoint.
 */
export interface EventListenerArgs {
    /**
     * An endpoint specifying where Web PubSub should send events to.
     */
    endpoint: pulumi.Input<EventHubEndpointArgs>;
    /**
     * A base class for event filter which determines whether an event should be sent to an event listener.
     */
    filter: pulumi.Input<EventNameFilterArgs>;
}

/**
 * Filter events by their name.
 */
export interface EventNameFilterArgs {
    /**
     * Gets or sets a list of system events. Supported events: "connected" and "disconnected". Blocking event "connect" is not supported because it requires a response.
     */
    systemEvents?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     *
     * Expected value is 'EventName'.
     */
    type: pulumi.Input<"EventName">;
    /**
     * Gets or sets a matching pattern for event names.
     * There are 3 kinds of patterns supported:
     *     1. "*", it matches any event name
     *     2. Combine multiple events with ",", for example "event1,event2", it matches events "event1" and "event2"
     *     3. A single event name, for example, "event1", it matches "event1"
     */
    userEventPattern?: pulumi.Input<string>;
}

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
    allow?: pulumi.Input<pulumi.Input<string | enums.WebPubSubRequestType>[]>;
    /**
     * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
     */
    deny?: pulumi.Input<pulumi.Input<string | enums.WebPubSubRequestType>[]>;
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
    allow?: pulumi.Input<pulumi.Input<string | enums.WebPubSubRequestType>[]>;
    /**
     * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
     */
    deny?: pulumi.Input<pulumi.Input<string | enums.WebPubSubRequestType>[]>;
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
    tier?: pulumi.Input<string | enums.WebPubSubSkuTier>;
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
 * Properties of a hub.
 */
export interface WebPubSubHubPropertiesArgs {
    /**
     * The settings for configuring if anonymous connections are allowed for this hub: "allow" or "deny". Default to "deny".
     */
    anonymousConnectPolicy?: pulumi.Input<string>;
    /**
     * Event handler of a hub.
     */
    eventHandlers?: pulumi.Input<pulumi.Input<EventHandlerArgs>[]>;
    /**
     * Event listener settings for forwarding your client events to listeners.
     * Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
     * One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
     * Maximum count of event listeners among all hubs is 10.
     */
    eventListeners?: pulumi.Input<pulumi.Input<EventListenerArgs>[]>;
    /**
     * The settings for configuring the WebSocket ping-pong interval in seconds for all clients in the hub. Valid range: 1 to 120. Default to 20 seconds.
     */
    webSocketKeepAliveIntervalInSeconds?: pulumi.Input<number>;
}
/**
 * webPubSubHubPropertiesArgsProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesArgs
 */
export function webPubSubHubPropertiesArgsProvideDefaults(val: WebPubSubHubPropertiesArgs): WebPubSubHubPropertiesArgs {
    return {
        ...val,
        anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
        webSocketKeepAliveIntervalInSeconds: (val.webSocketKeepAliveIntervalInSeconds) ?? 20,
    };
}

/**
 * Network ACLs for the resource
 */
export interface WebPubSubNetworkACLsArgs {
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
 * SocketIO settings for the resource
 */
export interface WebPubSubSocketIOSettingsArgs {
    /**
     * The service mode of Web PubSub for Socket.IO. Values allowed: 
     * "Default": have your own backend Socket.IO server
     * "Serverless": your application doesn't have a backend server
     */
    serviceMode?: pulumi.Input<string>;
}

/**
 * TLS settings for the resource
 */
export interface WebPubSubTlsSettingsArgs {
    /**
     * Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier.
     */
    clientCertEnabled?: pulumi.Input<boolean>;
}
/**
 * webPubSubTlsSettingsArgsProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsArgs
 */
export function webPubSubTlsSettingsArgsProvideDefaults(val: WebPubSubTlsSettingsArgs): WebPubSubTlsSettingsArgs {
    return {
        ...val,
        clientCertEnabled: (val.clientCertEnabled) ?? false,
    };
}
