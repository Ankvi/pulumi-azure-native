import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Keys for endpoint authentication.
 */
export function listServerlessEndpointKeys(args: ListServerlessEndpointKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListServerlessEndpointKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230801preview:listServerlessEndpointKeys", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListServerlessEndpointKeysArgs {
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

/**
 * Keys for endpoint authentication.
 */
export interface ListServerlessEndpointKeysResult {
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
 */
export function listServerlessEndpointKeysOutput(args: ListServerlessEndpointKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListServerlessEndpointKeysResult> {
    return pulumi.output(args).apply((a: any) => listServerlessEndpointKeys(a, opts))
}

export interface ListServerlessEndpointKeysOutputArgs {
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
