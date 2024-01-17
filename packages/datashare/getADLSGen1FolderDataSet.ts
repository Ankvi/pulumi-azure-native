import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSet in a share
 * Azure REST API version: 2021-08-01.
 */
export function getADLSGen1FolderDataSet(args: GetADLSGen1FolderDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetADLSGen1FolderDataSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getADLSGen1FolderDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetADLSGen1FolderDataSetArgs {
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
 * An ADLS Gen 1 folder data set.
 */
export interface GetADLSGen1FolderDataSetResult {
    /**
     * The ADLS account name.
     */
    readonly accountName: string;
    /**
     * Unique id for identifying a data set resource
     */
    readonly dataSetId: string;
    /**
     * The folder path within the ADLS account.
     */
    readonly folderPath: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set.
     * Expected value is 'AdlsGen1Folder'.
     */
    readonly kind: "AdlsGen1Folder";
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Resource group of ADLS account.
     */
    readonly resourceGroup: string;
    /**
     * Subscription id of ADLS account.
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
 * Azure REST API version: 2021-08-01.
 */
export function getADLSGen1FolderDataSetOutput(args: GetADLSGen1FolderDataSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetADLSGen1FolderDataSetResult> {
    return pulumi.output(args).apply((a: any) => getADLSGen1FolderDataSet(a, opts))
}

export interface GetADLSGen1FolderDataSetOutputArgs {
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