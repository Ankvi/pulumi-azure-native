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

export type EntityTimelineKind = (typeof EntityTimelineKind)[keyof typeof EntityTimelineKind];
