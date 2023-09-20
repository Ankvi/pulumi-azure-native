export const BuildTaskStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type BuildTaskStatus = (typeof BuildTaskStatus)[keyof typeof BuildTaskStatus];

export const OsType = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OsType = (typeof OsType)[keyof typeof OsType];

export const SourceControlType = {
    Github: "Github",
    VisualStudioTeamService: "VisualStudioTeamService",
} as const;

export type SourceControlType = (typeof SourceControlType)[keyof typeof SourceControlType];

export const TokenType = {
    PAT: "PAT",
    OAuth: "OAuth",
} as const;

export type TokenType = (typeof TokenType)[keyof typeof TokenType];