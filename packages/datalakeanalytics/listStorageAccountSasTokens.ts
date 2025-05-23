import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the SAS token associated with the specified Data Lake Analytics and Azure Storage account and container combination.
 *
 * Uses Azure REST API version 2019-11-01-preview.
 */
export function listStorageAccountSasTokens(args: ListStorageAccountSasTokensArgs, opts?: pulumi.InvokeOptions): Promise<ListStorageAccountSasTokensResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datalakeanalytics:listStorageAccountSasTokens", {
        "accountName": args.accountName,
        "containerName": args.containerName,
        "resourceGroupName": args.resourceGroupName,
        "storageAccountName": args.storageAccountName,
    }, opts);
}

export interface ListStorageAccountSasTokensArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    accountName: string;
    /**
     * The name of the Azure storage container for which the SAS token is being requested.
     */
    containerName: string;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the Azure storage account for which the SAS token is being requested.
     */
    storageAccountName: string;
}

/**
 * The SAS response that contains the storage account, container and associated SAS token for connection use.
 */
export interface ListStorageAccountSasTokensResult {
    /**
     * The link (url) to the next page of results.
     */
    readonly nextLink: string;
    /**
     * The results of the list operation.
     */
    readonly value: types.outputs.SasTokenInformationResponse[];
}
/**
 * Gets the SAS token associated with the specified Data Lake Analytics and Azure Storage account and container combination.
 *
 * Uses Azure REST API version 2019-11-01-preview.
 */
export function listStorageAccountSasTokensOutput(args: ListStorageAccountSasTokensOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListStorageAccountSasTokensResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datalakeanalytics:listStorageAccountSasTokens", {
        "accountName": args.accountName,
        "containerName": args.containerName,
        "resourceGroupName": args.resourceGroupName,
        "storageAccountName": args.storageAccountName,
    }, opts);
}

export interface ListStorageAccountSasTokensOutputArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Azure storage container for which the SAS token is being requested.
     */
    containerName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure storage account for which the SAS token is being requested.
     */
    storageAccountName: pulumi.Input<string>;
}