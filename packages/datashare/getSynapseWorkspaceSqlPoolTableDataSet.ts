import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSet in a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getSynapseWorkspaceSqlPoolTableDataSet(args: GetSynapseWorkspaceSqlPoolTableDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetSynapseWorkspaceSqlPoolTableDataSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getSynapseWorkspaceSqlPoolTableDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetSynapseWorkspaceSqlPoolTableDataSetArgs {
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
 * A Synapse Workspace Sql Pool Table data set.
 */
export interface GetSynapseWorkspaceSqlPoolTableDataSetResult {
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
     * Expected value is 'SynapseWorkspaceSqlPoolTable'.
     */
    readonly kind: "SynapseWorkspaceSqlPoolTable";
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Resource id of the Synapse Workspace SQL Pool Table
     */
    readonly synapseWorkspaceSqlPoolTableResourceId: string;
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
export function getSynapseWorkspaceSqlPoolTableDataSetOutput(args: GetSynapseWorkspaceSqlPoolTableDataSetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSynapseWorkspaceSqlPoolTableDataSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getSynapseWorkspaceSqlPoolTableDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetSynapseWorkspaceSqlPoolTableDataSetOutputArgs {
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