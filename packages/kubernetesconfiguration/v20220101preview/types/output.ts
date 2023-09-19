import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Parameters to reconcile to the GitRepository source kind type.
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
         * The interval at which to re-reconcile the cluster git repository source with the remote.
         */
        syncIntervalInSeconds?: number;
        /**
         * The maximum time to attempt to reconcile the cluster git repository source with the remote.
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
     * Specify which kustomizations must succeed reconciliation on the cluster prior to reconciling this kustomization
     */
    export interface DependsOnDefinitionResponse {
        /**
         * Name of the kustomization to claim dependency on
         */
        kustomizationName?: string;
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
     * The Kustomization defining how to reconcile the artifact pulled by the source type on the cluster.
     */
    export interface KustomizationDefinitionResponse {
        /**
         * Specifies other Kustomizations that this Kustomization depends on. This Kustomization will not reconcile until all dependencies have completed their reconciliation.
         */
        dependsOn?: DependsOnDefinitionResponse[];
        /**
         * Enable/disable re-creating Kubernetes resources on the cluster when patching fails due to an immutable field change.
         */
        force?: boolean;
        /**
         * The path in the source reference to reconcile on the cluster.
         */
        path?: string;
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
        };
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
