import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the backend specified by its identifier.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBackend(args: GetBackendArgs, opts?: pulumi.InvokeOptions): Promise<GetBackendResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getBackend", {
        "backendId": args.backendId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetBackendArgs {
    /**
     * Identifier of the Backend entity. Must be unique in the current API Management service instance.
     */
    backendId: string;
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
 * Backend details.
 */
export interface GetBackendResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Backend Circuit Breaker Configuration
     */
    readonly circuitBreaker?: types.outputs.BackendCircuitBreakerResponse;
    /**
     * Backend Credentials Contract Properties
     */
    readonly credentials?: types.outputs.BackendCredentialsContractResponse;
    /**
     * Backend Description.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Backend Properties contract
     */
    readonly properties: types.outputs.BackendPropertiesResponse;
    /**
     * Backend communication protocol.
     */
    readonly protocol: string;
    /**
     * Backend gateway Contract Properties
     */
    readonly proxy?: types.outputs.BackendProxyContractResponse;
    /**
     * Management Uri of the Resource in External System. This URL can be the Arm Resource Id of Logic Apps, Function Apps or API Apps.
     */
    readonly resourceId?: string;
    /**
     * Backend Title.
     */
    readonly title?: string;
    /**
     * Backend TLS Properties
     */
    readonly tls?: types.outputs.BackendTlsPropertiesResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Runtime Url of the Backend.
     */
    readonly url: string;
}
/**
 * Gets the details of the backend specified by its identifier.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBackendOutput(args: GetBackendOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBackendResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getBackend", {
        "backendId": args.backendId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetBackendOutputArgs {
    /**
     * Identifier of the Backend entity. Must be unique in the current API Management service instance.
     */
    backendId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}