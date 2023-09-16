import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the storage resource.
 * Azure REST API version: 2023-05-01-preview.
 */
export function getStorage(args: GetStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getStorage", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "storageName": args.storageName,
    }, opts);
}

export interface GetStorageArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
    /**
     * The name of the storage resource.
     */
    storageName: string;
}

/**
 * Storage resource payload.
 */
export interface GetStorageResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the storage resource payload.
     */
    readonly properties: types.outputs.appplatform.StorageAccountResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.appplatform.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the storage resource.
 * Azure REST API version: 2023-05-01-preview.
 */
export function getStorageOutput(args: GetStorageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageResult> {
    return pulumi.output(args).apply((a: any) => getStorage(a, opts))
}

export interface GetStorageOutputArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The name of the storage resource.
     */
    storageName: pulumi.Input<string>;
}
