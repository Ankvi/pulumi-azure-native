import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified Subscription keys.
 * Azure REST API version: 2022-09-01-preview.
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
 * Azure REST API version: 2022-09-01-preview.
 */
export function listWorkspaceSubscriptionSecretsOutput(args: ListWorkspaceSubscriptionSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceSubscriptionSecretsResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceSubscriptionSecrets(a, opts))
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
