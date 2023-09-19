import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An environment for hosting container apps
 */
export class ManagedEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing ManagedEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedEnvironment {
        return new ManagedEnvironment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app/v20230401preview:ManagedEnvironment';

    /**
     * Returns true if the given object is an instance of ManagedEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedEnvironment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedEnvironment.__pulumiType;
    }

    /**
     * Cluster configuration which enables the log daemon to export
     * app logs to a destination. Currently only "log-analytics" is
     * supported
     */
    public readonly appLogsConfiguration!: pulumi.Output<types.outputs.AppLogsConfigurationResponse | undefined>;
    /**
     * Custom domain configuration for the environment
     */
    public readonly customDomainConfiguration!: pulumi.Output<types.outputs.CustomDomainConfigurationResponse | undefined>;
    /**
     * Application Insights connection string used by Dapr to export Service to Service communication telemetry
     */
    public readonly daprAIConnectionString!: pulumi.Output<string | undefined>;
    /**
     * Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
     */
    public readonly daprAIInstrumentationKey!: pulumi.Output<string | undefined>;
    /**
     * The configuration of Dapr component.
     */
    public /*out*/ readonly daprConfiguration!: pulumi.Output<types.outputs.DaprConfigurationResponse | undefined>;
    /**
     * Default Domain Name for the cluster
     */
    public /*out*/ readonly defaultDomain!: pulumi.Output<string>;
    /**
     * Any errors that occurred during deployment or deployment validation
     */
    public /*out*/ readonly deploymentErrors!: pulumi.Output<string>;
    /**
     * The endpoint of the eventstream of the Environment.
     */
    public /*out*/ readonly eventStreamEndpoint!: pulumi.Output<string>;
    /**
     * Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. If a subnet ID is provided, this resource group will be created in the same subscription as the subnet.
     */
    public readonly infrastructureResourceGroup!: pulumi.Output<string | undefined>;
    /**
     * The configuration of Keda component.
     */
    public /*out*/ readonly kedaConfiguration!: pulumi.Output<types.outputs.KedaConfigurationResponse | undefined>;
    /**
     * Kind of the Environment.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Peer authentication settings for the Managed Environment
     */
    public readonly peerAuthentication!: pulumi.Output<types.outputs.ManagedEnvironmentResponsePeerAuthentication | undefined>;
    /**
     * Provisioning state of the Environment.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Static IP of the Environment
     */
    public /*out*/ readonly staticIp!: pulumi.Output<string>;
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
     * Vnet configuration for the environment
     */
    public readonly vnetConfiguration!: pulumi.Output<types.outputs.VnetConfigurationResponse | undefined>;
    /**
     * Workload profiles configured for the Managed Environment.
     */
    public readonly workloadProfiles!: pulumi.Output<types.outputs.WorkloadProfileResponse[] | undefined>;
    /**
     * Whether or not this Managed Environment is zone-redundant.
     */
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ManagedEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedEnvironmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appLogsConfiguration"] = args ? args.appLogsConfiguration : undefined;
            resourceInputs["customDomainConfiguration"] = args ? args.customDomainConfiguration : undefined;
            resourceInputs["daprAIConnectionString"] = args ? args.daprAIConnectionString : undefined;
            resourceInputs["daprAIInstrumentationKey"] = args ? args.daprAIInstrumentationKey : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["infrastructureResourceGroup"] = args ? args.infrastructureResourceGroup : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["peerAuthentication"] = args ? args.peerAuthentication : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vnetConfiguration"] = args ? args.vnetConfiguration : undefined;
            resourceInputs["workloadProfiles"] = args ? args.workloadProfiles : undefined;
            resourceInputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            resourceInputs["daprConfiguration"] = undefined /*out*/;
            resourceInputs["defaultDomain"] = undefined /*out*/;
            resourceInputs["deploymentErrors"] = undefined /*out*/;
            resourceInputs["eventStreamEndpoint"] = undefined /*out*/;
            resourceInputs["kedaConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["staticIp"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appLogsConfiguration"] = undefined /*out*/;
            resourceInputs["customDomainConfiguration"] = undefined /*out*/;
            resourceInputs["daprAIConnectionString"] = undefined /*out*/;
            resourceInputs["daprAIInstrumentationKey"] = undefined /*out*/;
            resourceInputs["daprConfiguration"] = undefined /*out*/;
            resourceInputs["defaultDomain"] = undefined /*out*/;
            resourceInputs["deploymentErrors"] = undefined /*out*/;
            resourceInputs["eventStreamEndpoint"] = undefined /*out*/;
            resourceInputs["infrastructureResourceGroup"] = undefined /*out*/;
            resourceInputs["kedaConfiguration"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerAuthentication"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["staticIp"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vnetConfiguration"] = undefined /*out*/;
            resourceInputs["workloadProfiles"] = undefined /*out*/;
            resourceInputs["zoneRedundant"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app:ManagedEnvironment" }, { type: "azure-native:app/v20220101preview:ManagedEnvironment" }, { type: "azure-native:app/v20220301:ManagedEnvironment" }, { type: "azure-native:app/v20220601preview:ManagedEnvironment" }, { type: "azure-native:app/v20221001:ManagedEnvironment" }, { type: "azure-native:app/v20221101preview:ManagedEnvironment" }, { type: "azure-native:app/v20230501:ManagedEnvironment" }, { type: "azure-native:app/v20230502preview:ManagedEnvironment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedEnvironment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedEnvironment resource.
 */
export interface ManagedEnvironmentArgs {
    /**
     * Cluster configuration which enables the log daemon to export
     * app logs to a destination. Currently only "log-analytics" is
     * supported
     */
    appLogsConfiguration?: pulumi.Input<types.inputs.AppLogsConfigurationArgs>;
    /**
     * Custom domain configuration for the environment
     */
    customDomainConfiguration?: pulumi.Input<types.inputs.CustomDomainConfigurationArgs>;
    /**
     * Application Insights connection string used by Dapr to export Service to Service communication telemetry
     */
    daprAIConnectionString?: pulumi.Input<string>;
    /**
     * Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
     */
    daprAIInstrumentationKey?: pulumi.Input<string>;
    /**
     * Name of the Environment.
     */
    environmentName?: pulumi.Input<string>;
    /**
     * Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. If a subnet ID is provided, this resource group will be created in the same subscription as the subnet.
     */
    infrastructureResourceGroup?: pulumi.Input<string>;
    /**
     * Kind of the Environment.
     */
    kind?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Peer authentication settings for the Managed Environment
     */
    peerAuthentication?: pulumi.Input<types.inputs.ManagedEnvironmentPeerAuthenticationArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Vnet configuration for the environment
     */
    vnetConfiguration?: pulumi.Input<types.inputs.VnetConfigurationArgs>;
    /**
     * Workload profiles configured for the Managed Environment.
     */
    workloadProfiles?: pulumi.Input<pulumi.Input<types.inputs.WorkloadProfileArgs>[]>;
    /**
     * Whether or not this Managed Environment is zone-redundant.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
