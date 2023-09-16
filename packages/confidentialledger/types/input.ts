import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace confidentialledger {
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
     * Tags for Managed CCF Certificates
     */
    export interface CertificateTagsArgs {
        /**
         * Additional tags for Managed CCF Certificates
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Object representing DeploymentType for Managed CCF.
     */
    export interface DeploymentTypeArgs {
        /**
         * Source Uri containing ManagedCCF code
         */
        appSourceUri?: pulumi.Input<string>;
        /**
         * Unique name for the Managed CCF.
         */
        languageRuntime?: pulumi.Input<string | enums.LanguageRuntime>;
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

    /**
     * Additional Managed CCF properties.
     */
    export interface ManagedCCFPropertiesArgs {
        /**
         * Deployment Type of Managed CCF
         */
        deploymentType?: pulumi.Input<DeploymentTypeArgs>;
        /**
         * List of member identity certificates for  Managed CCF
         */
        memberIdentityCertificates?: pulumi.Input<pulumi.Input<MemberIdentityCertificateArgs>[]>;
        /**
         * Number of CCF nodes in the Managed CCF.
         */
        nodeCount?: pulumi.Input<number>;
    }

    /**
     * Object representing MemberIdentityCertificate for Managed CCF.
     */
    export interface MemberIdentityCertificateArgs {
        /**
         * Member Identity Certificate
         */
        certificate?: pulumi.Input<string>;
        /**
         * Member Identity Certificate Encryption Key
         */
        encryptionkey?: pulumi.Input<string>;
        tags?: pulumi.Input<pulumi.Input<CertificateTagsArgs>[]>;
    }

    export namespace v20220513 {
        /**
         * AAD based security principal with associated Ledger RoleName
         */
        export interface AADBasedSecurityPrincipalArgs {
            /**
             * LedgerRole associated with the Security Principal of Ledger
             */
            ledgerRoleName?: pulumi.Input<string | enums.v20220513.LedgerRoleName>;
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
            ledgerRoleName?: pulumi.Input<string | enums.v20220513.LedgerRoleName>;
        }

        /**
         * Additional Confidential Ledger properties.
         */
        export interface LedgerPropertiesArgs {
            /**
             * Array of all AAD based Security Principals.
             */
            aadBasedSecurityPrincipals?: pulumi.Input<pulumi.Input<v20220513.AADBasedSecurityPrincipalArgs>[]>;
            /**
             * Array of all cert based Security Principals.
             */
            certBasedSecurityPrincipals?: pulumi.Input<pulumi.Input<v20220513.CertBasedSecurityPrincipalArgs>[]>;
            /**
             * Type of Confidential Ledger
             */
            ledgerType?: pulumi.Input<string | enums.v20220513.LedgerType>;
        }

    }

    export namespace v20230126preview {
        /**
         * AAD based security principal with associated Ledger RoleName
         */
        export interface AADBasedSecurityPrincipalArgs {
            /**
             * LedgerRole associated with the Security Principal of Ledger
             */
            ledgerRoleName?: pulumi.Input<string | enums.v20230126preview.LedgerRoleName>;
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
            ledgerRoleName?: pulumi.Input<string | enums.v20230126preview.LedgerRoleName>;
        }

        /**
         * Tags for Managed CCF Certificates
         */
        export interface CertificateTagsArgs {
            /**
             * Additional tags for Managed CCF Certificates
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Object representing DeploymentType for Managed CCF.
         */
        export interface DeploymentTypeArgs {
            /**
             * Source Uri containing ManagedCCF code
             */
            appSourceUri?: pulumi.Input<string>;
            /**
             * Unique name for the Managed CCF.
             */
            languageRuntime?: pulumi.Input<string | enums.v20230126preview.LanguageRuntime>;
        }

        /**
         * Additional Confidential Ledger properties.
         */
        export interface LedgerPropertiesArgs {
            /**
             * Array of all AAD based Security Principals.
             */
            aadBasedSecurityPrincipals?: pulumi.Input<pulumi.Input<v20230126preview.AADBasedSecurityPrincipalArgs>[]>;
            /**
             * Array of all cert based Security Principals.
             */
            certBasedSecurityPrincipals?: pulumi.Input<pulumi.Input<v20230126preview.CertBasedSecurityPrincipalArgs>[]>;
            /**
             * Type of Confidential Ledger
             */
            ledgerType?: pulumi.Input<string | enums.v20230126preview.LedgerType>;
            /**
             * Object representing RunningState for Ledger.
             */
            runningState?: pulumi.Input<string | enums.v20230126preview.RunningState>;
        }

        /**
         * Additional Managed CCF properties.
         */
        export interface ManagedCCFPropertiesArgs {
            /**
             * Deployment Type of Managed CCF
             */
            deploymentType?: pulumi.Input<v20230126preview.DeploymentTypeArgs>;
            /**
             * List of member identity certificates for  Managed CCF
             */
            memberIdentityCertificates?: pulumi.Input<pulumi.Input<v20230126preview.MemberIdentityCertificateArgs>[]>;
            /**
             * Number of CCF nodes in the Managed CCF.
             */
            nodeCount?: pulumi.Input<number>;
        }

        /**
         * Object representing MemberIdentityCertificate for Managed CCF.
         */
        export interface MemberIdentityCertificateArgs {
            /**
             * Member Identity Certificate
             */
            certificate?: pulumi.Input<string>;
            /**
             * Member Identity Certificate Encryption Key
             */
            encryptionkey?: pulumi.Input<string>;
            tags?: pulumi.Input<pulumi.Input<v20230126preview.CertificateTagsArgs>[]>;
        }

    }
}
