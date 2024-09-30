import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the system.
 * Azure REST API version: 2024-04-01-preview.
 */
export function getSystem(args: GetSystemArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getSystem", {
        "agentResourceName": args.agentResourceName,
        "resourceGroupName": args.resourceGroupName,
        "systemResourceName": args.systemResourceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSystemArgs {
    /**
     * Business Application Agent Name
     */
    agentResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the system.
     */
    systemResourceName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Describes the system within the agent.
 */
export interface GetSystemResult {
    /**
     * The configuration of the system.
     */
    readonly configuration: types.outputs.SapSystemsConfigurationResponse;
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    readonly lastModifiedTimeUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the system.
     */
    readonly status?: string;
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
 * Gets the system.
 * Azure REST API version: 2024-04-01-preview.
 */
export function getSystemOutput(args: GetSystemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getSystem", {
        "agentResourceName": args.agentResourceName,
        "resourceGroupName": args.resourceGroupName,
        "systemResourceName": args.systemResourceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSystemOutputArgs {
    /**
     * Business Application Agent Name
     */
    agentResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the system.
     */
    systemResourceName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}