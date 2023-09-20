export const FontSize = {
    NotSpecified: "NotSpecified",
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
} as const;

export type FontSize = (typeof FontSize)[keyof typeof FontSize];

export const FontStyle = {
    NotSpecified: "NotSpecified",
    Monospace: "Monospace",
    Courier: "Courier",
} as const;

export type FontStyle = (typeof FontStyle)[keyof typeof FontStyle];

export const OsType = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OsType = (typeof OsType)[keyof typeof OsType];

export const ProvisioningState = {
    NotSpecified: "NotSpecified",
    Accepted: "Accepted",
    Pending: "Pending",
    Updating: "Updating",
    Creating: "Creating",
    Repairing: "Repairing",
    Failed: "Failed",
    Canceled: "Canceled",
    Succeeded: "Succeeded",
} as const;

export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const ShellType = {
    Bash: "bash",
    Pwsh: "pwsh",
    Powershell: "powershell",
} as const;

export type ShellType = (typeof ShellType)[keyof typeof ShellType];