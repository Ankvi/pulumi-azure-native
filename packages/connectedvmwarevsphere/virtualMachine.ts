import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the virtualMachine.
 *
 * Uses Azure REST API version 2023-03-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-07-15-preview.
 *
 * Other available API versions: 2022-07-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:connectedvmwarevsphere:VirtualMachine';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    public /*out*/ readonly customResourceName!: pulumi.Output<string>;
    /**
     * Gets or sets the extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Firmware type
     */
    public readonly firmwareType!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the folder path of the vm.
     */
    public /*out*/ readonly folderPath!: pulumi.Output<string>;
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
     * Gets or sets the instance uuid of the vm.
     */
    public /*out*/ readonly instanceUuid!: pulumi.Output<string>;
    /**
     * Gets or sets the inventory Item ID for the virtual machine.
     */
    public readonly inventoryItemId!: pulumi.Output<string | undefined>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Gets or sets the vCenter Managed Object name for the virtual machine.
     */
    public /*out*/ readonly moName!: pulumi.Output<string>;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine.
     */
    public readonly moRefId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the name.
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
     * Placement properties.
     */
    public readonly placementProfile!: pulumi.Output<types.outputs.PlacementProfileResponse | undefined>;
    /**
     * Gets the power state of the virtual machine.
     */
    public /*out*/ readonly powerState!: pulumi.Output<string>;
    /**
     * Gets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets or sets the ARM Id of the resourcePool resource on which this virtual machine will
     * deploy.
     */
    public readonly resourcePoolId!: pulumi.Output<string | undefined>;
    /**
     * Gets the security profile.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.SecurityProfileResponse | undefined>;
    /**
     * Gets or sets the SMBIOS UUID of the vm.
     */
    public readonly smbiosUuid!: pulumi.Output<string | undefined>;
    /**
     * The resource status information.
     */
    public /*out*/ readonly statuses!: pulumi.Output<types.outputs.ResourceStatusResponse[]>;
    /**
     * Storage properties.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.StorageProfileResponse | undefined>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Gets or sets the Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets the ARM Id of the template resource to deploy the virtual machine.
     */
    public readonly templateId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.
     */
    public readonly vCenterId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a unique identifier for the vm resource.
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
            resourceInputs["firmwareType"] = args ? args.firmwareType : undefined;
            resourceInputs["guestAgentProfile"] = args ? args.guestAgentProfile : undefined;
            resourceInputs["hardwareProfile"] = args ? args.hardwareProfile : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["inventoryItemId"] = args ? args.inventoryItemId : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["moRefId"] = args ? args.moRefId : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["osProfile"] = args ? args.osProfile : undefined;
            resourceInputs["placementProfile"] = args ? args.placementProfile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourcePoolId"] = args ? args.resourcePoolId : undefined;
            resourceInputs["securityProfile"] = args ? args.securityProfile : undefined;
            resourceInputs["smbiosUuid"] = args ? args.smbiosUuid : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateId"] = args ? args.templateId : undefined;
            resourceInputs["vCenterId"] = args ? args.vCenterId : undefined;
            resourceInputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["folderPath"] = undefined /*out*/;
            resourceInputs["instanceUuid"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["firmwareType"] = undefined /*out*/;
            resourceInputs["folderPath"] = undefined /*out*/;
            resourceInputs["guestAgentProfile"] = undefined /*out*/;
            resourceInputs["hardwareProfile"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["instanceUuid"] = undefined /*out*/;
            resourceInputs["inventoryItemId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["moRefId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["placementProfile"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourcePoolId"] = undefined /*out*/;
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["smbiosUuid"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["templateId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["vCenterId"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:connectedvmwarevsphere/v20201001preview:VirtualMachine" }, { type: "azure-native:connectedvmwarevsphere/v20220110preview:VirtualMachine" }, { type: "azure-native:connectedvmwarevsphere/v20220715preview:VirtualMachine" }, { type: "azure-native:connectedvmwarevsphere/v20230301preview:VirtualMachine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachine resource.
 */
export interface VirtualMachineArgs {
    /**
     * Gets or sets the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Firmware type
     */
    firmwareType?: pulumi.Input<string | types.enums.FirmwareType>;
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
     * Gets or sets the inventory Item ID for the virtual machine.
     */
    inventoryItemId?: pulumi.Input<string>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    kind?: pulumi.Input<string>;
    /**
     * Gets or sets the location.
     */
    location?: pulumi.Input<string>;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine.
     */
    moRefId?: pulumi.Input<string>;
    /**
     * Network properties.
     */
    networkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * OS properties.
     */
    osProfile?: pulumi.Input<types.inputs.OsProfileArgs>;
    /**
     * Placement properties.
     */
    placementProfile?: pulumi.Input<types.inputs.PlacementProfileArgs>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the resourcePool resource on which this virtual machine will
     * deploy.
     */
    resourcePoolId?: pulumi.Input<string>;
    /**
     * Gets the security profile.
     */
    securityProfile?: pulumi.Input<types.inputs.SecurityProfileArgs>;
    /**
     * Gets or sets the SMBIOS UUID of the vm.
     */
    smbiosUuid?: pulumi.Input<string>;
    /**
     * Storage properties.
     */
    storageProfile?: pulumi.Input<types.inputs.StorageProfileArgs>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the ARM Id of the template resource to deploy the virtual machine.
     */
    templateId?: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.
     */
    vCenterId?: pulumi.Input<string>;
    /**
     * Name of the virtual machine resource.
     */
    virtualMachineName?: pulumi.Input<string>;
}