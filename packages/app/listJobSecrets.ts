import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container Apps Job Secrets Collection ARM resource.
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-03-01.
 */
export function listJobSecrets(args: ListJobSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListJobSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:listJobSecrets", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListJobSecretsArgs {
    /**
     * Job Name
     */
    jobName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Container Apps Job Secrets Collection ARM resource.
 */
export interface ListJobSecretsResult {
    /**
     * Collection of resources.
     */
    readonly value: types.outputs.SecretResponse[];
}
/**
 * Container Apps Job Secrets Collection ARM resource.
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-03-01.
 */
export function listJobSecretsOutput(args: ListJobSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListJobSecretsResult> {
    return pulumi.output(args).apply((a: any) => listJobSecrets(a, opts))
}

export interface ListJobSecretsOutputArgs {
    /**
     * Job Name
     */
    jobName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}