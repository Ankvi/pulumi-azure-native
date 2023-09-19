import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity details
     */
    export interface DppIdentityDetailsResponse {
        /**
         * The object ID of the service principal object for the managed identity that is used to grant role-based access to an Azure resource.
         */
        principalId: string;
        /**
         * A Globally Unique Identifier (GUID) that represents the Azure AD tenant where the resource is now a member.
         */
        tenantId: string;
        /**
         * The identityType which can be either SystemAssigned or None
         */
        type?: string;
    }

    /**
     * This class contains all the details about a critical operation.
     */
    export interface ResourceGuardOperationResponse {
        /**
         * Type of resource request.
         */
        requestResourceType: string;
        /**
         * Name of the critical operation.
         */
        vaultCriticalOperation: string;
    }

    export interface ResourceGuardResponse {
        /**
         * This flag indicates whether auto approval is allowed or not.
         */
        allowAutoApprovals: boolean;
        /**
         * Description about the pre-req steps to perform all the critical operations.
         */
        description: string;
        /**
         * Provisioning state of the BackupVault resource
         */
        provisioningState: string;
        /**
         * {readonly} List of operation details those are protected by the ResourceGuard resource
         */
        resourceGuardOperations: ResourceGuardOperationResponse[];
        /**
         * List of critical operations which are not protected by this resourceGuard
         */
        vaultCriticalOperationExclusionList?: string[];
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
         * The type of identity that last modified the resource.
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
