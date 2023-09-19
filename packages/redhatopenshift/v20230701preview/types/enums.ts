export const EncryptionAtHost = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type EncryptionAtHost = (typeof EncryptionAtHost)[keyof typeof EncryptionAtHost];

export const FipsValidatedModules = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type FipsValidatedModules = (typeof FipsValidatedModules)[keyof typeof FipsValidatedModules];

export const OutboundType = {
    Loadbalancer: "Loadbalancer",
    UserDefinedRouting: "UserDefinedRouting",
} as const;

export type OutboundType = (typeof OutboundType)[keyof typeof OutboundType];

export const Visibility = {
    Private: "Private",
    Public: "Public",
} as const;

export type Visibility = (typeof Visibility)[keyof typeof Visibility];
