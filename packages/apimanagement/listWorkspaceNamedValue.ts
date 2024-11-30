import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the secret of the named value specified by its identifier.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function listWorkspaceNamedValue(args: ListWorkspaceNamedValueArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceNamedValueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:listWorkspaceNamedValue", {
        "namedValueId": args.namedValueId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface ListWorkspaceNamedValueArgs {
    /**
     * Identifier of the NamedValue.
     */
    namedValueId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
 */
export interface ListWorkspaceNamedValueResult {
    /**
     * This is secret value of the NamedValue entity.
     */
    readonly value?: string;
}
/**
 * Gets the secret of the named value specified by its identifier.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function listWorkspaceNamedValueOutput(args: ListWorkspaceNamedValueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceNamedValueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:listWorkspaceNamedValue", {
        "namedValueId": args.namedValueId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface ListWorkspaceNamedValueOutputArgs {
    /**
     * Identifier of the NamedValue.
     */
    namedValueId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}