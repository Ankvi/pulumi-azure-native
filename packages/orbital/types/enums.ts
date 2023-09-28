export const AutoTrackingConfiguration = {
    Disabled: "disabled",
    XBand: "xBand",
    SBand: "sBand",
} as const;

/**
 * Auto-tracking configuration.
 */
export type AutoTrackingConfiguration = (typeof AutoTrackingConfiguration)[keyof typeof AutoTrackingConfiguration];

export const Direction = {
    Uplink: "Uplink",
    Downlink: "Downlink",
} as const;

/**
 * Direction (Uplink or Downlink).
 */
export type Direction = (typeof Direction)[keyof typeof Direction];

export const Polarization = {
    RHCP: "RHCP",
    LHCP: "LHCP",
    LinearVertical: "linearVertical",
    LinearHorizontal: "linearHorizontal",
} as const;

/**
 * Polarization. e.g. (RHCP, LHCP).
 */
export type Polarization = (typeof Polarization)[keyof typeof Polarization];

export const Protocol = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

/**
 * Protocol either UDP or TCP.
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];
