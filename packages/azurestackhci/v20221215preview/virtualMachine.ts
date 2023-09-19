import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The virtual machine resource definition.
 */
export class VirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachine {
        return new VirtualMachine(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20221215preview:VirtualMachine';

    /**
     * Returns true if the given object is an instance of VirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachine.__pulumiType;
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
    public readonly hardwareProfile!: pulumi.Output<types.outputs.VirtualMachinePropertiesResponseHardwareProfile | undefined>;
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
    public readonly networkProfile!: pulumi.Output<types.outputs.VirtualMachinePropertiesResponseNetworkProfile | undefined>;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    public readonly osProfile!: pulumi.Output<types.outputs.VirtualMachinePropertiesResponseOsProfile | undefined>;
    /**
     * Provisioning state of the virtual machine.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * SecurityProfile - Specifies the security settings for the virtual machine.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.VirtualMachinePropertiesResponseSecurityProfile | undefined>;
    /**
     * The observed state of virtual machines
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.VirtualMachineStatusResponse>;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.VirtualMachinePropertiesResponseStorageProfile | undefined>;
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
     * Unique identifier for the vm resource.
     */
    public /*out*/ readonly vmId!: pulumi.Output<string>;

    /**
     * Create a VirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hardwareProfile"] = args ? (args.hardwareProfile ? pulumi.output(args.hardwareProfile).apply(types.inputs.virtualMachinePropertiesHardwareProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["osProfile"] = args ? args.osProfile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityProfile"] = args ? (args.securityProfile ? pulumi.output(args.securityProfile).apply(types.inputs.virtualMachinePropertiesSecurityProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
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
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci:VirtualMachine" }, { type: "azure-native:azurestackhci/v20210701preview:VirtualMachine" }, { type: "azure-native:azurestackhci/v20210901preview:VirtualMachine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachine resource.
 */
export interface VirtualMachineArgs {
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine.
     */
    hardwareProfile?: pulumi.Input<types.inputs.VirtualMachinePropertiesHardwareProfileArgs>;
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
    networkProfile?: pulumi.Input<types.inputs.VirtualMachinePropertiesNetworkProfileArgs>;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    osProfile?: pulumi.Input<types.inputs.VirtualMachinePropertiesOsProfileArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SecurityProfile - Specifies the security settings for the virtual machine.
     */
    securityProfile?: pulumi.Input<types.inputs.VirtualMachinePropertiesSecurityProfileArgs>;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine
     */
    storageProfile?: pulumi.Input<types.inputs.VirtualMachinePropertiesStorageProfileArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the virtual machine
     */
    virtualMachineName?: pulumi.Input<string>;
}
