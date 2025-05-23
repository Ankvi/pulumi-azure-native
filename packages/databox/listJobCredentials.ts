import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This method gets the unencrypted secrets related to the job.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2022-12-01, 2023-03-01, 2023-12-01, 2024-02-01-preview, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databox [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listJobCredentials(args: ListJobCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListJobCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databox:listJobCredentials", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListJobCredentialsArgs {
    /**
     * The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    jobName: string;
    /**
     * The Resource Group Name
     */
    resourceGroupName: string;
}

/**
 * List of unencrypted credentials for accessing device.
 */
export interface ListJobCredentialsResult {
    /**
     * Link for the next set of unencrypted credentials.
     */
    readonly nextLink?: string;
    /**
     * List of unencrypted credentials.
     */
    readonly value?: types.outputs.UnencryptedCredentialsResponse[];
}
/**
 * This method gets the unencrypted secrets related to the job.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2022-12-01, 2023-03-01, 2023-12-01, 2024-02-01-preview, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databox [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listJobCredentialsOutput(args: ListJobCredentialsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListJobCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databox:listJobCredentials", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListJobCredentialsOutputArgs {
    /**
     * The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    jobName: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}