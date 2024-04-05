import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container Apps Job Secrets Collection ARM resource.
 */
export function listJobSecrets(args: ListJobSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListJobSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20230801preview:listJobSecrets", {
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