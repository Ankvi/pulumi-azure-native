import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represent the secrets intended for encryption with asymmetric key pair.
     */
    export interface AsymmetricEncryptedSecretArgs {
        /**
         * The algorithm used to encrypt "Value".
         */
        encryptionAlgorithm: pulumi.Input<string | enums.EncryptionAlgorithm>;
        /**
         * Thumbprint certificate used to encrypt \"Value\". If the value is unencrypted, it will be null.
         */
        encryptionCertThumbprint?: pulumi.Input<string>;
        /**
         * The value of the secret.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Msi identity details of the resource
     */
    export interface ResourceIdentityArgs {
        /**
         * Identity type
         */
        type?: pulumi.Input<string | enums.MsiIdentityType>;
    }

    /**
     * The SKU type.
     */
    export interface SkuArgs {
        /**
         * SKU name.
         */
        name?: pulumi.Input<string | enums.SkuName>;
        /**
         * The SKU tier. This is based on the SKU name.
         */
        tier?: pulumi.Input<string | enums.SkuTier>;
    }
