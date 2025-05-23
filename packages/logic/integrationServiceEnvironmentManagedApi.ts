import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The integration service environment managed api.
 *
 * Uses Azure REST API version 2019-05-01. In version 2.x of the Azure Native provider, it used API version 2019-05-01.
 */
export class IntegrationServiceEnvironmentManagedApi extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationServiceEnvironmentManagedApi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationServiceEnvironmentManagedApi {
        return new IntegrationServiceEnvironmentManagedApi(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic:IntegrationServiceEnvironmentManagedApi';

    /**
     * Returns true if the given object is an instance of IntegrationServiceEnvironmentManagedApi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationServiceEnvironmentManagedApi {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationServiceEnvironmentManagedApi.__pulumiType;
    }

    /**
     * The API definition.
     */
    public /*out*/ readonly apiDefinitionUrl!: pulumi.Output<string>;
    /**
     * The api definitions.
     */
    public /*out*/ readonly apiDefinitions!: pulumi.Output<types.outputs.ApiResourceDefinitionsResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The backend service.
     */
    public /*out*/ readonly backendService!: pulumi.Output<types.outputs.ApiResourceBackendServiceResponse>;
    /**
     * The capabilities.
     */
    public /*out*/ readonly capabilities!: pulumi.Output<string[]>;
    /**
     * The category.
     */
    public /*out*/ readonly category!: pulumi.Output<string>;
    /**
     * The connection parameters.
     */
    public /*out*/ readonly connectionParameters!: pulumi.Output<{[key: string]: any}>;
    /**
     * The integration service environment managed api deployment parameters.
     */
    public readonly deploymentParameters!: pulumi.Output<types.outputs.IntegrationServiceEnvironmentManagedApiDeploymentParametersResponse | undefined>;
    /**
     * The api general information.
     */
    public /*out*/ readonly generalInformation!: pulumi.Output<types.outputs.ApiResourceGeneralInformationResponse>;
    /**
     * The integration service environment reference.
     */
    public readonly integrationServiceEnvironment!: pulumi.Output<types.outputs.ResourceReferenceResponse | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The metadata.
     */
    public /*out*/ readonly metadata!: pulumi.Output<types.outputs.ApiResourceMetadataResponse>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The policies for the API.
     */
    public /*out*/ readonly policies!: pulumi.Output<types.outputs.ApiResourcePoliciesResponse>;
    /**
     * The provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The runtime urls.
     */
    public /*out*/ readonly runtimeUrls!: pulumi.Output<string[]>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IntegrationServiceEnvironmentManagedApi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationServiceEnvironmentManagedApiArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.integrationServiceEnvironmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationServiceEnvironmentName'");
            }
            if ((!args || args.resourceGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroup'");
            }
            resourceInputs["apiName"] = args ? args.apiName : undefined;
            resourceInputs["deploymentParameters"] = args ? args.deploymentParameters : undefined;
            resourceInputs["integrationServiceEnvironment"] = args ? args.integrationServiceEnvironment : undefined;
            resourceInputs["integrationServiceEnvironmentName"] = args ? args.integrationServiceEnvironmentName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["apiDefinitionUrl"] = undefined /*out*/;
            resourceInputs["apiDefinitions"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backendService"] = undefined /*out*/;
            resourceInputs["capabilities"] = undefined /*out*/;
            resourceInputs["category"] = undefined /*out*/;
            resourceInputs["connectionParameters"] = undefined /*out*/;
            resourceInputs["generalInformation"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policies"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["runtimeUrls"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiDefinitionUrl"] = undefined /*out*/;
            resourceInputs["apiDefinitions"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backendService"] = undefined /*out*/;
            resourceInputs["capabilities"] = undefined /*out*/;
            resourceInputs["category"] = undefined /*out*/;
            resourceInputs["connectionParameters"] = undefined /*out*/;
            resourceInputs["deploymentParameters"] = undefined /*out*/;
            resourceInputs["generalInformation"] = undefined /*out*/;
            resourceInputs["integrationServiceEnvironment"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policies"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["runtimeUrls"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic/v20190501:IntegrationServiceEnvironmentManagedApi" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IntegrationServiceEnvironmentManagedApi.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IntegrationServiceEnvironmentManagedApi resource.
 */
export interface IntegrationServiceEnvironmentManagedApiArgs {
    /**
     * The api name.
     */
    apiName?: pulumi.Input<string>;
    /**
     * The integration service environment managed api deployment parameters.
     */
    deploymentParameters?: pulumi.Input<types.inputs.IntegrationServiceEnvironmentManagedApiDeploymentParametersArgs>;
    /**
     * The integration service environment reference.
     */
    integrationServiceEnvironment?: pulumi.Input<types.inputs.ResourceReferenceArgs>;
    /**
     * The integration service environment name.
     */
    integrationServiceEnvironmentName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroup: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}