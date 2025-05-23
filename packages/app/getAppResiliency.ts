import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get container app resiliency policy.
 *
 * Uses Azure REST API version 2024-10-02-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAppResiliency(args: GetAppResiliencyArgs, opts?: pulumi.InvokeOptions): Promise<GetAppResiliencyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getAppResiliency", {
        "appName": args.appName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppResiliencyArgs {
    /**
     * Name of the Container App.
     */
    appName: string;
    /**
     * Name of the resiliency policy.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Configuration to setup App Resiliency
 */
export interface GetAppResiliencyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Policy that defines circuit breaker conditions
     */
    readonly circuitBreakerPolicy?: types.outputs.CircuitBreakerPolicyResponse;
    /**
     * Defines parameters for http connection pooling
     */
    readonly httpConnectionPool?: types.outputs.HttpConnectionPoolResponse;
    /**
     * Policy that defines http request retry conditions
     */
    readonly httpRetryPolicy?: types.outputs.HttpRetryPolicyResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Defines parameters for tcp connection pooling
     */
    readonly tcpConnectionPool?: types.outputs.TcpConnectionPoolResponse;
    /**
     * Policy that defines tcp request retry conditions
     */
    readonly tcpRetryPolicy?: types.outputs.TcpRetryPolicyResponse;
    /**
     * Policy to set request timeouts
     */
    readonly timeoutPolicy?: types.outputs.TimeoutPolicyResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get container app resiliency policy.
 *
 * Uses Azure REST API version 2024-10-02-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAppResiliencyOutput(args: GetAppResiliencyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAppResiliencyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getAppResiliency", {
        "appName": args.appName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppResiliencyOutputArgs {
    /**
     * Name of the Container App.
     */
    appName: pulumi.Input<string>;
    /**
     * Name of the resiliency policy.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}