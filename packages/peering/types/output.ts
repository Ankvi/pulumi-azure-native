import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties that define a BGP session.
 */
export interface BgpSessionResponse {
    /**
     * The maximum number of prefixes advertised over the IPv4 session.
     */
    maxPrefixesAdvertisedV4?: number;
    /**
     * The maximum number of prefixes advertised over the IPv6 session.
     */
    maxPrefixesAdvertisedV6?: number;
    /**
     * The MD5 authentication key of the session.
     */
    md5AuthenticationKey?: string;
    /**
     * The IPv4 session address on Microsoft's end.
     */
    microsoftSessionIPv4Address?: string;
    /**
     * The IPv6 session address on Microsoft's end.
     */
    microsoftSessionIPv6Address?: string;
    /**
     * The IPv4 session address on peer's end.
     */
    peerSessionIPv4Address?: string;
    /**
     * The IPv6 session address on peer's end.
     */
    peerSessionIPv6Address?: string;
    /**
     * The IPv4 prefix that contains both ends' IPv4 addresses.
     */
    sessionPrefixV4?: string;
    /**
     * The IPv6 prefix that contains both ends' IPv6 addresses.
     */
    sessionPrefixV6?: string;
    /**
     * The state of the IPv4 session.
     */
    sessionStateV4: string;
    /**
     * The state of the IPv6 session.
     */
    sessionStateV6: string;
}

/**
 * The contact detail class.
 */
export interface ContactDetailResponse {
    /**
     * The e-mail address of the contact.
     */
    email?: string;
    /**
     * The phone number of the contact.
     */
    phone?: string;
    /**
     * The role of the contact.
     */
    role?: string;
}

/**
 * The properties that define a direct connection.
 */
export interface DirectConnectionResponse {
    /**
     * The bandwidth of the connection.
     */
    bandwidthInMbps?: number;
    /**
     * The BGP session associated with the connection.
     */
    bgpSession?: BgpSessionResponse;
    /**
     * The unique identifier (GUID) for the connection.
     */
    connectionIdentifier?: string;
    /**
     * The state of the connection.
     */
    connectionState: string;
    /**
     * The error message related to the connection state, if any.
     */
    errorMessage: string;
    /**
     * The ID used within Microsoft's peering provisioning system to track the connection
     */
    microsoftTrackingId: string;
    /**
     * The PeeringDB.com ID of the facility at which the connection has to be set up.
     */
    peeringDBFacilityId?: number;
    /**
     * The bandwidth that is actually provisioned.
     */
    provisionedBandwidthInMbps: number;
    /**
     * The field indicating if Microsoft provides session ip addresses.
     */
    sessionAddressProvider?: string;
    /**
     * The flag that indicates whether or not the connection is used for peering service.
     */
    useForPeeringService?: boolean;
}

/**
 * The properties that define an exchange connection.
 */
export interface ExchangeConnectionResponse {
    /**
     * The BGP session associated with the connection.
     */
    bgpSession?: BgpSessionResponse;
    /**
     * The unique identifier (GUID) for the connection.
     */
    connectionIdentifier?: string;
    /**
     * The state of the connection.
     */
    connectionState: string;
    /**
     * The error message related to the connection state, if any.
     */
    errorMessage: string;
    /**
     * The PeeringDB.com ID of the facility at which the connection has to be set up.
     */
    peeringDBFacilityId?: number;
}

/**
 * The properties that define a Log Analytics Workspace.
 */
export interface LogAnalyticsWorkspacePropertiesResponse {
    /**
     * The list of connected agents.
     */
    connectedAgents: string[];
    /**
     * The Workspace Key.
     */
    key: string;
    /**
     * The Workspace ID.
     */
    workspaceID: string;
}

/**
 * The properties that define a direct peering.
 */
export interface PeeringPropertiesDirectResponse {
    /**
     * The set of connections that constitute a direct peering.
     */
    connections?: DirectConnectionResponse[];
    /**
     * The type of direct peering.
     */
    directPeeringType?: string;
    /**
     * The reference of the peer ASN.
     */
    peerAsn?: SubResourceResponse;
    /**
     * The flag that indicates whether or not the peering is used for peering service.
     */
    useForPeeringService: boolean;
}

/**
 * The properties that define an exchange peering.
 */
export interface PeeringPropertiesExchangeResponse {
    /**
     * The set of connections that constitute an exchange peering.
     */
    connections?: ExchangeConnectionResponse[];
    /**
     * The reference of the peer ASN.
     */
    peerAsn?: SubResourceResponse;
}

/**
 * The details of the event associated with a prefix.
 */
export interface PeeringServicePrefixEventResponse {
    /**
     * The description of the event associated with a prefix.
     */
    eventDescription: string;
    /**
     * The level of the event associated with a prefix.
     */
    eventLevel: string;
    /**
     * The summary of the event associated with a prefix.
     */
    eventSummary: string;
    /**
     * The timestamp of the event associated with a prefix.
     */
    eventTimestamp: string;
    /**
     * The type of the event associated with a prefix.
     */
    eventType: string;
}

/**
 * The SKU that defines the type of the peering service.
 */
export interface PeeringServiceSkuResponse {
    /**
     * The name of the peering service SKU.
     */
    name?: string;
}

/**
 * The SKU that defines the tier and kind of the peering.
 */
export interface PeeringSkuResponse {
    /**
     * The family of the peering SKU.
     */
    family: string;
    /**
     * The name of the peering SKU.
     */
    name?: string;
    /**
     * The size of the peering SKU.
     */
    size: string;
    /**
     * The tier of the peering SKU.
     */
    tier: string;
}

/**
 * The sub resource.
 */
export interface SubResourceResponse {
    /**
     * The identifier of the referenced resource.
     */
    id?: string;
}
