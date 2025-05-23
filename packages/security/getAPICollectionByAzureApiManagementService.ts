import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an Azure API Management API if it has been onboarded to Microsoft Defender for APIs. If an Azure API Management API is onboarded to Microsoft Defender for APIs, the system will monitor the operations within the Azure API Management API for intrusive behaviors and provide alerts for attacks that have been detected.
 *
 * Uses Azure REST API version 2023-11-15.
 */
export function getAPICollectionByAzureApiManagementService(args: GetAPICollectionByAzureApiManagementServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetAPICollectionByAzureApiManagementServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getAPICollectionByAzureApiManagementService", {
        "apiId": args.apiId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAPICollectionByAzureApiManagementServiceArgs {
    /**
     * API revision identifier. Must be unique in the API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
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
 * An API collection as represented by Microsoft Defender for APIs.
 */
export interface GetAPICollectionByAzureApiManagementServiceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The base URI for this API collection. All endpoints of this API collection extend this base URI.
     */
    readonly baseUrl: string;
    /**
     * The resource Id of the resource from where this API collection was discovered.
     */
    readonly discoveredVia: string;
    /**
     * The display name of the API collection.
     */
    readonly displayName: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The number of API endpoints discovered in this API collection.
     */
    readonly numberOfApiEndpoints: number;
    /**
     * The number of API endpoints in this API collection which are exposing sensitive data in their requests and/or responses.
     */
    readonly numberOfApiEndpointsWithSensitiveDataExposed: number;
    /**
     * The number of API endpoints in this API collection for which API traffic from the internet was observed.
     */
    readonly numberOfExternalApiEndpoints: number;
    /**
     * The number of API endpoints in this API collection that have not received any API traffic in the last 30 days.
     */
    readonly numberOfInactiveApiEndpoints: number;
    /**
     * The number of API endpoints in this API collection that are unauthenticated.
     */
    readonly numberOfUnauthenticatedApiEndpoints: number;
    /**
     * Gets the provisioning state of the API collection.
     */
    readonly provisioningState: string;
    /**
     * The highest priority sensitivity label from Microsoft Purview in this API collection.
     */
    readonly sensitivityLabel: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets an Azure API Management API if it has been onboarded to Microsoft Defender for APIs. If an Azure API Management API is onboarded to Microsoft Defender for APIs, the system will monitor the operations within the Azure API Management API for intrusive behaviors and provide alerts for attacks that have been detected.
 *
 * Uses Azure REST API version 2023-11-15.
 */
export function getAPICollectionByAzureApiManagementServiceOutput(args: GetAPICollectionByAzureApiManagementServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAPICollectionByAzureApiManagementServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getAPICollectionByAzureApiManagementService", {
        "apiId": args.apiId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAPICollectionByAzureApiManagementServiceOutputArgs {
    /**
     * API revision identifier. Must be unique in the API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
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