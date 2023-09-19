import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the management lock of a resource or any level below resource.
 */
export function getManagementLockAtResourceLevel(args: GetManagementLockAtResourceLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementLockAtResourceLevelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20200501:getManagementLockAtResourceLevel", {
        "lockName": args.lockName,
        "parentResourcePath": args.parentResourcePath,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "resourceProviderNamespace": args.resourceProviderNamespace,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetManagementLockAtResourceLevelArgs {
    /**
     * The name of lock.
     */
    lockName: string;
    /**
     * An extra path parameter needed in some services, like SQL Databases.
     */
    parentResourcePath: string;
    /**
     * The name of the resource group. 
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
    /**
     * The namespace of the resource provider.
     */
    resourceProviderNamespace: string;
    /**
     * The type of the resource.
     */
    resourceType: string;
}

/**
 * The lock information.
 */
export interface GetManagementLockAtResourceLevelResult {
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
 * Get the management lock of a resource or any level below resource.
 */
export function getManagementLockAtResourceLevelOutput(args: GetManagementLockAtResourceLevelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementLockAtResourceLevelResult> {
    return pulumi.output(args).apply((a: any) => getManagementLockAtResourceLevel(a, opts))
}

export interface GetManagementLockAtResourceLevelOutputArgs {
    /**
     * The name of lock.
     */
    lockName: pulumi.Input<string>;
    /**
     * An extra path parameter needed in some services, like SQL Databases.
     */
    parentResourcePath: pulumi.Input<string>;
    /**
     * The name of the resource group. 
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The namespace of the resource provider.
     */
    resourceProviderNamespace: pulumi.Input<string>;
    /**
     * The type of the resource.
     */
    resourceType: pulumi.Input<string>;
}
