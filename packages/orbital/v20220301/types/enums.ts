export const AutoTrackingConfiguration = {
    Disabled: "disabled",
    XBand: "xBand",
    SBand: "sBand",
} as const;

export type AutoTrackingConfiguration = (typeof AutoTrackingConfiguration)[keyof typeof AutoTrackingConfiguration];

export const Direction = {
    Uplink: "uplink",
    Downlink: "downlink",
} as const;

export type Direction = (typeof Direction)[keyof typeof Direction];

export const Polarization = {
    RHCP: "RHCP",
    LHCP: "LHCP",
    LinearVertical: "linearVertical",
    LinearHorizontal: "linearHorizontal",
} as const;

export type Polarization = (typeof Polarization)[keyof typeof Polarization];

export const Protocol = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];