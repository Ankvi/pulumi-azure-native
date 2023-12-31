import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * AAD based security principal with associated Ledger RoleName
     */
    export interface AADBasedSecurityPrincipalResponse {
        /**
         * LedgerRole associated with the Security Principal of Ledger
         */
        ledgerRoleName?: string;
        /**
         * UUID/GUID based Principal Id of the Security Principal
         */
        principalId?: string;
        /**
         * UUID/GUID based Tenant Id of the Security Principal
         */
        tenantId?: string;
    }

    /**
     * Cert based security principal with Ledger RoleName
     */
    export interface CertBasedSecurityPrincipalResponse {
        /**
         * Public key of the user cert (.pem or .cer)
         */
        cert?: string;
        /**
         * LedgerRole associated with the Security Principal of Ledger
         */
        ledgerRoleName?: string;
    }

    /**
     * Additional Confidential Ledger properties.
     */
    export interface LedgerPropertiesResponse {
        /**
         * Array of all AAD based Security Principals.
         */
        aadBasedSecurityPrincipals?: AADBasedSecurityPrincipalResponse[];
        /**
         * Array of all cert based Security Principals.
         */
        certBasedSecurityPrincipals?: CertBasedSecurityPrincipalResponse[];
        /**
         * Endpoint for accessing network identity.
         */
        identityServiceUri: string;
        /**
         * Internal namespace for the Ledger
         */
        ledgerInternalNamespace: string;
        /**
         * Unique name for the Confidential Ledger.
         */
        ledgerName: string;
        /**
         * Type of Confidential Ledger
         */
        ledgerType?: string;
        /**
         * Endpoint for calling Ledger Service.
         */
        ledgerUri: string;
        /**
         * Provisioning state of Ledger Resource
         */
        provisioningState: string;
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
