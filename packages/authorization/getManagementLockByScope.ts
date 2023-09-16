import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a management lock by scope.
 * Azure REST API version: 2020-05-01.
 */
export function getManagementLockByScope(args: GetManagementLockByScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementLockByScopeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getManagementLockByScope", {
        "lockName": args.lockName,
        "scope": args.scope,
    }, opts);
}

export interface GetManagementLockByScopeArgs {
    /**
     * The name of lock.
     */
    lockName: string;
    /**
     * The scope for the lock. 
     */
    scope: string;
}

/**
 * The lock information.
 */
export interface GetManagementLockByScopeResult {
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
    readonly owners?: types.outputs.authorization.ManagementLockOwnerResponse[];
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.authorization.SystemDataResponse;
    /**
     * The resource type of the lock - Microsoft.Authorization/locks.
     */
    readonly type: string;
}
/**
 * Get a management lock by scope.
 * Azure REST API version: 2020-05-01.
 */
export function getManagementLockByScopeOutput(args: GetManagementLockByScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementLockByScopeResult> {
    return pulumi.output(args).apply((a: any) => getManagementLockByScope(a, opts))
}

export interface GetManagementLockByScopeOutputArgs {
    /**
     * The name of lock.
     */
    lockName: pulumi.Input<string>;
    /**
     * The scope for the lock. 
     */
    scope: pulumi.Input<string>;
}
