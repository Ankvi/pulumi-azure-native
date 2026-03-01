import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * SKU of the trusted signing account.
 */
export interface AccountSkuResponse {
    /**
     * Name of the SKU.
     */
    name: string;
}

/**
 * Properties of the certificate.
 */
export interface CertificateResponse {
    /**
     * Certificate created date.
     */
    createdDate?: string;
    /**
     * The timestamp when the revocation is effective.
     */
    effectiveAt?: string;
    /**
     * Enhanced key usage of the certificate.
     */
    enhancedKeyUsage?: string;
    /**
     * Certificate expiry date.
     */
    expiryDate?: string;
    /**
     * Reason for the revocation failure.
     */
    failureReason?: string;
    /**
     * Reason for revocation.
     */
    reason?: string;
    /**
     * Remarks for the revocation.
     */
    remarks?: string;
    /**
     * The timestamp when the revocation is requested.
     */
    requestedAt?: string;
    /**
     * Serial number of the certificate.
     */
    serialNumber?: string;
    /**
     * Status of the certificate.
     */
    status: string;
    /**
     * Subject name of the certificate.
     */
    subjectName?: string;
    /**
     * Thumbprint of the certificate.
     */
    thumbprint?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}
