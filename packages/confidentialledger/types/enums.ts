export const LanguageRuntime = {
    CPP: "CPP",
    JS: "JS",
} as const;

/**
 * Unique name for the Managed CCF.
 */
export type LanguageRuntime = (typeof LanguageRuntime)[keyof typeof LanguageRuntime];

export const LedgerRoleName = {
    Reader: "Reader",
    Contributor: "Contributor",
    Administrator: "Administrator",
} as const;

/**
 * LedgerRole associated with the Security Principal of Ledger
 */
export type LedgerRoleName = (typeof LedgerRoleName)[keyof typeof LedgerRoleName];

export const LedgerType = {
    Unknown: "Unknown",
    Public: "Public",
    Private: "Private",
} as const;

/**
 * Type of Confidential Ledger
 */
export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType];
