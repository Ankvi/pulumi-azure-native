import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the Api Version Set specified by its identifier.
 */
export function getWorkspaceApiVersionSet(args: GetWorkspaceApiVersionSetArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceApiVersionSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:getWorkspaceApiVersionSet", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "versionSetId": args.versionSetId,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceApiVersionSetArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Api Version Set identifier. Must be unique in the current API Management service instance.
     */
    versionSetId: string;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * API Version Set Contract details.
 */
export interface GetWorkspaceApiVersionSetResult {
    /**
     * Description of API Version Set.
     */
    readonly description?: string;
    /**
     * Name of API Version Set
     */
    readonly displayName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     */
    readonly versionHeaderName?: string;
    /**
     * Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     */
    readonly versionQueryName?: string;
    /**
     * An value that determines where the API Version identifier will be located in a HTTP request.
     */
    readonly versioningScheme: string;
}
/**
 * Gets the details of the Api Version Set specified by its identifier.
 */
export function getWorkspaceApiVersionSetOutput(args: GetWorkspaceApiVersionSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceApiVersionSetResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceApiVersionSet(a, opts))
}

export interface GetWorkspaceApiVersionSetOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Api Version Set identifier. Must be unique in the current API Management service instance.
     */
    versionSetId: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}
