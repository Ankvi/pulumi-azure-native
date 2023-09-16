import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace certificateregistration {
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

    export namespace v20201001 {
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

    }

    export namespace v20220901 {
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

    }
}
