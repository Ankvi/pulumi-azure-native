import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a link in the hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getLink(args: GetLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getLink", {
        "hubName": args.hubName,
        "linkName": args.linkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLinkArgs {
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * The name of the link.
     */
    linkName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The link resource format.
 */
export interface GetLinkResult {
    /**
     * Localized descriptions for the Link.
     */
    readonly description?: {[key: string]: string};
    /**
     * Localized display name for the Link.
     */
    readonly displayName?: {[key: string]: string};
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The link name.
     */
    readonly linkName: string;
    /**
     * The set of properties mappings between the source and target Types.
     */
    readonly mappings?: types.outputs.TypePropertiesMappingResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only.
     */
    readonly operationType?: string;
    /**
     * The properties that represent the participating profile.
     */
    readonly participantPropertyReferences: types.outputs.ParticipantPropertyReferenceResponse[];
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles.
     */
    readonly referenceOnly?: boolean;
    /**
     * Type of source entity.
     */
    readonly sourceEntityType: string;
    /**
     * Name of the source Entity Type.
     */
    readonly sourceEntityTypeName: string;
    /**
     * Type of target entity.
     */
    readonly targetEntityType: string;
    /**
     * Name of the target Entity Type.
     */
    readonly targetEntityTypeName: string;
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a link in the hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getLinkOutput(args: GetLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getLink", {
        "hubName": args.hubName,
        "linkName": args.linkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLinkOutputArgs {
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the link.
     */
    linkName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}