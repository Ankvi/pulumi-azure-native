import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Network profile resource.
 */
export class NetworkProfile extends pulumi.CustomResource {
    /**
     * Get an existing NetworkProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkProfile {
        return new NetworkProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230401:NetworkProfile';

    /**
     * Returns true if the given object is an instance of NetworkProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkProfile.__pulumiType;
    }

    /**
     * List of chid container network interface configurations.
     */
    public readonly containerNetworkInterfaceConfigurations!: pulumi.Output<types.outputs.ContainerNetworkInterfaceConfigurationResponse[] | undefined>;
    /**
     * List of child container network interfaces.
     */
    public /*out*/ readonly containerNetworkInterfaces!: pulumi.Output<types.outputs.ContainerNetworkInterfaceResponse[]>;
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
     * The provisioning state of the network profile resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the network profile resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["containerNetworkInterfaceConfigurations"] = args ? args.containerNetworkInterfaceConfigurations : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfileName"] = args ? args.networkProfileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["containerNetworkInterfaces"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["containerNetworkInterfaceConfigurations"] = undefined /*out*/;
            resourceInputs["containerNetworkInterfaces"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:NetworkProfile" }, { type: "azure-native:network/v20180801:NetworkProfile" }, { type: "azure-native:network/v20181001:NetworkProfile" }, { type: "azure-native:network/v20181101:NetworkProfile" }, { type: "azure-native:network/v20181201:NetworkProfile" }, { type: "azure-native:network/v20190201:NetworkProfile" }, { type: "azure-native:network/v20190401:NetworkProfile" }, { type: "azure-native:network/v20190601:NetworkProfile" }, { type: "azure-native:network/v20190701:NetworkProfile" }, { type: "azure-native:network/v20190801:NetworkProfile" }, { type: "azure-native:network/v20190901:NetworkProfile" }, { type: "azure-native:network/v20191101:NetworkProfile" }, { type: "azure-native:network/v20191201:NetworkProfile" }, { type: "azure-native:network/v20200301:NetworkProfile" }, { type: "azure-native:network/v20200401:NetworkProfile" }, { type: "azure-native:network/v20200501:NetworkProfile" }, { type: "azure-native:network/v20200601:NetworkProfile" }, { type: "azure-native:network/v20200701:NetworkProfile" }, { type: "azure-native:network/v20200801:NetworkProfile" }, { type: "azure-native:network/v20201101:NetworkProfile" }, { type: "azure-native:network/v20210201:NetworkProfile" }, { type: "azure-native:network/v20210301:NetworkProfile" }, { type: "azure-native:network/v20210501:NetworkProfile" }, { type: "azure-native:network/v20210801:NetworkProfile" }, { type: "azure-native:network/v20220101:NetworkProfile" }, { type: "azure-native:network/v20220501:NetworkProfile" }, { type: "azure-native:network/v20220701:NetworkProfile" }, { type: "azure-native:network/v20220901:NetworkProfile" }, { type: "azure-native:network/v20221101:NetworkProfile" }, { type: "azure-native:network/v20230201:NetworkProfile" }, { type: "azure-native:network/v20230501:NetworkProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkProfile resource.
 */
export interface NetworkProfileArgs {
    /**
     * List of chid container network interface configurations.
     */
    containerNetworkInterfaceConfigurations?: pulumi.Input<pulumi.Input<types.inputs.ContainerNetworkInterfaceConfigurationArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the network profile.
     */
    networkProfileName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
