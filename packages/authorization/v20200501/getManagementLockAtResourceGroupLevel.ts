import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a management lock at the resource group level.
 */
export function getManagementLockAtResourceGroupLevel(args: GetManagementLockAtResourceGroupLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementLockAtResourceGroupLevelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20200501:getManagementLockAtResourceGroupLevel", {
        "lockName": args.lockName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagementLockAtResourceGroupLevelArgs {
    /**
     * The name of the lock to get.
     */
    lockName: string;
    /**
     * The name of the locked resource group.
     */
    resourceGroupName: string;
}

/**
 * The lock information.
 */
export interface GetManagementLockAtResourceGroupLevelResult {
    /**
     * The resource ID of the lock.
     */
    readonly id: string;
    /**
     * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
     */
    readonly level: string;
    /**
     * The name of the lock.
     */
    readonly name: string;
    /**
     * Notes about the lock. Maximum of 512 characters.
     */
    readonly notes?: string;
    /**
     * The owners of the lock.
     */
    readonly owners?: types.outputs.ManagementLockOwnerResponse[];
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource type of the lock - Microsoft.Authorization/locks.
     */
    readonly type: string;
}
/**
 * Gets a management lock at the resource group level.
 */
export function getManagementLockAtResourceGroupLevelOutput(args: GetManagementLockAtResourceGroupLevelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementLockAtResourceGroupLevelResult> {
    return pulumi.output(args).apply((a: any) => getManagementLockAtResourceGroupLevel(a, opts))
}

export interface GetManagementLockAtResourceGroupLevelOutputArgs {
    /**
     * The name of the lock to get.
     */
    lockName: pulumi.Input<string>;
    /**
     * The name of the locked resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}