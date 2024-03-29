import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get details about a blockchain member.
 * Azure REST API version: 2018-06-01-preview.
 */
export function getBlockchainMember(args: GetBlockchainMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetBlockchainMemberResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blockchain:getBlockchainMember", {
        "blockchainMemberName": args.blockchainMemberName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBlockchainMemberArgs {
    /**
     * Blockchain member name.
     */
    blockchainMemberName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * Payload of the blockchain member which is exposed in the request/response of the resource provider.
 */
export interface GetBlockchainMemberResult {
    /**
     * Gets or sets the consortium for the blockchain member.
     */
    readonly consortium?: string;
    /**
     * Gets the managed consortium management account address.
     */
    readonly consortiumManagementAccountAddress: string;
    /**
     * Sets the managed consortium management account password.
     */
    readonly consortiumManagementAccountPassword?: string;
    /**
     * Gets the display name of the member in the consortium.
     */
    readonly consortiumMemberDisplayName?: string;
    /**
     * Gets the role of the member in the consortium.
     */
    readonly consortiumRole?: string;
    /**
     * Gets the dns endpoint of the blockchain member.
     */
    readonly dns: string;
    /**
     * Gets or sets firewall rules
     */
    readonly firewallRules?: types.outputs.FirewallRuleResponse[];
    /**
     * Fully qualified resource Id of the resource.
     */
    readonly id: string;
    /**
     * The GEO location of the blockchain service.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Sets the basic auth password of the blockchain member.
     */
    readonly password?: string;
    /**
     * Gets or sets the blockchain protocol.
     */
    readonly protocol?: string;
    /**
     * Gets or sets the blockchain member provision state.
     */
    readonly provisioningState: string;
    /**
     * Gets the public key of the blockchain member (default transaction node).
     */
    readonly publicKey: string;
    /**
     * Gets the Ethereum root contract address of the blockchain.
     */
    readonly rootContractAddress: string;
    /**
     * Gets or sets the blockchain member Sku.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Tags of the service which is a list of key value pairs that describes the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the service - e.g. "Microsoft.Blockchain"
     */
    readonly type: string;
    /**
     * Gets the auth user name of the blockchain member.
     */
    readonly userName: string;
    /**
     * Gets or sets the blockchain validator nodes Sku.
     */
    readonly validatorNodesSku?: types.outputs.BlockchainMemberNodesSkuResponse;
}
/**
 * Get details about a blockchain member.
 * Azure REST API version: 2018-06-01-preview.
 */
export function getBlockchainMemberOutput(args: GetBlockchainMemberOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlockchainMemberResult> {
    return pulumi.output(args).apply((a: any) => getBlockchainMember(a, opts))
}

export interface GetBlockchainMemberOutputArgs {
    /**
     * Blockchain member name.
     */
    blockchainMemberName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}