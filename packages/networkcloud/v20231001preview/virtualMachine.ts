import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
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
    public static readonly __pulumiType = 'azure-native:networkcloud/v20231001preview:VirtualMachine';

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
     * The name of the administrator to which the ssh public keys will be added into the authorized keys.
     */
    public readonly adminUsername!: pulumi.Output<string>;
    /**
     * The cluster availability zone containing this virtual machine.
     */
    public /*out*/ readonly availabilityZone!: pulumi.Output<string>;
    /**
     * The resource ID of the bare metal machine that hosts the virtual machine.
     */
    public /*out*/ readonly bareMetalMachineId!: pulumi.Output<string>;
    /**
     * Selects the boot method for the virtual machine.
     */
    public readonly bootMethod!: pulumi.Output<string | undefined>;
    /**
     * The cloud service network that provides platform-level services for the virtual machine.
     */
    public readonly cloudServicesNetworkAttachment!: pulumi.Output<types.outputs.NetworkAttachmentResponse>;
    /**
     * The resource ID of the cluster the virtual machine is created for.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
    /**
     * The number of CPU cores in the virtual machine.
     */
    public readonly cpuCores!: pulumi.Output<number>;
    /**
     * The more detailed status of the virtual machine.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Field Deprecated, the value will be ignored if provided. The indicator of whether one of the specified CPU cores is isolated to run the emulator thread for this virtual machine.
     */
    public readonly isolateEmulatorThread!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The memory size of the virtual machine in GB.
     */
    public readonly memorySizeGB!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of network attachments to the virtual machine.
     */
    public readonly networkAttachments!: pulumi.Output<types.outputs.NetworkAttachmentResponse[] | undefined>;
    /**
     * The Base64 encoded cloud-init network data.
     */
    public readonly networkData!: pulumi.Output<string | undefined>;
    /**
     * The scheduling hints for the virtual machine.
     */
    public readonly placementHints!: pulumi.Output<types.outputs.VirtualMachinePlacementHintResponse[] | undefined>;
    /**
     * The power state of the virtual machine.
     */
    public /*out*/ readonly powerState!: pulumi.Output<string>;
    /**
     * The provisioning state of the virtual machine.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The list of ssh public keys. Each key will be added to the virtual machine using the cloud-init ssh_authorized_keys mechanism for the adminUsername.
     */
    public readonly sshPublicKeys!: pulumi.Output<types.outputs.SshPublicKeyResponse[] | undefined>;
    /**
     * The storage profile that specifies size and other parameters about the disks related to the virtual machine.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.StorageProfileResponse>;
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
     * The Base64 encoded cloud-init user data.
     */
    public readonly userData!: pulumi.Output<string | undefined>;
    /**
     * Field Deprecated, use virtualizationModel instead. The type of the virtio interface.
     */
    public readonly virtioInterface!: pulumi.Output<string | undefined>;
    /**
     * The type of the device model to use.
     */
    public readonly vmDeviceModel!: pulumi.Output<string | undefined>;
    /**
     * The virtual machine image that is currently provisioned to the OS disk, using the full url and tag notation used to pull the image.
     */
    public readonly vmImage!: pulumi.Output<string>;
    /**
     * The credentials used to login to the image repository that has access to the specified image.
     */
    public readonly vmImageRepositoryCredentials!: pulumi.Output<types.outputs.ImageRepositoryCredentialsResponse | undefined>;
    /**
     * The resource IDs of volumes that are attached to the virtual machine.
     */
    public /*out*/ readonly volumes!: pulumi.Output<string[]>;

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
            if ((!args || args.adminUsername === undefined) && !opts.urn) {
                throw new Error("Missing required property 'adminUsername'");
            }
            if ((!args || args.cloudServicesNetworkAttachment === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudServicesNetworkAttachment'");
            }
            if ((!args || args.cpuCores === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cpuCores'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.memorySizeGB === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memorySizeGB'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageProfile'");
            }
            if ((!args || args.vmImage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmImage'");
            }
            resourceInputs["adminUsername"] = args ? args.adminUsername : undefined;
            resourceInputs["bootMethod"] = (args ? args.bootMethod : undefined) ?? "UEFI";
            resourceInputs["cloudServicesNetworkAttachment"] = args ? args.cloudServicesNetworkAttachment : undefined;
            resourceInputs["cpuCores"] = args ? args.cpuCores : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["isolateEmulatorThread"] = (args ? args.isolateEmulatorThread : undefined) ?? "True";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["memorySizeGB"] = args ? args.memorySizeGB : undefined;
            resourceInputs["networkAttachments"] = args ? args.networkAttachments : undefined;
            resourceInputs["networkData"] = args ? args.networkData : undefined;
            resourceInputs["placementHints"] = args ? args.placementHints : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sshPublicKeys"] = args ? args.sshPublicKeys : undefined;
            resourceInputs["storageProfile"] = args ? (args.storageProfile ? pulumi.output(args.storageProfile).apply(types.inputs.storageProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
            resourceInputs["virtioInterface"] = (args ? args.virtioInterface : undefined) ?? "Modern";
            resourceInputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
            resourceInputs["vmDeviceModel"] = (args ? args.vmDeviceModel : undefined) ?? "T2";
            resourceInputs["vmImage"] = args ? args.vmImage : undefined;
            resourceInputs["vmImageRepositoryCredentials"] = args ? args.vmImageRepositoryCredentials : undefined;
            resourceInputs["availabilityZone"] = undefined /*out*/;
            resourceInputs["bareMetalMachineId"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumes"] = undefined /*out*/;
        } else {
            resourceInputs["adminUsername"] = undefined /*out*/;
            resourceInputs["availabilityZone"] = undefined /*out*/;
            resourceInputs["bareMetalMachineId"] = undefined /*out*/;
            resourceInputs["bootMethod"] = undefined /*out*/;
            resourceInputs["cloudServicesNetworkAttachment"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["cpuCores"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["isolateEmulatorThread"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["memorySizeGB"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkAttachments"] = undefined /*out*/;
            resourceInputs["networkData"] = undefined /*out*/;
            resourceInputs["placementHints"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sshPublicKeys"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userData"] = undefined /*out*/;
            resourceInputs["virtioInterface"] = undefined /*out*/;
            resourceInputs["vmDeviceModel"] = undefined /*out*/;
            resourceInputs["vmImage"] = undefined /*out*/;
            resourceInputs["vmImageRepositoryCredentials"] = undefined /*out*/;
            resourceInputs["volumes"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud:VirtualMachine" }, { type: "azure-native:networkcloud/v20230501preview:VirtualMachine" }, { type: "azure-native:networkcloud/v20230701:VirtualMachine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachine resource.
 */
export interface VirtualMachineArgs {
    /**
     * The name of the administrator to which the ssh public keys will be added into the authorized keys.
     */
    adminUsername: pulumi.Input<string>;
    /**
     * Selects the boot method for the virtual machine.
     */
    bootMethod?: pulumi.Input<string | types.enums.VirtualMachineBootMethod>;
    /**
     * The cloud service network that provides platform-level services for the virtual machine.
     */
    cloudServicesNetworkAttachment: pulumi.Input<types.inputs.NetworkAttachmentArgs>;
    /**
     * The number of CPU cores in the virtual machine.
     */
    cpuCores: pulumi.Input<number>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Field Deprecated, the value will be ignored if provided. The indicator of whether one of the specified CPU cores is isolated to run the emulator thread for this virtual machine.
     */
    isolateEmulatorThread?: pulumi.Input<string | types.enums.VirtualMachineIsolateEmulatorThread>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The memory size of the virtual machine in GB.
     */
    memorySizeGB: pulumi.Input<number>;
    /**
     * The list of network attachments to the virtual machine.
     */
    networkAttachments?: pulumi.Input<pulumi.Input<types.inputs.NetworkAttachmentArgs>[]>;
    /**
     * The Base64 encoded cloud-init network data.
     */
    networkData?: pulumi.Input<string>;
    /**
     * The scheduling hints for the virtual machine.
     */
    placementHints?: pulumi.Input<pulumi.Input<types.inputs.VirtualMachinePlacementHintArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The list of ssh public keys. Each key will be added to the virtual machine using the cloud-init ssh_authorized_keys mechanism for the adminUsername.
     */
    sshPublicKeys?: pulumi.Input<pulumi.Input<types.inputs.SshPublicKeyArgs>[]>;
    /**
     * The storage profile that specifies size and other parameters about the disks related to the virtual machine.
     */
    storageProfile: pulumi.Input<types.inputs.StorageProfileArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Base64 encoded cloud-init user data.
     */
    userData?: pulumi.Input<string>;
    /**
     * Field Deprecated, use virtualizationModel instead. The type of the virtio interface.
     */
    virtioInterface?: pulumi.Input<string | types.enums.VirtualMachineVirtioInterfaceType>;
    /**
     * The name of the virtual machine.
     */
    virtualMachineName?: pulumi.Input<string>;
    /**
     * The type of the device model to use.
     */
    vmDeviceModel?: pulumi.Input<string | types.enums.VirtualMachineDeviceModelType>;
    /**
     * The virtual machine image that is currently provisioned to the OS disk, using the full url and tag notation used to pull the image.
     */
    vmImage: pulumi.Input<string>;
    /**
     * The credentials used to login to the image repository that has access to the specified image.
     */
    vmImageRepositoryCredentials?: pulumi.Input<types.inputs.ImageRepositoryCredentialsArgs>;
}