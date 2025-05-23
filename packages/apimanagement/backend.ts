import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Backend details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Backend extends pulumi.CustomResource {
    /**
     * Get an existing Backend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Backend {
        return new Backend(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:Backend';

    /**
     * Returns true if the given object is an instance of Backend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Backend {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Backend.__pulumiType;
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
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Runtime Url of the Backend.
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a Backend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackendArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["backendId"] = args ? args.backendId : undefined;
            resourceInputs["circuitBreaker"] = args ? args.circuitBreaker : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["proxy"] = args ? args.proxy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["tls"] = args ? (args.tls ? pulumi.output(args.tls).apply(types.inputs.backendTlsPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["circuitBreaker"] = undefined /*out*/;
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20160707:Backend" }, { type: "azure-native:apimanagement/v20161010:Backend" }, { type: "azure-native:apimanagement/v20170301:Backend" }, { type: "azure-native:apimanagement/v20180101:Backend" }, { type: "azure-native:apimanagement/v20180601preview:Backend" }, { type: "azure-native:apimanagement/v20190101:Backend" }, { type: "azure-native:apimanagement/v20191201:Backend" }, { type: "azure-native:apimanagement/v20191201preview:Backend" }, { type: "azure-native:apimanagement/v20200601preview:Backend" }, { type: "azure-native:apimanagement/v20201201:Backend" }, { type: "azure-native:apimanagement/v20210101preview:Backend" }, { type: "azure-native:apimanagement/v20210401preview:Backend" }, { type: "azure-native:apimanagement/v20210801:Backend" }, { type: "azure-native:apimanagement/v20211201preview:Backend" }, { type: "azure-native:apimanagement/v20220401preview:Backend" }, { type: "azure-native:apimanagement/v20220801:Backend" }, { type: "azure-native:apimanagement/v20220901preview:Backend" }, { type: "azure-native:apimanagement/v20230301preview:Backend" }, { type: "azure-native:apimanagement/v20230501preview:Backend" }, { type: "azure-native:apimanagement/v20230901preview:Backend" }, { type: "azure-native:apimanagement/v20240501:Backend" }, { type: "azure-native:apimanagement/v20240601preview:Backend" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Backend.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Backend resource.
 */
export interface BackendArgs {
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
     * Runtime Url of the Backend.
     */
    url: pulumi.Input<string>;
}