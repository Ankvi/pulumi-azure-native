import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a server DNS alias.
 */
export function getServerDnsAlias(args: GetServerDnsAliasArgs, opts?: pulumi.InvokeOptions): Promise<GetServerDnsAliasResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getServerDnsAlias", {
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
 */
export function getServerDnsAliasOutput(args: GetServerDnsAliasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerDnsAliasResult> {
    return pulumi.output(args).apply((a: any) => getServerDnsAlias(a, opts))
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