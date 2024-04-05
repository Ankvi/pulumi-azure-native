import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * If a target is not provided, it will get the minimum and maximum versions available from the current cluster version. If a target is given, it will provide the required path to get from the current cluster version to the target version.
 */
export function listListUpgradableVersionPost(args: ListListUpgradableVersionPostArgs, opts?: pulumi.InvokeOptions): Promise<ListListUpgradableVersionPostResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric/v20201201preview:listListUpgradableVersionPost", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "targetVersion": args.targetVersion,
    }, opts);
}

export interface ListListUpgradableVersionPostArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The target code version.
     */
    targetVersion: string;
}

/**
 * The list of intermediate cluster code versions for an upgrade or downgrade. Or minimum and maximum upgradable version if no target was given
 */
export interface ListListUpgradableVersionPostResult {
    readonly supportedPath?: string[];
}
/**
 * If a target is not provided, it will get the minimum and maximum versions available from the current cluster version. If a target is given, it will provide the required path to get from the current cluster version to the target version.
 */
export function listListUpgradableVersionPostOutput(args: ListListUpgradableVersionPostOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListListUpgradableVersionPostResult> {
    return pulumi.output(args).apply((a: any) => listListUpgradableVersionPost(a, opts))
}

export interface ListListUpgradableVersionPostOutputArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The target code version.
     */
    targetVersion: pulumi.Input<string>;
}