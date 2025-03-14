export const AutoUpdateRingType = {
    /**
     * customer selection of preview update install mcc on their physical vm
     */
    Preview: "Preview",
    /**
     * customer selection of slow update to install mcc on their physical vm
     */
    Slow: "Slow",
    /**
     * customer selection of fast / auto update to install mcc on their physical vm
     */
    Fast: "Fast",
} as const;

/**
 * Auto Update Ring Type which is slow or fast etc.
 */
export type AutoUpdateRingType = (typeof AutoUpdateRingType)[keyof typeof AutoUpdateRingType];

export const CustomerTransitState = {
    /**
     * do not have transit
     */
    NoTransit: "NoTransit",
    /**
     * transit provider and have own subscribers
     */
    CombinedTransit: "CombinedTransit",
    /**
     * pure transit provider or network service provider
     */
    TransitOnly: "TransitOnly",
} as const;

/**
 * Customer resource transit state.
 */
export type CustomerTransitState = (typeof CustomerTransitState)[keyof typeof CustomerTransitState];

export const CycleType = {
    /**
     * customer selection of preview update install mcc on their physical vm
     */
    Preview: "Preview",
    /**
     * customer selection of slow update to install mcc on their physical vm
     */
    Slow: "Slow",
    /**
     * customer selection of fast / auto update to install mcc on their physical vm
     */
    Fast: "Fast",
} as const;

/**
 * Update Cycle Type
 */
export type CycleType = (typeof CycleType)[keyof typeof CycleType];

export const OsType = {
    /**
     * cache node installs on windows operating system
     */
    Windows: "Windows",
    /**
     * cache node installs on Linux Operating system
     */
    Linux: "Linux",
    /**
     * cache node installs on Azure Eflow
     */
    Eflow: "Eflow",
} as const;

/**
 * Operating system of the cache node
 */
export type OsType = (typeof OsType)[keyof typeof OsType];

export const ProxyRequired = {
    /**
     * Proxy is not required in setup
     */
    None: "None",
    /**
     * proxy is required in setup
     */
    Required: "Required",
} as const;

/**
 * Cache node resource requires a proxy
 */
export type ProxyRequired = (typeof ProxyRequired)[keyof typeof ProxyRequired];
