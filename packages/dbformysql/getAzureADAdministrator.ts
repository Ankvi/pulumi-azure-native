import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about an azure ad administrator.
 *
 * Uses Azure REST API version 2022-01-01.
 *
 * Other available API versions: 2023-06-01-preview, 2023-06-30, 2023-12-30.
 */
export function getAzureADAdministrator(args: GetAzureADAdministratorArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureADAdministratorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql:getAzureADAdministrator", {
        "administratorName": args.administratorName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetAzureADAdministratorArgs {
    /**
     * The name of the Azure AD Administrator.
     */
    administratorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Represents a Administrator.
 */
export interface GetAzureADAdministratorResult {
    /**
     * Type of the sever administrator.
     */
    readonly administratorType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The resource id of the identity used for AAD Authentication.
     */
    readonly identityResourceId?: string;
    /**
     * Login name of the server administrator.
     */
    readonly login?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * SID (object ID) of the server administrator.
     */
    readonly sid?: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tenant ID of the administrator.
     */
    readonly tenantId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about an azure ad administrator.
 *
 * Uses Azure REST API version 2022-01-01.
 *
 * Other available API versions: 2023-06-01-preview, 2023-06-30, 2023-12-30.
 */
export function getAzureADAdministratorOutput(args: GetAzureADAdministratorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureADAdministratorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbformysql:getAzureADAdministrator", {
        "administratorName": args.administratorName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetAzureADAdministratorOutputArgs {
    /**
     * The name of the Azure AD Administrator.
     */
    administratorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}