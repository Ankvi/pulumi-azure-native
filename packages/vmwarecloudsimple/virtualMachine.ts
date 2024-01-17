import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Virtual machine model
 * Azure REST API version: 2019-04-01. Prior API version in Azure Native 1.x: 2019-04-01.
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
    public static readonly __pulumiType = 'azure-native:vmwarecloudsimple:VirtualMachine';

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
     * The amount of memory
     */
    public readonly amountOfRam!: pulumi.Output<number>;
    /**
     * The list of Virtual Disks' Controllers
     */
    public /*out*/ readonly controllers!: pulumi.Output<types.outputs.VirtualDiskControllerResponse[]>;
    /**
     * Virtual machine properties
     */
    public readonly customization!: pulumi.Output<types.outputs.GuestOSCustomizationResponse | undefined>;
    /**
     * The list of Virtual Disks
     */
    public readonly disks!: pulumi.Output<types.outputs.VirtualDiskResponse[] | undefined>;
    /**
     * The DNS name of Virtual Machine in VCenter
     */
    public /*out*/ readonly dnsname!: pulumi.Output<string>;
    /**
     * Expose Guest OS or not
     */
    public readonly exposeToGuestVM!: pulumi.Output<boolean | undefined>;
    /**
     * The path to virtual machine folder in VCenter
     */
    public /*out*/ readonly folder!: pulumi.Output<string>;
    /**
     * The name of Guest OS
     */
    public /*out*/ readonly guestOS!: pulumi.Output<string>;
    /**
     * The Guest OS type
     */
    public /*out*/ readonly guestOSType!: pulumi.Output<string>;
    /**
     * Azure region
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * {virtualMachineName}
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of Virtual NICs
     */
    public readonly nics!: pulumi.Output<types.outputs.VirtualNicResponse[] | undefined>;
    /**
     * The number of CPU cores
     */
    public readonly numberOfCores!: pulumi.Output<number>;
    /**
     * Password for login. Deprecated - use customization property
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Private Cloud Id
     */
    public readonly privateCloudId!: pulumi.Output<string>;
    /**
     * The provisioning status of the resource
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The public ip of Virtual Machine
     */
    public /*out*/ readonly publicIP!: pulumi.Output<string>;
    /**
     * Virtual Machines Resource Pool
     */
    public readonly resourcePool!: pulumi.Output<types.outputs.ResourcePoolResponse | undefined>;
    /**
     * The status of Virtual machine
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The list of tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Virtual Machine Template Id
     */
    public readonly templateId!: pulumi.Output<string | undefined>;
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Username for login. Deprecated - use customization property
     */
    public readonly username!: pulumi.Output<string | undefined>;
    /**
     * The list of Virtual VSphere Networks
     */
    public readonly vSphereNetworks!: pulumi.Output<string[] | undefined>;
    /**
     * The internal id of Virtual Machine in VCenter
     */
    public /*out*/ readonly vmId!: pulumi.Output<string>;
    /**
     * VMware tools version
     */
    public /*out*/ readonly vmwaretools!: pulumi.Output<string>;

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
            if ((!args || args.amountOfRam === undefined) && !opts.urn) {
                throw new Error("Missing required property 'amountOfRam'");
            }
            if ((!args || args.numberOfCores === undefined) && !opts.urn) {
                throw new Error("Missing required property 'numberOfCores'");
            }
            if ((!args || args.privateCloudId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["amountOfRam"] = args ? args.amountOfRam : undefined;
            resourceInputs["customization"] = args ? args.customization : undefined;
            resourceInputs["disks"] = args ? args.disks : undefined;
            resourceInputs["exposeToGuestVM"] = args ? args.exposeToGuestVM : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["nics"] = args ? args.nics : undefined;
            resourceInputs["numberOfCores"] = args ? args.numberOfCores : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["privateCloudId"] = args ? args.privateCloudId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourcePool"] = args ? args.resourcePool : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateId"] = args ? args.templateId : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["vSphereNetworks"] = args ? args.vSphereNetworks : undefined;
            resourceInputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
            resourceInputs["controllers"] = undefined /*out*/;
            resourceInputs["dnsname"] = undefined /*out*/;
            resourceInputs["folder"] = undefined /*out*/;
            resourceInputs["guestOS"] = undefined /*out*/;
            resourceInputs["guestOSType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIP"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
            resourceInputs["vmwaretools"] = undefined /*out*/;
        } else {
            resourceInputs["amountOfRam"] = undefined /*out*/;
            resourceInputs["controllers"] = undefined /*out*/;
            resourceInputs["customization"] = undefined /*out*/;
            resourceInputs["disks"] = undefined /*out*/;
            resourceInputs["dnsname"] = undefined /*out*/;
            resourceInputs["exposeToGuestVM"] = undefined /*out*/;
            resourceInputs["folder"] = undefined /*out*/;
            resourceInputs["guestOS"] = undefined /*out*/;
            resourceInputs["guestOSType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nics"] = undefined /*out*/;
            resourceInputs["numberOfCores"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["privateCloudId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIP"] = undefined /*out*/;
            resourceInputs["resourcePool"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["templateId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["username"] = undefined /*out*/;
            resourceInputs["vSphereNetworks"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
            resourceInputs["vmwaretools"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:vmwarecloudsimple/v20190401:VirtualMachine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachine resource.
 */
export interface VirtualMachineArgs {
    /**
     * The amount of memory
     */
    amountOfRam: pulumi.Input<number>;
    /**
     * Virtual machine properties
     */
    customization?: pulumi.Input<types.inputs.GuestOSCustomizationArgs>;
    /**
     * The list of Virtual Disks
     */
    disks?: pulumi.Input<pulumi.Input<types.inputs.VirtualDiskArgs>[]>;
    /**
     * Expose Guest OS or not
     */
    exposeToGuestVM?: pulumi.Input<boolean>;
    /**
     * Azure region
     */
    location?: pulumi.Input<string>;
    /**
     * The list of Virtual NICs
     */
    nics?: pulumi.Input<pulumi.Input<types.inputs.VirtualNicArgs>[]>;
    /**
     * The number of CPU cores
     */
    numberOfCores: pulumi.Input<number>;
    /**
     * Password for login. Deprecated - use customization property
     */
    password?: pulumi.Input<string>;
    /**
     * Private Cloud Id
     */
    privateCloudId: pulumi.Input<string>;
    /**
     * The name of the resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Virtual Machines Resource Pool
     */
    resourcePool?: pulumi.Input<types.inputs.ResourcePoolArgs>;
    /**
     * The list of tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Virtual Machine Template Id
     */
    templateId?: pulumi.Input<string>;
    /**
     * Username for login. Deprecated - use customization property
     */
    username?: pulumi.Input<string>;
    /**
     * The list of Virtual VSphere Networks
     */
    vSphereNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * virtual machine name
     */
    virtualMachineName?: pulumi.Input<string>;
}