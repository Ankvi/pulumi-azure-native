import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * If a target is not provided, it will get the minimum and maximum versions available from the current cluster version. If a target is given, it will provide the required path to get from the current cluster version to the target version.
 */
export function listClusterUpgradableVersions(args: ListClusterUpgradableVersionsArgs, opts?: pulumi.InvokeOptions): Promise<ListClusterUpgradableVersionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric/v20210601:listClusterUpgradableVersions", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "targetVersion": args.targetVersion,
    }, opts);
}

export interface ListClusterUpgradableVersionsArgs {
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
export interface ListClusterUpgradableVersionsResult {
    readonly supportedPath?: string[];
}
/**
 * If a target is not provided, it will get the minimum and maximum versions available from the current cluster version. If a target is given, it will provide the required path to get from the current cluster version to the target version.
 */
export function listClusterUpgradableVersionsOutput(args: ListClusterUpgradableVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListClusterUpgradableVersionsResult> {
    return pulumi.output(args).apply((a: any) => listClusterUpgradableVersions(a, opts))
}

export interface ListClusterUpgradableVersionsOutputArgs {
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
