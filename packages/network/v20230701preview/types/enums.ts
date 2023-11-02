export const AccessRuleDirection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

/**
 * Direction that specifies whether the access rules is inbound/outbound.
 */
export type AccessRuleDirection = (typeof AccessRuleDirection)[keyof typeof AccessRuleDirection];

export const AssociationAccessMode = {
    Learning: "Learning",
    Enforced: "Enforced",
    Audit: "Audit",
} as const;

/**
 * Access mode on the association.
 */
export type AssociationAccessMode = (typeof AssociationAccessMode)[keyof typeof AssociationAccessMode];

export const ZoneType = {
    Public: "Public",
    Private: "Private",
} as const;

/**
 * The type of this DNS zone (Public or Private).
 */
export type ZoneType = (typeof ZoneType)[keyof typeof ZoneType];
