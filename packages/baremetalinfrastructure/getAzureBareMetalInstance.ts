import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an Azure Bare Metal Instance for the specified subscription, resource group, and instance name.
 * Azure REST API version: 2024-08-01-preview.
 */
export function getAzureBareMetalInstance(args: GetAzureBareMetalInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureBareMetalInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:baremetalinfrastructure:getAzureBareMetalInstance", {
        "azureBareMetalInstanceName": args.azureBareMetalInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureBareMetalInstanceArgs {
    /**
     * Name of the Azure Bare Metal Instance, also known as the ResourceName.
     */
    azureBareMetalInstanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * AzureBareMetal instance info on Azure (ARM properties and AzureBareMetal properties)
 */
export interface GetAzureBareMetalInstanceResult {
    /**
     * Specifies the Azure Bare Metal Instance unique ID.
     */
    readonly azureBareMetalInstanceId?: string;
    /**
     * Specifies the hardware settings for the Azure Bare Metal Instance.
     */
    readonly hardwareProfile?: types.outputs.HardwareProfileResponse;
    /**
     * Hardware revision of an Azure Bare Metal Instance
     */
    readonly hwRevision?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Specifies the network settings for the Azure Bare Metal Instance.
     */
    readonly networkProfile?: types.outputs.NetworkProfileResponse;
    /**
     * Specifies the operating system settings for the Azure Bare Metal Instance.
     */
    readonly osProfile?: types.outputs.OSProfileResponse;
    /**
     * ARM ID of another AzureBareMetalInstance that will share a network with this AzureBareMetalInstance
     */
    readonly partnerNodeId?: string;
    /**
     * Resource power state
     */
    readonly powerState?: string;
    /**
     * State of provisioning of the AzureBareMetalInstance
     */
    readonly provisioningState: string;
    /**
     * Resource proximity placement group
     */
    readonly proximityPlacementGroup?: string;
    /**
     * Specifies the storage settings for the Azure Bare Metal Instance disks.
     */
    readonly storageProfile?: types.outputs.StorageProfileResponse;
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
 * Gets an Azure Bare Metal Instance for the specified subscription, resource group, and instance name.
 * Azure REST API version: 2024-08-01-preview.
 */
export function getAzureBareMetalInstanceOutput(args: GetAzureBareMetalInstanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureBareMetalInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:baremetalinfrastructure:getAzureBareMetalInstance", {
        "azureBareMetalInstanceName": args.azureBareMetalInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureBareMetalInstanceOutputArgs {
    /**
     * Name of the Azure Bare Metal Instance, also known as the ResourceName.
     */
    azureBareMetalInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}