export const CloudType = {
    AWS: "AWS",
} as const;

export type CloudType = (typeof CloudType)[keyof typeof CloudType];
