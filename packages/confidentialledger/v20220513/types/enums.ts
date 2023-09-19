export const LedgerRoleName = {
    Reader: "Reader",
    Contributor: "Contributor",
    Administrator: "Administrator",
} as const;

export type LedgerRoleName = (typeof LedgerRoleName)[keyof typeof LedgerRoleName];

export const LedgerType = {
    Unknown: "Unknown",
    Public: "Public",
    Private: "Private",
} as const;

export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType];
