import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The settings for event handler in webpubsub service
     */
    export interface EventHandlerSettingsResponse {
        /**
         * Get or set the EventHandler items. The key is the hub name and the value is the corresponding EventHandlerTemplate.
         */
        items?: {[key: string]: EventHandlerTemplateResponse[]};
    }

    /**
     * EventHandler template item settings.
     */
    export interface EventHandlerTemplateResponse {
        /**
         * Gets or sets the auth settings for an event handler. If not set, no auth is used.
         */
        auth?: UpstreamAuthSettingsResponse;
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
         * Represent the identity type: systemAssigned, userAssigned, None
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
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * Connection state
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * Provisioning state of the private endpoint connection
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
     * Upstream auth settings.
     */
    export interface UpstreamAuthSettingsResponse {
        /**
         * Gets or sets the managed identity settings. It's required if the auth type is set to ManagedIdentity.
         */
        managedIdentity?: ManagedIdentitySettingsResponse;
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
        privateEndpoints?: PrivateEndpointACLResponse[];
        /**
         * ACL for requests from public network
         */
        publicNetwork?: NetworkACLResponse;
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
