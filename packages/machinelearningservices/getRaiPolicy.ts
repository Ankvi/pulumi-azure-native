import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure OpenAI Content Filters resource.
 * Azure REST API version: 2024-04-01-preview.
 */
export function getRaiPolicy(args: GetRaiPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetRaiPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getRaiPolicy", {
        "endpointName": args.endpointName,
        "raiPolicyName": args.raiPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetRaiPolicyArgs {
    /**
     * Name of the endpoint resource.
     */
    endpointName: string;
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
export interface GetRaiPolicyResult {
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
export function getRaiPolicyOutput(args: GetRaiPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRaiPolicyResult> {
    return pulumi.output(args).apply((a: any) => getRaiPolicy(a, opts))
}

export interface GetRaiPolicyOutputArgs {
    /**
     * Name of the endpoint resource.
     */
    endpointName: pulumi.Input<string>;
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