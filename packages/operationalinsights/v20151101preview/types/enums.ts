export const DataSourceKind = {
    AzureActivityLog: "AzureActivityLog",
    ChangeTrackingPath: "ChangeTrackingPath",
    ChangeTrackingDefaultPath: "ChangeTrackingDefaultPath",
    ChangeTrackingDefaultRegistry: "ChangeTrackingDefaultRegistry",
    ChangeTrackingCustomRegistry: "ChangeTrackingCustomRegistry",
    CustomLog: "CustomLog",
    CustomLogCollection: "CustomLogCollection",
    GenericDataSource: "GenericDataSource",
    IISLogs: "IISLogs",
    LinuxPerformanceObject: "LinuxPerformanceObject",
    LinuxPerformanceCollection: "LinuxPerformanceCollection",
    LinuxSyslog: "LinuxSyslog",
    LinuxSyslogCollection: "LinuxSyslogCollection",
    WindowsEvent: "WindowsEvent",
    WindowsPerformanceCounter: "WindowsPerformanceCounter",
} as const;

/**
 * The kind of the DataSource.
 */
export type DataSourceKind = (typeof DataSourceKind)[keyof typeof DataSourceKind];

export const EntityStatus = {
    Creating: "Creating",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
    Deleting: "Deleting",
    ProvisioningAccount: "ProvisioningAccount",
} as const;

/**
 * The provisioning state of the workspace.
 */
export type EntityStatus = (typeof EntityStatus)[keyof typeof EntityStatus];

export const MachineGroupType = {
    Unknown: "unknown",
    Azure_cs: "azure-cs",
    Azure_sf: "azure-sf",
    Azure_vmss: "azure-vmss",
    User_static: "user-static",
} as const;

/**
 * Type of the machine group
 */
export type MachineGroupType = (typeof MachineGroupType)[keyof typeof MachineGroupType];

export const SkuNameEnum = {
    Free: "Free",
    Standard: "Standard",
    Premium: "Premium",
    PerNode: "PerNode",
    PerGB2018: "PerGB2018",
    Standalone: "Standalone",
    CapacityReservation: "CapacityReservation",
} as const;

/**
 * The name of the SKU.
 */
export type SkuNameEnum = (typeof SkuNameEnum)[keyof typeof SkuNameEnum];
