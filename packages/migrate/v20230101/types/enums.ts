export const CleanupState = {
    None: "None",
    Started: "Started",
    InProgress: "InProgress",
    Completed: "Completed",
    Failed: "Failed",
} as const;

/**
 * Gets or sets the cleanup state of the solution.
 */
export type CleanupState = (typeof CleanupState)[keyof typeof CleanupState];

export const Goal = {
    Servers: "Servers",
    Databases: "Databases",
    DesktopVirtualization: "DesktopVirtualization",
    WebApplications: "WebApplications",
    DataCenter: "DataCenter",
} as const;

/**
 * Gets or sets the goal of the solution.
 */
export type Goal = (typeof Goal)[keyof typeof Goal];

export const PrivateLinkServiceConnectionStateStatus = {
    Approved: "Approved",
    Pending: "Pending",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Private link connection state.
 */
export type PrivateLinkServiceConnectionStateStatus = (typeof PrivateLinkServiceConnectionStateStatus)[keyof typeof PrivateLinkServiceConnectionStateStatus];

export const PublicNetworkAccess = {
    NotSpecified: "NotSpecified",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Gets or sets the state of public network access.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const Purpose = {
    Discovery: "Discovery",
    Assessment: "Assessment",
    Migration: "Migration",
} as const;

/**
 * Gets or sets the purpose of the solution.
 */
export type Purpose = (typeof Purpose)[keyof typeof Purpose];

export const Status = {
    Inactive: "Inactive",
    Active: "Active",
} as const;

/**
 * Gets or sets the current status of the solution.
 */
export type Status = (typeof Status)[keyof typeof Status];

export const Tool = {
    ServerDiscovery: "ServerDiscovery",
    ServerAssessment: "ServerAssessment",
    ServerMigration: "ServerMigration",
    Cloudamize: "Cloudamize",
    Turbonomic: "Turbonomic",
    Zerto: "Zerto",
    CorentTech: "CorentTech",
    ServerAssessmentV1: "ServerAssessmentV1",
    ServerMigration_Replication: "ServerMigration_Replication",
    Carbonite: "Carbonite",
    DataMigrationAssistant: "DataMigrationAssistant",
    DatabaseMigrationService: "DatabaseMigrationService",
    Device42: "Device42",
    JetStream: "JetStream",
    RackWare: "RackWare",
    UnifyCloud: "UnifyCloud",
    Flexera: "Flexera",
    ServerDiscovery_Import: "ServerDiscovery_Import",
    Lakeside: "Lakeside",
    AppServiceMigrationAssistant: "AppServiceMigrationAssistant",
    Movere: "Movere",
    CloudSphere: "CloudSphere",
    Modernization: "Modernization",
    ServerMigration_DataReplication: "ServerMigration_DataReplication",
    Unknown: "Unknown",
} as const;

/**
 * Gets or sets the tool being used in the solution.
 */
export type Tool = (typeof Tool)[keyof typeof Tool];
