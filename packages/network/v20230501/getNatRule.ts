import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a nat ruleGet.
 */
export function getNatRule(args: GetNatRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNatRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230501:getNatRule", {
        "gatewayName": args.gatewayName,
        "natRuleName": args.natRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNatRuleArgs {
    /**
     * The name of the gateway.
     */
    gatewayName: string;
    /**
     * The name of the nat rule.
     */
    natRuleName: string;
    /**
     * The resource group name of the VpnGateway.
     */
    resourceGroupName: string;
}

/**
 * VpnGatewayNatRule Resource.
 */
export interface GetNatRuleResult {
    /**
     * List of egress VpnSiteLinkConnections.
     */
    readonly egressVpnSiteLinkConnections: types.outputs.SubResourceResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The private IP address external mapping for NAT.
     */
    readonly externalMappings?: types.outputs.VpnNatRuleMappingResponse[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * List of ingress VpnSiteLinkConnections.
     */
    readonly ingressVpnSiteLinkConnections: types.outputs.SubResourceResponse[];
    /**
     * The private IP address internal mapping for NAT.
     */
    readonly internalMappings?: types.outputs.VpnNatRuleMappingResponse[];
    /**
     * The IP Configuration ID this NAT rule applies to.
     */
    readonly ipConfigurationId?: string;
    /**
     * The Source NAT direction of a VPN NAT.
     */
    readonly mode?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the NAT Rule resource.
     */
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves the details of a nat ruleGet.
 */
export function getNatRuleOutput(args: GetNatRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNatRuleResult> {
    return pulumi.output(args).apply((a: any) => getNatRule(a, opts))
}

export interface GetNatRuleOutputArgs {
    /**
     * The name of the gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The name of the nat rule.
     */
    natRuleName: pulumi.Input<string>;
    /**
     * The resource group name of the VpnGateway.
     */
    resourceGroupName: pulumi.Input<string>;
}
