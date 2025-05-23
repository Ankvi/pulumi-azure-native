import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The VirtualMachines resource definition.
 *
 * Uses Azure REST API version 2023-04-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-05-21-preview.
 *
 * Other available API versions: 2022-05-21-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native scvmm [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:scvmm:VirtualMachine';

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
     * Availability Sets in vm.
     */
    public readonly availabilitySets!: pulumi.Output<types.outputs.VirtualMachinePropertiesResponseAvailabilitySets[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Type of checkpoint supported for the vm.
     */
    public readonly checkpointType!: pulumi.Output<string | undefined>;
    /**
     * Checkpoints in the vm.
     */
    public readonly checkpoints!: pulumi.Output<types.outputs.CheckpointResponse[] | undefined>;
    /**
     * ARM Id of the cloud resource to use for deploying the vm.
     */
    public readonly cloudId!: pulumi.Output<string | undefined>;
    /**
     * The extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Gets or sets the generation for the vm.
     */
    public readonly generation!: pulumi.Output<number | undefined>;
    /**
     * Guest agent status properties.
     */
    public readonly guestAgentProfile!: pulumi.Output<types.outputs.GuestAgentProfileResponse | undefined>;
    /**
     * Hardware properties.
     */
    public readonly hardwareProfile!: pulumi.Output<types.outputs.HardwareProfileResponse | undefined>;
    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    public readonly inventoryItemId!: pulumi.Output<string | undefined>;
    /**
     * Last restored checkpoint in the vm.
     */
    public /*out*/ readonly lastRestoredVMCheckpoint!: pulumi.Output<types.outputs.CheckpointResponse>;
    /**
     * Gets or sets the location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network properties.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * OS properties.
     */
    public readonly osProfile!: pulumi.Output<types.outputs.OsProfileResponse | undefined>;
    /**
     * Gets the power state of the virtual machine.
     */
    public /*out*/ readonly powerState!: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Storage properties.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.StorageProfileResponse | undefined>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * ARM Id of the template resource to use for deploying the vm.
     */
    public readonly templateId!: pulumi.Output<string | undefined>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Unique ID of the virtual machine.
     */
    public readonly uuid!: pulumi.Output<string | undefined>;
    /**
     * VMName is the name of VM on the SCVMM server.
     */
    public readonly vmName!: pulumi.Output<string | undefined>;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    public readonly vmmServerId!: pulumi.Output<string | undefined>;

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
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["availabilitySets"] = args ? args.availabilitySets : undefined;
            resourceInputs["checkpointType"] = args ? args.checkpointType : undefined;
            resourceInputs["checkpoints"] = args ? args.checkpoints : undefined;
            resourceInputs["cloudId"] = args ? args.cloudId : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["generation"] = args ? args.generation : undefined;
            resourceInputs["guestAgentProfile"] = args ? args.guestAgentProfile : undefined;
            resourceInputs["hardwareProfile"] = args ? args.hardwareProfile : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["inventoryItemId"] = args ? args.inventoryItemId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["osProfile"] = args ? args.osProfile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateId"] = args ? args.templateId : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
            resourceInputs["vmName"] = args ? args.vmName : undefined;
            resourceInputs["vmmServerId"] = args ? args.vmmServerId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["lastRestoredVMCheckpoint"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["availabilitySets"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["checkpointType"] = undefined /*out*/;
            resourceInputs["checkpoints"] = undefined /*out*/;
            resourceInputs["cloudId"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["generation"] = undefined /*out*/;
            resourceInputs["guestAgentProfile"] = undefined /*out*/;
            resourceInputs["hardwareProfile"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["inventoryItemId"] = undefined /*out*/;
            resourceInputs["lastRestoredVMCheckpoint"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["templateId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["vmName"] = undefined /*out*/;
            resourceInputs["vmmServerId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:scvmm/v20200605preview:VirtualMachine" }, { type: "azure-native:scvmm/v20220521preview:VirtualMachine" }, { type: "azure-native:scvmm/v20230401preview:VirtualMachine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachine resource.
 */
export interface VirtualMachineArgs {
    /**
     * Availability Sets in vm.
     */
    availabilitySets?: pulumi.Input<pulumi.Input<types.inputs.VirtualMachinePropertiesAvailabilitySetsArgs>[]>;
    /**
     * Type of checkpoint supported for the vm.
     */
    checkpointType?: pulumi.Input<string>;
    /**
     * Checkpoints in the vm.
     */
    checkpoints?: pulumi.Input<pulumi.Input<types.inputs.CheckpointArgs>[]>;
    /**
     * ARM Id of the cloud resource to use for deploying the vm.
     */
    cloudId?: pulumi.Input<string>;
    /**
     * The extended location.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Gets or sets the generation for the vm.
     */
    generation?: pulumi.Input<number>;
    /**
     * Guest agent status properties.
     */
    guestAgentProfile?: pulumi.Input<types.inputs.GuestAgentProfileArgs>;
    /**
     * Hardware properties.
     */
    hardwareProfile?: pulumi.Input<types.inputs.HardwareProfileArgs>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    inventoryItemId?: pulumi.Input<string>;
    /**
     * Gets or sets the location.
     */
    location?: pulumi.Input<string>;
    /**
     * Network properties.
     */
    networkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * OS properties.
     */
    osProfile?: pulumi.Input<types.inputs.OsProfileArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Storage properties.
     */
    storageProfile?: pulumi.Input<types.inputs.StorageProfileArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * ARM Id of the template resource to use for deploying the vm.
     */
    templateId?: pulumi.Input<string>;
    /**
     * Unique ID of the virtual machine.
     */
    uuid?: pulumi.Input<string>;
    /**
     * Name of the VirtualMachine.
     */
    virtualMachineName?: pulumi.Input<string>;
    /**
     * VMName is the name of VM on the SCVMM server.
     */
    vmName?: pulumi.Input<string>;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    vmmServerId?: pulumi.Input<string>;
}