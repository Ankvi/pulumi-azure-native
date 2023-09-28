export const LiveEventEncodingType = {
    None: "None",
    Basic: "Basic",
    Standard: "Standard",
    Premium1080p: "Premium1080p",
} as const;

/**
 * The encoding type for Live Event.  This value is specified at creation time and cannot be updated.
 */
export type LiveEventEncodingType = (typeof LiveEventEncodingType)[keyof typeof LiveEventEncodingType];

export const LiveEventInputProtocol = {
    FragmentedMP4: "FragmentedMP4",
    RTMP: "RTMP",
} as const;

/**
 * The streaming protocol for the Live Event.  This is specified at creation time and cannot be updated.
 */
export type LiveEventInputProtocol = (typeof LiveEventInputProtocol)[keyof typeof LiveEventInputProtocol];

export const StreamOptionsFlag = {
    Default: "Default",
    LowLatency: "LowLatency",
} as const;

export type StreamOptionsFlag = (typeof StreamOptionsFlag)[keyof typeof StreamOptionsFlag];
