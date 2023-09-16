import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The operation returns properties of a SyncSet.
 */
export function getSyncSet(args: GetSyncSetArgs, opts?: pulumi.InvokeOptions): Promise<GetSyncSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redhatopenshift/v20230701preview:getSyncSet", {
        "childResourceName": args.childResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSyncSetArgs {
    /**
     * The name of the SyncSet resource.
     */
    childResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: string;
}

/**
 * SyncSet represents a SyncSet for an Azure Red Hat OpenShift Cluster.
 */
export interface GetSyncSetResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resources represents the SyncSets configuration.
     */
    readonly resources?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.redhatopenshift.v20230701preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * The operation returns properties of a SyncSet.
 */
export function getSyncSetOutput(args: GetSyncSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSyncSetResult> {
    return pulumi.output(args).apply((a: any) => getSyncSet(a, opts))
}

export interface GetSyncSetOutputArgs {
    /**
     * The name of the SyncSet resource.
     */
    childResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: pulumi.Input<string>;
}
