import * as pulumi from "@pulumi/pulumi";
    /**
     * The description of an X509 CA Certificate.
     */
    export interface CertificatePropertiesResponse {
        /**
         * base-64 representation of X509 certificate .cer file or just .pem file content.
         */
        certificate: string;
        /**
         * The certificate's creation date and time.
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
