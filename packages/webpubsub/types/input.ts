import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace webpubsub {
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
         * Optional, integer. The unit count of the resource. 1 by default.
         * 
         * If present, following values are allowed:
         *     Free: 1;
         *     Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
         *     Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
         */
        capacity?: pulumi.Input<number>;
        /**
         * The name of the SKU. Required.
         * 
         * Allowed values: Standard_S1, Free_F1, Premium_P1
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
    }
    /**
     * webPubSubHubPropertiesArgsProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesArgs
     */
    export function webPubSubHubPropertiesArgsProvideDefaults(val: WebPubSubHubPropertiesArgs): WebPubSubHubPropertiesArgs {
        return {
            ...val,
            anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
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
    export interface WebPubSubTlsSettingsArgs {
        /**
         * Request client certificate during TLS handshake if enabled
         */
        clientCertEnabled?: pulumi.Input<boolean>;
    }
    /**
     * webPubSubTlsSettingsArgsProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsArgs
     */
    export function webPubSubTlsSettingsArgsProvideDefaults(val: WebPubSubTlsSettingsArgs): WebPubSubTlsSettingsArgs {
        return {
            ...val,
            clientCertEnabled: (val.clientCertEnabled) ?? true,
        };
    }

    export namespace v20210401preview {
        /**
         * The settings for event handler in webpubsub service
         */
        export interface EventHandlerSettingsArgs {
            /**
             * Get or set the EventHandler items. The key is the hub name and the value is the corresponding EventHandlerTemplate.
             */
            items?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<v20210401preview.EventHandlerTemplateArgs>[]>}>;
        }

        /**
         * EventHandler template item settings.
         */
        export interface EventHandlerTemplateArgs {
            /**
             * Gets or sets the auth settings for an event handler. If not set, no auth is used.
             */
            auth?: pulumi.Input<v20210401preview.UpstreamAuthSettingsArgs>;
            /**
             * Gets ot sets the system event pattern.
             * There are 2 kind of patterns supported:
             *     1. The single event name, for example, "connect", it matches "connect"
             *     2. Combine multiple events with ",", for example "connect,disconnected", it matches event "connect" and "disconnected"
             */
            systemEventPattern?: pulumi.Input<string>;
            /**
             * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
             * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
             */
            urlTemplate: pulumi.Input<string>;
            /**
             * Gets or sets the matching pattern for event names.
             * There are 3 kind of patterns supported:
             *     1. "*", it to matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
             *     3. The single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: pulumi.Input<string>;
        }

        /**
         * A class represent managed identities used for request and response
         */
        export interface ManagedIdentityArgs {
            /**
             * Represent the identity type: systemAssigned, userAssigned, None
             */
            type?: pulumi.Input<string | enums.v20210401preview.ManagedIdentityType>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20210401preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20210401preview.WebPubSubRequestType>[]>;
        }

        /**
         * ACL for a private endpoint
         */
        export interface PrivateEndpointACLArgs {
            /**
             * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            allow?: pulumi.Input<pulumi.Input<string | enums.v20210401preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20210401preview.WebPubSubRequestType>[]>;
            /**
             * Name of the private endpoint connection
             */
            name: pulumi.Input<string>;
        }

        /**
         * The billing information of the resource.
         */
        export interface ResourceSkuArgs {
            /**
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1
             *     Standard: 1,2,5,10,20,50,100
             */
            capacity?: pulumi.Input<number>;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1
             */
            name: pulumi.Input<string>;
            /**
             * Optional tier of this particular SKU. 'Standard' or 'Free'. 
             * 
             * `Basic` is deprecated, use `Standard` instead.
             */
            tier?: pulumi.Input<string | enums.v20210401preview.WebPubSubSkuTier>;
        }

        /**
         * Upstream auth settings.
         */
        export interface UpstreamAuthSettingsArgs {
            /**
             * Gets or sets the managed identity settings. It's required if the auth type is set to ManagedIdentity.
             */
            managedIdentity?: pulumi.Input<v20210401preview.ManagedIdentitySettingsArgs>;
            /**
             * Gets or sets the type of auth. None or ManagedIdentity is supported now.
             */
            type?: pulumi.Input<string | enums.v20210401preview.UpstreamAuthType>;
        }

        /**
         * Feature of a resource, which controls the runtime behavior.
         */
        export interface WebPubSubFeatureArgs {
            /**
             * FeatureFlags is the supported features of Azure SignalR service.
             *  - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
             *  - EnableMessagingLogs: "true"/"false", to enable/disable the connectivity log category respectively.
             *  - EnableLiveTrace: Live Trace allows you to know what's happening inside Azure SignalR service, it will give you live traces in real time, it will be helpful when you developing your own Azure SignalR based web application or self-troubleshooting some issues. Please note that live traces are counted as outbound messages that will be charged. Values allowed: "true"/"false", to enable/disable live trace feature.
             *  
             */
            flag: pulumi.Input<string | enums.v20210401preview.FeatureFlags>;
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
        export interface WebPubSubNetworkACLsArgs {
            /**
             * Default action when no other rule matches
             */
            defaultAction?: pulumi.Input<string | enums.v20210401preview.ACLAction>;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: pulumi.Input<pulumi.Input<v20210401preview.PrivateEndpointACLArgs>[]>;
            /**
             * ACL for requests from public network
             */
            publicNetwork?: pulumi.Input<v20210401preview.NetworkACLArgs>;
        }
        /**
         * webPubSubNetworkACLsArgsProvideDefaults sets the appropriate defaults for WebPubSubNetworkACLsArgs
         */
        export function webPubSubNetworkACLsArgsProvideDefaults(val: WebPubSubNetworkACLsArgs): WebPubSubNetworkACLsArgs {
            return {
                ...val,
                defaultAction: (val.defaultAction) ?? "Deny",
            };
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsArgs {
            /**
             * Request client certificate during TLS handshake if enabled
             */
            clientCertEnabled?: pulumi.Input<boolean>;
        }
        /**
         * webPubSubTlsSettingsArgsProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsArgs
         */
        export function webPubSubTlsSettingsArgsProvideDefaults(val: WebPubSubTlsSettingsArgs): WebPubSubTlsSettingsArgs {
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
        export interface DiagnosticConfigurationArgs {
            /**
             * Indicate whether or not enable Connectivity logs.
             * Available values: Enabled, Disabled.
             * Case insensitive.
             */
            enableConnectivityLogs?: pulumi.Input<string>;
            /**
             * Indicate whether or not enable Live Trace. 
             * Available values: Enabled, Disabled. 
             * Case insensitive. 
             * Live Trace allows you to know what's happening inside Azure SignalR service, it will give you live traces in real time, it will be helpful when you developing your own Azure SignalR based web application or self-troubleshooting some issues.
             */
            enableLiveTrace?: pulumi.Input<string>;
            /**
             * Indicate whether or not enable Messaging logs.
             * Available values: Enabled, Disabled.
             * Case insensitive.
             */
            enableMessagingLogs?: pulumi.Input<string>;
        }

        /**
         * The settings for event handler in webpubsub service
         */
        export interface EventHandlerSettingsArgs {
            /**
             * Get or set the EventHandler items. The key is the hub name and the value is the corresponding EventHandlerTemplate.
             */
            items?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<v20210601preview.EventHandlerTemplateArgs>[]>}>;
        }

        /**
         * EventHandler template item settings.
         */
        export interface EventHandlerTemplateArgs {
            /**
             * Gets or sets the auth settings for an event handler. If not set, no auth is used.
             */
            auth?: pulumi.Input<v20210601preview.UpstreamAuthSettingsArgs>;
            /**
             * Gets ot sets the system event pattern.
             * There are 2 kind of patterns supported:
             *     1. The single event name, for example, "connect", it matches "connect"
             *     2. Combine multiple events with ",", for example "connect,disconnected", it matches event "connect" and "disconnected"
             */
            systemEventPattern?: pulumi.Input<string>;
            /**
             * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
             * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
             */
            urlTemplate: pulumi.Input<string>;
            /**
             * Gets or sets the matching pattern for event names.
             * There are 3 kind of patterns supported:
             *     1. "*", it to matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
             *     3. The single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: pulumi.Input<string>;
        }

        /**
         * A class represent managed identities used for request and response
         */
        export interface ManagedIdentityArgs {
            /**
             * Represent the identity type: systemAssigned, userAssigned, None
             */
            type?: pulumi.Input<string | enums.v20210601preview.ManagedIdentityType>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20210601preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20210601preview.WebPubSubRequestType>[]>;
        }

        /**
         * ACL for a private endpoint
         */
        export interface PrivateEndpointACLArgs {
            /**
             * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            allow?: pulumi.Input<pulumi.Input<string | enums.v20210601preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20210601preview.WebPubSubRequestType>[]>;
            /**
             * Name of the private endpoint connection
             */
            name: pulumi.Input<string>;
        }

        /**
         * The billing information of the resource.
         */
        export interface ResourceSkuArgs {
            /**
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1
             *     Standard: 1,2,5,10,20,50,100
             */
            capacity?: pulumi.Input<number>;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1
             */
            name: pulumi.Input<string>;
            /**
             * Optional tier of this particular SKU. 'Standard' or 'Free'. 
             * 
             * `Basic` is deprecated, use `Standard` instead.
             */
            tier?: pulumi.Input<string | enums.v20210601preview.WebPubSubSkuTier>;
        }

        /**
         * Upstream auth settings.
         */
        export interface UpstreamAuthSettingsArgs {
            /**
             * Gets or sets the managed identity settings. It's required if the auth type is set to ManagedIdentity.
             */
            managedIdentity?: pulumi.Input<v20210601preview.ManagedIdentitySettingsArgs>;
            /**
             * Gets or sets the type of auth. None or ManagedIdentity is supported now.
             */
            type?: pulumi.Input<string | enums.v20210601preview.UpstreamAuthType>;
        }

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsArgs {
            /**
             * Default action when no other rule matches
             */
            defaultAction?: pulumi.Input<string | enums.v20210601preview.ACLAction>;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: pulumi.Input<pulumi.Input<v20210601preview.PrivateEndpointACLArgs>[]>;
            /**
             * ACL for requests from public network
             */
            publicNetwork?: pulumi.Input<v20210601preview.NetworkACLArgs>;
        }
        /**
         * webPubSubNetworkACLsArgsProvideDefaults sets the appropriate defaults for WebPubSubNetworkACLsArgs
         */
        export function webPubSubNetworkACLsArgsProvideDefaults(val: WebPubSubNetworkACLsArgs): WebPubSubNetworkACLsArgs {
            return {
                ...val,
                defaultAction: (val.defaultAction) ?? "Deny",
            };
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsArgs {
            /**
             * Request client certificate during TLS handshake if enabled
             */
            clientCertEnabled?: pulumi.Input<boolean>;
        }
        /**
         * webPubSubTlsSettingsArgsProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsArgs
         */
        export function webPubSubTlsSettingsArgsProvideDefaults(val: WebPubSubTlsSettingsArgs): WebPubSubTlsSettingsArgs {
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
        export interface EventHandlerSettingsArgs {
            /**
             * Get or set the EventHandler items. The key is the hub name and the value is the corresponding EventHandlerTemplate.
             */
            items?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<v20210901preview.EventHandlerTemplateArgs>[]>}>;
        }

        /**
         * EventHandler template item settings.
         */
        export interface EventHandlerTemplateArgs {
            /**
             * Gets or sets the auth settings for an event handler. If not set, no auth is used.
             */
            auth?: pulumi.Input<v20210901preview.UpstreamAuthSettingsArgs>;
            /**
             * Gets ot sets the system event pattern.
             * There are 2 kind of patterns supported:
             *     1. The single event name, for example, "connect", it matches "connect"
             *     2. Combine multiple events with ",", for example "connect,disconnected", it matches event "connect" and "disconnected"
             */
            systemEventPattern?: pulumi.Input<string>;
            /**
             * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
             * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
             */
            urlTemplate: pulumi.Input<string>;
            /**
             * Gets or sets the matching pattern for event names.
             * There are 3 kind of patterns supported:
             *     1. "*", it to matches any event name
             *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
             *     3. The single event name, for example, "event1", it matches "event1"
             */
            userEventPattern?: pulumi.Input<string>;
        }

        /**
         * live trace category configuration of a Microsoft.SignalRService resource.
         */
        export interface LiveTraceCategoryArgs {
            /**
             * Indicates whether or the log category is enabled.
             * Available values: true, false.
             * Case insensitive.
             */
            enabled?: pulumi.Input<string>;
            /**
             * Gets or sets the log category's name.
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
            categories?: pulumi.Input<pulumi.Input<v20210901preview.LiveTraceCategoryArgs>[]>;
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
             * Represent the identity type: systemAssigned, userAssigned, None
             */
            type?: pulumi.Input<string | enums.v20210901preview.ManagedIdentityType>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20210901preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20210901preview.WebPubSubRequestType>[]>;
        }

        /**
         * ACL for a private endpoint
         */
        export interface PrivateEndpointACLArgs {
            /**
             * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            allow?: pulumi.Input<pulumi.Input<string | enums.v20210901preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20210901preview.WebPubSubRequestType>[]>;
            /**
             * Name of the private endpoint connection
             */
            name: pulumi.Input<string>;
        }

        /**
         * The billing information of the resource.
         */
        export interface ResourceSkuArgs {
            /**
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1
             *     Standard: 1,2,5,10,20,50,100
             */
            capacity?: pulumi.Input<number>;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1
             */
            name: pulumi.Input<string>;
            /**
             * Optional tier of this particular SKU. 'Standard' or 'Free'. 
             * 
             * `Basic` is deprecated, use `Standard` instead.
             */
            tier?: pulumi.Input<string | enums.v20210901preview.WebPubSubSkuTier>;
        }

        /**
         * Upstream auth settings.
         */
        export interface UpstreamAuthSettingsArgs {
            /**
             * Gets or sets the managed identity settings. It's required if the auth type is set to ManagedIdentity.
             */
            managedIdentity?: pulumi.Input<v20210901preview.ManagedIdentitySettingsArgs>;
            /**
             * Gets or sets the type of auth. None or ManagedIdentity is supported now.
             */
            type?: pulumi.Input<string | enums.v20210901preview.UpstreamAuthType>;
        }

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsArgs {
            /**
             * Default action when no other rule matches
             */
            defaultAction?: pulumi.Input<string | enums.v20210901preview.ACLAction>;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: pulumi.Input<pulumi.Input<v20210901preview.PrivateEndpointACLArgs>[]>;
            /**
             * ACL for requests from public network
             */
            publicNetwork?: pulumi.Input<v20210901preview.NetworkACLArgs>;
        }
        /**
         * webPubSubNetworkACLsArgsProvideDefaults sets the appropriate defaults for WebPubSubNetworkACLsArgs
         */
        export function webPubSubNetworkACLsArgsProvideDefaults(val: WebPubSubNetworkACLsArgs): WebPubSubNetworkACLsArgs {
            return {
                ...val,
                defaultAction: (val.defaultAction) ?? "Deny",
            };
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsArgs {
            /**
             * Request client certificate during TLS handshake if enabled
             */
            clientCertEnabled?: pulumi.Input<boolean>;
        }
        /**
         * webPubSubTlsSettingsArgsProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsArgs
         */
        export function webPubSubTlsSettingsArgsProvideDefaults(val: WebPubSubTlsSettingsArgs): WebPubSubTlsSettingsArgs {
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
        export interface EventHandlerArgs {
            /**
             * Upstream auth settings. If not set, no auth is used for upstream messages.
             */
            auth?: pulumi.Input<v20230201.UpstreamAuthSettingsArgs>;
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
            endpoint: pulumi.Input<v20230201.EventHubEndpointArgs>;
            /**
             * A base class for event filter which determines whether an event should be sent to an event listener.
             */
            filter: pulumi.Input<v20230201.EventNameFilterArgs>;
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
            categories?: pulumi.Input<pulumi.Input<v20230201.LiveTraceCategoryArgs>[]>;
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
            type?: pulumi.Input<string | enums.v20230201.ManagedIdentityType>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20230201.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20230201.WebPubSubRequestType>[]>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20230201.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20230201.WebPubSubRequestType>[]>;
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
            status?: pulumi.Input<string | enums.v20230201.PrivateLinkServiceConnectionStatus>;
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
            categories?: pulumi.Input<pulumi.Input<v20230201.ResourceLogCategoryArgs>[]>;
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
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1;
             *     Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             *     Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             */
            capacity?: pulumi.Input<number>;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1, Premium_P1
             */
            name: pulumi.Input<string>;
            /**
             * Optional tier of this particular SKU. 'Standard' or 'Free'. 
             * 
             * `Basic` is deprecated, use `Standard` instead.
             */
            tier?: pulumi.Input<string | enums.v20230201.WebPubSubSkuTier>;
        }

        /**
         * Upstream auth settings. If not set, no auth is used for upstream messages.
         */
        export interface UpstreamAuthSettingsArgs {
            /**
             * Managed identity settings for upstream.
             */
            managedIdentity?: pulumi.Input<v20230201.ManagedIdentitySettingsArgs>;
            /**
             * Upstream auth type enum.
             */
            type?: pulumi.Input<string | enums.v20230201.UpstreamAuthType>;
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
            eventHandlers?: pulumi.Input<pulumi.Input<v20230201.EventHandlerArgs>[]>;
            /**
             * Event listener settings for forwarding your client events to listeners.
             * Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
             * One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
             * Maximum count of event listeners among all hubs is 10.
             */
            eventListeners?: pulumi.Input<pulumi.Input<v20230201.EventListenerArgs>[]>;
        }
        /**
         * webPubSubHubPropertiesArgsProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesArgs
         */
        export function webPubSubHubPropertiesArgsProvideDefaults(val: WebPubSubHubPropertiesArgs): WebPubSubHubPropertiesArgs {
            return {
                ...val,
                anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
            };
        }

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsArgs {
            /**
             * Azure Networking ACL Action.
             */
            defaultAction?: pulumi.Input<string | enums.v20230201.ACLAction>;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: pulumi.Input<pulumi.Input<v20230201.PrivateEndpointACLArgs>[]>;
            /**
             * Network ACL
             */
            publicNetwork?: pulumi.Input<v20230201.NetworkACLArgs>;
        }

        /**
         * TLS settings for the resource
         */
        export interface WebPubSubTlsSettingsArgs {
            /**
             * Request client certificate during TLS handshake if enabled
             */
            clientCertEnabled?: pulumi.Input<boolean>;
        }
        /**
         * webPubSubTlsSettingsArgsProvideDefaults sets the appropriate defaults for WebPubSubTlsSettingsArgs
         */
        export function webPubSubTlsSettingsArgsProvideDefaults(val: WebPubSubTlsSettingsArgs): WebPubSubTlsSettingsArgs {
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
        export interface EventHandlerArgs {
            /**
             * Upstream auth settings. If not set, no auth is used for upstream messages.
             */
            auth?: pulumi.Input<v20230301preview.UpstreamAuthSettingsArgs>;
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
            endpoint: pulumi.Input<v20230301preview.EventHubEndpointArgs>;
            /**
             * A base class for event filter which determines whether an event should be sent to an event listener.
             */
            filter: pulumi.Input<v20230301preview.EventNameFilterArgs>;
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
            categories?: pulumi.Input<pulumi.Input<v20230301preview.LiveTraceCategoryArgs>[]>;
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
            type?: pulumi.Input<string | enums.v20230301preview.ManagedIdentityType>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20230301preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20230301preview.WebPubSubRequestType>[]>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20230301preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20230301preview.WebPubSubRequestType>[]>;
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
            status?: pulumi.Input<string | enums.v20230301preview.PrivateLinkServiceConnectionStatus>;
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
            categories?: pulumi.Input<pulumi.Input<v20230301preview.ResourceLogCategoryArgs>[]>;
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
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1;
             *     Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             *     Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             */
            capacity?: pulumi.Input<number>;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1, Premium_P1
             */
            name: pulumi.Input<string>;
            /**
             * Optional tier of this particular SKU. 'Standard' or 'Free'. 
             * 
             * `Basic` is deprecated, use `Standard` instead.
             */
            tier?: pulumi.Input<string | enums.v20230301preview.WebPubSubSkuTier>;
        }

        /**
         * Upstream auth settings. If not set, no auth is used for upstream messages.
         */
        export interface UpstreamAuthSettingsArgs {
            /**
             * Managed identity settings for upstream.
             */
            managedIdentity?: pulumi.Input<v20230301preview.ManagedIdentitySettingsArgs>;
            /**
             * Upstream auth type enum.
             */
            type?: pulumi.Input<string | enums.v20230301preview.UpstreamAuthType>;
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
            eventHandlers?: pulumi.Input<pulumi.Input<v20230301preview.EventHandlerArgs>[]>;
            /**
             * Event listener settings for forwarding your client events to listeners.
             * Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
             * One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
             * Maximum count of event listeners among all hubs is 10.
             */
            eventListeners?: pulumi.Input<pulumi.Input<v20230301preview.EventListenerArgs>[]>;
        }
        /**
         * webPubSubHubPropertiesArgsProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesArgs
         */
        export function webPubSubHubPropertiesArgsProvideDefaults(val: WebPubSubHubPropertiesArgs): WebPubSubHubPropertiesArgs {
            return {
                ...val,
                anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
            };
        }

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsArgs {
            /**
             * Azure Networking ACL Action.
             */
            defaultAction?: pulumi.Input<string | enums.v20230301preview.ACLAction>;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: pulumi.Input<pulumi.Input<v20230301preview.PrivateEndpointACLArgs>[]>;
            /**
             * Network ACL
             */
            publicNetwork?: pulumi.Input<v20230301preview.NetworkACLArgs>;
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

    }

    export namespace v20230601preview {
        /**
         * Properties of event handler.
         */
        export interface EventHandlerArgs {
            /**
             * Upstream auth settings. If not set, no auth is used for upstream messages.
             */
            auth?: pulumi.Input<v20230601preview.UpstreamAuthSettingsArgs>;
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
            endpoint: pulumi.Input<v20230601preview.EventHubEndpointArgs>;
            /**
             * A base class for event filter which determines whether an event should be sent to an event listener.
             */
            filter: pulumi.Input<v20230601preview.EventNameFilterArgs>;
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
            categories?: pulumi.Input<pulumi.Input<v20230601preview.LiveTraceCategoryArgs>[]>;
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
            type?: pulumi.Input<string | enums.v20230601preview.ManagedIdentityType>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20230601preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20230601preview.WebPubSubRequestType>[]>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20230601preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20230601preview.WebPubSubRequestType>[]>;
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
            status?: pulumi.Input<string | enums.v20230601preview.PrivateLinkServiceConnectionStatus>;
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
            categories?: pulumi.Input<pulumi.Input<v20230601preview.ResourceLogCategoryArgs>[]>;
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
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1;
             *     Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             *     Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             */
            capacity?: pulumi.Input<number>;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1, Premium_P1
             */
            name: pulumi.Input<string>;
            /**
             * Optional tier of this particular SKU. 'Standard' or 'Free'. 
             * 
             * `Basic` is deprecated, use `Standard` instead.
             */
            tier?: pulumi.Input<string | enums.v20230601preview.WebPubSubSkuTier>;
        }

        /**
         * Upstream auth settings. If not set, no auth is used for upstream messages.
         */
        export interface UpstreamAuthSettingsArgs {
            /**
             * Managed identity settings for upstream.
             */
            managedIdentity?: pulumi.Input<v20230601preview.ManagedIdentitySettingsArgs>;
            /**
             * Upstream auth type enum.
             */
            type?: pulumi.Input<string | enums.v20230601preview.UpstreamAuthType>;
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
            eventHandlers?: pulumi.Input<pulumi.Input<v20230601preview.EventHandlerArgs>[]>;
            /**
             * Event listener settings for forwarding your client events to listeners.
             * Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
             * One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
             * Maximum count of event listeners among all hubs is 10.
             */
            eventListeners?: pulumi.Input<pulumi.Input<v20230601preview.EventListenerArgs>[]>;
        }
        /**
         * webPubSubHubPropertiesArgsProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesArgs
         */
        export function webPubSubHubPropertiesArgsProvideDefaults(val: WebPubSubHubPropertiesArgs): WebPubSubHubPropertiesArgs {
            return {
                ...val,
                anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
            };
        }

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsArgs {
            /**
             * Azure Networking ACL Action.
             */
            defaultAction?: pulumi.Input<string | enums.v20230601preview.ACLAction>;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: pulumi.Input<pulumi.Input<v20230601preview.PrivateEndpointACLArgs>[]>;
            /**
             * Network ACL
             */
            publicNetwork?: pulumi.Input<v20230601preview.NetworkACLArgs>;
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

    }

    export namespace v20230801preview {
        /**
         * Properties of event handler.
         */
        export interface EventHandlerArgs {
            /**
             * Upstream auth settings. If not set, no auth is used for upstream messages.
             */
            auth?: pulumi.Input<v20230801preview.UpstreamAuthSettingsArgs>;
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
            endpoint: pulumi.Input<v20230801preview.EventHubEndpointArgs>;
            /**
             * A base class for event filter which determines whether an event should be sent to an event listener.
             */
            filter: pulumi.Input<v20230801preview.EventNameFilterArgs>;
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
            action?: pulumi.Input<string | enums.v20230801preview.ACLAction>;
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
            categories?: pulumi.Input<pulumi.Input<v20230801preview.LiveTraceCategoryArgs>[]>;
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
            type?: pulumi.Input<string | enums.v20230801preview.ManagedIdentityType>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20230801preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20230801preview.WebPubSubRequestType>[]>;
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
            allow?: pulumi.Input<pulumi.Input<string | enums.v20230801preview.WebPubSubRequestType>[]>;
            /**
             * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
             */
            deny?: pulumi.Input<pulumi.Input<string | enums.v20230801preview.WebPubSubRequestType>[]>;
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
            status?: pulumi.Input<string | enums.v20230801preview.PrivateLinkServiceConnectionStatus>;
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
            categories?: pulumi.Input<pulumi.Input<v20230801preview.ResourceLogCategoryArgs>[]>;
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
             * Optional, integer. The unit count of the resource. 1 by default.
             * 
             * If present, following values are allowed:
             *     Free: 1;
             *     Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             *     Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
             */
            capacity?: pulumi.Input<number>;
            /**
             * The name of the SKU. Required.
             * 
             * Allowed values: Standard_S1, Free_F1, Premium_P1
             */
            name: pulumi.Input<string>;
            /**
             * Optional tier of this particular SKU. 'Standard' or 'Free'. 
             * 
             * `Basic` is deprecated, use `Standard` instead.
             */
            tier?: pulumi.Input<string | enums.v20230801preview.WebPubSubSkuTier>;
        }

        /**
         * Upstream auth settings. If not set, no auth is used for upstream messages.
         */
        export interface UpstreamAuthSettingsArgs {
            /**
             * Managed identity settings for upstream.
             */
            managedIdentity?: pulumi.Input<v20230801preview.ManagedIdentitySettingsArgs>;
            /**
             * Upstream auth type enum.
             */
            type?: pulumi.Input<string | enums.v20230801preview.UpstreamAuthType>;
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
            eventHandlers?: pulumi.Input<pulumi.Input<v20230801preview.EventHandlerArgs>[]>;
            /**
             * Event listener settings for forwarding your client events to listeners.
             * Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
             * One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
             * Maximum count of event listeners among all hubs is 10.
             */
            eventListeners?: pulumi.Input<pulumi.Input<v20230801preview.EventListenerArgs>[]>;
        }
        /**
         * webPubSubHubPropertiesArgsProvideDefaults sets the appropriate defaults for WebPubSubHubPropertiesArgs
         */
        export function webPubSubHubPropertiesArgsProvideDefaults(val: WebPubSubHubPropertiesArgs): WebPubSubHubPropertiesArgs {
            return {
                ...val,
                anonymousConnectPolicy: (val.anonymousConnectPolicy) ?? "deny",
            };
        }

        /**
         * Network ACLs for the resource
         */
        export interface WebPubSubNetworkACLsArgs {
            /**
             * Azure Networking ACL Action.
             */
            defaultAction?: pulumi.Input<string | enums.v20230801preview.ACLAction>;
            /**
             * IP rules for filtering public traffic
             */
            ipRules?: pulumi.Input<pulumi.Input<v20230801preview.IPRuleArgs>[]>;
            /**
             * ACLs for requests from private endpoints
             */
            privateEndpoints?: pulumi.Input<pulumi.Input<v20230801preview.PrivateEndpointACLArgs>[]>;
            /**
             * Network ACL
             */
            publicNetwork?: pulumi.Input<v20230801preview.NetworkACLArgs>;
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

    }
}
