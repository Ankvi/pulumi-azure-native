import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSet in a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getBlobFolderDataSet(args: GetBlobFolderDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetBlobFolderDataSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getBlobFolderDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetBlobFolderDataSetArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The name of the dataSet.
     */
    dataSetName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the share.
     */
    shareName: string;
}

/**
 * An Azure storage blob folder data set.
 */
export interface GetBlobFolderDataSetResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Container that has the file path.
     */
    readonly containerName: string;
    /**
     * Unique id for identifying a data set resource
     */
    readonly dataSetId: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set.
     * Expected value is 'BlobFolder'.
     */
    readonly kind: "BlobFolder";
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Prefix for blob folder
     */
    readonly prefix: string;
    /**
     * Resource group of storage account
     */
    readonly resourceGroup: string;
    /**
     * Storage account name of the source data set
     */
    readonly storageAccountName: string;
    /**
     * Subscription id of storage account
     */
    readonly subscriptionId: string;
    /**
     * System Data of the Azure resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
/**
 * Get a DataSet in a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getBlobFolderDataSetOutput(args: GetBlobFolderDataSetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBlobFolderDataSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getBlobFolderDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetBlobFolderDataSetOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSet.
     */
    dataSetName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share.
     */
    shareName: pulumi.Input<string>;
}