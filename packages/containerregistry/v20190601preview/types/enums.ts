export const Architecture = {
    Amd64: "amd64",
    X86: "x86",
    Architecture_386: "386",
    Arm: "arm",
    Arm64: "arm64",
} as const;

export type Architecture = (typeof Architecture)[keyof typeof Architecture];

export const BaseImageTriggerType = {
    All: "All",
    Runtime: "Runtime",
} as const;

export type BaseImageTriggerType = (typeof BaseImageTriggerType)[keyof typeof BaseImageTriggerType];

export const OS = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OS = (typeof OS)[keyof typeof OS];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SecretObjectType = {
    Opaque: "Opaque",
    Vaultsecret: "Vaultsecret",
} as const;

export type SecretObjectType = (typeof SecretObjectType)[keyof typeof SecretObjectType];

export const SourceControlType = {
    Github: "Github",
    VisualStudioTeamService: "VisualStudioTeamService",
} as const;

export type SourceControlType = (typeof SourceControlType)[keyof typeof SourceControlType];

export const SourceRegistryLoginMode = {
    None: "None",
    Default: "Default",
} as const;

export type SourceRegistryLoginMode = (typeof SourceRegistryLoginMode)[keyof typeof SourceRegistryLoginMode];

export const SourceTriggerEvent = {
    Commit: "commit",
    Pullrequest: "pullrequest",
} as const;

export type SourceTriggerEvent = (typeof SourceTriggerEvent)[keyof typeof SourceTriggerEvent];

export const StepType = {
    Docker: "Docker",
    FileTask: "FileTask",
    EncodedTask: "EncodedTask",
} as const;

export type StepType = (typeof StepType)[keyof typeof StepType];

export const TaskStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

export const TokenType = {
    PAT: "PAT",
    OAuth: "OAuth",
} as const;

export type TokenType = (typeof TokenType)[keyof typeof TokenType];

export const TriggerStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type TriggerStatus = (typeof TriggerStatus)[keyof typeof TriggerStatus];

export const UpdateTriggerPayloadType = {
    Default: "Default",
    Token: "Token",
} as const;

export type UpdateTriggerPayloadType = (typeof UpdateTriggerPayloadType)[keyof typeof UpdateTriggerPayloadType];

export const Variant = {
    V6: "v6",
    V7: "v7",
    V8: "v8",
} as const;

export type Variant = (typeof Variant)[keyof typeof Variant];