import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure OpenAI Content Filters resource.
 *
 * Uses Azure REST API version 2024-04-01-preview.
 *
 * Other available API versions: 2024-07-01-preview, 2024-10-01-preview, 2025-01-01-preview.
 */
export class ConnectionRaiPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionRaiPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectionRaiPolicy {
        return new ConnectionRaiPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:ConnectionRaiPolicy';

    /**
     * Returns true if the given object is an instance of ConnectionRaiPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectionRaiPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectionRaiPolicy.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure OpenAI Content Filters properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.RaiPolicyPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectionRaiPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionRaiPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["raiPolicyName"] = args ? args.raiPolicyName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20240401preview:ConnectionRaiPolicy" }, { type: "azure-native:machinelearningservices/v20240701preview:ConnectionRaiPolicy" }, { type: "azure-native:machinelearningservices/v20241001preview:ConnectionRaiPolicy" }, { type: "azure-native:machinelearningservices/v20250101preview:ConnectionRaiPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectionRaiPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectionRaiPolicy resource.
 */
export interface ConnectionRaiPolicyArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: pulumi.Input<string>;
    /**
     * Azure OpenAI Content Filters properties.
     */
    properties: pulumi.Input<types.inputs.RaiPolicyPropertiesArgs>;
    /**
     * Name of the Rai Policy.
     */
    raiPolicyName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}