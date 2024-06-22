import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the configuration details of the identity Provider configured in specified service instance.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2016-07-07, 2016-10-10, 2019-01-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getIdentityProvider(args: GetIdentityProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityProviderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getIdentityProvider", {
        "identityProviderName": args.identityProviderName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetIdentityProviderArgs {
    /**
     * Identity Provider Type identifier.
     */
    identityProviderName: string;
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
 * Identity Provider details.
 */
export interface GetIdentityProviderResult {
    /**
     * List of Allowed Tenants when configuring Azure Active Directory login.
     */
    readonly allowedTenants?: string[];
    /**
     * OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
     */
    readonly authority?: string;
    /**
     * Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
     */
    readonly clientId: string;
    /**
     * The client library to be used in the developer portal. Only applies to AAD and AAD B2C Identity Provider.
     */
    readonly clientLibrary?: string;
    /**
     * Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly clientSecret?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
     */
    readonly passwordResetPolicyName?: string;
    /**
     * Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
     */
    readonly profileEditingPolicyName?: string;
    /**
     * Signin Policy Name. Only applies to AAD B2C Identity Provider.
     */
    readonly signinPolicyName?: string;
    /**
     * The TenantId to use instead of Common when logging into Active Directory
     */
    readonly signinTenant?: string;
    /**
     * Signup Policy Name. Only applies to AAD B2C Identity Provider.
     */
    readonly signupPolicyName?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the configuration details of the identity Provider configured in specified service instance.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2016-07-07, 2016-10-10, 2019-01-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getIdentityProviderOutput(args: GetIdentityProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityProviderResult> {
    return pulumi.output(args).apply((a: any) => getIdentityProvider(a, opts))
}

export interface GetIdentityProviderOutputArgs {
    /**
     * Identity Provider Type identifier.
     */
    identityProviderName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}