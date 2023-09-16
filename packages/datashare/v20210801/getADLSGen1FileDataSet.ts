import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a DataSet in a share
 */
export function getADLSGen1FileDataSet(args: GetADLSGen1FileDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetADLSGen1FileDataSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare/v20210801:getADLSGen1FileDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetADLSGen1FileDataSetArgs {
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
 * An ADLS Gen 1 file data set.
 */
export interface GetADLSGen1FileDataSetResult {
    /**
     * The ADLS account name.
     */
    readonly accountName: string;
    /**
     * Unique id for identifying a data set resource
     */
    readonly dataSetId: string;
    /**
     * The file name in the ADLS account.
     */
    readonly fileName: string;
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
     * Expected value is 'AdlsGen1File'.
     */
    readonly kind: "AdlsGen1File";
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
    readonly systemData: types.outputs.datashare.v20210801.SystemDataResponse;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
/**
 * Get a DataSet in a share
 */
export function getADLSGen1FileDataSetOutput(args: GetADLSGen1FileDataSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetADLSGen1FileDataSetResult> {
    return pulumi.output(args).apply((a: any) => getADLSGen1FileDataSet(a, opts))
}

export interface GetADLSGen1FileDataSetOutputArgs {
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
