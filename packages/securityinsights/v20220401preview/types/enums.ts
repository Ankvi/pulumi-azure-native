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
