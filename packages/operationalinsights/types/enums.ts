export const BillingType = {
    Cluster: "Cluster",
    Workspaces: "Workspaces",
} as const;

export type BillingType = (typeof BillingType)[keyof typeof BillingType];

export const ClusterSkuNameEnum = {
    CapacityReservation: "CapacityReservation",
} as const;

export type ClusterSkuNameEnum = (typeof ClusterSkuNameEnum)[keyof typeof ClusterSkuNameEnum];

export const ColumnDataTypeHintEnum = {
    /**
     * A string that matches the pattern of a URI, for example, scheme://username:password@host:1234/this/is/a/path?k1=v1&k2=v2#fragment
     */
    Uri: "uri",
    /**
     * A standard 128-bit GUID following the standard shape, xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    Guid: "guid",
    /**
     * An Azure Resource Model (ARM) path: /subscriptions/{...}/resourceGroups/{...}/providers/Microsoft.{...}/{...}/{...}/{...}...
     */
    ArmPath: "armPath",
    /**
     * A standard V4/V6 ip address following the standard shape, x.x.x.x/y:y:y:y:y:y:y:y
     */
    Ip: "ip",
} as const;

export type ColumnDataTypeHintEnum = (typeof ColumnDataTypeHintEnum)[keyof typeof ColumnDataTypeHintEnum];

export const ColumnTypeEnum = {
    String: "string",
    Int: "int",
    Long: "long",
    Real: "real",
    Boolean: "boolean",
    DateTime: "dateTime",
    Guid: "guid",
    Dynamic: "dynamic",
} as const;

export type ColumnTypeEnum = (typeof ColumnTypeEnum)[keyof typeof ColumnTypeEnum];

export const DataSourceKind = {
    WindowsEvent: "WindowsEvent",
    WindowsPerformanceCounter: "WindowsPerformanceCounter",
    IISLogs: "IISLogs",
    LinuxSyslog: "LinuxSyslog",
    LinuxSyslogCollection: "LinuxSyslogCollection",
    LinuxPerformanceObject: "LinuxPerformanceObject",
    LinuxPerformanceCollection: "LinuxPerformanceCollection",
    CustomLog: "CustomLog",
    CustomLogCollection: "CustomLogCollection",
    AzureAuditLog: "AzureAuditLog",
    AzureActivityLog: "AzureActivityLog",
    GenericDataSource: "GenericDataSource",
    ChangeTrackingCustomPath: "ChangeTrackingCustomPath",
    ChangeTrackingPath: "ChangeTrackingPath",
    ChangeTrackingServices: "ChangeTrackingServices",
    ChangeTrackingDataTypeConfiguration: "ChangeTrackingDataTypeConfiguration",
    ChangeTrackingDefaultRegistry: "ChangeTrackingDefaultRegistry",
    ChangeTrackingRegistry: "ChangeTrackingRegistry",
    ChangeTrackingLinuxPath: "ChangeTrackingLinuxPath",
    LinuxChangeTrackingPath: "LinuxChangeTrackingPath",
    ChangeTrackingContentLocation: "ChangeTrackingContentLocation",
    WindowsTelemetry: "WindowsTelemetry",
    Office365: "Office365",
    SecurityWindowsBaselineConfiguration: "SecurityWindowsBaselineConfiguration",
    SecurityCenterSecurityWindowsBaselineConfiguration: "SecurityCenterSecurityWindowsBaselineConfiguration",
    SecurityEventCollectionConfiguration: "SecurityEventCollectionConfiguration",
    SecurityInsightsSecurityEventCollectionConfiguration: "SecurityInsightsSecurityEventCollectionConfiguration",
    ImportComputerGroup: "ImportComputerGroup",
    NetworkMonitoring: "NetworkMonitoring",
    Itsm: "Itsm",
    DnsAnalytics: "DnsAnalytics",
    ApplicationInsights: "ApplicationInsights",
    SqlDataClassification: "SqlDataClassification",
} as const;

export type DataSourceKind = (typeof DataSourceKind)[keyof typeof DataSourceKind];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const LinkedServiceEntityStatus = {
    Succeeded: "Succeeded",
    Deleting: "Deleting",
    ProvisioningAccount: "ProvisioningAccount",
    Updating: "Updating",
} as const;

export type LinkedServiceEntityStatus = (typeof LinkedServiceEntityStatus)[keyof typeof LinkedServiceEntityStatus];

export const MachineGroupType = {
    Unknown: "unknown",
    Azure_cs: "azure-cs",
    Azure_sf: "azure-sf",
    Azure_vmss: "azure-vmss",
    User_static: "user-static",
} as const;

export type MachineGroupType = (typeof MachineGroupType)[keyof typeof MachineGroupType];

export const PublicNetworkAccessType = {
    /**
     * Enables connectivity to Log Analytics through public DNS.
     */
    Enabled: "Enabled",
    /**
     * Disables public connectivity to Log Analytics through public DNS.
     */
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

export const TablePlanEnum = {
    /**
     * Logs  that are adjusted to support high volume low value verbose logs.
     */
    Basic: "Basic",
    /**
     * Logs  that allow monitoring and analytics.
     */
    Analytics: "Analytics",
} as const;

export type TablePlanEnum = (typeof TablePlanEnum)[keyof typeof TablePlanEnum];

export const WorkspaceSkuNameEnum = {
    Free: "Free",
    Standard: "Standard",
    Premium: "Premium",
    PerNode: "PerNode",
    PerGB2018: "PerGB2018",
    Standalone: "Standalone",
    CapacityReservation: "CapacityReservation",
    LACluster: "LACluster",
} as const;

export type WorkspaceSkuNameEnum = (typeof WorkspaceSkuNameEnum)[keyof typeof WorkspaceSkuNameEnum];