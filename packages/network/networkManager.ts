import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Managed Network resource
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2021-02-01-preview, 2022-01-01, 2022-02-01-preview, 2022-04-01-preview, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-01-01-preview, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class NetworkManager extends pulumi.CustomResource {
    /**
     * Get an existing NetworkManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkManager {
        return new NetworkManager(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:NetworkManager';

    /**
     * Returns true if the given object is an instance of NetworkManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkManager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkManager.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A description of the network manager.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Scope Access.
     */
    public readonly networkManagerScopeAccesses!: pulumi.Output<string[] | undefined>;
    /**
     * Scope of Network Manager.
     */
    public readonly networkManagerScopes!: pulumi.Output<types.outputs.NetworkManagerPropertiesResponseNetworkManagerScopes>;
    /**
     * The provisioning state of the network manager resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Unique identifier for this resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkManagerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkManagerScopes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkManagerScopes'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["networkManagerScopeAccesses"] = args ? args.networkManagerScopeAccesses : undefined;
            resourceInputs["networkManagerScopes"] = args ? args.networkManagerScopes : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkManagerScopeAccesses"] = undefined /*out*/;
            resourceInputs["networkManagerScopes"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210201preview:NetworkManager" }, { type: "azure-native:network/v20210501preview:NetworkManager" }, { type: "azure-native:network/v20220101:NetworkManager" }, { type: "azure-native:network/v20220201preview:NetworkManager" }, { type: "azure-native:network/v20220401preview:NetworkManager" }, { type: "azure-native:network/v20220501:NetworkManager" }, { type: "azure-native:network/v20220701:NetworkManager" }, { type: "azure-native:network/v20220901:NetworkManager" }, { type: "azure-native:network/v20221101:NetworkManager" }, { type: "azure-native:network/v20230201:NetworkManager" }, { type: "azure-native:network/v20230401:NetworkManager" }, { type: "azure-native:network/v20230501:NetworkManager" }, { type: "azure-native:network/v20230601:NetworkManager" }, { type: "azure-native:network/v20230901:NetworkManager" }, { type: "azure-native:network/v20231101:NetworkManager" }, { type: "azure-native:network/v20240101:NetworkManager" }, { type: "azure-native:network/v20240101preview:NetworkManager" }, { type: "azure-native:network/v20240301:NetworkManager" }, { type: "azure-native:network/v20240501:NetworkManager" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkManager.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkManager resource.
 */
export interface NetworkManagerArgs {
    /**
     * A description of the network manager.
     */
    description?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName?: pulumi.Input<string>;
    /**
     * Scope Access.
     */
    networkManagerScopeAccesses?: pulumi.Input<pulumi.Input<string | types.enums.ConfigurationType>[]>;
    /**
     * Scope of Network Manager.
     */
    networkManagerScopes: pulumi.Input<types.inputs.NetworkManagerPropertiesNetworkManagerScopesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}