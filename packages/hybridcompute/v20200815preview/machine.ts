import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Describes a hybrid machine.
 */
export class Machine extends pulumi.CustomResource {
    /**
     * Get an existing Machine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Machine {
        return new Machine(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcompute/v20200815preview:Machine';

    /**
     * Returns true if the given object is an instance of Machine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Machine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Machine.__pulumiType;
    }

    /**
     * Specifies the AD fully qualified display name.
     */
    public /*out*/ readonly adFqdn!: pulumi.Output<string>;
    /**
     * The hybrid machine agent full version.
     */
    public /*out*/ readonly agentVersion!: pulumi.Output<string>;
    /**
     * Public Key that the client provides to be used during initial resource onboarding
     */
    public readonly clientPublicKey!: pulumi.Output<string | undefined>;
    /**
     * Specifies the hybrid machine display name.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * Specifies the DNS fully qualified display name.
     */
    public /*out*/ readonly dnsFqdn!: pulumi.Output<string>;
    /**
     * Specifies the Windows domain name.
     */
    public /*out*/ readonly domainName!: pulumi.Output<string>;
    /**
     * Details about the error state.
     */
    public /*out*/ readonly errorDetails!: pulumi.Output<types.outputs.hybridcompute.v20200815preview.ErrorDetailResponse[]>;
    /**
     * Machine Extensions information
     */
    public readonly extensions!: pulumi.Output<types.outputs.hybridcompute.v20200815preview.MachineExtensionInstanceViewResponse[] | undefined>;
    public readonly identity!: pulumi.Output<types.outputs.hybridcompute.v20200815preview.MachineResponseIdentity | undefined>;
    /**
     * The time of the last status change.
     */
    public /*out*/ readonly lastStatusChange!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    public readonly locationData!: pulumi.Output<types.outputs.hybridcompute.v20200815preview.LocationDataResponse | undefined>;
    /**
     * Specifies the hybrid machine FQDN.
     */
    public /*out*/ readonly machineFqdn!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The Operating System running on the hybrid machine.
     */
    public /*out*/ readonly osName!: pulumi.Output<string>;
    /**
     * Specifies the operating system settings for the hybrid machine.
     */
    public /*out*/ readonly osProfile!: pulumi.Output<types.outputs.hybridcompute.v20200815preview.MachinePropertiesResponseOsProfile | undefined>;
    /**
     * Specifies the Operating System product SKU.
     */
    public /*out*/ readonly osSku!: pulumi.Output<string>;
    /**
     * The version of Operating System running on the hybrid machine.
     */
    public /*out*/ readonly osVersion!: pulumi.Output<string>;
    /**
     * List of private link scoped resources associated with this machine.
     */
    public /*out*/ readonly privateLinkScopedResources!: pulumi.Output<string[]>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The status of the hybrid machine agent.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Specifies the hybrid machine unique ID.
     */
    public readonly vmId!: pulumi.Output<string | undefined>;
    /**
     * Specifies the Arc Machine's unique SMBIOS ID
     */
    public /*out*/ readonly vmUuid!: pulumi.Output<string>;

    /**
     * Create a Machine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clientPublicKey"] = args ? args.clientPublicKey : undefined;
            resourceInputs["extensions"] = args ? args.extensions : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["locationData"] = args ? args.locationData : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vmId"] = args ? args.vmId : undefined;
            resourceInputs["adFqdn"] = undefined /*out*/;
            resourceInputs["agentVersion"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["dnsFqdn"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["errorDetails"] = undefined /*out*/;
            resourceInputs["lastStatusChange"] = undefined /*out*/;
            resourceInputs["machineFqdn"] = undefined /*out*/;
            resourceInputs["osName"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["osSku"] = undefined /*out*/;
            resourceInputs["osVersion"] = undefined /*out*/;
            resourceInputs["privateLinkScopedResources"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmUuid"] = undefined /*out*/;
        } else {
            resourceInputs["adFqdn"] = undefined /*out*/;
            resourceInputs["agentVersion"] = undefined /*out*/;
            resourceInputs["clientPublicKey"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["dnsFqdn"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["errorDetails"] = undefined /*out*/;
            resourceInputs["extensions"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["lastStatusChange"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["locationData"] = undefined /*out*/;
            resourceInputs["machineFqdn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osName"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["osSku"] = undefined /*out*/;
            resourceInputs["osVersion"] = undefined /*out*/;
            resourceInputs["privateLinkScopedResources"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
            resourceInputs["vmUuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcompute:Machine" }, { type: "azure-native:hybridcompute/v20190318preview:Machine" }, { type: "azure-native:hybridcompute/v20190802preview:Machine" }, { type: "azure-native:hybridcompute/v20191212:Machine" }, { type: "azure-native:hybridcompute/v20200730preview:Machine" }, { type: "azure-native:hybridcompute/v20200802:Machine" }, { type: "azure-native:hybridcompute/v20210128preview:Machine" }, { type: "azure-native:hybridcompute/v20210325preview:Machine" }, { type: "azure-native:hybridcompute/v20210422preview:Machine" }, { type: "azure-native:hybridcompute/v20210517preview:Machine" }, { type: "azure-native:hybridcompute/v20210520:Machine" }, { type: "azure-native:hybridcompute/v20210610preview:Machine" }, { type: "azure-native:hybridcompute/v20211210preview:Machine" }, { type: "azure-native:hybridcompute/v20220310:Machine" }, { type: "azure-native:hybridcompute/v20220510preview:Machine" }, { type: "azure-native:hybridcompute/v20220811preview:Machine" }, { type: "azure-native:hybridcompute/v20221110:Machine" }, { type: "azure-native:hybridcompute/v20221227:Machine" }, { type: "azure-native:hybridcompute/v20221227preview:Machine" }, { type: "azure-native:hybridcompute/v20230315preview:Machine" }, { type: "azure-native:hybridcompute/v20230620preview:Machine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Machine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Machine resource.
 */
export interface MachineArgs {
    /**
     * Public Key that the client provides to be used during initial resource onboarding
     */
    clientPublicKey?: pulumi.Input<string>;
    /**
     * Machine Extensions information
     */
    extensions?: pulumi.Input<pulumi.Input<types.inputs.hybridcompute.v20200815preview.MachineExtensionInstanceViewArgs>[]>;
    identity?: pulumi.Input<types.inputs.hybridcompute.v20200815preview.MachineIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    locationData?: pulumi.Input<types.inputs.hybridcompute.v20200815preview.LocationDataArgs>;
    /**
     * The name of the hybrid machine.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the hybrid machine unique ID.
     */
    vmId?: pulumi.Input<string>;
}
