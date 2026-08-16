import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The GET API for retrieving a single outbound rule of the managed network associated with the cognitive services account.
 *
 * Uses Azure REST API version 2025-10-01-preview.
 *
 * Other available API versions: 2025-12-01, 2026-01-15-preview, 2026-03-01, 2026-03-15-preview, 2026-05-01, 2026-05-15-preview, 2026-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOutboundRule(args: GetOutboundRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetOutboundRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getOutboundRule", {
        "accountName": args.accountName,
        "managedNetworkName": args.managedNetworkName,
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetOutboundRuleArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
     */
    managedNetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the cognitive services account managed network outbound rule
     */
    ruleName: string;
}

/**
 * Concrete proxy resource types can be created by aliasing this type using a specific property type.
 */
export interface GetOutboundRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Outbound Rule for the managed network of a cognitive services account.
     */
    readonly properties: types.outputs.FqdnOutboundRuleResponse | types.outputs.PrivateEndpointOutboundRuleResponse | types.outputs.ServiceTagOutboundRuleResponse;
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
 * The GET API for retrieving a single outbound rule of the managed network associated with the cognitive services account.
 *
 * Uses Azure REST API version 2025-10-01-preview.
 *
 * Other available API versions: 2025-12-01, 2026-01-15-preview, 2026-03-01, 2026-03-15-preview, 2026-05-01, 2026-05-15-preview, 2026-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOutboundRuleOutput(args: GetOutboundRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOutboundRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cognitiveservices:getOutboundRule", {
        "accountName": args.accountName,
        "managedNetworkName": args.managedNetworkName,
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetOutboundRuleOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
     */
    managedNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the cognitive services account managed network outbound rule
     */
    ruleName: pulumi.Input<string>;
}