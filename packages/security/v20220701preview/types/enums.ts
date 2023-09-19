export const ApplicationSourceResourceType = {
    /**
     * The source of the application is assessments
     */
    Assessments: "Assessments",
} as const;

export type ApplicationSourceResourceType = (typeof ApplicationSourceResourceType)[keyof typeof ApplicationSourceResourceType];
