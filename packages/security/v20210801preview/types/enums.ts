export const StandardSupportedClouds = {
    AWS: "AWS",
    GCP: "GCP",
} as const;

/**
 * The cloud that the standard is supported on.
 */
export type StandardSupportedClouds = (typeof StandardSupportedClouds)[keyof typeof StandardSupportedClouds];
