import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Machine Learning service object wrapped into ARM resource envelope.
 */
export class EndpointVariant extends pulumi.CustomResource {
    /**
     * Get an existing EndpointVariant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EndpointVariant {
        return new EndpointVariant(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20210401:EndpointVariant';

    /**
     * Returns true if the given object is an instance of EndpointVariant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EndpointVariant {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EndpointVariant.__pulumiType;
    }

    /**
     * The identity of the resource.
     */
    public /*out*/ readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Service properties
     */
    public readonly properties!: pulumi.Output<types.outputs.ACIServiceResponseResponse | types.outputs.AKSServiceResponseResponse | types.outputs.AKSVariantResponseResponse>;
    /**
     * The sku of the workspace.
     */
    public /*out*/ readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a EndpointVariant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointVariantArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.computeType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'computeType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["computeType"] = "Custom";
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentImageRequest"] = args ? args.environmentImageRequest : undefined;
            resourceInputs["isDefault"] = args ? args.isDefault : undefined;
            resourceInputs["keys"] = args ? args.keys : undefined;
            resourceInputs["kvTags"] = args ? args.kvTags : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["trafficPercentile"] = args ? args.trafficPercentile : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20200501preview:EndpointVariant" }, { type: "azure-native:machinelearningservices/v20200515preview:EndpointVariant" }, { type: "azure-native:machinelearningservices/v20200901preview:EndpointVariant" }, { type: "azure-native:machinelearningservices/v20210101:EndpointVariant" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EndpointVariant.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EndpointVariant resource.
 */
export interface EndpointVariantArgs {
    /**
     * The compute environment type for the service.
     * Expected value is 'Custom'.
     */
    computeType: pulumi.Input<"Custom">;
    /**
     * The description of the service.
     */
    description?: pulumi.Input<string>;
    /**
     * The Environment, models and assets needed for inferencing.
     */
    environmentImageRequest?: pulumi.Input<types.inputs.CreateServiceRequestEnvironmentImageRequestArgs>;
    /**
     * Is this the default variant.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The authentication keys.
     */
    keys?: pulumi.Input<types.inputs.CreateServiceRequestKeysArgs>;
    /**
     * The service tag dictionary. Tags are mutable.
     */
    kvTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the Azure location/region.
     */
    location?: pulumi.Input<string>;
    /**
     * The service properties dictionary. Properties are immutable.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Azure Machine Learning service.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * The amount of traffic variant receives.
     */
    trafficPercentile?: pulumi.Input<number>;
    /**
     * The type of the variant.
     */
    type?: pulumi.Input<string | types.enums.VariantType>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
