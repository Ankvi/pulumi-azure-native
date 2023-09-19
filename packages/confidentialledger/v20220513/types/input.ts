import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * AAD based security principal with associated Ledger RoleName
     */
    export interface AADBasedSecurityPrincipalArgs {
        /**
         * LedgerRole associated with the Security Principal of Ledger
         */
        ledgerRoleName?: pulumi.Input<string | enums.LedgerRoleName>;
        /**
         * UUID/GUID based Principal Id of the Security Principal
         */
        principalId?: pulumi.Input<string>;
        /**
         * UUID/GUID based Tenant Id of the Security Principal
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Cert based security principal with Ledger RoleName
     */
    export interface CertBasedSecurityPrincipalArgs {
        /**
         * Public key of the user cert (.pem or .cer)
         */
        cert?: pulumi.Input<string>;
        /**
         * LedgerRole associated with the Security Principal of Ledger
         */
        ledgerRoleName?: pulumi.Input<string | enums.LedgerRoleName>;
    }

    /**
     * Additional Confidential Ledger properties.
     */
    export interface LedgerPropertiesArgs {
        /**
         * Array of all AAD based Security Principals.
         */
        aadBasedSecurityPrincipals?: pulumi.Input<pulumi.Input<AADBasedSecurityPrincipalArgs>[]>;
        /**
         * Array of all cert based Security Principals.
         */
        certBasedSecurityPrincipals?: pulumi.Input<pulumi.Input<CertBasedSecurityPrincipalArgs>[]>;
        /**
         * Type of Confidential Ledger
         */
        ledgerType?: pulumi.Input<string | enums.LedgerType>;
    }
