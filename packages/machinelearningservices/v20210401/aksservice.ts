import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Machine Learning service object wrapped into ARM resource envelope.
 */
export class AKSService extends pulumi.CustomResource {
    /**
     * Get an existing AKSService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AKSService {
        return new AKSService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20210401:AKSService';

    /**
     * Returns true if the given object is an instance of AKSService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AKSService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AKSService.__pulumiType;
    }

    /**
     * The identity of the resource.
     */
    public /*out*/ readonly identity!: pulumi.Output<types.outputs.machinelearningservices.v20210401.IdentityResponse | undefined>;
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
    public readonly properties!: pulumi.Output<types.outputs.machinelearningservices.v20210401.ACIServiceResponseResponse | types.outputs.machinelearningservices.v20210401.AKSServiceResponseResponse | types.outputs.machinelearningservices.v20210401.AKSVariantResponseResponse>;
    /**
     * The sku of the workspace.
     */
    public /*out*/ readonly sku!: pulumi.Output<types.outputs.machinelearningservices.v20210401.SkuResponse | undefined>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.machinelearningservices.v20210401.SystemDataResponse>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a AKSService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AKSServiceArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["aadAuthEnabled"] = args ? args.aadAuthEnabled : undefined;
            resourceInputs["appInsightsEnabled"] = args ? args.appInsightsEnabled : undefined;
            resourceInputs["authEnabled"] = args ? args.authEnabled : undefined;
            resourceInputs["autoScaler"] = args ? args.autoScaler : undefined;
            resourceInputs["computeName"] = args ? args.computeName : undefined;
            resourceInputs["computeType"] = "AKS";
            resourceInputs["containerResourceRequirements"] = args ? args.containerResourceRequirements : undefined;
            resourceInputs["dataCollection"] = args ? args.dataCollection : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentImageRequest"] = args ? args.environmentImageRequest : undefined;
            resourceInputs["isDefault"] = args ? args.isDefault : undefined;
            resourceInputs["keys"] = args ? args.keys : undefined;
            resourceInputs["kvTags"] = args ? args.kvTags : undefined;
            resourceInputs["livenessProbeRequirements"] = args ? args.livenessProbeRequirements : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxConcurrentRequestsPerContainer"] = args ? args.maxConcurrentRequestsPerContainer : undefined;
            resourceInputs["maxQueueWaitMs"] = args ? args.maxQueueWaitMs : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["numReplicas"] = args ? args.numReplicas : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scoringTimeoutMs"] = args ? args.scoringTimeoutMs : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20200501preview:AKSService" }, { type: "azure-native:machinelearningservices/v20200515preview:AKSService" }, { type: "azure-native:machinelearningservices/v20200901preview:AKSService" }, { type: "azure-native:machinelearningservices/v20210101:AKSService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AKSService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AKSService resource.
 */
export interface AKSServiceArgs {
    /**
     * Whether or not AAD authentication is enabled.
     */
    aadAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Whether or not Application Insights is enabled.
     */
    appInsightsEnabled?: pulumi.Input<boolean>;
    /**
     * Whether or not authentication is enabled.
     */
    authEnabled?: pulumi.Input<boolean>;
    /**
     * The auto scaler properties.
     */
    autoScaler?: pulumi.Input<types.inputs.machinelearningservices.v20210401.AKSServiceCreateRequestAutoScalerArgs>;
    /**
     * The name of the compute resource.
     */
    computeName?: pulumi.Input<string>;
    /**
     * The compute environment type for the service.
     * Expected value is 'AKS'.
     */
    computeType: pulumi.Input<"AKS">;
    /**
     * The container resource requirements.
     */
    containerResourceRequirements?: pulumi.Input<types.inputs.machinelearningservices.v20210401.ContainerResourceRequirementsArgs>;
    /**
     * Details of the data collection options specified.
     */
    dataCollection?: pulumi.Input<types.inputs.machinelearningservices.v20210401.AKSServiceCreateRequestDataCollectionArgs>;
    /**
     * The description of the service.
     */
    description?: pulumi.Input<string>;
    /**
     * The Environment, models and assets needed for inferencing.
     */
    environmentImageRequest?: pulumi.Input<types.inputs.machinelearningservices.v20210401.CreateServiceRequestEnvironmentImageRequestArgs>;
    /**
     * Is this the default variant.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The authentication keys.
     */
    keys?: pulumi.Input<types.inputs.machinelearningservices.v20210401.CreateServiceRequestKeysArgs>;
    /**
     * The service tag dictionary. Tags are mutable.
     */
    kvTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The liveness probe requirements.
     */
    livenessProbeRequirements?: pulumi.Input<types.inputs.machinelearningservices.v20210401.AKSServiceCreateRequestLivenessProbeRequirementsArgs>;
    /**
     * The name of the Azure location/region.
     */
    location?: pulumi.Input<string>;
    /**
     * The maximum number of concurrent requests per container.
     */
    maxConcurrentRequestsPerContainer?: pulumi.Input<number>;
    /**
     * Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable)
     */
    maxQueueWaitMs?: pulumi.Input<number>;
    /**
     * Kubernetes namespace for the service.
     */
    namespace?: pulumi.Input<string>;
    /**
     * The number of replicas on the cluster.
     */
    numReplicas?: pulumi.Input<number>;
    /**
     * The service properties dictionary. Properties are immutable.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The scoring timeout in milliseconds.
     */
    scoringTimeoutMs?: pulumi.Input<number>;
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
    type?: pulumi.Input<string | types.enums.v20210401.VariantType>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
