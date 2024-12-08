import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2024-01-01-preview, 2024-04-01-preview.
 */
export function getServerlessEndpointStatus(args: GetServerlessEndpointStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetServerlessEndpointStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getServerlessEndpointStatus", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetServerlessEndpointStatusArgs {
    /**
     * Serverless Endpoint name.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface GetServerlessEndpointStatusResult {
    /**
     * The model-specific metrics from the backing inference endpoint.
     */
    readonly metrics: {[key: string]: string};
}
/**
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2024-01-01-preview, 2024-04-01-preview.
 */
export function getServerlessEndpointStatusOutput(args: GetServerlessEndpointStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerlessEndpointStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getServerlessEndpointStatus", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetServerlessEndpointStatusOutputArgs {
    /**
     * Serverless Endpoint name.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}