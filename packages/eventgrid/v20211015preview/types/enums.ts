export const AdvancedFilterOperatorType = {
    NumberIn: "NumberIn",
    NumberNotIn: "NumberNotIn",
    NumberLessThan: "NumberLessThan",
    NumberGreaterThan: "NumberGreaterThan",
    NumberLessThanOrEquals: "NumberLessThanOrEquals",
    NumberGreaterThanOrEquals: "NumberGreaterThanOrEquals",
    BoolEquals: "BoolEquals",
    StringIn: "StringIn",
    StringNotIn: "StringNotIn",
    StringBeginsWith: "StringBeginsWith",
    StringEndsWith: "StringEndsWith",
    StringContains: "StringContains",
    NumberInRange: "NumberInRange",
    NumberNotInRange: "NumberNotInRange",
    StringNotBeginsWith: "StringNotBeginsWith",
    StringNotEndsWith: "StringNotEndsWith",
    StringNotContains: "StringNotContains",
    IsNullOrUndefined: "IsNullOrUndefined",
    IsNotNull: "IsNotNull",
} as const;

/**
 * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
 */
export type AdvancedFilterOperatorType = (typeof AdvancedFilterOperatorType)[keyof typeof AdvancedFilterOperatorType];

export const PartnerDestinationActivationState = {
    NeverActivated: "NeverActivated",
    Activated: "Activated",
} as const;

/**
 * Activation state of the partner destination.
 */
export type PartnerDestinationActivationState = (typeof PartnerDestinationActivationState)[keyof typeof PartnerDestinationActivationState];

export const PartnerDestinationProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

/**
 * Provisioning state of the partner destination.
 */
export type PartnerDestinationProvisioningState = (typeof PartnerDestinationProvisioningState)[keyof typeof PartnerDestinationProvisioningState];

export const PartnerRegistrationVisibilityState = {
    Hidden: "Hidden",
    PublicPreview: "PublicPreview",
    GenerallyAvailable: "GenerallyAvailable",
} as const;

/**
 * Visibility state of the partner registration.
 */
export type PartnerRegistrationVisibilityState = (typeof PartnerRegistrationVisibilityState)[keyof typeof PartnerRegistrationVisibilityState];
