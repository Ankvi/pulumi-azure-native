import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the list of group Ids for a specific LDAP User
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2022-11-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native netapp [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCapacityPoolVolumeGroupIdForLdapUser(args: GetCapacityPoolVolumeGroupIdForLdapUserArgs, opts?: pulumi.InvokeOptions): Promise<GetCapacityPoolVolumeGroupIdForLdapUserResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getCapacityPoolVolumeGroupIdForLdapUser", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "username": args.username,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetCapacityPoolVolumeGroupIdForLdapUserArgs {
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
export interface GetCapacityPoolVolumeGroupIdForLdapUserResult {
    /**
     * Group Id list
     */
    readonly groupIdsForLdapUser?: string[];
}
/**
 * Returns the list of group Ids for a specific LDAP User
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2022-11-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native netapp [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCapacityPoolVolumeGroupIdForLdapUserOutput(args: GetCapacityPoolVolumeGroupIdForLdapUserOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCapacityPoolVolumeGroupIdForLdapUserResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:getCapacityPoolVolumeGroupIdForLdapUser", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "username": args.username,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetCapacityPoolVolumeGroupIdForLdapUserOutputArgs {
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