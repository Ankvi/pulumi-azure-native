import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an Azure Large Storage instance for the specified subscription, resource
 * group, and instance name.
 *
 * Uses Azure REST API version 2024-08-01-preview.
 */
export function getAzureLargeStorageInstance(args: GetAzureLargeStorageInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureLargeStorageInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurelargeinstance:getAzureLargeStorageInstance", {
        "azureLargeStorageInstanceName": args.azureLargeStorageInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureLargeStorageInstanceArgs {
    /**
     * Name of the AzureLargeStorageInstance.
     */
    azureLargeStorageInstanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * AzureLargeStorageInstance info on Azure (ARM properties and
 * AzureLargeStorageInstance properties)
 */
export interface GetAzureLargeStorageInstanceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Specifies the AzureLargeStorageInstance unique ID.
     */
    readonly azureLargeStorageInstanceUniqueIdentifier?: string;
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
     * Specifies the storage properties for the AzureLargeStorage instance.
     */
    readonly storageProperties?: types.outputs.StoragePropertiesResponse;
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
 * Gets an Azure Large Storage instance for the specified subscription, resource
 * group, and instance name.
 *
 * Uses Azure REST API version 2024-08-01-preview.
 */
export function getAzureLargeStorageInstanceOutput(args: GetAzureLargeStorageInstanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureLargeStorageInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurelargeinstance:getAzureLargeStorageInstance", {
        "azureLargeStorageInstanceName": args.azureLargeStorageInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureLargeStorageInstanceOutputArgs {
    /**
     * Name of the AzureLargeStorageInstance.
     */
    azureLargeStorageInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}