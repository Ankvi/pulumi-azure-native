export const ZoneType = {
    Public: "Public",
    Private: "Private",
} as const;

export type ZoneType = (typeof ZoneType)[keyof typeof ZoneType];
