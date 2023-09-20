export const AddRemove = {
    /**
     * Indicates that a user is adding a favorite lab
     */
    Add: "Add",
    /**
     * Indicates that a user is removing a favorite lab
     */
    Remove: "Remove",
} as const;

export type AddRemove = (typeof AddRemove)[keyof typeof AddRemove];

export const ConfigurationState = {
    /**
     * User either hasn't started configuring their template
     * or they haven't started the configuration process.
     */
    NotApplicable: "NotApplicable",
    /**
     * User is finished modifying the template.
     */
    Completed: "Completed",
} as const;

export type ConfigurationState = (typeof ConfigurationState)[keyof typeof ConfigurationState];

export const LabUserAccessMode = {
    /**
     * Only users registered with the lab can access VMs.
     */
    Restricted: "Restricted",
    /**
     * Any user can register with the lab and access its VMs.
     */
    Open: "Open",
} as const;

export type LabUserAccessMode = (typeof LabUserAccessMode)[keyof typeof LabUserAccessMode];

export const ManagedLabVmSize = {
    /**
     * The base VM size
     */
    Basic: "Basic",
    /**
     * The standard or default VM size
     */
    Standard: "Standard",
    /**
     * The most performant VM size
     */
    Performance: "Performance",
} as const;

export type ManagedLabVmSize = (typeof ManagedLabVmSize)[keyof typeof ManagedLabVmSize];