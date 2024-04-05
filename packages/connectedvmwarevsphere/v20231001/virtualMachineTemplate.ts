import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the virtualMachineTemplate.
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
    public static readonly __pulumiType = 'azure-native:connectedvmwarevsphere/v20231001:VirtualMachineTemplate';

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
     * Gets the name of the corresponding resource in Kubernetes.
     */
    public /*out*/ readonly customResourceName!: pulumi.Output<string>;
    /**
     * Gets or sets the disks the template.
     */
    public /*out*/ readonly disks!: pulumi.Output<types.outputs.VirtualDiskResponse[]>;
    /**
     * Gets or sets the extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Firmware type
     */
    public /*out*/ readonly firmwareType!: pulumi.Output<string>;
    /**
     * Gets or sets the folder path of the template.
     */
    public /*out*/ readonly folderPath!: pulumi.Output<string>;
    /**
     * Gets or sets the inventory Item ID for the virtual machine template.
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
     * Gets or sets memory size in MBs for the template.
     */
    public /*out*/ readonly memorySizeMB!: pulumi.Output<number>;
    /**
     * Gets or sets the vCenter Managed Object name for the virtual machine template.
     */
    public /*out*/ readonly moName!: pulumi.Output<string>;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine
     * template.
     */
    public readonly moRefId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the network interfaces of the template.
     */
    public /*out*/ readonly networkInterfaces!: pulumi.Output<types.outputs.NetworkInterfaceResponse[]>;
    /**
     * Gets or sets the number of vCPUs for the template.
     */
    public /*out*/ readonly numCPUs!: pulumi.Output<number>;
    /**
     * Gets or sets the number of cores per socket for the template.
     * Defaults to 1 if unspecified.
     */
    public /*out*/ readonly numCoresPerSocket!: pulumi.Output<number>;
    /**
     * Gets or sets os name.
     */
    public /*out*/ readonly osName!: pulumi.Output<string>;
    /**
     * Gets or sets the type of the os.
     */
    public /*out*/ readonly osType!: pulumi.Output<string>;
    /**
     * Gets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource status information.
     */
    public /*out*/ readonly statuses!: pulumi.Output<types.outputs.ResourceStatusResponse[]>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Gets or sets the Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets the current version of VMware Tools.
     */
    public /*out*/ readonly toolsVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the current version status of VMware Tools installed in the guest operating system.
     */
    public /*out*/ readonly toolsVersionStatus!: pulumi.Output<string>;
    /**
     * Gets or sets the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this template resides.
     */
    public readonly vCenterId!: pulumi.Output<string | undefined>;

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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["inventoryItemId"] = args ? args.inventoryItemId : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["moRefId"] = args ? args.moRefId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vCenterId"] = args ? args.vCenterId : undefined;
            resourceInputs["virtualMachineTemplateName"] = args ? args.virtualMachineTemplateName : undefined;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["disks"] = undefined /*out*/;
            resourceInputs["firmwareType"] = undefined /*out*/;
            resourceInputs["folderPath"] = undefined /*out*/;
            resourceInputs["memorySizeMB"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["numCPUs"] = undefined /*out*/;
            resourceInputs["numCoresPerSocket"] = undefined /*out*/;
            resourceInputs["osName"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["toolsVersion"] = undefined /*out*/;
            resourceInputs["toolsVersionStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        } else {
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["disks"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["firmwareType"] = undefined /*out*/;
            resourceInputs["folderPath"] = undefined /*out*/;
            resourceInputs["inventoryItemId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["memorySizeMB"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["moRefId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["numCPUs"] = undefined /*out*/;
            resourceInputs["numCoresPerSocket"] = undefined /*out*/;
            resourceInputs["osName"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["toolsVersion"] = undefined /*out*/;
            resourceInputs["toolsVersionStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["vCenterId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:connectedvmwarevsphere:VirtualMachineTemplate" }, { type: "azure-native:connectedvmwarevsphere/v20201001preview:VirtualMachineTemplate" }, { type: "azure-native:connectedvmwarevsphere/v20220110preview:VirtualMachineTemplate" }, { type: "azure-native:connectedvmwarevsphere/v20220715preview:VirtualMachineTemplate" }, { type: "azure-native:connectedvmwarevsphere/v20230301preview:VirtualMachineTemplate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachineTemplate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineTemplate resource.
 */
export interface VirtualMachineTemplateArgs {
    /**
     * Gets or sets the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Gets or sets the inventory Item ID for the virtual machine template.
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
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine
     * template.
     */
    moRefId?: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this template resides.
     */
    vCenterId?: pulumi.Input<string>;
    /**
     * Name of the virtual machine template resource.
     */
    virtualMachineTemplateName?: pulumi.Input<string>;
}