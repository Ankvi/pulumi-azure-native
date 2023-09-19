export const AccessRights = {
    Manage: "Manage",
    Send: "Send",
    Listen: "Listen",
} as const;

export type AccessRights = (typeof AccessRights)[keyof typeof AccessRights];

export const NamespaceType = {
    Messaging: "Messaging",
    NotificationHub: "NotificationHub",
} as const;

export type NamespaceType = (typeof NamespaceType)[keyof typeof NamespaceType];

export const SkuName = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];
