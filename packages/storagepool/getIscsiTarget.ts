import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an iSCSI Target.
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getIscsiTarget(args: GetIscsiTargetArgs, opts?: pulumi.InvokeOptions): Promise<GetIscsiTargetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagepool:getIscsiTarget", {
        "diskPoolName": args.diskPoolName,
        "iscsiTargetName": args.iscsiTargetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIscsiTargetArgs {
    /**
     * The name of the Disk Pool.
     */
    diskPoolName: string;
    /**
     * The name of the iSCSI Target.
     */
    iscsiTargetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for iSCSI Target requests.
 */
export interface GetIscsiTargetResult {
    /**
     * Mode for Target connectivity.
     */
    readonly aclMode: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * List of private IPv4 addresses to connect to the iSCSI Target.
     */
    readonly endpoints?: string[];
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * List of LUNs to be exposed through iSCSI Target.
     */
    readonly luns?: types.outputs.IscsiLunResponse[];
    /**
     * Azure resource id. Indicates if this resource is managed by another Azure resource.
     */
    readonly managedBy: string;
    /**
     * List of Azure resource ids that manage this resource.
     */
    readonly managedByExtended: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The port used by iSCSI Target portal group.
     */
    readonly port?: number;
    /**
     * State of the operation on the resource.
     */
    readonly provisioningState: string;
    /**
     * List of identifiers for active sessions on the iSCSI target
     */
    readonly sessions: string[];
    /**
     * Access Control List (ACL) for an iSCSI Target; defines LUN masking policy
     */
    readonly staticAcls?: types.outputs.AclResponse[];
    /**
     * Operational status of the iSCSI Target.
     */
    readonly status: string;
    /**
     * Resource metadata required by ARM RPC
     */
    readonly systemData: types.outputs.SystemMetadataResponse;
    /**
     * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
     */
    readonly targetIqn: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Get an iSCSI Target.
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getIscsiTargetOutput(args: GetIscsiTargetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIscsiTargetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storagepool:getIscsiTarget", {
        "diskPoolName": args.diskPoolName,
        "iscsiTargetName": args.iscsiTargetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIscsiTargetOutputArgs {
    /**
     * The name of the Disk Pool.
     */
    diskPoolName: pulumi.Input<string>;
    /**
     * The name of the iSCSI Target.
     */
    iscsiTargetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}