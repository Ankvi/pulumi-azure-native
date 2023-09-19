import * as pulumi from "@pulumi/pulumi";
    /**
     * Certificate resource payload.
     */
    export interface CertificatePropertiesArgs {
        /**
         * The certificate version of key vault.
         */
        certVersion?: pulumi.Input<string>;
        /**
         * The certificate name of key vault.
         */
        keyVaultCertName: pulumi.Input<string>;
        /**
         * The vault uri of user key vault.
         */
        vaultUri: pulumi.Input<string>;
    }
