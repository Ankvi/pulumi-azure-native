import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Configuration payload for PR Annotations.
     */
    export interface ActionableRemediationResponse {
        /**
         * Repository branch configuration for PR Annotations.
         */
        branchConfiguration?: TargetBranchConfigurationResponse;
        /**
         * Gets or sets list of categories and severity levels.
         */
        categoryConfigurations?: CategoryConfigurationResponse[];
        /**
         * Update Settings.
         * 
         * Enabled - Resource should inherit configurations from parent.
         * Disabled - Resource should not inherit configurations from parent.
         */
        inheritFromParentState?: string;
        /**
         * ActionableRemediation Setting.
         * None - the setting was never set.
         * Enabled - ActionableRemediation is enabled.
         * Disabled - ActionableRemediation is disabled.
         */
        state?: string;
    }

    /**
     * Authorization payload.
     */
    export interface AuthorizationResponse {
        /**
         * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
         * 
         * Only used during PUT/PATCH operations. The secret is cleared during GET.
         */
        code?: string;
    }

    /**
     * Azure DevOps Organization properties.
     */
    export interface AzureDevOpsOrgPropertiesResponse {
        /**
         * Configuration payload for PR Annotations.
         */
        actionableRemediation?: ActionableRemediationResponse;
        /**
         * Details about resource onboarding status across all connectors.
         * 
         * OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
         * Onboarded - this resource has already been onboarded by the specified connector.
         * NotOnboarded - this resource has not been onboarded to any connector.
         * NotApplicable - the onboarding state is not applicable to the current endpoint.
         */
        onboardingState?: string;
        /**
         * The provisioning state of the resource.
         * 
         * Pending - Provisioning pending.
         * Failed - Provisioning failed.
         * Succeeded - Successful provisioning.
         * Canceled - Provisioning canceled.
         * PendingDeletion - Deletion pending.
         * DeletionSuccess - Deletion successful.
         * DeletionFailure - Deletion failure.
         */
        provisioningState?: string;
        /**
         * Gets or sets resource status message.
         */
        provisioningStatusMessage: string;
        /**
         * Gets or sets time when resource was last checked.
         */
        provisioningStatusUpdateTimeUtc: string;
    }

    /**
     * Azure DevOps Organization resource.
     */
    export interface AzureDevOpsOrgResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Azure DevOps Organization properties.
         */
        properties?: AzureDevOpsOrgPropertiesResponse;
        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * Severity level per category configuration for PR Annotations.
     */
    export interface CategoryConfigurationResponse {
        /**
         * Rule categories.
         * Code - code scanning results.
         * Artifact scanning results.
         * Dependencies scanning results.
         * IaC results.
         * Secrets scanning results.
         * Container scanning results.
         */
        category?: string;
        /**
         * Gets or sets minimum severity level for a given category.
         */
        minimumSeverityLevel?: string;
    }

    /**
     * DevOps Configuration properties.
     */
    export interface DevOpsConfigurationPropertiesResponse {
        /**
         * Authorization payload.
         */
        authorization?: AuthorizationResponse;
        /**
         * AutoDiscovery states.
         */
        autoDiscovery?: string;
        /**
         * The provisioning state of the resource.
         * 
         * Pending - Provisioning pending.
         * Failed - Provisioning failed.
         * Succeeded - Successful provisioning.
         * Canceled - Provisioning canceled.
         * PendingDeletion - Deletion pending.
         * DeletionSuccess - Deletion successful.
         * DeletionFailure - Deletion failure.
         */
        provisioningState?: string;
        /**
         * Gets or sets resource status message.
         */
        provisioningStatusMessage: string;
        /**
         * Gets or sets time when resource was last checked.
         */
        provisioningStatusUpdateTimeUtc: string;
        /**
         * List of top-level inventory to select when AutoDiscovery is disabled.
         * This field is ignored when AutoDiscovery is enabled.
         */
        topLevelInventoryList?: string[];
    }

    /**
     * GitHub Owner properties.
     */
    export interface GitHubOwnerPropertiesResponse {
        /**
         * Gets or sets internal GitHub id.
         */
        gitHubInternalId: string;
        /**
         * Details about resource onboarding status across all connectors.
         * 
         * OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
         * Onboarded - this resource has already been onboarded by the specified connector.
         * NotOnboarded - this resource has not been onboarded to any connector.
         * NotApplicable - the onboarding state is not applicable to the current endpoint.
         */
        onboardingState?: string;
        /**
         * Gets or sets GitHub Owner url.
         */
        ownerUrl: string;
        /**
         * The provisioning state of the resource.
         * 
         * Pending - Provisioning pending.
         * Failed - Provisioning failed.
         * Succeeded - Successful provisioning.
         * Canceled - Provisioning canceled.
         * PendingDeletion - Deletion pending.
         * DeletionSuccess - Deletion successful.
         * DeletionFailure - Deletion failure.
         */
        provisioningState?: string;
        /**
         * Gets or sets resource status message.
         */
        provisioningStatusMessage: string;
        /**
         * Gets or sets time when resource was last checked.
         */
        provisioningStatusUpdateTimeUtc: string;
    }

    /**
     * GitHub Owner resource.
     */
    export interface GitHubOwnerResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * GitHub Owner properties.
         */
        properties?: GitHubOwnerPropertiesResponse;
        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * GitLab Group properties.
     */
    export interface GitLabGroupPropertiesResponse {
        /**
         * Gets or sets the human readable fully-qualified name of the Group object.
         * 
         * This contains the entire namespace hierarchy as seen on GitLab UI where namespaces are separated by the '/' character.
         */
        fullyQualifiedFriendlyName: string;
        /**
         * Gets or sets the fully-qualified name of the Group object.
         * 
         * This contains the entire namespace hierarchy where namespaces are separated by the '$' character.
         */
        fullyQualifiedName: string;
        /**
         * Details about resource onboarding status across all connectors.
         * 
         * OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
         * Onboarded - this resource has already been onboarded by the specified connector.
         * NotOnboarded - this resource has not been onboarded to any connector.
         * NotApplicable - the onboarding state is not applicable to the current endpoint.
         */
        onboardingState?: string;
        /**
         * The provisioning state of the resource.
         * 
         * Pending - Provisioning pending.
         * Failed - Provisioning failed.
         * Succeeded - Successful provisioning.
         * Canceled - Provisioning canceled.
         * PendingDeletion - Deletion pending.
         * DeletionSuccess - Deletion successful.
         * DeletionFailure - Deletion failure.
         */
        provisioningState?: string;
        /**
         * Gets or sets resource status message.
         */
        provisioningStatusMessage: string;
        /**
         * Gets or sets time when resource was last checked.
         */
        provisioningStatusUpdateTimeUtc: string;
        /**
         * Gets or sets the url of the GitLab Group.
         */
        url: string;
    }

    /**
     * GitLab Group resource.
     */
    export interface GitLabGroupResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * GitLab Group properties.
         */
        properties?: GitLabGroupPropertiesResponse;
        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
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
     * Repository branch configuration for PR Annotations.
     */
    export interface TargetBranchConfigurationResponse {
        /**
         * Configuration of PR Annotations on default branch.
         * 
         * Enabled - PR Annotations are enabled on the resource's default branch.
         * Disabled - PR Annotations are disabled on the resource's default branch.
         */
        annotateDefaultBranch?: string;
        /**
         * Gets or sets branches that should have annotations.
         */
        branchNames?: string[];
    }
