import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a management lock at the subscription level.
 *
 * Uses Azure REST API version 2020-05-01.
 */
export function getManagementLockAtSubscriptionLevel(args: GetManagementLockAtSubscriptionLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementLockAtSubscriptionLevelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getManagementLockAtSubscriptionLevel", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Gets a management lock at the subscription level.
 *
 * Uses Azure REST API version 2020-05-01.
 */
export function getManagementLockAtSubscriptionLevelOutput(args: GetManagementLockAtSubscriptionLevelOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagementLockAtSubscriptionLevelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getManagementLockAtSubscriptionLevel", {
        "lockName": args.lockName,
    }, opts);
}

export interface GetManagementLockAtSubscriptionLevelOutputArgs {
    /**
     * The name of the lock to get.
     */
    lockName: pulumi.Input<string>;
}