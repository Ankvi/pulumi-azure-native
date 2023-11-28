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
     * Tags for Managed CCF Certificates
     */
    export interface CertificateTagsResponse {
        /**
         * Additional tags for Managed CCF Certificates
         */
        tags?: {[key: string]: string};
    }

    /**
     * Object representing DeploymentType for Managed CCF.
     */
    export interface DeploymentTypeResponse {
        /**
         * Source Uri containing ManagedCCF code
         */
        appSourceUri?: string;
        /**
         * Unique name for the Managed CCF.
         */
        languageRuntime?: string;
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
         * SKU associated with the ledger
         */
        ledgerSku?: string;
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
        /**
         * Object representing RunningState for Ledger.
         */
        runningState?: string;
    }

    /**
     * Additional Managed CCF properties.
     */
    export interface ManagedCCFPropertiesResponse {
        /**
         * Unique name for the Managed CCF.
         */
        appName: string;
        /**
         * Endpoint for calling Managed CCF Service.
         */
        appUri: string;
        /**
         * Deployment Type of Managed CCF
         */
        deploymentType?: DeploymentTypeResponse;
        /**
         * Endpoint for accessing network identity.
         */
        identityServiceUri: string;
        /**
         * List of member identity certificates for  Managed CCF
         */
        memberIdentityCertificates?: MemberIdentityCertificateResponse[];
        /**
         * Number of CCF nodes in the Managed CCF.
         */
        nodeCount?: number;
        /**
         * Provisioning state of Managed CCF Resource
         */
        provisioningState: string;
        /**
         * Object representing RunningState for Managed CCF.
         */
        runningState?: string;
    }

    /**
     * Object representing MemberIdentityCertificate for Managed CCF.
     */
    export interface MemberIdentityCertificateResponse {
        /**
         * Member Identity Certificate
         */
        certificate?: string;
        /**
         * Member Identity Certificate Encryption Key
         */
        encryptionkey?: string;
        tags?: CertificateTagsResponse[];
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
