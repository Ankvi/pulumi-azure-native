import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the details of an API release.
 */
export function getApiRelease(args: GetApiReleaseArgs, opts?: pulumi.InvokeOptions): Promise<GetApiReleaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20220901preview:getApiRelease", {
        "apiId": args.apiId,
        "releaseId": args.releaseId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiReleaseArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: string;
    /**
     * Release identifier within an API. Must be unique in the current API Management service instance.
     */
    releaseId: string;
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
 * ApiRelease details.
 */
export interface GetApiReleaseResult {
    /**
     * Identifier of the API the release belongs to.
     */
    readonly apiId?: string;
    /**
     * The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    readonly createdDateTime: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Release Notes
     */
    readonly notes?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The time the API release was updated.
     */
    readonly updatedDateTime: string;
}
/**
 * Returns the details of an API release.
 */
export function getApiReleaseOutput(args: GetApiReleaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiReleaseResult> {
    return pulumi.output(args).apply((a: any) => getApiRelease(a, opts))
}

export interface GetApiReleaseOutputArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: pulumi.Input<string>;
    /**
     * Release identifier within an API. Must be unique in the current API Management service instance.
     */
    releaseId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
