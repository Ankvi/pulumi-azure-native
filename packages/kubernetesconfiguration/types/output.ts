import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Parameters to reconcile to the AzureBlob source kind type.
 */
export interface AzureBlobDefinitionResponse {
    /**
     * The account key (shared key) to access the storage account
     */
    accountKey?: string;
    /**
     * The Azure Blob container name to sync from the url endpoint for the flux configuration.
     */
    containerName?: string;
    /**
     * Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
     */
    localAuthRef?: string;
    /**
     * Parameters to authenticate using a Managed Identity.
     */
    managedIdentity?: ManagedIdentityDefinitionResponse;
    /**
     * The Shared Access token to access the storage container
     */
    sasToken?: string;
    /**
     * Parameters to authenticate using Service Principal.
     */
    servicePrincipal?: ServicePrincipalDefinitionResponse;
    /**
     * The interval at which to re-reconcile the cluster Azure Blob source with the remote.
     */
    syncIntervalInSeconds?: number;
    /**
     * The maximum time to attempt to reconcile the cluster Azure Blob source with the remote.
     */
    timeoutInSeconds?: number;
    /**
     * The URL to sync for the flux configuration Azure Blob storage account.
     */
    url?: string;
}
/**
 * azureBlobDefinitionResponseProvideDefaults sets the appropriate defaults for AzureBlobDefinitionResponse
 */
export function azureBlobDefinitionResponseProvideDefaults(val: AzureBlobDefinitionResponse): AzureBlobDefinitionResponse {
    return {
        ...val,
        servicePrincipal: (val.servicePrincipal ? servicePrincipalDefinitionResponseProvideDefaults(val.servicePrincipal) : undefined),
        syncIntervalInSeconds: (val.syncIntervalInSeconds) ?? 600,
        timeoutInSeconds: (val.timeoutInSeconds) ?? 600,
    };
}

/**
 * Parameters to reconcile to the Bucket source kind type.
 */
export interface BucketDefinitionResponse {
    /**
     * Plaintext access key used to securely access the S3 bucket
     */
    accessKey?: string;
    /**
     * The bucket name to sync from the url endpoint for the flux configuration.
     */
    bucketName?: string;
    /**
     * Specify whether to use insecure communication when puling data from the S3 bucket.
     */
    insecure?: boolean;
    /**
     * Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
     */
    localAuthRef?: string;
    /**
     * The interval at which to re-reconcile the cluster bucket source with the remote.
     */
    syncIntervalInSeconds?: number;
    /**
     * The maximum time to attempt to reconcile the cluster bucket source with the remote.
     */
    timeoutInSeconds?: number;
    /**
     * The URL to sync for the flux configuration S3 bucket.
     */
    url?: string;
}
/**
 * bucketDefinitionResponseProvideDefaults sets the appropriate defaults for BucketDefinitionResponse
 */
export function bucketDefinitionResponseProvideDefaults(val: BucketDefinitionResponse): BucketDefinitionResponse {
    return {
        ...val,
        insecure: (val.insecure) ?? true,
        syncIntervalInSeconds: (val.syncIntervalInSeconds) ?? 600,
        timeoutInSeconds: (val.timeoutInSeconds) ?? 600,
    };
}

/**
 * Compliance Status details
 */
export interface ComplianceStatusResponse {
    /**
     * The compliance state of the configuration.
     */
    complianceState: string;
    /**
     * Datetime the configuration was last applied.
     */
    lastConfigApplied?: string;
    /**
     * Message from when the configuration was applied.
     */
    message?: string;
    /**
     * Level of the message.
     */
    messageLevel?: string;
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfoResponse {
    /**
     * The additional info.
     */
    info: any;
    /**
     * The additional info type.
     */
    type: string;
}

/**
 * The error detail.
 */
export interface ErrorDetailResponse {
    /**
     * The error additional info.
     */
    additionalInfo: ErrorAdditionalInfoResponse[];
    /**
     * The error code.
     */
    code: string;
    /**
     * The error details.
     */
    details: ErrorDetailResponse[];
    /**
     * The error message.
     */
    message: string;
    /**
     * The error target.
     */
    target: string;
}

/**
 * Identity of the Extension resource in an AKS cluster
 */
export interface ExtensionResponseAksAssignedIdentity {
    /**
     * The principal ID of resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    /**
     * The identity type.
     */
    type?: string;
}

/**
 * Status from the extension.
 */
export interface ExtensionStatusResponse {
    /**
     * Status code provided by the Extension
     */
    code?: string;
    /**
     * Short description of status of the extension.
     */
    displayStatus?: string;
    /**
     * Level of the status.
     */
    level?: string;
    /**
     * Detailed message of the status from the Extension.
     */
    message?: string;
    /**
     * DateLiteral (per ISO8601) noting the time of installation status.
     */
    time?: string;
}
/**
 * extensionStatusResponseProvideDefaults sets the appropriate defaults for ExtensionStatusResponse
 */
export function extensionStatusResponseProvideDefaults(val: ExtensionStatusResponse): ExtensionStatusResponse {
    return {
        ...val,
        level: (val.level) ?? "Information",
    };
}

/**
 * Parameters to reconcile to the GitRepository source kind type.
 */
export interface GitRepositoryDefinitionResponse {
    /**
     * Base64-encoded HTTPS certificate authority contents used to access git private git repositories over HTTPS
     */
    httpsCACert?: string;
    /**
     * Plaintext HTTPS username used to access private git repositories over HTTPS
     */
    httpsUser?: string;
    /**
     * Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
     */
    localAuthRef?: string;
    /**
     * The source reference for the GitRepository object.
     */
    repositoryRef?: RepositoryRefDefinitionResponse;
    /**
     * Base64-encoded known_hosts value containing public SSH keys required to access private git repositories over SSH
     */
    sshKnownHosts?: string;
    /**
     * The interval at which to re-reconcile the cluster git repository source with the remote.
     */
    syncIntervalInSeconds?: number;
    /**
     * The maximum time to attempt to reconcile the cluster git repository source with the remote.
     */
    timeoutInSeconds?: number;
    /**
     * The URL to sync for the flux configuration git repository.
     */
    url?: string;
}
/**
 * gitRepositoryDefinitionResponseProvideDefaults sets the appropriate defaults for GitRepositoryDefinitionResponse
 */
export function gitRepositoryDefinitionResponseProvideDefaults(val: GitRepositoryDefinitionResponse): GitRepositoryDefinitionResponse {
    return {
        ...val,
        syncIntervalInSeconds: (val.syncIntervalInSeconds) ?? 600,
        timeoutInSeconds: (val.timeoutInSeconds) ?? 600,
    };
}

/**
 * Properties for Helm operator.
 */
export interface HelmOperatorPropertiesResponse {
    /**
     * Values override for the operator Helm chart.
     */
    chartValues?: string;
    /**
     * Version of the operator Helm chart.
     */
    chartVersion?: string;
}

/**
 * Properties for HelmRelease objects
 */
export interface HelmReleasePropertiesDefinitionResponse {
    /**
     * Total number of times that the HelmRelease failed to install or upgrade
     */
    failureCount?: number;
    /**
     * The reference to the HelmChart object used as the source to this HelmRelease
     */
    helmChartRef?: ObjectReferenceDefinitionResponse;
    /**
     * Number of times that the HelmRelease failed to install
     */
    installFailureCount?: number;
    /**
     * The revision number of the last released object change
     */
    lastRevisionApplied?: number;
    /**
     * Number of times that the HelmRelease failed to upgrade
     */
    upgradeFailureCount?: number;
}

/**
 * Identity for the resource.
 */
export interface IdentityResponse {
    /**
     * The principal ID of resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    /**
     * The identity type.
     */
    type?: string;
}

/**
 * Properties that define a Azure Arc PrivateLinkScope resource.
 */
export interface KubernetesConfigurationPrivateLinkScopePropertiesResponse {
    /**
     * Managed Cluster ARM ID for the private link scope  (Required)
     */
    clusterResourceId: string;
    /**
     * The collection of associated Private Endpoint Connections.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * The Guid id of the private link scope.
     */
    privateLinkScopeId: string;
    /**
     * Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.
     */
    provisioningState: string;
    /**
     * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
     */
    publicNetworkAccess?: string;
}

/**
 * The Kustomization defining how to reconcile the artifact pulled by the source type on the cluster.
 */
export interface KustomizationDefinitionResponse {
    /**
     * Specifies other Kustomizations that this Kustomization depends on. This Kustomization will not reconcile until all dependencies have completed their reconciliation.
     */
    dependsOn?: string[];
    /**
     * Enable/disable re-creating Kubernetes resources on the cluster when patching fails due to an immutable field change.
     */
    force?: boolean;
    /**
     * Name of the Kustomization, matching the key in the Kustomizations object map.
     */
    name: string;
    /**
     * The path in the source reference to reconcile on the cluster.
     */
    path?: string;
    /**
     * Used for variable substitution for this Kustomization after kustomize build.
     */
    postBuild?: PostBuildDefinitionResponse;
    /**
     * Enable/disable garbage collections of Kubernetes objects created by this Kustomization.
     */
    prune?: boolean;
    /**
     * The interval at which to re-reconcile the Kustomization on the cluster in the event of failure on reconciliation.
     */
    retryIntervalInSeconds?: number;
    /**
     * The interval at which to re-reconcile the Kustomization on the cluster.
     */
    syncIntervalInSeconds?: number;
    /**
     * The maximum time to attempt to reconcile the Kustomization on the cluster.
     */
    timeoutInSeconds?: number;
    /**
     * Enable/disable health check for all Kubernetes objects created by this Kustomization.
     */
    wait?: boolean;
}
/**
 * kustomizationDefinitionResponseProvideDefaults sets the appropriate defaults for KustomizationDefinitionResponse
 */
export function kustomizationDefinitionResponseProvideDefaults(val: KustomizationDefinitionResponse): KustomizationDefinitionResponse {
    return {
        ...val,
        force: (val.force) ?? false,
        path: (val.path) ?? "",
        prune: (val.prune) ?? false,
        syncIntervalInSeconds: (val.syncIntervalInSeconds) ?? 600,
        timeoutInSeconds: (val.timeoutInSeconds) ?? 600,
        wait: (val.wait) ?? true,
    };
}

/**
 * Parameters to authenticate using a Managed Identity.
 */
export interface ManagedIdentityDefinitionResponse {
    /**
     * The client Id for authenticating a Managed Identity.
     */
    clientId?: string;
}

/**
 * Object reference to a Kubernetes object on a cluster
 */
export interface ObjectReferenceDefinitionResponse {
    /**
     * Name of the object
     */
    name?: string;
    /**
     * Namespace of the object
     */
    namespace?: string;
}

/**
 * Status condition of Kubernetes object
 */
export interface ObjectStatusConditionDefinitionResponse {
    /**
     * Last time this status condition has changed
     */
    lastTransitionTime?: string;
    /**
     * A more verbose description of the object status condition
     */
    message?: string;
    /**
     * Reason for the specified status condition type status
     */
    reason?: string;
    /**
     * Status of the Kubernetes object condition type
     */
    status?: string;
    /**
     * Object status condition type for this object
     */
    type?: string;
}

/**
 * Statuses of objects deployed by the user-specified kustomizations from the git repository.
 */
export interface ObjectStatusDefinitionResponse {
    /**
     * Object reference to the Kustomization that applied this object
     */
    appliedBy?: ObjectReferenceDefinitionResponse;
    /**
     * Compliance state of the applied object showing whether the applied object has come into a ready state on the cluster.
     */
    complianceState?: string;
    /**
     * Additional properties that are provided from objects of the HelmRelease kind
     */
    helmReleaseProperties?: HelmReleasePropertiesDefinitionResponse;
    /**
     * Kind of the applied object
     */
    kind?: string;
    /**
     * Name of the applied object
     */
    name?: string;
    /**
     * Namespace of the applied object
     */
    namespace?: string;
    /**
     * List of Kubernetes object status conditions present on the cluster
     */
    statusConditions?: ObjectStatusConditionDefinitionResponse[];
}

/**
 * Plan for the resource.
 */
export interface PlanResponse {
    /**
     * A user defined name of the 3rd Party Artifact that is being procured.
     */
    name: string;
    /**
     * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. 
     */
    product: string;
    /**
     * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
     */
    promotionCode?: string;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: string;
    /**
     * The version of the desired product/artifact.
     */
    version?: string;
}

/**
 * The postBuild definitions defining variable substitutions for this Kustomization after kustomize build.
 */
export interface PostBuildDefinitionResponse {
    /**
     * Key/value pairs holding the variables to be substituted in this Kustomization.
     */
    substitute?: {[key: string]: string};
    /**
     * Array of ConfigMaps/Secrets from which the variables are substituted for this Kustomization.
     */
    substituteFrom?: SubstituteFromDefinitionResponse[];
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The resource of private end point.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * The source reference for the GitRepository object.
 */
export interface RepositoryRefDefinitionResponse {
    /**
     * The git repository branch name to checkout.
     */
    branch?: string;
    /**
     * The commit SHA to checkout. This value must be combined with the branch name to be valid. This takes precedence over semver.
     */
    commit?: string;
    /**
     * The semver range used to match against git repository tags. This takes precedence over tag.
     */
    semver?: string;
    /**
     * The git repository tag name to checkout. This takes precedence over branch.
     */
    tag?: string;
}

/**
 * Specifies that the scope of the extension is Cluster
 */
export interface ScopeClusterResponse {
    /**
     * Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created
     */
    releaseNamespace?: string;
}

/**
 * Specifies that the scope of the extension is Namespace
 */
export interface ScopeNamespaceResponse {
    /**
     * Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created
     */
    targetNamespace?: string;
}

/**
 * Scope of the extension. It can be either Cluster or Namespace; but not both.
 */
export interface ScopeResponse {
    /**
     * Specifies that the scope of the extension is Cluster
     */
    cluster?: ScopeClusterResponse;
    /**
     * Specifies that the scope of the extension is Namespace
     */
    namespace?: ScopeNamespaceResponse;
}

/**
 * Parameters to authenticate using Service Principal.
 */
export interface ServicePrincipalDefinitionResponse {
    /**
     * Base64-encoded certificate used to authenticate a Service Principal 
     */
    clientCertificate?: string;
    /**
     * The password for the certificate used to authenticate a Service Principal 
     */
    clientCertificatePassword?: string;
    /**
     * Specifies whether to include x5c header in client claims when acquiring a token to enable subject name / issuer based authentication for the Client Certificate
     */
    clientCertificateSendChain?: boolean;
    /**
     * The client Id for authenticating a Service Principal.
     */
    clientId?: string;
    /**
     * The client secret for authenticating a Service Principal
     */
    clientSecret?: string;
    /**
     * The tenant Id for authenticating a Service Principal
     */
    tenantId?: string;
}
/**
 * servicePrincipalDefinitionResponseProvideDefaults sets the appropriate defaults for ServicePrincipalDefinitionResponse
 */
export function servicePrincipalDefinitionResponseProvideDefaults(val: ServicePrincipalDefinitionResponse): ServicePrincipalDefinitionResponse {
    return {
        ...val,
        clientCertificateSendChain: (val.clientCertificateSendChain) ?? false,
    };
}

/**
 * Array of ConfigMaps/Secrets from which the variables are substituted for this Kustomization.
 */
export interface SubstituteFromDefinitionResponse {
    /**
     * Define whether it is ConfigMap or Secret that holds the variables to be used in substitution.
     */
    kind?: string;
    /**
     * Name of the ConfigMap/Secret that holds the variables to be used in substitution.
     */
    name?: string;
    /**
     * Set to True to proceed without ConfigMap/Secret, if it is not present.
     */
    optional?: boolean;
}
/**
 * substituteFromDefinitionResponseProvideDefaults sets the appropriate defaults for SubstituteFromDefinitionResponse
 */
export function substituteFromDefinitionResponseProvideDefaults(val: SubstituteFromDefinitionResponse): SubstituteFromDefinitionResponse {
    return {
        ...val,
        optional: (val.optional) ?? false,
    };
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
