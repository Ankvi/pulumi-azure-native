import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A container group.
 *
 * Uses Azure REST API version 2024-05-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-05-01.
 *
 * Other available API versions: 2023-05-01, 2024-09-01-preview, 2024-10-01-preview, 2024-11-01-preview, 2025-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerinstance [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ContainerGroup extends pulumi.CustomResource {
    /**
     * Get an existing ContainerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContainerGroup {
        return new ContainerGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerinstance:ContainerGroup';

    /**
     * Returns true if the given object is an instance of ContainerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The properties for confidential container group
     */
    public readonly confidentialComputeProperties!: pulumi.Output<types.outputs.ConfidentialComputePropertiesResponse | undefined>;
    /**
     * The reference container group profile properties.
     */
    public readonly containerGroupProfile!: pulumi.Output<types.outputs.ContainerGroupProfileReferenceDefinitionResponse | undefined>;
    /**
     * The containers within the container group.
     */
    public readonly containers!: pulumi.Output<types.outputs.ContainerResponse[]>;
    /**
     * The diagnostic information for a container group.
     */
    public readonly diagnostics!: pulumi.Output<types.outputs.ContainerGroupDiagnosticsResponse | undefined>;
    /**
     * The DNS config information for a container group.
     */
    public readonly dnsConfig!: pulumi.Output<types.outputs.DnsConfigurationResponse | undefined>;
    /**
     * The encryption properties for a container group.
     */
    public readonly encryptionProperties!: pulumi.Output<types.outputs.EncryptionPropertiesResponse | undefined>;
    /**
     * extensions used by virtual kubelet
     */
    public readonly extensions!: pulumi.Output<types.outputs.DeploymentExtensionSpecResponse[] | undefined>;
    /**
     * The identity of the container group, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.ContainerGroupIdentityResponse | undefined>;
    /**
     * The image registry credentials by which the container group is created from.
     */
    public readonly imageRegistryCredentials!: pulumi.Output<types.outputs.ImageRegistryCredentialResponse[] | undefined>;
    /**
     * The init containers for a container group.
     */
    public readonly initContainers!: pulumi.Output<types.outputs.InitContainerDefinitionResponse[] | undefined>;
    /**
     * The instance view of the container group. Only valid in response.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.ContainerGroupPropertiesResponseInstanceView>;
    /**
     * The IP address type of the container group.
     */
    public readonly ipAddress!: pulumi.Output<types.outputs.IpAddressResponse | undefined>;
    /**
     * The flag indicating whether the container group is created by standby pool.
     */
    public /*out*/ readonly isCreatedFromStandbyPool!: pulumi.Output<boolean>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The operating system type required by the containers in the container group.
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * The priority of the container group.
     */
    public readonly priority!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the container group. This only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Restart policy for all containers within the container group. 
     * - `Always` Always restart
     * - `OnFailure` Restart on failure
     * - `Never` Never restart
     */
    public readonly restartPolicy!: pulumi.Output<string | undefined>;
    /**
     * The SKU for a container group.
     */
    public readonly sku!: pulumi.Output<string | undefined>;
    /**
     * The reference standby pool profile properties.
     */
    public readonly standbyPoolProfile!: pulumi.Output<types.outputs.StandbyPoolProfileDefinitionResponse | undefined>;
    /**
     * The subnet resource IDs for a container group.
     */
    public readonly subnetIds!: pulumi.Output<types.outputs.ContainerGroupSubnetIdResponse[] | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The list of volumes that can be mounted by containers in this container group.
     */
    public readonly volumes!: pulumi.Output<types.outputs.VolumeResponse[] | undefined>;
    /**
     * The zones for the container group.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ContainerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.containers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containers'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["confidentialComputeProperties"] = args ? args.confidentialComputeProperties : undefined;
            resourceInputs["containerGroupName"] = args ? args.containerGroupName : undefined;
            resourceInputs["containerGroupProfile"] = args ? args.containerGroupProfile : undefined;
            resourceInputs["containers"] = args ? args.containers : undefined;
            resourceInputs["diagnostics"] = args ? args.diagnostics : undefined;
            resourceInputs["dnsConfig"] = args ? args.dnsConfig : undefined;
            resourceInputs["encryptionProperties"] = args ? args.encryptionProperties : undefined;
            resourceInputs["extensions"] = args ? args.extensions : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["imageRegistryCredentials"] = args ? args.imageRegistryCredentials : undefined;
            resourceInputs["initContainers"] = args ? args.initContainers : undefined;
            resourceInputs["ipAddress"] = args ? (args.ipAddress ? pulumi.output(args.ipAddress).apply(types.inputs.ipAddressArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restartPolicy"] = args ? args.restartPolicy : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["standbyPoolProfile"] = args ? args.standbyPoolProfile : undefined;
            resourceInputs["subnetIds"] = args ? args.subnetIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["volumes"] = args ? args.volumes : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["isCreatedFromStandbyPool"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["confidentialComputeProperties"] = undefined /*out*/;
            resourceInputs["containerGroupProfile"] = undefined /*out*/;
            resourceInputs["containers"] = undefined /*out*/;
            resourceInputs["diagnostics"] = undefined /*out*/;
            resourceInputs["dnsConfig"] = undefined /*out*/;
            resourceInputs["encryptionProperties"] = undefined /*out*/;
            resourceInputs["extensions"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["imageRegistryCredentials"] = undefined /*out*/;
            resourceInputs["initContainers"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["isCreatedFromStandbyPool"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["restartPolicy"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["standbyPoolProfile"] = undefined /*out*/;
            resourceInputs["subnetIds"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumes"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerinstance/v20170801preview:ContainerGroup" }, { type: "azure-native:containerinstance/v20171001preview:ContainerGroup" }, { type: "azure-native:containerinstance/v20171201preview:ContainerGroup" }, { type: "azure-native:containerinstance/v20180201preview:ContainerGroup" }, { type: "azure-native:containerinstance/v20180401:ContainerGroup" }, { type: "azure-native:containerinstance/v20180601:ContainerGroup" }, { type: "azure-native:containerinstance/v20180901:ContainerGroup" }, { type: "azure-native:containerinstance/v20181001:ContainerGroup" }, { type: "azure-native:containerinstance/v20191201:ContainerGroup" }, { type: "azure-native:containerinstance/v20201101:ContainerGroup" }, { type: "azure-native:containerinstance/v20210301:ContainerGroup" }, { type: "azure-native:containerinstance/v20210701:ContainerGroup" }, { type: "azure-native:containerinstance/v20210901:ContainerGroup" }, { type: "azure-native:containerinstance/v20211001:ContainerGroup" }, { type: "azure-native:containerinstance/v20220901:ContainerGroup" }, { type: "azure-native:containerinstance/v20221001preview:ContainerGroup" }, { type: "azure-native:containerinstance/v20230201preview:ContainerGroup" }, { type: "azure-native:containerinstance/v20230501:ContainerGroup" }, { type: "azure-native:containerinstance/v20240501preview:ContainerGroup" }, { type: "azure-native:containerinstance/v20240901preview:ContainerGroup" }, { type: "azure-native:containerinstance/v20241001preview:ContainerGroup" }, { type: "azure-native:containerinstance/v20241101preview:ContainerGroup" }, { type: "azure-native:containerinstance/v20250901:ContainerGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContainerGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContainerGroup resource.
 */
export interface ContainerGroupArgs {
    /**
     * The properties for confidential container group
     */
    confidentialComputeProperties?: pulumi.Input<types.inputs.ConfidentialComputePropertiesArgs>;
    /**
     * The name of the container group.
     */
    containerGroupName?: pulumi.Input<string>;
    /**
     * The reference container group profile properties.
     */
    containerGroupProfile?: pulumi.Input<types.inputs.ContainerGroupProfileReferenceDefinitionArgs>;
    /**
     * The containers within the container group.
     */
    containers: pulumi.Input<pulumi.Input<types.inputs.ContainerArgs>[]>;
    /**
     * The diagnostic information for a container group.
     */
    diagnostics?: pulumi.Input<types.inputs.ContainerGroupDiagnosticsArgs>;
    /**
     * The DNS config information for a container group.
     */
    dnsConfig?: pulumi.Input<types.inputs.DnsConfigurationArgs>;
    /**
     * The encryption properties for a container group.
     */
    encryptionProperties?: pulumi.Input<types.inputs.EncryptionPropertiesArgs>;
    /**
     * extensions used by virtual kubelet
     */
    extensions?: pulumi.Input<pulumi.Input<types.inputs.DeploymentExtensionSpecArgs>[]>;
    /**
     * The identity of the container group, if configured.
     */
    identity?: pulumi.Input<types.inputs.ContainerGroupIdentityArgs>;
    /**
     * The image registry credentials by which the container group is created from.
     */
    imageRegistryCredentials?: pulumi.Input<pulumi.Input<types.inputs.ImageRegistryCredentialArgs>[]>;
    /**
     * The init containers for a container group.
     */
    initContainers?: pulumi.Input<pulumi.Input<types.inputs.InitContainerDefinitionArgs>[]>;
    /**
     * The IP address type of the container group.
     */
    ipAddress?: pulumi.Input<types.inputs.IpAddressArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The operating system type required by the containers in the container group.
     */
    osType?: pulumi.Input<string | types.enums.OperatingSystemTypes>;
    /**
     * The priority of the container group.
     */
    priority?: pulumi.Input<string | types.enums.ContainerGroupPriority>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Restart policy for all containers within the container group. 
     * - `Always` Always restart
     * - `OnFailure` Restart on failure
     * - `Never` Never restart
     */
    restartPolicy?: pulumi.Input<string | types.enums.ContainerGroupRestartPolicy>;
    /**
     * The SKU for a container group.
     */
    sku?: pulumi.Input<string | types.enums.ContainerGroupSku>;
    /**
     * The reference standby pool profile properties.
     */
    standbyPoolProfile?: pulumi.Input<types.inputs.StandbyPoolProfileDefinitionArgs>;
    /**
     * The subnet resource IDs for a container group.
     */
    subnetIds?: pulumi.Input<pulumi.Input<types.inputs.ContainerGroupSubnetIdArgs>[]>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The list of volumes that can be mounted by containers in this container group.
     */
    volumes?: pulumi.Input<pulumi.Input<types.inputs.VolumeArgs>[]>;
    /**
     * The zones for the container group.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}