export const StandardSupportedClouds = {
    AWS: "AWS",
    GCP: "GCP",
} as const;

export type StandardSupportedClouds = (typeof StandardSupportedClouds)[keyof typeof StandardSupportedClouds];
