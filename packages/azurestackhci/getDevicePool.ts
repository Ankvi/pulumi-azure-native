import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DevicePool
 *
 * Uses Azure REST API version 2026-03-01-preview.
 */
export function getDevicePool(args: GetDevicePoolArgs, opts?: pulumi.InvokeOptions): Promise<GetDevicePoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getDevicePool", {
        "devicePoolName": args.devicePoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDevicePoolArgs {
    /**
     * The name of the DevicePool
     */
    devicePoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * DevicePool details.
 */
export interface GetDevicePoolResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.DevicePoolPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a DevicePool
 *
 * Uses Azure REST API version 2026-03-01-preview.
 */
export function getDevicePoolOutput(args: GetDevicePoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDevicePoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getDevicePool", {
        "devicePoolName": args.devicePoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDevicePoolOutputArgs {
    /**
     * The name of the DevicePool
     */
    devicePoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}