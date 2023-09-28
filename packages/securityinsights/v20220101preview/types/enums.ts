export const EntityTimelineKind = {
    /**
     * activity
     */
    Activity: "Activity",
    /**
     * bookmarks
     */
    Bookmark: "Bookmark",
    /**
     * security alerts
     */
    SecurityAlert: "SecurityAlert",
} as const;

/**
 * The entity query kind
 */
export type EntityTimelineKind = (typeof EntityTimelineKind)[keyof typeof EntityTimelineKind];

export const SettingKind = {
    Anomalies: "Anomalies",
    EyesOn: "EyesOn",
    EntityAnalytics: "EntityAnalytics",
    Ueba: "Ueba",
} as const;

/**
 * The kind of the setting
 */
export type SettingKind = (typeof SettingKind)[keyof typeof SettingKind];

export const SourceType = {
    Local_file: "Local file",
    Remote_storage: "Remote storage",
} as const;

/**
 * The sourceType of the watchlist
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];
