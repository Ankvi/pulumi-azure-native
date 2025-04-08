import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The virtual machine instance resource definition.
 *
 * Uses Azure REST API version 2025-02-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-07-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2024-01-01, 2024-02-01-preview, 2024-05-01-preview, 2024-07-15-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestackhci [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VirtualMachineInstance extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineInstance {
        return new VirtualMachineInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:VirtualMachineInstance';

    /**
     * Returns true if the given object is an instance of VirtualMachineInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineInstance.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Boolean indicating whether this is an existing local virtual machine or if one should be created.
     */
    public readonly createFromLocal!: pulumi.Output<boolean | undefined>;
    /**
     * The extendedLocation of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Guest agent install status.
     */
    public /*out*/ readonly guestAgentInstallStatus!: pulumi.Output<types.outputs.GuestAgentInstallStatusResponse | undefined>;
    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine instance.
     */
    public readonly hardwareProfile!: pulumi.Output<types.outputs.VirtualMachineInstancePropertiesHardwareProfileResponse | undefined>;
    /**
     * HTTP Proxy configuration for the VM.
     */
    public readonly httpProxyConfig!: pulumi.Output<types.outputs.HttpProxyConfigurationResponse | undefined>;
    /**
     * The managed service identities assigned to this resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The virtual machine instance view.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.VirtualMachineInstanceViewResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * NetworkProfile - describes the network configuration the virtual machine instance
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.VirtualMachineInstancePropertiesNetworkProfileResponse | undefined>;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    public readonly osProfile!: pulumi.Output<types.outputs.VirtualMachineInstancePropertiesOsProfileResponse | undefined>;
    /**
     * Provisioning state of the virtual machine instance.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Unique identifier defined by ARC to identify the guest of the VM.
     */
    public readonly resourceUid!: pulumi.Output<string | undefined>;
    /**
     * SecurityProfile - Specifies the security settings for the virtual machine instance.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.VirtualMachineInstancePropertiesSecurityProfileResponse | undefined>;
    /**
     * The observed state of virtual machine instances
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.VirtualMachineInstanceStatusResponse>;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine instance
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.VirtualMachineInstancePropertiesStorageProfileResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Unique identifier for the vm resource.
     */
    public /*out*/ readonly vmId!: pulumi.Output<string>;

    /**
     * Create a VirtualMachineInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["createFromLocal"] = (args ? args.createFromLocal : undefined) ?? false;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hardwareProfile"] = args ? (args.hardwareProfile ? pulumi.output(args.hardwareProfile).apply(types.inputs.virtualMachineInstancePropertiesHardwareProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["httpProxyConfig"] = args ? args.httpProxyConfig : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["osProfile"] = args ? (args.osProfile ? pulumi.output(args.osProfile).apply(types.inputs.virtualMachineInstancePropertiesOsProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceUid"] = args ? args.resourceUid : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["securityProfile"] = args ? (args.securityProfile ? pulumi.output(args.securityProfile).apply(types.inputs.virtualMachineInstancePropertiesSecurityProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["guestAgentInstallStatus"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createFromLocal"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["guestAgentInstallStatus"] = undefined /*out*/;
            resourceInputs["hardwareProfile"] = undefined /*out*/;
            resourceInputs["httpProxyConfig"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceUid"] = undefined /*out*/;
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20230701preview:VirtualMachineInstance" }, { type: "azure-native:azurestackhci/v20230901preview:VirtualMachineInstance" }, { type: "azure-native:azurestackhci/v20240101:VirtualMachineInstance" }, { type: "azure-native:azurestackhci/v20240201preview:VirtualMachineInstance" }, { type: "azure-native:azurestackhci/v20240501preview:VirtualMachineInstance" }, { type: "azure-native:azurestackhci/v20240715preview:VirtualMachineInstance" }, { type: "azure-native:azurestackhci/v20240801preview:VirtualMachineInstance" }, { type: "azure-native:azurestackhci/v20241001preview:VirtualMachineInstance" }, { type: "azure-native:azurestackhci/v20250201preview:VirtualMachineInstance" }, { type: "azure-native:azurestackhci/v20250401preview:VirtualMachineInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachineInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineInstance resource.
 */
export interface VirtualMachineInstanceArgs {
    /**
     * Boolean indicating whether this is an existing local virtual machine or if one should be created.
     */
    createFromLocal?: pulumi.Input<boolean>;
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine instance.
     */
    hardwareProfile?: pulumi.Input<types.inputs.VirtualMachineInstancePropertiesHardwareProfileArgs>;
    /**
     * HTTP Proxy configuration for the VM.
     */
    httpProxyConfig?: pulumi.Input<types.inputs.HttpProxyConfigurationArgs>;
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * NetworkProfile - describes the network configuration the virtual machine instance
     */
    networkProfile?: pulumi.Input<types.inputs.VirtualMachineInstancePropertiesNetworkProfileArgs>;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    osProfile?: pulumi.Input<types.inputs.VirtualMachineInstancePropertiesOsProfileArgs>;
    /**
     * Unique identifier defined by ARC to identify the guest of the VM.
     */
    resourceUid?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * SecurityProfile - Specifies the security settings for the virtual machine instance.
     */
    securityProfile?: pulumi.Input<types.inputs.VirtualMachineInstancePropertiesSecurityProfileArgs>;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine instance
     */
    storageProfile?: pulumi.Input<types.inputs.VirtualMachineInstancePropertiesStorageProfileArgs>;
}