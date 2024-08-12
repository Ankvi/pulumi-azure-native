export const DashboardPartMetadataType = {
    /**
     * The markdown part type.
     */
    Markdown: "Extension/HubsExtension/PartType/MarkdownPart",
} as const;

/**
 * The dashboard part metadata type.
 */
export type DashboardPartMetadataType = (typeof DashboardPartMetadataType)[keyof typeof DashboardPartMetadataType];

export const FontSize = {
    NotSpecified: "NotSpecified",
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
} as const;

/**
 * Size of terminal font.
 */
export type FontSize = (typeof FontSize)[keyof typeof FontSize];

export const FontStyle = {
    NotSpecified: "NotSpecified",
    Monospace: "Monospace",
    Courier: "Courier",
} as const;

/**
 * Style of terminal font.
 */
export type FontStyle = (typeof FontStyle)[keyof typeof FontStyle];

export const OsType = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

/**
 * The operating system type of the cloud shell. Deprecated, use preferredShellType.
 */
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

/**
 * Provisioning state of the console.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const ShellType = {
    Bash: "bash",
    Pwsh: "pwsh",
    Powershell: "powershell",
} as const;

/**
 * The shell type of the cloud shell.
 */
export type ShellType = (typeof ShellType)[keyof typeof ShellType];
