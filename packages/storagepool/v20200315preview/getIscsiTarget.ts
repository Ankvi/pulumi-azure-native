import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get an iSCSI target.
 */
export function getIscsiTarget(args: GetIscsiTargetArgs, opts?: pulumi.InvokeOptions): Promise<GetIscsiTargetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagepool/v20200315preview:getIscsiTarget", {
        "diskPoolName": args.diskPoolName,
        "iscsiTargetName": args.iscsiTargetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIscsiTargetArgs {
    /**
     * The name of the Disk pool.
     */
    diskPoolName: string;
    /**
     * The name of the iSCSI target.
     */
    iscsiTargetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for iSCSI target requests.
 */
export interface GetIscsiTargetResult {
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of the operation on the resource.
     */
    readonly provisioningState: string;
    /**
     * Operational status of the iSCSI target.
     */
    readonly status: string;
    /**
     * iSCSI target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
     */
    readonly targetIqn: string;
    /**
     * List of iSCSI target portal groups. Can have 1 portal group at most.
     */
    readonly tpgs: types.outputs.storagepool.v20200315preview.TargetPortalGroupResponse[];
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Get an iSCSI target.
 */
export function getIscsiTargetOutput(args: GetIscsiTargetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIscsiTargetResult> {
    return pulumi.output(args).apply((a: any) => getIscsiTarget(a, opts))
}

export interface GetIscsiTargetOutputArgs {
    /**
     * The name of the Disk pool.
     */
    diskPoolName: pulumi.Input<string>;
    /**
     * The name of the iSCSI target.
     */
    iscsiTargetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
