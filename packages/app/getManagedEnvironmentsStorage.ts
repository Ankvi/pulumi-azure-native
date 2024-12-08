import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get storage for a managedEnvironment.
 * Azure REST API version: 2022-10-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-03-01, 2024-08-02-preview, 2024-10-02-preview.
 */
export function getManagedEnvironmentsStorage(args: GetManagedEnvironmentsStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedEnvironmentsStorageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getManagedEnvironmentsStorage", {
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
        "storageName": args.storageName,
    }, opts);
}

export interface GetManagedEnvironmentsStorageArgs {
    /**
     * Name of the Environment.
     */
    environmentName: string;
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
 * Storage resource for managedEnvironment.
 */
export interface GetManagedEnvironmentsStorageResult {
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
    readonly properties: types.outputs.ManagedEnvironmentStorageResponseProperties;
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
 * Get storage for a managedEnvironment.
 * Azure REST API version: 2022-10-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-03-01, 2024-08-02-preview, 2024-10-02-preview.
 */
export function getManagedEnvironmentsStorageOutput(args: GetManagedEnvironmentsStorageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedEnvironmentsStorageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getManagedEnvironmentsStorage", {
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
        "storageName": args.storageName,
    }, opts);
}

export interface GetManagedEnvironmentsStorageOutputArgs {
    /**
     * Name of the Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the storage.
     */
    storageName: pulumi.Input<string>;
}