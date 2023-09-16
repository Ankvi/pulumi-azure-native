import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a distributed availability group info.
 */
export function getDistributedAvailabilityGroup(args: GetDistributedAvailabilityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDistributedAvailabilityGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230201preview:getDistributedAvailabilityGroup", {
        "distributedAvailabilityGroupName": args.distributedAvailabilityGroupName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDistributedAvailabilityGroupArgs {
    /**
     * The distributed availability group name.
     */
    distributedAvailabilityGroupName: string;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * Distributed availability group between box and Sql Managed Instance.
 */
export interface GetDistributedAvailabilityGroupResult {
    /**
     * Databases in the distributed availability group
     */
    readonly databases: types.outputs.sql.v20230201preview.DistributedAvailabilityGroupDatabaseResponse[];
    /**
     * ID of the distributed availability group
     */
    readonly distributedAvailabilityGroupId: string;
    /**
     * Name of the distributed availability group
     */
    readonly distributedAvailabilityGroupName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Managed instance side availability group name
     */
    readonly instanceAvailabilityGroupName: string;
    /**
     * Managed instance side link role
     */
    readonly instanceLinkRole: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * SQL server side availability group name
     */
    readonly partnerAvailabilityGroupName: string;
    /**
     * SQL server side endpoint - IP or DNS resolvable name
     */
    readonly partnerEndpoint: string;
    /**
     * SQL server side link role
     */
    readonly partnerLinkRole: string;
    /**
     * Replication mode of the link
     */
    readonly replicationMode?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a distributed availability group info.
 */
export function getDistributedAvailabilityGroupOutput(args: GetDistributedAvailabilityGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDistributedAvailabilityGroupResult> {
    return pulumi.output(args).apply((a: any) => getDistributedAvailabilityGroup(a, opts))
}

export interface GetDistributedAvailabilityGroupOutputArgs {
    /**
     * The distributed availability group name.
     */
    distributedAvailabilityGroupName: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}
