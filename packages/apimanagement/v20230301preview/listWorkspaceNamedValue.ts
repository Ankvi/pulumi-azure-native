import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the secret of the named value specified by its identifier.
 */
export function listWorkspaceNamedValue(args: ListWorkspaceNamedValueArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceNamedValueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:listWorkspaceNamedValue", {
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
 */
export function listWorkspaceNamedValueOutput(args: ListWorkspaceNamedValueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceNamedValueResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceNamedValue(a, opts))
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
