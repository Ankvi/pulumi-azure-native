import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSet in a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getADLSGen2FolderDataSet(args: GetADLSGen2FolderDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetADLSGen2FolderDataSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getADLSGen2FolderDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetADLSGen2FolderDataSetArgs {
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
 * An ADLS Gen 2 folder data set.
 */
export interface GetADLSGen2FolderDataSetResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Unique id for identifying a data set resource
     */
    readonly dataSetId: string;
    /**
     * File system to which the folder belongs.
     */
    readonly fileSystem: string;
    /**
     * Folder path within the file system.
     */
    readonly folderPath: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set.
     * Expected value is 'AdlsGen2Folder'.
     */
    readonly kind: "AdlsGen2Folder";
    /**
     * Name of the azure resource
     */
    readonly name: string;
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
export function getADLSGen2FolderDataSetOutput(args: GetADLSGen2FolderDataSetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetADLSGen2FolderDataSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getADLSGen2FolderDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetADLSGen2FolderDataSetOutputArgs {
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