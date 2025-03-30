import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List sensitive environment variables of the Job.
 *
 * Uses Azure REST API version 2024-05-01-preview.
 */
export function listJobEnvSecrets(args: ListJobEnvSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListJobEnvSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:listJobEnvSecrets", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListJobEnvSecretsArgs {
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
export interface ListJobEnvSecretsResult {
    /**
     * Collection of resources.
     */
    readonly value: types.outputs.SecretResponse[];
}
/**
 * List sensitive environment variables of the Job.
 *
 * Uses Azure REST API version 2024-05-01-preview.
 */
export function listJobEnvSecretsOutput(args: ListJobEnvSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListJobEnvSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appplatform:listJobEnvSecrets", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListJobEnvSecretsOutputArgs {
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