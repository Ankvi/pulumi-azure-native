export const AccountType = {
    /**
     * Managed by Azure on-behalf-of the user.
     */
    AzureManaged: "AzureManaged",
    /**
     * Managed by the User themselves on the Operator end.
     */
    UserManaged: "UserManaged",
} as const;

/**
 * Type of the account the user has with the Operator's Network API infrastructure. AzureManaged | UserManaged.
 */
export type AccountType = (typeof AccountType)[keyof typeof AccountType];
