import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Key Vault container for a certificate that is purchased through Azure.
 */
export interface AppServiceCertificateResponse {
    /**
     * Key Vault resource Id.
     */
    keyVaultId?: string;
    /**
     * Key Vault secret name.
     */
    keyVaultSecretName?: string;
    /**
     * Status of the Key Vault secret.
     */
    provisioningState: string;
}

/**
 * SSL certificate details.
 */
export interface CertificateDetailsResponse {
    /**
     * Certificate Issuer.
     */
    issuer: string;
    /**
     * Date Certificate is valid to.
     */
    notAfter: string;
    /**
     * Date Certificate is valid from.
     */
    notBefore: string;
    /**
     * Raw certificate data.
     */
    rawData: string;
    /**
     * Certificate Serial Number.
     */
    serialNumber: string;
    /**
     * Certificate Signature algorithm.
     */
    signatureAlgorithm: string;
    /**
     * Certificate Subject.
     */
    subject: string;
    /**
     * Certificate Thumbprint.
     */
    thumbprint: string;
    /**
     * Certificate Version.
     */
    version: number;
}

export interface CertificateOrderContactResponse {
    email?: string;
    nameFirst?: string;
    nameLast?: string;
    phone?: string;
}

