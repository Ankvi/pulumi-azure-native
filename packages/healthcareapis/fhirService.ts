import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The description of Fhir Service
 *
 * Uses Azure REST API version 2024-03-31. In version 2.x of the Azure Native provider, it used API version 2023-02-28.
 *
 * Other available API versions: 2022-10-01-preview, 2022-12-01, 2023-02-28, 2023-09-06, 2023-11-01, 2023-12-01, 2024-03-01, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthcareapis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class FhirService extends pulumi.CustomResource {
    /**
     * Get an existing FhirService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FhirService {
        return new FhirService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:healthcareapis:FhirService';

    /**
     * Returns true if the given object is an instance of FhirService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FhirService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FhirService.__pulumiType;
    }

    /**
     * Fhir Service Azure container registry configuration.
     */
    public readonly acrConfiguration!: pulumi.Output<types.outputs.FhirServiceAcrConfigurationResponse | undefined>;
    /**
     * Fhir Service authentication configuration.
     */
    public readonly authenticationConfiguration!: pulumi.Output<types.outputs.FhirServiceAuthenticationConfigurationResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Fhir Service Cors configuration.
     */
    public readonly corsConfiguration!: pulumi.Output<types.outputs.FhirServiceCorsConfigurationResponse | undefined>;
    /**
     * The encryption settings of the FHIR service
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionResponse | undefined>;
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Fhir Service event support status.
     */
    public /*out*/ readonly eventState!: pulumi.Output<string>;
    /**
     * Fhir Service export configuration.
     */
    public readonly exportConfiguration!: pulumi.Output<types.outputs.FhirServiceExportConfigurationResponse | undefined>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    public readonly identity!: pulumi.Output<types.outputs.ServiceManagedIdentityResponseIdentity | undefined>;
    /**
     * Implementation Guides configuration.
     */
    public readonly implementationGuidesConfiguration!: pulumi.Output<types.outputs.ImplementationGuidesConfigurationResponse | undefined>;
    /**
     * Fhir Service import configuration.
     */
    public readonly importConfiguration!: pulumi.Output<types.outputs.FhirServiceImportConfigurationResponse | undefined>;
    /**
     * The kind of the service.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
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
     * Determines tracking of history for resources.
     */
    public readonly resourceVersionPolicyConfiguration!: pulumi.Output<types.outputs.ResourceVersionPolicyConfigurationResponse | undefined>;
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
     * Create a FhirService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FhirServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["acrConfiguration"] = args ? args.acrConfiguration : undefined;
            resourceInputs["authenticationConfiguration"] = args ? args.authenticationConfiguration : undefined;
            resourceInputs["corsConfiguration"] = args ? args.corsConfiguration : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["exportConfiguration"] = args ? args.exportConfiguration : undefined;
            resourceInputs["fhirServiceName"] = args ? args.fhirServiceName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["implementationGuidesConfiguration"] = args ? args.implementationGuidesConfiguration : undefined;
            resourceInputs["importConfiguration"] = args ? args.importConfiguration : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceVersionPolicyConfiguration"] = args ? args.resourceVersionPolicyConfiguration : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["eventState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["acrConfiguration"] = undefined /*out*/;
            resourceInputs["authenticationConfiguration"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["corsConfiguration"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["eventState"] = undefined /*out*/;
            resourceInputs["exportConfiguration"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["implementationGuidesConfiguration"] = undefined /*out*/;
            resourceInputs["importConfiguration"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["resourceVersionPolicyConfiguration"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:healthcareapis/v20210601preview:FhirService" }, { type: "azure-native:healthcareapis/v20211101:FhirService" }, { type: "azure-native:healthcareapis/v20220131preview:FhirService" }, { type: "azure-native:healthcareapis/v20220515:FhirService" }, { type: "azure-native:healthcareapis/v20220601:FhirService" }, { type: "azure-native:healthcareapis/v20221001preview:FhirService" }, { type: "azure-native:healthcareapis/v20221201:FhirService" }, { type: "azure-native:healthcareapis/v20230228:FhirService" }, { type: "azure-native:healthcareapis/v20230906:FhirService" }, { type: "azure-native:healthcareapis/v20231101:FhirService" }, { type: "azure-native:healthcareapis/v20231201:FhirService" }, { type: "azure-native:healthcareapis/v20240301:FhirService" }, { type: "azure-native:healthcareapis/v20240331:FhirService" }, { type: "azure-native:healthcareapis/v20250301preview:FhirService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FhirService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FhirService resource.
 */
export interface FhirServiceArgs {
    /**
     * Fhir Service Azure container registry configuration.
     */
    acrConfiguration?: pulumi.Input<types.inputs.FhirServiceAcrConfigurationArgs>;
    /**
     * Fhir Service authentication configuration.
     */
    authenticationConfiguration?: pulumi.Input<types.inputs.FhirServiceAuthenticationConfigurationArgs>;
    /**
     * Fhir Service Cors configuration.
     */
    corsConfiguration?: pulumi.Input<types.inputs.FhirServiceCorsConfigurationArgs>;
    /**
     * The encryption settings of the FHIR service
     */
    encryption?: pulumi.Input<types.inputs.EncryptionArgs>;
    /**
     * Fhir Service export configuration.
     */
    exportConfiguration?: pulumi.Input<types.inputs.FhirServiceExportConfigurationArgs>;
    /**
     * The name of FHIR Service resource.
     */
    fhirServiceName?: pulumi.Input<string>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    identity?: pulumi.Input<types.inputs.ServiceManagedIdentityIdentityArgs>;
    /**
     * Implementation Guides configuration.
     */
    implementationGuidesConfiguration?: pulumi.Input<types.inputs.ImplementationGuidesConfigurationArgs>;
    /**
     * Fhir Service import configuration.
     */
    importConfiguration?: pulumi.Input<types.inputs.FhirServiceImportConfigurationArgs>;
    /**
     * The kind of the service.
     */
    kind?: pulumi.Input<string | types.enums.FhirServiceKind>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Determines tracking of history for resources.
     */
    resourceVersionPolicyConfiguration?: pulumi.Input<types.inputs.ResourceVersionPolicyConfigurationArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}