import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Packet core control plane resource.
 */
export class PacketCoreControlPlane extends pulumi.CustomResource {
    /**
     * Get an existing PacketCoreControlPlane resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PacketCoreControlPlane {
        return new PacketCoreControlPlane(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mobilenetwork/v20220301preview:PacketCoreControlPlane';

    /**
     * Returns true if the given object is an instance of PacketCoreControlPlane.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PacketCoreControlPlane {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PacketCoreControlPlane.__pulumiType;
    }

    /**
     * The control plane interface on the access network. In 5G networks this is called as N2 interface whereas in 4G networks this is called as S1-MME interface.
     */
    public readonly controlPlaneAccessInterface!: pulumi.Output<types.outputs.InterfacePropertiesResponse>;
    /**
     * The core network technology generation.
     */
    public readonly coreNetworkTechnology!: pulumi.Output<string | undefined>;
    /**
     * The timestamp of resource creation (UTC).
     */
    public readonly createdAt!: pulumi.Output<string | undefined>;
    /**
     * The identity that created the resource.
     */
    public readonly createdBy!: pulumi.Output<string | undefined>;
    /**
     * The type of identity that created the resource.
     */
    public readonly createdByType!: pulumi.Output<string | undefined>;
    /**
     * Azure ARC custom location where the packet core is deployed.
     */
    public readonly customLocation!: pulumi.Output<types.outputs.CustomLocationResourceIdResponse | undefined>;
    /**
     * The timestamp of resource last modification (UTC)
     */
    public readonly lastModifiedAt!: pulumi.Output<string | undefined>;
    /**
     * The identity that last modified the resource.
     */
    public readonly lastModifiedBy!: pulumi.Output<string | undefined>;
    /**
     * The type of identity that last modified the resource.
     */
    public readonly lastModifiedByType!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Mobile network that this packet core control plane belongs to
     */
    public readonly mobileNetwork!: pulumi.Output<types.outputs.MobileNetworkResourceIdResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the packet core control plane resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The version of the packet core software that is deployed.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a PacketCoreControlPlane resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PacketCoreControlPlaneArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.controlPlaneAccessInterface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controlPlaneAccessInterface'");
            }
            if ((!args || args.mobileNetwork === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mobileNetwork'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["controlPlaneAccessInterface"] = args ? args.controlPlaneAccessInterface : undefined;
            resourceInputs["coreNetworkTechnology"] = args ? args.coreNetworkTechnology : undefined;
            resourceInputs["createdAt"] = args ? args.createdAt : undefined;
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["createdByType"] = args ? args.createdByType : undefined;
            resourceInputs["customLocation"] = args ? args.customLocation : undefined;
            resourceInputs["lastModifiedAt"] = args ? args.lastModifiedAt : undefined;
            resourceInputs["lastModifiedBy"] = args ? args.lastModifiedBy : undefined;
            resourceInputs["lastModifiedByType"] = args ? args.lastModifiedByType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mobileNetwork"] = args ? args.mobileNetwork : undefined;
            resourceInputs["packetCoreControlPlaneName"] = args ? args.packetCoreControlPlaneName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["controlPlaneAccessInterface"] = undefined /*out*/;
            resourceInputs["coreNetworkTechnology"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdByType"] = undefined /*out*/;
            resourceInputs["customLocation"] = undefined /*out*/;
            resourceInputs["lastModifiedAt"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedByType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mobileNetwork"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mobilenetwork:PacketCoreControlPlane" }, { type: "azure-native:mobilenetwork/v20220401preview:PacketCoreControlPlane" }, { type: "azure-native:mobilenetwork/v20221101:PacketCoreControlPlane" }, { type: "azure-native:mobilenetwork/v20230601:PacketCoreControlPlane" }, { type: "azure-native:mobilenetwork/v20230901:PacketCoreControlPlane" }, { type: "azure-native:mobilenetwork/v20240201:PacketCoreControlPlane" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PacketCoreControlPlane.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PacketCoreControlPlane resource.
 */
export interface PacketCoreControlPlaneArgs {
    /**
     * The control plane interface on the access network. In 5G networks this is called as N2 interface whereas in 4G networks this is called as S1-MME interface.
     */
    controlPlaneAccessInterface: pulumi.Input<types.inputs.InterfacePropertiesArgs>;
    /**
     * The core network technology generation.
     */
    coreNetworkTechnology?: pulumi.Input<string | types.enums.CoreNetworkType>;
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The identity that created the resource.
     */
    createdBy?: pulumi.Input<string>;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: pulumi.Input<string | types.enums.CreatedByType>;
    /**
     * Azure ARC custom location where the packet core is deployed.
     */
    customLocation?: pulumi.Input<types.inputs.CustomLocationResourceIdArgs>;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: pulumi.Input<string>;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: pulumi.Input<string>;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: pulumi.Input<string | types.enums.CreatedByType>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Mobile network that this packet core control plane belongs to
     */
    mobileNetwork: pulumi.Input<types.inputs.MobileNetworkResourceIdArgs>;
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The version of the packet core software that is deployed.
     */
    version?: pulumi.Input<string>;
}