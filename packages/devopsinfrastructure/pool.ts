import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Concrete tracked resource types can be created by aliasing this type using a specific property type.
 *
 * Uses Azure REST API version 2025-01-21. In version 2.x of the Azure Native provider, it used API version 2023-10-30-preview.
 *
 * Other available API versions: 2023-10-30-preview, 2023-12-13-preview, 2024-03-26-preview, 2024-04-04-preview, 2024-10-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devopsinfrastructure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Pool extends pulumi.CustomResource {
    /**
     * Get an existing Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Pool {
        return new Pool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devopsinfrastructure:Pool';

    /**
     * Returns true if the given object is an instance of Pool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pool.__pulumiType;
    }

    /**
     * Defines how the machine will be handled once it executed a job.
     */
    public readonly agentProfile!: pulumi.Output<types.outputs.StatefulResponse | types.outputs.StatelessAgentProfileResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The resource id of the DevCenter Project the pool belongs to.
     */
    public readonly devCenterProjectResourceId!: pulumi.Output<string>;
    /**
     * Defines the type of fabric the agent will run on.
     */
    public readonly fabricProfile!: pulumi.Output<types.outputs.VmssFabricProfileResponse>;
    /**
     * The managed service identities assigned to this resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Defines how many resources can there be created at any given time.
     */
    public readonly maximumConcurrency!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines the organization in which the pool will be used.
     */
    public readonly organizationProfile!: pulumi.Output<types.outputs.AzureDevOpsOrganizationProfileResponse | types.outputs.GitHubOrganizationProfileResponse>;
    /**
     * The status of the current operation.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
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
     * Create a Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.agentProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agentProfile'");
            }
            if ((!args || args.devCenterProjectResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'devCenterProjectResourceId'");
            }
            if ((!args || args.fabricProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricProfile'");
            }
            if ((!args || args.maximumConcurrency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'maximumConcurrency'");
            }
            if ((!args || args.organizationProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationProfile'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["agentProfile"] = args ? args.agentProfile : undefined;
            resourceInputs["devCenterProjectResourceId"] = args ? args.devCenterProjectResourceId : undefined;
            resourceInputs["fabricProfile"] = args ? args.fabricProfile : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maximumConcurrency"] = args ? args.maximumConcurrency : undefined;
            resourceInputs["organizationProfile"] = args ? args.organizationProfile : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["agentProfile"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["devCenterProjectResourceId"] = undefined /*out*/;
            resourceInputs["fabricProfile"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maximumConcurrency"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["organizationProfile"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devopsinfrastructure/v20231030preview:Pool" }, { type: "azure-native:devopsinfrastructure/v20231213preview:Pool" }, { type: "azure-native:devopsinfrastructure/v20240326preview:Pool" }, { type: "azure-native:devopsinfrastructure/v20240404preview:Pool" }, { type: "azure-native:devopsinfrastructure/v20241019:Pool" }, { type: "azure-native:devopsinfrastructure/v20250121:Pool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Pool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Pool resource.
 */
export interface PoolArgs {
    /**
     * Defines how the machine will be handled once it executed a job.
     */
    agentProfile: pulumi.Input<types.inputs.StatefulArgs | types.inputs.StatelessAgentProfileArgs>;
    /**
     * The resource id of the DevCenter Project the pool belongs to.
     */
    devCenterProjectResourceId: pulumi.Input<string>;
    /**
     * Defines the type of fabric the agent will run on.
     */
    fabricProfile: pulumi.Input<types.inputs.VmssFabricProfileArgs>;
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Defines how many resources can there be created at any given time.
     */
    maximumConcurrency: pulumi.Input<number>;
    /**
     * Defines the organization in which the pool will be used.
     */
    organizationProfile: pulumi.Input<types.inputs.AzureDevOpsOrganizationProfileArgs | types.inputs.GitHubOrganizationProfileArgs>;
    /**
     * Name of the pool. It needs to be globally unique.
     */
    poolName?: pulumi.Input<string>;
    /**
     * The status of the current operation.
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningState>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}