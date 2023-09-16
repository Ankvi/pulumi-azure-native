import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace webpubsub {
    /**
     * Properties of event handler.
     */
    export interface EventHandlerResponse {
        /**
         * Upstream auth settings. If not set, no auth is used for upstream messages.
         */
        auth?: UpstreamAuthSettingsResponse;
        /**
         * Gets or sets the list of system events.
         */
        systemEvents?: string[];
        /**
         * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
         * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
         */
        urlTemplate: string;
        /**
         * Gets or sets the matching pattern for event names.
         * There are 3 kinds of patterns supported:
         *     1. "*", it matches any event name
         *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
         *     3. A single event name, for example, "event1", it matches "event1"
         */
        userEventPattern?: string;
    }

    /**
     * An Event Hub endpoint. 
     * The managed identity of Web PubSub service must be enabled, and the identity should have the "Azure Event Hubs Data sender" role to access Event Hub.
     */
    export interface EventHubEndpointResponse {
        /**
         * The name of the Event Hub.
         */
        eventHubName: string;
        /**
         * The fully qualified namespace name of the Event Hub resource. For example, "example.servicebus.windows.net".
         */
        fullyQualifiedNamespace: string;
        /**
         *
         * Expected value is 'EventHub'.
         */
        type: "EventHub";
    }

    /**
     * A setting defines which kinds of events should be sent to which endpoint.
     */
    export interface EventListenerResponse {
        /**
         * An endpoint specifying where Web PubSub should send events to.
         */
        endpoint: EventHubEndpointResponse;
        /**
         * A base class for event filter which determines whether an event should be sent to an event listener.
         */
        filter: EventNameFilterResponse;
    }

    /**
     * Filter events by their name.
     */
    export interface EventNameFilterResponse {
        /**
         * Gets or sets a list of system events. Supported events: "connected" and "disconnected". Blocking event "connect" is not supported because it requires a response.
         */
        systemEvents?: string[];
        /**
         *
         * Expected value is 'EventName'.
         */
        type: "EventName";
        /**
         * Gets or sets a matching pattern for event names.
         * There are 3 kinds of patterns supported:
         *     1. "*", it matches any event name
         *     2. Combine multiple events with ",", for example "event1,event2", it matches events "event1" and "event2"
         *     3. A single event name, for example, "event1", it matches "event1"
         */
        userEventPattern?: string;
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
         * Fully qualified resource Id for the resource.
         */
        id: string;
        /**
         * The name of the resource.
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
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
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
         * Optional, integer. The unit count of the resource. 1 by default.
         * 
         * If present, following values are allowed:
         *     Free: 1;
         *     Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
         *     Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
         */
        capacity?: number;
        /**
         * Not used. Retained for future use.
         */
        family: string;
        /**
         * The name of the SKU. Required.
         * 
         * Allowed values: Standard_S1, Free_F1, Premium_P1
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
     * Describes a Shared Private Link Resource
     */
    export interface SharedPrivateLinkResourceResponse {
        /**
         * The group id from the provider of resource the shared private link resource is for
         */
        groupId: string;
        /**
         * Fully qualified resource Id for the resource.
         */
        id: string;
        /**
         * The name of the resource.
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
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
         */
        type: string;
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

    /**
     * Properties of a hub.
     */
    export interface WebPubSubHubPropertiesResponse {
        /**
         * The settings for configuring if anonymous connections are allowed for this hub: "allow" or "deny". Default to "deny".
         */
        anonymousConnectPolicy?: string;
        /**
         * Event handler of a hub.
         */
        eventHandlers?: EventHandlerResponse[];
        /**
         * Event listener settings for forwarding your client events to listeners.
         * Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
         * One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
         * Maximum count of event listeners among all hubs is 10.
         */
        eventListeners?: EventListenerResponse[];
    }
    /**
     * webPubSubHubPropertiesResponseProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesResponse
     */
    export function webPubSubHubPropertiesResponseProvideDefaults(val: WebPubSubHubPropertiesResponse): WebPubSubHubPropertiesResponse {
        return {
            ...val,
            anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
        };
    }

    /**
     * Network ACLs for the resource
     */
    export interface WebPubSubNetworkACLsResponse {
        /**
         * Azure Networking ACL Action.
         */
        defaultAction?: string;
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
    export interface WebPubSubTlsSettingsResponse {
        /**
         * Request client certificate during TLS handshake if enabled
         */
        clientCertEnabled?: boolean;
    }
    /**
     * webPubSubTlsSettingsResponseProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsResponse
     */
    export function webPubSubTlsSettingsResponseProvideDefaults(val: WebPubSubTlsSettingsResponse): WebPubSubTlsSettingsResponse {
        return {
            ...val,
            clientCertEnabled: (val.clientCertEnabled) ?? true,
        };
    }

    export namespace v20210401preview {
        /**
         * The settings for event handler in webpubsub service
         */
        export interface EventHandlerSettingsResponse {
            /**
             * Get or set the EventHandler items. The key is the hub name and the value is the corresponding EventHandlerTemplate.
             */
            items?: {[key: string]: v20210401preview.EventHandlerTemplateResponse[]};
        }

        /**
         * EventHandler template item settings.
         */
        export interface EventHandlerTemplateResponse {
            /**
             * Gets or sets the auth settings for an event handler. If not set, no auth is used.
             */
            auth?: v20210401preview.UpstreamAuthSettingsResponse;
            /**
             * Gets ot sets the system event pattern.
             * There are 2 kind of patterns supported:
             *     1. The single event name, for example, "connect", it matches "connect"
             *     2. Combine multiple events with ",", for example "connect,disconnected", it matches event "connect" and "disconnected"
             */
            systemEventPattern?: string;
            /**
             * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
             * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
             */
            urlTemplate: string;
            /**
             * Gets or sets the matching pattern for event names.
             * There are 3 kind of patterns supported:
             *     1. "*", it to matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
             *     3. The single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
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
             * Represent the identity type: systemAssigned, userAssigned, None
             */
            type?: string;
            /**
             * Get or set the user assigned identities
             */
            userAssignedIdentities?: {[key: string]: v20210401preview.UserAssignedIdentityPropertyResponse};
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
             * Fully qualified resource Id for the resource.
             */
            id: string;
            /**
             * The name of the resource.
             */
            name: string;
            /**
             * Private endpoint associated with the private endpoint connection
             */
            privateEndpoint?: v20210401preview.PrivateEndpointResponse;
            /**
             * Connection state
             */
            privateLinkServiceConnectionState?: v20210401preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * Provisioning state of the private endpoint connection
             */
            provisioningState: string;
            /**
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20210401preview.SystemDataResponse;
            /**
             * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
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
         * The billing information of the resource.
         */
        export interface ResourceSkuResponse {
            /**
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1
             *     Standard: 1,2,5,10,20,50,100
             */
            capacity?: number;
            /**
             * Not used. Retained for future use.
             */
            family: string;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1
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
         * Describes a Shared Private Link Resource
         */
        export interface SharedPrivateLinkResourceResponse {
            /**
             * The group id from the provider of resource the shared private link resource is for
             */
            groupId: string;
            /**
             * Fully qualified resource Id for the resource.
             */
            id: string;
            /**
             * The name of the resource.
             */
            name: string;
            /**
             * The resource id of the resource the shared private link resource is for
             */
            privateLinkResourceId: string;
            /**
             * Provisioning state of the shared private link resource
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
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20210401preview.SystemDataResponse;
            /**
             * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
             */
            type: string;
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
         * Upstream auth settings.
         */
        export interface UpstreamAuthSettingsResponse {
            /**
             * Gets or sets the managed identity settings. It's required if the auth type is set to ManagedIdentity.
             */
            managedIdentity?: v20210401preview.ManagedIdentitySettingsResponse;
            /**
             * Gets or sets the type of auth. None or ManagedIdentity is supported now.
             */
            type?: string;
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

        /**
         * Feature of a resource, which controls the runtime behavior.
         */
        export interface WebPubSubFeatureResponse {
            /**
             * FeatureFlags is the supported features of Azure SignalR service.
             *  - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
             *  - EnableMessagingLogs: "true"/"false", to enable/disable the connectivity log category respectively.
             *  - EnableLiveTrace: Live Trace allows you to know what's happening inside Azure SignalR service, it will give you live traces in real time, it will be helpful when you developing your own Azure SignalR based web application or self-troubleshooting some issues. Please note that live traces are counted as outbound messages that will be charged. Values allowed: "true"/"false", to enable/disable live trace feature.
             *  
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
        export interface WebPubSubNetworkACLsResponse {
            /**
             * Default action when no other rule matches
             */
            defaultAction?: string;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: v20210401preview.PrivateEndpointACLResponse[];
            /**
             * ACL for requests from public network
             */
            publicNetwork?: v20210401preview.NetworkACLResponse;
        }
        /**
         * webPubSubNetworkACLsResponseProvideDefaults sets the appropriate defaults for WebPubSubNetworkACLsResponse
         */
        export function webPubSubNetworkACLsResponseProvideDefaults(val: WebPubSubNetworkACLsResponse): WebPubSubNetworkACLsResponse {
            return {
                ...val,
                defaultAction: (val.defaultAction) ?? "Deny",
            };
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsResponse {
            /**
             * Request client certificate during TLS handshake if enabled
             */
            clientCertEnabled?: boolean;
        }
        /**
         * webPubSubTlsSettingsResponseProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsResponse
         */
        export function webPubSubTlsSettingsResponseProvideDefaults(val: WebPubSubTlsSettingsResponse): WebPubSubTlsSettingsResponse {
            return {
                ...val,
                clientCertEnabled: (val.clientCertEnabled) ?? true,
            };
        }

    }

    export namespace v20210601preview {
        /**
         * Diagnostic configuration of a Microsoft.SignalRService resource. Used together with Azure monitor DiagnosticSettings.
         */
        export interface DiagnosticConfigurationResponse {
            /**
             * Indicate whether or not enable Connectivity logs.
             * Available values: Enabled, Disabled.
             * Case insensitive.
             */
            enableConnectivityLogs?: string;
            /**
             * Indicate whether or not enable Live Trace. 
             * Available values: Enabled, Disabled. 
             * Case insensitive. 
             * Live Trace allows you to know what's happening inside Azure SignalR service, it will give you live traces in real time, it will be helpful when you developing your own Azure SignalR based web application or self-troubleshooting some issues.
             */
            enableLiveTrace?: string;
            /**
             * Indicate whether or not enable Messaging logs.
             * Available values: Enabled, Disabled.
             * Case insensitive.
             */
            enableMessagingLogs?: string;
        }

        /**
         * The settings for event handler in webpubsub service
         */
        export interface EventHandlerSettingsResponse {
            /**
             * Get or set the EventHandler items. The key is the hub name and the value is the corresponding EventHandlerTemplate.
             */
            items?: {[key: string]: v20210601preview.EventHandlerTemplateResponse[]};
        }

        /**
         * EventHandler template item settings.
         */
        export interface EventHandlerTemplateResponse {
            /**
             * Gets or sets the auth settings for an event handler. If not set, no auth is used.
             */
            auth?: v20210601preview.UpstreamAuthSettingsResponse;
            /**
             * Gets ot sets the system event pattern.
             * There are 2 kind of patterns supported:
             *     1. The single event name, for example, "connect", it matches "connect"
             *     2. Combine multiple events with ",", for example "connect,disconnected", it matches event "connect" and "disconnected"
             */
            systemEventPattern?: string;
            /**
             * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
             * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
             */
            urlTemplate: string;
            /**
             * Gets or sets the matching pattern for event names.
             * There are 3 kind of patterns supported:
             *     1. "*", it to matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
             *     3. The single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
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
             * Represent the identity type: systemAssigned, userAssigned, None
             */
            type?: string;
            /**
             * Get or set the user assigned identities
             */
            userAssignedIdentities?: {[key: string]: v20210601preview.UserAssignedIdentityPropertyResponse};
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
             * Fully qualified resource Id for the resource.
             */
            id: string;
            /**
             * The name of the resource.
             */
            name: string;
            /**
             * Private endpoint associated with the private endpoint connection
             */
            privateEndpoint?: v20210601preview.PrivateEndpointResponse;
            /**
             * Connection state
             */
            privateLinkServiceConnectionState?: v20210601preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * Provisioning state of the private endpoint connection
             */
            provisioningState: string;
            /**
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20210601preview.SystemDataResponse;
            /**
             * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
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
         * The billing information of the resource.
         */
        export interface ResourceSkuResponse {
            /**
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1
             *     Standard: 1,2,5,10,20,50,100
             */
            capacity?: number;
            /**
             * Not used. Retained for future use.
             */
            family: string;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1
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
         * Describes a Shared Private Link Resource
         */
        export interface SharedPrivateLinkResourceResponse {
            /**
             * The group id from the provider of resource the shared private link resource is for
             */
            groupId: string;
            /**
             * Fully qualified resource Id for the resource.
             */
            id: string;
            /**
             * The name of the resource.
             */
            name: string;
            /**
             * The resource id of the resource the shared private link resource is for
             */
            privateLinkResourceId: string;
            /**
             * Provisioning state of the shared private link resource
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
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20210601preview.SystemDataResponse;
            /**
             * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
             */
            type: string;
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
         * Upstream auth settings.
         */
        export interface UpstreamAuthSettingsResponse {
            /**
             * Gets or sets the managed identity settings. It's required if the auth type is set to ManagedIdentity.
             */
            managedIdentity?: v20210601preview.ManagedIdentitySettingsResponse;
            /**
             * Gets or sets the type of auth. None or ManagedIdentity is supported now.
             */
            type?: string;
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

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsResponse {
            /**
             * Default action when no other rule matches
             */
            defaultAction?: string;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: v20210601preview.PrivateEndpointACLResponse[];
            /**
             * ACL for requests from public network
             */
            publicNetwork?: v20210601preview.NetworkACLResponse;
        }
        /**
         * webPubSubNetworkACLsResponseProvideDefaults sets the appropriate defaults for WebPubSubNetworkACLsResponse
         */
        export function webPubSubNetworkACLsResponseProvideDefaults(val: WebPubSubNetworkACLsResponse): WebPubSubNetworkACLsResponse {
            return {
                ...val,
                defaultAction: (val.defaultAction) ?? "Deny",
            };
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsResponse {
            /**
             * Request client certificate during TLS handshake if enabled
             */
            clientCertEnabled?: boolean;
        }
        /**
         * webPubSubTlsSettingsResponseProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsResponse
         */
        export function webPubSubTlsSettingsResponseProvideDefaults(val: WebPubSubTlsSettingsResponse): WebPubSubTlsSettingsResponse {
            return {
                ...val,
                clientCertEnabled: (val.clientCertEnabled) ?? true,
            };
        }

    }

    export namespace v20210901preview {
        /**
         * The settings for event handler in webpubsub service
         */
        export interface EventHandlerSettingsResponse {
            /**
             * Get or set the EventHandler items. The key is the hub name and the value is the corresponding EventHandlerTemplate.
             */
            items?: {[key: string]: v20210901preview.EventHandlerTemplateResponse[]};
        }

        /**
         * EventHandler template item settings.
         */
        export interface EventHandlerTemplateResponse {
            /**
             * Gets or sets the auth settings for an event handler. If not set, no auth is used.
             */
            auth?: v20210901preview.UpstreamAuthSettingsResponse;
            /**
             * Gets ot sets the system event pattern.
             * There are 2 kind of patterns supported:
             *     1. The single event name, for example, "connect", it matches "connect"
             *     2. Combine multiple events with ",", for example "connect,disconnected", it matches event "connect" and "disconnected"
             */
            systemEventPattern?: string;
            /**
             * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
             * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
             */
            urlTemplate: string;
            /**
             * Gets or sets the matching pattern for event names.
             * There are 3 kind of patterns supported:
             *     1. "*", it to matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
             *     3. The single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
        }

        /**
         * live trace category configuration of a Microsoft.SignalRService resource.
         */
        export interface LiveTraceCategoryResponse {
            /**
             * Indicates whether or the log category is enabled.
             * Available values: true, false.
             * Case insensitive.
             */
            enabled?: string;
            /**
             * Gets or sets the log category's name.
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
            categories?: v20210901preview.LiveTraceCategoryResponse[];
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
             * Represent the identity type: systemAssigned, userAssigned, None
             */
            type?: string;
            /**
             * Get or set the user assigned identities
             */
            userAssignedIdentities?: {[key: string]: v20210901preview.UserAssignedIdentityPropertyResponse};
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
             * Fully qualified resource Id for the resource.
             */
            id: string;
            /**
             * The name of the resource.
             */
            name: string;
            /**
             * Private endpoint associated with the private endpoint connection
             */
            privateEndpoint?: v20210901preview.PrivateEndpointResponse;
            /**
             * Connection state
             */
            privateLinkServiceConnectionState?: v20210901preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * Provisioning state of the private endpoint connection
             */
            provisioningState: string;
            /**
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20210901preview.SystemDataResponse;
            /**
             * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
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
         * The billing information of the resource.
         */
        export interface ResourceSkuResponse {
            /**
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1
             *     Standard: 1,2,5,10,20,50,100
             */
            capacity?: number;
            /**
             * Not used. Retained for future use.
             */
            family: string;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1
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
         * Describes a Shared Private Link Resource
         */
        export interface SharedPrivateLinkResourceResponse {
            /**
             * The group id from the provider of resource the shared private link resource is for
             */
            groupId: string;
            /**
             * Fully qualified resource Id for the resource.
             */
            id: string;
            /**
             * The name of the resource.
             */
            name: string;
            /**
             * The resource id of the resource the shared private link resource is for
             */
            privateLinkResourceId: string;
            /**
             * Provisioning state of the shared private link resource
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
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20210901preview.SystemDataResponse;
            /**
             * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
             */
            type: string;
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
         * Upstream auth settings.
         */
        export interface UpstreamAuthSettingsResponse {
            /**
             * Gets or sets the managed identity settings. It's required if the auth type is set to ManagedIdentity.
             */
            managedIdentity?: v20210901preview.ManagedIdentitySettingsResponse;
            /**
             * Gets or sets the type of auth. None or ManagedIdentity is supported now.
             */
            type?: string;
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

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsResponse {
            /**
             * Default action when no other rule matches
             */
            defaultAction?: string;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: v20210901preview.PrivateEndpointACLResponse[];
            /**
             * ACL for requests from public network
             */
            publicNetwork?: v20210901preview.NetworkACLResponse;
        }
        /**
         * webPubSubNetworkACLsResponseProvideDefaults sets the appropriate defaults for WebPubSubNetworkACLsResponse
         */
        export function webPubSubNetworkACLsResponseProvideDefaults(val: WebPubSubNetworkACLsResponse): WebPubSubNetworkACLsResponse {
            return {
                ...val,
                defaultAction: (val.defaultAction) ?? "Deny",
            };
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsResponse {
            /**
             * Request client certificate during TLS handshake if enabled
             */
            clientCertEnabled?: boolean;
        }
        /**
         * webPubSubTlsSettingsResponseProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsResponse
         */
        export function webPubSubTlsSettingsResponseProvideDefaults(val: WebPubSubTlsSettingsResponse): WebPubSubTlsSettingsResponse {
            return {
                ...val,
                clientCertEnabled: (val.clientCertEnabled) ?? true,
            };
        }

    }

    export namespace v20230201 {
        /**
         * Properties of event handler.
         */
        export interface EventHandlerResponse {
            /**
             * Upstream auth settings. If not set, no auth is used for upstream messages.
             */
            auth?: v20230201.UpstreamAuthSettingsResponse;
            /**
             * Gets or sets the list of system events.
             */
            systemEvents?: string[];
            /**
             * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
             * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
             */
            urlTemplate: string;
            /**
             * Gets or sets the matching pattern for event names.
             * There are 3 kinds of patterns supported:
             *     1. "*", it matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
             *     3. A single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
        }

        /**
         * An Event Hub endpoint. 
         * The managed identity of Web PubSub service must be enabled, and the identity should have the "Azure Event Hubs Data sender" role to access Event Hub.
         */
        export interface EventHubEndpointResponse {
            /**
             * The name of the Event Hub.
             */
            eventHubName: string;
            /**
             * The fully qualified namespace name of the Event Hub resource. For example, "example.servicebus.windows.net".
             */
            fullyQualifiedNamespace: string;
            /**
             *
             * Expected value is 'EventHub'.
             */
            type: "EventHub";
        }

        /**
         * A setting defines which kinds of events should be sent to which endpoint.
         */
        export interface EventListenerResponse {
            /**
             * An endpoint specifying where Web PubSub should send events to.
             */
            endpoint: v20230201.EventHubEndpointResponse;
            /**
             * A base class for event filter which determines whether an event should be sent to an event listener.
             */
            filter: v20230201.EventNameFilterResponse;
        }

        /**
         * Filter events by their name.
         */
        export interface EventNameFilterResponse {
            /**
             * Gets or sets a list of system events. Supported events: "connected" and "disconnected". Blocking event "connect" is not supported because it requires a response.
             */
            systemEvents?: string[];
            /**
             *
             * Expected value is 'EventName'.
             */
            type: "EventName";
            /**
             * Gets or sets a matching pattern for event names.
             * There are 3 kinds of patterns supported:
             *     1. "*", it matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches events "event1" and "event2"
             *     3. A single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
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
            categories?: v20230201.LiveTraceCategoryResponse[];
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
            userAssignedIdentities?: {[key: string]: v20230201.UserAssignedIdentityPropertyResponse};
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
             * Fully qualified resource Id for the resource.
             */
            id: string;
            /**
             * The name of the resource.
             */
            name: string;
            /**
             * Private endpoint
             */
            privateEndpoint?: v20230201.PrivateEndpointResponse;
            /**
             * Connection state of the private endpoint connection
             */
            privateLinkServiceConnectionState?: v20230201.PrivateLinkServiceConnectionStateResponse;
            /**
             * Provisioning state of the resource.
             */
            provisioningState: string;
            /**
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20230201.SystemDataResponse;
            /**
             * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
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
            categories?: v20230201.ResourceLogCategoryResponse[];
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
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1;
             *     Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             *     Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             */
            capacity?: number;
            /**
             * Not used. Retained for future use.
             */
            family: string;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1, Premium_P1
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
         * Describes a Shared Private Link Resource
         */
        export interface SharedPrivateLinkResourceResponse {
            /**
             * The group id from the provider of resource the shared private link resource is for
             */
            groupId: string;
            /**
             * Fully qualified resource Id for the resource.
             */
            id: string;
            /**
             * The name of the resource.
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
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20230201.SystemDataResponse;
            /**
             * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
             */
            type: string;
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
            managedIdentity?: v20230201.ManagedIdentitySettingsResponse;
            /**
             * Upstream auth type enum.
             */
            type?: string;
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

        /**
         * Properties of a hub.
         */
        export interface WebPubSubHubPropertiesResponse {
            /**
             * The settings for configuring if anonymous connections are allowed for this hub: "allow" or "deny". Default to "deny".
             */
            anonymousConnectPolicy?: string;
            /**
             * Event handler of a hub.
             */
            eventHandlers?: v20230201.EventHandlerResponse[];
            /**
             * Event listener settings for forwarding your client events to listeners.
             * Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
             * One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
             * Maximum count of event listeners among all hubs is 10.
             */
            eventListeners?: v20230201.EventListenerResponse[];
        }
        /**
         * webPubSubHubPropertiesResponseProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesResponse
         */
        export function webPubSubHubPropertiesResponseProvideDefaults(val: WebPubSubHubPropertiesResponse): WebPubSubHubPropertiesResponse {
            return {
                ...val,
                anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
            };
        }

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsResponse {
            /**
             * Azure Networking ACL Action.
             */
            defaultAction?: string;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: v20230201.PrivateEndpointACLResponse[];
            /**
             * Network ACL
             */
            publicNetwork?: v20230201.NetworkACLResponse;
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsResponse {
            /**
             * Request client certificate during TLS handshake if enabled
             */
            clientCertEnabled?: boolean;
        }
        /**
         * webPubSubTlsSettingsResponseProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsResponse
         */
        export function webPubSubTlsSettingsResponseProvideDefaults(val: WebPubSubTlsSettingsResponse): WebPubSubTlsSettingsResponse {
            return {
                ...val,
                clientCertEnabled: (val.clientCertEnabled) ?? true,
            };
        }

    }

    export namespace v20230301preview {
        /**
         * Properties of event handler.
         */
        export interface EventHandlerResponse {
            /**
             * Upstream auth settings. If not set, no auth is used for upstream messages.
             */
            auth?: v20230301preview.UpstreamAuthSettingsResponse;
            /**
             * Gets or sets the list of system events.
             */
            systemEvents?: string[];
            /**
             * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
             * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
             */
            urlTemplate: string;
            /**
             * Gets or sets the matching pattern for event names.
             * There are 3 kinds of patterns supported:
             *     1. "*", it matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
             *     3. A single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
        }

        /**
         * An Event Hub endpoint. 
         * The managed identity of Web PubSub service must be enabled, and the identity should have the "Azure Event Hubs Data sender" role to access Event Hub.
         */
        export interface EventHubEndpointResponse {
            /**
             * The name of the Event Hub.
             */
            eventHubName: string;
            /**
             * The fully qualified namespace name of the Event Hub resource. For example, "example.servicebus.windows.net".
             */
            fullyQualifiedNamespace: string;
            /**
             *
             * Expected value is 'EventHub'.
             */
            type: "EventHub";
        }

        /**
         * A setting defines which kinds of events should be sent to which endpoint.
         */
        export interface EventListenerResponse {
            /**
             * An endpoint specifying where Web PubSub should send events to.
             */
            endpoint: v20230301preview.EventHubEndpointResponse;
            /**
             * A base class for event filter which determines whether an event should be sent to an event listener.
             */
            filter: v20230301preview.EventNameFilterResponse;
        }

        /**
         * Filter events by their name.
         */
        export interface EventNameFilterResponse {
            /**
             * Gets or sets a list of system events. Supported events: "connected" and "disconnected". Blocking event "connect" is not supported because it requires a response.
             */
            systemEvents?: string[];
            /**
             *
             * Expected value is 'EventName'.
             */
            type: "EventName";
            /**
             * Gets or sets a matching pattern for event names.
             * There are 3 kinds of patterns supported:
             *     1. "*", it matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches events "event1" and "event2"
             *     3. A single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
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
            categories?: v20230301preview.LiveTraceCategoryResponse[];
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
            userAssignedIdentities?: {[key: string]: v20230301preview.UserAssignedIdentityPropertyResponse};
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
            privateEndpoint?: v20230301preview.PrivateEndpointResponse;
            /**
             * Connection state of the private endpoint connection
             */
            privateLinkServiceConnectionState?: v20230301preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * Provisioning state of the resource.
             */
            provisioningState: string;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20230301preview.SystemDataResponse;
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
            categories?: v20230301preview.ResourceLogCategoryResponse[];
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
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1;
             *     Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             *     Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             */
            capacity?: number;
            /**
             * Not used. Retained for future use.
             */
            family: string;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1, Premium_P1
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
            systemData: v20230301preview.SystemDataResponse;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
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
            managedIdentity?: v20230301preview.ManagedIdentitySettingsResponse;
            /**
             * Upstream auth type enum.
             */
            type?: string;
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

        /**
         * Properties of a hub.
         */
        export interface WebPubSubHubPropertiesResponse {
            /**
             * The settings for configuring if anonymous connections are allowed for this hub: "allow" or "deny". Default to "deny".
             */
            anonymousConnectPolicy?: string;
            /**
             * Event handler of a hub.
             */
            eventHandlers?: v20230301preview.EventHandlerResponse[];
            /**
             * Event listener settings for forwarding your client events to listeners.
             * Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
             * One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
             * Maximum count of event listeners among all hubs is 10.
             */
            eventListeners?: v20230301preview.EventListenerResponse[];
        }
        /**
         * webPubSubHubPropertiesResponseProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesResponse
         */
        export function webPubSubHubPropertiesResponseProvideDefaults(val: WebPubSubHubPropertiesResponse): WebPubSubHubPropertiesResponse {
            return {
                ...val,
                anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
            };
        }

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsResponse {
            /**
             * Azure Networking ACL Action.
             */
            defaultAction?: string;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: v20230301preview.PrivateEndpointACLResponse[];
            /**
             * Network ACL
             */
            publicNetwork?: v20230301preview.NetworkACLResponse;
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsResponse {
            /**
             * Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier.
             */
            clientCertEnabled?: boolean;
        }
        /**
         * webPubSubTlsSettingsResponseProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsResponse
         */
        export function webPubSubTlsSettingsResponseProvideDefaults(val: WebPubSubTlsSettingsResponse): WebPubSubTlsSettingsResponse {
            return {
                ...val,
                clientCertEnabled: (val.clientCertEnabled) ?? false,
            };
        }

    }

    export namespace v20230601preview {
        /**
         * Properties of event handler.
         */
        export interface EventHandlerResponse {
            /**
             * Upstream auth settings. If not set, no auth is used for upstream messages.
             */
            auth?: v20230601preview.UpstreamAuthSettingsResponse;
            /**
             * Gets or sets the list of system events.
             */
            systemEvents?: string[];
            /**
             * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
             * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
             */
            urlTemplate: string;
            /**
             * Gets or sets the matching pattern for event names.
             * There are 3 kinds of patterns supported:
             *     1. "*", it matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
             *     3. A single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
        }

        /**
         * An Event Hub endpoint. 
         * The managed identity of Web PubSub service must be enabled, and the identity should have the "Azure Event Hubs Data sender" role to access Event Hub.
         */
        export interface EventHubEndpointResponse {
            /**
             * The name of the Event Hub.
             */
            eventHubName: string;
            /**
             * The fully qualified namespace name of the Event Hub resource. For example, "example.servicebus.windows.net".
             */
            fullyQualifiedNamespace: string;
            /**
             *
             * Expected value is 'EventHub'.
             */
            type: "EventHub";
        }

        /**
         * A setting defines which kinds of events should be sent to which endpoint.
         */
        export interface EventListenerResponse {
            /**
             * An endpoint specifying where Web PubSub should send events to.
             */
            endpoint: v20230601preview.EventHubEndpointResponse;
            /**
             * A base class for event filter which determines whether an event should be sent to an event listener.
             */
            filter: v20230601preview.EventNameFilterResponse;
        }

        /**
         * Filter events by their name.
         */
        export interface EventNameFilterResponse {
            /**
             * Gets or sets a list of system events. Supported events: "connected" and "disconnected". Blocking event "connect" is not supported because it requires a response.
             */
            systemEvents?: string[];
            /**
             *
             * Expected value is 'EventName'.
             */
            type: "EventName";
            /**
             * Gets or sets a matching pattern for event names.
             * There are 3 kinds of patterns supported:
             *     1. "*", it matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches events "event1" and "event2"
             *     3. A single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
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
            categories?: v20230601preview.LiveTraceCategoryResponse[];
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
            userAssignedIdentities?: {[key: string]: v20230601preview.UserAssignedIdentityPropertyResponse};
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
            privateEndpoint?: v20230601preview.PrivateEndpointResponse;
            /**
             * Connection state of the private endpoint connection
             */
            privateLinkServiceConnectionState?: v20230601preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * Provisioning state of the resource.
             */
            provisioningState: string;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20230601preview.SystemDataResponse;
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
            categories?: v20230601preview.ResourceLogCategoryResponse[];
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
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1;
             *     Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             *     Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             */
            capacity?: number;
            /**
             * Not used. Retained for future use.
             */
            family: string;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1, Premium_P1
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
            systemData: v20230601preview.SystemDataResponse;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
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
            managedIdentity?: v20230601preview.ManagedIdentitySettingsResponse;
            /**
             * Upstream auth type enum.
             */
            type?: string;
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

        /**
         * Properties of a hub.
         */
        export interface WebPubSubHubPropertiesResponse {
            /**
             * The settings for configuring if anonymous connections are allowed for this hub: "allow" or "deny". Default to "deny".
             */
            anonymousConnectPolicy?: string;
            /**
             * Event handler of a hub.
             */
            eventHandlers?: v20230601preview.EventHandlerResponse[];
            /**
             * Event listener settings for forwarding your client events to listeners.
             * Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
             * One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
             * Maximum count of event listeners among all hubs is 10.
             */
            eventListeners?: v20230601preview.EventListenerResponse[];
        }
        /**
         * webPubSubHubPropertiesResponseProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesResponse
         */
        export function webPubSubHubPropertiesResponseProvideDefaults(val: WebPubSubHubPropertiesResponse): WebPubSubHubPropertiesResponse {
            return {
                ...val,
                anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
            };
        }

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsResponse {
            /**
             * Azure Networking ACL Action.
             */
            defaultAction?: string;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: v20230601preview.PrivateEndpointACLResponse[];
            /**
             * Network ACL
             */
            publicNetwork?: v20230601preview.NetworkACLResponse;
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsResponse {
            /**
             * Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier.
             */
            clientCertEnabled?: boolean;
        }
        /**
         * webPubSubTlsSettingsResponseProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsResponse
         */
        export function webPubSubTlsSettingsResponseProvideDefaults(val: WebPubSubTlsSettingsResponse): WebPubSubTlsSettingsResponse {
            return {
                ...val,
                clientCertEnabled: (val.clientCertEnabled) ?? false,
            };
        }

    }

    export namespace v20230801preview {
        /**
         * Properties of event handler.
         */
        export interface EventHandlerResponse {
            /**
             * Upstream auth settings. If not set, no auth is used for upstream messages.
             */
            auth?: v20230801preview.UpstreamAuthSettingsResponse;
            /**
             * Gets or sets the list of system events.
             */
            systemEvents?: string[];
            /**
             * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
             * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
             */
            urlTemplate: string;
            /**
             * Gets or sets the matching pattern for event names.
             * There are 3 kinds of patterns supported:
             *     1. "*", it matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
             *     3. A single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
        }

        /**
         * An Event Hub endpoint. 
         * The managed identity of Web PubSub service must be enabled, and the identity should have the "Azure Event Hubs Data sender" role to access Event Hub.
         */
        export interface EventHubEndpointResponse {
            /**
             * The name of the Event Hub.
             */
            eventHubName: string;
            /**
             * The fully qualified namespace name of the Event Hub resource. For example, "example.servicebus.windows.net".
             */
            fullyQualifiedNamespace: string;
            /**
             *
             * Expected value is 'EventHub'.
             */
            type: "EventHub";
        }

        /**
         * A setting defines which kinds of events should be sent to which endpoint.
         */
        export interface EventListenerResponse {
            /**
             * An endpoint specifying where Web PubSub should send events to.
             */
            endpoint: v20230801preview.EventHubEndpointResponse;
            /**
             * A base class for event filter which determines whether an event should be sent to an event listener.
             */
            filter: v20230801preview.EventNameFilterResponse;
        }

        /**
         * Filter events by their name.
         */
        export interface EventNameFilterResponse {
            /**
             * Gets or sets a list of system events. Supported events: "connected" and "disconnected". Blocking event "connect" is not supported because it requires a response.
             */
            systemEvents?: string[];
            /**
             *
             * Expected value is 'EventName'.
             */
            type: "EventName";
            /**
             * Gets or sets a matching pattern for event names.
             * There are 3 kinds of patterns supported:
             *     1. "*", it matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches events "event1" and "event2"
             *     3. A single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: string;
        }

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
            categories?: v20230801preview.LiveTraceCategoryResponse[];
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
            userAssignedIdentities?: {[key: string]: v20230801preview.UserAssignedIdentityPropertyResponse};
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
            privateEndpoint?: v20230801preview.PrivateEndpointResponse;
            /**
             * Connection state of the private endpoint connection
             */
            privateLinkServiceConnectionState?: v20230801preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * Provisioning state of the resource.
             */
            provisioningState: string;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20230801preview.SystemDataResponse;
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
            categories?: v20230801preview.ResourceLogCategoryResponse[];
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
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1;
             *     Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             *     Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             */
            capacity?: number;
            /**
             * Not used. Retained for future use.
             */
            family: string;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1, Premium_P1
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
            systemData: v20230801preview.SystemDataResponse;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
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
            managedIdentity?: v20230801preview.ManagedIdentitySettingsResponse;
            /**
             * Upstream auth type enum.
             */
            type?: string;
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

        /**
         * Properties of a hub.
         */
        export interface WebPubSubHubPropertiesResponse {
            /**
             * The settings for configuring if anonymous connections are allowed for this hub: "allow" or "deny". Default to "deny".
             */
            anonymousConnectPolicy?: string;
            /**
             * Event handler of a hub.
             */
            eventHandlers?: v20230801preview.EventHandlerResponse[];
            /**
             * Event listener settings for forwarding your client events to listeners.
             * Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
             * One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
             * Maximum count of event listeners among all hubs is 10.
             */
            eventListeners?: v20230801preview.EventListenerResponse[];
        }
        /**
         * webPubSubHubPropertiesResponseProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesResponse
         */
        export function webPubSubHubPropertiesResponseProvideDefaults(val: WebPubSubHubPropertiesResponse): WebPubSubHubPropertiesResponse {
            return {
                ...val,
                anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
            };
        }

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsResponse {
            /**
             * Azure Networking ACL Action.
             */
            defaultAction?: string;
            /**
             * IP rules for filtering public traffic
             */
            ipRules?: v20230801preview.IPRuleResponse[];
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: v20230801preview.PrivateEndpointACLResponse[];
            /**
             * Network ACL
             */
            publicNetwork?: v20230801preview.NetworkACLResponse;
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsResponse {
            /**
             * Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier.
             */
            clientCertEnabled?: boolean;
        }
        /**
         * webPubSubTlsSettingsResponseProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsResponse
         */
        export function webPubSubTlsSettingsResponseProvideDefaults(val: WebPubSubTlsSettingsResponse): WebPubSubTlsSettingsResponse {
            return {
                ...val,
                clientCertEnabled: (val.clientCertEnabled) ?? false,
            };
        }

    }
}
