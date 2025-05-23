import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Backend details.
 *
 * Uses Azure REST API version 2024-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-09-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WorkspaceBackend extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceBackend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceBackend {
        return new WorkspaceBackend(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:WorkspaceBackend';

    /**
     * Returns true if the given object is an instance of WorkspaceBackend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceBackend {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceBackend.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Backend Circuit Breaker Configuration
     */
    public readonly circuitBreaker!: pulumi.Output<types.outputs.BackendCircuitBreakerResponse | undefined>;
    /**
     * Backend Credentials Contract Properties
     */
    public readonly credentials!: pulumi.Output<types.outputs.BackendCredentialsContractResponse | undefined>;
    /**
     * Backend Description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly pool!: pulumi.Output<types.outputs.BackendBaseParametersResponsePool | undefined>;
    /**
     * Backend Properties contract
     */
    public readonly properties!: pulumi.Output<types.outputs.BackendPropertiesResponse>;
    /**
     * Backend communication protocol.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Backend gateway Contract Properties
     */
    public readonly proxy!: pulumi.Output<types.outputs.BackendProxyContractResponse | undefined>;
    /**
     * Management Uri of the Resource in External System. This URL can be the Arm Resource Id of Logic Apps, Function Apps or API Apps.
     */
    public readonly resourceId!: pulumi.Output<string | undefined>;
    /**
     * Backend Title.
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * Backend TLS Properties
     */
    public readonly tls!: pulumi.Output<types.outputs.BackendTlsPropertiesResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Runtime Url of the Backend.
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a WorkspaceBackend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceBackendArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["backendId"] = args ? args.backendId : undefined;
            resourceInputs["circuitBreaker"] = args ? args.circuitBreaker : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["pool"] = args ? args.pool : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["proxy"] = args ? args.proxy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["tls"] = args ? (args.tls ? pulumi.output(args.tls).apply(types.inputs.backendTlsPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["circuitBreaker"] = undefined /*out*/;
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pool"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["proxy"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["tls"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20230901preview:WorkspaceBackend" }, { type: "azure-native:apimanagement/v20240501:WorkspaceBackend" }, { type: "azure-native:apimanagement/v20240601preview:WorkspaceBackend" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceBackend.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceBackend resource.
 */
export interface WorkspaceBackendArgs {
    /**
     * Identifier of the Backend entity. Must be unique in the current API Management service instance.
     */
    backendId?: pulumi.Input<string>;
    /**
     * Backend Circuit Breaker Configuration
     */
    circuitBreaker?: pulumi.Input<types.inputs.BackendCircuitBreakerArgs>;
    /**
     * Backend Credentials Contract Properties
     */
    credentials?: pulumi.Input<types.inputs.BackendCredentialsContractArgs>;
    /**
     * Backend Description.
     */
    description?: pulumi.Input<string>;
    pool?: pulumi.Input<types.inputs.BackendBaseParametersPoolArgs>;
    /**
     * Backend Properties contract
     */
    properties?: pulumi.Input<types.inputs.BackendPropertiesArgs>;
    /**
     * Backend communication protocol.
     */
    protocol: pulumi.Input<string | types.enums.BackendProtocol>;
    /**
     * Backend gateway Contract Properties
     */
    proxy?: pulumi.Input<types.inputs.BackendProxyContractArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Management Uri of the Resource in External System. This URL can be the Arm Resource Id of Logic Apps, Function Apps or API Apps.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Backend Title.
     */
    title?: pulumi.Input<string>;
    /**
     * Backend TLS Properties
     */
    tls?: pulumi.Input<types.inputs.BackendTlsPropertiesArgs>;
    /**
     * Type of the backend. A backend can be either Single or Pool.
     */
    type?: pulumi.Input<string | types.enums.BackendType>;
    /**
     * Runtime Url of the Backend.
     */
    url: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}