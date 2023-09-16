import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a DataSet in a share
 */
export function getBlobContainerDataSet(args: GetBlobContainerDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetBlobContainerDataSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare/v20210801:getBlobContainerDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetBlobContainerDataSetArgs {
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
 * An Azure storage blob container data set.
 */
export interface GetBlobContainerDataSetResult {
    /**
     * BLOB Container name.
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
     * Expected value is 'Container'.
     */
    readonly kind: "Container";
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
    readonly systemData: types.outputs.datashare.v20210801.SystemDataResponse;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
/**
 * Get a DataSet in a share
 */
export function getBlobContainerDataSetOutput(args: GetBlobContainerDataSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlobContainerDataSetResult> {
    return pulumi.output(args).apply((a: any) => getBlobContainerDataSet(a, opts))
}

export interface GetBlobContainerDataSetOutputArgs {
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
