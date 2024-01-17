import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Keys for endpoint authentication.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01.
 */
export function listBatchEndpointKeys(args: ListBatchEndpointKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListBatchEndpointKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listBatchEndpointKeys", {
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListBatchEndpointKeysArgs {
    /**
     * Inference Endpoint name.
     */
    endpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Keys for endpoint authentication.
 */
export interface ListBatchEndpointKeysResult {
    /**
     * The primary key.
     */
    readonly primaryKey?: string;
    /**
     * The secondary key.
     */
    readonly secondaryKey?: string;
}
/**
 * Keys for endpoint authentication.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01.
 */
export function listBatchEndpointKeysOutput(args: ListBatchEndpointKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListBatchEndpointKeysResult> {
    return pulumi.output(args).apply((a: any) => listBatchEndpointKeys(a, opts))
}

export interface ListBatchEndpointKeysOutputArgs {
    /**
     * Inference Endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}