import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Network Manager Connection resource
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2022-01-01, 2022-02-01-preview, 2022-04-01-preview, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SubscriptionNetworkManagerConnection extends pulumi.CustomResource {
    /**
     * Get an existing SubscriptionNetworkManagerConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SubscriptionNetworkManagerConnection {
        return new SubscriptionNetworkManagerConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:SubscriptionNetworkManagerConnection';

    /**
     * Returns true if the given object is an instance of SubscriptionNetworkManagerConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SubscriptionNetworkManagerConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SubscriptionNetworkManagerConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A description of the network manager connection.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network Manager Id.
     */
    public readonly networkManagerId!: pulumi.Output<string | undefined>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SubscriptionNetworkManagerConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SubscriptionNetworkManagerConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["networkManagerConnectionName"] = args ? args.networkManagerConnectionName : undefined;
            resourceInputs["networkManagerId"] = args ? args.networkManagerId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkManagerId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210501preview:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20220101:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20220201preview:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20220401preview:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20220501:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20220701:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20220901:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20221101:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20230201:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20230401:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20230501:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20230601:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20230901:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20231101:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20240101:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20240301:SubscriptionNetworkManagerConnection" }, { type: "azure-native:network/v20240501:SubscriptionNetworkManagerConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SubscriptionNetworkManagerConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SubscriptionNetworkManagerConnection resource.
 */
export interface SubscriptionNetworkManagerConnectionArgs {
    /**
     * A description of the network manager connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Name for the network manager connection.
     */
    networkManagerConnectionName?: pulumi.Input<string>;
    /**
     * Network Manager Id.
     */
    networkManagerId?: pulumi.Input<string>;
}