import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-08-01-preview, 2023-10-01.
 */
export function getFeaturesetVersion(args: GetFeaturesetVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetFeaturesetVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getFeaturesetVersion", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetFeaturesetVersionArgs {
    /**
     * Container name. This is case-sensitive.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Version identifier. This is case-sensitive.
     */
    version: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Azure Resource Manager resource envelope.
 */
export interface GetFeaturesetVersionResult {
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly featuresetVersionProperties: types.outputs.FeaturesetVersionResponse;
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
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Azure Resource Manager resource envelope.
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-08-01-preview, 2023-10-01.
 */
export function getFeaturesetVersionOutput(args: GetFeaturesetVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFeaturesetVersionResult> {
    return pulumi.output(args).apply((a: any) => getFeaturesetVersion(a, opts))
}

export interface GetFeaturesetVersionOutputArgs {
    /**
     * Container name. This is case-sensitive.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Version identifier. This is case-sensitive.
     */
    version: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
