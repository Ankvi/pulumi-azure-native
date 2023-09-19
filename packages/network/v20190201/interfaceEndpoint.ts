import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Interface endpoint resource.
 */
export class InterfaceEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InterfaceEndpoint {
        return new InterfaceEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20190201:InterfaceEndpoint';

    /**
     * Returns true if the given object is an instance of InterfaceEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceEndpoint.__pulumiType;
    }

    /**
     * A reference to the service being brought into the virtual network.
     */
    public readonly endpointService!: pulumi.Output<types.outputs.EndpointServiceResponse | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
     */
    public readonly fqdn!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets an array of references to the network interfaces created for this interface endpoint.
     */
    public /*out*/ readonly networkInterfaces!: pulumi.Output<types.outputs.NetworkInterfaceResponse[]>;
    /**
     * A read-only property that identifies who created this interface endpoint.
     */
    public /*out*/ readonly owner!: pulumi.Output<string>;
    /**
     * The provisioning state of the interface endpoint. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    public readonly subnet!: pulumi.Output<types.outputs.SubnetResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a InterfaceEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["endpointService"] = args ? args.endpointService : undefined;
            resourceInputs["fqdn"] = args ? args.fqdn : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["interfaceEndpointName"] = args ? args.interfaceEndpointName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subnet"] = args ? args.subnet : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["endpointService"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:InterfaceEndpoint" }, { type: "azure-native:network/v20180801:InterfaceEndpoint" }, { type: "azure-native:network/v20181001:InterfaceEndpoint" }, { type: "azure-native:network/v20181101:InterfaceEndpoint" }, { type: "azure-native:network/v20181201:InterfaceEndpoint" }, { type: "azure-native:network/v20190401:InterfaceEndpoint" }, { type: "azure-native:network/v20190601:InterfaceEndpoint" }, { type: "azure-native:network/v20190701:InterfaceEndpoint" }, { type: "azure-native:network/v20190801:InterfaceEndpoint" }, { type: "azure-native:network/v20190901:InterfaceEndpoint" }, { type: "azure-native:network/v20191101:InterfaceEndpoint" }, { type: "azure-native:network/v20191201:InterfaceEndpoint" }, { type: "azure-native:network/v20200301:InterfaceEndpoint" }, { type: "azure-native:network/v20200401:InterfaceEndpoint" }, { type: "azure-native:network/v20200501:InterfaceEndpoint" }, { type: "azure-native:network/v20200601:InterfaceEndpoint" }, { type: "azure-native:network/v20200701:InterfaceEndpoint" }, { type: "azure-native:network/v20200801:InterfaceEndpoint" }, { type: "azure-native:network/v20201101:InterfaceEndpoint" }, { type: "azure-native:network/v20210201:InterfaceEndpoint" }, { type: "azure-native:network/v20210301:InterfaceEndpoint" }, { type: "azure-native:network/v20210501:InterfaceEndpoint" }, { type: "azure-native:network/v20210801:InterfaceEndpoint" }, { type: "azure-native:network/v20220101:InterfaceEndpoint" }, { type: "azure-native:network/v20220501:InterfaceEndpoint" }, { type: "azure-native:network/v20220701:InterfaceEndpoint" }, { type: "azure-native:network/v20220901:InterfaceEndpoint" }, { type: "azure-native:network/v20221101:InterfaceEndpoint" }, { type: "azure-native:network/v20230201:InterfaceEndpoint" }, { type: "azure-native:network/v20230401:InterfaceEndpoint" }, { type: "azure-native:network/v20230501:InterfaceEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(InterfaceEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a InterfaceEndpoint resource.
 */
export interface InterfaceEndpointArgs {
    /**
     * A reference to the service being brought into the virtual network.
     */
    endpointService?: pulumi.Input<types.inputs.EndpointServiceArgs>;
    /**
     * A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the interface endpoint.
     */
    interfaceEndpointName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    subnet?: pulumi.Input<types.inputs.SubnetArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
