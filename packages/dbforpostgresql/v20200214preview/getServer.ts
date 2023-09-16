import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets information about a server.
 */
export function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql/v20200214preview:getServer", {
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
    readonly delegatedSubnetArguments?: types.outputs.dbforpostgresql.v20200214preview.ServerPropertiesResponseDelegatedSubnetArguments;
    /**
     * The display name of a server.
     */
    readonly displayName?: string;
    /**
     * The earliest restore point time (ISO8601 format) for server.
     */
    readonly earliestRestoreDate: string;
    /**
     * The fully qualified domain name of a server.
     */
    readonly fullyQualifiedDomainName: string;
    /**
     * stand by count value can be either enabled or disabled
     */
    readonly haEnabled?: string;
    /**
     * A state of a HA server that is visible to user.
     */
    readonly haState: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The Azure Active Directory identity of the server.
     */
    readonly identity?: types.outputs.dbforpostgresql.v20200214preview.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The log backup storage sku of the server.
     */
    readonly logBackupStorageSku?: string;
    /**
     * Maintenance window of a server.
     */
    readonly maintenanceWindow?: types.outputs.dbforpostgresql.v20200214preview.MaintenanceWindowResponse;
    /**
     * The minor version of the server.
     */
    readonly minorVersion: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Restore point creation time (ISO8601 format), specifying the time to restore from.
     */
    readonly pointInTimeUTC?: string;
    readonly privateDnsZoneArguments?: types.outputs.dbforpostgresql.v20200214preview.ServerPropertiesResponsePrivateDnsZoneArguments;
    /**
     * public network access is enabled or not
     */
    readonly publicNetworkAccess: string;
    /**
     * The SKU (pricing tier) of the server.
     */
    readonly sku?: types.outputs.dbforpostgresql.v20200214preview.SkuResponse;
    /**
     * The resource group name of source serve PostgreSQL server name to restore from.
     */
    readonly sourceResourceGroupName?: string;
    /**
     * The source PostgreSQL server name to restore from.
     */
    readonly sourceServerName?: string;
    /**
     * The subscription id of source serve PostgreSQL server name to restore from.
     */
    readonly sourceSubscriptionId?: string;
    /**
     * availability Zone information of the server.
     */
    readonly standbyAvailabilityZone: string;
    /**
     * The number of standbys.
     */
    readonly standbyCount?: number;
    /**
     * A state of a server that is visible to user.
     */
    readonly state: string;
    /**
     * Storage profile of a server.
     */
    readonly storageProfile?: types.outputs.dbforpostgresql.v20200214preview.StorageProfileResponse;
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
