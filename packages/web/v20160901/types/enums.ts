export const RouteType = {
    DEFAULT: "DEFAULT",
    INHERITED: "INHERITED",
    STATIC: "STATIC",
} as const;

export type RouteType = (typeof RouteType)[keyof typeof RouteType];
