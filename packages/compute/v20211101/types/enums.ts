export const IntervalInMins = {
    ThreeMins: "ThreeMins",
    FiveMins: "FiveMins",
    ThirtyMins: "ThirtyMins",
    SixtyMins: "SixtyMins",
} as const;

export type IntervalInMins = (typeof IntervalInMins)[keyof typeof IntervalInMins];

export const StatusLevelTypes = {
    Info: "Info",
    Warning: "Warning",
    Error: "Error",
} as const;

export type StatusLevelTypes = (typeof StatusLevelTypes)[keyof typeof StatusLevelTypes];