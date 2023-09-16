import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the configuration details of the identity Provider configured in specified service instance.
 */
export function getIdentityProvider(args: GetIdentityProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityProviderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20190101:getIdentityProvider", {
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
     * The name of the resource group.
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
     * Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft.
     */
    readonly clientSecret: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
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
     * Resource type for API Management resource.
     */
    readonly type: string;
}
/**
 * Gets the configuration details of the identity Provider configured in specified service instance.
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
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
