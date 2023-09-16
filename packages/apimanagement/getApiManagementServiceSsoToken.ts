import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the Single-Sign-On token for the API Management Service which is valid for 5 Minutes.
 * Azure REST API version: 2022-08-01.
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
 * Azure REST API version: 2022-08-01.
 */
export function getApiManagementServiceSsoTokenOutput(args: GetApiManagementServiceSsoTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiManagementServiceSsoTokenResult> {
    return pulumi.output(args).apply((a: any) => getApiManagementServiceSsoToken(a, opts))
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
