import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a server.
 * Azure REST API version: 2022-01-01.
 *
 * Other available API versions: 2017-12-01, 2018-06-01-privatepreview, 2020-07-01-preview, 2020-07-01-privatepreview, 2022-09-30-preview, 2023-06-01-preview, 2023-06-30, 2023-10-01-preview, 2023-12-01-preview.
 */
export function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql:getServer", {
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
    readonly backup?: types.outputs.BackupResponse;
    /**
     * The Data Encryption for CMK.
     */
    readonly dataEncryption?: types.outputs.DataEncryptionResponse;
    /**
     * The fully qualified domain name of a server.
     */
    readonly fullyQualifiedDomainName: string;
    /**
     * High availability related properties of a server.
     */
    readonly highAvailability?: types.outputs.HighAvailabilityResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The cmk identity for the server.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maintenance window of a server.
     */
    readonly maintenanceWindow?: types.outputs.MaintenanceWindowResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network related properties of a server.
     */
    readonly network?: types.outputs.NetworkResponse;
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
    readonly sku?: types.outputs.SkuResponse;
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
    readonly storage?: types.outputs.StorageResponse;
    /**
     * The system metadata relating to this resource.
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
     * Server version.
     */
    readonly version?: string;
}
/**
 * Gets information about a server.
 * Azure REST API version: 2022-01-01.
 *
 * Other available API versions: 2017-12-01, 2018-06-01-privatepreview, 2020-07-01-preview, 2020-07-01-privatepreview, 2022-09-30-preview, 2023-06-01-preview, 2023-06-30, 2023-10-01-preview, 2023-12-01-preview.
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