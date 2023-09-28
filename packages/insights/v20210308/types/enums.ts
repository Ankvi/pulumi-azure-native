export const Kind = {
    User: "user",
    Shared: "shared",
} as const;

/**
 * The kind of workbook. Choices are user and shared.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];
