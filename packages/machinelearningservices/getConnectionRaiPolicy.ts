import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure OpenAI Content Filters resource.
 * Azure REST API version: 2024-04-01-preview.
 */
export function getConnectionRaiPolicy(args: GetConnectionRaiPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionRaiPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getConnectionRaiPolicy", {
        "connectionName": args.connectionName,
        "raiPolicyName": args.raiPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetConnectionRaiPolicyArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: string;
    /**
     * Name of the Rai Policy.
     */
    raiPolicyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: string;
}

/**
 * Azure OpenAI Content Filters resource.
 */
export interface GetConnectionRaiPolicyResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure OpenAI Content Filters properties.
     */
    readonly properties: types.outputs.RaiPolicyPropertiesResponse;
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
 * Azure OpenAI Content Filters resource.
 * Azure REST API version: 2024-04-01-preview.
 */
export function getConnectionRaiPolicyOutput(args: GetConnectionRaiPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectionRaiPolicyResult> {
    return pulumi.output(args).apply((a: any) => getConnectionRaiPolicy(a, opts))
}

export interface GetConnectionRaiPolicyOutputArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: pulumi.Input<string>;
    /**
     * Name of the Rai Policy.
     */
    raiPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}