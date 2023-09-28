export const AllowedEndpointRecordType = {
    DomainName: "DomainName",
    IPv4Address: "IPv4Address",
    IPv6Address: "IPv6Address",
    Any: "Any",
} as const;

/**
 * The allowed type DNS record types for this profile.
 */
export type AllowedEndpointRecordType = (typeof AllowedEndpointRecordType)[keyof typeof AllowedEndpointRecordType];

export const AlwaysServe = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method.
 */
export type AlwaysServe = (typeof AlwaysServe)[keyof typeof AlwaysServe];

export const EndpointMonitorStatus = {
    CheckingEndpoint: "CheckingEndpoint",
    Online: "Online",
    Degraded: "Degraded",
    Disabled: "Disabled",
    Inactive: "Inactive",
    Stopped: "Stopped",
    Unmonitored: "Unmonitored",
} as const;

/**
 * The monitoring status of the endpoint.
 */
export type EndpointMonitorStatus = (typeof EndpointMonitorStatus)[keyof typeof EndpointMonitorStatus];

export const EndpointStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

export const MonitorProtocol = {
    HTTP: "HTTP",
    HTTPS: "HTTPS",
    TCP: "TCP",
} as const;

/**
 * The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
 */
export type MonitorProtocol = (typeof MonitorProtocol)[keyof typeof MonitorProtocol];

export const ProfileMonitorStatus = {
    CheckingEndpoints: "CheckingEndpoints",
    Online: "Online",
    Degraded: "Degraded",
    Disabled: "Disabled",
    Inactive: "Inactive",
} as const;

/**
 * The profile-level monitoring status of the Traffic Manager profile.
 */
export type ProfileMonitorStatus = (typeof ProfileMonitorStatus)[keyof typeof ProfileMonitorStatus];

export const ProfileStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The status of the Traffic Manager profile.
 */
export type ProfileStatus = (typeof ProfileStatus)[keyof typeof ProfileStatus];

export const TrafficRoutingMethod = {
    Performance: "Performance",
    Priority: "Priority",
    Weighted: "Weighted",
    Geographic: "Geographic",
    MultiValue: "MultiValue",
    Subnet: "Subnet",
} as const;

/**
 * The traffic routing method of the Traffic Manager profile.
 */
export type TrafficRoutingMethod = (typeof TrafficRoutingMethod)[keyof typeof TrafficRoutingMethod];

export const TrafficViewEnrollmentStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
 */
export type TrafficViewEnrollmentStatus = (typeof TrafficViewEnrollmentStatus)[keyof typeof TrafficViewEnrollmentStatus];
