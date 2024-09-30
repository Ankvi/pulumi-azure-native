import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataFlowResource
 * Azure REST API version: 2024-07-01-preview.
 */
export function getDataFlow(args: GetDataFlowArgs, opts?: pulumi.InvokeOptions): Promise<GetDataFlowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperations:getDataFlow", {
        "dataflowName": args.dataflowName,
        "dataflowProfileName": args.dataflowProfileName,
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataFlowArgs {
    /**
     * Name of Instance dataflowProfile dataflow resource
     */
    dataflowName: string;
    /**
     * Name of Instance dataflowProfile resource
     */
    dataflowProfileName: string;
    /**
     * Name of instance.
     */
    instanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Instance dataflowProfile dataflow resource
 */
export interface GetDataFlowResult {
    /**
     * Edge location of the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.DataFlowPropertiesResponse;
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
 * Get a DataFlowResource
 * Azure REST API version: 2024-07-01-preview.
 */
export function getDataFlowOutput(args: GetDataFlowOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataFlowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperations:getDataFlow", {
        "dataflowName": args.dataflowName,
        "dataflowProfileName": args.dataflowProfileName,
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataFlowOutputArgs {
    /**
     * Name of Instance dataflowProfile dataflow resource
     */
    dataflowName: pulumi.Input<string>;
    /**
     * Name of Instance dataflowProfile resource
     */
    dataflowProfileName: pulumi.Input<string>;
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}