import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The agentpool that has the ARM resource and properties.
 * The agentpool will have all information to create an agent pool.
 *
 * Uses Azure REST API version 2019-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2019-06-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AgentPool extends pulumi.CustomResource {
    /**
     * Get an existing AgentPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AgentPool {
        return new AgentPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry:AgentPool';

    /**
     * Returns true if the given object is an instance of AgentPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AgentPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AgentPool.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The count of agent machine
     */
    public readonly count!: pulumi.Output<number | undefined>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The OS of agent machine
     */
    public readonly os!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of this agent pool
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Tier of agent machine
     */
    public readonly tier!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The Virtual Network Subnet Resource Id of the agent machine
     */
    public readonly virtualNetworkSubnetResourceId!: pulumi.Output<string | undefined>;

    /**
     * Create a AgentPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AgentPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["agentPoolName"] = args ? args.agentPoolName : undefined;
            resourceInputs["count"] = args ? args.count : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["os"] = args ? args.os : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tier"] = args ? args.tier : undefined;
            resourceInputs["virtualNetworkSubnetResourceId"] = args ? args.virtualNetworkSubnetResourceId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["count"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["os"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tier"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkSubnetResourceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry/v20190601preview:AgentPool" }, { type: "azure-native:containerregistry/v20250301preview:AgentPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AgentPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AgentPool resource.
 */
export interface AgentPoolArgs {
    /**
     * The name of the agent pool.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * The count of agent machine
     */
    count?: pulumi.Input<number>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    location?: pulumi.Input<string>;
    /**
     * The OS of agent machine
     */
    os?: pulumi.Input<string | types.enums.OS>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Tier of agent machine
     */
    tier?: pulumi.Input<string>;
    /**
     * The Virtual Network Subnet Resource Id of the agent machine
     */
    virtualNetworkSubnetResourceId?: pulumi.Input<string>;
}