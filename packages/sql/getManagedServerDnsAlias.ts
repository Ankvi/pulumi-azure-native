import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a server DNS alias.
 * Azure REST API version: 2021-11-01.
 */
export function getManagedServerDnsAlias(args: GetManagedServerDnsAliasArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedServerDnsAliasResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getManagedServerDnsAlias", {
        "dnsAliasName": args.dnsAliasName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedServerDnsAliasArgs {
    dnsAliasName: string;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * A managed server DNS alias.
 */
export interface GetManagedServerDnsAliasResult {
    /**
     * The fully qualified DNS record for managed server alias
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
     * The fully qualified public DNS record for managed server alias
     */
    readonly publicAzureDnsRecord: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a server DNS alias.
 * Azure REST API version: 2021-11-01.
 */
export function getManagedServerDnsAliasOutput(args: GetManagedServerDnsAliasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedServerDnsAliasResult> {
    return pulumi.output(args).apply((a: any) => getManagedServerDnsAlias(a, opts))
}

export interface GetManagedServerDnsAliasOutputArgs {
    dnsAliasName: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}
