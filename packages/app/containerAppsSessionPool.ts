import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App session pool.
 *
 * Uses Azure REST API version 2024-10-02-preview. In version 2.x of the Azure Native provider, it used API version 2024-02-02-preview.
 *
 * Other available API versions: 2024-02-02-preview, 2024-08-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ContainerAppsSessionPool extends pulumi.CustomResource {
    /**
     * Get an existing ContainerAppsSessionPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContainerAppsSessionPool {
        return new ContainerAppsSessionPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:ContainerAppsSessionPool';

    /**
     * Returns true if the given object is an instance of ContainerAppsSessionPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerAppsSessionPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerAppsSessionPool.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The container type of the sessions.
     */
    public readonly containerType!: pulumi.Output<string | undefined>;
    /**
     * The custom container configuration if the containerType is CustomContainer.
     */
    public readonly customContainerTemplate!: pulumi.Output<types.outputs.CustomContainerTemplateResponse | undefined>;
    /**
     * The pool configuration if the poolManagementType is dynamic.
     */
    public readonly dynamicPoolConfiguration!: pulumi.Output<types.outputs.DynamicPoolConfigurationResponse | undefined>;
    /**
     * Resource ID of the session pool's environment.
     */
    public readonly environmentId!: pulumi.Output<string | undefined>;
    /**
     * Managed identities needed by a session pool to interact with other Azure services to not maintain any secrets or credentials in code.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Optional settings for a Managed Identity that is assigned to the Session pool.
     */
    public readonly managedIdentitySettings!: pulumi.Output<types.outputs.ManagedIdentitySettingResponse[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The number of nodes the session pool is using.
     */
    public /*out*/ readonly nodeCount!: pulumi.Output<number>;
    /**
     * The endpoint to manage the pool.
     */
    public /*out*/ readonly poolManagementEndpoint!: pulumi.Output<string>;
    /**
     * The pool management type of the session pool.
     */
    public readonly poolManagementType!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the session pool.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The scale configuration of the session pool.
     */
    public readonly scaleConfiguration!: pulumi.Output<types.outputs.ScaleConfigurationResponse | undefined>;
    /**
     * The secrets of the session pool.
     */
    public readonly secrets!: pulumi.Output<types.outputs.SessionPoolSecretResponse[] | undefined>;
    /**
     * The network configuration of the sessions in the session pool.
     */
    public readonly sessionNetworkConfiguration!: pulumi.Output<types.outputs.SessionNetworkConfigurationResponse | undefined>;
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
     * Create a ContainerAppsSessionPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerAppsSessionPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["containerType"] = args ? args.containerType : undefined;
            resourceInputs["customContainerTemplate"] = args ? args.customContainerTemplate : undefined;
            resourceInputs["dynamicPoolConfiguration"] = args ? args.dynamicPoolConfiguration : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedIdentitySettings"] = args ? args.managedIdentitySettings : undefined;
            resourceInputs["poolManagementType"] = args ? args.poolManagementType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scaleConfiguration"] = args ? args.scaleConfiguration : undefined;
            resourceInputs["secrets"] = args ? args.secrets : undefined;
            resourceInputs["sessionNetworkConfiguration"] = args ? args.sessionNetworkConfiguration : undefined;
            resourceInputs["sessionPoolName"] = args ? args.sessionPoolName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeCount"] = undefined /*out*/;
            resourceInputs["poolManagementEndpoint"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["containerType"] = undefined /*out*/;
            resourceInputs["customContainerTemplate"] = undefined /*out*/;
            resourceInputs["dynamicPoolConfiguration"] = undefined /*out*/;
            resourceInputs["environmentId"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedIdentitySettings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeCount"] = undefined /*out*/;
            resourceInputs["poolManagementEndpoint"] = undefined /*out*/;
            resourceInputs["poolManagementType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scaleConfiguration"] = undefined /*out*/;
            resourceInputs["secrets"] = undefined /*out*/;
            resourceInputs["sessionNetworkConfiguration"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20240202preview:ContainerAppsSessionPool" }, { type: "azure-native:app/v20240802preview:ContainerAppsSessionPool" }, { type: "azure-native:app/v20241002preview:ContainerAppsSessionPool" }, { type: "azure-native:app/v20250101:ContainerAppsSessionPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContainerAppsSessionPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContainerAppsSessionPool resource.
 */
export interface ContainerAppsSessionPoolArgs {
    /**
     * The container type of the sessions.
     */
    containerType?: pulumi.Input<string | types.enums.ContainerType>;
    /**
     * The custom container configuration if the containerType is CustomContainer.
     */
    customContainerTemplate?: pulumi.Input<types.inputs.CustomContainerTemplateArgs>;
    /**
     * The pool configuration if the poolManagementType is dynamic.
     */
    dynamicPoolConfiguration?: pulumi.Input<types.inputs.DynamicPoolConfigurationArgs>;
    /**
     * Resource ID of the session pool's environment.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * Managed identities needed by a session pool to interact with other Azure services to not maintain any secrets or credentials in code.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Optional settings for a Managed Identity that is assigned to the Session pool.
     */
    managedIdentitySettings?: pulumi.Input<pulumi.Input<types.inputs.ManagedIdentitySettingArgs>[]>;
    /**
     * The pool management type of the session pool.
     */
    poolManagementType?: pulumi.Input<string | types.enums.PoolManagementType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The scale configuration of the session pool.
     */
    scaleConfiguration?: pulumi.Input<types.inputs.ScaleConfigurationArgs>;
    /**
     * The secrets of the session pool.
     */
    secrets?: pulumi.Input<pulumi.Input<types.inputs.SessionPoolSecretArgs>[]>;
    /**
     * The network configuration of the sessions in the session pool.
     */
    sessionNetworkConfiguration?: pulumi.Input<types.inputs.SessionNetworkConfigurationArgs>;
    /**
     * Name of the session pool.
     */
    sessionPoolName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}