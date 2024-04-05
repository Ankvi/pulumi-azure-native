import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export function listEndpointKeys(args: ListEndpointKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListEndpointKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20240101preview:listEndpointKeys", {
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