import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details about environment name, metadata and environment id of an environment
 *
 * Uses Azure REST API version 2024-07-01. In version 2.x of the Azure Native provider, it used API version 2024-07-01.
 */
export class OrganizationEnvironmentById extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationEnvironmentById resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OrganizationEnvironmentById {
        return new OrganizationEnvironmentById(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:confluent:OrganizationEnvironmentById';

    /**
     * Returns true if the given object is an instance of OrganizationEnvironmentById.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationEnvironmentById {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationEnvironmentById.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Type of environment
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Metadata of the record
     */
    public readonly metadata!: pulumi.Output<types.outputs.SCMetadataEntityResponse | undefined>;
    /**
     * Display name of the environment
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Stream governance configuration
     */
    public readonly streamGovernanceConfig!: pulumi.Output<types.outputs.StreamGovernanceConfigResponse | undefined>;
    /**
     * Type of the resource
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a OrganizationEnvironmentById resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationEnvironmentByIdArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.organizationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organizationName"] = args ? args.organizationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["streamGovernanceConfig"] = args ? args.streamGovernanceConfig : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["streamGovernanceConfig"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:confluent/v20240701:OrganizationEnvironmentById" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OrganizationEnvironmentById.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OrganizationEnvironmentById resource.
 */
export interface OrganizationEnvironmentByIdArgs {
    /**
     * Confluent environment id
     */
    environmentId?: pulumi.Input<string>;
    /**
     * Id of the environment
     */
    id?: pulumi.Input<string>;
    /**
     * Type of environment
     */
    kind?: pulumi.Input<string>;
    /**
     * Metadata of the record
     */
    metadata?: pulumi.Input<types.inputs.SCMetadataEntityArgs>;
    /**
     * Display name of the environment
     */
    name?: pulumi.Input<string>;
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Stream governance configuration
     */
    streamGovernanceConfig?: pulumi.Input<types.inputs.StreamGovernanceConfigArgs>;
    /**
     * Type of the resource
     */
    type?: pulumi.Input<string>;
}