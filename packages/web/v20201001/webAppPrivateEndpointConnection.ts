import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Private Endpoint Connection ARM resource.
 */
export class WebAppPrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing WebAppPrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppPrivateEndpointConnection {
        return new WebAppPrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20201001:WebAppPrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of WebAppPrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppPrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppPrivateEndpointConnection.__pulumiType;
    }

    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * PrivateEndpoint of a remote private endpoint connection
     */
    public /*out*/ readonly privateEndpoint!: pulumi.Output<types.outputs.web.v20201001.ArmIdWrapperResponse | undefined>;
    /**
     * The state of a private link connection
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.web.v20201001.PrivateLinkConnectionStateResponse | undefined>;
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.web.v20201001.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppPrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppPrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppPrivateEndpointConnection" }, { type: "azure-native:web/v20190801:WebAppPrivateEndpointConnection" }, { type: "azure-native:web/v20200601:WebAppPrivateEndpointConnection" }, { type: "azure-native:web/v20200901:WebAppPrivateEndpointConnection" }, { type: "azure-native:web/v20201201:WebAppPrivateEndpointConnection" }, { type: "azure-native:web/v20210101:WebAppPrivateEndpointConnection" }, { type: "azure-native:web/v20210115:WebAppPrivateEndpointConnection" }, { type: "azure-native:web/v20210201:WebAppPrivateEndpointConnection" }, { type: "azure-native:web/v20210301:WebAppPrivateEndpointConnection" }, { type: "azure-native:web/v20220301:WebAppPrivateEndpointConnection" }, { type: "azure-native:web/v20220901:WebAppPrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppPrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppPrivateEndpointConnection resource.
 */
export interface WebAppPrivateEndpointConnectionArgs {
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the site.
     */
    name: pulumi.Input<string>;
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * The state of a private link connection
     */
    privateLinkServiceConnectionState?: pulumi.Input<types.inputs.web.v20201001.PrivateLinkConnectionStateArgs>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
