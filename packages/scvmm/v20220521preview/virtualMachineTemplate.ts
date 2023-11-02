import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The VirtualMachineTemplates resource definition.
 */
export class VirtualMachineTemplate extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineTemplate {
        return new VirtualMachineTemplate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:scvmm/v20220521preview:VirtualMachineTemplate';

    /**
     * Returns true if the given object is an instance of VirtualMachineTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineTemplate.__pulumiType;
    }

    /**
     * Gets or sets computer name.
     */
    public /*out*/ readonly computerName!: pulumi.Output<string>;
    /**
     * Gets or sets the desired number of vCPUs for the vm.
     */
    public /*out*/ readonly cpuCount!: pulumi.Output<number>;
    /**
     * Gets or sets the disks of the template.
     */
    public /*out*/ readonly disks!: pulumi.Output<types.outputs.VirtualDiskResponse[]>;
    /**
     * Gets or sets a value indicating whether to enable dynamic memory or not.
     */
    public /*out*/ readonly dynamicMemoryEnabled!: pulumi.Output<string>;
    /**
     * Gets or sets the max dynamic memory for the vm.
     */
    public /*out*/ readonly dynamicMemoryMaxMB!: pulumi.Output<number>;
    /**
     * Gets or sets the min dynamic memory for the vm.
     */
    public /*out*/ readonly dynamicMemoryMinMB!: pulumi.Output<number>;
    /**
     * The extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Gets or sets the generation for the vm.
     */
    public /*out*/ readonly generation!: pulumi.Output<number>;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    public readonly inventoryItemId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a value indicating whether the vm template is customizable or not.
     */
    public /*out*/ readonly isCustomizable!: pulumi.Output<string>;
    /**
     * Gets highly available property.
     */
    public /*out*/ readonly isHighlyAvailable!: pulumi.Output<string>;
    /**
     * Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs.
     */
    public /*out*/ readonly limitCpuForMigration!: pulumi.Output<string>;
    /**
     * Gets or sets the location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * MemoryMB is the desired size of a virtual machine's memory, in MB.
     */
    public /*out*/ readonly memoryMB!: pulumi.Output<number>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the network interfaces of the template.
     */
    public /*out*/ readonly networkInterfaces!: pulumi.Output<types.outputs.NetworkInterfacesResponse[]>;
    /**
     * Gets or sets os name.
     */
    public /*out*/ readonly osName!: pulumi.Output<string>;
    /**
     * Gets or sets the type of the os.
     */
    public /*out*/ readonly osType!: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Unique ID of the virtual machine template.
     */
    public readonly uuid!: pulumi.Output<string | undefined>;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    public readonly vmmServerId!: pulumi.Output<string | undefined>;

    /**
     * Create a VirtualMachineTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineTemplateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["inventoryItemId"] = args ? args.inventoryItemId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["virtualMachineTemplateName"] = args ? args.virtualMachineTemplateName : undefined;
            resourceInputs["vmmServerId"] = args ? args.vmmServerId : undefined;
            resourceInputs["computerName"] = undefined /*out*/;
            resourceInputs["cpuCount"] = undefined /*out*/;
            resourceInputs["disks"] = undefined /*out*/;
            resourceInputs["dynamicMemoryEnabled"] = undefined /*out*/;
            resourceInputs["dynamicMemoryMaxMB"] = undefined /*out*/;
            resourceInputs["dynamicMemoryMinMB"] = undefined /*out*/;
            resourceInputs["generation"] = undefined /*out*/;
            resourceInputs["isCustomizable"] = undefined /*out*/;
            resourceInputs["isHighlyAvailable"] = undefined /*out*/;
            resourceInputs["limitCpuForMigration"] = undefined /*out*/;
            resourceInputs["memoryMB"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["osName"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["computerName"] = undefined /*out*/;
            resourceInputs["cpuCount"] = undefined /*out*/;
            resourceInputs["disks"] = undefined /*out*/;
            resourceInputs["dynamicMemoryEnabled"] = undefined /*out*/;
            resourceInputs["dynamicMemoryMaxMB"] = undefined /*out*/;
            resourceInputs["dynamicMemoryMinMB"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["generation"] = undefined /*out*/;
            resourceInputs["inventoryItemId"] = undefined /*out*/;
            resourceInputs["isCustomizable"] = undefined /*out*/;
            resourceInputs["isHighlyAvailable"] = undefined /*out*/;
            resourceInputs["limitCpuForMigration"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["memoryMB"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["osName"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["vmmServerId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:scvmm:VirtualMachineTemplate" }, { type: "azure-native:scvmm/v20200605preview:VirtualMachineTemplate" }, { type: "azure-native:scvmm/v20230401preview:VirtualMachineTemplate" }, { type: "azure-native:scvmm/v20231007:VirtualMachineTemplate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachineTemplate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineTemplate resource.
 */
export interface VirtualMachineTemplateArgs {
    /**
     * The extended location.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    inventoryItemId?: pulumi.Input<string>;
    /**
     * Gets or sets the location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Unique ID of the virtual machine template.
     */
    uuid?: pulumi.Input<string>;
    /**
     * Name of the VirtualMachineTemplate.
     */
    virtualMachineTemplateName?: pulumi.Input<string>;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    vmmServerId?: pulumi.Input<string>;
}
