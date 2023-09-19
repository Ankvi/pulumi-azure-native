import * as pulumi from "@pulumi/pulumi";
    /**
     * Certificate resource payload.
     */
    export interface CertificatePropertiesResponse {
        /**
         * The activate date of certificate.
         */
        activateDate: string;
        /**
         * The certificate version of key vault.
         */
        certVersion?: string;
        /**
         * The domain list of certificate.
         */
        dnsNames: string[];
        /**
         * The expiration date of certificate.
         */
        expirationDate: string;
        /**
         * The issue date of certificate.
         */
        issuedDate: string;
        /**
         * The issuer of certificate.
         */
        issuer: string;
        /**
         * The certificate name of key vault.
         */
        keyVaultCertName: string;
        /**
         * The subject name of certificate.
         */
        subjectName: string;
        /**
         * The thumbprint of certificate.
         */
        thumbprint: string;
        /**
         * The vault uri of user key vault.
         */
        vaultUri: string;
    }
