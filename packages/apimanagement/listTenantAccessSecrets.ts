import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get tenant access information details.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listTenantAccessSecretsOutput(args: ListTenantAccessSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListTenantAccessSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:listTenantAccessSecrets", {
        "accessName": args.accessName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
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