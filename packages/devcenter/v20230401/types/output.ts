import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A role that can be assigned to a user.
     */
    export interface EnvironmentRoleResponse {
        /**
         * This is a description of the Role Assignment.
         */
        description: string;
        /**
         * The common name of the Role Assignment. This is a descriptive name such as 'AcrPush'.
         */
        roleName: string;
    }

    /**
     * Properties for a Git repository catalog.
     */
    export interface GitCatalogResponse {
        /**
         * Git branch.
         */
        branch?: string;
        /**
         * The folder where the catalog items can be found inside the repository.
         */
        path?: string;
        /**
         * A reference to the Key Vault secret containing a security token to authenticate to a Git repository.
         */
        secretIdentifier?: string;
        /**
         * Git URI.
         */
        uri?: string;
    }

    /**
     * Pool health status detail.
     */
    export interface HealthStatusDetailResponse {
        /**
         * An identifier for the issue.
         */
        code: string;
        /**
         * A message describing the issue, intended to be suitable for display in a user interface
         */
        message: string;
    }

    /**
     * Image reference information
     */
    export interface ImageReferenceResponse {
        /**
         * The actual version of the image after use. When id references a gallery image latest version, this will indicate the actual version in use.
         */
        exactVersion: string;
        /**
         * Image ID, or Image version ID. When Image ID is provided, its latest version will be used.
         */
        id?: string;
    }

    /**
     * Image validation error details
     */
    export interface ImageValidationErrorDetailsResponse {
        /**
         * An identifier for the error.
         */
        code?: string;
        /**
         * A message describing the error.
         */
        message?: string;
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * The role definition assigned to the environment creator on backing resources.
     */
    export interface ProjectEnvironmentTypeUpdatePropertiesResponseCreatorRoleAssignment {
        /**
         * A map of roles to assign to the environment creator.
         */
        roles?: {[key: string]: EnvironmentRoleResponse};
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuResponse {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: number;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: string;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: string;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: string;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: string;
    }

    /**
     * Stop on disconnect configuration settings for Dev Boxes created in this pool.
     */
    export interface StopOnDisconnectConfigurationResponse {
        /**
         * The specified time in minutes to wait before stopping a Dev Box once disconnect is detected.
         */
        gracePeriodMinutes?: number;
        /**
         * Whether the feature to stop the Dev Box on disconnect once the grace period has lapsed is enabled.
         */
        status?: string;
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

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }

    /**
     * Mapping of user object ID to role assignments.
     */
    export interface UserRoleAssignmentResponse {
        /**
         * A map of roles to assign to the parent user.
         */
        roles?: {[key: string]: EnvironmentRoleResponse};
    }
