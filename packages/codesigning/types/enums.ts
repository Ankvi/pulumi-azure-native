export const ProfileType = {
    /**
     * Used for signing files which are distributed publicly.
     */
    PublicTrust: "PublicTrust",
    /**
     * Used for signing files which are distributed internally within organization or group boundary.
     */
    PrivateTrust: "PrivateTrust",
    /**
     * Used for signing CI policy files.
     */
    PrivateTrustCIPolicy: "PrivateTrustCIPolicy",
    /**
     * Used for signing files which are run in secure vbs enclave.
     */
    VBSEnclave: "VBSEnclave",
    /**
     * Used for signing files for testing purpose.
     */
    PublicTrustTest: "PublicTrustTest",
} as const;

/**
 * Profile type of the certificate.
 */
export type ProfileType = (typeof ProfileType)[keyof typeof ProfileType];

export const SkuName = {
    /**
     * Basic sku.
     */
    Basic: "Basic",
    /**
     * Premium sku.
     */
    Premium: "Premium",
} as const;

/**
 * Name of the SKU.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];
