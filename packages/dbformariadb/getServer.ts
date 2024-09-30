import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a server.
 * Azure REST API version: 2018-06-01.
 *
 * Other available API versions: 2018-06-01-preview.
 */
export function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformariadb:getServer", {
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
     * Earliest restore point creation time (ISO8601 format)
     */
    readonly earliestRestoreDate?: string;
    /**
     * The fully qualified domain name of a server.
     */
    readonly fullyQualifiedDomainName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The master server id of a replica server.
     */
    readonly masterServerId?: string;
    /**
     * Enforce a minimal Tls version for the server.
     */
    readonly minimalTlsVersion?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of private endpoint connections on a server
     */
    readonly privateEndpointConnections: types.outputs.ServerPrivateEndpointConnectionResponse[];
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    readonly publicNetworkAccess?: string;
    /**
     * The maximum number of replicas that a master server can have.
     */
    readonly replicaCapacity?: number;
    /**
     * The replication role of the server.
     */
    readonly replicationRole?: string;
    /**
     * The SKU (pricing tier) of the server.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    readonly sslEnforcement?: string;
    /**
     * Storage profile of a server.
     */
    readonly storageProfile?: types.outputs.StorageProfileResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * A state of a server that is visible to user.
     */
    readonly userVisibleState?: string;
    /**
     * Server version.
     */
    readonly version?: string;
}
/**
 * Gets information about a server.
 * Azure REST API version: 2018-06-01.
 *
 * Other available API versions: 2018-06-01-preview.
 */
export function getServerOutput(args: GetServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbformariadb:getServer", {
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