import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a server.
 */
export function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql/v20200701preview:getServer", {
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
     * Status showing whether the data encryption is enabled with customer-managed keys.
     */
    readonly byokEnforcement: string;
    /**
     * Delegated subnet arguments.
     */
    readonly delegatedSubnetArguments?: types.outputs.DelegatedSubnetArgumentsResponse;
    /**
     * Earliest restore point creation time (ISO8601 format)
     */
    readonly earliestRestoreDate: string;
    /**
     * The fully qualified domain name of a server.
     */
    readonly fullyQualifiedDomainName: string;
    /**
     * Enable HA or not for a server.
     */
    readonly haEnabled?: string;
    /**
     * The state of a HA server.
     */
    readonly haState: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The Azure Active Directory identity of the server.
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
     * private dns zone arguments.
     */
    readonly privateDnsZoneArguments?: types.outputs.PrivateDnsZoneArgumentsResponse;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    readonly publicNetworkAccess: string;
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
    readonly sourceServerId?: string;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    readonly sslEnforcement?: string;
    /**
     * availability Zone information of the server.
     */
    readonly standbyAvailabilityZone: string;
    /**
     * The state of a server.
     */
    readonly state: string;
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
