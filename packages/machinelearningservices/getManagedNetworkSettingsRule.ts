import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an outbound rule from the managed network of a machine learning workspace.
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01-preview.
 */
export function getManagedNetworkSettingsRule(args: GetManagedNetworkSettingsRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedNetworkSettingsRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getManagedNetworkSettingsRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetManagedNetworkSettingsRuleArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the workspace managed network outbound rule
     */
    ruleName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Outbound Rule Basic Resource for the managed network of a machine learning workspace.
 */
export interface GetManagedNetworkSettingsRuleResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Outbound Rule for the managed network of a machine learning workspace.
     */
    readonly properties: types.outputs.FqdnOutboundRuleResponse | types.outputs.PrivateEndpointOutboundRuleResponse | types.outputs.ServiceTagOutboundRuleResponse;
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
 * Gets an outbound rule from the managed network of a machine learning workspace.
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01-preview.
 */
export function getManagedNetworkSettingsRuleOutput(args: GetManagedNetworkSettingsRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedNetworkSettingsRuleResult> {
    return pulumi.output(args).apply((a: any) => getManagedNetworkSettingsRule(a, opts))
}

export interface GetManagedNetworkSettingsRuleOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the workspace managed network outbound rule
     */
    ruleName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}