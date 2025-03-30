import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data flow.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getDataFlow(args: GetDataFlowArgs, opts?: pulumi.InvokeOptions): Promise<GetDataFlowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getDataFlow", {
        "dataFlowName": args.dataFlowName,
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataFlowArgs {
    /**
     * The data flow name.
     */
    dataFlowName: string;
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Data flow resource type.
 */
export interface GetDataFlowResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Data flow properties.
     */
    readonly properties: types.outputs.FlowletResponse | types.outputs.MappingDataFlowResponse | types.outputs.WranglingDataFlowResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a data flow.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getDataFlowOutput(args: GetDataFlowOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDataFlowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getDataFlow", {
        "dataFlowName": args.dataFlowName,
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataFlowOutputArgs {
    /**
     * The data flow name.
     */
    dataFlowName: pulumi.Input<string>;
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}