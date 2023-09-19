export const TestLinePurpose = {
    Manual: "Manual",
    Automated: "Automated",
} as const;

export type TestLinePurpose = (typeof TestLinePurpose)[keyof typeof TestLinePurpose];
