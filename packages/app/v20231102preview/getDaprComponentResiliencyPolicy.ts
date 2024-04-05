import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dapr Component Resiliency Policy.
 */
export function getDaprComponentResiliencyPolicy(args: GetDaprComponentResiliencyPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDaprComponentResiliencyPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20231102preview:getDaprComponentResiliencyPolicy", {
        "componentName": args.componentName,
        "environmentName": args.environmentName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDaprComponentResiliencyPolicyArgs {
    /**
     * Name of the Dapr Component.
     */
    componentName: string;
    /**
     * Name of the Managed Environment.
     */
    environmentName: string;
    /**
     * Name of the Dapr Component Resiliency Policy.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Dapr Component Resiliency Policy.
 */
export interface GetDaprComponentResiliencyPolicyResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The optional inbound component resiliency policy configuration
     */
    readonly inboundPolicy?: types.outputs.DaprComponentResiliencyPolicyConfigurationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The optional outbound component resiliency policy configuration
     */
    readonly outboundPolicy?: types.outputs.DaprComponentResiliencyPolicyConfigurationResponse;
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
 * Dapr Component Resiliency Policy.
 */
export function getDaprComponentResiliencyPolicyOutput(args: GetDaprComponentResiliencyPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDaprComponentResiliencyPolicyResult> {
    return pulumi.output(args).apply((a: any) => getDaprComponentResiliencyPolicy(a, opts))
}

export interface GetDaprComponentResiliencyPolicyOutputArgs {
    /**
     * Name of the Dapr Component.
     */
    componentName: pulumi.Input<string>;
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the Dapr Component Resiliency Policy.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}