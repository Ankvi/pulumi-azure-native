import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a nat rule.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkGatewayNatRule(args: GetVirtualNetworkGatewayNatRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayNatRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkGatewayNatRule", {
        "natRuleName": args.natRuleName,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayNatRuleArgs {
    /**
     * The name of the nat rule.
     */
    natRuleName: string;
    /**
     * The resource group name of the Virtual Network Gateway.
     */
    resourceGroupName: string;
    /**
     * The name of the gateway.
     */
    virtualNetworkGatewayName: string;
}

/**
 * VirtualNetworkGatewayNatRule Resource.
 */
export interface GetVirtualNetworkGatewayNatRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Retrieves the details of a nat rule.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkGatewayNatRuleOutput(args: GetVirtualNetworkGatewayNatRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkGatewayNatRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualNetworkGatewayNatRule", {
        "natRuleName": args.natRuleName,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayNatRuleOutputArgs {
    /**
     * The name of the nat rule.
     */
    natRuleName: pulumi.Input<string>;
    /**
     * The resource group name of the Virtual Network Gateway.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the gateway.
     */
    virtualNetworkGatewayName: pulumi.Input<string>;
}