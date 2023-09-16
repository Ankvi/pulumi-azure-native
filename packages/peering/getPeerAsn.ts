import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the peer ASN with the specified name under the given subscription.
 * Azure REST API version: 2022-10-01.
 */
export function getPeerAsn(args: GetPeerAsnArgs, opts?: pulumi.InvokeOptions): Promise<GetPeerAsnResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:peering:getPeerAsn", {
        "peerAsnName": args.peerAsnName,
    }, opts);
}

export interface GetPeerAsnArgs {
    /**
     * The peer ASN name.
     */
    peerAsnName: string;
}

/**
 * The essential information related to the peer's ASN.
 */
export interface GetPeerAsnResult {
    /**
     * The error message for the validation state
     */
    readonly errorMessage: string;
    /**
     * The ID of the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The Autonomous System Number (ASN) of the peer.
     */
    readonly peerAsn?: number;
    /**
     * The contact details of the peer.
     */
    readonly peerContactDetail?: types.outputs.peering.ContactDetailResponse[];
    /**
     * The name of the peer.
     */
    readonly peerName?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The validation state of the ASN associated with the peer.
     */
    readonly validationState: string;
}
/**
 * Gets the peer ASN with the specified name under the given subscription.
 * Azure REST API version: 2022-10-01.
 */
export function getPeerAsnOutput(args: GetPeerAsnOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPeerAsnResult> {
    return pulumi.output(args).apply((a: any) => getPeerAsn(a, opts))
}

export interface GetPeerAsnOutputArgs {
    /**
     * The peer ASN name.
     */
    peerAsnName: pulumi.Input<string>;
}
