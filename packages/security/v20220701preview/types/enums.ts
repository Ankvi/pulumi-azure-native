export const ApplicationSourceResourceType = {
    /**
     * The source of the application is assessments
     */
    Assessments: "Assessments",
} as const;

/**
 * The application source, what it affects, e.g. Assessments
 */
export type ApplicationSourceResourceType = (typeof ApplicationSourceResourceType)[keyof typeof ApplicationSourceResourceType];
