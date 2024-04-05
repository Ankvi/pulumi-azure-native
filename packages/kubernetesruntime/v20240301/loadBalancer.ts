import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A LoadBalancer resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters)
 */
export class LoadBalancer extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LoadBalancer {
        return new LoadBalancer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kubernetesruntime/v20240301:LoadBalancer';

    /**
     * Returns true if the given object is an instance of LoadBalancer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalancer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalancer.__pulumiType;
    }

    /**
     * IP Range
     */
    public readonly addresses!: pulumi.Output<string[]>;
    /**
     * Advertise Mode
     */
    public readonly advertiseMode!: pulumi.Output<string>;
    /**
     * The list of BGP peers it should advertise to. Null or empty means to advertise to all peers.
     */
    public readonly bgpPeers!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource provision state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * A dynamic label mapping to select related services. For instance, if you want to create a load balancer only for services with label "a=b", then please specify {"a": "b"} in the field.
     */
    public readonly serviceSelector!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LoadBalancer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.addresses === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addresses'");
            }
            if ((!args || args.advertiseMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'advertiseMode'");
            }
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["addresses"] = args ? args.addresses : undefined;
            resourceInputs["advertiseMode"] = args ? args.advertiseMode : undefined;
            resourceInputs["bgpPeers"] = args ? args.bgpPeers : undefined;
            resourceInputs["loadBalancerName"] = args ? args.loadBalancerName : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["serviceSelector"] = args ? args.serviceSelector : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addresses"] = undefined /*out*/;
            resourceInputs["advertiseMode"] = undefined /*out*/;
            resourceInputs["bgpPeers"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceSelector"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kubernetesruntime:LoadBalancer" }, { type: "azure-native:kubernetesruntime/v20231001preview:LoadBalancer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LoadBalancer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LoadBalancer resource.
 */
export interface LoadBalancerArgs {
    /**
     * IP Range
     */
    addresses: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Advertise Mode
     */
    advertiseMode: pulumi.Input<string | types.enums.AdvertiseMode>;
    /**
     * The list of BGP peers it should advertise to. Null or empty means to advertise to all peers.
     */
    bgpPeers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the LoadBalancer
     */
    loadBalancerName?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * A dynamic label mapping to select related services. For instance, if you want to create a load balancer only for services with label "a=b", then please specify {"a": "b"} in the field.
     */
    serviceSelector?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}