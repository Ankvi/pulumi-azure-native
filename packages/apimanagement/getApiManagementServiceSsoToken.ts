import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the Single-Sign-On token for the API Management Service which is valid for 5 Minutes.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2016-10-10, 2017-03-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getApiManagementServiceSsoToken(args: GetApiManagementServiceSsoTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetApiManagementServiceSsoTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getApiManagementServiceSsoToken", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiManagementServiceSsoTokenArgs {
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
 * The response of the GetSsoToken operation.
 */
export interface GetApiManagementServiceSsoTokenResult {
    /**
     * Redirect URL to the Publisher Portal containing the SSO token.
     */
    readonly redirectUri?: string;
}
/**
 * Gets the Single-Sign-On token for the API Management Service which is valid for 5 Minutes.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2016-10-10, 2017-03-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getApiManagementServiceSsoTokenOutput(args: GetApiManagementServiceSsoTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApiManagementServiceSsoTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getApiManagementServiceSsoToken", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiManagementServiceSsoTokenOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}