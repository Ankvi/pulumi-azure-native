import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The network security perimeter link resource
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export class NetworkSecurityPerimeterLink extends pulumi.CustomResource {
    /**
     * Get an existing NetworkSecurityPerimeterLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkSecurityPerimeterLink {
        return new NetworkSecurityPerimeterLink(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:NetworkSecurityPerimeterLink';

    /**
     * Returns true if the given object is an instance of NetworkSecurityPerimeterLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkSecurityPerimeterLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkSecurityPerimeterLink.__pulumiType;
    }

    /**
     * Perimeter ARM Id for the remote NSP with which the link gets created in Auto-approval mode. It should be used when the NSP admin have Microsoft.Network/networkSecurityPerimeters/linkPerimeter/action permission on the remote NSP resource.
     */
    public readonly autoApprovedRemotePerimeterResourceId!: pulumi.Output<string | undefined>;
    /**
     * A message passed to the owner of the remote NSP link resource with this connection request. In case of Auto-approved flow, it is default to 'Auto Approved'. Restricted to 140 chars.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Local Inbound profile names to which Inbound is allowed. Use ['*'] to allow inbound to all profiles.
     */
    public readonly localInboundProfiles!: pulumi.Output<string[] | undefined>;
    /**
     * Local Outbound profile names from which Outbound is allowed. In current version, it is readonly property and it's value is set to ['*'] to allow outbound from all profiles. In later version, user will be able to modify it.
     */
    public /*out*/ readonly localOutboundProfiles!: pulumi.Output<string[]>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the NSP Link resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Remote Inbound profile names to which Inbound is allowed. Use ['*'] to allow inbound to all profiles. This property can only be updated in auto-approval mode.
     */
    public readonly remoteInboundProfiles!: pulumi.Output<string[] | undefined>;
    /**
     * Remote Outbound profile names from which Outbound is allowed. In current version, it is readonly property and it's value is set to ['*'] to allow outbound from all profiles. In later version, user will be able to modify it.
     */
    public /*out*/ readonly remoteOutboundProfiles!: pulumi.Output<string[]>;
    /**
     * Remote NSP Guid with which the link gets created.
     */
    public /*out*/ readonly remotePerimeterGuid!: pulumi.Output<string>;
    /**
     * Remote NSP location with which the link gets created.
     */
    public /*out*/ readonly remotePerimeterLocation!: pulumi.Output<string>;
    /**
     * The NSP link state.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkSecurityPerimeterLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkSecurityPerimeterLinkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkSecurityPerimeterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkSecurityPerimeterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoApprovedRemotePerimeterResourceId"] = args ? args.autoApprovedRemotePerimeterResourceId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["linkName"] = args ? args.linkName : undefined;
            resourceInputs["localInboundProfiles"] = args ? args.localInboundProfiles : undefined;
            resourceInputs["networkSecurityPerimeterName"] = args ? args.networkSecurityPerimeterName : undefined;
            resourceInputs["remoteInboundProfiles"] = args ? args.remoteInboundProfiles : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["localOutboundProfiles"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["remoteOutboundProfiles"] = undefined /*out*/;
            resourceInputs["remotePerimeterGuid"] = undefined /*out*/;
            resourceInputs["remotePerimeterLocation"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoApprovedRemotePerimeterResourceId"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["localInboundProfiles"] = undefined /*out*/;
            resourceInputs["localOutboundProfiles"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["remoteInboundProfiles"] = undefined /*out*/;
            resourceInputs["remoteOutboundProfiles"] = undefined /*out*/;
            resourceInputs["remotePerimeterGuid"] = undefined /*out*/;
            resourceInputs["remotePerimeterLocation"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210201preview:NetworkSecurityPerimeterLink" }, { type: "azure-native:network/v20230701preview:NetworkSecurityPerimeterLink" }, { type: "azure-native:network/v20230801preview:NetworkSecurityPerimeterLink" }, { type: "azure-native:network/v20240601preview:NetworkSecurityPerimeterLink" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkSecurityPerimeterLink.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkSecurityPerimeterLink resource.
 */
export interface NetworkSecurityPerimeterLinkArgs {
    /**
     * Perimeter ARM Id for the remote NSP with which the link gets created in Auto-approval mode. It should be used when the NSP admin have Microsoft.Network/networkSecurityPerimeters/linkPerimeter/action permission on the remote NSP resource.
     */
    autoApprovedRemotePerimeterResourceId?: pulumi.Input<string>;
    /**
     * A message passed to the owner of the remote NSP link resource with this connection request. In case of Auto-approved flow, it is default to 'Auto Approved'. Restricted to 140 chars.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the NSP link.
     */
    linkName?: pulumi.Input<string>;
    /**
     * Local Inbound profile names to which Inbound is allowed. Use ['*'] to allow inbound to all profiles.
     */
    localInboundProfiles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: pulumi.Input<string>;
    /**
     * Remote Inbound profile names to which Inbound is allowed. Use ['*'] to allow inbound to all profiles. This property can only be updated in auto-approval mode.
     */
    remoteInboundProfiles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}