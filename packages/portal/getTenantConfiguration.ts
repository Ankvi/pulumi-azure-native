import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the tenant configuration.
 * Azure REST API version: 2020-09-01-preview.
 */
export function getTenantConfiguration(args: GetTenantConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetTenantConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:portal:getTenantConfiguration", {
        "configurationName": args.configurationName,
    }, opts);
}

export interface GetTenantConfigurationArgs {
    /**
     * The configuration name. Value must be 'default'
     */
    configurationName: string;
}

/**
 * Tenant configuration.
 */
export interface GetTenantConfigurationResult {
    /**
     * When flag is set to true Markdown tile will require external storage configuration (URI). The inline content configuration will be prohibited.
     */
    readonly enforcePrivateMarkdownStorage?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the tenant configuration.
 * Azure REST API version: 2020-09-01-preview.
 */
export function getTenantConfigurationOutput(args: GetTenantConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTenantConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getTenantConfiguration(a, opts))
}

export interface GetTenantConfigurationOutputArgs {
    /**
     * The configuration name. Value must be 'default'
     */
    configurationName: pulumi.Input<string>;
}
