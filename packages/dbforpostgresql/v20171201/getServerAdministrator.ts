import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets information about a AAD server administrator.
 */
export function getServerAdministrator(args: GetServerAdministratorArgs, opts?: pulumi.InvokeOptions): Promise<GetServerAdministratorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql/v20171201:getServerAdministrator", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerAdministratorArgs {
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
export interface GetServerAdministratorResult {
    /**
     * The type of administrator.
     */
    readonly administratorType: string;
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
 */
export function getServerAdministratorOutput(args: GetServerAdministratorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerAdministratorResult> {
    return pulumi.output(args).apply((a: any) => getServerAdministrator(a, opts))
}

export interface GetServerAdministratorOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}