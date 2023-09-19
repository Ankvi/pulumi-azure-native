import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App.
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
    public static readonly __pulumiType = 'azure-native:app/v20221001:ContainerApp';

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
     * Id used to verify domain name ownership
     */
    public /*out*/ readonly customDomainVerificationId!: pulumi.Output<string>;
    /**
     * Resource ID of environment.
     */
    public readonly environmentId!: pulumi.Output<string | undefined>;
    /**
     * The endpoint of the eventstream of the container app.
     */
    public /*out*/ readonly eventStreamEndpoint!: pulumi.Output<string>;
    /**
     * The complex type of the extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * managed identities for the Container App to interact with other Azure services without maintaining any secrets or credentials in code.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Name of the latest ready revision of the Container App.
     */
    public /*out*/ readonly latestReadyRevisionName!: pulumi.Output<string>;
    /**
     * Fully Qualified Domain Name of the latest revision of the Container App.
     */
    public /*out*/ readonly latestRevisionFqdn!: pulumi.Output<string>;
    /**
     * Name of the latest revision of the Container App.
     */
    public /*out*/ readonly latestRevisionName!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Deprecated. Resource ID of the Container App's environment.
     */
    public readonly managedEnvironmentId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Outbound IP Addresses for container app.
     */
    public /*out*/ readonly outboundIpAddresses!: pulumi.Output<string[]>;
    /**
     * Provisioning state of the Container App.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Container App versioned application definition.
     */
    public readonly template!: pulumi.Output<types.outputs.TemplateResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Workload profile type to pin for container app execution.
     */
    public readonly workloadProfileType!: pulumi.Output<string | undefined>;

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
            resourceInputs["containerAppName"] = args ? args.containerAppName : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedEnvironmentId"] = args ? args.managedEnvironmentId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["template"] = args ? (args.template ? pulumi.output(args.template).apply(types.inputs.templateArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["workloadProfileType"] = args ? args.workloadProfileType : undefined;
            resourceInputs["customDomainVerificationId"] = undefined /*out*/;
            resourceInputs["eventStreamEndpoint"] = undefined /*out*/;
            resourceInputs["latestReadyRevisionName"] = undefined /*out*/;
            resourceInputs["latestRevisionFqdn"] = undefined /*out*/;
            resourceInputs["latestRevisionName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outboundIpAddresses"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["configuration"] = undefined /*out*/;
            resourceInputs["customDomainVerificationId"] = undefined /*out*/;
            resourceInputs["environmentId"] = undefined /*out*/;
            resourceInputs["eventStreamEndpoint"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["latestReadyRevisionName"] = undefined /*out*/;
            resourceInputs["latestRevisionFqdn"] = undefined /*out*/;
            resourceInputs["latestRevisionName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedEnvironmentId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outboundIpAddresses"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["template"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workloadProfileType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app:ContainerApp" }, { type: "azure-native:app/v20220101preview:ContainerApp" }, { type: "azure-native:app/v20220301:ContainerApp" }, { type: "azure-native:app/v20220601preview:ContainerApp" }, { type: "azure-native:app/v20221101preview:ContainerApp" }, { type: "azure-native:app/v20230401preview:ContainerApp" }, { type: "azure-native:app/v20230501:ContainerApp" }, { type: "azure-native:app/v20230502preview:ContainerApp" }] };
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
     * Name of the Container App.
     */
    containerAppName?: pulumi.Input<string>;
    /**
     * Resource ID of environment.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * The complex type of the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * managed identities for the Container App to interact with other Azure services without maintaining any secrets or credentials in code.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Deprecated. Resource ID of the Container App's environment.
     */
    managedEnvironmentId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
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
    /**
     * Workload profile type to pin for container app execution.
     */
    workloadProfileType?: pulumi.Input<string>;
}
