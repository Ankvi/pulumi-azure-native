import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the Single-Sign-On token for the API Management Service which is valid for 5 Minutes.
 */
export function getApiManagementServiceSsoToken(args: GetApiManagementServiceSsoTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetApiManagementServiceSsoTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20161010:getApiManagementServiceSsoToken", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiManagementServiceSsoTokenArgs {
    /**
     * The name of the resource group.
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
     * Redirect URL containing the SSO token.
     */
    readonly redirectUri?: string;
}
/**
 * Gets the Single-Sign-On token for the API Management Service which is valid for 5 Minutes.
 */
export function getApiManagementServiceSsoTokenOutput(args: GetApiManagementServiceSsoTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiManagementServiceSsoTokenResult> {
    return pulumi.output(args).apply((a: any) => getApiManagementServiceSsoToken(a, opts))
}

export interface GetApiManagementServiceSsoTokenOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}