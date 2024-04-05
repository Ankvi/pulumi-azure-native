import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets secrets related to Machine Learning compute (storage keys, service credentials, etc).
 */
export function listComputeKeys(args: ListComputeKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListComputeKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20240101preview:listComputeKeys", {
        "computeName": args.computeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListComputeKeysArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    computeName: string;
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
 * Secrets related to a Machine Learning compute. Might differ for every type of compute.
 */
export interface ListComputeKeysResult {
    /**
     * The type of compute
     */
    readonly computeType: string;
}
/**
 * Gets secrets related to Machine Learning compute (storage keys, service credentials, etc).
 */
export function listComputeKeysOutput(args: ListComputeKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListComputeKeysResult> {
    return pulumi.output(args).apply((a: any) => listComputeKeys(a, opts))
}

export interface ListComputeKeysOutputArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    computeName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}