import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified network security rule.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSecurityRule(args: GetSecurityRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getSecurityRule", {
        "networkSecurityGroupName": args.networkSecurityGroupName,
        "resourceGroupName": args.resourceGroupName,
        "securityRuleName": args.securityRuleName,
    }, opts);
}

export interface GetSecurityRuleArgs {
    /**
     * The name of the network security group.
     */
    networkSecurityGroupName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the security rule.
     */
    securityRuleName: string;
}

/**
 * Network security rule.
 */
export interface GetSecurityRuleResult {
    /**
     * The network traffic is allowed or denied.
     */
    readonly access: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    readonly description?: string;
    /**
     * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
     */
    readonly destinationAddressPrefix?: string;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    readonly destinationAddressPrefixes?: string[];
    /**
     * The application security group specified as destination.
     */
    readonly destinationApplicationSecurityGroups?: types.outputs.ApplicationSecurityGroupResponse[];
    /**
     * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    readonly destinationPortRange?: string;
    /**
     * The destination port ranges.
     */
    readonly destinationPortRanges?: string[];
    /**
     * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    readonly direction: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    readonly priority: number;
    /**
     * Network protocol this rule applies to.
     */
    readonly protocol: string;
    /**
     * The provisioning state of the security rule resource.
     */
    readonly provisioningState: string;
    /**
     * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
     */
    readonly sourceAddressPrefix?: string;
    /**
     * The CIDR or source IP ranges.
     */
    readonly sourceAddressPrefixes?: string[];
    /**
     * The application security group specified as source.
     */
    readonly sourceApplicationSecurityGroups?: types.outputs.ApplicationSecurityGroupResponse[];
    /**
     * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    readonly sourcePortRange?: string;
    /**
     * The source port ranges.
     */
    readonly sourcePortRanges?: string[];
    /**
     * The type of the resource.
     */
    readonly type?: string;
}
/**
 * Get the specified network security rule.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSecurityRuleOutput(args: GetSecurityRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecurityRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getSecurityRule", {
        "networkSecurityGroupName": args.networkSecurityGroupName,
        "resourceGroupName": args.resourceGroupName,
        "securityRuleName": args.securityRuleName,
    }, opts);
}

export interface GetSecurityRuleOutputArgs {
    /**
     * The name of the network security group.
     */
    networkSecurityGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the security rule.
     */
    securityRuleName: pulumi.Input<string>;
}