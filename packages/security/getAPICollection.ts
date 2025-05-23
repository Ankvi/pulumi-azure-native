import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an Azure API Management API if it has been onboarded to Defender for APIs. If an Azure API Management API is onboarded to Defender for APIs, the system will monitor the operations within the Azure API Management API for intrusive behaviors and provide alerts for attacks that have been detected.
 *
 * Uses Azure REST API version 2022-11-20-preview.
 */
export function getAPICollection(args: GetAPICollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetAPICollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getAPICollection", {
        "apiCollectionId": args.apiCollectionId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAPICollectionArgs {
    /**
     * A string representing the apiCollections resource within the Microsoft.Security provider namespace. This string matches the Azure API Management API name.
     */
    apiCollectionId: string;
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
 * An API collection as represented by Defender for APIs.
 */
export interface GetAPICollectionResult {
    /**
     * Additional data regarding the API collection.
     */
    readonly additionalData?: {[key: string]: string};
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The display name of the Azure API Management API.
     */
    readonly displayName?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets an Azure API Management API if it has been onboarded to Defender for APIs. If an Azure API Management API is onboarded to Defender for APIs, the system will monitor the operations within the Azure API Management API for intrusive behaviors and provide alerts for attacks that have been detected.
 *
 * Uses Azure REST API version 2022-11-20-preview.
 */
export function getAPICollectionOutput(args: GetAPICollectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAPICollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getAPICollection", {
        "apiCollectionId": args.apiCollectionId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAPICollectionOutputArgs {
    /**
     * A string representing the apiCollections resource within the Microsoft.Security provider namespace. This string matches the Azure API Management API name.
     */
    apiCollectionId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}