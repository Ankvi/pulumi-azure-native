import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets information about a server.
 */
export function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql/v20220101:getServer", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Represents a server.
 */
export interface GetServerResult {
    /**
     * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
     */
    readonly administratorLogin?: string;
    /**
     * availability Zone information of the server.
     */
    readonly availabilityZone?: string;
    /**
     * Backup related properties of a server.
     */
    readonly backup?: types.outputs.dbformysql.v20220101.BackupResponse;
    /**
     * The Data Encryption for CMK.
     */
    readonly dataEncryption?: types.outputs.dbformysql.v20220101.DataEncryptionResponse;
    /**
     * The fully qualified domain name of a server.
     */
    readonly fullyQualifiedDomainName: string;
    /**
     * High availability related properties of a server.
     */
    readonly highAvailability?: types.outputs.dbformysql.v20220101.HighAvailabilityResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The cmk identity for the server.
     */
    readonly identity?: types.outputs.dbformysql.v20220101.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maintenance window of a server.
     */
    readonly maintenanceWindow?: types.outputs.dbformysql.v20220101.MaintenanceWindowResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network related properties of a server.
     */
    readonly network?: types.outputs.dbformysql.v20220101.NetworkResponse;
    /**
     * The maximum number of replicas that a primary server can have.
     */
    readonly replicaCapacity: number;
    /**
     * The replication role.
     */
    readonly replicationRole?: string;
    /**
     * The SKU (pricing tier) of the server.
     */
    readonly sku?: types.outputs.dbformysql.v20220101.SkuResponse;
    /**
     * The source MySQL server id.
     */
    readonly sourceServerResourceId?: string;
    /**
     * The state of a server.
     */
    readonly state: string;
    /**
     * Storage related properties of a server.
     */
    readonly storage?: types.outputs.dbformysql.v20220101.StorageResponse;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.dbformysql.v20220101.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Server version.
     */
    readonly version?: string;
}
/**
 * Gets information about a server.
 */
export function getServerOutput(args: GetServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerResult> {
    return pulumi.output(args).apply((a: any) => getServer(a, opts))
}

export interface GetServerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}
