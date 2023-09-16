import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Keys for endpoint authentication.
 * Azure REST API version: 2023-04-01.
 */
export function listOnlineEndpointKeys(args: ListOnlineEndpointKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListOnlineEndpointKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listOnlineEndpointKeys", {
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListOnlineEndpointKeysArgs {
    /**
     * Online Endpoint name.
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
export interface ListOnlineEndpointKeysResult {
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
 */
export function listOnlineEndpointKeysOutput(args: ListOnlineEndpointKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListOnlineEndpointKeysResult> {
    return pulumi.output(args).apply((a: any) => listOnlineEndpointKeys(a, opts))
}

export interface ListOnlineEndpointKeysOutputArgs {
    /**
     * Online Endpoint name.
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
