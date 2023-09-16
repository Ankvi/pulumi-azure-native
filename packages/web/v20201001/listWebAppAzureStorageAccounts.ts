import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the Azure storage account configurations of an app.
 */
export function listWebAppAzureStorageAccounts(args: ListWebAppAzureStorageAccountsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppAzureStorageAccountsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:listWebAppAzureStorageAccounts", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppAzureStorageAccountsArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * AzureStorageInfo dictionary resource.
 */
export interface ListWebAppAzureStorageAccountsResult {
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
    readonly properties: {[key: string]: types.outputs.web.v20201001.AzureStorageInfoValueResponse};
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.web.v20201001.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the Azure storage account configurations of an app.
 */
export function listWebAppAzureStorageAccountsOutput(args: ListWebAppAzureStorageAccountsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppAzureStorageAccountsResult> {
    return pulumi.output(args).apply((a: any) => listWebAppAzureStorageAccounts(a, opts))
}

export interface ListWebAppAzureStorageAccountsOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
