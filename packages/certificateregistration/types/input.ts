import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace certificateregistration {
    /**
     * Key Vault container for a certificate that is purchased through Azure.
     */
    export interface AppServiceCertificateArgs {
        /**
         * Key Vault resource Id.
         */
        keyVaultId?: pulumi.Input<string>;
        /**
         * Key Vault secret name.
         */
        keyVaultSecretName?: pulumi.Input<string>;
    }

    export namespace v20201001 {
        /**
         * Key Vault container for a certificate that is purchased through Azure.
         */
        export interface AppServiceCertificateArgs {
            /**
             * Key Vault resource Id.
             */
            keyVaultId?: pulumi.Input<string>;
            /**
             * Key Vault secret name.
             */
            keyVaultSecretName?: pulumi.Input<string>;
        }

    }

    export namespace v20220901 {
        /**
         * Key Vault container for a certificate that is purchased through Azure.
         */
        export interface AppServiceCertificateArgs {
            /**
             * Key Vault resource Id.
             */
            keyVaultId?: pulumi.Input<string>;
            /**
             * Key Vault secret name.
             */
            keyVaultSecretName?: pulumi.Input<string>;
        }

    }
}
