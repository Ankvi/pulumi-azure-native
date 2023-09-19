import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a server.
 * Azure REST API version: 2022-12-01.
 */
export function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getServer", {
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
     * AuthConfig properties of a server.
     */
    readonly authConfig?: types.outputs.AuthConfigResponse;
    /**
     * availability zone information of the server.
     */
    readonly availabilityZone?: string;
    /**
     * Backup properties of a server.
     */
    readonly backup?: types.outputs.BackupResponse;
    /**
     * Data encryption properties of a server.
     */
    readonly dataEncryption?: types.outputs.DataEncryptionResponse;
    /**
     * The fully qualified domain name of a server.
     */
    readonly fullyQualifiedDomainName: string;
    /**
     * High availability properties of a server.
     */
    readonly highAvailability?: types.outputs.HighAvailabilityResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Describes the identity of the application.
     */
    readonly identity?: types.outputs.UserAssignedIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maintenance window properties of a server.
     */
    readonly maintenanceWindow?: types.outputs.MaintenanceWindowResponse;
    /**
     * The minor version of the server.
     */
    readonly minorVersion: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network properties of a server. This Network property is required to be passed only in case you want the server to be Private access server.
     */
    readonly network?: types.outputs.NetworkResponse;
    /**
     * Replicas allowed for a server.
     */
    readonly replicaCapacity: number;
    /**
     * Replication role of the server
     */
    readonly replicationRole?: string;
    /**
     * The SKU (pricing tier) of the server.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The source server resource ID to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'Replica'. This property is returned only for Replica server
     */
    readonly sourceServerResourceId?: string;
    /**
     * A state of a server that is visible to user.
     */
    readonly state: string;
    /**
     * Storage properties of a server.
     */
    readonly storage?: types.outputs.StorageResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
     * PostgreSQL Server version.
     */
    readonly version?: string;
}
/**
 * Gets information about a server.
 * Azure REST API version: 2022-12-01.
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
