import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The network manager connectivity configuration resource
 */
export class ConnectivityConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing ConnectivityConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectivityConfiguration {
        return new ConnectivityConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20210501preview:ConnectivityConfiguration';

    /**
     * Returns true if the given object is an instance of ConnectivityConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectivityConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectivityConfiguration.__pulumiType;
    }

    /**
     * Groups for configuration
     */
    public readonly appliesToGroups!: pulumi.Output<types.outputs.ConnectivityGroupItemResponse[]>;
    /**
     * Connectivity topology type.
     */
    public readonly connectivityTopology!: pulumi.Output<string>;
    /**
     * Flag if need to remove current existing peerings.
     */
    public readonly deleteExistingPeering!: pulumi.Output<string | undefined>;
    /**
     * A description of the connectivity configuration.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A friendly name for the resource.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * List of hubItems
     */
    public readonly hubs!: pulumi.Output<types.outputs.HubResponse[] | undefined>;
    /**
     * Flag if global mesh is supported.
     */
    public readonly isGlobal!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the connectivity configuration resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectivityConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectivityConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.appliesToGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appliesToGroups'");
            }
            if ((!args || args.connectivityTopology === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectivityTopology'");
            }
            if ((!args || args.networkManagerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkManagerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appliesToGroups"] = args ? args.appliesToGroups : undefined;
            resourceInputs["configurationName"] = args ? args.configurationName : undefined;
            resourceInputs["connectivityTopology"] = args ? args.connectivityTopology : undefined;
            resourceInputs["deleteExistingPeering"] = args ? args.deleteExistingPeering : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["hubs"] = args ? args.hubs : undefined;
            resourceInputs["isGlobal"] = args ? args.isGlobal : undefined;
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appliesToGroups"] = undefined /*out*/;
            resourceInputs["connectivityTopology"] = undefined /*out*/;
            resourceInputs["deleteExistingPeering"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hubs"] = undefined /*out*/;
            resourceInputs["isGlobal"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:ConnectivityConfiguration" }, { type: "azure-native:network/v20210201preview:ConnectivityConfiguration" }, { type: "azure-native:network/v20220101:ConnectivityConfiguration" }, { type: "azure-native:network/v20220201preview:ConnectivityConfiguration" }, { type: "azure-native:network/v20220401preview:ConnectivityConfiguration" }, { type: "azure-native:network/v20220501:ConnectivityConfiguration" }, { type: "azure-native:network/v20220701:ConnectivityConfiguration" }, { type: "azure-native:network/v20220901:ConnectivityConfiguration" }, { type: "azure-native:network/v20221101:ConnectivityConfiguration" }, { type: "azure-native:network/v20230201:ConnectivityConfiguration" }, { type: "azure-native:network/v20230401:ConnectivityConfiguration" }, { type: "azure-native:network/v20230501:ConnectivityConfiguration" }, { type: "azure-native:network/v20230601:ConnectivityConfiguration" }, { type: "azure-native:network/v20230901:ConnectivityConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectivityConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectivityConfiguration resource.
 */
export interface ConnectivityConfigurationArgs {
    /**
     * Groups for configuration
     */
    appliesToGroups: pulumi.Input<pulumi.Input<types.inputs.ConnectivityGroupItemArgs>[]>;
    /**
     * The name of the network manager connectivity configuration.
     */
    configurationName?: pulumi.Input<string>;
    /**
     * Connectivity topology type.
     */
    connectivityTopology: pulumi.Input<string | types.enums.ConnectivityTopology>;
    /**
     * Flag if need to remove current existing peerings.
     */
    deleteExistingPeering?: pulumi.Input<string | types.enums.DeleteExistingPeering>;
    /**
     * A description of the connectivity configuration.
     */
    description?: pulumi.Input<string>;
    /**
     * A friendly name for the resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * List of hubItems
     */
    hubs?: pulumi.Input<pulumi.Input<types.inputs.HubArgs>[]>;
    /**
     * Flag if global mesh is supported.
     */
    isGlobal?: pulumi.Input<string | types.enums.IsGlobal>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}