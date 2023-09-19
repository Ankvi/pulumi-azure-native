import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A virtual machine.
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
    public static readonly __pulumiType = 'azure-native:devtestlab/v20180915:VirtualMachine';

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
     * Indicates whether another user can take ownership of the virtual machine
     */
    public readonly allowClaim!: pulumi.Output<boolean | undefined>;
    /**
     * The applicable schedule for the virtual machine.
     */
    public /*out*/ readonly applicableSchedule!: pulumi.Output<types.outputs.ApplicableScheduleResponse>;
    /**
     * The artifact deployment status for the virtual machine.
     */
    public /*out*/ readonly artifactDeploymentStatus!: pulumi.Output<types.outputs.ArtifactDeploymentStatusPropertiesResponse>;
    /**
     * The artifacts to be installed on the virtual machine.
     */
    public readonly artifacts!: pulumi.Output<types.outputs.ArtifactInstallPropertiesResponse[] | undefined>;
    /**
     * The resource identifier (Microsoft.Compute) of the virtual machine.
     */
    public /*out*/ readonly computeId!: pulumi.Output<string>;
    /**
     * The compute virtual machine properties.
     */
    public /*out*/ readonly computeVm!: pulumi.Output<types.outputs.ComputeVmPropertiesResponse>;
    /**
     * The email address of creator of the virtual machine.
     */
    public /*out*/ readonly createdByUser!: pulumi.Output<string>;
    /**
     * The object identifier of the creator of the virtual machine.
     */
    public /*out*/ readonly createdByUserId!: pulumi.Output<string>;
    /**
     * The creation date of the virtual machine.
     */
    public readonly createdDate!: pulumi.Output<string | undefined>;
    /**
     * The custom image identifier of the virtual machine.
     */
    public readonly customImageId!: pulumi.Output<string | undefined>;
    /**
     * New or existing data disks to attach to the virtual machine after creation
     */
    public readonly dataDiskParameters!: pulumi.Output<types.outputs.DataDiskPropertiesResponse[] | undefined>;
    /**
     * Indicates whether the virtual machine is to be created without a public IP address.
     */
    public readonly disallowPublicIpAddress!: pulumi.Output<boolean | undefined>;
    /**
     * The resource ID of the environment that contains this virtual machine, if any.
     */
    public readonly environmentId!: pulumi.Output<string | undefined>;
    /**
     * The expiration date for VM.
     */
    public readonly expirationDate!: pulumi.Output<string | undefined>;
    /**
     * The fully-qualified domain name of the virtual machine.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * The Microsoft Azure Marketplace image reference of the virtual machine.
     */
    public readonly galleryImageReference!: pulumi.Output<types.outputs.GalleryImageReferenceResponse | undefined>;
    /**
     * Indicates whether this virtual machine uses an SSH key for authentication.
     */
    public readonly isAuthenticationWithSshKey!: pulumi.Output<boolean | undefined>;
    /**
     * The lab subnet name of the virtual machine.
     */
    public readonly labSubnetName!: pulumi.Output<string | undefined>;
    /**
     * The lab virtual network identifier of the virtual machine.
     */
    public readonly labVirtualNetworkId!: pulumi.Output<string | undefined>;
    /**
     * Last known compute power state captured in DTL
     */
    public /*out*/ readonly lastKnownPowerState!: pulumi.Output<string>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The network interface properties.
     */
    public readonly networkInterface!: pulumi.Output<types.outputs.NetworkInterfacePropertiesResponse | undefined>;
    /**
     * The notes of the virtual machine.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * The OS type of the virtual machine.
     */
    public /*out*/ readonly osType!: pulumi.Output<string>;
    /**
     * The object identifier of the owner of the virtual machine.
     */
    public readonly ownerObjectId!: pulumi.Output<string | undefined>;
    /**
     * The user principal name of the virtual machine owner.
     */
    public readonly ownerUserPrincipalName!: pulumi.Output<string | undefined>;
    /**
     * The password of the virtual machine administrator.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * The id of the plan associated with the virtual machine image
     */
    public readonly planId!: pulumi.Output<string | undefined>;
    /**
     * The provisioning status of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Virtual Machine schedules to be created
     */
    public readonly scheduleParameters!: pulumi.Output<types.outputs.ScheduleCreationParameterResponse[] | undefined>;
    /**
     * The size of the virtual machine.
     */
    public readonly size!: pulumi.Output<string | undefined>;
    /**
     * The SSH key of the virtual machine administrator.
     */
    public readonly sshKey!: pulumi.Output<string | undefined>;
    /**
     * Storage type to use for virtual machine (i.e. Standard, Premium).
     */
    public readonly storageType!: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public /*out*/ readonly uniqueIdentifier!: pulumi.Output<string>;
    /**
     * The user name of the virtual machine.
     */
    public readonly userName!: pulumi.Output<string | undefined>;
    /**
     * Tells source of creation of lab virtual machine. Output property only.
     */
    public /*out*/ readonly virtualMachineCreationSource!: pulumi.Output<string>;

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
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allowClaim"] = (args ? args.allowClaim : undefined) ?? false;
            resourceInputs["artifacts"] = args ? args.artifacts : undefined;
            resourceInputs["createdDate"] = args ? args.createdDate : undefined;
            resourceInputs["customImageId"] = args ? args.customImageId : undefined;
            resourceInputs["dataDiskParameters"] = args ? args.dataDiskParameters : undefined;
            resourceInputs["disallowPublicIpAddress"] = (args ? args.disallowPublicIpAddress : undefined) ?? false;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["expirationDate"] = args ? args.expirationDate : undefined;
            resourceInputs["galleryImageReference"] = args ? args.galleryImageReference : undefined;
            resourceInputs["isAuthenticationWithSshKey"] = args ? args.isAuthenticationWithSshKey : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["labSubnetName"] = args ? args.labSubnetName : undefined;
            resourceInputs["labVirtualNetworkId"] = args ? args.labVirtualNetworkId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkInterface"] = args ? args.networkInterface : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["ownerObjectId"] = (args ? args.ownerObjectId : undefined) ?? "dynamicValue";
            resourceInputs["ownerUserPrincipalName"] = args ? args.ownerUserPrincipalName : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["planId"] = args ? args.planId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scheduleParameters"] = args ? args.scheduleParameters : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["sshKey"] = args ? args.sshKey : undefined;
            resourceInputs["storageType"] = (args ? args.storageType : undefined) ?? "labStorageType";
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["applicableSchedule"] = undefined /*out*/;
            resourceInputs["artifactDeploymentStatus"] = undefined /*out*/;
            resourceInputs["computeId"] = undefined /*out*/;
            resourceInputs["computeVm"] = undefined /*out*/;
            resourceInputs["createdByUser"] = undefined /*out*/;
            resourceInputs["createdByUserId"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["lastKnownPowerState"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
            resourceInputs["virtualMachineCreationSource"] = undefined /*out*/;
        } else {
            resourceInputs["allowClaim"] = undefined /*out*/;
            resourceInputs["applicableSchedule"] = undefined /*out*/;
            resourceInputs["artifactDeploymentStatus"] = undefined /*out*/;
            resourceInputs["artifacts"] = undefined /*out*/;
            resourceInputs["computeId"] = undefined /*out*/;
            resourceInputs["computeVm"] = undefined /*out*/;
            resourceInputs["createdByUser"] = undefined /*out*/;
            resourceInputs["createdByUserId"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["customImageId"] = undefined /*out*/;
            resourceInputs["dataDiskParameters"] = undefined /*out*/;
            resourceInputs["disallowPublicIpAddress"] = undefined /*out*/;
            resourceInputs["environmentId"] = undefined /*out*/;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["galleryImageReference"] = undefined /*out*/;
            resourceInputs["isAuthenticationWithSshKey"] = undefined /*out*/;
            resourceInputs["labSubnetName"] = undefined /*out*/;
            resourceInputs["labVirtualNetworkId"] = undefined /*out*/;
            resourceInputs["lastKnownPowerState"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterface"] = undefined /*out*/;
            resourceInputs["notes"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["ownerObjectId"] = undefined /*out*/;
            resourceInputs["ownerUserPrincipalName"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["planId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scheduleParameters"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["sshKey"] = undefined /*out*/;
            resourceInputs["storageType"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
            resourceInputs["virtualMachineCreationSource"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devtestlab:VirtualMachine" }, { type: "azure-native:devtestlab/v20150521preview:VirtualMachine" }, { type: "azure-native:devtestlab/v20160515:VirtualMachine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachine resource.
 */
export interface VirtualMachineArgs {
    /**
     * Indicates whether another user can take ownership of the virtual machine
     */
    allowClaim?: pulumi.Input<boolean>;
    /**
     * The artifacts to be installed on the virtual machine.
     */
    artifacts?: pulumi.Input<pulumi.Input<types.inputs.ArtifactInstallPropertiesArgs>[]>;
    /**
     * The creation date of the virtual machine.
     */
    createdDate?: pulumi.Input<string>;
    /**
     * The custom image identifier of the virtual machine.
     */
    customImageId?: pulumi.Input<string>;
    /**
     * New or existing data disks to attach to the virtual machine after creation
     */
    dataDiskParameters?: pulumi.Input<pulumi.Input<types.inputs.DataDiskPropertiesArgs>[]>;
    /**
     * Indicates whether the virtual machine is to be created without a public IP address.
     */
    disallowPublicIpAddress?: pulumi.Input<boolean>;
    /**
     * The resource ID of the environment that contains this virtual machine, if any.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * The expiration date for VM.
     */
    expirationDate?: pulumi.Input<string>;
    /**
     * The Microsoft Azure Marketplace image reference of the virtual machine.
     */
    galleryImageReference?: pulumi.Input<types.inputs.GalleryImageReferenceArgs>;
    /**
     * Indicates whether this virtual machine uses an SSH key for authentication.
     */
    isAuthenticationWithSshKey?: pulumi.Input<boolean>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The lab subnet name of the virtual machine.
     */
    labSubnetName?: pulumi.Input<string>;
    /**
     * The lab virtual network identifier of the virtual machine.
     */
    labVirtualNetworkId?: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    name?: pulumi.Input<string>;
    /**
     * The network interface properties.
     */
    networkInterface?: pulumi.Input<types.inputs.NetworkInterfacePropertiesArgs>;
    /**
     * The notes of the virtual machine.
     */
    notes?: pulumi.Input<string>;
    /**
     * The object identifier of the owner of the virtual machine.
     */
    ownerObjectId?: pulumi.Input<string>;
    /**
     * The user principal name of the virtual machine owner.
     */
    ownerUserPrincipalName?: pulumi.Input<string>;
    /**
     * The password of the virtual machine administrator.
     */
    password?: pulumi.Input<string>;
    /**
     * The id of the plan associated with the virtual machine image
     */
    planId?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Virtual Machine schedules to be created
     */
    scheduleParameters?: pulumi.Input<pulumi.Input<types.inputs.ScheduleCreationParameterArgs>[]>;
    /**
     * The size of the virtual machine.
     */
    size?: pulumi.Input<string>;
    /**
     * The SSH key of the virtual machine administrator.
     */
    sshKey?: pulumi.Input<string>;
    /**
     * Storage type to use for virtual machine (i.e. Standard, Premium).
     */
    storageType?: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The user name of the virtual machine.
     */
    userName?: pulumi.Input<string>;
}
