import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Service Registry resource
 */
export class ServiceRegistry extends pulumi.CustomResource {
    /**
     * Get an existing ServiceRegistry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceRegistry {
        return new ServiceRegistry(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform/v20230701preview:ServiceRegistry';

    /**
     * Returns true if the given object is an instance of ServiceRegistry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceRegistry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceRegistry.__pulumiType;
    }

    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Service Registry properties payload
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.ServiceRegistryPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServiceRegistry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceRegistryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["serviceRegistryName"] = args ? args.serviceRegistryName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform:ServiceRegistry" }, { type: "azure-native:appplatform/v20220101preview:ServiceRegistry" }, { type: "azure-native:appplatform/v20220301preview:ServiceRegistry" }, { type: "azure-native:appplatform/v20220401:ServiceRegistry" }, { type: "azure-native:appplatform/v20220501preview:ServiceRegistry" }, { type: "azure-native:appplatform/v20220901preview:ServiceRegistry" }, { type: "azure-native:appplatform/v20221101preview:ServiceRegistry" }, { type: "azure-native:appplatform/v20221201:ServiceRegistry" }, { type: "azure-native:appplatform/v20230101preview:ServiceRegistry" }, { type: "azure-native:appplatform/v20230301preview:ServiceRegistry" }, { type: "azure-native:appplatform/v20230501preview:ServiceRegistry" }, { type: "azure-native:appplatform/v20230901preview:ServiceRegistry" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServiceRegistry.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServiceRegistry resource.
 */
export interface ServiceRegistryArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The name of Service Registry.
     */
    serviceRegistryName?: pulumi.Input<string>;
}
