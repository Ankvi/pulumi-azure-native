import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Packet core data plane resource. Must be created in the same location as its parent packet core control plane.
 *
 * Uses Azure REST API version 2023-06-01. In version 1.x of the Azure Native provider, it used API version 2022-04-01-preview.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-09-01, 2024-02-01, 2024-04-01.
 */
export class PacketCoreDataPlane extends pulumi.CustomResource {
    /**
     * Get an existing PacketCoreDataPlane resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PacketCoreDataPlane {
        return new PacketCoreDataPlane(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mobilenetwork:PacketCoreDataPlane';

    /**
     * Returns true if the given object is an instance of PacketCoreDataPlane.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PacketCoreDataPlane {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PacketCoreDataPlane.__pulumiType;
    }

    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the packet core data plane resource.
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
     * The user plane interface on the access network. For 5G networks, this is the N3 interface. For 4G networks, this is the S1-U interface.
     */
    public readonly userPlaneAccessInterface!: pulumi.Output<types.outputs.InterfacePropertiesResponse>;

    /**
     * Create a PacketCoreDataPlane resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PacketCoreDataPlaneArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.packetCoreControlPlaneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packetCoreControlPlaneName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.userPlaneAccessInterface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userPlaneAccessInterface'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["packetCoreControlPlaneName"] = args ? args.packetCoreControlPlaneName : undefined;
            resourceInputs["packetCoreDataPlaneName"] = args ? args.packetCoreDataPlaneName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userPlaneAccessInterface"] = args ? args.userPlaneAccessInterface : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userPlaneAccessInterface"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mobilenetwork/v20220301preview:PacketCoreDataPlane" }, { type: "azure-native:mobilenetwork/v20220401preview:PacketCoreDataPlane" }, { type: "azure-native:mobilenetwork/v20221101:PacketCoreDataPlane" }, { type: "azure-native:mobilenetwork/v20230601:PacketCoreDataPlane" }, { type: "azure-native:mobilenetwork/v20230901:PacketCoreDataPlane" }, { type: "azure-native:mobilenetwork/v20240201:PacketCoreDataPlane" }, { type: "azure-native:mobilenetwork/v20240401:PacketCoreDataPlane" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PacketCoreDataPlane.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PacketCoreDataPlane resource.
 */
export interface PacketCoreDataPlaneArgs {
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: pulumi.Input<string>;
    /**
     * The name of the packet core data plane.
     */
    packetCoreDataPlaneName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The user plane interface on the access network. For 5G networks, this is the N3 interface. For 4G networks, this is the S1-U interface.
     */
    userPlaneAccessInterface: pulumi.Input<types.inputs.InterfacePropertiesArgs>;
}