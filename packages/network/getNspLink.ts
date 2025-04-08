import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified NSP link resource.
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2021-02-01-preview, 2023-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNspLink(args: GetNspLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetNspLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNspLink", {
        "linkName": args.linkName,
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNspLinkArgs {
    /**
     * The name of the NSP link.
     */
    linkName: string;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The network security perimeter link resource
 */
export interface GetNspLinkResult {
    /**
     * Perimeter ARM Id for the remote NSP with which the link gets created in Auto-approval mode. It should be used when the NSP admin have Microsoft.Network/networkSecurityPerimeters/linkPerimeter/action permission on the remote NSP resource.
     */
    readonly autoApprovedRemotePerimeterResourceId?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A message passed to the owner of the remote NSP link resource with this connection request. In case of Auto-approved flow, it is default to 'Auto Approved'. Restricted to 140 chars.
     */
    readonly description?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Local Inbound profile names to which Inbound is allowed. Use ['*'] to allow inbound to all profiles.
     */
    readonly localInboundProfiles?: string[];
    /**
     * Local Outbound profile names from which Outbound is allowed. In current version, it is readonly property and it's value is set to ['*'] to allow outbound from all profiles. In later version, user will be able to modify it.
     */
    readonly localOutboundProfiles: string[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the NSP Link resource.
     */
    readonly provisioningState: string;
    /**
     * Remote Inbound profile names to which Inbound is allowed. Use ['*'] to allow inbound to all profiles. This property can only be updated in auto-approval mode.
     */
    readonly remoteInboundProfiles?: string[];
    /**
     * Remote Outbound profile names from which Outbound is allowed. In current version, it is readonly property and it's value is set to ['*'] to allow outbound from all profiles. In later version, user will be able to modify it.
     */
    readonly remoteOutboundProfiles: string[];
    /**
     * Remote NSP Guid with which the link gets created.
     */
    readonly remotePerimeterGuid: string;
    /**
     * Remote NSP location with which the link gets created.
     */
    readonly remotePerimeterLocation: string;
    /**
     * The NSP link state.
     */
    readonly status: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified NSP link resource.
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2021-02-01-preview, 2023-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNspLinkOutput(args: GetNspLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNspLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNspLink", {
        "linkName": args.linkName,
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNspLinkOutputArgs {
    /**
     * The name of the NSP link.
     */
    linkName: pulumi.Input<string>;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}