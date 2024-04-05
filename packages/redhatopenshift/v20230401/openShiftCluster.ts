import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * OpenShiftCluster represents an Azure Red Hat OpenShift cluster.
 */
export class OpenShiftCluster extends pulumi.CustomResource {
    /**
     * Get an existing OpenShiftCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OpenShiftCluster {
        return new OpenShiftCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:redhatopenshift/v20230401:OpenShiftCluster';

    /**
     * Returns true if the given object is an instance of OpenShiftCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OpenShiftCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OpenShiftCluster.__pulumiType;
    }

    /**
     * The cluster API server profile.
     */
    public readonly apiserverProfile!: pulumi.Output<types.outputs.APIServerProfileResponse | undefined>;
    /**
     * The cluster profile.
     */
    public readonly clusterProfile!: pulumi.Output<types.outputs.ClusterProfileResponse | undefined>;
    /**
     * The console profile.
     */
    public readonly consoleProfile!: pulumi.Output<types.outputs.ConsoleProfileResponse | undefined>;
    /**
     * The cluster ingress profiles.
     */
    public readonly ingressProfiles!: pulumi.Output<types.outputs.IngressProfileResponse[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The cluster master profile.
     */
    public readonly masterProfile!: pulumi.Output<types.outputs.MasterProfileResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The cluster network profile.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * The cluster provisioning state.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The cluster service principal profile.
     */
    public readonly servicePrincipalProfile!: pulumi.Output<types.outputs.ServicePrincipalProfileResponse | undefined>;
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
     * The cluster worker profiles.
     */
    public readonly workerProfiles!: pulumi.Output<types.outputs.WorkerProfileResponse[] | undefined>;

    /**
     * Create a OpenShiftCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpenShiftClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["apiserverProfile"] = args ? args.apiserverProfile : undefined;
            resourceInputs["clusterProfile"] = args ? args.clusterProfile : undefined;
            resourceInputs["consoleProfile"] = args ? args.consoleProfile : undefined;
            resourceInputs["ingressProfiles"] = args ? args.ingressProfiles : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["masterProfile"] = args ? args.masterProfile : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["servicePrincipalProfile"] = args ? args.servicePrincipalProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workerProfiles"] = args ? args.workerProfiles : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiserverProfile"] = undefined /*out*/;
            resourceInputs["clusterProfile"] = undefined /*out*/;
            resourceInputs["consoleProfile"] = undefined /*out*/;
            resourceInputs["ingressProfiles"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["masterProfile"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["servicePrincipalProfile"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workerProfiles"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:redhatopenshift:OpenShiftCluster" }, { type: "azure-native:redhatopenshift/v20200430:OpenShiftCluster" }, { type: "azure-native:redhatopenshift/v20210901preview:OpenShiftCluster" }, { type: "azure-native:redhatopenshift/v20220401:OpenShiftCluster" }, { type: "azure-native:redhatopenshift/v20220904:OpenShiftCluster" }, { type: "azure-native:redhatopenshift/v20230701preview:OpenShiftCluster" }, { type: "azure-native:redhatopenshift/v20230904:OpenShiftCluster" }, { type: "azure-native:redhatopenshift/v20231122:OpenShiftCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OpenShiftCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OpenShiftCluster resource.
 */
export interface OpenShiftClusterArgs {
    /**
     * The cluster API server profile.
     */
    apiserverProfile?: pulumi.Input<types.inputs.APIServerProfileArgs>;
    /**
     * The cluster profile.
     */
    clusterProfile?: pulumi.Input<types.inputs.ClusterProfileArgs>;
    /**
     * The console profile.
     */
    consoleProfile?: pulumi.Input<types.inputs.ConsoleProfileArgs>;
    /**
     * The cluster ingress profiles.
     */
    ingressProfiles?: pulumi.Input<pulumi.Input<types.inputs.IngressProfileArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The cluster master profile.
     */
    masterProfile?: pulumi.Input<types.inputs.MasterProfileArgs>;
    /**
     * The cluster network profile.
     */
    networkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * The cluster provisioning state.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * The cluster service principal profile.
     */
    servicePrincipalProfile?: pulumi.Input<types.inputs.ServicePrincipalProfileArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The cluster worker profiles.
     */
    workerProfiles?: pulumi.Input<pulumi.Input<types.inputs.WorkerProfileArgs>[]>;
}