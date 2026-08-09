import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Task
 *
 * Uses Azure REST API version 2025-03-30-preview.
 *
 * Other available API versions: 2025-12-01-preview, 2026-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTask(args: GetTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetTaskResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getTask", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "taskName": args.taskName,
    }, opts);
}

export interface GetTaskArgs {
    /**
     * Migrate Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Task ARM name
     */
    taskName: string;
}

/**
 * Tasks resource.
 */
export interface GetTaskResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    readonly eTag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.TaskPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Task
 *
 * Uses Azure REST API version 2025-03-30-preview.
 *
 * Other available API versions: 2025-12-01-preview, 2026-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTaskOutput(args: GetTaskOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTaskResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getTask", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "taskName": args.taskName,
    }, opts);
}

export interface GetTaskOutputArgs {
    /**
     * Migrate Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Task ARM name
     */
    taskName: pulumi.Input<string>;
}