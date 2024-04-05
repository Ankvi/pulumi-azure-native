import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The description of Dicom Service
 */
export class DicomService extends pulumi.CustomResource {
    /**
     * Get an existing DicomService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DicomService {
        return new DicomService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:healthcareapis/v20231201:DicomService';

    /**
     * Returns true if the given object is an instance of DicomService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DicomService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DicomService.__pulumiType;
    }

    /**
     * Dicom Service authentication configuration.
     */
    public /*out*/ readonly authenticationConfiguration!: pulumi.Output<types.outputs.DicomServiceAuthenticationConfigurationResponse | undefined>;
    /**
     * Dicom Service Cors configuration.
     */
    public readonly corsConfiguration!: pulumi.Output<types.outputs.CorsConfigurationResponse | undefined>;
    /**
     * The encryption settings of the DICOM service
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionResponse | undefined>;
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * DICOM Service event support status.
     */
    public /*out*/ readonly eventState!: pulumi.Output<string>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    public readonly identity!: pulumi.Output<types.outputs.ServiceManagedIdentityResponseIdentity | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * The provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    public /*out*/ readonly publicNetworkAccess!: pulumi.Output<string>;
    /**
     * The url of the Dicom Services.
     */
    public /*out*/ readonly serviceUrl!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DicomService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DicomServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["corsConfiguration"] = args ? args.corsConfiguration : undefined;
            resourceInputs["dicomServiceName"] = args ? args.dicomServiceName : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["authenticationConfiguration"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["eventState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["serviceUrl"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authenticationConfiguration"] = undefined /*out*/;
            resourceInputs["corsConfiguration"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["eventState"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["serviceUrl"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:healthcareapis:DicomService" }, { type: "azure-native:healthcareapis/v20210601preview:DicomService" }, { type: "azure-native:healthcareapis/v20211101:DicomService" }, { type: "azure-native:healthcareapis/v20220131preview:DicomService" }, { type: "azure-native:healthcareapis/v20220515:DicomService" }, { type: "azure-native:healthcareapis/v20220601:DicomService" }, { type: "azure-native:healthcareapis/v20221001preview:DicomService" }, { type: "azure-native:healthcareapis/v20221201:DicomService" }, { type: "azure-native:healthcareapis/v20230228:DicomService" }, { type: "azure-native:healthcareapis/v20230906:DicomService" }, { type: "azure-native:healthcareapis/v20231101:DicomService" }, { type: "azure-native:healthcareapis/v20240301:DicomService" }, { type: "azure-native:healthcareapis/v20240331:DicomService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DicomService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DicomService resource.
 */
export interface DicomServiceArgs {
    /**
     * Dicom Service Cors configuration.
     */
    corsConfiguration?: pulumi.Input<types.inputs.CorsConfigurationArgs>;
    /**
     * The name of DICOM Service resource.
     */
    dicomServiceName?: pulumi.Input<string>;
    /**
     * The encryption settings of the DICOM service
     */
    encryption?: pulumi.Input<types.inputs.EncryptionArgs>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    identity?: pulumi.Input<types.inputs.ServiceManagedIdentityIdentityArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}