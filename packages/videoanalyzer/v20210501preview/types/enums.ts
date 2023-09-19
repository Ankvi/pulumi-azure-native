export const AccountEncryptionKeyType = {
    /**
     * The Account Key is encrypted with a System Key.
     */
    SystemKey: "SystemKey",
    /**
     * The Account Key is encrypted with a Customer Key.
     */
    CustomerKey: "CustomerKey",
} as const;

export type AccountEncryptionKeyType = (typeof AccountEncryptionKeyType)[keyof typeof AccountEncryptionKeyType];
