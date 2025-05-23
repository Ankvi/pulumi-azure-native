import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified Subscription keys.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWorkspaceSubscriptionSecrets(args: ListWorkspaceSubscriptionSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceSubscriptionSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:listWorkspaceSubscriptionSecrets", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "sid": args.sid,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface ListWorkspaceSubscriptionSecretsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
     */
    sid: string;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * Subscription keys.
 */
export interface ListWorkspaceSubscriptionSecretsResult {
    /**
     * Subscription primary key.
     */
    readonly primaryKey?: string;
    /**
     * Subscription secondary key.
     */
    readonly secondaryKey?: string;
}
/**
 * Gets the specified Subscription keys.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWorkspaceSubscriptionSecretsOutput(args: ListWorkspaceSubscriptionSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWorkspaceSubscriptionSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:listWorkspaceSubscriptionSecrets", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "sid": args.sid,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface ListWorkspaceSubscriptionSecretsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
     */
    sid: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}