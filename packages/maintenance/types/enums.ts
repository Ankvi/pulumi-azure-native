export const MaintenanceScope = {
    /**
     * This maintenance scope controls installation of azure platform updates i.e. services on physical nodes hosting customer VMs.
     */
    Host: "Host",
    /**
     * This maintenance scope controls the default update maintenance of the Azure Resource
     */
    Resource: "Resource",
    /**
     * This maintenance scope controls os image installation on VM/VMSS
     */
    OSImage: "OSImage",
    /**
     * This maintenance scope controls extension installation on VM/VMSS
     */
    Extension: "Extension",
    /**
     * This maintenance scope controls installation of windows and linux packages on VM/VMSS
     */
    InGuestPatch: "InGuestPatch",
    /**
     * This maintenance scope controls installation of SQL server platform updates.
     */
    SQLDB: "SQLDB",
    /**
     * This maintenance scope controls installation of SQL managed instance platform update.
     */
    SQLManagedInstance: "SQLManagedInstance",
} as const;

export type MaintenanceScope = (typeof MaintenanceScope)[keyof typeof MaintenanceScope];

export const RebootOptions = {
    IfRequired: "IfRequired",
    Never: "Never",
    Always: "Always",
} as const;

export type RebootOptions = (typeof RebootOptions)[keyof typeof RebootOptions];

export const TagOperators = {
    All: "All",
    Any: "Any",
} as const;

export type TagOperators = (typeof TagOperators)[keyof typeof TagOperators];

export const TaskScope = {
    Global: "Global",
    Resource: "Resource",
} as const;

export type TaskScope = (typeof TaskScope)[keyof typeof TaskScope];

export const Visibility = {
    /**
     * Only visible to users with permissions.
     */
    Custom: "Custom",
    /**
     * Visible to all users.
     */
    Public: "Public",
} as const;

export type Visibility = (typeof Visibility)[keyof typeof Visibility];
