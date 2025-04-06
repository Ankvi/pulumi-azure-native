import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an instance of a orchestrator.
 *
 * Uses Azure REST API version 2023-06-27-preview. In version 2.x of the Azure Native provider, it used API version 2021-03-15.
 *
 * Other available API versions: 2021-03-15, 2023-05-18-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native delegatednetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class OrchestratorInstanceServiceDetails extends pulumi.CustomResource {
    /**
     * Get an existing OrchestratorInstanceServiceDetails resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OrchestratorInstanceServiceDetails {
        return new OrchestratorInstanceServiceDetails(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:delegatednetwork:OrchestratorInstanceServiceDetails';

    /**
     * Returns true if the given object is an instance of OrchestratorInstanceServiceDetails.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrchestratorInstanceServiceDetails {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrchestratorInstanceServiceDetails.__pulumiType;
    }

    /**
     * K8s APIServer url. Either one of apiServerEndpoint or privateLinkResourceId can be specified
     */
    public readonly apiServerEndpoint!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * RootCA certificate of kubernetes cluster base64 encoded
     */
    public readonly clusterRootCA!: pulumi.Output<string | undefined>;
    /**
     * Properties of the controller.
     */
    public readonly controllerDetails!: pulumi.Output<types.outputs.ControllerDetailsResponse>;
    /**
     * The identity of the orchestrator
     */
    public readonly identity!: pulumi.Output<types.outputs.OrchestratorIdentityResponse | undefined>;
    /**
     * The kind of workbook. Choices are user and shared.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * AAD ID used with apiserver
     */
    public readonly orchestratorAppId!: pulumi.Output<string | undefined>;
    /**
     * TenantID of server App ID
     */
    public readonly orchestratorTenantId!: pulumi.Output<string | undefined>;
    /**
     * private link arm resource id. Either one of apiServerEndpoint or privateLinkResourceId can be specified
     */
    public readonly privateLinkResourceId!: pulumi.Output<string | undefined>;
    /**
     * The current state of orchestratorInstance resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource guid.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OrchestratorInstanceServiceDetails resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrchestratorInstanceServiceDetailsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.controllerDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controllerDetails'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["apiServerEndpoint"] = args ? args.apiServerEndpoint : undefined;
            resourceInputs["clusterRootCA"] = args ? args.clusterRootCA : undefined;
            resourceInputs["controllerDetails"] = args ? args.controllerDetails : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["orchestratorAppId"] = args ? args.orchestratorAppId : undefined;
            resourceInputs["orchestratorTenantId"] = args ? args.orchestratorTenantId : undefined;
            resourceInputs["privateLinkResourceId"] = args ? args.privateLinkResourceId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiServerEndpoint"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterRootCA"] = undefined /*out*/;
            resourceInputs["controllerDetails"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["orchestratorAppId"] = undefined /*out*/;
            resourceInputs["orchestratorTenantId"] = undefined /*out*/;
            resourceInputs["privateLinkResourceId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:delegatednetwork/v20200808preview:OrchestratorInstanceServiceDetails" }, { type: "azure-native:delegatednetwork/v20210315:OrchestratorInstanceServiceDetails" }, { type: "azure-native:delegatednetwork/v20230518preview:OrchestratorInstanceServiceDetails" }, { type: "azure-native:delegatednetwork/v20230627preview:OrchestratorInstanceServiceDetails" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OrchestratorInstanceServiceDetails.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OrchestratorInstanceServiceDetails resource.
 */
export interface OrchestratorInstanceServiceDetailsArgs {
    /**
     * K8s APIServer url. Either one of apiServerEndpoint or privateLinkResourceId can be specified
     */
    apiServerEndpoint?: pulumi.Input<string>;
    /**
     * RootCA certificate of kubernetes cluster base64 encoded
     */
    clusterRootCA?: pulumi.Input<string>;
    /**
     * Properties of the controller.
     */
    controllerDetails: pulumi.Input<types.inputs.ControllerDetailsArgs>;
    /**
     * The identity of the orchestrator
     */
    identity?: pulumi.Input<types.inputs.OrchestratorIdentityArgs>;
    /**
     * The kind of workbook. Choices are user and shared.
     */
    kind: pulumi.Input<string | types.enums.OrchestratorKind>;
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * AAD ID used with apiserver
     */
    orchestratorAppId?: pulumi.Input<string>;
    /**
     * TenantID of server App ID
     */
    orchestratorTenantId?: pulumi.Input<string>;
    /**
     * private link arm resource id. Either one of apiServerEndpoint or privateLinkResourceId can be specified
     */
    privateLinkResourceId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}