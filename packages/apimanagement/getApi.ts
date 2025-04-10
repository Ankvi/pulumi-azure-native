import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the API specified by its identifier.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2016-10-10, 2017-03-01, 2018-06-01-preview, 2020-12-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getApi(args: GetApiArgs, opts?: pulumi.InvokeOptions): Promise<GetApiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getApi", {
        "apiId": args.apiId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: string;
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
 * API details.
 */
export interface GetApiResult {
    /**
     * Describes the revision of the API. If no value is provided, default revision 1 is created
     */
    readonly apiRevision?: string;
    /**
     * Description of the API Revision.
     */
    readonly apiRevisionDescription?: string;
    /**
     * Type of API.
     */
    readonly apiType?: string;
    /**
     * Indicates the version identifier of the API if the API is versioned
     */
    readonly apiVersion?: string;
    /**
     * Description of the API Version.
     */
    readonly apiVersionDescription?: string;
    /**
     * Version set details
     */
    readonly apiVersionSet?: types.outputs.ApiVersionSetContractDetailsResponse;
    /**
     * A resource identifier for the related ApiVersionSet.
     */
    readonly apiVersionSetId?: string;
    /**
     * Collection of authentication settings included into this API.
     */
    readonly authenticationSettings?: types.outputs.AuthenticationSettingsContractResponse;
    /**
     * Contact information for the API.
     */
    readonly contact?: types.outputs.ApiContactInformationResponse;
    /**
     * Description of the API. May include HTML formatting tags.
     */
    readonly description?: string;
    /**
     * API name. Must be 1 to 300 characters long.
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Indicates if API revision is current api revision.
     */
    readonly isCurrent?: boolean;
    /**
     * Indicates if API revision is accessible via the gateway.
     */
    readonly isOnline: boolean;
    /**
     * License information for the API.
     */
    readonly license?: types.outputs.ApiLicenseInformationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     */
    readonly path: string;
    /**
     * Describes on which protocols the operations in this API can be invoked.
     */
    readonly protocols?: string[];
    /**
     * Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
     */
    readonly serviceUrl?: string;
    /**
     * API identifier of the source API.
     */
    readonly sourceApiId?: string;
    /**
     * Protocols over which API is made available.
     */
    readonly subscriptionKeyParameterNames?: types.outputs.SubscriptionKeyParameterNamesContractResponse;
    /**
     * Specifies whether an API or Product subscription is required for accessing the API.
     */
    readonly subscriptionRequired?: boolean;
    /**
     *  A URL to the Terms of Service for the API. MUST be in the format of a URL.
     */
    readonly termsOfServiceUrl?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the API specified by its identifier.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2016-10-10, 2017-03-01, 2018-06-01-preview, 2020-12-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getApiOutput(args: GetApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getApi", {
        "apiId": args.apiId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiOutputArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}