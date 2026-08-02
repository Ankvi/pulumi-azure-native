import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get an inbound rule.
 *
 * Uses Azure REST API version 2026-04-01-preview.
 */
export function getInboundRule(args: GetInboundRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetInboundRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getInboundRule", {
        "inboundRuleName": args.inboundRuleName,
        "natGatewayName": args.natGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInboundRuleArgs {
    /**
     * Name of the inbound rule
     */
    inboundRuleName: string;
    /**
     * Name of the nat gateway
     */
    natGatewayName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The inbound rule resource definition.
 */
export interface GetInboundRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
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
    readonly properties: types.outputs.InboundRulePropertiesResponse;
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
 * The operation to get an inbound rule.
 *
 * Uses Azure REST API version 2026-04-01-preview.
 */
export function getInboundRuleOutput(args: GetInboundRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInboundRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getInboundRule", {
        "inboundRuleName": args.inboundRuleName,
        "natGatewayName": args.natGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInboundRuleOutputArgs {
    /**
     * Name of the inbound rule
     */
    inboundRuleName: pulumi.Input<string>;
    /**
     * Name of the nat gateway
     */
    natGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}