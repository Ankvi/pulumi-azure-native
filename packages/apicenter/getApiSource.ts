import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns details of the API source.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getApiSource(args: GetApiSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetApiSourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apicenter:getApiSource", {
        "apiSourceName": args.apiSourceName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetApiSourceArgs {
    /**
     * The name of the API.
     */
    apiSourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of Azure API Center service.
     */
    serviceName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * API source entity.
 */
export interface GetApiSourceResult {
    /**
     * API source configuration for Azure API Management.
     */
    readonly azureApiManagementSource?: types.outputs.AzureApiManagementSourceResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Indicates if the specification should be imported along with metadata.
     */
    readonly importSpecification?: string;
    /**
     * The state of the API source link
     */
    readonly linkState: types.outputs.LinkStateResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The target environment resource ID.
     */
    readonly targetEnvironmentId?: string;
    /**
     * The target lifecycle stage.
     */
    readonly targetLifecycleStage?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns details of the API source.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getApiSourceOutput(args: GetApiSourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApiSourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apicenter:getApiSource", {
        "apiSourceName": args.apiSourceName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetApiSourceOutputArgs {
    /**
     * The name of the API.
     */
    apiSourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}