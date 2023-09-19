import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a failover group.
 * Azure REST API version: 2021-11-01.
 */
export function getFailoverGroup(args: GetFailoverGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetFailoverGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getFailoverGroup", {
        "failoverGroupName": args.failoverGroupName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetFailoverGroupArgs {
    /**
     * The name of the failover group.
     */
    failoverGroupName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server containing the failover group.
     */
    serverName: string;
}

/**
 * A failover group.
 */
export interface GetFailoverGroupResult {
    /**
     * List of databases in the failover group.
     */
    readonly databases?: string[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * List of partner server information for the failover group.
     */
    readonly partnerServers: types.outputs.PartnerInfoResponse[];
    /**
     * Read-only endpoint of the failover group instance.
     */
    readonly readOnlyEndpoint?: types.outputs.FailoverGroupReadOnlyEndpointResponse;
    /**
     * Read-write endpoint of the failover group instance.
     */
    readonly readWriteEndpoint: types.outputs.FailoverGroupReadWriteEndpointResponse;
    /**
     * Local replication role of the failover group instance.
     */
    readonly replicationRole: string;
    /**
     * Replication state of the failover group instance.
     */
    readonly replicationState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a failover group.
 * Azure REST API version: 2021-11-01.
 */
export function getFailoverGroupOutput(args: GetFailoverGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFailoverGroupResult> {
    return pulumi.output(args).apply((a: any) => getFailoverGroup(a, opts))
}

export interface GetFailoverGroupOutputArgs {
    /**
     * The name of the failover group.
     */
    failoverGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server containing the failover group.
     */
    serverName: pulumi.Input<string>;
}
