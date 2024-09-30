import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an Azure BareMetal Storage instance for the specified subscription, resource group, and instance name.
 * Azure REST API version: 2023-04-06.
 *
 * Other available API versions: 2023-08-04-preview, 2023-11-01-preview, 2024-08-01-preview.
 */
export function getAzureBareMetalStorageInstance(args: GetAzureBareMetalStorageInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureBareMetalStorageInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:baremetalinfrastructure:getAzureBareMetalStorageInstance", {
        "azureBareMetalStorageInstanceName": args.azureBareMetalStorageInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureBareMetalStorageInstanceArgs {
    /**
     * Name of the AzureBareMetalStorage on Azure instance.
     */
    azureBareMetalStorageInstanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * AzureBareMetalStorageInstance info on Azure (ARM properties and AzureBareMetalStorage properties)
 */
export interface GetAzureBareMetalStorageInstanceResult {
    /**
     * Specifies the AzureBareMetaStorageInstance unique ID.
     */
    readonly azureBareMetalStorageInstanceUniqueIdentifier?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Specifies the storage properties for the AzureBareMetalStorage instance.
     */
    readonly storageProperties?: types.outputs.StoragePropertiesResponse;
    /**
     * The system metadata relating to this resource.
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
 * Gets an Azure BareMetal Storage instance for the specified subscription, resource group, and instance name.
 * Azure REST API version: 2023-04-06.
 *
 * Other available API versions: 2023-08-04-preview, 2023-11-01-preview, 2024-08-01-preview.
 */
export function getAzureBareMetalStorageInstanceOutput(args: GetAzureBareMetalStorageInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzureBareMetalStorageInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:baremetalinfrastructure:getAzureBareMetalStorageInstance", {
        "azureBareMetalStorageInstanceName": args.azureBareMetalStorageInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureBareMetalStorageInstanceOutputArgs {
    /**
     * Name of the AzureBareMetalStorage on Azure instance.
     */
    azureBareMetalStorageInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}