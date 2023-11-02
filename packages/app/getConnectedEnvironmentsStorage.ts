import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get storage for a connectedEnvironment.
 * Azure REST API version: 2022-10-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01, 2023-05-02-preview.
 */
export function getConnectedEnvironmentsStorage(args: GetConnectedEnvironmentsStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectedEnvironmentsStorageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getConnectedEnvironmentsStorage", {
        "connectedEnvironmentName": args.connectedEnvironmentName,
        "resourceGroupName": args.resourceGroupName,
        "storageName": args.storageName,
    }, opts);
}

export interface GetConnectedEnvironmentsStorageArgs {
    /**
     * Name of the Environment.
     */
    connectedEnvironmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the storage.
     */
    storageName: string;
}

/**
 * Storage resource for connectedEnvironment.
 */
export interface GetConnectedEnvironmentsStorageResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Storage properties
     */
    readonly properties: types.outputs.ConnectedEnvironmentStorageResponseProperties;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get storage for a connectedEnvironment.
 * Azure REST API version: 2022-10-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01, 2023-05-02-preview.
 */
export function getConnectedEnvironmentsStorageOutput(args: GetConnectedEnvironmentsStorageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectedEnvironmentsStorageResult> {
    return pulumi.output(args).apply((a: any) => getConnectedEnvironmentsStorage(a, opts))
}

export interface GetConnectedEnvironmentsStorageOutputArgs {
    /**
     * Name of the Environment.
     */
    connectedEnvironmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the storage.
     */
    storageName: pulumi.Input<string>;
}
