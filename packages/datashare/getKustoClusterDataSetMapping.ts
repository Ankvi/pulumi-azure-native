import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSetMapping in a shareSubscription
 * Azure REST API version: 2021-08-01.
 */
export function getKustoClusterDataSetMapping(args: GetKustoClusterDataSetMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetKustoClusterDataSetMappingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getKustoClusterDataSetMapping", {
        "accountName": args.accountName,
        "dataSetMappingName": args.dataSetMappingName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
    }, opts);
}

export interface GetKustoClusterDataSetMappingArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The name of the dataSetMapping.
     */
    dataSetMappingName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: string;
}

/**
 * A Kusto cluster data set mapping
 */
export interface GetKustoClusterDataSetMappingResult {
    /**
     * The id of the source data set.
     */
    readonly dataSetId: string;
    /**
     * Gets the status of the data set mapping.
     */
    readonly dataSetMappingStatus: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set mapping.
     * Expected value is 'KustoCluster'.
     */
    readonly kind: "KustoCluster";
    /**
     * Resource id of the sink kusto cluster.
     */
    readonly kustoClusterResourceId: string;
    /**
     * Location of the sink kusto cluster.
     */
    readonly location: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Provisioning state of the data set mapping.
     */
    readonly provisioningState: string;
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
 * Get a DataSetMapping in a shareSubscription
 * Azure REST API version: 2021-08-01.
 */
export function getKustoClusterDataSetMappingOutput(args: GetKustoClusterDataSetMappingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetKustoClusterDataSetMappingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getKustoClusterDataSetMapping", {
        "accountName": args.accountName,
        "dataSetMappingName": args.dataSetMappingName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
    }, opts);
}

export interface GetKustoClusterDataSetMappingOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSetMapping.
     */
    dataSetMappingName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: pulumi.Input<string>;
}