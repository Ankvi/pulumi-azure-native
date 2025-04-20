import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
