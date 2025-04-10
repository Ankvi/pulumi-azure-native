import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App.
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2023-12-01.
 */
export class ContainerApp extends pulumi.CustomResource {
    /**
     * Get an existing ContainerApp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContainerApp {
        return new ContainerApp(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:ContainerApp';

    /**
     * Returns true if the given object is an instance of ContainerApp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerApp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerApp.__pulumiType;
    }

    /**
     * Non versioned Container App configuration properties.
     */
    public readonly configuration!: pulumi.Output<types.outputs.ConfigurationResponse | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource ID of the Container App's KubeEnvironment.
     */
    public readonly kubeEnvironmentId!: pulumi.Output<string | undefined>;
    /**
     * Fully Qualified Domain Name of the latest revision of the Container App.
     */
    public /*out*/ readonly latestRevisionFqdn!: pulumi.Output<string>;
    /**
     * Name of the latest revision of the Container App.
     */
    public /*out*/ readonly latestRevisionName!: pulumi.Output<string>;
    /**
     * Resource Location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the Container App.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Container App versioned application definition.
     */
    public readonly template!: pulumi.Output<types.outputs.TemplateResponse | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ContainerApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerAppArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["configuration"] = args ? (args.configuration ? pulumi.output(args.configuration).apply(types.inputs.configurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["kubeEnvironmentId"] = args ? args.kubeEnvironmentId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["latestRevisionFqdn"] = undefined /*out*/;
            resourceInputs["latestRevisionName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["configuration"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["kubeEnvironmentId"] = undefined /*out*/;
            resourceInputs["latestRevisionFqdn"] = undefined /*out*/;
            resourceInputs["latestRevisionName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["template"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20210301:ContainerApp" }, { type: "azure-native:web/v20220301:ContainerApp" }, { type: "azure-native:web/v20220901:ContainerApp" }, { type: "azure-native:web/v20230101:ContainerApp" }, { type: "azure-native:web/v20231201:ContainerApp" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContainerApp.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContainerApp resource.
 */
export interface ContainerAppArgs {
    /**
     * Non versioned Container App configuration properties.
     */
    configuration?: pulumi.Input<types.inputs.ConfigurationArgs>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource ID of the Container App's KubeEnvironment.
     */
    kubeEnvironmentId?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Container App.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Container App versioned application definition.
     */
    template?: pulumi.Input<types.inputs.TemplateArgs>;
}