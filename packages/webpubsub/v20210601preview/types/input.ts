import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        items?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<EventHandlerTemplateArgs>[]>}>;
    }

    /**
     * EventHandler template item settings.
     */
    export interface EventHandlerTemplateArgs {
        /**
         * Gets or sets the auth settings for an event handler. If not set, no auth is used.
         */
        auth?: pulumi.Input<UpstreamAuthSettingsArgs>;
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
        tier?: pulumi.Input<string | enums.WebPubSubSkuTier>;
    }

    /**
     * Upstream auth settings.
     */
    export interface UpstreamAuthSettingsArgs {
        /**
         * Gets or sets the managed identity settings. It's required if the auth type is set to ManagedIdentity.
         */
        managedIdentity?: pulumi.Input<ManagedIdentitySettingsArgs>;
        /**
         * Gets or sets the type of auth. None or ManagedIdentity is supported now.
         */
        type?: pulumi.Input<string | enums.UpstreamAuthType>;
    }

    /**
     * Network ACLs for the resource
     */
    export interface WebPubSubNetworkACLsArgs {
        /**
         * Default action when no other rule matches
         */
        defaultAction?: pulumi.Input<string | enums.ACLAction>;
        /**
         * ACLs for requests from private endpoints
         */
        privateEndpoints?: pulumi.Input<pulumi.Input<PrivateEndpointACLArgs>[]>;
        /**
         * ACL for requests from public network
         */
        publicNetwork?: pulumi.Input<NetworkACLArgs>;
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
