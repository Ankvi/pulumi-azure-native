import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Backend details.
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
    public static readonly __pulumiType = 'azure-native:apimanagement/v20180101:Backend';

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
     * Backend Credentials Contract Properties
     */
    public readonly credentials!: pulumi.Output<types.outputs.apimanagement.v20180101.BackendCredentialsContractResponse | undefined>;
    /**
     * Backend Description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Backend Properties contract
     */
    public readonly properties!: pulumi.Output<types.outputs.apimanagement.v20180101.BackendPropertiesResponse>;
    /**
     * Backend communication protocol.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Backend Proxy Contract Properties
     */
    public readonly proxy!: pulumi.Output<types.outputs.apimanagement.v20180101.BackendProxyContractResponse | undefined>;
    /**
     * Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
     */
    public readonly resourceId!: pulumi.Output<string | undefined>;
    /**
     * Backend Title.
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * Backend TLS Properties
     */
    public readonly tls!: pulumi.Output<types.outputs.apimanagement.v20180101.BackendTlsPropertiesResponse | undefined>;
    /**
     * Resource type for API Management resource.
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
            resourceInputs["backendid"] = args ? args.backendid : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["proxy"] = args ? args.proxy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["tls"] = args ? (args.tls ? pulumi.output(args.tls).apply(types.inputs.apimanagement.v20180101.backendTlsPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
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
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:Backend" }, { type: "azure-native:apimanagement/v20160707:Backend" }, { type: "azure-native:apimanagement/v20161010:Backend" }, { type: "azure-native:apimanagement/v20170301:Backend" }, { type: "azure-native:apimanagement/v20180601preview:Backend" }, { type: "azure-native:apimanagement/v20190101:Backend" }, { type: "azure-native:apimanagement/v20191201:Backend" }, { type: "azure-native:apimanagement/v20191201preview:Backend" }, { type: "azure-native:apimanagement/v20200601preview:Backend" }, { type: "azure-native:apimanagement/v20201201:Backend" }, { type: "azure-native:apimanagement/v20210101preview:Backend" }, { type: "azure-native:apimanagement/v20210401preview:Backend" }, { type: "azure-native:apimanagement/v20210801:Backend" }, { type: "azure-native:apimanagement/v20211201preview:Backend" }, { type: "azure-native:apimanagement/v20220401preview:Backend" }, { type: "azure-native:apimanagement/v20220801:Backend" }, { type: "azure-native:apimanagement/v20220901preview:Backend" }, { type: "azure-native:apimanagement/v20230301preview:Backend" }] };
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
    backendid?: pulumi.Input<string>;
    /**
     * Backend Credentials Contract Properties
     */
    credentials?: pulumi.Input<types.inputs.apimanagement.v20180101.BackendCredentialsContractArgs>;
    /**
     * Backend Description.
     */
    description?: pulumi.Input<string>;
    /**
     * Backend Properties contract
     */
    properties?: pulumi.Input<types.inputs.apimanagement.v20180101.BackendPropertiesArgs>;
    /**
     * Backend communication protocol.
     */
    protocol: pulumi.Input<string | types.enums.v20180101.BackendProtocol>;
    /**
     * Backend Proxy Contract Properties
     */
    proxy?: pulumi.Input<types.inputs.apimanagement.v20180101.BackendProxyContractArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
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
    tls?: pulumi.Input<types.inputs.apimanagement.v20180101.BackendTlsPropertiesArgs>;
    /**
     * Runtime Url of the Backend.
     */
    url: pulumi.Input<string>;
}
