export const ConsistencyModeTypes = {
    CrashConsistent: "CrashConsistent",
    FileSystemConsistent: "FileSystemConsistent",
    ApplicationConsistent: "ApplicationConsistent",
} as const;

/**
 * ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details.
 */
export type ConsistencyModeTypes = (typeof ConsistencyModeTypes)[keyof typeof ConsistencyModeTypes];

export const IntervalInMins = {
    ThreeMins: "ThreeMins",
    FiveMins: "FiveMins",
    ThirtyMins: "ThirtyMins",
    SixtyMins: "SixtyMins",
} as const;

/**
 * Interval value in minutes used to create LogAnalytics call rate logs.
 */
export type IntervalInMins = (typeof IntervalInMins)[keyof typeof IntervalInMins];
