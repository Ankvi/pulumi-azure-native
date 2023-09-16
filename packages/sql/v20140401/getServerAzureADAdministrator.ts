import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns an server Administrator.
 */
export function getServerAzureADAdministrator(args: GetServerAzureADAdministratorArgs, opts?: pulumi.InvokeOptions): Promise<GetServerAzureADAdministratorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20140401:getServerAzureADAdministrator", {
        "administratorName": args.administratorName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerAzureADAdministratorArgs {
    /**
     * Name of the server administrator resource.
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
 * An server Active Directory Administrator.
 */
export interface GetServerAzureADAdministratorResult {
    /**
     * The type of administrator.
     */
    readonly administratorType: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The server administrator login value.
     */
    readonly login: string;
    /**
     * Resource name.
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * Returns an server Administrator.
 */
export function getServerAzureADAdministratorOutput(args: GetServerAzureADAdministratorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerAzureADAdministratorResult> {
    return pulumi.output(args).apply((a: any) => getServerAzureADAdministrator(a, opts))
}

export interface GetServerAzureADAdministratorOutputArgs {
    /**
     * Name of the server administrator resource.
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
