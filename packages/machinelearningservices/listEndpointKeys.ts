import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-04-01-preview, 2024-07-01-preview.
 */
export function listEndpointKeys(args: ListEndpointKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListEndpointKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listEndpointKeys", {
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListEndpointKeysArgs {
    /**
     * Name of the endpoint resource.
     */
    endpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: string;
}

export interface ListEndpointKeysResult {
    /**
     * Dictionary of Keys for the endpoint.
     */
    readonly keys?: types.outputs.AccountApiKeysResponse;
}
/**
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-04-01-preview, 2024-07-01-preview.
 */
export function listEndpointKeysOutput(args: ListEndpointKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListEndpointKeysResult> {
    return pulumi.output(args).apply((a: any) => listEndpointKeys(a, opts))
}

export interface ListEndpointKeysOutputArgs {
    /**
     * Name of the endpoint resource.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}