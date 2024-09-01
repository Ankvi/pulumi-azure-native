import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an Azure Large Instance for the specified subscription, resource group,
 * and instance name.
 * Azure REST API version: 2024-08-01-preview.
 */
export function getAzureLargeInstance(args: GetAzureLargeInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureLargeInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurelargeinstance:getAzureLargeInstance", {
        "azureLargeInstanceName": args.azureLargeInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureLargeInstanceArgs {
    /**
     * Name of the AzureLargeInstance.
     */
    azureLargeInstanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Azure Large Instance info on Azure (ARM properties and AzureLargeInstance
 * properties)
 */
export interface GetAzureLargeInstanceResult {
    /**
     * Specifies the Azure Large Instance unique ID.
     */
    readonly azureLargeInstanceId?: string;
    /**
     * Specifies the hardware settings for the Azure Large Instance.
     */
    readonly hardwareProfile?: types.outputs.HardwareProfileResponse;
    /**
     * Hardware revision of an Azure Large Instance
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
     * Specifies the network settings for the Azure Large Instance.
     */
    readonly networkProfile?: types.outputs.NetworkProfileResponse;
    /**
     * Specifies the operating system settings for the Azure Large Instance.
     */
    readonly osProfile?: types.outputs.OsProfileResponse;
    /**
     * Resource power state
     */
    readonly powerState?: string;
    /**
     * State of provisioning of the AzureLargeInstance
     */
    readonly provisioningState: string;
    /**
     * Resource proximity placement group
     */
    readonly proximityPlacementGroup?: string;
    /**
     * Specifies the storage settings for the Azure Large Instance disks.
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
 * Gets an Azure Large Instance for the specified subscription, resource group,
 * and instance name.
 * Azure REST API version: 2024-08-01-preview.
 */
export function getAzureLargeInstanceOutput(args: GetAzureLargeInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzureLargeInstanceResult> {
    return pulumi.output(args).apply((a: any) => getAzureLargeInstance(a, opts))
}

export interface GetAzureLargeInstanceOutputArgs {
    /**
     * Name of the AzureLargeInstance.
     */
    azureLargeInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}