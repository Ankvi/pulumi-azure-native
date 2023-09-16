import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get tenant access information details.
 * Azure REST API version: 2022-08-01.
 */
export function listTenantAccessSecrets(args: ListTenantAccessSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListTenantAccessSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:listTenantAccessSecrets", {
        "accessName": args.accessName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListTenantAccessSecretsArgs {
    /**
     * The identifier of the Access configuration.
     */
    accessName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Tenant access information contract of the API Management service.
 */
export interface ListTenantAccessSecretsResult {
    /**
     * Determines whether direct access is enabled.
     */
    readonly enabled?: boolean;
    /**
     * Access Information type ('access' or 'gitAccess')
     */
    readonly id?: string;
    /**
     * Primary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly primaryKey?: string;
    /**
     * Principal (User) Identifier.
     */
    readonly principalId?: string;
    /**
     * Secondary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly secondaryKey?: string;
}
/**
 * Get tenant access information details.
 * Azure REST API version: 2022-08-01.
 */
export function listTenantAccessSecretsOutput(args: ListTenantAccessSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListTenantAccessSecretsResult> {
    return pulumi.output(args).apply((a: any) => listTenantAccessSecrets(a, opts))
}

export interface ListTenantAccessSecretsOutputArgs {
    /**
     * The identifier of the Access configuration.
     */
    accessName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
