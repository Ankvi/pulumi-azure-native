import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BgpPeer
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getBgpPeer(args: GetBgpPeerArgs, opts?: pulumi.InvokeOptions): Promise<GetBgpPeerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetesruntime:getBgpPeer", {
        "bgpPeerName": args.bgpPeerName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetBgpPeerArgs {
    /**
     * The name of the BgpPeer
     */
    bgpPeerName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * A BgpPeer resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters)
 */
export interface GetBgpPeerResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * My ASN
     */
    readonly myAsn: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Peer Address
     */
    readonly peerAddress: string;
    /**
     * Peer ASN
     */
    readonly peerAsn: number;
    /**
     * Resource provision state
     */
    readonly provisioningState: string;
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
 * Get a BgpPeer
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getBgpPeerOutput(args: GetBgpPeerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBgpPeerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kubernetesruntime:getBgpPeer", {
        "bgpPeerName": args.bgpPeerName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetBgpPeerOutputArgs {
    /**
     * The name of the BgpPeer
     */
    bgpPeerName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}