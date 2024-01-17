import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns details of the API version.
 * Azure REST API version: 2024-03-01.
 */
export function getApiVersion(args: GetApiVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetApiVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apicenter:getApiVersion", {
        "apiName": args.apiName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "versionName": args.versionName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetApiVersionArgs {
    /**
     * The name of the API.
     */
    apiName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of Azure API Center service.
     */
    serviceName: string;
    /**
     * The name of the API version.
     */
    versionName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * API version entity.
 */
export interface GetApiVersionResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Current lifecycle stage of the API.
     */
    readonly lifecycleStage: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * API version title.
     */
    readonly title: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns details of the API version.
 * Azure REST API version: 2024-03-01.
 */
export function getApiVersionOutput(args: GetApiVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiVersionResult> {
    return pulumi.output(args).apply((a: any) => getApiVersion(a, opts))
}

export interface GetApiVersionOutputArgs {
    /**
     * The name of the API.
     */
    apiName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The name of the API version.
     */
    versionName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}