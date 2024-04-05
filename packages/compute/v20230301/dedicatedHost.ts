import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the Dedicated host.
 */
export class DedicatedHost extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedHost resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DedicatedHost {
        return new DedicatedHost(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute/v20230301:DedicatedHost';

    /**
     * Returns true if the given object is an instance of DedicatedHost.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DedicatedHost {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DedicatedHost.__pulumiType;
    }

    /**
     * Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
     */
    public readonly autoReplaceOnFailure!: pulumi.Output<boolean | undefined>;
    /**
     * A unique id generated and assigned to the dedicated host by the platform. Does not change throughout the lifetime of the host.
     */
    public /*out*/ readonly hostId!: pulumi.Output<string>;
    /**
     * The dedicated host instance view.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.DedicatedHostInstanceViewResponse>;
    /**
     * Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are: **None,** **Windows_Server_Hybrid,** **Windows_Server_Perpetual.** The default value is: **None.**
     */
    public readonly licenseType!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Fault domain of the dedicated host within a dedicated host group.
     */
    public readonly platformFaultDomain!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The date when the host was first provisioned.
     */
    public /*out*/ readonly provisioningTime!: pulumi.Output<string>;
    /**
     * SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the time at which the Dedicated Host resource was created. Minimum api-version: 2021-11-01.
     */
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of references to all virtual machines in the Dedicated Host.
     */
    public /*out*/ readonly virtualMachines!: pulumi.Output<types.outputs.SubResourceReadOnlyResponse[]>;

    /**
     * Create a DedicatedHost resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedHostArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hostGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostGroupName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["autoReplaceOnFailure"] = args ? args.autoReplaceOnFailure : undefined;
            resourceInputs["hostGroupName"] = args ? args.hostGroupName : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["platformFaultDomain"] = args ? args.platformFaultDomain : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["hostId"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["provisioningTime"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachines"] = undefined /*out*/;
        } else {
            resourceInputs["autoReplaceOnFailure"] = undefined /*out*/;
            resourceInputs["hostId"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["licenseType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["platformFaultDomain"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["provisioningTime"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachines"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute:DedicatedHost" }, { type: "azure-native:compute/v20190301:DedicatedHost" }, { type: "azure-native:compute/v20190701:DedicatedHost" }, { type: "azure-native:compute/v20191201:DedicatedHost" }, { type: "azure-native:compute/v20200601:DedicatedHost" }, { type: "azure-native:compute/v20201201:DedicatedHost" }, { type: "azure-native:compute/v20210301:DedicatedHost" }, { type: "azure-native:compute/v20210401:DedicatedHost" }, { type: "azure-native:compute/v20210701:DedicatedHost" }, { type: "azure-native:compute/v20211101:DedicatedHost" }, { type: "azure-native:compute/v20220301:DedicatedHost" }, { type: "azure-native:compute/v20220801:DedicatedHost" }, { type: "azure-native:compute/v20221101:DedicatedHost" }, { type: "azure-native:compute/v20230701:DedicatedHost" }, { type: "azure-native:compute/v20230901:DedicatedHost" }, { type: "azure-native:compute/v20240301:DedicatedHost" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DedicatedHost.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DedicatedHost resource.
 */
export interface DedicatedHostArgs {
    /**
     * Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
     */
    autoReplaceOnFailure?: pulumi.Input<boolean>;
    /**
     * The name of the dedicated host group.
     */
    hostGroupName: pulumi.Input<string>;
    /**
     * The name of the dedicated host .
     */
    hostName?: pulumi.Input<string>;
    /**
     * Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are: **None,** **Windows_Server_Hybrid,** **Windows_Server_Perpetual.** The default value is: **None.**
     */
    licenseType?: pulumi.Input<types.enums.DedicatedHostLicenseTypes>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Fault domain of the dedicated host within a dedicated host group.
     */
    platformFaultDomain?: pulumi.Input<number>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}