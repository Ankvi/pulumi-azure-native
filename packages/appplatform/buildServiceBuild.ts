import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Build resource payload
 *
 * Uses Azure REST API version 2024-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-05-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appplatform [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class BuildServiceBuild extends pulumi.CustomResource {
    /**
     * Get an existing BuildServiceBuild resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BuildServiceBuild {
        return new BuildServiceBuild(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform:BuildServiceBuild';

    /**
     * Returns true if the given object is an instance of BuildServiceBuild.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BuildServiceBuild {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BuildServiceBuild.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the build resource
     */
    public readonly properties!: pulumi.Output<types.outputs.BuildPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BuildServiceBuild resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BuildServiceBuildArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["buildName"] = args ? args.buildName : undefined;
            resourceInputs["buildServiceName"] = args ? args.buildServiceName : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.buildPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform/v20230301preview:BuildServiceBuild" }, { type: "azure-native:appplatform/v20230501preview:BuildServiceBuild" }, { type: "azure-native:appplatform/v20230701preview:BuildServiceBuild" }, { type: "azure-native:appplatform/v20230901preview:BuildServiceBuild" }, { type: "azure-native:appplatform/v20231101preview:BuildServiceBuild" }, { type: "azure-native:appplatform/v20231201:BuildServiceBuild" }, { type: "azure-native:appplatform/v20240101preview:BuildServiceBuild" }, { type: "azure-native:appplatform/v20240501preview:BuildServiceBuild" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BuildServiceBuild.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BuildServiceBuild resource.
 */
export interface BuildServiceBuildArgs {
    /**
     * The name of the build resource.
     */
    buildName?: pulumi.Input<string>;
    /**
     * The name of the build service resource.
     */
    buildServiceName: pulumi.Input<string>;
    /**
     * Properties of the build resource
     */
    properties?: pulumi.Input<types.inputs.BuildPropertiesArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}