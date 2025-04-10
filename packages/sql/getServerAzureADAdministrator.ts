import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a Azure Active Directory administrator.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2014-04-01, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getServerAzureADAdministrator(args: GetServerAzureADAdministratorArgs, opts?: pulumi.InvokeOptions): Promise<GetServerAzureADAdministratorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getServerAzureADAdministrator", {
        "administratorName": args.administratorName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerAzureADAdministratorArgs {
    /**
     * The name of server active directory administrator.
     */
    administratorName: string;
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
 * Azure Active Directory administrator.
 */
export interface GetServerAzureADAdministratorResult {
    /**
     * Type of the sever administrator.
     */
    readonly administratorType: string;
    /**
     * Azure Active Directory only Authentication enabled.
     */
    readonly azureADOnlyAuthentication: boolean;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Login name of the server administrator.
     */
    readonly login: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * SID (object ID) of the server administrator.
     */
    readonly sid: string;
    /**
     * Tenant ID of the administrator.
     */
    readonly tenantId?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a Azure Active Directory administrator.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2014-04-01, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getServerAzureADAdministratorOutput(args: GetServerAzureADAdministratorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerAzureADAdministratorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getServerAzureADAdministrator", {
        "administratorName": args.administratorName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerAzureADAdministratorOutputArgs {
    /**
     * The name of server active directory administrator.
     */
    administratorName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}