import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AuthorizationInfoResponse {
    /**
     * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
     * 
     * Only used during PUT operations. The secret is cleared during GET.
     * In general, RPaaS does not return any property marked as a secret.
     */
    code?: string;
}

export interface AzureDevOpsConnectorPropertiesResponse {
    authorization?: AuthorizationInfoResponse;
    /**
     * Gets or sets org onboarding information.
     */
    orgs?: AzureDevOpsOrgMetadataResponse[];
    provisioningState: string;
}

/**
 * Org onboarding info.
 */
export interface AzureDevOpsOrgMetadataResponse {
    autoDiscovery?: string;
    /**
     * Gets or sets name of the AzureDevOps Org.
     */
    name?: string;
    projects?: AzureDevOpsProjectMetadataResponse[];
}

/**
 * Project onboarding info.
 */
export interface AzureDevOpsProjectMetadataResponse {
    autoDiscovery?: string;
    /**
     * Gets or sets name of the AzureDevOps Project.
     */
    name?: string;
    /**
     * Gets or sets repositories.
     */
    repos?: string[];
}

/**
 * Properties of the ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors.
 */
export interface GitHubConnectorPropertiesResponse {
    /**
     * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
     * 
     * Only used during PUT operations. The secret is cleared during GET.
     * In general, RPaaS does not return any property marked as a secret.
     */
    code?: string;
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
