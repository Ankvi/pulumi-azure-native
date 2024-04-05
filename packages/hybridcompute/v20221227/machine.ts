import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
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
    public static readonly __pulumiType = 'azure-native:hybridcompute/v20221227:Machine';

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
     * Configurable properties that the user can set locally via the azcmagent config command, or remotely via ARM.
     */
    public /*out*/ readonly agentConfiguration!: pulumi.Output<types.outputs.AgentConfigurationResponse>;
    /**
     * The info of the machine w.r.t Agent Upgrade
     */
    public readonly agentUpgrade!: pulumi.Output<types.outputs.AgentUpgradeResponse | undefined>;
    /**
     * The hybrid machine agent full version.
     */
    public /*out*/ readonly agentVersion!: pulumi.Output<string>;
    /**
     * Public Key that the client provides to be used during initial resource onboarding
     */
    public readonly clientPublicKey!: pulumi.Output<string | undefined>;
    /**
     * The metadata of the cloud environment (Azure/GCP/AWS/OCI...).
     */
    public /*out*/ readonly cloudMetadata!: pulumi.Output<types.outputs.CloudMetadataResponse | undefined>;
    /**
     * Detected properties from the machine.
     */
    public /*out*/ readonly detectedProperties!: pulumi.Output<{[key: string]: string}>;
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
    public /*out*/ readonly errorDetails!: pulumi.Output<types.outputs.ErrorDetailResponse[]>;
    /**
     * Machine Extensions information (deprecated field)
     */
    public readonly extensions!: pulumi.Output<types.outputs.MachineExtensionInstanceViewResponse[] | undefined>;
    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
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
    public readonly locationData!: pulumi.Output<types.outputs.LocationDataResponse | undefined>;
    /**
     * Specifies the hybrid machine FQDN.
     */
    public /*out*/ readonly machineFqdn!: pulumi.Output<string>;
    /**
     * Specifies whether any MS SQL instance is discovered on the machine.
     */
    public readonly mssqlDiscovered!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Operating System running on the hybrid machine.
     */
    public /*out*/ readonly osName!: pulumi.Output<string>;
    /**
     * Specifies the operating system settings for the hybrid machine.
     */
    public readonly osProfile!: pulumi.Output<types.outputs.OSProfileResponse | undefined>;
    /**
     * Specifies the Operating System product SKU.
     */
    public /*out*/ readonly osSku!: pulumi.Output<string>;
    /**
     * The type of Operating System (windows/linux).
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * The version of Operating System running on the hybrid machine.
     */
    public /*out*/ readonly osVersion!: pulumi.Output<string>;
    /**
     * The resource id of the parent cluster (Azure HCI) this machine is assigned to, if any.
     */
    public readonly parentClusterResourceId!: pulumi.Output<string | undefined>;
    /**
     * The resource id of the private link scope this machine is assigned to, if any.
     */
    public readonly privateLinkScopeResourceId!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The list of extensions affiliated to the machine
     */
    public /*out*/ readonly resources!: pulumi.Output<types.outputs.MachineExtensionResponse[]>;
    /**
     * Statuses of dependent services that are reported back to ARM.
     */
    public readonly serviceStatuses!: pulumi.Output<types.outputs.ServiceStatusesResponse | undefined>;
    /**
     * The status of the hybrid machine agent.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
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
            resourceInputs["agentUpgrade"] = args ? args.agentUpgrade : undefined;
            resourceInputs["clientPublicKey"] = args ? args.clientPublicKey : undefined;
            resourceInputs["extensions"] = args ? args.extensions : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["locationData"] = args ? args.locationData : undefined;
            resourceInputs["machineName"] = args ? args.machineName : undefined;
            resourceInputs["mssqlDiscovered"] = args ? args.mssqlDiscovered : undefined;
            resourceInputs["osProfile"] = args ? args.osProfile : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["parentClusterResourceId"] = args ? args.parentClusterResourceId : undefined;
            resourceInputs["privateLinkScopeResourceId"] = args ? args.privateLinkScopeResourceId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceStatuses"] = args ? args.serviceStatuses : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vmId"] = args ? args.vmId : undefined;
            resourceInputs["adFqdn"] = undefined /*out*/;
            resourceInputs["agentConfiguration"] = undefined /*out*/;
            resourceInputs["agentVersion"] = undefined /*out*/;
            resourceInputs["cloudMetadata"] = undefined /*out*/;
            resourceInputs["detectedProperties"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["dnsFqdn"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["errorDetails"] = undefined /*out*/;
            resourceInputs["lastStatusChange"] = undefined /*out*/;
            resourceInputs["machineFqdn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osName"] = undefined /*out*/;
            resourceInputs["osSku"] = undefined /*out*/;
            resourceInputs["osVersion"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmUuid"] = undefined /*out*/;
        } else {
            resourceInputs["adFqdn"] = undefined /*out*/;
            resourceInputs["agentConfiguration"] = undefined /*out*/;
            resourceInputs["agentUpgrade"] = undefined /*out*/;
            resourceInputs["agentVersion"] = undefined /*out*/;
            resourceInputs["clientPublicKey"] = undefined /*out*/;
            resourceInputs["cloudMetadata"] = undefined /*out*/;
            resourceInputs["detectedProperties"] = undefined /*out*/;
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
            resourceInputs["mssqlDiscovered"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osName"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["osSku"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["osVersion"] = undefined /*out*/;
            resourceInputs["parentClusterResourceId"] = undefined /*out*/;
            resourceInputs["privateLinkScopeResourceId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["serviceStatuses"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
            resourceInputs["vmUuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcompute:Machine" }, { type: "azure-native:hybridcompute/v20190318preview:Machine" }, { type: "azure-native:hybridcompute/v20190802preview:Machine" }, { type: "azure-native:hybridcompute/v20191212:Machine" }, { type: "azure-native:hybridcompute/v20200730preview:Machine" }, { type: "azure-native:hybridcompute/v20200802:Machine" }, { type: "azure-native:hybridcompute/v20200815preview:Machine" }, { type: "azure-native:hybridcompute/v20210128preview:Machine" }, { type: "azure-native:hybridcompute/v20210325preview:Machine" }, { type: "azure-native:hybridcompute/v20210422preview:Machine" }, { type: "azure-native:hybridcompute/v20210517preview:Machine" }, { type: "azure-native:hybridcompute/v20210520:Machine" }, { type: "azure-native:hybridcompute/v20210610preview:Machine" }, { type: "azure-native:hybridcompute/v20211210preview:Machine" }, { type: "azure-native:hybridcompute/v20220310:Machine" }, { type: "azure-native:hybridcompute/v20220510preview:Machine" }, { type: "azure-native:hybridcompute/v20220811preview:Machine" }, { type: "azure-native:hybridcompute/v20221110:Machine" }, { type: "azure-native:hybridcompute/v20221227preview:Machine" }, { type: "azure-native:hybridcompute/v20230315preview:Machine" }, { type: "azure-native:hybridcompute/v20230620preview:Machine" }, { type: "azure-native:hybridcompute/v20231003preview:Machine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Machine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Machine resource.
 */
export interface MachineArgs {
    /**
     * The info of the machine w.r.t Agent Upgrade
     */
    agentUpgrade?: pulumi.Input<types.inputs.AgentUpgradeArgs>;
    /**
     * Public Key that the client provides to be used during initial resource onboarding
     */
    clientPublicKey?: pulumi.Input<string>;
    /**
     * Machine Extensions information (deprecated field)
     */
    extensions?: pulumi.Input<pulumi.Input<types.inputs.MachineExtensionInstanceViewArgs>[]>;
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    locationData?: pulumi.Input<types.inputs.LocationDataArgs>;
    /**
     * The name of the hybrid machine.
     */
    machineName?: pulumi.Input<string>;
    /**
     * Specifies whether any MS SQL instance is discovered on the machine.
     */
    mssqlDiscovered?: pulumi.Input<string>;
    /**
     * Specifies the operating system settings for the hybrid machine.
     */
    osProfile?: pulumi.Input<types.inputs.OSProfileArgs>;
    /**
     * The type of Operating System (windows/linux).
     */
    osType?: pulumi.Input<string>;
    /**
     * The resource id of the parent cluster (Azure HCI) this machine is assigned to, if any.
     */
    parentClusterResourceId?: pulumi.Input<string>;
    /**
     * The resource id of the private link scope this machine is assigned to, if any.
     */
    privateLinkScopeResourceId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Statuses of dependent services that are reported back to ARM.
     */
    serviceStatuses?: pulumi.Input<types.inputs.ServiceStatusesArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the hybrid machine unique ID.
     */
    vmId?: pulumi.Input<string>;
}