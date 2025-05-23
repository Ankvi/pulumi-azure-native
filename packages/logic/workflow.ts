import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The workflow type.
 *
 * Uses Azure REST API version 2019-05-01. In version 2.x of the Azure Native provider, it used API version 2019-05-01.
 *
 * Other available API versions: 2015-02-01-preview, 2016-06-01, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Workflow extends pulumi.CustomResource {
    /**
     * Get an existing Workflow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Workflow {
        return new Workflow(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic:Workflow';

    /**
     * Returns true if the given object is an instance of Workflow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Workflow {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Workflow.__pulumiType;
    }

    /**
     * The access control configuration.
     */
    public readonly accessControl!: pulumi.Output<types.outputs.FlowAccessControlConfigurationResponse | undefined>;
    /**
     * Gets the access endpoint.
     */
    public /*out*/ readonly accessEndpoint!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets the changed time.
     */
    public /*out*/ readonly changedTime!: pulumi.Output<string>;
    /**
     * Gets the created time.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * The definition.
     */
    public readonly definition!: pulumi.Output<any | undefined>;
    /**
     * The endpoints configuration.
     */
    public readonly endpointsConfiguration!: pulumi.Output<types.outputs.FlowEndpointsConfigurationResponse | undefined>;
    /**
     * Managed service identity properties.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The integration account.
     */
    public readonly integrationAccount!: pulumi.Output<types.outputs.ResourceReferenceResponse | undefined>;
    /**
     * The integration service environment.
     */
    public readonly integrationServiceEnvironment!: pulumi.Output<types.outputs.ResourceReferenceResponse | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The parameters.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.WorkflowParameterResponse} | undefined>;
    /**
     * Gets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The sku.
     */
    public /*out*/ readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * The state.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets the version.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a Workflow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkflowArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessControl"] = args ? args.accessControl : undefined;
            resourceInputs["definition"] = args ? args.definition : undefined;
            resourceInputs["endpointsConfiguration"] = args ? args.endpointsConfiguration : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["integrationAccount"] = args ? args.integrationAccount : undefined;
            resourceInputs["integrationServiceEnvironment"] = args ? args.integrationServiceEnvironment : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workflowName"] = args ? args.workflowName : undefined;
            resourceInputs["accessEndpoint"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["accessControl"] = undefined /*out*/;
            resourceInputs["accessEndpoint"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["definition"] = undefined /*out*/;
            resourceInputs["endpointsConfiguration"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["integrationAccount"] = undefined /*out*/;
            resourceInputs["integrationServiceEnvironment"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic/v20150201preview:Workflow" }, { type: "azure-native:logic/v20160601:Workflow" }, { type: "azure-native:logic/v20180701preview:Workflow" }, { type: "azure-native:logic/v20190501:Workflow" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Workflow.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Workflow resource.
 */
export interface WorkflowArgs {
    /**
     * The access control configuration.
     */
    accessControl?: pulumi.Input<types.inputs.FlowAccessControlConfigurationArgs>;
    /**
     * The definition.
     */
    definition?: any;
    /**
     * The endpoints configuration.
     */
    endpointsConfiguration?: pulumi.Input<types.inputs.FlowEndpointsConfigurationArgs>;
    /**
     * Managed service identity properties.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The integration account.
     */
    integrationAccount?: pulumi.Input<types.inputs.ResourceReferenceArgs>;
    /**
     * The integration service environment.
     */
    integrationServiceEnvironment?: pulumi.Input<types.inputs.ResourceReferenceArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The parameters.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.WorkflowParameterArgs>}>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The state.
     */
    state?: pulumi.Input<string | types.enums.WorkflowState>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The workflow name.
     */
    workflowName?: pulumi.Input<string>;
}