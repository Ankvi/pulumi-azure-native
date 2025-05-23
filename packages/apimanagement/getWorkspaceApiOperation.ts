import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the API Operation specified by its identifier.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkspaceApiOperation(args: GetWorkspaceApiOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceApiOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getWorkspaceApiOperation", {
        "apiId": args.apiId,
        "operationId": args.operationId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceApiOperationArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: string;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    operationId: string;
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
 * API Operation details.
 */
export interface GetWorkspaceApiOperationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Description of the operation. May include HTML formatting tags.
     */
    readonly description?: string;
    /**
     * Operation Name.
     */
    readonly displayName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    readonly method: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Operation Policies
     */
    readonly policies?: string;
    /**
     * An entity containing request details.
     */
    readonly request?: types.outputs.RequestContractResponse;
    /**
     * Array of Operation responses.
     */
    readonly responses?: types.outputs.ResponseContractResponse[];
    /**
     * Collection of URL template parameters.
     */
    readonly templateParameters?: types.outputs.ParameterContractResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    readonly urlTemplate: string;
}
/**
 * Gets the details of the API Operation specified by its identifier.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkspaceApiOperationOutput(args: GetWorkspaceApiOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceApiOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getWorkspaceApiOperation", {
        "apiId": args.apiId,
        "operationId": args.operationId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceApiOperationOutputArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    operationId: pulumi.Input<string>;
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