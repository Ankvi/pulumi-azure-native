export const AutoGeneratedDomainNameLabelScope = {
    TenantReuse: "TenantReuse",
} as const;

export type AutoGeneratedDomainNameLabelScope = (typeof AutoGeneratedDomainNameLabelScope)[keyof typeof AutoGeneratedDomainNameLabelScope];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the resource.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const ProvisioningState = {
    Accepted: "Accepted",
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
    Deleted: "Deleted",
    NotSpecified: "NotSpecified",
} as const;

/**
 * Provisioning state of the resource.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const ZoneRedundancy = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ZoneRedundancy = (typeof ZoneRedundancy)[keyof typeof ZoneRedundancy];
