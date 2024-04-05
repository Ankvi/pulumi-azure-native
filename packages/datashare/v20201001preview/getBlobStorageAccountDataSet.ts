import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSet in a share
 */
export function getBlobStorageAccountDataSet(args: GetBlobStorageAccountDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetBlobStorageAccountDataSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare/v20201001preview:getBlobStorageAccountDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetBlobStorageAccountDataSetArgs {
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
 * An Azure blob storage account data set.
 */
export interface GetBlobStorageAccountDataSetResult {
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
     * Expected value is 'BlobStorageAccount'.
     */
    readonly kind: "BlobStorageAccount";
    /**
     * Location of the storage account.
     */
    readonly location: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * A list of storage account paths.
     */
    readonly paths: types.outputs.BlobStorageAccountPathResponse[];
    /**
     * Resource id of the storage account.
     */
    readonly storageAccountResourceId: string;
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
 */
export function getBlobStorageAccountDataSetOutput(args: GetBlobStorageAccountDataSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlobStorageAccountDataSetResult> {
    return pulumi.output(args).apply((a: any) => getBlobStorageAccountDataSet(a, opts))
}

export interface GetBlobStorageAccountDataSetOutputArgs {
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