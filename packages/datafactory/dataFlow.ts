import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Data flow resource type.
 *
 * Uses Azure REST API version 2018-06-01. In version 2.x of the Azure Native provider, it used API version 2018-06-01.
 */
export class DataFlow extends pulumi.CustomResource {
    /**
     * Get an existing DataFlow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataFlow {
        return new DataFlow(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datafactory:DataFlow';

    /**
     * Returns true if the given object is an instance of DataFlow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataFlow {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataFlow.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * Etag identifies change in the resource.
     */
    declare public /*out*/ readonly etag: pulumi.Output<string>;
    /**
     * The resource name.
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * Data flow properties.
     */
    declare public readonly properties: pulumi.Output<types.outputs.FlowletResponse | types.outputs.MappingDataFlowResponse | types.outputs.WranglingDataFlowResponse>;
    /**
     * The resource type.
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;

    /**
     * Create a DataFlow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataFlowArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.factoryName === undefined && !opts.urn) {
                throw new Error("Missing required property 'factoryName'");
            }
            if (args?.properties === undefined && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataFlowName"] = args?.dataFlowName;
            resourceInputs["factoryName"] = args?.factoryName;
            resourceInputs["properties"] = args?.properties;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datafactory/v20180601:DataFlow" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataFlow.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataFlow resource.
 */
export interface DataFlowArgs {
    /**
     * The data flow name.
     */
    dataFlowName?: pulumi.Input<string>;
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * Data flow properties.
     */
    properties: pulumi.Input<types.inputs.FlowletArgs | types.inputs.MappingDataFlowArgs | types.inputs.WranglingDataFlowArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}