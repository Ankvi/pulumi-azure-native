import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an agent link (web agent association) within a CDN profile.
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getProfileAgent(args: GetProfileAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getProfileAgent", {
        "agentName": args.agentName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProfileAgentArgs {
    /**
     * Name of the web agent association.
     */
    agentName: string;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An agent link (web agent association) within a CDN profile.
 */
export interface GetProfileAgentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * List of custom domains associated with this agent link.
     */
    readonly customDomains: types.outputs.ResourceReferenceResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning status of the profile agent association.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Reference to the web agent resource.
     */
    readonly webAgent: types.outputs.ResourceReferenceResponse;
}
/**
 * Gets an agent link (web agent association) within a CDN profile.
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getProfileAgentOutput(args: GetProfileAgentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProfileAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cdn:getProfileAgent", {
        "agentName": args.agentName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProfileAgentOutputArgs {
    /**
     * Name of the web agent association.
     */
    agentName: pulumi.Input<string>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}