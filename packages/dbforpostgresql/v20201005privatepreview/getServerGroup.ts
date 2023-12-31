import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a server group.
 */
export function getServerGroup(args: GetServerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetServerGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql/v20201005privatepreview:getServerGroup", {
        "resourceGroupName": args.resourceGroupName,
        "serverGroupName": args.serverGroupName,
    }, opts);
}

export interface GetServerGroupArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server group.
     */
    serverGroupName: string;
}

/**
 * Represents a server group for create.
 */
export interface GetServerGroupResult {
    /**
     * The administrator's login name of servers in server group. Can only be specified when the server is being created (and is required for creation).
     */
    readonly administratorLogin?: string;
    /**
     * Availability Zone information of the server group.
     */
    readonly availabilityZone?: string;
    /**
     * The backup retention days for server group.
     */
    readonly backupRetentionDays?: number;
    /**
     * The Citus version of server group.
     */
    readonly citusVersion?: string;
    /**
     * The delegated subnet arguments for a server group.
     */
    readonly delegatedSubnetArguments?: types.outputs.ServerGroupPropertiesResponseDelegatedSubnetArguments;
    /**
     * The earliest restore point time (ISO8601 format) for server group.
     */
    readonly earliestRestoreTime: string;
    /**
     * If Citus MX is enabled or not for the server group.
     */
    readonly enableMx?: boolean;
    /**
     * If shards on coordinator is enabled or not for the server group.
     */
    readonly enableShardsOnCoordinator?: boolean;
    /**
     * If ZFS compression is enabled or not for the server group.
     */
    readonly enableZfs?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maintenance window of a server group.
     */
    readonly maintenanceWindow?: types.outputs.MaintenanceWindowResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The PostgreSQL version of server group.
     */
    readonly postgresqlVersion?: string;
    /**
     * The private dns zone arguments for a server group.
     */
    readonly privateDnsZoneArguments?: types.outputs.ServerGroupPropertiesResponsePrivateDnsZoneArguments;
    /**
     * The array of read replica server groups.
     */
    readonly readReplicas: string[];
    /**
     * The resource provider type of server group.
     */
    readonly resourceProviderType: string;
    /**
     * The list of server role groups.
     */
    readonly serverRoleGroups?: types.outputs.ServerRoleGroupResponse[];
    /**
     * The source server group id for read replica server groups.
     */
    readonly sourceServerGroup: string;
    /**
     * Standby Availability Zone information of the server group.
     */
    readonly standbyAvailabilityZone?: string;
    /**
     * A state of a server group that is visible to user.
     */
    readonly state: string;
    /**
     * The system metadata relating to this resource
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
}
/**
 * Gets information about a server group.
 */
export function getServerGroupOutput(args: GetServerGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerGroupResult> {
    return pulumi.output(args).apply((a: any) => getServerGroup(a, opts))
}

export interface GetServerGroupOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server group.
     */
    serverGroupName: pulumi.Input<string>;
}
