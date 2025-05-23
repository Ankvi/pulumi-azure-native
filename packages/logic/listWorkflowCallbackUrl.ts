import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the workflow callback Url.
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2016-06-01, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWorkflowCallbackUrl(args: ListWorkflowCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowCallbackUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:listWorkflowCallbackUrl", {
        "keyType": args.keyType,
        "notAfter": args.notAfter,
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowCallbackUrlArgs {
    /**
     * The key type.
     */
    keyType?: string | types.enums.KeyType;
    /**
     * The expiry time.
     */
    notAfter?: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The workflow name.
     */
    workflowName: string;
}

/**
 * The workflow trigger callback URL.
 */
export interface ListWorkflowCallbackUrlResult {
    /**
     * Gets the workflow trigger callback URL base path.
     */
    readonly basePath: string;
    /**
     * Gets the workflow trigger callback URL HTTP method.
     */
    readonly method: string;
    /**
     * Gets the workflow trigger callback URL query parameters.
     */
    readonly queries?: types.outputs.WorkflowTriggerListCallbackUrlQueriesResponse;
    /**
     * Gets the workflow trigger callback URL relative path.
     */
    readonly relativePath: string;
    /**
     * Gets the workflow trigger callback URL relative path parameters.
     */
    readonly relativePathParameters?: string[];
    /**
     * Gets the workflow trigger callback URL.
     */
    readonly value: string;
}
/**
 * Get the workflow callback Url.
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2016-06-01, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWorkflowCallbackUrlOutput(args: ListWorkflowCallbackUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWorkflowCallbackUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:listWorkflowCallbackUrl", {
        "keyType": args.keyType,
        "notAfter": args.notAfter,
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowCallbackUrlOutputArgs {
    /**
     * The key type.
     */
    keyType?: pulumi.Input<string | types.enums.KeyType>;
    /**
     * The expiry time.
     */
    notAfter?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workflow name.
     */
    workflowName: pulumi.Input<string>;
}