export const CertificateProductType = {
    StandardDomainValidatedSsl: "StandardDomainValidatedSsl",
    StandardDomainValidatedWildCardSsl: "StandardDomainValidatedWildCardSsl",
} as const;

/**
 * Certificate product type.
 */
export type CertificateProductType = (typeof CertificateProductType)[keyof typeof CertificateProductType];
