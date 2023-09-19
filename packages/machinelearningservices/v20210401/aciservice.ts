import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Machine Learning service object wrapped into ARM resource envelope.
 */
export class ACIService extends pulumi.CustomResource {
    /**
     * Get an existing ACIService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ACIService {
        return new ACIService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20210401:ACIService';

    /**
     * Returns true if the given object is an instance of ACIService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ACIService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ACIService.__pulumiType;
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
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ACIService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ACIServiceArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["appInsightsEnabled"] = (args ? args.appInsightsEnabled : undefined) ?? false;
            resourceInputs["authEnabled"] = (args ? args.authEnabled : undefined) ?? false;
            resourceInputs["cname"] = args ? args.cname : undefined;
            resourceInputs["computeType"] = "ACI";
            resourceInputs["containerResourceRequirements"] = args ? args.containerResourceRequirements : undefined;
            resourceInputs["dataCollection"] = args ? args.dataCollection : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dnsNameLabel"] = args ? args.dnsNameLabel : undefined;
            resourceInputs["encryptionProperties"] = args ? args.encryptionProperties : undefined;
            resourceInputs["environmentImageRequest"] = args ? args.environmentImageRequest : undefined;
            resourceInputs["keys"] = args ? args.keys : undefined;
            resourceInputs["kvTags"] = args ? args.kvTags : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["sslCertificate"] = args ? args.sslCertificate : undefined;
            resourceInputs["sslEnabled"] = (args ? args.sslEnabled : undefined) ?? false;
            resourceInputs["sslKey"] = args ? args.sslKey : undefined;
            resourceInputs["vnetConfiguration"] = args ? args.vnetConfiguration : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20200501preview:ACIService" }, { type: "azure-native:machinelearningservices/v20200515preview:ACIService" }, { type: "azure-native:machinelearningservices/v20200901preview:ACIService" }, { type: "azure-native:machinelearningservices/v20210101:ACIService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ACIService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ACIService resource.
 */
export interface ACIServiceArgs {
    /**
     * Whether or not Application Insights is enabled.
     */
    appInsightsEnabled?: pulumi.Input<boolean>;
    /**
     * Whether or not authentication is enabled on the service.
     */
    authEnabled?: pulumi.Input<boolean>;
    /**
     * The CName for the service.
     */
    cname?: pulumi.Input<string>;
    /**
     * The compute environment type for the service.
     * Expected value is 'ACI'.
     */
    computeType: pulumi.Input<"ACI">;
    /**
     * The container resource requirements.
     */
    containerResourceRequirements?: pulumi.Input<types.inputs.ContainerResourceRequirementsArgs>;
    /**
     * Details of the data collection options specified.
     */
    dataCollection?: pulumi.Input<types.inputs.ACIServiceCreateRequestDataCollectionArgs>;
    /**
     * The description of the service.
     */
    description?: pulumi.Input<string>;
    /**
     * The Dns label for the service.
     */
    dnsNameLabel?: pulumi.Input<string>;
    /**
     * The encryption properties.
     */
    encryptionProperties?: pulumi.Input<types.inputs.ACIServiceCreateRequestEncryptionPropertiesArgs>;
    /**
     * The Environment, models and assets needed for inferencing.
     */
    environmentImageRequest?: pulumi.Input<types.inputs.CreateServiceRequestEnvironmentImageRequestArgs>;
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
     * The public SSL certificate in PEM format to use if SSL is enabled.
     */
    sslCertificate?: pulumi.Input<string>;
    /**
     * Whether or not SSL is enabled.
     */
    sslEnabled?: pulumi.Input<boolean>;
    /**
     * The public SSL key in PEM format for the certificate.
     */
    sslKey?: pulumi.Input<string>;
    /**
     * The virtual network configuration.
     */
    vnetConfiguration?: pulumi.Input<types.inputs.ACIServiceCreateRequestVnetConfigurationArgs>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
