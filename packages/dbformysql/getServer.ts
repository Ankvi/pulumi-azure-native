import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a server.
 *
 * Uses Azure REST API version 2024-02-01-preview.
 *
 * Other available API versions: 2022-01-01, 2022-09-30-preview, 2023-06-01-preview, 2023-06-30, 2023-10-01-preview, 2023-12-01-preview, 2023-12-30, 2024-06-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dbformysql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The cmk identity for the server.
     */
    readonly identity?: types.outputs.MySQLServerIdentityResponse;
    /**
     * Source properties for import from storage.
     */
    readonly importSourceProperties?: types.outputs.ImportSourcePropertiesResponse;
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
     * PrivateEndpointConnections related properties of a server.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
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
    readonly sku?: types.outputs.MySQLServerSkuResponse;
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
     * Server version.
     */
    readonly version?: string;
}
/**
 * Gets information about a server.
 *
 * Uses Azure REST API version 2024-02-01-preview.
 *
 * Other available API versions: 2022-01-01, 2022-09-30-preview, 2023-06-01-preview, 2023-06-30, 2023-10-01-preview, 2023-12-01-preview, 2023-12-30, 2024-06-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dbformysql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getServerOutput(args: GetServerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbformysql:getServer", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
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