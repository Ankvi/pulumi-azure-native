import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents the response of a service unit resource.
 * Azure REST API version: 2019-11-01-preview. Prior API version in Azure Native 1.x: 2019-11-01-preview
 */
export class ServiceUnit extends pulumi.CustomResource {
    /**
     * Get an existing ServiceUnit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceUnit {
        return new ServiceUnit(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:deploymentmanager:ServiceUnit';

    /**
     * Returns true if the given object is an instance of ServiceUnit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceUnit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceUnit.__pulumiType;
    }

    /**
     * The artifacts for the service unit.
     */
    public readonly artifacts!: pulumi.Output<types.outputs.ServiceUnitArtifactsResponse | undefined>;
    /**
     * Describes the type of ARM deployment to be performed on the resource.
     */
    public readonly deploymentMode!: pulumi.Output<string>;
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
     * The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.
     */
    public readonly targetResourceGroup!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServiceUnit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceUnitArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.deploymentMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deploymentMode'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.serviceTopologyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceTopologyName'");
            }
            if ((!args || args.targetResourceGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetResourceGroup'");
            }
            resourceInputs["artifacts"] = args ? args.artifacts : undefined;
            resourceInputs["deploymentMode"] = args ? args.deploymentMode : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["serviceTopologyName"] = args ? args.serviceTopologyName : undefined;
            resourceInputs["serviceUnitName"] = args ? args.serviceUnitName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetResourceGroup"] = args ? args.targetResourceGroup : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["artifacts"] = undefined /*out*/;
            resourceInputs["deploymentMode"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetResourceGroup"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deploymentmanager/v20180901preview:ServiceUnit" }, { type: "azure-native:deploymentmanager/v20191101preview:ServiceUnit" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServiceUnit.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServiceUnit resource.
 */
export interface ServiceUnitArgs {
    /**
     * The artifacts for the service unit.
     */
    artifacts?: pulumi.Input<types.inputs.ServiceUnitArtifactsArgs>;
    /**
     * Describes the type of ARM deployment to be performed on the resource.
     */
    deploymentMode: pulumi.Input<types.enums.DeploymentMode>;
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
    serviceName: pulumi.Input<string>;
    /**
     * The name of the service topology .
     */
    serviceTopologyName: pulumi.Input<string>;
    /**
     * The name of the service unit resource.
     */
    serviceUnitName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.
     */
    targetResourceGroup: pulumi.Input<string>;
}
