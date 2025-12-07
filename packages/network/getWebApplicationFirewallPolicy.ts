import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve protection policy with specified name within a resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebApplicationFirewallPolicy(args: GetWebApplicationFirewallPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetWebApplicationFirewallPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getWebApplicationFirewallPolicy", {
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebApplicationFirewallPolicyArgs {
    /**
     * The name of the policy.
     */
    policyName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Defines web application firewall policy.
 */
export interface GetWebApplicationFirewallPolicyResult {
    /**
     * A collection of references to application gateway for containers.
     */
    readonly applicationGatewayForContainers: types.outputs.ApplicationGatewayForContainersReferenceDefinitionResponse[];
    /**
     * A collection of references to application gateways.
     */
    readonly applicationGateways: types.outputs.ApplicationGatewayResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The custom rules inside the policy.
     */
    readonly customRules?: types.outputs.WebApplicationFirewallCustomRuleResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * A collection of references to application gateway http listeners.
     */
    readonly httpListeners: types.outputs.SubResourceResponse[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Describes the managedRules structure.
     */
    readonly managedRules: types.outputs.ManagedRulesDefinitionResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * A collection of references to application gateway path rules.
     */
    readonly pathBasedRules: types.outputs.SubResourceResponse[];
    /**
     * The PolicySettings for policy.
     */
    readonly policySettings?: types.outputs.PolicySettingsResponse;
    /**
     * The provisioning state of the web application firewall policy resource.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the policy.
     */
    readonly resourceState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieve protection policy with specified name within a resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebApplicationFirewallPolicyOutput(args: GetWebApplicationFirewallPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebApplicationFirewallPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getWebApplicationFirewallPolicy", {
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebApplicationFirewallPolicyOutputArgs {
    /**
     * The name of the policy.
     */
    policyName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}