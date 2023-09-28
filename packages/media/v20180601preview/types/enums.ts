export const LiveEventEncodingType = {
    None: "None",
    Basic: "Basic",
} as const;

/**
 * The encoding type for Live Event.
 */
export type LiveEventEncodingType = (typeof LiveEventEncodingType)[keyof typeof LiveEventEncodingType];

export const LiveEventInputProtocol = {
    FragmentedMP4: "FragmentedMP4",
    RTMP: "RTMP",
} as const;

/**
 * The streaming protocol for the Live Event.
 */
export type LiveEventInputProtocol = (typeof LiveEventInputProtocol)[keyof typeof LiveEventInputProtocol];

export const StreamOptionsFlag = {
    Default: "Default",
    LowLatency: "LowLatency",
} as const;

export type StreamOptionsFlag = (typeof StreamOptionsFlag)[keyof typeof StreamOptionsFlag];
