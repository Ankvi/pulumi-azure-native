import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Target resource belonging to an Instance resource.
 *
 * Uses Azure REST API version 2023-10-04-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-04-preview.
 */
export class Target extends pulumi.CustomResource {
    /**
     * Get an existing Target resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Target {
        return new Target(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsorchestrator:Target';

    /**
     * Returns true if the given object is an instance of Target.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Target {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Target.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * A list of components.
     */
    declare public readonly components: pulumi.Output<types.outputs.ComponentPropertiesResponse[] | undefined>;
    /**
     * Edge location of the resource.
     */
    declare public readonly extendedLocation: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The geo-location where the resource lives
     */
    declare public readonly location: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    declare public readonly name: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    declare public /*out*/ readonly provisioningState: pulumi.Output<string>;
    /**
     * Reconciliation Policy.
     */
    declare public readonly reconciliationPolicy: pulumi.Output<types.outputs.ReconciliationPolicyResponse | undefined>;
    /**
     * Deployment scope (such as Kubernetes namespace).
     */
    declare public readonly scope: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    declare public readonly tags: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Defines the device topology for a target or instance.
     */
    declare public readonly topologies: pulumi.Output<types.outputs.TopologiesPropertiesResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;
    /**
     * Version of the particular resource.
     */
    declare public readonly version: pulumi.Output<string | undefined>;

    /**
     * Create a Target resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TargetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.extendedLocation === undefined && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["components"] = args?.components;
            resourceInputs["extendedLocation"] = args?.extendedLocation;
            resourceInputs["location"] = args?.location;
            resourceInputs["name"] = args?.name;
            resourceInputs["reconciliationPolicy"] = args?.reconciliationPolicy;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["scope"] = args?.scope;
            resourceInputs["tags"] = args?.tags;
            resourceInputs["topologies"] = args?.topologies;
            resourceInputs["version"] = args?.version;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["components"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["reconciliationPolicy"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["topologies"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsorchestrator/v20231004preview:Target" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Target.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Target resource.
 */
export interface TargetArgs {
    /**
     * A list of components.
     */
    components?: pulumi.Input<pulumi.Input<types.inputs.ComponentPropertiesArgs>[]>;
    /**
     * Edge location of the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of target.
     */
    name?: pulumi.Input<string>;
    /**
     * Reconciliation Policy.
     */
    reconciliationPolicy?: pulumi.Input<types.inputs.ReconciliationPolicyArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Deployment scope (such as Kubernetes namespace).
     */
    scope?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Defines the device topology for a target or instance.
     */
    topologies?: pulumi.Input<pulumi.Input<types.inputs.TopologiesPropertiesArgs>[]>;
    /**
     * Version of the particular resource.
     */
    version?: pulumi.Input<string>;
}