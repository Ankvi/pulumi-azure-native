import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List sensitive environment variables of Job execution.
 * Azure REST API version: 2024-05-01-preview.
 */
export function listJobExecutionEnvSecrets(args: ListJobExecutionEnvSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListJobExecutionEnvSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:listJobExecutionEnvSecrets", {
        "jobExecutionName": args.jobExecutionName,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListJobExecutionEnvSecretsArgs {
    /**
     * The name of the Job execution.
     */
    jobExecutionName: string;
    /**
     * The name of the Job resource.
     */
    jobName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Secret environment variable collection.
 */
export interface ListJobExecutionEnvSecretsResult {
    /**
     * Collection of resources.
     */
    readonly value: types.outputs.SecretResponse[];
}
/**
 * List sensitive environment variables of Job execution.
 * Azure REST API version: 2024-05-01-preview.
 */
export function listJobExecutionEnvSecretsOutput(args: ListJobExecutionEnvSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListJobExecutionEnvSecretsResult> {
    return pulumi.output(args).apply((a: any) => listJobExecutionEnvSecrets(a, opts))
}

export interface ListJobExecutionEnvSecretsOutputArgs {
    /**
     * The name of the Job execution.
     */
    jobExecutionName: pulumi.Input<string>;
    /**
     * The name of the Job resource.
     */
    jobName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}