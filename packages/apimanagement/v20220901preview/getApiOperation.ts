import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the API Operation specified by its identifier.
 */
export function getApiOperation(args: GetApiOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetApiOperationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20220901preview:getApiOperation", {
        "apiId": args.apiId,
        "operationId": args.operationId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiOperationArgs {
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
}

/**
 * API Operation details.
 */
export interface GetApiOperationResult {
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
 */
export function getApiOperationOutput(args: GetApiOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiOperationResult> {
    return pulumi.output(args).apply((a: any) => getApiOperation(a, opts))
}

export interface GetApiOperationOutputArgs {
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
}