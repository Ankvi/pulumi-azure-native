import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * disk access resource.
 *
 * Uses Azure REST API version 2024-03-02. In version 2.x of the Azure Native provider, it used API version 2022-07-02.
 *
 * Other available API versions: 2022-07-02, 2023-01-02, 2023-04-02, 2023-10-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DiskAccess extends pulumi.CustomResource {
    /**
     * Get an existing DiskAccess resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DiskAccess {
        return new DiskAccess(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:DiskAccess';

    /**
     * Returns true if the given object is an instance of DiskAccess.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiskAccess {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DiskAccess.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The extended location where the disk access will be created. Extended location cannot be changed.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * The disk access resource provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The time when the disk access was created.
     */
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DiskAccess resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskAccessArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["diskAccessName"] = args ? args.diskAccessName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20200501:DiskAccess" }, { type: "azure-native:compute/v20200630:DiskAccess" }, { type: "azure-native:compute/v20200930:DiskAccess" }, { type: "azure-native:compute/v20201201:DiskAccess" }, { type: "azure-native:compute/v20210401:DiskAccess" }, { type: "azure-native:compute/v20210801:DiskAccess" }, { type: "azure-native:compute/v20211201:DiskAccess" }, { type: "azure-native:compute/v20220302:DiskAccess" }, { type: "azure-native:compute/v20220702:DiskAccess" }, { type: "azure-native:compute/v20230102:DiskAccess" }, { type: "azure-native:compute/v20230402:DiskAccess" }, { type: "azure-native:compute/v20231002:DiskAccess" }, { type: "azure-native:compute/v20240302:DiskAccess" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DiskAccess.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DiskAccess resource.
 */
export interface DiskAccessArgs {
    /**
     * The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskAccessName?: pulumi.Input<string>;
    /**
     * The extended location where the disk access will be created. Extended location cannot be changed.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}