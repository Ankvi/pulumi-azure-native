export const ZoneType = {
    Public: "Public",
    Private: "Private",
} as const;

/**
 * The type of this DNS zone (Public or Private).
 */
export type ZoneType = (typeof ZoneType)[keyof typeof ZoneType];
