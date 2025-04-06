import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get specific Data Connector resource by DataConnectorName.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 */
export function getDataConnector(args: GetDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetDataConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agfoodplatform:getDataConnector", {
        "dataConnectorName": args.dataConnectorName,
        "dataManagerForAgricultureResourceName": args.dataManagerForAgricultureResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataConnectorArgs {
    /**
     * Connector name.
     */
    dataConnectorName: string;
    /**
     * DataManagerForAgriculture resource name.
     */
    dataManagerForAgricultureResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * DataConnector Model.
 */
export interface GetDataConnectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The ETag value to implement optimistic concurrency.
     */
    readonly eTag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * DataConnector Properties.
     */
    readonly properties: types.outputs.DataConnectorPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get specific Data Connector resource by DataConnectorName.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 */
export function getDataConnectorOutput(args: GetDataConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDataConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:agfoodplatform:getDataConnector", {
        "dataConnectorName": args.dataConnectorName,
        "dataManagerForAgricultureResourceName": args.dataManagerForAgricultureResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataConnectorOutputArgs {
    /**
     * Connector name.
     */
    dataConnectorName: pulumi.Input<string>;
    /**
     * DataManagerForAgriculture resource name.
     */
    dataManagerForAgricultureResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}