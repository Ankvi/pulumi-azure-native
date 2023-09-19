import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a single private link association
 * Azure REST API version: 2020-05-01.
 */
export function getPrivateLinkAssociation(args: GetPrivateLinkAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkAssociationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getPrivateLinkAssociation", {
        "groupId": args.groupId,
        "plaId": args.plaId,
    }, opts);
}

export interface GetPrivateLinkAssociationArgs {
    /**
     * The management group ID.
     */
    groupId: string;
    /**
     * The ID of the PLA
     */
    plaId: string;
}

export interface GetPrivateLinkAssociationResult {
    /**
     * The plaResourceID.
     */
    readonly id: string;
    /**
     * The pla name.
     */
    readonly name: string;
    /**
     * The private link association properties.
     */
    readonly properties: types.outputs.PrivateLinkAssociationPropertiesExpandedResponse;
    /**
     * The operation type.
     */
    readonly type: string;
}
/**
 * Get a single private link association
 * Azure REST API version: 2020-05-01.
 */
export function getPrivateLinkAssociationOutput(args: GetPrivateLinkAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateLinkAssociationResult> {
    return pulumi.output(args).apply((a: any) => getPrivateLinkAssociation(a, opts))
}

export interface GetPrivateLinkAssociationOutputArgs {
    /**
     * The management group ID.
     */
    groupId: pulumi.Input<string>;
    /**
     * The ID of the PLA
     */
    plaId: pulumi.Input<string>;
}
