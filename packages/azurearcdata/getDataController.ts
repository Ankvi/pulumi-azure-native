import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a dataController resource
 * Azure REST API version: 2023-01-15-preview.
 */
export function getDataController(args: GetDataControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetDataControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getDataController", {
        "dataControllerName": args.dataControllerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataControllerArgs {
    /**
     * The name of the data controller
     */
    dataControllerName: string;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
}

/**
 * Data controller resource
 */
export interface GetDataControllerResult {
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The data controller's properties
     */
    readonly properties: types.outputs.DataControllerPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves a dataController resource
 * Azure REST API version: 2023-01-15-preview.
 */
export function getDataControllerOutput(args: GetDataControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataControllerResult> {
    return pulumi.output(args).apply((a: any) => getDataController(a, opts))
}

export interface GetDataControllerOutputArgs {
    /**
     * The name of the data controller
     */
    dataControllerName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
}
