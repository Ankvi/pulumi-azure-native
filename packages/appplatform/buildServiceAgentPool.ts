import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The build service agent pool resource
 *
 * Uses Azure REST API version 2023-05-01-preview. In version 1.x of the Azure Native provider, it used API version 2022-01-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-01-01-preview, 2024-05-01-preview.
 */
export class BuildServiceAgentPool extends pulumi.CustomResource {
    /**
     * Get an existing BuildServiceAgentPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BuildServiceAgentPool {
        return new BuildServiceAgentPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform:BuildServiceAgentPool';

    /**
     * Returns true if the given object is an instance of BuildServiceAgentPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BuildServiceAgentPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BuildServiceAgentPool.__pulumiType;
    }

    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * build service agent pool properties
     */
    public readonly properties!: pulumi.Output<types.outputs.BuildServiceAgentPoolPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BuildServiceAgentPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BuildServiceAgentPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.buildServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'buildServiceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["agentPoolName"] = args ? args.agentPoolName : undefined;
            resourceInputs["buildServiceName"] = args ? args.buildServiceName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform/v20220101preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20220301preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20220401:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20220501preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20220901preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20221101preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20221201:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20230101preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20230301preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20230501preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20230701preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20230901preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20231101preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20231201:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20240101preview:BuildServiceAgentPool" }, { type: "azure-native:appplatform/v20240501preview:BuildServiceAgentPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BuildServiceAgentPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BuildServiceAgentPool resource.
 */
export interface BuildServiceAgentPoolArgs {
    /**
     * The name of the build service agent pool resource.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * The name of the build service resource.
     */
    buildServiceName: pulumi.Input<string>;
    /**
     * build service agent pool properties
     */
    properties?: pulumi.Input<types.inputs.BuildServiceAgentPoolPropertiesArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}