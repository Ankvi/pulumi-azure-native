import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a distributed availability group info.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getDistributedAvailabilityGroup(args: GetDistributedAvailabilityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDistributedAvailabilityGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getDistributedAvailabilityGroup", {
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
     * The distributed availability group id
     */
    readonly distributedAvailabilityGroupId: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The last hardened lsn
     */
    readonly lastHardenedLsn: string;
    /**
     * The link state
     */
    readonly linkState: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The primary availability group name
     */
    readonly primaryAvailabilityGroupName?: string;
    /**
     * The replication mode of a distributed availability group. Parameter will be ignored during link creation.
     */
    readonly replicationMode?: string;
    /**
     * The secondary availability group name
     */
    readonly secondaryAvailabilityGroupName?: string;
    /**
     * The source endpoint
     */
    readonly sourceEndpoint?: string;
    /**
     * The source replica id
     */
    readonly sourceReplicaId: string;
    /**
     * The name of the target database
     */
    readonly targetDatabase?: string;
    /**
     * The target replica id
     */
    readonly targetReplicaId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a distributed availability group info.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getDistributedAvailabilityGroupOutput(args: GetDistributedAvailabilityGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDistributedAvailabilityGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getDistributedAvailabilityGroup", {
        "distributedAvailabilityGroupName": args.distributedAvailabilityGroupName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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