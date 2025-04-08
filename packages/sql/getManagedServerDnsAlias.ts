import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a server DNS alias.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedServerDnsAliasOutput(args: GetManagedServerDnsAliasOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedServerDnsAliasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getManagedServerDnsAlias", {
        "dnsAliasName": args.dnsAliasName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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