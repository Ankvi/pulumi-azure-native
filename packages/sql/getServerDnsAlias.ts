import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a server DNS alias.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getServerDnsAlias(args: GetServerDnsAliasArgs, opts?: pulumi.InvokeOptions): Promise<GetServerDnsAliasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getServerDnsAlias", {
        "dnsAliasName": args.dnsAliasName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerDnsAliasArgs {
    /**
     * The name of the server dns alias.
     */
    dnsAliasName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server that the alias is pointing to.
     */
    serverName: string;
}

/**
 * A server DNS alias.
 */
export interface GetServerDnsAliasResult {
    /**
     * The fully qualified DNS record for alias
     */
    readonly azureDnsRecord: string;
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
 * Gets a server DNS alias.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getServerDnsAliasOutput(args: GetServerDnsAliasOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerDnsAliasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getServerDnsAlias", {
        "dnsAliasName": args.dnsAliasName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerDnsAliasOutputArgs {
    /**
     * The name of the server dns alias.
     */
    dnsAliasName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server that the alias is pointing to.
     */
    serverName: pulumi.Input<string>;
}