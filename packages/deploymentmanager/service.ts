import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The resource representation of a service in a service topology.
 * Azure REST API version: 2019-11-01-preview. Prior API version in Azure Native 1.x: 2019-11-01-preview.
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service {
        return new Service(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:deploymentmanager:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
    }

    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Azure location to which the resources in the service belong to or should be deployed to.
     */
    public readonly targetLocation!: pulumi.Output<string>;
    /**
     * The subscription to which the resources in the service belong to or should be deployed to.
     */
    public readonly targetSubscriptionId!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceTopologyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceTopologyName'");
            }
            if ((!args || args.targetLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetLocation'");
            }
            if ((!args || args.targetSubscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetSubscriptionId'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["serviceTopologyName"] = args ? args.serviceTopologyName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetLocation"] = args ? args.targetLocation : undefined;
            resourceInputs["targetSubscriptionId"] = args ? args.targetSubscriptionId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetLocation"] = undefined /*out*/;
            resourceInputs["targetSubscriptionId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deploymentmanager/v20180901preview:Service" }, { type: "azure-native:deploymentmanager/v20191101preview:Service" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Service.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service resource.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * The name of the service topology .
     */
    serviceTopologyName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Azure location to which the resources in the service belong to or should be deployed to.
     */
    targetLocation: pulumi.Input<string>;
    /**
     * The subscription to which the resources in the service belong to or should be deployed to.
     */
    targetSubscriptionId: pulumi.Input<string>;
}