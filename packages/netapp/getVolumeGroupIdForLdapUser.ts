import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the list of group Ids for a specific LDAP User
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export function getVolumeGroupIdForLdapUser(args: GetVolumeGroupIdForLdapUserArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeGroupIdForLdapUserResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getVolumeGroupIdForLdapUser", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "username": args.username,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetVolumeGroupIdForLdapUserArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the capacity pool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * username is required to fetch the group to which user is part of
     */
    username: string;
    /**
     * The name of the volume
     */
    volumeName: string;
}

/**
 * Group Id list for Ldap user
 */
export interface GetVolumeGroupIdForLdapUserResult {
    /**
     * Group Id list
     */
    readonly groupIdsForLdapUser?: string[];
}
/**
 * Returns the list of group Ids for a specific LDAP User
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export function getVolumeGroupIdForLdapUserOutput(args: GetVolumeGroupIdForLdapUserOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVolumeGroupIdForLdapUserResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:getVolumeGroupIdForLdapUser", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "username": args.username,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetVolumeGroupIdForLdapUserOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * username is required to fetch the group to which user is part of
     */
    username: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}