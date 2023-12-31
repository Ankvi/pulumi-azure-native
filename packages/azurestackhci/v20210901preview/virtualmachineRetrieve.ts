import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The virtual machine resource definition.
 */
export class VirtualmachineRetrieve extends pulumi.CustomResource {
    /**
     * Get an existing VirtualmachineRetrieve resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualmachineRetrieve {
        return new VirtualmachineRetrieve(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20210901preview:VirtualmachineRetrieve';

    /**
     * Returns true if the given object is an instance of VirtualmachineRetrieve.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualmachineRetrieve {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualmachineRetrieve.__pulumiType;
    }

    /**
     * The extendedLocation of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Guest agent status properties.
     */
    public /*out*/ readonly guestAgentProfile!: pulumi.Output<types.outputs.GuestAgentProfileResponse | undefined>;
    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine.
     */
    public readonly hardwareProfile!: pulumi.Output<types.outputs.VirtualmachinesPropertiesResponseHardwareProfile | undefined>;
    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * NetworkProfile - describes the network configuration the virtual machine
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.VirtualmachinesPropertiesResponseNetworkProfile | undefined>;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    public readonly osProfile!: pulumi.Output<types.outputs.VirtualmachinesPropertiesResponseOsProfile | undefined>;
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * name of the object to be used in moc
     */
    public readonly resourceName!: pulumi.Output<string | undefined>;
    /**
     * SecurityProfile - Specifies the security settings for the virtual machine.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.VirtualmachinesPropertiesResponseSecurityProfile | undefined>;
    /**
     * VirtualMachineStatus defines the observed state of virtualmachines
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.VirtualMachineStatusResponse>;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.VirtualmachinesPropertiesResponseStorageProfile | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
     * Unique identifier for the vm resource.
     */
    public /*out*/ readonly vmId!: pulumi.Output<string>;

    /**
     * Create a VirtualmachineRetrieve resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualmachineRetrieveArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hardwareProfile"] = args ? (args.hardwareProfile ? pulumi.output(args.hardwareProfile).apply(types.inputs.virtualmachinesPropertiesHardwareProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["osProfile"] = args ? args.osProfile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["securityProfile"] = args ? (args.securityProfile ? pulumi.output(args.securityProfile).apply(types.inputs.virtualmachinesPropertiesSecurityProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualmachinesName"] = args ? args.virtualmachinesName : undefined;
            resourceInputs["guestAgentProfile"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
        } else {
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["guestAgentProfile"] = undefined /*out*/;
            resourceInputs["hardwareProfile"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceName"] = undefined /*out*/;
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20210901preview:virtualmachineRetrieve" }, { type: "azure-native:azurestackhci:VirtualmachineRetrieve" }, { type: "azure-native:azurestackhci:virtualmachineRetrieve" }, { type: "azure-native:azurestackhci/v20210701preview:VirtualmachineRetrieve" }, { type: "azure-native:azurestackhci/v20210701preview:virtualmachineRetrieve" }, { type: "azure-native:azurestackhci/v20221215preview:VirtualmachineRetrieve" }, { type: "azure-native:azurestackhci/v20221215preview:virtualmachineRetrieve" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualmachineRetrieve.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualmachineRetrieve resource.
 */
export interface VirtualmachineRetrieveArgs {
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine.
     */
    hardwareProfile?: pulumi.Input<types.inputs.VirtualmachinesPropertiesHardwareProfileArgs>;
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * NetworkProfile - describes the network configuration the virtual machine
     */
    networkProfile?: pulumi.Input<types.inputs.VirtualmachinesPropertiesNetworkProfileArgs>;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    osProfile?: pulumi.Input<types.inputs.VirtualmachinesPropertiesOsProfileArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * name of the object to be used in moc
     */
    resourceName?: pulumi.Input<string>;
    /**
     * SecurityProfile - Specifies the security settings for the virtual machine.
     */
    securityProfile?: pulumi.Input<types.inputs.VirtualmachinesPropertiesSecurityProfileArgs>;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine
     */
    storageProfile?: pulumi.Input<types.inputs.VirtualmachinesPropertiesStorageProfileArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    virtualmachinesName?: pulumi.Input<string>;
}
