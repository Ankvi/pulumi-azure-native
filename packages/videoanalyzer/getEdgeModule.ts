import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves an existing edge module resource with the given name.
 * Azure REST API version: 2021-11-01-preview.
 */
export function getEdgeModule(args: GetEdgeModuleArgs, opts?: pulumi.InvokeOptions): Promise<GetEdgeModuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer:getEdgeModule", {
        "accountName": args.accountName,
        "edgeModuleName": args.edgeModuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEdgeModuleArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: string;
    /**
     * The Edge Module name.
     */
    edgeModuleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The representation of an edge module.
 */
export interface GetEdgeModuleResult {
    /**
     * Internal ID generated for the instance of the Video Analyzer edge module.
     */
    readonly edgeModuleId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.videoanalyzer.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves an existing edge module resource with the given name.
 * Azure REST API version: 2021-11-01-preview.
 */
export function getEdgeModuleOutput(args: GetEdgeModuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEdgeModuleResult> {
    return pulumi.output(args).apply((a: any) => getEdgeModule(a, opts))
}

export interface GetEdgeModuleOutputArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Edge Module name.
     */
    edgeModuleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
