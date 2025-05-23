import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Media Services account.
 *
 * Uses Azure REST API version 2023-01-01. In version 2.x of the Azure Native provider, it used API version 2023-01-01.
 *
 * Other available API versions: 2015-10-01, 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-05-01, 2021-06-01, 2021-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class MediaService extends pulumi.CustomResource {
    /**
     * Get an existing MediaService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MediaService {
        return new MediaService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:MediaService';

    /**
     * Returns true if the given object is an instance of MediaService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediaService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediaService.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The account encryption properties.
     */
    public readonly encryption!: pulumi.Output<types.outputs.AccountEncryptionResponse | undefined>;
    /**
     * The Managed Identity for the Media Services account.
     */
    public readonly identity!: pulumi.Output<types.outputs.MediaServiceIdentityResponse | undefined>;
    /**
     * The Key Delivery properties for Media Services account.
     */
    public readonly keyDelivery!: pulumi.Output<types.outputs.KeyDeliveryResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The Media Services account ID.
     */
    public /*out*/ readonly mediaServiceId!: pulumi.Output<string>;
    /**
     * The minimum TLS version allowed for this account's requests. This is an optional property. If unspecified, a secure default value will be used.
     */
    public readonly minimumTlsVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Private Endpoint Connections created for the Media Service account.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Provisioning state of the Media Services account.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Whether or not public network access is allowed for resources under the Media Services account.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The storage accounts for this resource.
     */
    public readonly storageAccounts!: pulumi.Output<types.outputs.StorageAccountResponse[] | undefined>;
    public readonly storageAuthentication!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MediaService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediaServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["keyDelivery"] = args ? args.keyDelivery : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["minimumTlsVersion"] = (args ? args.minimumTlsVersion : undefined) ?? "Tls12";
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            resourceInputs["storageAuthentication"] = args ? args.storageAuthentication : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["mediaServiceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["keyDelivery"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mediaServiceId"] = undefined /*out*/;
            resourceInputs["minimumTlsVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["storageAccounts"] = undefined /*out*/;
            resourceInputs["storageAuthentication"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20151001:MediaService" }, { type: "azure-native:media/v20180330preview:MediaService" }, { type: "azure-native:media/v20180601preview:MediaService" }, { type: "azure-native:media/v20180701:MediaService" }, { type: "azure-native:media/v20200501:MediaService" }, { type: "azure-native:media/v20210501:MediaService" }, { type: "azure-native:media/v20210601:MediaService" }, { type: "azure-native:media/v20211101:MediaService" }, { type: "azure-native:media/v20230101:MediaService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MediaService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MediaService resource.
 */
export interface MediaServiceArgs {
    /**
     * The Media Services account name.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The account encryption properties.
     */
    encryption?: pulumi.Input<types.inputs.AccountEncryptionArgs>;
    /**
     * The Managed Identity for the Media Services account.
     */
    identity?: pulumi.Input<types.inputs.MediaServiceIdentityArgs>;
    /**
     * The Key Delivery properties for Media Services account.
     */
    keyDelivery?: pulumi.Input<types.inputs.KeyDeliveryArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The minimum TLS version allowed for this account's requests. This is an optional property. If unspecified, a secure default value will be used.
     */
    minimumTlsVersion?: pulumi.Input<string | types.enums.MinimumTlsVersion>;
    /**
     * Whether or not public network access is allowed for resources under the Media Services account.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The storage accounts for this resource.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<types.inputs.StorageAccountArgs>[]>;
    storageAuthentication?: pulumi.Input<string | types.enums.StorageAuthentication>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}