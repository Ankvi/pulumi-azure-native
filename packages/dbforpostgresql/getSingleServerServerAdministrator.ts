import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets information about a AAD server administrator.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerServerAdministrator(args: GetSingleServerServerAdministratorArgs, opts?: pulumi.InvokeOptions): Promise<GetSingleServerServerAdministratorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getSingleServerServerAdministrator", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerServerAdministratorArgs {
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
 * Represents a and external administrator to be created.
 */
export interface GetSingleServerServerAdministratorResult {
    /**
     * The type of administrator.
     */
    readonly administratorType: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The server administrator login account name.
     */
    readonly login: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The server administrator Sid (Secure ID).
     */
    readonly sid: string;
    /**
     * The server Active Directory Administrator tenant id.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a AAD server administrator.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerServerAdministratorOutput(args: GetSingleServerServerAdministratorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSingleServerServerAdministratorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbforpostgresql:getSingleServerServerAdministrator", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerServerAdministratorOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}