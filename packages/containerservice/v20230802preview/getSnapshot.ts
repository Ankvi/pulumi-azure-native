import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A node pool snapshot resource.
 */
export function getSnapshot(args: GetSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetSnapshotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20230802preview:getSnapshot", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSnapshotArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: string;
}

/**
 * A node pool snapshot resource.
 */
export interface GetSnapshotResult {
    /**
     * CreationData to be used to specify the source agent pool resource ID to create this snapshot.
     */
    readonly creationData?: types.outputs.CreationDataResponse;
    /**
     * Whether to use a FIPS-enabled OS.
     */
    readonly enableFIPS: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The version of Kubernetes.
     */
    readonly kubernetesVersion: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The version of node image.
     */
    readonly nodeImageVersion: string;
    /**
     * Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
     */
    readonly osSku: string;
    /**
     * The operating system type. The default is Linux.
     */
    readonly osType: string;
    /**
     * The type of a snapshot. The default is NodePool.
     */
    readonly snapshotType?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The size of the VM.
     */
    readonly vmSize: string;
}
/**
 * A node pool snapshot resource.
 */
export function getSnapshotOutput(args: GetSnapshotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSnapshotResult> {
    return pulumi.output(args).apply((a: any) => getSnapshot(a, opts))
}

export interface GetSnapshotOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}