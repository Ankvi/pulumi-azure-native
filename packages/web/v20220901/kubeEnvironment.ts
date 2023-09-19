import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Kubernetes cluster specialized for web workloads by Azure App Service
 */
export class KubeEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing KubeEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KubeEnvironment {
        return new KubeEnvironment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20220901:KubeEnvironment';

    /**
     * Returns true if the given object is an instance of KubeEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubeEnvironment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubeEnvironment.__pulumiType;
    }

    public readonly aksResourceID!: pulumi.Output<string | undefined>;
    /**
     * Cluster configuration which enables the log daemon to export
     * app logs to a destination. Currently only "log-analytics" is
     * supported
     */
    public readonly appLogsConfiguration!: pulumi.Output<types.outputs.AppLogsConfigurationResponse | undefined>;
    /**
     * Cluster configuration which determines the ARC cluster
     * components types. Eg: Choosing between BuildService kind,
     * FrontEnd Service ArtifactsStorageType etc.
     */
    public readonly arcConfiguration!: pulumi.Output<types.outputs.ArcConfigurationResponse | undefined>;
    /**
     * Cluster configuration for Container Apps Environments to configure Dapr Instrumentation Key and VNET Configuration
     */
    public readonly containerAppsConfiguration!: pulumi.Output<types.outputs.ContainerAppsConfigurationResponse | undefined>;
    /**
     * Default Domain Name for the cluster
     */
    public /*out*/ readonly defaultDomain!: pulumi.Output<string>;
    /**
     * Any errors that occurred during deployment or deployment validation
     */
    public /*out*/ readonly deploymentErrors!: pulumi.Output<string>;
    /**
     * Type of Kubernetes Environment. Only supported for Container App Environments with value as Managed
     */
    public readonly environmentType!: pulumi.Output<string | undefined>;
    /**
     * Extended Location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Only visible within Vnet/Subnet
     */
    public readonly internalLoadBalancerEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the Kubernetes Environment.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Static IP of the KubeEnvironment
     */
    public readonly staticIp!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a KubeEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubeEnvironmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aksResourceID"] = args ? args.aksResourceID : undefined;
            resourceInputs["appLogsConfiguration"] = args ? args.appLogsConfiguration : undefined;
            resourceInputs["arcConfiguration"] = args ? args.arcConfiguration : undefined;
            resourceInputs["containerAppsConfiguration"] = args ? args.containerAppsConfiguration : undefined;
            resourceInputs["environmentType"] = args ? args.environmentType : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["internalLoadBalancerEnabled"] = args ? args.internalLoadBalancerEnabled : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["staticIp"] = args ? args.staticIp : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["defaultDomain"] = undefined /*out*/;
            resourceInputs["deploymentErrors"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aksResourceID"] = undefined /*out*/;
            resourceInputs["appLogsConfiguration"] = undefined /*out*/;
            resourceInputs["arcConfiguration"] = undefined /*out*/;
            resourceInputs["containerAppsConfiguration"] = undefined /*out*/;
            resourceInputs["defaultDomain"] = undefined /*out*/;
            resourceInputs["deploymentErrors"] = undefined /*out*/;
            resourceInputs["environmentType"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["internalLoadBalancerEnabled"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["staticIp"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:KubeEnvironment" }, { type: "azure-native:web/v20210101:KubeEnvironment" }, { type: "azure-native:web/v20210115:KubeEnvironment" }, { type: "azure-native:web/v20210201:KubeEnvironment" }, { type: "azure-native:web/v20210301:KubeEnvironment" }, { type: "azure-native:web/v20220301:KubeEnvironment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KubeEnvironment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KubeEnvironment resource.
 */
export interface KubeEnvironmentArgs {
    aksResourceID?: pulumi.Input<string>;
    /**
     * Cluster configuration which enables the log daemon to export
     * app logs to a destination. Currently only "log-analytics" is
     * supported
     */
    appLogsConfiguration?: pulumi.Input<types.inputs.AppLogsConfigurationArgs>;
    /**
     * Cluster configuration which determines the ARC cluster
     * components types. Eg: Choosing between BuildService kind,
     * FrontEnd Service ArtifactsStorageType etc.
     */
    arcConfiguration?: pulumi.Input<types.inputs.ArcConfigurationArgs>;
    /**
     * Cluster configuration for Container Apps Environments to configure Dapr Instrumentation Key and VNET Configuration
     */
    containerAppsConfiguration?: pulumi.Input<types.inputs.ContainerAppsConfigurationArgs>;
    /**
     * Type of Kubernetes Environment. Only supported for Container App Environments with value as Managed
     */
    environmentType?: pulumi.Input<string>;
    /**
     * Extended Location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Only visible within Vnet/Subnet
     */
    internalLoadBalancerEnabled?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Kubernetes Environment.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Static IP of the KubeEnvironment
     */
    staticIp?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
