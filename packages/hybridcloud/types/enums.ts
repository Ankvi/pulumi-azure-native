export const CloudType = {
    AWS: "AWS",
} as const;

/**
 * The cloud connector type.
 */
export type CloudType = (typeof CloudType)[keyof typeof CloudType];
