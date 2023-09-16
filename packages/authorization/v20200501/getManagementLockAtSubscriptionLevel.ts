import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a management lock at the subscription level.
 */
export function getManagementLockAtSubscriptionLevel(args: GetManagementLockAtSubscriptionLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementLockAtSubscriptionLevelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20200501:getManagementLockAtSubscriptionLevel", {
        "lockName": args.lockName,
    }, opts);
}

export interface GetManagementLockAtSubscriptionLevelArgs {
    /**
     * The name of the lock to get.
     */
    lockName: string;
}

/**
 * The lock information.
 */
export interface GetManagementLockAtSubscriptionLevelResult {
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
    readonly owners?: types.outputs.authorization.v20200501.ManagementLockOwnerResponse[];
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.authorization.v20200501.SystemDataResponse;
    /**
     * The resource type of the lock - Microsoft.Authorization/locks.
     */
    readonly type: string;
}
/**
 * Gets a management lock at the subscription level.
 */
export function getManagementLockAtSubscriptionLevelOutput(args: GetManagementLockAtSubscriptionLevelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementLockAtSubscriptionLevelResult> {
    return pulumi.output(args).apply((a: any) => getManagementLockAtSubscriptionLevel(a, opts))
}

export interface GetManagementLockAtSubscriptionLevelOutputArgs {
    /**
     * The name of the lock to get.
     */
    lockName: pulumi.Input<string>;
}
