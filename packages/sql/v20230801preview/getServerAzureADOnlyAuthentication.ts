import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a specific Azure Active Directory only authentication property.
 */
export function getServerAzureADOnlyAuthentication(args: GetServerAzureADOnlyAuthenticationArgs, opts?: pulumi.InvokeOptions): Promise<GetServerAzureADOnlyAuthenticationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230801preview:getServerAzureADOnlyAuthentication", {
        "authenticationName": args.authenticationName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerAzureADOnlyAuthenticationArgs {
    /**
     * The name of server azure active directory only authentication.
     */
    authenticationName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Azure Active Directory only authentication.
 */
export interface GetServerAzureADOnlyAuthenticationResult {
    /**
     * Azure Active Directory only Authentication enabled.
     */
    readonly azureADOnlyAuthentication: boolean;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a specific Azure Active Directory only authentication property.
 */
export function getServerAzureADOnlyAuthenticationOutput(args: GetServerAzureADOnlyAuthenticationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerAzureADOnlyAuthenticationResult> {
    return pulumi.output(args).apply((a: any) => getServerAzureADOnlyAuthentication(a, opts))
}

export interface GetServerAzureADOnlyAuthenticationOutputArgs {
    /**
     * The name of server azure active directory only authentication.
     */
    authenticationName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}