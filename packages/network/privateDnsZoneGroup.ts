import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Private dns zone group resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2021-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export class PrivateDnsZoneGroup extends pulumi.CustomResource {
    /**
     * Get an existing PrivateDnsZoneGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateDnsZoneGroup {
        return new PrivateDnsZoneGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:PrivateDnsZoneGroup';

    /**
     * Returns true if the given object is an instance of PrivateDnsZoneGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateDnsZoneGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateDnsZoneGroup.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * A collection of private dns zone configurations of the private dns zone group.
     */
    public readonly privateDnsZoneConfigs!: pulumi.Output<types.outputs.PrivateDnsZoneConfigResponse[] | undefined>;
    /**
     * The provisioning state of the private dns zone group resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;

    /**
     * Create a PrivateDnsZoneGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateDnsZoneGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateEndpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateEndpointName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateDnsZoneConfigs"] = args ? args.privateDnsZoneConfigs : undefined;
            resourceInputs["privateDnsZoneGroupName"] = args ? args.privateDnsZoneGroupName : undefined;
            resourceInputs["privateEndpointName"] = args ? args.privateEndpointName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateDnsZoneConfigs"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200301:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20200401:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20200501:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20200601:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20200701:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20200801:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20201101:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20210201:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20210301:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20210501:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20210801:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20220101:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20220501:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20220701:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20220901:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20221101:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20230201:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20230401:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20230501:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20230601:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20230901:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20231101:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20240101:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20240301:PrivateDnsZoneGroup" }, { type: "azure-native:network/v20240501:PrivateDnsZoneGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateDnsZoneGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateDnsZoneGroup resource.
 */
export interface PrivateDnsZoneGroupArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * A collection of private dns zone configurations of the private dns zone group.
     */
    privateDnsZoneConfigs?: pulumi.Input<pulumi.Input<types.inputs.PrivateDnsZoneConfigArgs>[]>;
    /**
     * The name of the private dns zone group.
     */
    privateDnsZoneGroupName?: pulumi.Input<string>;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}