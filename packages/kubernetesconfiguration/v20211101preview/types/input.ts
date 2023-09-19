import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Specify which kustomizations must succeed reconciliation on the cluster prior to reconciling this kustomization
     */
    export interface DependsOnDefinitionArgs {
        /**
         * Name of the kustomization to claim dependency on
         */
        kustomizationName?: pulumi.Input<string>;
    }

    /**
     * Parameters to reconcile to the GitRepository source kind type.
     */
    export interface GitRepositoryDefinitionArgs {
        /**
         * Base64-encoded HTTPS certificate authority contents used to access git private git repositories over HTTPS
         */
        httpsCAFile?: pulumi.Input<string>;
        /**
         * Base64-encoded HTTPS username used to access private git repositories over HTTPS
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
     * The Kustomization defining how to reconcile the artifact pulled by the source type on the cluster.
     */
    export interface KustomizationDefinitionArgs {
        /**
         * Specifies other Kustomizations that this Kustomization depends on. This Kustomization will not reconcile until all dependencies have completed their reconciliation.
         */
        dependsOn?: pulumi.Input<pulumi.Input<DependsOnDefinitionArgs>[]>;
        /**
         * Enable/disable re-creating Kubernetes resources on the cluster when patching fails due to an immutable field change.
         */
        force?: pulumi.Input<boolean>;
        /**
         * The path in the source reference to reconcile on the cluster.
         */
        path?: pulumi.Input<string>;
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
         * Specify whether to validate the Kubernetes objects referenced in the Kustomization before applying them to the cluster.
         */
        validation?: pulumi.Input<string | enums.KustomizationValidationType>;
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
        };
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
