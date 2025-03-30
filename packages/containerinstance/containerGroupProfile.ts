import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A container group profile.
 *
 * Uses Azure REST API version 2024-05-01-preview.
 */
export class ContainerGroupProfile extends pulumi.CustomResource {
    /**
     * Get an existing ContainerGroupProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContainerGroupProfile {
        return new ContainerGroupProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerinstance:ContainerGroupProfile';

    /**
     * Returns true if the given object is an instance of ContainerGroupProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerGroupProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerGroupProfile.__pulumiType;
    }

    /**
     * The properties for confidential container group
     */
    public readonly confidentialComputeProperties!: pulumi.Output<types.outputs.ConfidentialComputePropertiesResponse | undefined>;
    /**
     * The containers within the container group.
     */
    public readonly containers!: pulumi.Output<types.outputs.ContainerResponse[]>;
    /**
     * The diagnostic information for a container group.
     */
    public readonly diagnostics!: pulumi.Output<types.outputs.ContainerGroupDiagnosticsResponse | undefined>;
    /**
     * The encryption properties for a container group.
     */
    public readonly encryptionProperties!: pulumi.Output<types.outputs.EncryptionPropertiesResponse | undefined>;
    /**
     * extensions used by virtual kubelet
     */
    public readonly extensions!: pulumi.Output<types.outputs.DeploymentExtensionSpecResponse[] | undefined>;
    /**
     * The image registry credentials by which the container group is created from.
     */
    public readonly imageRegistryCredentials!: pulumi.Output<types.outputs.ImageRegistryCredentialResponse[] | undefined>;
    /**
     * The init containers for a container group.
     */
    public readonly initContainers!: pulumi.Output<types.outputs.InitContainerDefinitionResponse[] | undefined>;
    /**
     * The IP address type of the container group.
     */
    public readonly ipAddress!: pulumi.Output<types.outputs.IpAddressResponse | undefined>;
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
    public readonly osType!: pulumi.Output<string>;
    /**
     * The priority of the container group.
     */
    public readonly priority!: pulumi.Output<string | undefined>;
    /**
     * Restart policy for all containers within the container group. 
     * - `Always` Always restart
     * - `OnFailure` Restart on failure
     * - `Never` Never restart
     */
    public readonly restartPolicy!: pulumi.Output<string | undefined>;
    /**
     * The container group profile current revision number. This only appears in the response.
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * The SKU for a container group.
     */
    public readonly sku!: pulumi.Output<string | undefined>;
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
     * Create a ContainerGroupProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerGroupProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.containers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containers'");
            }
            if ((!args || args.osType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'osType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["confidentialComputeProperties"] = args ? args.confidentialComputeProperties : undefined;
            resourceInputs["containerGroupProfileName"] = args ? args.containerGroupProfileName : undefined;
            resourceInputs["containers"] = args ? args.containers : undefined;
            resourceInputs["diagnostics"] = args ? args.diagnostics : undefined;
            resourceInputs["encryptionProperties"] = args ? args.encryptionProperties : undefined;
            resourceInputs["extensions"] = args ? args.extensions : undefined;
            resourceInputs["imageRegistryCredentials"] = args ? args.imageRegistryCredentials : undefined;
            resourceInputs["initContainers"] = args ? args.initContainers : undefined;
            resourceInputs["ipAddress"] = args ? (args.ipAddress ? pulumi.output(args.ipAddress).apply(types.inputs.ipAddressArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restartPolicy"] = args ? args.restartPolicy : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["volumes"] = args ? args.volumes : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["confidentialComputeProperties"] = undefined /*out*/;
            resourceInputs["containers"] = undefined /*out*/;
            resourceInputs["diagnostics"] = undefined /*out*/;
            resourceInputs["encryptionProperties"] = undefined /*out*/;
            resourceInputs["extensions"] = undefined /*out*/;
            resourceInputs["imageRegistryCredentials"] = undefined /*out*/;
            resourceInputs["initContainers"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["restartPolicy"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumes"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerinstance/v20240501preview:ContainerGroupProfile" }, { type: "azure-native:containerinstance/v20241101preview:ContainerGroupProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContainerGroupProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContainerGroupProfile resource.
 */
export interface ContainerGroupProfileArgs {
    /**
     * The properties for confidential container group
     */
    confidentialComputeProperties?: pulumi.Input<types.inputs.ConfidentialComputePropertiesArgs>;
    /**
     * The name of the container group profile.
     */
    containerGroupProfileName?: pulumi.Input<string>;
    /**
     * The containers within the container group.
     */
    containers: pulumi.Input<pulumi.Input<types.inputs.ContainerArgs>[]>;
    /**
     * The diagnostic information for a container group.
     */
    diagnostics?: pulumi.Input<types.inputs.ContainerGroupDiagnosticsArgs>;
    /**
     * The encryption properties for a container group.
     */
    encryptionProperties?: pulumi.Input<types.inputs.EncryptionPropertiesArgs>;
    /**
     * extensions used by virtual kubelet
     */
    extensions?: pulumi.Input<pulumi.Input<types.inputs.DeploymentExtensionSpecArgs>[]>;
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
    osType: pulumi.Input<string | types.enums.OperatingSystemTypes>;
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