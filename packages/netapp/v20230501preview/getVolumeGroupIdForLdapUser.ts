import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the list of group Ids for a specific LDAP User
 */
export function getVolumeGroupIdForLdapUser(args: GetVolumeGroupIdForLdapUserArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeGroupIdForLdapUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp/v20230501preview:getVolumeGroupIdForLdapUser", {
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
 */
export function getVolumeGroupIdForLdapUserOutput(args: GetVolumeGroupIdForLdapUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVolumeGroupIdForLdapUserResult> {
    return pulumi.output(args).apply((a: any) => getVolumeGroupIdForLdapUser(a, opts))
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
