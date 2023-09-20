export const LanguageRuntime = {
    CPP: "CPP",
    JS: "JS",
} as const;

export type LanguageRuntime = (typeof LanguageRuntime)[keyof typeof LanguageRuntime];

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

export const RunningState = {
    Active: "Active",
    Paused: "Paused",
    Unknown: "Unknown",
    Pausing: "Pausing",
    Resuming: "Resuming",
} as const;

export type RunningState = (typeof RunningState)[keyof typeof RunningState];