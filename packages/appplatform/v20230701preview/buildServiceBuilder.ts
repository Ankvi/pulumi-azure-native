import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * KPack Builder resource
 */
export class BuildServiceBuilder extends pulumi.CustomResource {
    /**
     * Get an existing BuildServiceBuilder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BuildServiceBuilder {
        return new BuildServiceBuilder(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform/v20230701preview:BuildServiceBuilder';

    /**
     * Returns true if the given object is an instance of BuildServiceBuilder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BuildServiceBuilder {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BuildServiceBuilder.__pulumiType;
    }

    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Property of the Builder resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.BuilderPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BuildServiceBuilder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BuildServiceBuilderArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["buildServiceName"] = args ? args.buildServiceName : undefined;
            resourceInputs["builderName"] = args ? args.builderName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20220101preview:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20220301preview:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20220401:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20220501preview:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20220901preview:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20221101preview:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20221201:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20230101preview:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20230301preview:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20230501preview:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20230901preview:BuildServiceBuilder" }, { type: "azure-native:appplatform/v20231101preview:BuildServiceBuilder" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BuildServiceBuilder.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BuildServiceBuilder resource.
 */
export interface BuildServiceBuilderArgs {
    /**
     * The name of the build service resource.
     */
    buildServiceName: pulumi.Input<string>;
    /**
     * The name of the builder resource.
     */
    builderName?: pulumi.Input<string>;
    /**
     * Property of the Builder resource.
     */
    properties?: pulumi.Input<types.inputs.BuilderPropertiesArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
