import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The virtual hard disk resource definition.
 */
export class VirtualHardDisk extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHardDisk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualHardDisk {
        return new VirtualHardDisk(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20240101:VirtualHardDisk';

    /**
     * Returns true if the given object is an instance of VirtualHardDisk.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualHardDisk {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualHardDisk.__pulumiType;
    }

    public readonly blockSizeBytes!: pulumi.Output<number | undefined>;
    /**
     * Storage ContainerID of the storage container to be used for VHD
     */
    public readonly containerId!: pulumi.Output<string | undefined>;
    /**
     * The format of the actual VHD file [vhd, vhdx]
     */
    public readonly diskFileFormat!: pulumi.Output<string | undefined>;
    /**
     * Size of the disk in GB
     */
    public readonly diskSizeGB!: pulumi.Output<number | undefined>;
    /**
     * Boolean for enabling dynamic sizing on the virtual hard disk
     */
    public readonly dynamic!: pulumi.Output<boolean | undefined>;
    /**
     * The extendedLocation of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The hypervisor generation of the Virtual Machine [V1, V2]
     */
    public readonly hyperVGeneration!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    public readonly logicalSectorBytes!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly physicalSectorBytes!: pulumi.Output<number | undefined>;
    /**
     * Provisioning state of the virtual hard disk.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The observed state of virtual hard disks
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.VirtualHardDiskStatusResponse>;
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
     * Create a VirtualHardDisk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHardDiskArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["blockSizeBytes"] = args ? args.blockSizeBytes : undefined;
            resourceInputs["containerId"] = args ? args.containerId : undefined;
            resourceInputs["diskFileFormat"] = args ? args.diskFileFormat : undefined;
            resourceInputs["diskSizeGB"] = args ? args.diskSizeGB : undefined;
            resourceInputs["dynamic"] = args ? args.dynamic : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hyperVGeneration"] = args ? args.hyperVGeneration : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logicalSectorBytes"] = args ? args.logicalSectorBytes : undefined;
            resourceInputs["physicalSectorBytes"] = args ? args.physicalSectorBytes : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualHardDiskName"] = args ? args.virtualHardDiskName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["blockSizeBytes"] = undefined /*out*/;
            resourceInputs["containerId"] = undefined /*out*/;
            resourceInputs["diskFileFormat"] = undefined /*out*/;
            resourceInputs["diskSizeGB"] = undefined /*out*/;
            resourceInputs["dynamic"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hyperVGeneration"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logicalSectorBytes"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["physicalSectorBytes"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci:VirtualHardDisk" }, { type: "azure-native:azurestackhci/v20210701preview:VirtualHardDisk" }, { type: "azure-native:azurestackhci/v20210901preview:VirtualHardDisk" }, { type: "azure-native:azurestackhci/v20221215preview:VirtualHardDisk" }, { type: "azure-native:azurestackhci/v20230701preview:VirtualHardDisk" }, { type: "azure-native:azurestackhci/v20230901preview:VirtualHardDisk" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualHardDisk.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualHardDisk resource.
 */
export interface VirtualHardDiskArgs {
    blockSizeBytes?: pulumi.Input<number>;
    /**
     * Storage ContainerID of the storage container to be used for VHD
     */
    containerId?: pulumi.Input<string>;
    /**
     * The format of the actual VHD file [vhd, vhdx]
     */
    diskFileFormat?: pulumi.Input<string | types.enums.DiskFileFormat>;
    /**
     * Size of the disk in GB
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Boolean for enabling dynamic sizing on the virtual hard disk
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The hypervisor generation of the Virtual Machine [V1, V2]
     */
    hyperVGeneration?: pulumi.Input<string | types.enums.HyperVGeneration>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    logicalSectorBytes?: pulumi.Input<number>;
    physicalSectorBytes?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the virtual hard disk
     */
    virtualHardDiskName?: pulumi.Input<string>;
}