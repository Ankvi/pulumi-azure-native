export const CertificateFormat = {
    /**
     * The certificate is a PFX (PKCS#12) formatted certificate or certificate chain.
     */
    Pfx: "Pfx",
    /**
     * The certificate is a base64-encoded X.509 certificate.
     */
    Cer: "Cer",
} as const;

export type CertificateFormat = (typeof CertificateFormat)[keyof typeof CertificateFormat];
