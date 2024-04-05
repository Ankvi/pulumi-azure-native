import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of the transaction node.
 */
export function getTransactionNode(args: GetTransactionNodeArgs, opts?: pulumi.InvokeOptions): Promise<GetTransactionNodeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blockchain/v20180601preview:getTransactionNode", {
        "blockchainMemberName": args.blockchainMemberName,
        "resourceGroupName": args.resourceGroupName,
        "transactionNodeName": args.transactionNodeName,
    }, opts);
}

export interface GetTransactionNodeArgs {
    /**
     * Blockchain member name.
     */
    blockchainMemberName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Transaction node name.
     */
    transactionNodeName: string;
}

/**
 * Payload of the transaction node which is the request/response of the resource provider.
 */
export interface GetTransactionNodeResult {
    /**
     * Gets or sets the transaction node dns endpoint.
     */
    readonly dns: string;
    /**
     * Gets or sets the firewall rules.
     */
    readonly firewallRules?: types.outputs.FirewallRuleResponse[];
    /**
     * Fully qualified resource Id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets the transaction node location.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Sets the transaction node dns endpoint basic auth password.
     */
    readonly password?: string;
    /**
     * Gets or sets the blockchain member provision state.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the transaction node public key.
     */
    readonly publicKey: string;
    /**
     * The type of the service - e.g. "Microsoft.Blockchain"
     */
    readonly type: string;
    /**
     * Gets or sets the transaction node dns endpoint basic auth user name.
     */
    readonly userName: string;
}
/**
 * Get the details of the transaction node.
 */
export function getTransactionNodeOutput(args: GetTransactionNodeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTransactionNodeResult> {
    return pulumi.output(args).apply((a: any) => getTransactionNode(a, opts))
}

export interface GetTransactionNodeOutputArgs {
    /**
     * Blockchain member name.
     */
    blockchainMemberName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Transaction node name.
     */
    transactionNodeName: pulumi.Input<string>;
}