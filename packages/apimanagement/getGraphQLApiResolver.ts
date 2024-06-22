import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the GraphQL API Resolver specified by its identifier.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getGraphQLApiResolver(args: GetGraphQLApiResolverArgs, opts?: pulumi.InvokeOptions): Promise<GetGraphQLApiResolverResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getGraphQLApiResolver", {
        "apiId": args.apiId,
        "resolverId": args.resolverId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGraphQLApiResolverArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: string;
    /**
     * Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance.
     */
    resolverId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * GraphQL API Resolver details.
 */
export interface GetGraphQLApiResolverResult {
    /**
     * Description of the resolver. May include HTML formatting tags.
     */
    readonly description?: string;
    /**
     * Resolver Name.
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Path is type/field being resolved.
     */
    readonly path?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the GraphQL API Resolver specified by its identifier.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getGraphQLApiResolverOutput(args: GetGraphQLApiResolverOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGraphQLApiResolverResult> {
    return pulumi.output(args).apply((a: any) => getGraphQLApiResolver(a, opts))
}

export interface GetGraphQLApiResolverOutputArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance.
     */
    resolverId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}