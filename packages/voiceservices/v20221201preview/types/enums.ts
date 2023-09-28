export const TestLinePurpose = {
    Manual: "Manual",
    Automated: "Automated",
} as const;

/**
 * Purpose of this test line, e.g. automated or manual testing
 */
export type TestLinePurpose = (typeof TestLinePurpose)[keyof typeof TestLinePurpose];
