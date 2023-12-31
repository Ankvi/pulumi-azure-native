import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get storage for a managedEnvironment.
 */
export function getManagedEnvironmentsStorage(args: GetManagedEnvironmentsStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedEnvironmentsStorageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20230801preview:getManagedEnvironmentsStorage", {
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
 */
export function getManagedEnvironmentsStorageOutput(args: GetManagedEnvironmentsStorageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedEnvironmentsStorageResult> {
    return pulumi.output(args).apply((a: any) => getManagedEnvironmentsStorage(a, opts))
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
