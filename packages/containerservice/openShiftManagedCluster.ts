import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * OpenShift Managed cluster.
 *
 * Uses Azure REST API version 2019-10-27-preview. In version 1.x of the Azure Native provider, it used API version 2019-04-30.
 */
export class OpenShiftManagedCluster extends pulumi.CustomResource {
    /**
     * Get an existing OpenShiftManagedCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OpenShiftManagedCluster {
        return new OpenShiftManagedCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerservice:OpenShiftManagedCluster';

    /**
     * Returns true if the given object is an instance of OpenShiftManagedCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OpenShiftManagedCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OpenShiftManagedCluster.__pulumiType;
    }

    /**
     * Configuration of OpenShift cluster VMs.
     */
    public readonly agentPoolProfiles!: pulumi.Output<types.outputs.OpenShiftManagedClusterAgentPoolProfileResponse[] | undefined>;
    /**
     * Configures OpenShift authentication.
     */
    public readonly authProfile!: pulumi.Output<types.outputs.OpenShiftManagedClusterAuthProfileResponse | undefined>;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    public /*out*/ readonly clusterVersion!: pulumi.Output<string>;
    /**
     * Service generated FQDN for OpenShift API server loadbalancer internal hostname.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Configuration for OpenShift master VMs.
     */
    public readonly masterPoolProfile!: pulumi.Output<types.outputs.OpenShiftManagedClusterMasterPoolProfileResponse | undefined>;
    /**
     * Configures Log Analytics integration.
     */
    public readonly monitorProfile!: pulumi.Output<types.outputs.OpenShiftManagedClusterMonitorProfileResponse | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Configuration for OpenShift networking.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    public readonly openShiftVersion!: pulumi.Output<string>;
    /**
     * Define the resource plan as required by ARM for billing purposes
     */
    public readonly plan!: pulumi.Output<types.outputs.PurchasePlanResponse | undefined>;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Service generated FQDN or private IP for OpenShift API server.
     */
    public /*out*/ readonly publicHostname!: pulumi.Output<string>;
    /**
     * Allows node rotation
     */
    public readonly refreshCluster!: pulumi.Output<boolean | undefined>;
    /**
     * Configuration for OpenShift router(s).
     */
    public readonly routerProfiles!: pulumi.Output<types.outputs.OpenShiftRouterProfileResponse[] | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OpenShiftManagedCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpenShiftManagedClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.openShiftVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'openShiftVersion'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["agentPoolProfiles"] = args ? args.agentPoolProfiles : undefined;
            resourceInputs["authProfile"] = args ? args.authProfile : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["masterPoolProfile"] = args ? args.masterPoolProfile : undefined;
            resourceInputs["monitorProfile"] = args ? args.monitorProfile : undefined;
            resourceInputs["networkProfile"] = args ? (args.networkProfile ? pulumi.output(args.networkProfile).apply(types.inputs.networkProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["openShiftVersion"] = args ? args.openShiftVersion : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["refreshCluster"] = args ? args.refreshCluster : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["routerProfiles"] = args ? args.routerProfiles : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["clusterVersion"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicHostname"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["agentPoolProfiles"] = undefined /*out*/;
            resourceInputs["authProfile"] = undefined /*out*/;
            resourceInputs["clusterVersion"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["masterPoolProfile"] = undefined /*out*/;
            resourceInputs["monitorProfile"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["openShiftVersion"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicHostname"] = undefined /*out*/;
            resourceInputs["refreshCluster"] = undefined /*out*/;
            resourceInputs["routerProfiles"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice/v20180930preview:OpenShiftManagedCluster" }, { type: "azure-native:containerservice/v20190430:OpenShiftManagedCluster" }, { type: "azure-native:containerservice/v20190930preview:OpenShiftManagedCluster" }, { type: "azure-native:containerservice/v20191027preview:OpenShiftManagedCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OpenShiftManagedCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OpenShiftManagedCluster resource.
 */
export interface OpenShiftManagedClusterArgs {
    /**
     * Configuration of OpenShift cluster VMs.
     */
    agentPoolProfiles?: pulumi.Input<pulumi.Input<types.inputs.OpenShiftManagedClusterAgentPoolProfileArgs>[]>;
    /**
     * Configures OpenShift authentication.
     */
    authProfile?: pulumi.Input<types.inputs.OpenShiftManagedClusterAuthProfileArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Configuration for OpenShift master VMs.
     */
    masterPoolProfile?: pulumi.Input<types.inputs.OpenShiftManagedClusterMasterPoolProfileArgs>;
    /**
     * Configures Log Analytics integration.
     */
    monitorProfile?: pulumi.Input<types.inputs.OpenShiftManagedClusterMonitorProfileArgs>;
    /**
     * Configuration for OpenShift networking.
     */
    networkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    openShiftVersion: pulumi.Input<string>;
    /**
     * Define the resource plan as required by ARM for billing purposes
     */
    plan?: pulumi.Input<types.inputs.PurchasePlanArgs>;
    /**
     * Allows node rotation
     */
    refreshCluster?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift managed cluster resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Configuration for OpenShift router(s).
     */
    routerProfiles?: pulumi.Input<pulumi.Input<types.inputs.OpenShiftRouterProfileArgs>[]>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}