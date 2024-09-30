import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve data type resource.
 * Azure REST API version: 2023-11-15.
 */
export function getDataType(args: GetDataTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetDataTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkanalytics:getDataType", {
        "dataProductName": args.dataProductName,
        "dataTypeName": args.dataTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataTypeArgs {
    /**
     * The data product resource name
     */
    dataProductName: string;
    /**
     * The data type name.
     */
    dataTypeName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The data type resource.
 */
export interface GetDataTypeResult {
    /**
     * Field for database cache retention in days.
     */
    readonly databaseCacheRetention?: number;
    /**
     * Field for database data retention in days.
     */
    readonly databaseRetention?: number;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Latest provisioning state  of data product.
     */
    readonly provisioningState: string;
    /**
     * State of data type.
     */
    readonly state?: string;
    /**
     * Reason for the state of data type.
     */
    readonly stateReason: string;
    /**
     * Field for storage output retention in days.
     */
    readonly storageOutputRetention?: number;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Url for data visualization.
     */
    readonly visualizationUrl: string;
}
/**
 * Retrieve data type resource.
 * Azure REST API version: 2023-11-15.
 */
export function getDataTypeOutput(args: GetDataTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkanalytics:getDataType", {
        "dataProductName": args.dataProductName,
        "dataTypeName": args.dataTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataTypeOutputArgs {
    /**
     * The data product resource name
     */
    dataProductName: pulumi.Input<string>;
    /**
     * The data type name.
     */
    dataTypeName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}