import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a server.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServer(args: GetSingleServerArgs, opts?: pulumi.InvokeOptions): Promise<GetSingleServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql:getSingleServer", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerArgs {
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
export interface GetSingleServerResult {
    /**
     * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
     */
    readonly administratorLogin?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Status showing whether the server data encryption is enabled with customer-managed keys.
     */
    readonly byokEnforcement: string;
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
     * The Azure Active Directory identity of the server.
     */
    readonly identity?: types.outputs.ResourceIdentityResponse;
    /**
     * Status showing whether the server enabled infrastructure encryption.
     */
    readonly infrastructureEncryption?: string;
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
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerOutput(args: GetSingleServerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSingleServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbformysql:getSingleServer", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}