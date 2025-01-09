export const AzureLargeInstanceHardwareTypeNamesEnum = {
    /**
     * Hardware type of UCS from vendor Cisco
     */
    Cisco_UCS: "Cisco_UCS",
    /**
     * Hardware type of HPE from vendor Hewlett Packard Enterprise
     */
    HPE: "HPE",
    /**
     * Hardware type of SDFLEX
     */
    SDFLEX: "SDFLEX",
} as const;

/**
 * the hardware type of the storage instance
 */
export type AzureLargeInstanceHardwareTypeNamesEnum = (typeof AzureLargeInstanceHardwareTypeNamesEnum)[keyof typeof AzureLargeInstanceHardwareTypeNamesEnum];

export const AzureLargeInstancePowerStateEnum = {
    /**
     * Starting means that the Azure Large Instance resource is turning on.
     */
    Starting: "starting",
    /**
     * Started means that the Azure Large Instance resource has been powered on.
     */
    Started: "started",
    /**
     * Stopping means that the Azure Large Instance resource is shutting down.
     */
    Stopping: "stopping",
    /**
     * Stopped means that the Azure Large Instance resource has shut down.
     */
    Stopped: "stopped",
    /**
     * Restarting means that the Azure Large Instance resource is restarting.
     */
    Restarting: "restarting",
    /**
     * Unknown means that the state of the Azure Large Instance is unknown.
     */
    Unknown: "unknown",
} as const;

/**
 * Resource power state
 */
export type AzureLargeInstancePowerStateEnum = (typeof AzureLargeInstancePowerStateEnum)[keyof typeof AzureLargeInstancePowerStateEnum];

export const AzureLargeInstanceSizeNamesEnum = {
    /**
     * Type I class SKU that can't be purchased anymore
     */
    S72m: "S72m",
    /**
     * Type I class SKU that can't be purchased anymore
     */
    S144m: "S144m",
    /**
     * Type I class SKU that can't be purchased anymore
     */
    S72: "S72",
    /**
     * Type I class SKU that can't be purchased anymore
     */
    S144: "S144",
    /**
     * Type I class SKU that can't be purchased anymore
     */
    S192: "S192",
    /**
     * Type I class SKU that can't be purchased anymore
     */
    S192m: "S192m",
    /**
     * Type I class SKU that can't be purchased anymore
     */
    S192xm: "S192xm",
    /**
     * 2 sockets, 96 CPU threads, 48 CPU cores, 768 GB total memory, 768 GB DRAM, 3.0 TB storage, Cisco_UCS hardware type
     */
    S96: "S96",
    /**
     * No longer offered or used.
     */
    S112: "S112",
    /**
     * 4 sockets, 224 CPU threads, 112 CPU cores, 3 TB total memory, 3 TB DRAM, 6.3 TB storage, Cisco_UCS hardware type
     */
    S224: "S224",
    /**
     * 4 sockets, 224 CPU threads, 112 CPU cores, 6 TB total memory, 6 TB DRAM, 10.5 TB storage, Cisco_UCS hardware type
     */
    S224m: "S224m",
    /**
     * 4 sockets, 224 CPU threads, 112 CPU cores, 6 TB total memory, 3 TB DRAM, 3 TB memory optane, 10.5 TB storage, Cisco_UCS hardware type
     */
    S224om: "S224om",
    /**
     * 4 sockets, 224 CPU threads, 112 CPU cores, 4.5 TB total memory, 1.5 TB DRAM, 3 TB memory optane, 8.4 TB storage, Cisco_UCS hardware type
     */
    S224oo: "S224oo",
    /**
     * 4 sockets, 224 CPU threads, 112 CPU cores, 9 TB total memory, 3 TB DRAM, 6 TB memory optane, 14.8 TB storage, Cisco_UCS hardware type
     */
    S224oom: "S224oom",
    /**
     * 4 sockets, 224 CPU threads, 112 CPU cores, 7.5TB total memory, 1.5 TB DRAM, 6 TB memory optane, 12.7 TB storage, Cisco_UCS hardware type
     */
    S224ooo: "S224ooo",
    /**
     * 4 sockets, 448 CPU threads, 6 TB total memory, SDFLEX hardware type
     */
    S224se: "S224se",
    /**
     * 8 sockets, 384 CPU threads, 192 CPU cores, 4 TB total memory, 4 TB DRAM, 16 TB storage, HPEMc990x hardware type
     */
    S384: "S384",
    /**
     * 8 sockets, 384 CPU threads, 192 CPU cores, 6 TB total memory, 6 TB DRAM, 18 TB storage, HPEMc990x hardware type
     */
    S384m: "S384m",
    /**
     * 8 sockets, 384 CPU threads, 192 CPU cores, 8 TB total memory, 8 TB DRAM, 22 TB storage, HPEMc990x hardware type
     */
    S384xm: "S384xm",
    /**
     * 8 sockets, 384 CPU threads, 12 TB total memory, HPEMc990x hardware type
     */
    S384xxm: "S384xxm",
    /**
     * 8 sockets, 448 CPU threads, 224 CPU cores, 6 TB total memory, 6 TB DRAM, 10.5 TB storage, SDFLEX hardware type
     */
    S448: "S448",
    /**
     * 8 sockets, 448 CPU threads, 224 CPU cores, 12 TB total memory, 12 TB DRAM, 18.9 TB storage, SDFLEX hardware type
     */
    S448m: "S448m",
    /**
     * 8 sockets, 448 CPU threads, 224 CPU cores, 12 TB total memory, 6 TB DRAM, 6 TB memory optane, 18.9 TB storage, SDFLEX hardware type
     */
    S448om: "S448om",
    /**
     * 8 sockets, 448 CPU threads, 224 CPU cores, 9 TB total memory, 3 TB DRAM, 6 TB memory optane, 14.8 TB storage, SDFLEX hardware type
     */
    S448oo: "S448oo",
    /**
     * 8 sockets, 448 CPU threads, 224 CPU cores, 18 TB total memory, 6 TB DRAM, 12 memory optane, 27.4 TB storage, SDFLEX hardware type
     */
    S448oom: "S448oom",
    /**
     * 8 sockets, 448 CPU threads, 224 CPU cores, 15 TB total memory, 3 TB DRAM, 12 memory optane, 23.2 TB storage, SDFLEX hardware type
     */
    S448ooo: "S448ooo",
    /**
     * 8 sockets, 448 CPU threads, 12 TB total memory, SDFLEX hardware type
     */
    S448se: "S448se",
    /**
     * 12 sockets, 576 CPU threads, 288 CPU cores, 12 TB total memory, 12 TB DRAM, 28 TB storage, HPEMc990x hardware type
     */
    S576m: "S576m",
    /**
     * 12 sockets, 576 CPU threads, 288 CPU cores, 18 TB total memory, HPEMc990x hardware type
     */
    S576xm: "S576xm",
    /**
     * 12 sockets, 672 CPU threads, 336 CPU cores, 9 TB total memory, 9 TB DRAM, 14.7 TB storage, SDFLEX hardware type
     */
    S672: "S672",
    /**
     * 12 sockets, 672 CPU threads, 336 CPU cores, 18 TB total memory, 18 TB DRAM, 27.4 TB storage, SDFLEX hardware type
     */
    S672m: "S672m",
    /**
     * 12 sockets, 672 CPU threads, 336 CPU cores, 18 TB total memory, 9 TB DRAM, 9 TB memory optane, 27.4 TB storage, SDFLEX hardware type
     */
    S672om: "S672om",
    /**
     * 12 sockets, 672 CPU threads, 336 CPU cores, 13.5 TB total memory, 4.5 TB DRAM, 9 TB memory optane, 21.1 TB storage, SDFLEX hardware type
     */
    S672oo: "S672oo",
    /**
     * 12 sockets, 672 CPU threads, 336 CPU cores, 27 TB total memory, 9 TB DRAM, 18 TB memory optane, 40 TB storage, SDFLEX hardware type
     */
    S672oom: "S672oom",
    /**
     * 12 sockets, 672 CPU threads, 336 CPU cores, 22.5 TB total memory, 4.5 TB DRAM, 18 TB memory optane, 33.7 TB storage, SDFLEX hardware type
     */
    S672ooo: "S672ooo",
    /**
     * No longer offered or used.
     */
    S768: "S768",
    /**
     * 16 sockets, 768 CPU threads, 384 CPU cores, 16 TB total memory, 16 TB DRAM, 36 TB storage, HPEMc990x hardware type
     */
    S768m: "S768m",
    /**
     * 16 sockets, 768 CPU threads, 384 CPU cores, 24 TB total memory, 24 TB DRAM, 56 TB storage, HPEMc990x hardware type
     */
    S768xm: "S768xm",
    /**
     * 16 sockets, 896 CPU threads, 448 CPU cores, 12 TB total memory, 12 TB DRAM, 18.9 TB storage, SDFLEX hardware type
     */
    S896: "S896",
    /**
     * 16 sockets, 896 CPU threads, 448 CPU cores, 24 TB	total memory, 24 TB DRAM, 35.8 TB storage, SDFLEX hardware type
     */
    S896m: "S896m",
    /**
     * 16 sockets, 896 CPU threads, 448 CPU cores, 24 TB	total memory, 12 TB DRAM, 12 TB memory optane, 35.8 TB storage, SDFLEX hardware type
     */
    S896om: "S896om",
    /**
     * 16 sockets, 896 CPU threads, 448 CPU cores, 18 TB  total memory, 6 TB DRAM, 12 TB memory optane, 27.4 TB storage, SDFLEX hardware type
     */
    S896oo: "S896oo",
    /**
     * 16 sockets, 896 CPU threads, 448 CPU cores, 36 TB total memory, 12 TB DRAM, 24 TB memory optane, 52.7 TB storage, SDFLEX hardware type
     */
    S896oom: "S896oom",
    /**
     * 16 sockets, 896 CPU threads, 448 CPU cores, 30 TB total memory, 6 TB DRAM, 24 TB memory optane, 44.3 TB storage, SDFLEX hardware type
     */
    S896ooo: "S896ooo",
    /**
     * 20 sockets, 960 CPU threads, 480 CPU cores, 20 TB total memory, 20 TB DRAM, 46 TB storage, HPEMc990x hardware type
     */
    S960m: "S960m",
} as const;

/**
 * Specifies the Azure Large Instance SKU.
 */
export type AzureLargeInstanceSizeNamesEnum = (typeof AzureLargeInstanceSizeNamesEnum)[keyof typeof AzureLargeInstanceSizeNamesEnum];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];