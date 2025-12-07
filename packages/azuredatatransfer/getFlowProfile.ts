import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the specified FlowProfile resource.
 *
 * Uses Azure REST API version 2025-05-30-preview.
 */
export function getFlowProfile(args: GetFlowProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:getFlowProfile", {
        "flowProfileName": args.flowProfileName,
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowProfileArgs {
    /**
     * The name of the FlowProfile resource to operate on. Must be 3 to 64 characters long and contain only alphanumeric characters or hyphens.
     */
    flowProfileName: string;
    /**
     * The name of the pipeline on which to operate.
     */
    pipelineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a FlowProfile Azure resource, which defines a data replication scenario with a specific data classification and a set of configurable policy rules.
 */
export interface GetFlowProfileResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The set of configuration properties that define the behavior and rules of the FlowProfile.
     */
    readonly properties: types.outputs.FlowProfilePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves the specified FlowProfile resource.
 *
 * Uses Azure REST API version 2025-05-30-preview.
 */
export function getFlowProfileOutput(args: GetFlowProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFlowProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:getFlowProfile", {
        "flowProfileName": args.flowProfileName,
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowProfileOutputArgs {
    /**
     * The name of the FlowProfile resource to operate on. Must be 3 to 64 characters long and contain only alphanumeric characters or hyphens.
     */
    flowProfileName: pulumi.Input<string>;
    /**
     * The name of the pipeline on which to operate.
     */
    pipelineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}