import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the fabric agent.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getFabricAgent(args: GetFabricAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datareplication:getFabricAgent", {
        "fabricAgentName": args.fabricAgentName,
        "fabricName": args.fabricName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFabricAgentArgs {
    /**
     * The fabric agent name.
     */
    fabricAgentName: string;
    /**
     * The fabric name.
     */
    fabricName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Fabric agent model.
 */
export interface GetFabricAgentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.FabricAgentModelPropertiesResponse;
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
 * Gets the details of the fabric agent.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getFabricAgentOutput(args: GetFabricAgentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFabricAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datareplication:getFabricAgent", {
        "fabricAgentName": args.fabricAgentName,
        "fabricName": args.fabricName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFabricAgentOutputArgs {
    /**
     * The fabric agent name.
     */
    fabricAgentName: pulumi.Input<string>;
    /**
     * The fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}