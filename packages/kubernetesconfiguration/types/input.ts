import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Parameters to reconcile to the AzureBlob source kind type.
 */
export interface AzureBlobDefinitionArgs {
    /**
     * The account key (shared key) to access the storage account
     */
    accountKey?: pulumi.Input<string>;
    /**
     * The Azure Blob container name to sync from the url endpoint for the flux configuration.
     */
    containerName?: pulumi.Input<string>;
    /**
     * Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
     */
    localAuthRef?: pulumi.Input<string>;
    /**
     * Parameters to authenticate using a Managed Identity.
     */
    managedIdentity?: pulumi.Input<ManagedIdentityDefinitionArgs>;
    /**
     * The Shared Access token to access the storage container
     */
    sasToken?: pulumi.Input<string>;
    /**
     * Parameters to authenticate using Service Principal.
     */
    servicePrincipal?: pulumi.Input<ServicePrincipalDefinitionArgs>;
    /**
     * The interval at which to re-reconcile the cluster Azure Blob source with the remote.
     */
    syncIntervalInSeconds?: pulumi.Input<number>;
    /**
     * The maximum time to attempt to reconcile the cluster Azure Blob source with the remote.
     */
    timeoutInSeconds?: pulumi.Input<number>;
    /**
     * The URL to sync for the flux configuration Azure Blob storage account.
     */
    url?: pulumi.Input<string>;
}
/**
 * azureBlobDefinitionArgsProvideDefaults sets the appropriate defaults for AzureBlobDefinitionArgs
 */
export function azureBlobDefinitionArgsProvideDefaults(val: AzureBlobDefinitionArgs): AzureBlobDefinitionArgs {
    return {
        ...val,
        servicePrincipal: (val.servicePrincipal ? pulumi.output(val.servicePrincipal).apply(servicePrincipalDefinitionArgsProvideDefaults) : undefined),
        syncIntervalInSeconds: (val.syncIntervalInSeconds) ?? 600,
        timeoutInSeconds: (val.timeoutInSeconds) ?? 600,
    };
}

/**
 * Parameters to reconcile to the Bucket source kind type.
 */
export interface BucketDefinitionArgs {
    /**
     * Plaintext access key used to securely access the S3 bucket
     */
    accessKey?: pulumi.Input<string>;
    /**
     * The bucket name to sync from the url endpoint for the flux configuration.
     */
    bucketName?: pulumi.Input<string>;
    /**
     * Specify whether to use insecure communication when puling data from the S3 bucket.
     */
    insecure?: pulumi.Input<boolean>;
    /**
     * Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
     */
    localAuthRef?: pulumi.Input<string>;
    /**
     * The interval at which to re-reconcile the cluster bucket source with the remote.
     */
    syncIntervalInSeconds?: pulumi.Input<number>;
    /**
     * The maximum time to attempt to reconcile the cluster bucket source with the remote.
     */
    timeoutInSeconds?: pulumi.Input<number>;
    /**
     * The URL to sync for the flux configuration S3 bucket.
     */
    url?: pulumi.Input<string>;
}
/**
 * bucketDefinitionArgsProvideDefaults sets the appropriate defaults for BucketDefinitionArgs
 */
export function bucketDefinitionArgsProvideDefaults(val: BucketDefinitionArgs): BucketDefinitionArgs {
    return {
        ...val,
        insecure: (val.insecure) ?? true,
        syncIntervalInSeconds: (val.syncIntervalInSeconds) ?? 600,
        timeoutInSeconds: (val.timeoutInSeconds) ?? 600,
    };
}

/**
 * Identity of the Extension resource in an AKS cluster
 */
export interface ExtensionAksAssignedIdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.AKSIdentityType>;
}

/**
 * Status from the extension.
 */
export interface ExtensionStatusArgs {
    /**
     * Status code provided by the Extension
     */
    code?: pulumi.Input<string>;
    /**
     * Short description of status of the extension.
     */
    displayStatus?: pulumi.Input<string>;
    /**
     * Level of the status.
     */
    level?: pulumi.Input<string | enums.LevelType>;
    /**
     * Detailed message of the status from the Extension.
     */
    message?: pulumi.Input<string>;
    /**
     * DateLiteral (per ISO8601) noting the time of installation status.
     */
    time?: pulumi.Input<string>;
}
/**
 * extensionStatusArgsProvideDefaults sets the appropriate defaults for ExtensionStatusArgs
 */
export function extensionStatusArgsProvideDefaults(val: ExtensionStatusArgs): ExtensionStatusArgs {
    return {
        ...val,
        level: (val.level) ?? "Information",
    };
}

/**
 * Parameters to reconcile to the GitRepository source kind type.
 */
export interface GitRepositoryDefinitionArgs {
    /**
     * Base64-encoded HTTPS certificate authority contents used to access git private git repositories over HTTPS
     */
    httpsCACert?: pulumi.Input<string>;
    /**
     * Plaintext HTTPS username used to access private git repositories over HTTPS
     */
    httpsUser?: pulumi.Input<string>;
    /**
     * Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
     */
    localAuthRef?: pulumi.Input<string>;
    /**
     * The source reference for the GitRepository object.
     */
    repositoryRef?: pulumi.Input<RepositoryRefDefinitionArgs>;
    /**
     * Base64-encoded known_hosts value containing public SSH keys required to access private git repositories over SSH
     */
    sshKnownHosts?: pulumi.Input<string>;
    /**
     * The interval at which to re-reconcile the cluster git repository source with the remote.
     */
    syncIntervalInSeconds?: pulumi.Input<number>;
    /**
     * The maximum time to attempt to reconcile the cluster git repository source with the remote.
     */
    timeoutInSeconds?: pulumi.Input<number>;
    /**
     * The URL to sync for the flux configuration git repository.
     */
    url?: pulumi.Input<string>;
}
/**
 * gitRepositoryDefinitionArgsProvideDefaults sets the appropriate defaults for GitRepositoryDefinitionArgs
 */
export function gitRepositoryDefinitionArgsProvideDefaults(val: GitRepositoryDefinitionArgs): GitRepositoryDefinitionArgs {
    return {
        ...val,
        syncIntervalInSeconds: (val.syncIntervalInSeconds) ?? 600,
        timeoutInSeconds: (val.timeoutInSeconds) ?? 600,
    };
}

/**
 * Properties for Helm operator.
 */
export interface HelmOperatorPropertiesArgs {
    /**
     * Values override for the operator Helm chart.
     */
    chartValues?: pulumi.Input<string>;
    /**
     * Version of the operator Helm chart.
     */
    chartVersion?: pulumi.Input<string>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
}

/**
 * Properties that define a Azure Arc PrivateLinkScope resource.
 */
export interface KubernetesConfigurationPrivateLinkScopePropertiesArgs {
    /**
     * Managed Cluster ARM ID for the private link scope  (Required)
     */
    clusterResourceId: pulumi.Input<string>;
    /**
     * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessType>;
}

/**
 * The Kustomization defining how to reconcile the artifact pulled by the source type on the cluster.
 */
export interface KustomizationDefinitionArgs {
    /**
     * Specifies other Kustomizations that this Kustomization depends on. This Kustomization will not reconcile until all dependencies have completed their reconciliation.
     */
    dependsOn?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enable/disable re-creating Kubernetes resources on the cluster when patching fails due to an immutable field change.
     */
    force?: pulumi.Input<boolean>;
    /**
     * The path in the source reference to reconcile on the cluster.
     */
    path?: pulumi.Input<string>;
    /**
     * Used for variable substitution for this Kustomization after kustomize build.
     */
    postBuild?: pulumi.Input<PostBuildDefinitionArgs>;
    /**
     * Enable/disable garbage collections of Kubernetes objects created by this Kustomization.
     */
    prune?: pulumi.Input<boolean>;
    /**
     * The interval at which to re-reconcile the Kustomization on the cluster in the event of failure on reconciliation.
     */
    retryIntervalInSeconds?: pulumi.Input<number>;
    /**
     * The interval at which to re-reconcile the Kustomization on the cluster.
     */
    syncIntervalInSeconds?: pulumi.Input<number>;
    /**
     * The maximum time to attempt to reconcile the Kustomization on the cluster.
     */
    timeoutInSeconds?: pulumi.Input<number>;
    /**
     * Enable/disable health check for all Kubernetes objects created by this Kustomization.
     */
    wait?: pulumi.Input<boolean>;
}
/**
 * kustomizationDefinitionArgsProvideDefaults sets the appropriate defaults for KustomizationDefinitionArgs
 */
export function kustomizationDefinitionArgsProvideDefaults(val: KustomizationDefinitionArgs): KustomizationDefinitionArgs {
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
export interface ManagedIdentityDefinitionArgs {
    /**
     * The client Id for authenticating a Managed Identity.
     */
    clientId?: pulumi.Input<string>;
}

/**
 * Plan for the resource.
 */
export interface PlanArgs {
    /**
     * A user defined name of the 3rd Party Artifact that is being procured.
     */
    name: pulumi.Input<string>;
    /**
     * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. 
     */
    product: pulumi.Input<string>;
    /**
     * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
     */
    promotionCode?: pulumi.Input<string>;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: pulumi.Input<string>;
    /**
     * The version of the desired product/artifact.
     */
    version?: pulumi.Input<string>;
}

/**
 * The postBuild definitions defining variable substitutions for this Kustomization after kustomize build.
 */
export interface PostBuildDefinitionArgs {
    /**
     * Key/value pairs holding the variables to be substituted in this Kustomization.
     */
    substitute?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Array of ConfigMaps/Secrets from which the variables are substituted for this Kustomization.
     */
    substituteFrom?: pulumi.Input<pulumi.Input<SubstituteFromDefinitionArgs>[]>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * The source reference for the GitRepository object.
 */
export interface RepositoryRefDefinitionArgs {
    /**
     * The git repository branch name to checkout.
     */
    branch?: pulumi.Input<string>;
    /**
     * The commit SHA to checkout. This value must be combined with the branch name to be valid. This takes precedence over semver.
     */
    commit?: pulumi.Input<string>;
    /**
     * The semver range used to match against git repository tags. This takes precedence over tag.
     */
    semver?: pulumi.Input<string>;
    /**
     * The git repository tag name to checkout. This takes precedence over branch.
     */
    tag?: pulumi.Input<string>;
}

/**
 * Scope of the extension. It can be either Cluster or Namespace; but not both.
 */
export interface ScopeArgs {
    /**
     * Specifies that the scope of the extension is Cluster
     */
    cluster?: pulumi.Input<ScopeClusterArgs>;
    /**
     * Specifies that the scope of the extension is Namespace
     */
    namespace?: pulumi.Input<ScopeNamespaceArgs>;
}

/**
 * Specifies that the scope of the extension is Cluster
 */
export interface ScopeClusterArgs {
    /**
     * Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created
     */
    releaseNamespace?: pulumi.Input<string>;
}

/**
 * Specifies that the scope of the extension is Namespace
 */
export interface ScopeNamespaceArgs {
    /**
     * Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created
     */
    targetNamespace?: pulumi.Input<string>;
}

/**
 * Parameters to authenticate using Service Principal.
 */
export interface ServicePrincipalDefinitionArgs {
    /**
     * Base64-encoded certificate used to authenticate a Service Principal 
     */
    clientCertificate?: pulumi.Input<string>;
    /**
     * The password for the certificate used to authenticate a Service Principal 
     */
    clientCertificatePassword?: pulumi.Input<string>;
    /**
     * Specifies whether to include x5c header in client claims when acquiring a token to enable subject name / issuer based authentication for the Client Certificate
     */
    clientCertificateSendChain?: pulumi.Input<boolean>;
    /**
     * The client Id for authenticating a Service Principal.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The client secret for authenticating a Service Principal
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * The tenant Id for authenticating a Service Principal
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * servicePrincipalDefinitionArgsProvideDefaults sets the appropriate defaults for ServicePrincipalDefinitionArgs
 */
export function servicePrincipalDefinitionArgsProvideDefaults(val: ServicePrincipalDefinitionArgs): ServicePrincipalDefinitionArgs {
    return {
        ...val,
        clientCertificateSendChain: (val.clientCertificateSendChain) ?? false,
    };
}

/**
 * Array of ConfigMaps/Secrets from which the variables are substituted for this Kustomization.
 */
export interface SubstituteFromDefinitionArgs {
    /**
     * Define whether it is ConfigMap or Secret that holds the variables to be used in substitution.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the ConfigMap/Secret that holds the variables to be used in substitution.
     */
    name?: pulumi.Input<string>;
    /**
     * Set to True to proceed without ConfigMap/Secret, if it is not present.
     */
    optional?: pulumi.Input<boolean>;
}
/**
 * substituteFromDefinitionArgsProvideDefaults sets the appropriate defaults for SubstituteFromDefinitionArgs
 */
export function substituteFromDefinitionArgsProvideDefaults(val: SubstituteFromDefinitionArgs): SubstituteFromDefinitionArgs {
    return {
        ...val,
        optional: (val.optional) ?? false,
    };
}








