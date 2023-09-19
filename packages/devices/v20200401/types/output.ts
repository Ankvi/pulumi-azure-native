import * as pulumi from "@pulumi/pulumi";
    /**
     * The description of an X509 CA Certificate.
     */
    export interface CertificatePropertiesResponse {
        /**
         * The certificate content
         */
        certificate?: string;
        /**
         * The certificate's create date and time.
         */
        created: string;
        /**
         * The certificate's expiration date and time.
         */
        expiry: string;
        /**
         * Determines whether certificate has been verified.
         */
        isVerified: boolean;
        /**
         * The certificate's subject name.
         */
        subject: string;
        /**
         * The certificate's thumbprint.
         */
        thumbprint: string;
        /**
         * The certificate's last update date and time.
         */
        updated: string;
    }
