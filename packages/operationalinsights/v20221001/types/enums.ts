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

/**
 * Column data type logical hint.
 */
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

/**
 * Column data type.
 */
export type ColumnTypeEnum = (typeof ColumnTypeEnum)[keyof typeof ColumnTypeEnum];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

/**
 * Type of managed service identity.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

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

/**
 * The network access type for accessing Log Analytics query.
 */
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

/**
 * Instruct the system how to handle and charge the logs ingested to this table.
 */
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

/**
 * The name of the SKU.
 */
export type WorkspaceSkuNameEnum = (typeof WorkspaceSkuNameEnum)[keyof typeof WorkspaceSkuNameEnum];
