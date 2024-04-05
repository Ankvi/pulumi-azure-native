import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSet in a share
 */
export function getADLSGen2StorageAccountDataSet(args: GetADLSGen2StorageAccountDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetADLSGen2StorageAccountDataSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare/v20201001preview:getADLSGen2StorageAccountDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetADLSGen2StorageAccountDataSetArgs {
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
 * An ADLSGen2 storage account data set.
 */
export interface GetADLSGen2StorageAccountDataSetResult {
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
     * Expected value is 'AdlsGen2StorageAccount'.
     */
    readonly kind: "AdlsGen2StorageAccount";
    /**
     * Location of the ADLSGen2 storage account.
     */
    readonly location: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * A list of ADLSGen2 storage account paths.
     */
    readonly paths: types.outputs.ADLSGen2StorageAccountPathResponse[];
    /**
     * Resource id of the ADLSGen2 storage account.
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
export function getADLSGen2StorageAccountDataSetOutput(args: GetADLSGen2StorageAccountDataSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetADLSGen2StorageAccountDataSetResult> {
    return pulumi.output(args).apply((a: any) => getADLSGen2StorageAccountDataSet(a, opts))
}

export interface GetADLSGen2StorageAccountDataSetOutputArgs {
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