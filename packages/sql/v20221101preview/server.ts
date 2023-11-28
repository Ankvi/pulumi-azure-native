import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure SQL Database server.
 */
export class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Server {
        return new Server(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20221101preview:Server';

    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Server {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Server.__pulumiType;
    }

    /**
     * Administrator username for the server. Once created it cannot be changed.
     */
    public readonly administratorLogin!: pulumi.Output<string | undefined>;
    /**
     * The Azure Active Directory administrator of the server. This can only be used at server create time. If used for server update, it will be ignored or it will result in an error. For updates individual APIs will need to be used.
     */
    public readonly administrators!: pulumi.Output<types.outputs.ServerExternalAdministratorResponse | undefined>;
    /**
     * Status of external governance.
     */
    public /*out*/ readonly externalGovernanceStatus!: pulumi.Output<string>;
    /**
     * The Client id used for cross tenant CMK scenario
     */
    public readonly federatedClientId!: pulumi.Output<string | undefined>;
    /**
     * The fully qualified domain name of the server.
     */
    public /*out*/ readonly fullyQualifiedDomainName!: pulumi.Output<string>;
    /**
     * The Azure Active Directory identity of the server.
     */
    public readonly identity!: pulumi.Output<types.outputs.ResourceIdentityResponse | undefined>;
    /**
     * A CMK URI of the key to use for encryption.
     */
    public readonly keyId!: pulumi.Output<string | undefined>;
    /**
     * Kind of sql server. This is metadata used for the Azure portal experience.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
     */
    public readonly minimalTlsVersion!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource id of a user assigned identity to be used by default.
     */
    public readonly primaryUserAssignedIdentityId!: pulumi.Output<string | undefined>;
    /**
     * List of private endpoint connections on a server
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.ServerPrivateEndpointConnectionResponse[]>;
    /**
     * Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' or 'SecuredByPerimeter'
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Whether or not to restrict outbound network access for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    public readonly restrictOutboundNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The state of the server.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The version of the server.
     */
    public readonly version!: pulumi.Output<string | undefined>;
    /**
     * Whether or not existing server has a workspace created and if it allows connection from workspace
     */
    public /*out*/ readonly workspaceFeature!: pulumi.Output<string>;

    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["administratorLogin"] = args ? args.administratorLogin : undefined;
            resourceInputs["administratorLoginPassword"] = args ? args.administratorLoginPassword : undefined;
            resourceInputs["administrators"] = args ? args.administrators : undefined;
            resourceInputs["federatedClientId"] = args ? args.federatedClientId : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["keyId"] = args ? args.keyId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["minimalTlsVersion"] = args ? args.minimalTlsVersion : undefined;
            resourceInputs["primaryUserAssignedIdentityId"] = args ? args.primaryUserAssignedIdentityId : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restrictOutboundNetworkAccess"] = args ? args.restrictOutboundNetworkAccess : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["externalGovernanceStatus"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceFeature"] = undefined /*out*/;
        } else {
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["administrators"] = undefined /*out*/;
            resourceInputs["externalGovernanceStatus"] = undefined /*out*/;
            resourceInputs["federatedClientId"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["keyId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["minimalTlsVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["primaryUserAssignedIdentityId"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["restrictOutboundNetworkAccess"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
            resourceInputs["workspaceFeature"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:Server" }, { type: "azure-native:sql/v20140401:Server" }, { type: "azure-native:sql/v20150501preview:Server" }, { type: "azure-native:sql/v20190601preview:Server" }, { type: "azure-native:sql/v20200202preview:Server" }, { type: "azure-native:sql/v20200801preview:Server" }, { type: "azure-native:sql/v20201101preview:Server" }, { type: "azure-native:sql/v20210201preview:Server" }, { type: "azure-native:sql/v20210501preview:Server" }, { type: "azure-native:sql/v20210801preview:Server" }, { type: "azure-native:sql/v20211101:Server" }, { type: "azure-native:sql/v20211101preview:Server" }, { type: "azure-native:sql/v20220201preview:Server" }, { type: "azure-native:sql/v20220501preview:Server" }, { type: "azure-native:sql/v20220801preview:Server" }, { type: "azure-native:sql/v20230201preview:Server" }, { type: "azure-native:sql/v20230501preview:Server" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Server.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * Administrator username for the server. Once created it cannot be changed.
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The administrator login password (required for server creation).
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * The Azure Active Directory administrator of the server. This can only be used at server create time. If used for server update, it will be ignored or it will result in an error. For updates individual APIs will need to be used.
     */
    administrators?: pulumi.Input<types.inputs.ServerExternalAdministratorArgs>;
    /**
     * The Client id used for cross tenant CMK scenario
     */
    federatedClientId?: pulumi.Input<string>;
    /**
     * The Azure Active Directory identity of the server.
     */
    identity?: pulumi.Input<types.inputs.ResourceIdentityArgs>;
    /**
     * A CMK URI of the key to use for encryption.
     */
    keyId?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
     */
    minimalTlsVersion?: pulumi.Input<string>;
    /**
     * The resource id of a user assigned identity to be used by default.
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string>;
    /**
     * Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' or 'SecuredByPerimeter'
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.ServerPublicNetworkAccessFlag>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Whether or not to restrict outbound network access for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    restrictOutboundNetworkAccess?: pulumi.Input<string | types.enums.ServerNetworkAccessFlag>;
    /**
     * The name of the server.
     */
    serverName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The version of the server.
     */
    version?: pulumi.Input<string>;
}
