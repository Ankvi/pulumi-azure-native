export const CertificateProductType = {
    StandardDomainValidatedSsl: "StandardDomainValidatedSsl",
    StandardDomainValidatedWildCardSsl: "StandardDomainValidatedWildCardSsl",
} as const;

export type CertificateProductType = (typeof CertificateProductType)[keyof typeof CertificateProductType];
