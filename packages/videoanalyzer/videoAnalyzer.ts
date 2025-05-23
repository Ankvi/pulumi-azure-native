import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Video Analyzer account.
 *
 * Uses Azure REST API version 2021-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-11-01-preview.
 */
export class VideoAnalyzer extends pulumi.CustomResource {
    /**
     * Get an existing VideoAnalyzer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VideoAnalyzer {
        return new VideoAnalyzer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:videoanalyzer:VideoAnalyzer';

    /**
     * Returns true if the given object is an instance of VideoAnalyzer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VideoAnalyzer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VideoAnalyzer.__pulumiType;
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
     * The endpoints associated with this resource.
     */
    public /*out*/ readonly endpoints!: pulumi.Output<types.outputs.EndpointResponse[]>;
    /**
     * The identities associated to the Video Analyzer resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.VideoAnalyzerIdentityResponse | undefined>;
    /**
     * The IoT Hubs for this resource.
     */
    public readonly iotHubs!: pulumi.Output<types.outputs.IotHubResponse[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network access control for Video Analyzer.
     */
    public readonly networkAccessControl!: pulumi.Output<types.outputs.NetworkAccessControlResponse | undefined>;
    /**
     * Private Endpoint Connections created under Video Analyzer account.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Provisioning state of the Video Analyzer account.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Whether or not public network access is allowed for resources under the Video Analyzer account.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The storage accounts for this resource.
     */
    public readonly storageAccounts!: pulumi.Output<types.outputs.StorageAccountResponse[]>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
     * Create a VideoAnalyzer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VideoAnalyzerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageAccounts === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccounts'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["iotHubs"] = args ? args.iotHubs : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkAccessControl"] = args ? args.networkAccessControl : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["iotHubs"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkAccessControl"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["storageAccounts"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:videoanalyzer/v20210501preview:VideoAnalyzer" }, { type: "azure-native:videoanalyzer/v20211101preview:VideoAnalyzer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VideoAnalyzer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VideoAnalyzer resource.
 */
export interface VideoAnalyzerArgs {
    /**
     * The Video Analyzer account name.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The account encryption properties.
     */
    encryption?: pulumi.Input<types.inputs.AccountEncryptionArgs>;
    /**
     * The identities associated to the Video Analyzer resource.
     */
    identity?: pulumi.Input<types.inputs.VideoAnalyzerIdentityArgs>;
    /**
     * The IoT Hubs for this resource.
     */
    iotHubs?: pulumi.Input<pulumi.Input<types.inputs.IotHubArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Network access control for Video Analyzer.
     */
    networkAccessControl?: pulumi.Input<types.inputs.NetworkAccessControlArgs>;
    /**
     * Whether or not public network access is allowed for resources under the Video Analyzer account.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The storage accounts for this resource.
     */
    storageAccounts: pulumi.Input<pulumi.Input<types.inputs.StorageAccountArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}