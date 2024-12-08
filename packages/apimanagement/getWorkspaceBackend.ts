import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the backend specified by its identifier.
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-05-01, 2024-06-01-preview.
 */
export function getWorkspaceBackend(args: GetWorkspaceBackendArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceBackendResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getWorkspaceBackend", {
        "backendId": args.backendId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceBackendArgs {
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
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * Backend details.
 */
export interface GetWorkspaceBackendResult {
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
    readonly pool?: types.outputs.BackendBaseParametersResponsePool;
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
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-05-01, 2024-06-01-preview.
 */
export function getWorkspaceBackendOutput(args: GetWorkspaceBackendOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceBackendResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getWorkspaceBackend", {
        "backendId": args.backendId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceBackendOutputArgs {
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
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}