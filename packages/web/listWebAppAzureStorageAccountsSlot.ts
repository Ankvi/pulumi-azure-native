import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets the Azure storage account configurations of an app.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppAzureStorageAccountsSlot(args: ListWebAppAzureStorageAccountsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppAzureStorageAccountsSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppAzureStorageAccountsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppAzureStorageAccountsSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will update the Azure storage account configurations for the production slot.
     */
    slot: string;
}

/**
 * AzureStorageInfo dictionary resource.
 */
export interface ListWebAppAzureStorageAccountsSlotResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Azure storage accounts.
     */
    readonly properties: {[key: string]: types.outputs.AzureStorageInfoValueResponse};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets the Azure storage account configurations of an app.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppAzureStorageAccountsSlotOutput(args: ListWebAppAzureStorageAccountsSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppAzureStorageAccountsSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppAzureStorageAccountsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppAzureStorageAccountsSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will update the Azure storage account configurations for the production slot.
     */
    slot: pulumi.Input<string>;
}