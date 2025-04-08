import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a distributed availability group info.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Databases in the distributed availability group
     */
    readonly databases?: types.outputs.DistributedAvailabilityGroupDatabaseResponse[];
    /**
     * ID of the distributed availability group
     */
    readonly distributedAvailabilityGroupId: string;
    /**
     * Name of the distributed availability group
     */
    readonly distributedAvailabilityGroupName: string;
    /**
     * The link failover mode - can be Manual if intended to be used for two-way failover with a supported SQL Server, or None for one-way failover to Azure.
     */
    readonly failoverMode?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Managed instance side availability group name
     */
    readonly instanceAvailabilityGroupName?: string;
    /**
     * Managed instance side link role
     */
    readonly instanceLinkRole?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * SQL server side availability group name
     */
    readonly partnerAvailabilityGroupName?: string;
    /**
     * SQL server side endpoint - IP or DNS resolvable name
     */
    readonly partnerEndpoint?: string;
    /**
     * SQL server side link role
     */
    readonly partnerLinkRole: string;
    /**
     * Replication mode of the link
     */
    readonly replicationMode?: string;
    /**
     * Database seeding mode – can be Automatic (default), or Manual for supported scenarios.
     */
    readonly seedingMode?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a distributed availability group info.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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