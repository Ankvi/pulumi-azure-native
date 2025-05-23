export const AzureBareMetalHardwareTypeNamesEnum = {
    Cisco_UCS: "Cisco_UCS",
    HPE: "HPE",
    SDFLEX: "SDFLEX",
} as const;

/**
 * Name of the hardware type (vendor and/or their product name)
 */
export type AzureBareMetalHardwareTypeNamesEnum = (typeof AzureBareMetalHardwareTypeNamesEnum)[keyof typeof AzureBareMetalHardwareTypeNamesEnum];

export const AzureBareMetalInstancePowerStateEnum = {
    Starting: "starting",
    Started: "started",
    Stopping: "stopping",
    Stopped: "stopped",
    Restarting: "restarting",
    Unknown: "unknown",
} as const;

/**
 * Resource power state
 */
export type AzureBareMetalInstancePowerStateEnum = (typeof AzureBareMetalInstancePowerStateEnum)[keyof typeof AzureBareMetalInstancePowerStateEnum];

export const AzureBareMetalInstanceSizeNamesEnum = {
    S72m: "S72m",
    S144m: "S144m",
    S72: "S72",
    S144: "S144",
    S192: "S192",
    S192m: "S192m",
    S192xm: "S192xm",
    S96: "S96",
    S112: "S112",
    S224: "S224",
    S224m: "S224m",
    S224om: "S224om",
    S224oo: "S224oo",
    S224oom: "S224oom",
    S224ooo: "S224ooo",
    S384: "S384",
    S384m: "S384m",
    S384xm: "S384xm",
    S384xxm: "S384xxm",
    S448: "S448",
    S448m: "S448m",
    S448om: "S448om",
    S448oo: "S448oo",
    S448oom: "S448oom",
    S448ooo: "S448ooo",
    S448se: "S448se",
    S576m: "S576m",
    S576xm: "S576xm",
    S672: "S672",
    S672m: "S672m",
    S672om: "S672om",
    S672oo: "S672oo",
    S672oom: "S672oom",
    S672ooo: "S672ooo",
    S768: "S768",
    S768m: "S768m",
    S768xm: "S768xm",
    S896: "S896",
    S896m: "S896m",
    S896om: "S896om",
    S896oo: "S896oo",
    S896oom: "S896oom",
    S896ooo: "S896ooo",
    S960m: "S960m",
} as const;

/**
 * Specifies the Azure Bare Metal Instance SKU.
 */
export type AzureBareMetalInstanceSizeNamesEnum = (typeof AzureBareMetalInstanceSizeNamesEnum)[keyof typeof AzureBareMetalInstanceSizeNamesEnum];

export const ProvisioningState = {
    Accepted: "Accepted",
    Creating: "Creating",
    Updating: "Updating",
    Failed: "Failed",
    Succeeded: "Succeeded",
    Deleting: "Deleting",
    Canceled: "Canceled",
    Migrating: "Migrating",
} as const;

/**
 * State of provisioning of the AzureBareMetalStorageInstance
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the Azure Bare Metal Storage Instance. The type 'SystemAssigned' refers to an implicitly created identity. The type 'None' will remove any identities from the Azure Bare Metal Storage Instance.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
